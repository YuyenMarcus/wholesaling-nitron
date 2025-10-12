# 🚀 Quick Start Guide - Nitron Digital Wholesaling Site

## ✅ What's Built

Your complete wholesaling website with:
- 🎬 Animated hero section with GSAP
- 📊 Google Sheets lead integration
- 🤖 AI-optimized SEO schemas
- 💼 6 property deal listings
- 🌊 Smooth scrolling (Lenis)
- 📱 Fully responsive design

## 🏃 Getting Started (5 Minutes)

### 1. Start Development Server

```bash
cd wholesaling-site
npm run dev
```

Visit: **http://localhost:3000**

### 2. Set Up Google Sheets (10 Minutes)

Follow the complete guide: **[GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md)**

**Quick version:**
1. Create Google Sheet with headers: `Timestamp | Name | Phone | Address | Email | Message | Source`
2. Extensions → Apps Script → Paste the webhook code
3. Deploy → Web app → Copy URL
4. Add to `.env.local`: `LEADS_WEBHOOK_URL="your-url"`

### 3. Customize Branding

**Update contact info:**
- `app/lib/seoConfig.ts` - Phone, email, address
- `app/components/Footer.tsx` - Contact details
- `app/components/NavBar.tsx` - Logo

**Update colors (if needed):**
- `app/globals.css` - Theme colors already set to Nitron Digital brand

### 4. Add Property Images

Create folder: `public/images/`

Add images:
- `hero-bg.jpg` - Hero background (1920x1080)
- `pattern.svg` - Optional pattern overlay
- `rochester3br.jpg` - Property images for deals
- `doverduplex.jpg`
- etc.

### 5. Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production
vercel --prod
```

Add `LEADS_WEBHOOK_URL` in Vercel:
**Settings → Environment Variables**

## 📄 Page Structure

```
Homepage (/)           → Animated hero + dual CTA
├── Hero Section      → Lead form, animations
├── Services          → Sell vs Buy cards
├── Trust Stats       → 500+ homes, $50M+
├── Testimonials      → Customer reviews
├── How It Works      → 3-step process
└── CTA Section       → Final conversion push

Sell Page (/sell)      → Seller-focused landing
├── Hero              → Cash offer pitch
├── Benefits Grid     → 6 reasons to sell
├── Process Steps     → How to sell
├── Lead Form         → Detailed form
└── Trust Stats       → Social proof

Buy Page (/buy)        → Investor-focused
├── Hero              → Investment pitch
├── Features          → Why invest
├── Deal Listings     → 6 available properties
├── Investor Signup   → Buyers list form
└── Performance Stats → ROI metrics
```

## 🎨 Key Components

### Hero.tsx
Animated hero with inline lead form
```tsx
import Hero from './components/Hero';
```

### LeadForm.tsx
Detailed lead capture (used on /sell page)
```tsx
import LeadForm from './components/LeadForm';
```

### SplitText.tsx
Character-by-character text animation
```tsx
<SplitText delay={0.2}>Your Text</SplitText>
```

### StructuredData.tsx
SEO schemas (FAQ, HowTo, LocalBusiness)

### AiSchema.tsx
AI-optimized entity graph for ChatGPT/Gemini

## 🔧 Configuration Files

```
.env.local              → Local environment variables
.env.example            → Template for environment vars
tailwind.config.ts      → (Deleted - using CSS-based Tailwind v4)
postcss.config.mjs      → PostCSS config
next.config.ts          → Next.js configuration
tsconfig.json           → TypeScript config
package.json            → Dependencies
```

## 📊 Data Files

```
app/data/deals.ts       → Property listings
app/lib/seoConfig.ts    → SEO configurations
app/lib/seo.home.ts     → Homepage SEO
app/lib/seo.sell.ts     → Sell page SEO
app/lib/seo.buy.ts      → Buy page SEO
```

## 🎬 Animation System

```typescript
// Import utilities
import { fadeInUp, scrollFadeIn, staggerFadeIn } from '@/lib/animations/utils';

// Use in components
useEffect(() => {
  fadeInUp('.my-element', 0.2);      // Fade in from bottom
  scrollFadeIn('.scroll-element');    // Animate on scroll
  staggerFadeIn('.cards', 0.1);       // Stagger multiple elements
}, []);
```

## 📱 Testing Checklist

### Local Testing
- [ ] Homepage loads and animates
- [ ] Hero form submits successfully
- [ ] Google Sheets receives data
- [ ] /sell page displays correctly
- [ ] /buy page shows 6 deals
- [ ] Navigation works
- [ ] Footer links work
- [ ] Mobile responsive

### Production Testing
- [ ] All pages load on Vercel
- [ ] Forms submit in production
- [ ] Google Sheets integration works
- [ ] SEO meta tags are correct
- [ ] Images load properly
- [ ] Analytics tracking works
- [ ] SSL certificate active

## 🐛 Common Issues

### "Smooth scroll not working"
- Check `useSmoothScroll()` is called in layout
- Verify Lenis is installed: `npm install lenis`

### "Animations not triggering"
- Check GSAP is imported correctly
- Verify element selectors match
- Check browser console for errors

### "Google Sheets not receiving data"
- Verify `LEADS_WEBHOOK_URL` is set
- Check Apps Script deployment is "Anyone" access
- Test with Apps Script `testDoPost()` function

### "Build errors in production"
- Run `npm run build` locally first
- Check all environment variables are set
- Verify TypeScript errors are resolved

## 📖 Documentation Files

- **README.md** - Main project documentation
- **GOOGLE_SHEETS_SETUP.md** - Complete Google Sheets guide
- **ANIMATION_FRAMEWORK.md** - Animation system docs
- **DEPLOYMENT.md** - Vercel deployment guide
- **COMMANDS.md** - Quick command reference
- **PROJECT_SUMMARY.md** - Feature overview

## 🎯 Next Steps

### Immediate (Day 1)
1. ✅ Set up Google Sheets webhook
2. ✅ Test lead form submissions
3. ✅ Add your property images
4. ✅ Deploy to Vercel

### Short-term (Week 1)
1. ✅ Update contact information
2. ✅ Add real property listings
3. ✅ Set up Google Analytics
4. ✅ Configure custom domain

### Long-term (Month 1)
1. ✅ Add more property deals
2. ✅ Create blog content
3. ✅ Set up email automation
4. ✅ Add more testimonials
5. ✅ Implement reCAPTCHA

## 💡 Pro Tips

1. **Test locally first**: Always run `npm run build` before deploying
2. **Use preview deployments**: Test on Vercel preview URLs before production
3. **Monitor Google Sheets**: Set up email notifications for new leads
4. **Track conversions**: Use Google Analytics events
5. **A/B test**: Try different hero copy and CTAs

## 📞 Quick Commands

```bash
# Development
npm run dev              # Start dev server

# Building
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Check for errors

# Deployment
vercel                   # Deploy preview
vercel --prod            # Deploy production
vercel logs              # View logs

# Cleanup
rm -rf .next             # Clear Next.js cache
rm -rf node_modules      # Remove dependencies
npm install              # Reinstall
```

## 🎉 You're Ready!

Your Nitron Digital wholesaling site is production-ready with:
- ✅ Animated hero with lead capture
- ✅ Google Sheets integration
- ✅ SEO optimization for AI & Google
- ✅ 6 property deal listings
- ✅ Smooth animations & scrolling
- ✅ Mobile-responsive design

**Start the dev server and test it out:**
```bash
npm run dev
```

Visit: **http://localhost:3000** 🚀

---

Need help? Check the documentation files or contact support.


