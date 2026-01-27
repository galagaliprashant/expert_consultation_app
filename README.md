# ConsultPro - First-Time Client Consultation & Enquiry System

A comprehensive consultation and enquiry web application built with Next.js 14, Tailwind CSS, and TypeScript.

## 🚀 Features

### User Flow
1. **Entry Point** - Choose between predefined diet or personalized consultation
2. **Predefined Diet** - Quick access to general diet plans and cooking guidance
3. **Consultation Flow**:
   - User details capture with validation
   - Slot selection for consultation booking
   - Booking confirmation
   - Post-consultation feedback
   - Advance payment (only after positive feedback)
   - Access to premium services

### Key Highlights
- ✅ Deterministic, step-by-step user flow
- ✅ Payment only after positive consultation feedback
- ✅ Floating chatbot and call-back buttons
- ✅ Fully responsive, mobile-first design
- ✅ Type-safe with TypeScript
- ✅ Production-grade UI components

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Architecture**: Component-based, Server Components by default

## 📁 Project Structure

```
Client_cons_app/
├── app/
│   ├── layout.tsx                 # Root layout with header
│   ├── page.tsx                   # Home - Diet choice
│   ├── globals.css                # Global styles
│   ├── predefined-diet/
│   │   └── page.tsx              # Predefined diet plan
│   ├── user-details/
│   │   └── page.tsx              # User information form
│   ├── slot-selection/
│   │   └── page.tsx              # Consultation slot booking
│   ├── booking-confirmation/
│   │   └── page.tsx              # Booking success page
│   ├── feedback/
│   │   └── page.tsx              # Post-consultation feedback
│   ├── advance-payment/
│   │   └── page.tsx              # Payment processing
│   └── paid-options/
│       └── page.tsx              # Premium services
├── components/
│   └── FloatingButtons.tsx       # Chat & call-back buttons
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🎯 User Journey

### Path 1: Predefined Diet
```
Home → Predefined Diet → Done
```

### Path 2: Consultation Flow
```
Home → User Details → Slot Selection → Booking Confirmation → 
Feedback → [If Positive] → Advance Payment → Paid Options
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd "Client_cons_app"
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3003](http://localhost:3003) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎭 Demo Mode

For client demonstrations, the booking confirmation page includes a **demo mode** that bypasses API calls and displays mock success data.

### Enabling Demo Mode

In `app/booking-confirmation/page.tsx`, set:
```typescript
const DEMO_MODE = true;
```

### What Demo Mode Does
- ✅ Bypasses Google Calendar and Twilio API calls
- ✅ Shows realistic loading animation (1.5s)
- ✅ Displays mock Google Meet link
- ✅ Shows WhatsApp notification confirmation
- ✅ Prevents "fetch failed" errors during demos

### Disabling Demo Mode (Production)

When ready for production with real API integrations:
```typescript
const DEMO_MODE = false;
```

**Note**: Ensure Google Calendar and Twilio credentials are properly configured in `.env.local` before disabling demo mode.

## 🎨 UI Components

### Global Elements
- **Header**: Minimal header with app name (always visible)
- **Floating Chatbot**: Bottom-right chat support button
- **Floating Call Back**: Request call back button

### Pages
- **Home**: Large YES/NO buttons for diet choice
- **User Details**: Form with inline validation
- **Slot Selection**: Visual slot picker with date grouping
- **Booking Confirmation**: Success message with details
- **Feedback**: Positive/Negative feedback options
- **Payment**: Secure payment processing with status handling
- **Paid Options**: Premium service cards

## 🔒 Business Logic

### Payment Rules
- Payment is **only allowed** after:
  1. Consultation is completed
  2. User provides **positive** feedback
- Negative feedback ends the flow (no payment option)

### Data Flow
- User details stored in localStorage
- Selected slot stored in localStorage
- Feedback stored in localStorage
- Payment status tracked in localStorage

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly buttons and inputs
- Optimized for all screen sizes

## ♿ Accessibility

- Semantic HTML elements
- Proper ARIA labels
- Keyboard navigation support
- High contrast text
- Focus indicators

## 🎨 Color Scheme

- **Primary**: Blue (#0ea5e9 and variants)
- **Success**: Green (#10b981)
- **Warning**: Orange (#f97316)
- **Error**: Red (#ef4444)
- **Neutral**: Gray scale

## 📝 License

This project is private and proprietary.

## 👥 Support

For any queries or support, use the floating chat button in the application.

---

Built with ❤️ using Next.js 14 and Tailwind CSS
