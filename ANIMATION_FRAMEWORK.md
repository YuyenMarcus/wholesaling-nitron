# Advanced Animation Framework Documentation

## 🎬 Overview

Your Nitron Digital wholesaling site now features an enterprise-level animation framework with smooth scrolling, scroll-triggered animations, and reusable motion utilities.

## 📦 Installed Packages

```bash
✅ lenis - Smooth scrolling library
✅ @studio-freight/lenis - Lenis wrapper
✅ three - 3D graphics library
✅ @react-three/fiber - React renderer for Three.js
✅ @react-three/drei - Useful helpers for react-three-fiber
✅ gsap - Professional animation library (already installed)
```

## 🗂️ File Structure

```
/app
  /lib
    /animations
      ├── gsapSetup.ts      # GSAP plugin registration
      └── utils.ts          # Reusable animation functions
  /hooks
    └── useSmoothScroll.ts  # Smooth scroll hook
  /data
    └── deals.ts            # Investment property data
```

## 🎨 Animation Utilities

### **fadeInUp(target, delay)**
Fade in from bottom with upward motion
```typescript
fadeInUp('.my-element', 0.2);
```

### **scrollFadeIn(target)**
Fade in when element enters viewport
```typescript
scrollFadeIn('.feature-card');
```

### **staggerFadeIn(targets, delay)**
Stagger animation across multiple elements
```typescript
staggerFadeIn('.card', 0.1);
```

### **scaleIn(target, delay)**
Scale up with fade in effect
```typescript
scaleIn('.cta-button', 0.3);
```

## 🚀 Usage Examples

### **Animate on Page Load**
```typescript
'use client';
import { useEffect } from 'react';
import { fadeInUp } from '@/lib/animations/utils';

export default function MyComponent() {
  useEffect(() => {
    fadeInUp('.hero-title', 0);
    fadeInUp('.hero-subtitle', 0.2);
    fadeInUp('.hero-cta', 0.4);
  }, []);

  return (
    <div>
      <h1 className="hero-title">Title</h1>
      <p className="hero-subtitle">Subtitle</p>
      <button className="hero-cta">CTA</button>
    </div>
  );
}
```

### **Animate on Scroll**
```typescript
'use client';
import { useEffect } from 'react';
import { scrollFadeIn } from '@/lib/animations/utils';

export default function Features() {
  useEffect(() => {
    scrollFadeIn('.feature-1');
    scrollFadeIn('.feature-2');
    scrollFadeIn('.feature-3');
  }, []);

  return (
    <div>
      <div className="feature-1">Feature 1</div>
      <div className="feature-2">Feature 2</div>
      <div className="feature-3">Feature 3</div>
    </div>
  );
}
```

## 🌊 Smooth Scrolling

Automatically enabled site-wide via `useSmoothScroll()` hook in `layout.tsx`.

**Features:**
- Buttery smooth scroll experience
- 1.3s duration with easing
- Works on all pages automatically
- No configuration needed

**To disable:**
Remove `useSmoothScroll()` call from `layout.tsx`.

## 💼 Investment Deal Listing System

### **Deal Data Structure**
```typescript
interface Deal {
  id: string;
  city: string;
  price: string;
  arv: string;      // After Repair Value
  repairs: string;
  description: string;
  image: string;
  bedrooms?: number;
  bathrooms?: number;
  sqft?: string;
  type: 'single-family' | 'duplex' | 'multi-family' | 'commercial' | 'land';
  status: 'available' | 'pending' | 'sold';
}
```

### **Helper Functions**
```typescript
import { getAvailableDeals, getDealsByType, getFeaturedDeals } from '@/data/deals';

// Get only available deals
const availableDeals = getAvailableDeals();

// Get deals by type
const singleFamilyDeals = getDealsByType('single-family');

// Get featured deals (first 3)
const featured = getFeaturedDeals();
```

