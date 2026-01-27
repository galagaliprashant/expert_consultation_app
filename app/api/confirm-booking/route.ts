import { NextRequest, NextResponse } from 'next/server';

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

        // Step 1: Create Google Meet meeting
        const meetingResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001'}/api/schedule-meeting`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, date, time }),
        });

        if (!meetingResponse.ok) {
            const error = await meetingResponse.json();
            throw new Error(`Failed to schedule meeting: ${error.details || error.error}`);
        }

        const meetingData = await meetingResponse.json();
        const meetLink = meetingData.meetLink;

        // Step 2: Send WhatsApp notification
        const whatsappResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001'}/api/send-whatsapp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phone, name, date, time, meetLink }),
        });

        if (!whatsappResponse.ok) {
            const error = await whatsappResponse.json();
            console.error('WhatsApp notification failed:', error);
            // Don't fail the entire request if WhatsApp fails
            return NextResponse.json({
                success: true,
                meetLink: meetLink,
                eventId: meetingData.eventId,
                htmlLink: meetingData.htmlLink,
                whatsappSent: false,
                whatsappError: error.details || error.error,
            });
        }

        const whatsappData = await whatsappResponse.json();

        return NextResponse.json({
            success: true,
            meetLink: meetLink,
            eventId: meetingData.eventId,
            htmlLink: meetingData.htmlLink,
            whatsappSent: true,
            messageSid: whatsappData.messageSid,
        });
    } catch (error: any) {
        console.error('Error in booking confirmation:', error);
        return NextResponse.json(
            { error: 'Failed to complete booking', details: error.message },
            { status: 500 }
        );
    }
}
