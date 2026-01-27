# 🚀 Quick Start: Get Google Calendar Credentials

Follow these steps to get your Google Calendar API credentials working.

## ⏱️ Time Required: ~15 minutes

---

## Step 1: Create Google Cloud Project (3 minutes)

1. **Go to Google Cloud Console**: https://console.cloud.google.com/

2. **Create a new project**:
   - Click the project dropdown at the top
   - Click "New Project"
   - Name: `Consultation Booking` (or any name you like)
   - Click "Create"
   - Wait for the project to be created (takes ~30 seconds)

3. **Select your new project**:
   - Click the project dropdown again
   - Select your newly created project

---

## Step 2: Enable Google Calendar API (1 minute)

1. **Go to APIs & Services**:
   - In the left sidebar, click "APIs & Services" → "Library"
   - Or go directly to: https://console.cloud.google.com/apis/library

2. **Search for Calendar API**:
   - In the search box, type "Google Calendar API"
   - Click on "Google Calendar API"

3. **Enable the API**:
   - Click the blue "Enable" button
   - Wait for it to enable (~10 seconds)

---

## Step 3: Configure OAuth Consent Screen (3 minutes)

1. **Go to OAuth consent screen**:
   - Left sidebar: "APIs & Services" → "OAuth consent screen"
   - Or: https://console.cloud.google.com/apis/credentials/consent

2. **Choose User Type**:
   - Select "External"
   - Click "Create"

3. **Fill in App Information**:
   - **App name**: `Consultation Booking` (or your app name)
   - **User support email**: Your email address
   - **Developer contact information**: Your email address
   - Click "Save and Continue"

4. **Scopes** (Step 2):
   - Click "Add or Remove Scopes"
   - In the filter box, search for: `calendar`
   - Check these scopes:
     - ✅ `.../auth/calendar` - See, edit, share, and permanently delete all the calendars you can access using Google Calendar
     - ✅ `.../auth/calendar.events` - View and edit events on all your calendars
   - Click "Update"
   - Click "Save and Continue"

5. **Test Users** (Step 3):
   - Click "Add Users"
   - Add your Gmail address (the one you'll use for consultations)
   - Click "Add"
   - Click "Save and Continue"

6. **Summary** (Step 4):
   - Review and click "Back to Dashboard"

---

## Step 4: Create OAuth Credentials (2 minutes)

1. **Go to Credentials**:
   - Left sidebar: "APIs & Services" → "Credentials"
   - Or: https://console.cloud.google.com/apis/credentials

2. **Create OAuth Client ID**:
   - Click "+ Create Credentials" at the top
   - Select "OAuth client ID"

3. **Configure the OAuth client**:
   - **Application type**: Web application
   - **Name**: `Consultation Booking Web Client`
   - **Authorized redirect URIs**:
     - Click "+ Add URI"
     - Enter: `http://localhost:3001/api/auth/callback`
     - Click "Create"

4. **Save Your Credentials**:
   - A popup will show your credentials
   - **Copy the Client ID** - Save it somewhere safe
   - **Copy the Client Secret** - Save it somewhere safe
   - Click "OK"

---

## Step 5: Generate Refresh Token (5 minutes)

1. **Update the helper script**:
   - Open: `scripts/get-refresh-token.js`
   - Replace `YOUR_CLIENT_ID_HERE` with your actual Client ID
   - Replace `YOUR_CLIENT_SECRET_HERE` with your actual Client Secret
   - Save the file

2. **Run the script**:
   ```bash
   node scripts/get-refresh-token.js
   ```

3. **Authorize the app**:
   - The script will show a URL
   - Copy the URL and paste it in your browser
   - Sign in with your Google account (the one you added as a test user)
   - You'll see a warning "Google hasn't verified this app" - Click "Continue"
   - Click "Allow" to grant permissions
   - You'll be redirected to a page that says "Cannot GET /api/auth/callback"
   - **This is normal!** Look at the URL in your browser

4. **Copy the authorization code**:
   - The URL will look like: `http://localhost:3001/api/auth/callback?code=4/0AY0e-g7...`
   - Copy everything after `code=` (the long string)
   - Paste it in the terminal where the script is waiting
   - Press Enter

5. **Save the Refresh Token**:
   - The script will output your tokens
   - **Copy the Refresh Token** (the long string after "Refresh Token:")
   - Save it somewhere safe

---

## Step 6: Update .env.local (1 minute)

1. **Open `.env.local`** in your project

2. **Replace the placeholder values**:
   ```env
   GOOGLE_CLIENT_ID=paste_your_client_id_here
   GOOGLE_CLIENT_SECRET=paste_your_client_secret_here
   GOOGLE_REDIRECT_URI=http://localhost:3001/api/auth/callback
   GOOGLE_REFRESH_TOKEN=paste_your_refresh_token_here
   ```

3. **Save the file**

4. **Restart your dev server**:
   - Stop it: Press Ctrl+C in the terminal
   - Start it: `npm run dev`

---

## Step 7: Test It! (2 minutes)

1. **Go to your app**: http://localhost:3001

2. **Complete the booking flow**:
   - Fill in your details (use your real email)
   - Select a time slot
   - Confirm booking

3. **Check for success**:
   - ✅ You should see the Google Meet link on the confirmation page
   - ✅ Check your Gmail - you should have a calendar invite
   - ✅ The error should be gone!

---

## 🎉 Success Checklist

After completing all steps, you should have:

- ✅ Google Cloud project created
- ✅ Calendar API enabled
- ✅ OAuth consent screen configured
- ✅ OAuth credentials created
- ✅ Refresh token generated
- ✅ `.env.local` updated with real credentials
- ✅ Dev server restarted
- ✅ Google Meet link appears on booking confirmation
- ✅ Calendar invite received in email

---

## 🐛 Troubleshooting

### "Google hasn't verified this app" warning
- **This is normal for development!**
- Click "Continue" (Advanced) → "Go to [Your App Name] (unsafe)"
- This warning won't appear in production after verification

### "Access blocked: This app's request is invalid"
- Make sure you added your email as a test user in OAuth consent screen
- Try using the exact email you added

### "Redirect URI mismatch"
- Make sure the redirect URI in Google Cloud Console is exactly: `http://localhost:3001/api/auth/callback`
- No trailing slash!

### "Invalid refresh token"
- Generate a new refresh token using the script
- Make sure you copied the entire token (it's very long)

### Still getting errors?
- Check that all environment variables are filled in
- Make sure there are no extra spaces in the values
- Restart the dev server after any changes to `.env.local`

---

## 📝 Notes

- **Free Tier**: Google Calendar API is free for up to 1 million requests/day
- **Security**: Never commit `.env.local` to git (it's already in `.gitignore`)
- **Production**: For production, you'll need to verify your OAuth app with Google

---

## Next: WhatsApp Setup

Once Google Calendar is working, you can set up WhatsApp notifications:
1. Sign up for Twilio
2. Get WhatsApp sandbox credentials
3. Update `.env.local` with Twilio credentials
4. Test the full flow!

See `SETUP_GUIDE.md` for detailed WhatsApp setup instructions.

---

**Need more help?** See the full `SETUP_GUIDE.md` for detailed explanations.
