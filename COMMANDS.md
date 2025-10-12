# Quick Reference Commands

## 🚀 Development

```bash
# Start development server
npm run dev

# Start on different port
npm run dev -- -p 3001

# Open in browser
npm run dev
# Then visit: http://localhost:3000
```

## 🏗️ Building

```bash
# Create production build
npm run build

# Build and start production server
npm run build && npm run start

# Check build size
npm run build
# Look at the Route table output
```

## ✅ Testing & Linting

```bash
# Run ESLint
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix

# Type check
npx tsc --noEmit
```

## 📦 Package Management

```bash
# Install new package
npm install package-name

# Install dev dependency
npm install -D package-name

# Update packages
npm update

# Check for outdated packages
npm outdated

# Audit for vulnerabilities
npm audit
```

## 🌐 Vercel Deployment

```bash
# Login to Vercel
vercel login

# Deploy preview (automatic URL)
vercel

# Deploy to production
vercel --prod

# Check deployment logs
vercel logs

# List all deployments
vercel ls

# Open project in browser
vercel open

# Pull environment variables
vercel env pull

# Add environment variable
vercel env add VARIABLE_NAME
```

## 🔧 Vercel Environment Variables

```bash
# Add variable for production
vercel env add HUBSPOT_API_KEY production

# Add variable for preview
vercel env add SENDGRID_API_KEY preview

# Add variable for development
vercel env add DATABASE_URL development

# Remove environment variable
vercel env rm VARIABLE_NAME
```

## 📁 Git Commands (if using GitHub)

```bash
# Initialize git repo (if not done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Create main branch
git branch -M main

# Add remote origin
git remote add origin https://github.com/username/repo.git

# Push to GitHub
git push -u origin main

# Check status
git status

# View changes
git diff
```

## 🔍 Debugging

```bash
# View Next.js build info
npm run build -- --debug

# Check for unused dependencies
npx depcheck

# Analyze bundle size
npm run build
npx @next/bundle-analyzer

# Clear Next.js cache
rm -rf .next
npm run dev
```

## 🧹 Cleanup

```bash
# Remove node_modules
rm -rf node_modules

# Remove build files
rm -rf .next out

# Clean install
rm -rf node_modules package-lock.json
npm install

# Clear npm cache
npm cache clean --force
```

## 📊 Performance Testing

```bash
# Run Lighthouse (after deploying)
npx lighthouse https://your-site.vercel.app --view

# Check bundle size
npm run build
# Look for "First Load JS" in output
```

## 🔧 Useful One-Liners

```bash
# Find all TODO comments
grep -r "TODO" app/

# Count lines of code
find app -name "*.tsx" -o -name "*.ts" | xargs wc -l

# List all routes
find app -name "page.tsx" -o -name "route.ts"

# Search for specific text
grep -r "search term" app/
```

## 🎨 Tailwind Commands

```bash
# Rebuild Tailwind (usually automatic)
npx tailwindcss -i ./app/globals.css -o ./out.css

# Check Tailwind config
npx tailwindcss config

# View all Tailwind classes (in node_modules)
cat node_modules/tailwindcss/lib/css/preflight.css
```

## 📱 Testing Responsiveness

```bash
# Start dev server and test on mobile
npm run dev

# Access from phone (same network):
# 1. Find your local IP: ipconfig (Windows) or ifconfig (Mac/Linux)
# 2. Visit: http://YOUR_IP:3000 on phone
```

## 🔐 Security Commands

```bash
# Audit dependencies
npm audit

# Fix vulnerabilities
npm audit fix

# Force fix (may break things)
npm audit fix --force

# Check for outdated packages
npm outdated
```

## 🌐 Domain Setup (After Vercel Deploy)

```bash
# Add domain via CLI
vercel domains add yourdomain.com

# List domains
vercel domains ls

# Remove domain
vercel domains rm yourdomain.com

# Verify domain
vercel domains verify yourdomain.com
```

## 📈 Analytics & Monitoring

```bash
# View deployment analytics (in browser)
vercel --dashboard

# View function logs
vercel logs --follow

# View specific deployment logs
vercel logs [deployment-url]
```

## 🎯 Common Workflows

### Make a change and deploy:
```bash
# Edit files
npm run dev  # Test locally
npm run build  # Verify build
git add .
git commit -m "Your changes"
git push origin main  # Auto-deploys on Vercel
```

### Quick production deploy:
```bash
vercel --prod
```

### Test production build locally:
```bash
npm run build
npm run start
```

### Reset everything:
```bash
rm -rf node_modules .next package-lock.json
npm install
npm run dev
```

---

## 💡 Pro Tips

1. **Use `npm run dev`** during development for hot reload
2. **Run `npm run build`** before deploying to catch errors
3. **Use `vercel`** (not `vercel --prod`) for preview deployments
4. **Set environment variables** in Vercel Dashboard for easy management
5. **Check `vercel logs`** if something breaks in production
6. **Use GitHub integration** for automatic deployments on push

## 🆘 Troubleshooting

**Build fails:**
```bash
npm run lint
npm run build
# Fix any errors shown
```

**Port already in use:**
```bash
npm run dev -- -p 3001
```

**Module not found:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Vercel deployment fails:**
```bash
vercel logs
# Check error messages
# Verify environment variables are set
```

---

Happy coding! 🚀

