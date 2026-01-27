# 🎯 Automatic Google Meet & WhatsApp Integration

## Overview

This feature automatically:
- ✅ Creates a Google Meet meeting when a booking is confirmed
- ✅ Sends a calendar invite to the client's email
- ✅ Sends a WhatsApp message with the meeting link
- ✅ Displays the meeting link on the confirmation page

## Quick Start

### 1. Install Dependencies (Already Done)
```bash
npm install googleapis twilio
```

### 2. Set Up Environment Variables

Copy the example file:
```bash
cp .env.local.example .env.local
```

Then fill in your credentials in `.env.local`.

### 3. Get Your Credentials

#### Google Calendar API:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project and enable Google Calendar API
3. Create OAuth 2.0 credentials
4. Run the helper script to get refresh token:
   ```bash
   node scripts/get-refresh-token.js
   ```

#### Twilio WhatsApp:
1. Sign up at [Twilio](https://www.twilio.com/)
2. Get your Account SID and Auth Token
3. For testing, use the WhatsApp Sandbox

**📖 See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed instructions**

## How It Works

### User Flow:
1. User fills in details (name, email, phone)
2. User selects a time slot
3. User confirms booking
4. **Automatic magic happens:**
   - Google Meet meeting is created
   - Calendar invite sent to email
   - WhatsApp message sent to phone
   - Meeting link displayed on screen

### Architecture Diagram:

![Booking Flow Architecture](./docs/booking_flow_diagram.png)

### Technical Flow:
```
Booking Confirmation Page
    ↓
/api/confirm-booking
    ↓
├─→ /api/schedule-meeting (Google Calendar)
│   └─→ Creates event with Google Meet link
│
└─→ /api/send-whatsapp (Twilio)
    └─→ Sends WhatsApp message with link
```

## API Routes

### `/api/confirm-booking` (Main endpoint)
Orchestrates the entire booking confirmation process.

### `/api/schedule-meeting`
Creates Google Calendar event with Google Meet link.

### `/api/send-whatsapp`
Sends WhatsApp notification to the client.

## Files Created

```
app/
├── api/
│   ├── confirm-booking/
│   │   └── route.ts          # Main booking confirmation endpoint
│   ├── schedule-meeting/
│   │   └── route.ts          # Google Calendar integration
│   └── send-whatsapp/
│       └── route.ts          # WhatsApp messaging
│
├── booking-confirmation/
│   └── page.tsx              # Updated with auto-scheduling
│
scripts/
└── get-refresh-token.js      # Helper to get Google refresh token

.env.local.example            # Environment variables template
SETUP_GUIDE.md               # Detailed setup instructions
INTEGRATION_README.md        # This file
```

## Testing

### Test Mode (Using Sandbox):
1. Join Twilio WhatsApp Sandbox
2. Use your own email and phone number
3. Go through the booking flow
4. Check your email and WhatsApp

### What to Verify:
- [ ] Google Calendar event created
- [ ] Email invitation received
- [ ] WhatsApp message received
- [ ] Meeting link works
- [ ] Meeting link displayed on confirmation page

## Environment Variables Required

```env
# Google Calendar
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
GOOGLE_REDIRECT_URI=...
GOOGLE_REFRESH_TOKEN=...

# Twilio WhatsApp
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_WHATSAPP_NUMBER=...

# App Config
NEXT_PUBLIC_BASE_URL=...
```

## Troubleshooting

### "Cannot find module 'autoprefixer'" Error
✅ Fixed! We installed autoprefixer.

### Google Calendar API Errors
- Ensure API is enabled in Google Cloud Console
- Check refresh token is valid
- Verify OAuth consent screen is configured

### WhatsApp Not Sending
- For sandbox: Join the sandbox first
- Check phone number format (+91XXXXXXXXXX)
- Verify Twilio credentials

### Meeting Link Not Showing
- Check browser console for errors
- Verify API responses in Network tab
- Check server logs for backend errors

## Production Deployment

### Before Going Live:
1. ✅ Get production Twilio WhatsApp number
2. ✅ Submit WhatsApp Business Profile
3. ✅ Create approved message templates
4. ✅ Update environment variables on hosting platform
5. ✅ Test with real users
6. ✅ Enable rate limiting
7. ✅ Set up error monitoring

### Security Checklist:
- [ ] All secrets in environment variables
- [ ] No API keys in client-side code
- [ ] HTTPS enabled
- [ ] Input validation on all endpoints
- [ ] Rate limiting configured
- [ ] Error messages don't expose sensitive info

## Customization

### Change WhatsApp Message Format:
Edit `app/api/send-whatsapp/route.ts`, line ~30

### Change Meeting Duration:
Edit `app/api/schedule-meeting/route.ts`, line ~40

### Change Timezone:
Edit `app/api/schedule-meeting/route.ts`, line ~45

### Add Email Notifications:
You can add SendGrid or similar service to send custom emails.

## Support

For detailed setup instructions, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)

## Next Steps

1. ✅ Code is ready
2. ⏳ Get Google Calendar credentials
3. ⏳ Get Twilio credentials
4. ⏳ Configure .env.local
5. ⏳ Test the integration
6. ⏳ Deploy to production

---

**Note**: The integration is fully implemented and ready to use once you configure the API credentials!
