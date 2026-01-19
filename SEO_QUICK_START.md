# Aictum SEO - Quick Configuration Guide

## 🚀 Quick Start

### 1. Update Site Configuration
File: `src/lib/seo.ts`

```typescript
export const siteConfig = {
  url: "https://www.aictum.com", // ⚠️ UPDATE THIS
  company: {
    email: "info@aictum.com", // ⚠️ UPDATE THIS
    phone: "+1-xxx-xxx-xxxx", // ⚠️ UPDATE THIS
    address: {
      streetAddress: "Your Street", // ⚠️ UPDATE THIS
      addressLocality: "Your City",
      addressRegion: "State",
      postalCode: "12345",
      addressCountry: "US"
    }
  },
  social: {
    twitter: "@aictum", // ⚠️ UPDATE THIS
    linkedin: "company/aictum", // ⚠️ UPDATE THIS
    github: "aictum" // ⚠️ UPDATE THIS
  }
};
```

### 2. Update Robots.txt
File: `src/app/robots.ts`

```typescript
sitemap: 'https://www.aictum.com/sitemap.xml', // ⚠️ UPDATE DOMAIN
```

### 3. Add Search Console Verification
File: `src/lib/seo.ts` in `generateMetadata` function:

```typescript
verification: {
  google: "your-verification-code", // ⚠️ ADD THIS
  yandex: "", // Optional
  bing: "" // Optional
}
```

## 📊 SEO Features Implemented

### ✅ All Pages Have:
- [x] Unique meta titles with keywords
- [x] Optimized meta descriptions (150-160 chars)
- [x] Open Graph tags for social sharing
- [x] Twitter Card tags
- [x] Canonical URLs
- [x] Robots directives
- [x] JSON-LD structured data

### ✅ Technical SEO:
- [x] Dynamic sitemap.xml
- [x] Robots.txt configuration
- [x] PWA manifest
- [x] Mobile-first design
- [x] Fast loading (Next.js optimized)
- [x] SEO-friendly URLs

### ✅ Structured Data (Schema):
- [x] Organization Schema
- [x] Website Schema
- [x] Service Schema (per service)
- [x] Breadcrumb Schema

## 🎯 Target Keywords

### Home Page
- AI development company
- machine learning solutions
- blockchain development services

### Services Page
- AI services
- machine learning services
- technology consulting

### Service Detail Pages
- [Dynamic per service]
- Computer vision services
- NLP solutions
- Blockchain development
- etc.

## 📁 Modified Files

```
✅ src/lib/seo.ts (NEW - SEO utilities)
✅ src/app/page.tsx (Updated - Home page SEO)
✅ src/app/all-service/page.tsx (Updated - Services SEO)
✅ src/app/services/[id]/page.tsx (Updated - Dynamic SEO)
✅ src/app/sitemap.ts (NEW - Dynamic sitemap)
✅ src/app/robots.ts (NEW - Robots configuration)
✅ src/app/manifest.ts (NEW - PWA manifest)
✅ src/app/layout.tsx (Updated - Global SEO)
```

## 🔍 Testing Your SEO

### 1. Validate Structured Data
Visit: https://search.google.com/test/rich-results
Test URL: your-domain.com

### 2. Check Mobile-Friendliness
Visit: https://search.google.com/test/mobile-friendly
Test URL: your-domain.com

### 3. Test Page Speed
Visit: https://pagespeed.web.dev/
Test URL: your-domain.com

### 4. Verify Sitemap
Check: your-domain.com/sitemap.xml
Check: your-domain.com/robots.txt

## 🚀 Deployment Checklist

- [ ] Update siteConfig with actual domain
- [ ] Update company email, phone, address
- [ ] Update social media handles
- [ ] Add Google Search Console verification code
- [ ] Build and deploy to production
- [ ] Verify sitemap is accessible
- [ ] Verify robots.txt is accessible
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Test all pages for proper meta tags
- [ ] Validate structured data
- [ ] Run PageSpeed Insights

## 📈 Post-Deployment

### Week 1:
- Set up Google Search Console
- Set up Google Analytics
- Submit sitemap
- Monitor for crawl errors

### Week 2-4:
- Monitor keyword rankings
- Check indexing status
- Review search analytics
- Optimize based on data

### Monthly:
- Review Search Console data
- Update content as needed
- Add new blog posts
- Monitor competitor rankings

## 🛠️ Common Issues & Fixes

### Issue: Sitemap not found
**Fix:** Ensure you've deployed and the file is at `/sitemap.xml`

### Issue: Robots.txt blocking crawlers
**Fix:** Check `src/app/robots.ts` configuration

### Issue: Meta tags not showing in Google
**Fix:** Wait 1-2 weeks for indexing, check Search Console

### Issue: Structured data errors
**Fix:** Validate at https://search.google.com/test/rich-results

## 📞 Support Resources

- **Documentation:** See SEO_IMPLEMENTATION_GUIDE.md
- **Next.js Docs:** https://nextjs.org/docs/app/building-your-application/optimizing/metadata
- **Google Search Central:** https://developers.google.com/search
- **Schema.org:** https://schema.org/

## 🎉 Your SEO is Ready!

All pages are now optimized with:
- ✅ Professional metadata
- ✅ Structured data
- ✅ Mobile-first design
- ✅ Fast loading
- ✅ Search engine friendly

**Just update the configuration and deploy!** 🚀
