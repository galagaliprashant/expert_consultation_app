# 📋 Setup Checklist

Use this checklist to track your progress in setting up the Google Meet & WhatsApp integration.

## ✅ Phase 1: Google Calendar API Setup

### Google Cloud Console
- [ ] Create Google Cloud project
- [ ] Enable Google Calendar API
- [ ] Configure OAuth consent screen
  - [ ] Set app name
  - [ ] Add your email
  - [ ] Add calendar scope
- [ ] Create OAuth 2.0 credentials
  - [ ] Application type: Web application
  - [ ] Add redirect URI: `http://localhost:3001/api/auth/callback`
- [ ] Save Client ID
- [ ] Save Client Secret

### Generate Refresh Token
- [ ] Update `scripts/get-refresh-token.js` with your Client ID and Secret
- [ ] Run: `node scripts/get-refresh-token.js`
- [ ] Visit the authorization URL
- [ ] Authorize the app
- [ ] Copy the authorization code
- [ ] Paste code in terminal
- [ ] Save the refresh token

---

## ✅ Phase 2: Twilio WhatsApp Setup

### Twilio Account
- [ ] Sign up at https://www.twilio.com/
- [ ] Verify your email
- [ ] Verify your phone number
- [ ] Note your Account SID (from Dashboard)
- [ ] Note your Auth Token (from Dashboard)

### WhatsApp Sandbox (For Testing)
- [ ] Go to Messaging → Try it out → Send a WhatsApp message
- [ ] Send the join code to Twilio's WhatsApp number
  - Example: Send "join <your-code>" to +1 415 523 8886
- [ ] Confirm you received the welcome message
- [ ] Note the WhatsApp number (e.g., `whatsapp:+14155238886`)

### Production WhatsApp (Optional - For Later)
- [ ] Get Twilio phone number with WhatsApp capability
- [ ] Submit WhatsApp Business Profile
- [ ] Create message templates
- [ ] Get templates approved

---

## ✅ Phase 3: Environment Configuration

### Create .env.local File
- [ ] Copy `.env.local.example` to `.env.local`
  ```bash
  cp .env.local.example .env.local
  ```

### Fill in Google Calendar Variables
- [ ] `GOOGLE_CLIENT_ID=` (from Google Cloud Console)
- [ ] `GOOGLE_CLIENT_SECRET=` (from Google Cloud Console)
- [ ] `GOOGLE_REDIRECT_URI=http://localhost:3001/api/auth/callback`
- [ ] `GOOGLE_REFRESH_TOKEN=` (from refresh token script)

### Fill in Twilio Variables
- [ ] `TWILIO_ACCOUNT_SID=` (from Twilio Dashboard)
- [ ] `TWILIO_AUTH_TOKEN=` (from Twilio Dashboard)
- [ ] `TWILIO_WHATSAPP_NUMBER=` (e.g., `whatsapp:+14155238886`)

### Fill in App Variables
- [ ] `NEXT_PUBLIC_BASE_URL=http://localhost:3001`

### Verify Configuration
- [ ] All variables are filled in
- [ ] No placeholder values remain
- [ ] File is saved
- [ ] File is NOT committed to git (should be in .gitignore)

---

## ✅ Phase 4: Testing

### Restart Development Server
- [ ] Stop the current dev server (Ctrl+C)
- [ ] Start it again: `npm run dev`
- [ ] Server starts without errors
- [ ] Navigate to http://localhost:3001

### Test the Booking Flow
- [ ] Fill in user details
  - [ ] Use your real name
  - [ ] Use your real phone number (that joined WhatsApp sandbox)
  - [ ] Use your real email address
- [ ] Select a time slot
  - [ ] Choose a date
  - [ ] Choose a time
- [ ] Confirm the booking
- [ ] See loading spinner
- [ ] See success message

### Verify Integration Works
- [ ] Google Meet link is displayed on screen
- [ ] "WhatsApp notification sent!" badge appears
- [ ] Can copy meeting link to clipboard

### Check Email
- [ ] Received calendar invite
- [ ] Event has correct date and time
- [ ] Event has Google Meet link
- [ ] Can add to calendar

### Check WhatsApp
- [ ] Received WhatsApp message
- [ ] Message has correct details
- [ ] Message has Google Meet link
- [ ] Link is clickable

### Test the Meeting Link
- [ ] Click the Google Meet link
- [ ] Meeting room opens
- [ ] Can join the meeting

---

## ✅ Phase 5: Error Handling

### Test Error Scenarios
- [ ] Try with invalid email → See error message
- [ ] Try with invalid phone → See error message
- [ ] Disconnect internet → See error message
- [ ] Error messages are user-friendly
- [ ] Can retry after error

---

## ✅ Phase 6: Production Preparation (When Ready)

### Code Review
- [ ] Review all API routes
- [ ] Check error handling
- [ ] Verify input validation
- [ ] Test edge cases

### Security Check
- [ ] No API keys in client code
- [ ] All secrets in environment variables
- [ ] .env.local in .gitignore
- [ ] No sensitive data logged

### Production Twilio
- [ ] Get production WhatsApp number
- [ ] Submit Business Profile
- [ ] Create message templates
- [ ] Get templates approved
- [ ] Update environment variables

### Deployment
- [ ] Choose hosting platform (Vercel, Netlify, etc.)
- [ ] Add environment variables to platform
- [ ] Update `NEXT_PUBLIC_BASE_URL` to production URL
- [ ] Update `GOOGLE_REDIRECT_URI` if needed
- [ ] Deploy application
- [ ] Test in production

### Monitoring
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Set up logging
- [ ] Monitor API usage
- [ ] Monitor costs (Twilio)

---

## 📊 Progress Tracker

**Phase 1 - Google Calendar**: ⬜ Not Started | 🟡 In Progress | ✅ Complete
**Phase 2 - Twilio WhatsApp**: ⬜ Not Started | 🟡 In Progress | ✅ Complete
**Phase 3 - Configuration**: ⬜ Not Started | 🟡 In Progress | ✅ Complete
**Phase 4 - Testing**: ⬜ Not Started | 🟡 In Progress | ✅ Complete
**Phase 5 - Error Handling**: ⬜ Not Started | 🟡 In Progress | ✅ Complete
**Phase 6 - Production**: ⬜ Not Started | 🟡 In Progress | ✅ Complete

---

## 🆘 Need Help?

- **Setup Issues**: See `SETUP_GUIDE.md`
- **Quick Reference**: See `INTEGRATION_README.md`
- **Overview**: See `IMPLEMENTATION_SUMMARY.md`
- **Google Calendar API**: https://developers.google.com/calendar
- **Twilio Docs**: https://www.twilio.com/docs/whatsapp

---

## 🎉 When Everything Works

You should see:
✅ Booking confirmation page loads
✅ Loading spinner appears
✅ Google Meet link created
✅ Calendar invite in email
✅ WhatsApp message received
✅ Success screen with meeting link
✅ Copy button works
✅ WhatsApp badge shows

**Congratulations! Your integration is working! 🎊**

---

**Last Updated**: January 18, 2026
**Status**: Ready for Configuration
