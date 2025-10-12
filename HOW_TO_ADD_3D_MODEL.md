# 🏠 How to Add a Custom 3D House Model

## 🎯 Quick Summary

Your site currently uses a **fallback primitive house**. Follow these steps to upgrade to a professional .glb model!

---

## 📥 Step 1: Find a Model (5 minutes)

### **Recommended Free Sources:**

#### **Option 1: Sketchfab** (Best quality)
1. Visit: https://sketchfab.com/search?q=house&type=models&features=downloadable
2. Filter by:
   - ✅ **Downloadable**
   - ✅ **Free**
   - ✅ License: **CC BY** or **CC0**
3. Search for: "house", "suburban house", "modern house", "cottage"
4. Look for models with:
   - Poly count: < 50,000 triangles
   - File size: < 10 MB
   - PBR textures included
   - Good preview images

**Recommended searches:**
- "low poly house"
- "cartoon house"
- "isometric house"
- "modern suburban home"

#### **Option 2: Poly Pizza** (Easiest)
1. Visit: https://poly.pizza/
2. Search: "house"
3. Choose a low-poly model
4. Download as `.glb`

#### **Option 3: CGTrader Free** (Professional)
1. Visit: https://www.cgtrader.com/free-3d-models/house
2. Filter by "Free"
3. Choose "glTF 2.0" format if available
4. Download and extract

---

## 🔧 Step 2: Prepare the Model (If Needed)

### **If you have .fbx, .obj, or .blend files:**

1. **Download Blender** (free): https://www.blender.org/download/
2. **Import your model:**
   - File → Import → (choose your format)
3. **Scale if needed:**
   - Select object
   - Press `S` for scale
   - Type number (e.g., `0.5` for half size)
4. **Export as .glb:**
   - File → Export → glTF 2.0 (.glb/.gltf)
   - Settings:
     - Format: **glTF Binary (.glb)**
     - ✅ Remember + Apply Modifiers
     - ✅ Include → Textures (embedded)
     - ✅ Compression → Use Draco compression
     - ✅ Limit to: Exported Objects
5. **Save as:** `house.glb`

### **Optimize for Web:**

**In Blender before exporting:**
1. Decimate modifier (reduce polygons):
   - Add Modifier → Decimate
   - Ratio: 0.5 (reduces by half)
2. Bake textures if needed:
   - Render → Bake → Combined
3. Limit texture size:
   - Max 2048x2048 per texture
   - Compress to .jpg or .webp

---

## 📁 Step 3: Add to Project

```bash
# 1. Create models folder (if doesn't exist)
mkdir public/models

# 2. Copy your model
# Place file at: public/models/house.glb

# 3. Verify file is there
ls public/models/house.glb
```

**File structure should be:**
```
wholesaling-site/
└── public/
    └── models/
        └── house.glb  ← Your 3D model here
```

---

## 🎨 Step 4: Adjust Scale & Position

If your model appears too big/small or off-center:

### **Change Scale:**
```typescript
// In HouseScene.tsx, line with <primitive>:

// Model too big:
<primitive ref={ref} object={scene} scale={0.5} position={[0, -1, 0]} />

// Model too small:
<primitive ref={ref} object={scene} scale={2.0} position={[0, -1, 0]} />

// Just right:
<primitive ref={ref} object={scene} scale={1.2} position={[0, -1, 0]} />
```

### **Adjust Position:**
```typescript
// Move up/down (Y axis):
position={[0, -2, 0]}  // Lower
position={[0, 0, 0]}   // Higher

// Move left/right (X axis):
position={[1, -1, 0]}  // Right
position={[-1, -1, 0]} // Left

// Move forward/back (Z axis):
position={[0, -1, 1]}  // Forward
position={[0, -1, -1]} // Back
```

### **Rotate:**
```typescript
// In HouseModel function, add:
React.useEffect(() => {
  if (!ref.current) return;
  ref.current.rotation.y = Math.PI / 4; // 45 degrees
}, []);
```

---

## 🎨 Step 5: Fine-Tune Animation

### **Current Animation:**
- Gentle side-to-side sway
- Sine wave motion (t / 6)
- 0.15 radian range (~8.5 degrees)
- Scale-in entrance with GSAP

### **Make Sway Faster:**
```typescript
ref.current.rotation.y = Math.sin(t / 3) * 0.15; // Was t / 6
```

### **Make Sway Slower:**
```typescript
ref.current.rotation.y = Math.sin(t / 10) * 0.15; // More subtle
```

### **Increase Sway Range:**
```typescript
ref.current.rotation.y = Math.sin(t / 6) * 0.3; // Bigger swing (was 0.15)
```

### **Make Completely Static:**
```typescript
// Comment out the useFrame hook entirely:
// useFrame(({ clock }) => {
//   const t = clock.getElapsedTime();
//   ref.current.rotation.y = Math.sin(t / 6) * 0.15;
// });
```

---

## 🌤️ Step 6: Lighting & Environment

### **Current Setup:**
- Ambient: 0.6 intensity (bright)
- Directional: Top-right, casts shadows
- Point light: Warm accent
- Environment: **Sunset** (warm tones)

