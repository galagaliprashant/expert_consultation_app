const { google } = require('googleapis');
const readline = require('readline');

// Replace these with your actual credentials from Google Cloud Console
const CLIENT_ID = 'YOUR_CLIENT_ID_HERE';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET_HERE';
const REDIRECT_URI = 'http://localhost:3001/api/auth/callback';

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

const scopes = [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events',
];

const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
    prompt: 'consent', // Force to get refresh token
});

console.log('\n===========================================');
console.log('Google Calendar API - Refresh Token Generator');
console.log('===========================================\n');
console.log('Step 1: Authorize this app by visiting this URL:\n');
console.log(url);
console.log('\n');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Step 2: Enter the authorization code from the redirect URL: ', (code) => {
    rl.close();

    oauth2Client.getToken(code, (err, token) => {
        if (err) {
            console.error('\n❌ Error retrieving access token:', err);
            return;
        }

        console.log('\n✅ Success! Your tokens:\n');
        console.log('Access Token:', token.access_token);
        console.log('\nRefresh Token:', token.refresh_token);
        console.log('\n===========================================');
        console.log('Copy the REFRESH TOKEN above and add it to your .env.local file');
        console.log('===========================================\n');
    });
});
