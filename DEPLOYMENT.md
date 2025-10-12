# Deployment Guide

## Quick Deployment to Vercel

### Method 1: Vercel CLI (Recommended)

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from the wholesaling-site directory:
```bash
cd wholesaling-site
vercel
```

4. Follow the prompts:
   - **Set up and deploy?** Yes
   - **Which scope?** Choose your account/team
   - **Link to existing project?** No (for first deployment)
   - **Project name?** wholesaling-site (or your preferred name)
   - **Directory?** ./ (current directory)
   - **Override settings?** No

5. Your site will be deployed! You'll get a preview URL like:
   `https://wholesaling-site-xxx.vercel.app`

6. For production deployment:
```bash
vercel --prod
```

### Method 2: GitHub + Vercel Dashboard

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit: WholesalePro website"
git branch -M main
git remote add origin https://github.com/yourusername/wholesaling-site.git
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Configure Environment Variables** (if needed):
   - Go to Project Settings → Environment Variables
   - Add your API keys and secrets

## Environment Variables Setup

Create these in Vercel Dashboard or via CLI:

```bash
# Using Vercel CLI
vercel env add HUBSPOT_API_KEY
vercel env add SENDGRID_API_KEY
vercel env add EMAIL_TO
```

### Required Environment Variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `HUBSPOT_API_KEY` | HubSpot API key for CRM | `pat-na1-xxxxx` |
| `SENDGRID_API_KEY` | SendGrid for emails | `SG.xxxxx` |
| `EMAIL_TO` | Email for lead notifications | `leads@company.com` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | `G-XXXXXXXXXX` |

## Custom Domain Setup

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `wholesalepro.com`)
4. Update DNS records at your registrar:
   - **Type:** A Record
   - **Name:** @ (or subdomain)
   - **Value:** 76.76.21.21
   
   Or use CNAME:
   - **Type:** CNAME
   - **Name:** www
   - **Value:** cname.vercel-dns.com

5. Wait for DNS propagation (5 minutes - 48 hours)

## Post-Deployment Checklist

- [ ] Test all pages (/sell, /buy, homepage)
- [ ] Verify form submissions work
- [ ] Check CRM integration
- [ ] Test email notifications
- [ ] Verify SEO metadata (view source)
- [ ] Test mobile responsiveness
- [ ] Check Google Analytics tracking
- [ ] Test animations and scroll effects
- [ ] Verify navigation and links
- [ ] Check console for errors

## Performance Optimization

Vercel automatically handles:
- ✅ Edge caching
- ✅ Image optimization
- ✅ Code splitting
- ✅ Compression (gzip/brotli)
- ✅ SSL/HTTPS
- ✅ Global CDN

## Monitoring

Access deployment logs:
```bash
vercel logs
```

View analytics in Vercel Dashboard:
- Page views
- Performance metrics
- Error tracking
- Core Web Vitals

## Continuous Deployment

Every push to `main` branch automatically deploys to production (when using GitHub integration).

Preview deployments for every pull request.

## Rollback

If issues occur:
```bash
vercel rollback
```

Or use Vercel Dashboard → Deployments → Select previous → Promote to Production

## Troubleshooting

### Build Failures

Check build logs:
```bash
vercel logs --follow
```

Common issues:
- Missing dependencies: Run `npm install`
- TypeScript errors: Run `npm run build` locally
- Environment variables: Verify they're set in Vercel

### API Route Issues

- Check function logs in Vercel Dashboard
- Verify API routes are in `/app/api` directory
- Test locally with `npm run dev`

### GSAP Animation Issues

If animations don't work in production:
- Check browser console for errors
- Verify GSAP is properly imported
- Ensure ScrollTrigger plugin is registered

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

---

🚀 Happy Deploying!

