# 🎬 BlurText Animation Guide

## Overview
Your hero headline now uses **Motion's BlurText animation** - a modern, lightweight alternative to GSAP's SplitText that creates a beautiful blur-to-focus effect.

## ✨ What's New

### Animation Effect
Each word in your headline:
1. Starts **blurred** and slightly offset
2. Gradually **comes into focus**
3. Settles into **crisp, clear text**
4. Words animate **sequentially** with a stagger

**Current Headline:**
> "Sell your home. Fast. Simple. Cash."

Words animate in order: `Sell` → `your` → `home.` → `Fast.` → `Simple.` → `Cash.`

## 🎨 Current Settings

```tsx
<BlurText
  text="Sell your home. Fast. Simple. Cash."
  delay={150}              // 150ms between each word
  animateBy="words"        // Animate word-by-word
  direction="top"          // Words come from top
  className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl"
/>
```

## 🔧 Customization Options

### 1. Change Animation Speed

**Faster (snappier):**
```tsx
delay={100}  // 100ms between words
```

**Slower (more dramatic):**
```tsx
delay={200}  // 200ms between words
```

**Instant (all at once):**
```tsx
delay={0}
```

### 2. Animate by Characters Instead of Words

```tsx
<BlurText
  text="Sell your home. Fast. Simple. Cash."
  delay={50}           // Use shorter delay for characters
  animateBy="chars"    // Character-by-character animation
  direction="top"
  className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl"
/>
```

### 3. Change Direction

**From Bottom:**
```tsx
direction="bottom"  // Words rise up instead of falling down
```

**From Top (current):**
```tsx
direction="top"
```

### 4. Change the Text

```tsx
<BlurText
  text="Your Custom Headline Here"
  delay={150}
  animateBy="words"
  direction="top"
  className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl"
/>
```

### 5. Custom Animation Values

**Control blur and position:**
```tsx
<BlurText
  text="Sell your home. Fast. Simple. Cash."
  delay={150}
  animateBy="words"
  direction="top"
  animationFrom={{
    filter: 'blur(20px)',  // Start with more blur
    opacity: 0,
    y: -100                 // Start higher up
  }}
  animationTo={[
    { 
      filter: 'blur(8px)', 
      opacity: 0.3, 
      y: -20 
    },
    { 
      filter: 'blur(0px)', 
      opacity: 1, 
      y: 0 
    }
  ]}
  className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl"
/>
```

### 6. Animation Callback

**Run code when animation completes:**
```tsx
<BlurText
  text="Sell your home. Fast. Simple. Cash."
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {
    console.log('Headline animation done!');
    // Trigger next animation, show something, etc.
  }}
  className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl"
/>
```

## 📊 Performance

### Why BlurText is Great

**vs GSAP SplitText:**
- ✅ **Lighter**: No GSAP dependency for text
- ✅ **Modern**: Uses Motion (Framer Motion successor)
- ✅ **React-native**: Built for React
- ✅ **Smooth**: Hardware-accelerated filters
- ✅ **Flexible**: Easy to customize
- ✅ **TypeScript**: Full type safety

**Performance:**
- Uses `will-change` for optimization
- GPU-accelerated blur filter
- Intersection Observer (only animates when visible)
- Minimal re-renders

## 🎯 Use Cases

### Current Use (Hero Headline)
```tsx
<BlurText
  text="Sell your home. Fast. Simple. Cash."
  delay={150}
  animateBy="words"
  direction="top"
  className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl"
/>
```

### Section Headlines
```tsx
<BlurText
  text="Recent Success Stories"
  delay={100}
  animateBy="words"
  direction="bottom"
  className="text-4xl font-bold text-gray-900"
/>
```

### Testimonial Quotes
```tsx
<BlurText
  text="Best decision we ever made!"
  delay={80}
  animateBy="chars"
  direction="top"
  className="text-2xl italic text-gray-700"
/>
```

### CTA Text
```tsx
<BlurText
  text="Get Started Today"
  delay={120}
  animateBy="words"
  direction="bottom"
  className="text-3xl font-semibold text-white"
/>
```

## 🎨 Styling Options

### Current (White with Drop Shadow)
```tsx
className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl"
```

### Dark Text (for light backgrounds)
```tsx
className="text-5xl md:text-6xl font-bold text-gray-900"
```

### Gradient Text
```tsx
className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
```

### With Outline
```tsx
className="text-5xl md:text-6xl font-bold text-white"
style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
```

## 🔧 Advanced Features

