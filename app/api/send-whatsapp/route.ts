import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER; // Format: whatsapp:+14155238886

const client = twilio(accountSid, authToken);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { phone, name, date, time, meetLink } = body;

        // Validate required fields
        if (!phone || !name || !date || !time || !meetLink) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Format phone number for WhatsApp (must include country code)
        // Assuming Indian number, adjust as needed
        const formattedPhone = phone.startsWith('+')
            ? `whatsapp:${phone}`
            : `whatsapp:+91${phone}`;

        // Format date
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        // Create message
        const message = `
🎉 *Booking Confirmed!*

Hi ${name},

Your nutrition consultation has been successfully scheduled!

📅 *Date:* ${formattedDate}
🕐 *Time:* ${time}

🔗 *Google Meet Link:*
${meetLink}

💡 *What to do next:*
1. Add this meeting to your calendar
2. Join the meeting 5 minutes early
3. Keep your health goals and questions ready

We look forward to helping you achieve your health goals! 🌟

If you need to reschedule, please contact us.

_This is an automated message from your nutrition consultation service._
        `.trim();

        // Send WhatsApp message
        const twilioMessage = await client.messages.create({
            body: message,
            from: twilioWhatsAppNumber,
            to: formattedPhone,
        });

        return NextResponse.json({
            success: true,
            messageSid: twilioMessage.sid,
            status: twilioMessage.status,
        });
    } catch (error: any) {
        console.error('Error sending WhatsApp message:', error);
        return NextResponse.json(
            {
                error: 'Failed to send WhatsApp message',
                details: error.message,
                code: error.code
            },
            { status: 500 }
        );
    }
}
