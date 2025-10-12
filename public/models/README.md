# 3D Models Folder

## 📁 How to Add Your Custom House Model

### **Quick Steps:**

1. **Download a .glb model** from:
   - Sketchfab: https://sketchfab.com
   - Poly Pizza: https://poly.pizza
   - CGTrader: https://www.cgtrader.com/free-3d-models

2. **Save it as:** `house.glb`

3. **Place it here:** `public/models/house.glb`

4. **Restart dev server:**
   ```bash
   npm run dev
   ```

5. **Model loads automatically!** ✅

---

## 🎯 Model Requirements

### **Recommended Specs:**
- **Format:** .glb (binary) or .gltf
- **File Size:** < 10 MB (< 3 MB ideal)
- **Poly Count:** 5,000-50,000 triangles
- **Textures:** PBR (Physically Based Rendering)
- **License:** CC0 or CC BY (commercial use allowed)

### **Search Keywords:**
- "low poly house"
- "suburban house 3d"
- "modern house glb"
- "cartoon house model"
- "isometric house"

---

## 🔧 If You Need to Convert

### **Have .fbx, .obj, or .blend?**

Use **Blender** (free):
1. Download: https://www.blender.org
2. File → Import → (your format)
3. File → Export → glTF 2.0 (.glb)
4. Settings:
   - Format: **glTF Binary (.glb)**
   - ✅ Include Textures
   - ✅ Draco Compression
5. Save as `house.glb`

---

## 📊 Current Status

**Fallback Model:** Simple primitive house (shows instantly)  
**Custom Model:** Drop `house.glb` here to upgrade!  
**Performance:** Optimized for fast loading  

---

## 🎨 Example Models to Try

### **Style 1: Low-Poly (Cute)**
- Search: "low poly house" on Poly Pizza
- Poly count: ~5,000
- File size: ~500KB
- Best for: Friendly, approachable brand

### **Style 2: Realistic (Professional)**
- Search: "suburban house PBR" on Sketchfab
- Poly count: ~30,000
- File size: ~3MB
- Best for: Professional, high-end brand

### **Style 3: Modern (Contemporary)**
- Search: "modern house minimalist"
- Poly count: ~15,000
- File size: ~1.5MB
- Best for: Modern, clean brand

---

## ✅ After Adding Model

Your HouseScene.tsx will automatically:
- Load your custom model
- Apply gentle swaying animation
- Use sunset lighting
- Scale and position correctly
- Preload for next visit

**No code changes needed!** Just drop the file here. 🎉

---

**Questions?** See **HOW_TO_ADD_3D_MODEL.md** for complete guide!