### Custom Easing Function
```tsx
<BlurText
  text="Sell your home. Fast. Simple. Cash."
  delay={150}
  animateBy="words"
  direction="top"
  easing={(t) => t * t}  // Quadratic ease
  className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl"
/>
```

**Popular Easing Functions:**
- Linear: `(t) => t`
- Ease In: `(t) => t * t`
- Ease Out: `(t) => t * (2 - t)`
- Ease In Out: `(t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t`

### Custom Step Duration
```tsx
<BlurText
  text="Sell your home. Fast. Simple. Cash."
  delay={150}
  animateBy="words"
  direction="top"
  stepDuration={0.5}  // 0.5s per animation step (default: 0.35)
  className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl"
/>
```

### Intersection Observer Settings
```tsx
<BlurText
  text="Sell your home. Fast. Simple. Cash."
  delay={150}
  animateBy="words"
  direction="top"
  threshold={0.5}       // Start when 50% visible (default: 0.1)
  rootMargin="100px"    // Start 100px before entering viewport
  className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl"
/>
```

## 📱 Responsive Behavior

The component automatically works on all screen sizes:

```tsx
className="text-3xl md:text-5xl lg:text-6xl font-bold text-white"
```

- **Mobile**: 3xl (1.875rem)
- **Tablet**: 5xl (3rem)
- **Desktop**: 6xl (3.75rem)

## 🐛 Troubleshooting

### Animation not playing
- Check that element is in viewport
- Adjust `threshold` and `rootMargin` props
- Verify Motion is installed: `npm ls motion`

### Text appears without animation
- Animation only plays once when entering viewport
- Refresh page to see it again
- Or add state to reset animation

### Animation too fast/slow
- Adjust `delay` prop (milliseconds between elements)
- Adjust `stepDuration` prop (seconds per step)

### Blur looks different across browsers
- Expected - CSS filters vary slightly
- Test on target browsers
- Adjust blur values if needed

## 📊 Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | required | The text to animate |
| `delay` | number | 200 | Milliseconds between each element |
| `className` | string | '' | CSS classes |
| `animateBy` | 'words' \| 'chars' | 'words' | Animate words or characters |
| `direction` | 'top' \| 'bottom' | 'top' | Direction of animation |
| `threshold` | number | 0.1 | Intersection observer threshold |
| `rootMargin` | string | '0px' | Intersection observer root margin |
| `animationFrom` | object | varies | Starting animation state |
| `animationTo` | object[] | varies | Animation steps |
| `easing` | function | linear | Easing function |
| `onAnimationComplete` | function | undefined | Callback when done |
| `stepDuration` | number | 0.35 | Duration per step in seconds |

## 🎯 Comparison

### Before (GSAP SplitText)
```tsx
<h1 className="text-5xl md:text-6xl font-bold text-white">
  <SplitText delay={0.2}>
    Sell Your NH House Fast for Cash
  </SplitText>
</h1>
```

**Issues:**
- Heavier (GSAP dependency)
- More complex setup
- Character splitting not ideal for all use cases

### After (Motion BlurText)
```tsx
<BlurText
  text="Sell your home. Fast. Simple. Cash."
  delay={150}
  animateBy="words"
  direction="top"
  className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl"
/>
```

**Benefits:**
- ✅ Modern and lightweight
- ✅ Beautiful blur effect
- ✅ Word-by-word animation
- ✅ Built-in intersection observer
- ✅ Highly customizable

## 🚀 Next Steps

### Use BlurText Elsewhere

**Add to other sections:**

1. **Featured Deals Section**
```tsx
<BlurText
  text="Recent Success Stories"
  delay={100}
  animateBy="words"
  direction="bottom"
  className="text-4xl font-bold text-gray-900 mb-4"
/>
```

2. **Trust Section**
```tsx
<BlurText
  text="Trusted Across New Hampshire"
  delay={120}
  animateBy="words"
  direction="top"
  className="text-3xl font-bold text-white mb-4"
/>
```

3. **CTA Section**
```tsx
<BlurText
  text="Ready to Get Started?"
  delay={100}
  animateBy="words"
  direction="bottom"
  className="text-4xl font-bold text-white mb-6"
/>
```

## 📁 Files

### Created
- ✅ `app/components/BlurText.tsx` - Reusable blur text component

### Modified
- ✅ `app/components/Hero.tsx` - Now uses BlurText instead of plain h1
- ✅ `package.json` - Added `motion` dependency

### Dependencies
- `motion` - Modern animation library (Framer Motion successor)

---

**Status**: ✅ Active and working  
**Animation Type**: Blur-to-focus with stagger  
**Performance**: Optimized with Intersection Observer  
**Customizable**: Highly flexible

