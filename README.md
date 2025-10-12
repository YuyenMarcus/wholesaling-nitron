# WholesalePro - Real Estate Wholesaling Website

A modern, high-performance Next.js 15 website for real estate wholesaling businesses. Features animated hero sections, lead capture forms, and separate flows for home sellers and property investors.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with GSAP animations
- **SEO Optimized**: Comprehensive SEO setup with next-seo and structured data
- **Lead Generation**: Validated forms with CRM integration hooks
- **Dual Funnel**: Separate paths for sellers and buyers
- **TypeScript**: Fully typed for better developer experience
- **Tailwind CSS**: Utility-first styling for rapid development
- **Performance**: Built with Next.js 15 for optimal performance

## 📁 Project Structure

```
/app
  /components
    SplitText.tsx           # Custom GSAP text animation component
    AnimatedHero.tsx        # Hero section with scroll animations
    LeadForm.tsx           # Seller lead form with validation
    NavBar.tsx             # Responsive navigation
    Footer.tsx             # Footer with contact info
  /lib
    seoConfig.ts           # SEO configuration and structured data
  /sell
    page.tsx               # "Sell Your Home Fast" landing page
  /buy
    page.tsx               # "Find Off-Market Deals" page
  /api
    /leads
      route.ts             # API endpoint for form submissions
  layout.tsx               # Root layout with NavBar and Footer
  page.tsx                 # Homepage with dual CTA
  globals.css              # Global styles
```

## 🛠️ Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **GSAP**: Professional-grade animation library
- **Lucide React**: Beautiful icon library
- **next-seo**: SEO optimization
- **classnames**: Conditional CSS classes

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd wholesaling-site
```

2. Install dependencies (already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🌐 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally (if not already installed):
```bash
npm install -g vercel
```

2. Deploy from the project directory:
```bash
vercel
```

3. Follow the prompts:
   - Link to existing project or create new
   - Confirm project settings
   - Wait for deployment to complete

4. For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

## 🔧 Configuration

### SEO Configuration

Edit `app/lib/seoConfig.ts` to customize:
- Site title and description
- Keywords for SEO
- Open Graph metadata
- Twitter cards
- Structured data (JSON-LD)

### CRM Integration

To integrate with your CRM, edit `app/api/leads/route.ts`:

```typescript
// Example: HubSpot Integration
const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    properties: {
      firstname: name.split(' ')[0],
      lastname: name.split(' ').slice(1).join(' '),
      email,
      phone,
      address,
    }
  })
});
```

### Environment Variables

Create a `.env.local` file for sensitive data:

```env
# CRM API Keys
HUBSPOT_API_KEY=your_api_key_here
SALESFORCE_API_KEY=your_api_key_here

# Email Service
SENDGRID_API_KEY=your_api_key_here
EMAIL_TO=leads@yourcompany.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📝 Customization Guide

### Update Branding

1. **Logo & Company Name**: Edit `NavBar.tsx` and `Footer.tsx`
2. **Colors**: Modify Tailwind classes (current theme uses blue-600)
3. **Contact Info**: Update `Footer.tsx` and `seoConfig.ts`

### Add New Pages

Create new route folders in `/app`:
```bash
mkdir app/about
touch app/about/page.tsx
```

### Modify Animations

Adjust GSAP animations in:
- `SplitText.tsx`: Character animation timing
- `AnimatedHero.tsx`: Scroll-triggered effects

## 🎨 Tailwind Customization

Extend the Tailwind theme in `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#your-color',
          secondary: '#your-color',
        }
      }
    }
  }
}
```

## 📊 Analytics & Tracking

Add Google Analytics to `app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
```

## 🧪 Testing

Run ESLint:
```bash
npm run lint
```

Build for production:
```bash
npm run build
```

## 📱 Performance Optimizations

- **Image Optimization**: Use Next.js `Image` component
- **Code Splitting**: Automatic with Next.js App Router
- **Font Optimization**: Using `next/font` for web fonts
- **SEO**: Metadata API and structured data
- **Caching**: Vercel Edge Network caching

## 🔒 Security Best Practices

1. Never commit API keys (use `.env.local`)
2. Validate all form inputs server-side
3. Use CORS protection on API routes
4. Implement rate limiting for form submissions
5. Add CAPTCHA for spam prevention

## 📈 Next Steps

1. ✅ Set up CRM integration
2. ✅ Add Google Analytics
3. ✅ Configure email notifications
4. ✅ Add reCAPTCHA to forms
5. ✅ Set up custom domain in Vercel
6. ✅ Create additional landing pages (testimonials, FAQ, etc.)
7. ✅ Implement A/B testing
8. ✅ Add blog/content section for SEO

## 🤝 Support

For issues or questions:
- Check Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel support: [vercel.com/support](https://vercel.com/support)
- GSAP docs: [greensock.com/docs](https://greensock.com/docs)

## 📄 License

This project is for commercial use. Customize as needed for your business.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