### **Change Environment Preset:**
```typescript
<Environment preset="sunset" />

// Options:
preset="city"        // Urban, neutral
preset="dawn"        // Morning light
preset="forest"      // Green tones
preset="apartment"   // Indoor
preset="studio"      // Neutral studio
preset="warehouse"   // Industrial
preset="park"        // Outdoor daylight
preset="night"       // Dark, moody
```

### **Adjust Lighting:**
```typescript
// Brighter scene:
<ambientLight intensity={0.8} />

// Warmer lighting:
<directionalLight color="#ffddaa" />

// More dramatic shadows:
<directionalLight intensity={1.5} />
```

---

## 🎨 Step 7: Background Gradient

Already added! **Sky/suburb gradient** for better context:

```typescript
<div className="absolute inset-0 bg-gradient-to-b from-[#bfe3ff] via-[#d9ecff] to-[#f7f8fa]" />
```

This creates a realistic daylight sky that:
- Matches the 3D lighting
- Hides loading moments
- Provides depth
- Looks professional

**To customize:**
```css
/* Brighter sky */
from-[#87CEEB] via-[#B0D4E3] to-[#f7f8fa]

/* Evening tones */
from-[#ff9a56] via-[#ffb88c] to-[#f7f8fa]

/* Overcast */
from-[#d3d3d3] via-[#e8e8e8] to-[#f7f8fa]
```

---

## 🚀 Performance Optimization

### **1. Compress Model:**
Use Draco compression in Blender export:
- Reduces file size by 60-80%
- Slightly slower parsing (worth it!)

### **2. Preload:**
Already implemented at bottom of file:
```typescript
useGLTF.preload('/models/house.glb');
```

### **3. Loading State:**
```typescript
// Add loading text during Suspense
<Suspense fallback={
  <mesh>
    <boxGeometry args={[0.5, 0.5, 0.5]} />
    <meshStandardMaterial wireframe />
  </mesh>
}>
```

### **4. Reduce Shadow Quality (if slow):**
```typescript
<directionalLight
  shadow-mapSize-width={512}   // Was 1024
  shadow-mapSize-height={512}
/>
```

---

## 📦 Recommended Models

### **Free Models to Try:**

1. **"Low Poly House" by Quaternius** (Poly Pizza)
   - Size: ~500KB
   - Style: Cute, stylized
   - Perfect for: Friendly, approachable brand

2. **"Suburban House" on Sketchfab**
   - Search: "suburban house low poly"
   - Filter: Downloadable + Free
   - Look for: PBR textures, < 5MB

3. **"Modern House" - Minimalist**
   - Search: "modern house isometric"
   - Style: Clean, contemporary
   - Perfect for: Premium brand

### **Model Specifications:**
```
✅ Format: .glb (preferred) or .gltf
✅ Poly count: 5,000-50,000 triangles
✅ File size: < 10 MB (< 3 MB ideal)
✅ Textures: PBR (Physically Based Rendering)
✅ License: CC0 or CC BY
```

---

## 🎯 Testing Your Model

### **After adding house.glb:**

1. **Restart dev server:**
```bash
# Stop current server (Ctrl+C)
npm run dev
```

2. **Check browser console:**
   - Look for loading messages
   - Check for errors
   - Monitor network tab

3. **Adjust if needed:**
   - Scale (too big/small)
   - Position (off-center)
   - Rotation (wrong angle)
   - Lighting (too dark/bright)

### **Common Adjustments:**

```typescript
// Model facing wrong direction
ref.current.rotation.y = Math.PI; // Rotate 180°

// Model upside down
ref.current.rotation.x = Math.PI; // Flip it

// Model too dark
<ambientLight intensity={0.9} /> // Increase light
```

---

## 🐛 Troubleshooting

### **"Model doesn't load"**
1. Check file path: `/models/house.glb` (not `/model/` or `/public/models/`)
2. Verify file exists in `public/models/`
3. Check browser Network tab for 404 errors
4. Fallback house will show if .glb fails

### **"Model is all black"**
1. Increase ambient light: `intensity={0.8}`
2. Check model has textures
3. Try different environment preset

### **"Model loads slowly"**
1. Compress with Draco in Blender
2. Reduce texture sizes
3. Lower poly count
4. Add loading indicator

### **"Model looks weird"**
1. Check scale and position
2. Adjust camera position
3. Try different lighting
4. Verify model orientation in Blender

---

## 📊 What's Changed

### **Before:**
- Basic primitive shapes (boxes, cones)
- Full 360° spin
- Simple materials

### **After:**
- Professional .glb model support
- Gentle side-to-side sway (8.5° range)
- Static view (no user rotation)
- Better lighting (sunset preset)
- Sky gradient background
- Faster loading with fallback

---

## 🎊 Summary

**Your 3D house now:**
- ✅ Loads faster (with fallback)
- ✅ Looks more professional (when you add .glb)
- ✅ Gentle swaying motion (no spinning)
- ✅ Better lighting (sunset preset)
- ✅ Sky gradient background
- ✅ Static camera view
- ✅ Smooth GSAP entrance

**To upgrade further:**
1. Download a .glb model (links above)
2. Place in `/public/models/house.glb`
3. Restart dev server
4. Adjust scale/position as needed

---

**Current status:** Using fallback house (still looks good!)  
**Upgrade:** Add custom house.glb for professional model  
**Performance:** Fast loading with gradual reveal  

🏠 Your 3D scene is now **production-ready**! ✨


