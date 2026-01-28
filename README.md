# 💼 ConsultPro - Expert Consultation & Booking System

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2.14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan?logo=tailwindcss)
![License](https://img.shields.io/badge/License-Proprietary-red)

**A comprehensive first-time client consultation and enquiry web application**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [User Flow](#-user-journey) • [Documentation](#-documentation)

</div>

---

## 📖 About

**ConsultPro** is a modern, deterministic consultation booking system designed for nutrition and health consultants. It provides a seamless experience for first-time clients to either access predefined diet plans or book personalized consultations with integrated calendar scheduling and automated notifications.

### 🎯 Key Highlights

- ✅ **Deterministic User Flow** - Clear, step-by-step journey from entry to completion
- ✅ **Smart Payment Logic** - Payment only after positive consultation feedback
- ✅ **Automated Scheduling** - Google Calendar integration for appointment booking
- ✅ **WhatsApp Notifications** - Automated booking confirmations via Twilio
- ✅ **Demo Mode** - Client presentation mode without API dependencies
- ✅ **Mobile-First Design** - Fully responsive across all devices
- ✅ **Type-Safe** - Built with TypeScript for reliability
- ✅ **Production-Ready** - Professional UI with accessibility features

---

## ✨ Features

### 🎨 User Experience

#### **Entry Point**
- Clean, modern landing page
- Two clear pathways: Predefined Diet or Personalized Consultation
- Floating chatbot and call-back buttons for instant support

#### **Predefined Diet Path**
- Quick access to expertly crafted diet plans
- Cooking guidance and meal suggestions
- No consultation booking required
- Instant access to resources

#### **Personalized Consultation Flow**
1. **User Details Capture**
   - Form with real-time validation
   - Name, email, phone, health goals
   - Dietary preferences and restrictions
   
2. **Slot Selection**
   - Visual calendar interface
   - Available time slots grouped by date
   - Instant booking confirmation
   
3. **Booking Confirmation**
   - Google Meet link generation
   - WhatsApp notification sent
   - Calendar invite created
   - Booking details summary
   
4. **Post-Consultation Feedback**
   - Positive/Negative feedback options
   - Conditional flow based on response
   
5. **Advance Payment** (Only after positive feedback)
   - Secure payment processing
   - Multiple payment options
   - Payment status tracking
   
6. **Premium Services Access**
   - Exclusive content and resources
   - Personalized meal plans
   - Ongoing support options

### 🔧 Technical Features

- **Google Calendar API** - Automated appointment scheduling
- **Twilio WhatsApp API** - Instant booking notifications
- **LocalStorage** - Client-side data persistence
- **Form Validation** - Real-time input validation
- **Error Handling** - Graceful error states and fallbacks
- **Loading States** - Smooth loading animations
- **Responsive Design** - Mobile, tablet, and desktop optimized

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 3.4
- **Architecture**: Server Components by default

### Integrations
- **Calendar**: Google Calendar API
- **Messaging**: Twilio WhatsApp Business API
- **Storage**: Browser LocalStorage

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **Type Checking**: TypeScript Compiler

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ installed
- **npm** package manager
- **Google Cloud Account** (for Calendar API)
- **Twilio Account** (for WhatsApp notifications)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/galagaliprashant/expert_consultation_app.git
   cd expert_consultation_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Google Calendar API
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GOOGLE_REFRESH_TOKEN=your_refresh_token
   GOOGLE_CALENDAR_ID=your_calendar_id

   # Twilio WhatsApp
   TWILIO_ACCOUNT_SID=your_twilio_account_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   Navigate to http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

---

## 🎭 Demo Mode

For client demonstrations without API dependencies, the app includes a **demo mode**.

### Enabling Demo Mode

In `app/booking-confirmation/page.tsx`, set:
```typescript
const DEMO_MODE = true;
```

### What Demo Mode Does

- ✅ Bypasses Google Calendar API calls
- ✅ Bypasses Twilio WhatsApp API calls
- ✅ Shows realistic loading animation (1.5s)
- ✅ Displays mock Google Meet link
- ✅ Shows WhatsApp notification confirmation
- ✅ Prevents "fetch failed" errors during demos
- ✅ Perfect for client presentations

### Disabling Demo Mode (Production)

```typescript
const DEMO_MODE = false;
```

**Important**: Ensure all API credentials are configured in `.env.local` before disabling demo mode.

---

## 🗺️ User Journey

### Path 1: Quick Diet Access
```
Home → Predefined Diet → Browse Plans → Done
```

### Path 2: Full Consultation Flow
```
Home → User Details → Slot Selection → Booking Confirmation → 
[Wait for Consultation] → Feedback → 
[If Positive] → Advance Payment → Premium Services
[If Negative] → End
```

### Flow Diagram

```
┌─────────────┐
│    Home     │
│  (Choice)   │
└──────┬──────┘
       │
       ├─── YES ──→ Predefined Diet ──→ END
       │
       └─── NO ──→ User Details
                        │
                        ↓
                   Slot Selection
                        │
                        ↓
                Booking Confirmation
                        │
                        ↓
                  [Consultation]
                        │
                        ↓
                    Feedback
                        │
                   ┌────┴────┐
                   │         │
              Positive   Negative
                   │         │
                   ↓         └──→ END
            Advance Payment
                   │
                   ↓
            Premium Services
```

---

## 📂 Project Structure

```
expert_consultation_app/
├── app/
│   ├── layout.tsx                    # Root layout with header
│   ├── page.tsx                      # Home - Diet choice
│   ├── globals.css                   # Global styles & Tailwind
│   ├── api/
│   │   ├── schedule-meeting/
│   │   │   └── route.ts             # Google Calendar API
│   │   ├── send-whatsapp/
│   │   │   └── route.ts             # Twilio WhatsApp API
│   │   └── confirm-booking/
│   │       └── route.ts             # Combined booking endpoint
│   ├── predefined-diet/
│   │   └── page.tsx                 # Predefined diet plans
│   ├── user-details/
│   │   └── page.tsx                 # User information form
│   ├── slot-selection/
│   │   └── page.tsx                 # Consultation slot booking
│   ├── booking-confirmation/
│   │   └── page.tsx                 # Booking success page
│   ├── feedback/
│   │   └── page.tsx                 # Post-consultation feedback
│   ├── advance-payment/
│   │   └── page.tsx                 # Payment processing
│   └── paid-options/
│       └── page.tsx                 # Premium services
├── components/
│   └── FloatingButtons.tsx          # Chat & call-back buttons
├── scripts/
│   └── get-refresh-token.js         # Google OAuth helper
├── docs/
│   ├── IMPLEMENTATION_SUMMARY.md    # Implementation details
│   ├── INTEGRATION_README.md        # API integration guide
│   ├── SETUP_GUIDE.md               # Setup instructions
│   ├── SETUP_CHECKLIST.md           # Pre-deployment checklist
│   └── QUICK_START.md               # Quick start guide
├── .env.local.example               # Environment variables template
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript configuration
├── tailwind.config.ts               # Tailwind configuration
└── next.config.mjs                  # Next.js configuration
```

---

## 🎨 Design System

### Color Palette
- **Primary**: Blue (`#0ea5e9`) - Trust and professionalism
- **Success**: Green (`#10b981`) - Positive actions
- **Warning**: Orange (`#f97316`) - Alerts
- **Error**: Red (`#ef4444`) - Errors and negative feedback
- **Neutral**: Gray scale - Text and backgrounds

### Typography
- **Font Family**: System fonts (optimized for performance)
- **Headings**: Bold, clear hierarchy
- **Body**: Readable, accessible contrast

### Components
- **Buttons**: Large, touch-friendly (min 48px)
- **Forms**: Inline validation, clear error states
- **Cards**: Subtle shadows, rounded corners
- **Modals**: Centered, backdrop blur

---

## 🔒 Business Logic

### Payment Rules

Payment is **only allowed** after:
1. ✅ Consultation is completed
2. ✅ User provides **positive** feedback

**Negative feedback** → Flow ends (no payment option)

### Data Persistence

- **User Details**: Stored in localStorage
- **Selected Slot**: Stored in localStorage
- **Feedback**: Stored in localStorage
- **Payment Status**: Tracked in localStorage

### API Integration

- **Google Calendar**: Creates calendar events with Meet links
- **Twilio WhatsApp**: Sends booking confirmations
- **Error Handling**: Graceful fallbacks for API failures

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach
- Touch-friendly buttons (min 48px)
- Optimized forms for mobile input
- Readable text sizes (min 16px)
- No horizontal scrolling

---

## ♿ Accessibility

- ✅ Semantic HTML elements
- ✅ Proper ARIA labels
- ✅ Keyboard navigation support
- ✅ High contrast text (WCAG AA compliant)
- ✅ Focus indicators
- ✅ Screen reader friendly

---

## 📚 Documentation

### Available Guides

- **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** - Detailed implementation overview
- **[INTEGRATION_README.md](./INTEGRATION_README.md)** - API integration guide
- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Complete setup instructions
- **[SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md)** - Pre-deployment checklist
- **[QUICK_START.md](./QUICK_START.md)** - Quick start guide

---

## 🔧 API Setup

### Google Calendar API

1. **Create Google Cloud Project**
2. **Enable Google Calendar API**
3. **Create OAuth 2.0 Credentials**
4. **Generate Refresh Token**
   ```bash
   node scripts/get-refresh-token.js
   ```
5. **Add credentials to `.env.local`**

See [INTEGRATION_README.md](./INTEGRATION_README.md) for detailed instructions.

### Twilio WhatsApp API

1. **Create Twilio Account**
2. **Set up WhatsApp Sandbox** (for testing)
3. **Get Account SID and Auth Token**
4. **Add credentials to `.env.local`**

See [INTEGRATION_README.md](./INTEGRATION_README.md) for detailed instructions.

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] Home page loads correctly
- [ ] Predefined diet path works
- [ ] User details form validates correctly
- [ ] Slot selection displays available slots
- [ ] Booking confirmation shows correct details
- [ ] Google Meet link is generated (or mock in demo mode)
- [ ] WhatsApp notification is sent (or mock in demo mode)
- [ ] Feedback page displays after consultation
- [ ] Payment page only shows after positive feedback
- [ ] Premium services accessible after payment
- [ ] Floating buttons work on all pages
- [ ] Mobile responsive on all screen sizes

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Add Environment Variables**
   - Add all variables from `.env.local`
   - Deploy

4. **Your app is live!**
   ```
   https://your-app.vercel.app
   ```

### Deploy to Netlify

```bash
npm run build
netlify deploy --prod
```

---

## 🐛 Troubleshooting

### Common Issues

**Issue**: "Failed to fetch" error on booking confirmation

**Solution**: 
- Check if demo mode is enabled
- Verify API credentials in `.env.local`
- Check API endpoint URLs

**Issue**: WhatsApp notification not received

**Solution**:
- Verify Twilio credentials
- Check WhatsApp sandbox setup
- Ensure phone number is in correct format

**Issue**: Calendar event not created

**Solution**:
- Verify Google Calendar API is enabled
- Check refresh token is valid
- Ensure calendar ID is correct

---

## 🗺️ Roadmap

### Phase 1 - Current Features ✅
- [x] User flow implementation
- [x] Google Calendar integration
- [x] WhatsApp notifications
- [x] Demo mode
- [x] Responsive design

### Phase 2 - Enhancements
- [ ] User authentication
- [ ] Admin dashboard
- [ ] Appointment rescheduling
- [ ] Email notifications
- [ ] Payment gateway integration (Stripe/Razorpay)

### Phase 3 - Advanced Features
- [ ] Multi-consultant support
- [ ] Video consultation integration
- [ ] Automated reminders
- [ ] Analytics dashboard
- [ ] Client portal

---

## 📄 License

This project is **proprietary** and confidential. All rights reserved.

---

## 👥 Support

For any queries or support:
- Use the floating chat button in the application
- Request a call-back via the floating button
- Email: support@consultpro.com

---

## 🙏 Acknowledgments

- **Next.js Team** - Amazing framework
- **Tailwind CSS** - Utility-first CSS framework
- **Google Calendar API** - Scheduling integration
- **Twilio** - WhatsApp messaging platform

---

<div align="center">

**Built with ❤️ by ParamBhaav Technologies**

[GitHub](https://github.com/galagaliprashant/expert_consultation_app) • [Report Bug](https://github.com/galagaliprashant/expert_consultation_app/issues) • [Request Feature](https://github.com/galagaliprashant/expert_consultation_app/issues)

</div>
