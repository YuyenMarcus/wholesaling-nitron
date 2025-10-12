# 🎨 Two Logos Setup Guide

## Overview
Your site uses **TWO different logos** for different purposes:

1. **Parent Company Logo** - Loading screen
2. **Nitron Digital Logo** - Header/NavBar

---

## 📁 Where to Add Your Logos

### Logo Locations

```
wholesaling-site/
  public/
    ├── logo.svg                    ← Parent company logo (loading screen)
    ├── nitron-logo.svg            ← Nitron Digital logo (header/navbar)
    └── images/
```

---

## 🎯 Logo 1: Parent Company Logo

### Used In: Loading Screen
**File Path**: `/public/logo.svg`

**Where it appears:**
- Loading animation when site first loads
- Shows for ~2.5 seconds
- White background
- Centered, large display

**Component**: `app/components/LoadingScreen.tsx` (Line 90)

**Current Code:**
```tsx
<img 
  src="/logo.svg" 
  alt="Parent Company Logo"
  className="w-full h-full object-contain drop-shadow-2xl"
/>
```

**To Update:**
1. Add your parent company logo to `/public/logo.svg`
2. Or rename to match: `/public/parent-company-logo.svg`
3. Update line 90 in `LoadingScreen.tsx` if you change the filename

---

## 🎯 Logo 2: Nitron Digital / Wholesaling Logo

### Used In: Header/Navigation
**File Path**: `/public/nitron-logo.svg`

**Where it appears:**
- Top navigation bar (always visible)
- Desktop and mobile
- Next to "Nitron Digital" text
- White/light background

**Component**: `app/components/NavBar.tsx` (Line 24)

**Current Code:**
```tsx
<img 
  src="/nitron-logo.svg" 
  alt="Nitron Digital"
  className="h-10 w-auto"
/>
```

**To Update:**
1. Add your Nitron Digital logo to `/public/nitron-logo.svg`
2. Logo will automatically scale to 40px height
3. Width scales proportionally

---

## 📐 Logo Specifications

### Parent Company Logo (Loading Screen)
**Recommended:**
- Format: SVG (best) or PNG
- Size: 512×512px (square works best)
- Background: Transparent or white
- File size: < 100KB

**Display Size:**
- Desktop: 128×128px
- Mobile: 128×128px
- Scales with animation

### Nitron Digital Logo (Header)
**Recommended:**
- Format: SVG (best) or PNG
- Dimensions: Any (maintains aspect ratio)
- Height: Will display at 40px
- Background: Transparent
- File size: < 50KB

**Display Size:**
- Desktop: 40px height, auto width
- Mobile: 40px height, auto width
- Horizontal logos work great

---

## 🎨 Logo Design Tips

### Parent Company Logo
- **Simple and bold** - Visible during quick loading
- **Works on white** - Loading screen has white background
- **Recognizable** - Brand identity moment
- **Square or circular** - Easiest to center

### Nitron Digital Logo
- **Horizontal layout** - Works best in navbar
- **Dark colors** - Navbar has white background
- **Clean and professional** - Always visible
- **Readable at small size** - 40px height

---

## 🔧 Quick Setup Steps

### Step 1: Add Parent Company Logo
```bash
# Add your file to:
wholesaling-site/public/logo.svg
```

### Step 2: Add Nitron Digital Logo
```bash
# Add your file to:
wholesaling-site/public/nitron-logo.svg
```

### Step 3: Refresh Browser
```bash
# Hard refresh to see changes
Ctrl + Shift + R (Windows)
Cmd + Shift + R (Mac)
```

**Done!** Both logos will appear automatically.

---

## 🎯 Current Setup Summary

| Logo | Location | File | Size | Background |
|------|----------|------|------|------------|
| **Parent Company** | Loading Screen | `/public/logo.svg` | 128×128px | White |
| **Nitron Digital** | Header/NavBar | `/public/nitron-logo.svg` | 40px height | White/Light |

---

## 🎨 Customization Options

### Change Parent Company Logo Size

**File**: `app/components/LoadingScreen.tsx` (Line 87)

```tsx
// Current (128px)
<div className="w-32 h-32 mx-auto">

// Smaller (96px)
<div className="w-24 h-24 mx-auto">

// Larger (160px)
<div className="w-40 h-40 mx-auto">
```

### Change Nitron Logo Size

**File**: `app/components/NavBar.tsx` (Line 27)