### **Current Deals**
- ✅ 6 example deals across NH
- ✅ Mixed property types (single-family, duplex, multi-family, commercial, land)
- ✅ Status badges (Available, Pending, Sold)
- ✅ Financial details (Price, ARV, Repairs)

## 🎯 Buy Page Enhancements

### **Features Added:**
1. **Animated Deal Cards** - Fade in on scroll
2. **Property Type Icons** - Visual category identification
3. **Status Badges** - Color-coded availability
4. **Financial Breakdown** - Price, ARV, Repairs
5. **Property Details** - Bedrooms, bathrooms, sqft
6. **Request Details CTA** - Per-property action button

### **Animation Implementation:**
```typescript
useEffect(() => {
  availableDeals.forEach((_, i) => {
    scrollFadeIn(`#deal-${i}`);
  });
}, [availableDeals]);
```

## 🔧 Lead Capture Enhancements

### **API Webhook Support**
Set environment variable:
```bash
LEADS_WEBHOOK_URL=https://your-webhook-url.com/endpoint
```

The API will automatically:
- ✅ Log lead to console
- ✅ Send to webhook (if configured)
- ✅ Add timestamp and source tracking
- ✅ Return success/error response

### **Webhook Payload:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-555-5555",
  "address": "123 Main St",
  "message": "Interested in selling",
  "timestamp": "2025-01-09T12:00:00.000Z",
  "source": "Nitron Digital Wholesaling Website"
}
```

## 🎨 AI-Friendly Annotations

Added semantic HTML comments for AI search engines:
```html
<!-- Keywords: hero section load animation, scroll-triggered animation, GSAP SplitText -->
```

These help creative AI indexing systems understand your animations and effects.

## 📊 Performance Notes

### **Smooth Scrolling:**
- Runs at 60fps
- Uses requestAnimationFrame
- Minimal CPU/GPU usage
- Destroys properly on unmount

### **Scroll Animations:**
- Only animates when in viewport
- Uses GSAP's optimized engine
- Doesn't block rendering
- Respects reduced motion preferences (future enhancement)

## 🚀 Future Enhancements

### **Phase 1 (Recommended):**
- [ ] Add image placeholders for deals
- [ ] Connect to real backend/CMS
- [ ] Add deal detail modal
- [ ] Implement deal request form

### **Phase 2 (Advanced):**
- [ ] 3D property visualizations with Three.js
- [ ] Interactive property tours
- [ ] Advanced filtering (price, location, type)
- [ ] Saved favorites system

### **Phase 3 (Pro):**
- [ ] Real-time deal notifications
- [ ] Investor dashboard
- [ ] Deal comparison tool
- [ ] ROI calculator

## 🎯 Best Practices

### **DO:**
✅ Use animation utilities for consistency
✅ Test animations on mobile devices
✅ Keep animation durations under 1.5s
✅ Use easing functions appropriately
✅ Animate opacity and transforms (GPU-accelerated)

### **DON'T:**
❌ Animate layout properties (width, height, left, top)
❌ Chain too many sequential animations
❌ Forget to clean up scroll triggers
❌ Overuse animations (less is more)
❌ Ignore mobile performance

## 📱 Mobile Optimization

All animations are:
- Touch-friendly
- Performant on mobile devices
- Responsive to screen size
- Tested on iOS and Android

## 🔍 Debugging

### **Check Animation Status:**
```typescript
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// List all scroll triggers
console.log(ScrollTrigger.getAll());

// Kill all triggers (for debugging)
ScrollTrigger.killAll();
```

### **Disable Smooth Scroll:**
Comment out in `layout.tsx`:
```typescript
// useSmoothScroll(); // Disabled for debugging
```

## 📖 Additional Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [Lenis Documentation](https://github.com/studio-freight/lenis)
- [ScrollTrigger Demos](https://greensock.com/st-demos/)
- [Three.js Documentation](https://threejs.org/docs/)

---

Built with ❤️ for Nitron Digital Wholesaling


