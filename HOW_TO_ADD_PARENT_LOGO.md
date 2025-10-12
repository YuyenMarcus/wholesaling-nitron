# 🎨 How to Add Parent Company Logo to Loading Screen

## Quick Guide (30 seconds)

### Step 1: Add Your Logo File

Place your parent company logo in the `/public` folder:

```
wholesaling-site/
  public/
    ├── parent-company-logo.svg     ← Your logo here (SVG recommended)
    ├── parent-company-logo.png     ← Or PNG/JPG
    └── logo.svg                    ← Current placeholder
```

### Step 2: Update the Path

**File**: `app/components/LoadingScreen.tsx`  
**Line**: 90

Change:
```tsx
src="/logo.svg"
```

To:
```tsx
src="/parent-company-logo.svg"
```

Or whatever you named your file!

### Step 3: Refresh Browser

Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

**Done!** Your parent company logo now shows in the loading animation.

---

## 📁 Supported File Formats

### Best → Good → OK

1. **SVG** (Best) ✅
   - Scales perfectly at any size
   - Small file size
   - Crisp on all screens
   - **Recommended!**

2. **PNG** (Good) ✅
   - Supports transparency
   - Use high resolution (512x512 minimum)
   - Keep under 200KB

3. **JPG/JPEG** (OK) ⚠️
   - No transparency (will have background)
   - Smaller file size
   - Use only if necessary

4. **WebP** (Good) ✅
   - Modern format
   - Small size + good quality
   - Not all browsers (but Next.js handles it)

---

## 🎨 Logo Sizing Examples

### Current Setting (Default)
```tsx
<div className="w-32 h-32 mx-auto">
  {/* 128px × 128px */}
</div>
```

### Smaller Logo
```tsx
<div className="w-24 h-24 mx-auto">
  {/* 96px × 96px */}
</div>
```

### Larger Logo
```tsx
<div className="w-40 h-40 mx-auto">
  {/* 160px × 160px */}
</div>
```

### Extra Large (Dramatic)
```tsx
<div className="w-48 h-48 mx-auto">
  {/* 192px × 192px */}
</div>
```

---

## 🎯 Complete Customization Examples

### Example 1: Different Logo + Different Company Name

```tsx
// In LoadingScreen.tsx, lines 89-110

<img 
  src="/acme-corp-logo.svg" 
  alt="ACME Corporation"
  className="w-full h-full object-contain drop-shadow-2xl"
/>

<div ref={textRef}>
  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
    ACME Corporation
  </h1>
  <p className="text-lg text-blue-100">
    Powering Nitron Digital
  </p>
</div>
```

### Example 2: Logo Only (No Text)

```tsx
<img 
  src="/parent-logo.svg" 
  alt="Parent Company"
  className="w-full h-full object-contain drop-shadow-2xl"
/>

{/* Remove or comment out the textRef section */}
```

### Example 3: Text-Only (No Logo Image)

```tsx
// Comment out the img tag, uncomment the text div:

<div className="text-7xl font-bold text-white">
  ACME
</div>

<div ref={textRef}>
  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
    ACME Corporation
  </h1>
  <p className="text-lg text-blue-100">
    Real Estate Solutions
  </p>
</div>
```

### Example 4: Parent Logo + Subsidiary Relationship

```tsx
<img 
  src="/parent-company-logo.svg" 
  alt="Parent Company Logo"
  className="w-full h-full object-contain drop-shadow-2xl"
/>

<div ref={textRef}>
  <p className="text-sm text-blue-200 uppercase tracking-wider mb-2">
    A Division of ACME Corp
  </p>
  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
    Nitron Digital
  </h1>
  <p className="text-lg text-blue-100">
    Real Estate Investments
  </p>
</div>
```

---

## 🎨 Logo Background Options

### Transparent Logo (Current)
```tsx
<img 
  src="/logo.svg" 
  alt="Logo"
  className="w-full h-full object-contain drop-shadow-2xl"
/>
```

### Logo with White Background Circle
```tsx
<div className="w-32 h-32 mx-auto bg-white rounded-full shadow-2xl flex items-center justify-center p-6">
  <img 
    src="/logo.svg" 
    alt="Logo"
    className="w-full h-full object-contain"
  />
</div>
```

### Logo with Colored Background
```tsx
<div className="w-32 h-32 mx-auto bg-accent rounded-2xl shadow-2xl flex items-center justify-center p-6">
  <img 
    src="/logo.svg" 
    alt="Logo"
    className="w-full h-full object-contain"
  />
</div>
```

### Logo with Gradient Background
```tsx
<div className="w-32 h-32 mx-auto bg-gradient-to-br from-white to-gray-200 rounded-2xl shadow-2xl flex items-center justify-center p-6">
  <img 
    src="/logo.svg" 
    alt="Logo"
    className="w-full h-full object-contain"
  />
</div>
```

---

## 📐 Logo Aspect Ratios