```tsx
// Current (40px)
className="h-10 w-auto"

// Smaller (32px)
className="h-8 w-auto"

// Larger (48px)
className="h-12 w-auto"
```

### Hide Company Name (Logo Only)

**File**: `app/components/NavBar.tsx` (Line 29)

```tsx
// Comment out or remove this line:
<span className="text-xl font-bold text-accent font-heading">Nitron Digital</span>
```

### Logo Only in Header (No Text)

```tsx
<Link href="/" className="flex items-center">
  <img 
    src="/nitron-logo.svg" 
    alt="Nitron Digital"
    className="h-12 w-auto"  // Larger since no text
  />
</Link>
```

---

## 🖼️ Logo File Formats

### Best: SVG
```
✅ Scales perfectly at any size
✅ Small file size
✅ Crisp on all screens
✅ Easy to edit colors
```

### Good: PNG
```
✅ Supports transparency
⚠️ Use 2x size for retina (e.g., 256×256 for 128px display)
⚠️ Larger file size
```

### OK: JPG
```
⚠️ No transparency
⚠️ Not ideal for logos
✅ Smaller file size
```

---

## 🐛 Troubleshooting

### Logo Not Showing

**Check:**
1. File exists in `/public` folder
2. Filename matches exactly (case-sensitive)
3. File format is supported (SVG, PNG, JPG)
4. Hard refresh browser (`Ctrl+Shift+R`)

**Common Issues:**
```bash
# Wrong location
src/assets/logo.svg  ❌
public/logo.svg      ✅

# Wrong filename
public/Logo.svg      ❌ (capital L)
public/logo.svg      ✅ (lowercase)

# Wrong path in code
src="/logo.svg"      ✅ (correct - public is root)
src="/public/logo.svg" ❌ (wrong - don't include /public)
```

### Logo Too Big/Small

**Loading Screen:**
- Adjust container: `w-32 h-32` (line 87 in LoadingScreen.tsx)

**Header:**
- Adjust height: `h-10` (line 27 in NavBar.tsx)

### Logo Wrong Color

**For SVG:**
- SVG colors are embedded in the file
- Edit SVG file to change colors
- Or use CSS filters (advanced)

**For PNG:**
- Export new PNG with correct colors
- Or use image editing software

### Logo Blurry

**Solutions:**
1. Use SVG format (always crisp)
2. Use 2× size PNG (e.g., 256×256 for 128px display)
3. Optimize image compression
4. Check image quality settings

---

## 📋 Checklist

Before going live:

- [ ] Parent company logo added to `/public/logo.svg`
- [ ] Nitron Digital logo added to `/public/nitron-logo.svg`
- [ ] Both logos display correctly on desktop
- [ ] Both logos display correctly on mobile
- [ ] Loading screen logo looks good
- [ ] Header logo looks good
- [ ] Logos are optimized (< 100KB each)
- [ ] Logos have transparent backgrounds (if needed)
- [ ] Alt text is descriptive
- [ ] Tested on different browsers

---

## 🎯 Example File Structure

```
wholesaling-site/
  public/
    ├── logo.svg                 ← Parent: "ACME Corp" logo
    ├── nitron-logo.svg         ← Nitron: "Nitron Digital" logo
    ├── favicon.ico
    └── images/
        └── suburban-bg.jpg

  app/
    └── components/
        ├── LoadingScreen.tsx    ← Uses logo.svg
        └── NavBar.tsx          ← Uses nitron-logo.svg
```

---

## 💡 Pro Tips

1. **Use SVG** - Best quality, smallest size, scales perfectly
2. **Optimize files** - Use [SVGOMG](https://jakearchibald.github.io/svgomg/) for SVG
3. **Test both** - Check loading screen AND header
4. **Brand consistency** - Logos should complement each other
5. **Mobile-first** - Test on small screens
6. **Transparent backgrounds** - Works on any background color
7. **Simple is better** - Complex logos don't scale well at small sizes

---

## 🔗 Related Documentation

- [HOW_TO_ADD_PARENT_LOGO.md](./HOW_TO_ADD_PARENT_LOGO.md) - Detailed parent logo guide
- [LOADING_ANIMATION_GUIDE.md](./LOADING_ANIMATION_GUIDE.md) - Loading screen customization

---

**Status**: ✅ Ready for your logos  
**Files Needed**: 2 (parent company + Nitron Digital)  
**Locations**: `/public/logo.svg` and `/public/nitron-logo.svg`  
**Next Step**: Add your logo files and refresh!

