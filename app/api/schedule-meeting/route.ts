import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
);

// Set credentials - you'll need to get a refresh token
oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, date, time } = body;

        // Validate required fields
        if (!name || !email || !phone || !date || !time) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Parse date and time
        const [hours, minutes] = time.split(':');
        const startDateTime = new Date(date);
        startDateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);

        // Set end time (1 hour consultation)
        const endDateTime = new Date(startDateTime);
        endDateTime.setHours(startDateTime.getHours() + 1);

        const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

        // Create calendar event with Google Meet
        const event = {
            summary: `Nutrition Consultation - ${name}`,
            description: `Consultation with ${name}\nPhone: ${phone}\nEmail: ${email}`,
            start: {
                dateTime: startDateTime.toISOString(),
                timeZone: 'Asia/Kolkata', // Change to your timezone
            },
            end: {
                dateTime: endDateTime.toISOString(),
                timeZone: 'Asia/Kolkata',
            },
            attendees: [
                { email: email, displayName: name },
            ],
            conferenceData: {
                createRequest: {
                    requestId: `consultation-${Date.now()}`,
                    conferenceSolutionKey: { type: 'hangoutsMeet' },
                },
            },
            reminders: {
                useDefault: false,
                overrides: [
                    { method: 'email', minutes: 24 * 60 }, // 1 day before
                    { method: 'popup', minutes: 30 }, // 30 minutes before
                ],
            },
        };

        const response = await calendar.events.insert({
            calendarId: 'primary',
            conferenceDataVersion: 1,
            sendUpdates: 'all',
            requestBody: event,
        });

        const meetLink = response.data.conferenceData?.entryPoints?.find(
            (entry) => entry.entryPointType === 'video'
        )?.uri;

        return NextResponse.json({
            success: true,
            meetLink: meetLink,
            eventId: response.data.id,
            htmlLink: response.data.htmlLink,
        });
    } catch (error: any) {
        console.error('Error creating calendar event:', error);
        return NextResponse.json(
            { error: 'Failed to create meeting', details: error.message },
            { status: 500 }
        );
    }
}