### Square Logo (1:1) - Best for Loading Screen
```
Example: 512×512px
└── Fits perfectly, no distortion
```

### Horizontal Logo (16:9 or 2:1)
```tsx
<div className="w-48 h-24 mx-auto">
  <img 
    src="/wide-logo.svg" 
    className="w-full h-full object-contain"
  />
</div>
```

### Vertical Logo (1:2)
```tsx
<div className="w-24 h-48 mx-auto">
  <img 
    src="/tall-logo.svg" 
    className="w-full h-full object-contain"
  />
</div>
```

---

## 🎬 Advanced: Animated Logo

### Rotate Animation
```tsx
// Add to useEffect in LoadingScreen.tsx
tl.to(logoRef.current, {
  rotation: 360,
  duration: 1,
  ease: 'power2.inOut'
}, 0);
```

### Pulse Animation
```tsx
// Add pulse class to logo container
<div className="w-32 h-32 mx-auto animate-pulse">
  <img src="/logo.svg" />
</div>
```

### Scale In/Out
```tsx
// Modify existing animation in useEffect
tl.fromTo(
  logoRef.current,
  { scale: 0.5, opacity: 0 },
  { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
)
```

---

## 🐛 Troubleshooting

### Logo Not Showing

**1. Check file path**
```bash
# File should be in public folder:
public/parent-logo.svg  ← Correct
public/images/logo.svg  ← Update path to "/images/logo.svg"
src/logo.svg            ← Wrong location
```

**2. Check file name in code matches actual file**
```tsx
src="/parent-logo.svg"  ← Code
parent-logo.svg         ← File name must match exactly
```

**3. Hard refresh browser**
- Windows: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`
- Or clear cache

### Logo Looks Distorted

**Use `object-contain` instead of `object-cover`:**
```tsx
className="w-full h-full object-contain"  ← Maintains aspect ratio
```

### Logo Too Small/Large

**Adjust container size:**
```tsx
<div className="w-40 h-40 mx-auto">  ← Make larger
<div className="w-24 h-24 mx-auto">  ← Make smaller
```

### Logo Has Wrong Colors (SVG)

**SVG inherits colors from CSS. To prevent this:**
```tsx
<img 
  src="/logo.svg"
  className="w-full h-full"
  style={{ filter: 'none' }}  ← Prevents color changes
/>
```

### Logo Background Not Transparent (PNG)

- Export PNG with transparency enabled
- Or add white background in code:
```tsx
<div className="w-32 h-32 mx-auto bg-white rounded-2xl p-4">
  <img src="/logo.png" />
</div>
```

---

## 📊 Logo File Optimization

### Before Adding Logo, Optimize It:

**For SVG:**
1. Use [SVGOMG](https://jakearchibald.github.io/svgomg/)
2. Remove unnecessary metadata
3. Simplify paths if possible
4. Target: < 50KB

**For PNG:**
1. Use [TinyPNG](https://tinypng.com/)
2. Resize to 512×512px (or your display size × 2)
3. Save with transparency
4. Target: < 100KB

**For JPG:**
1. Use [Squoosh](https://squoosh.app/)
2. Resize appropriately
3. Quality: 80-85%
4. Target: < 80KB

---

## 🎯 Quick Reference

| Task | File | Line | Change |
|------|------|------|--------|
| **Change logo path** | LoadingScreen.tsx | 90 | `src="/your-logo.svg"` |
| **Change company name** | LoadingScreen.tsx | 104-106 | Edit text |
| **Change logo size** | LoadingScreen.tsx | 87 | `className="w-XX h-XX"` |
| **Add background** | LoadingScreen.tsx | 87 | Add `bg-white rounded-xl` |

---

## 📁 File Locations

```
wholesaling-site/
  app/
    components/
      LoadingScreen.tsx        ← Edit this file
  public/
    logo.svg                   ← Replace or add your logo here
    parent-company-logo.svg    ← Your parent company logo
    parent-company-logo.png    ← Alternative format
```

---

## ✅ Quick Checklist

- [ ] Parent company logo file in `/public` folder
- [ ] Updated path in LoadingScreen.tsx (line 90)
- [ ] Changed company name (line 104-106) if needed
- [ ] Logo file optimized (< 200KB)
- [ ] Hard refreshed browser to see changes
- [ ] Tested on mobile

---

## 💡 Pro Tips

1. **Use SVG** - Looks perfect on all screens
2. **Keep it simple** - Loading screens should be quick
3. **Optimize files** - Faster loading = better UX
4. **Test transparency** - Make sure logo looks good on gradient background
5. **Square logos work best** - Easier to size consistently

---

**Need Help?** Check the full [LOADING_ANIMATION_GUIDE.md](./LOADING_ANIMATION_GUIDE.md) for more options!

**Current File**: Your logo should be at `public/logo.svg` or `public/parent-company-logo.svg`

**After adding your logo**: Hard refresh (`Ctrl+Shift+R`) to see it!

