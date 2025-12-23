# The Griffiths Law Office - Next.js Website

A high-performance legal website built with Next.js, Tailwind CSS, and Framer Motion, deployed on Vercel.

## 🚀 Tech Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Vercel** for deployment

## 🎨 Design System

### Color Palette
- **Background:** `#111111` (Near Black)
- **Accent:** `#FFD700` (Caution Yellow/Gold)
- **Text:** `#F3F4F6` (Off-white)
- **Secondary BG:** `#1a1a1a` (Dark Charcoal)

### Typography
- Font: Geist Sans (Next.js default)
- Mobile-first responsive design
- Bold, aggressive styling for legal authority

## 📁 Project Structure

```
grifflaw/
├── app/
│   ├── page.tsx              # Home page
│   ├── attorney/
│   │   └── page.tsx          # Attorney bio page
│   ├── war-room/
│   │   └── page.tsx          # Pro Se resource center
│   ├── contact/
│   │   └── page.tsx          # Contact page with map
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navigation.tsx        # Main navigation
│   ├── FloatingActionButton.tsx  # FAB for scheduling
│   ├── SchedulerModal.tsx    # Cal.com scheduler modal
│   └── ReviewTicker.tsx      # Scrolling reviews
├── public/                   # Static assets
└── .devcontainer/            # Codespace configuration
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/cyserman/grifflaw.git
   cd grifflaw
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📅 Cal.com Integration

### Setting Up the Scheduler

1. **Sign up at Cal.com**
   - Create account at https://cal.com
   
2. **Create Event Type**
   - Name: "Free Consultation"
   - Duration: 30 minutes
   - Buffer time as needed

3. **Configure SMS Notifications**
   - Go to Settings → Notifications
   - Add phone number: Steve's iPhone
   - Enable "New Booking" notifications
   - Custom message: "New Lead: [Name] booked a consult"

4. **Get Embed Code**
   - Go to your event type
   - Click "Embed" button
   - Copy the embed code

5. **Update SchedulerModal Component**
   - Edit `components/SchedulerModal.tsx`
   - Replace placeholder with Cal.com embed code
   - Example:
     ```tsx
     <Cal calLink="your-username/consultation" />
     ```

### Alternative: Calendly Integration

If using Calendly instead:
1. Create Calendly account
2. Set up event type
3. Copy embed link
4. Update SchedulerModal with iframe:
   ```tsx
   <iframe src="https://calendly.com/your-link" />
   ```

## 🌐 Vercel Deployment

### Current Deployment
- **Vercel URL:** `grifflaw-local.vercel.app`
- **Custom Domain:** `Griflaw.com` (purchased)

### Connecting Custom Domain

1. **In Vercel Dashboard**
   - Go to your project settings
   - Navigate to "Domains"
   - Click "Add Domain"
   - Enter: `griflaw.com`

2. **Configure DNS (at domain registrar)**
   - Add A record: `@` → `76.76.21.21`
   - Add CNAME: `www` → `cname.vercel-dns.com`

3. **Add www subdomain**
   - In Vercel, also add `www.griflaw.com`
   - Set up redirect from www to apex domain

4. **Wait for propagation**
   - DNS changes can take 24-48 hours
   - Vercel will auto-provision SSL certificate

### Environment Variables (if needed)

Create `.env.local` file:
```env
NEXT_PUBLIC_CAL_LINK=your-cal-com-username/consultation
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your-key (if using custom maps)
```

## 📈 SEO & Marketing

### Google Business Profile

**Business Name:** The Griffiths Law Office

**Business Description:**
```
The Griffiths Law Office provides aggressive legal defense in Chester County and Montgomery County, PA. Attorney Steve Griffiths brings 20+ years of courtroom experience to criminal defense, family law, divorce, child custody, and civil litigation cases. Unlike large firms, when you hire Steve, you get Steve—no junior associates. Serving Phoenixville, PA and surrounding areas. Free consultation available. Call now for criminal defense, DUI, divorce, custody, and Pro Se legal support.
```

**Categories:**
- Criminal Defense Attorney
- Family Law Attorney
- Divorce Lawyer
- DUI Lawyer

**Keywords to Target:**
- Divorce lawyer Phoenixville
- Criminal defense Chester County
- Family law Montgomery County
- DUI lawyer PA
- Custody attorney Phoenixville
- Phoenixville lawyer
- Chester County defense attorney

### Facebook Ad Campaign ($50 Budget)

**Campaign Name:** Holiday Legal Blitz

**Targeting:**
- Location: 5-mile radius of Phoenixville, PA 19460
- Age: 25-65
- Interests: Legal services, family issues, criminal justice

**Ad Creative:**

**Headline:** Legal Trouble Doesn't Take a Holiday

**Primary Text:**
```
Facing criminal charges? Going through a divorce? Custody dispute?

Don't wait until it's too late. Attorney Steve Griffiths has 20+ years defending clients in Chester & Montgomery County.

✅ Free Consultation
✅ Direct Access - No Junior Lawyers
✅ Aggressive Defense
✅ Located in Phoenixville

Swing for the Fences with Griffiths Law.

Click to schedule your free consultation today.
```

**Call-to-Action Button:** Schedule Now / Learn More

**Landing Page:** https://griflaw.com/contact

### Meta Tags (already implemented in layout.tsx)

```tsx
title: "The Griffiths Law Office | Criminal Defense & Family Law | Phoenixville, PA"
description: "20+ years defending clients in Chester & Montgomery County..."
keywords: "divorce lawyer Phoenixville, criminal defense Chester County..."
```

## 📱 Mobile-First Design

- Optimized for iPhone (Steve's primary device)
- Touch-friendly buttons and navigation
- Fast loading on mobile data
- Sticky navigation for easy access
- Floating action button for quick consultation booking

## 🔒 Legal Disclaimer

Add to footer or separate page:
```
The information on this website is for general information purposes only. 
Nothing on this site should be taken as legal advice for any individual 
case or situation. This information is not intended to create, and receipt 
or viewing does not constitute, an attorney-client relationship.
```

## 📞 Contact Information

**Office Address:**
1457 Riverwood Ln
Phoenixville, PA 19460

**Phone:** (555) 555-1234 _(Update with real number)_
**Email:** steve@griflaw.com

## 🎯 Next Steps

1. ✅ Next.js site built with all required features
2. ⏳ Set up Cal.com account and embed scheduler
3. ⏳ Connect Griflaw.com domain to Vercel
4. ⏳ Update contact information (phone/email)
5. ⏳ Add real reviews to ReviewTicker component
6. ⏳ Upload actual court documents to War Room
7. ⏳ Set up Google Business Profile
8. ⏳ Launch Facebook Ad campaign
9. ⏳ Enable form submissions (contact form backend)
10. ⏳ Add analytics (Google Analytics or Vercel Analytics)

## 📄 License

© 2024 The Griffiths Law Office. All rights reserved.
