# Google Meet & WhatsApp Integration Setup Guide

This guide will help you set up automatic Google Meet scheduling and WhatsApp notifications for your consultation booking system.

## Features

✅ Automatically creates Google Meet meetings
✅ Sends calendar invites to client's email
✅ Sends WhatsApp notification with meeting link
✅ Displays meeting link on confirmation page
✅ Copy-to-clipboard functionality

## Prerequisites

- Google Cloud Platform account
- Twilio account (for WhatsApp)
- Gmail account for calendar management

---

## Part 1: Google Calendar API Setup

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Name your project (e.g., "Consultation Booking")
4. Click "Create"

### Step 2: Enable Google Calendar API

1. In your project, go to "APIs & Services" → "Library"
2. Search for "Google Calendar API"
3. Click on it and press "Enable"

### Step 3: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth client ID"
3. If prompted, configure the OAuth consent screen:
   - User Type: External
   - App name: Your app name
   - User support email: Your email
   - Developer contact: Your email
   - Add scopes: `https://www.googleapis.com/auth/calendar`
4. Back to "Create OAuth client ID":
   - Application type: Web application
   - Name: Consultation Booking
   - Authorized redirect URIs: `http://localhost:3001/api/auth/callback`
5. Click "Create"
6. **Save your Client ID and Client Secret**

### Step 4: Get Refresh Token

You need to generate a refresh token. Here's a simple way:

1. Create a file `get-refresh-token.js` in your project root:

```javascript
const { google } = require('googleapis');
const readline = require('readline');

const oauth2Client = new google.auth.OAuth2(
  'YOUR_CLIENT_ID',
  'YOUR_CLIENT_SECRET',
  'http://localhost:3001/api/auth/callback'
);

const scopes = ['https://www.googleapis.com/auth/calendar'];

const url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
});

console.log('Authorize this app by visiting this url:', url);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the code from that page here: ', (code) => {
  rl.close();
  oauth2Client.getToken(code, (err, token) => {
    if (err) return console.error('Error retrieving access token', err);
    console.log('Your refresh token is:', token.refresh_token);
  });
});
```

2. Run: `node get-refresh-token.js`
3. Visit the URL shown
4. Authorize the app
5. Copy the code from the redirect URL
6. Paste it in the terminal
7. **Save the refresh token**

---

## Part 2: Twilio WhatsApp Setup

### Step 1: Create Twilio Account

1. Go to [Twilio](https://www.twilio.com/try-twilio)
2. Sign up for a free account
3. Verify your email and phone number

### Step 2: Get WhatsApp Sandbox (For Testing)

1. In Twilio Console, go to "Messaging" → "Try it out" → "Send a WhatsApp message"
2. Follow the instructions to join your WhatsApp sandbox:
   - Send the provided code (e.g., "join <your-code>") to the Twilio WhatsApp number
3. Note down:
   - **Account SID** (found in Console Dashboard)
   - **Auth Token** (found in Console Dashboard)
   - **WhatsApp Number** (e.g., `whatsapp:+14155238886`)

### Step 3: Production Setup (Optional)

For production, you'll need:
1. A Twilio phone number with WhatsApp enabled
2. WhatsApp Business Profile approval
3. Message template approval

---

## Part 3: Environment Configuration

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Fill in your credentials in `.env.local`:

```env
# Google Calendar API
GOOGLE_CLIENT_ID=your_actual_client_id
GOOGLE_CLIENT_SECRET=your_actual_client_secret
GOOGLE_REDIRECT_URI=http://localhost:3001/api/auth/callback
GOOGLE_REFRESH_TOKEN=your_actual_refresh_token

# Twilio WhatsApp
TWILIO_ACCOUNT_SID=your_actual_account_sid
TWILIO_AUTH_TOKEN=your_actual_auth_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886

# App Config
NEXT_PUBLIC_BASE_URL=http://localhost:3001
```

3. **Important**: Never commit `.env.local` to git!

---

## Part 4: Testing

### Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go through the booking flow:
   - Enter user details (use a real email and phone number you control)
   - Select a time slot
   - Confirm booking

3. Check:
   - ✅ Google Calendar event created
   - ✅ Email invitation received
   - ✅ WhatsApp message received
   - ✅ Meeting link displayed on confirmation page

### Troubleshooting

**Google Calendar API Errors:**
- Ensure the API is enabled in Google Cloud Console
- Check that your refresh token is valid
- Verify the calendar email has permission to create events

**WhatsApp Errors:**
- For sandbox: Ensure you've joined the sandbox with your phone
- Check that phone number format is correct (+91XXXXXXXXXX for India)
- Verify Twilio credentials are correct

**General Errors:**
- Check browser console for frontend errors
- Check terminal for backend errors
- Ensure all environment variables are set

---

## Part 5: Production Deployment

### Environment Variables

When deploying to production (Vercel, Netlify, etc.):

1. Add all environment variables to your hosting platform
2. Update `NEXT_PUBLIC_BASE_URL` to your production URL
3. Update `GOOGLE_REDIRECT_URI` if needed

### Security Considerations

- ✅ Never expose API keys in client-side code
- ✅ Use environment variables for all secrets
- ✅ Enable rate limiting on API routes
- ✅ Validate all user inputs
- ✅ Use HTTPS in production

### WhatsApp Production

For production WhatsApp:
1. Get Twilio phone number with WhatsApp
2. Submit WhatsApp Business Profile for approval
3. Create and submit message templates
4. Update the message format to use approved templates

---

## API Endpoints

### `/api/schedule-meeting` (POST)
Creates a Google Calendar event with Google Meet link.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919876543210",
  "date": "2026-01-20",
  "time": "10:00"
}
```

**Response:**
```json
{
  "success": true,
  "meetLink": "https://meet.google.com/xxx-yyyy-zzz",
  "eventId": "event_id",
  "htmlLink": "https://calendar.google.com/..."
}
```

### `/api/send-whatsapp` (POST)
Sends WhatsApp message with meeting details.

**Request:**
```json
{
  "phone": "+919876543210",
  "name": "John Doe",
  "date": "2026-01-20",
  "time": "10:00",
  "meetLink": "https://meet.google.com/xxx-yyyy-zzz"
}
```

**Response:**
```json
{
  "success": true,
  "messageSid": "SM...",
  "status": "queued"
}
```

### `/api/confirm-booking` (POST)
Combined endpoint that schedules meeting and sends WhatsApp.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919876543210",
  "date": "2026-01-20",
  "time": "10:00"
}
```

**Response:**
```json
{
  "success": true,
  "meetLink": "https://meet.google.com/xxx-yyyy-zzz",
  "eventId": "event_id",
  "htmlLink": "https://calendar.google.com/...",
  "whatsappSent": true,
  "messageSid": "SM..."
}
```

---

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review the API documentation
3. Check Twilio and Google Cloud Console logs

## License

This integration is part of your consultation booking system.
