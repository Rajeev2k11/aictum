# Website Speed & SEO Optimization Plan
## Aictum Marketing Website - Complete Technical Audit

**Date:** January 2025  
**Next.js Version:** 16.1.6  
**Router:** App Router  
**Framework:** React 19.2.4

---

## 1. Executive Summary

### Top 10 Critical Issues (Priority Order)

| # | Issue | Severity | Impact | Effort | File(s) |
|---|-------|----------|--------|--------|---------|
| 1 | Root Layout is Client Component | 🔴 Critical | High | Medium | `src/app/layout.tsx` |
| 2 | Font Loading Duplication | 🔴 Critical | High | Low | `src/app/layout.tsx`, `src/styles/index.css` |
| 3 | Missing Caching Strategy | 🔴 Critical | High | Low | `next.config.js` |
| 4 | Incorrect Metadata Usage (Head in App Router) | 🔴 Critical | High | Medium | Multiple service pages |
| 5 | Excessive Client Components | 🟡 High | Medium | High | 29+ files |
| 6 | Unoptimized Images (img vs next/image) | 🟡 High | Medium | Medium | Multiple components |
| 7 | Heavy Animation Library (framer-motion) | 🟡 High | Medium | Medium | 30+ files |
| 8 | No Image Optimization Config | 🟡 High | Medium | Low | `next.config.js` |
| 9 | Video Without Optimization | 🟡 High | Medium | Low | `src/components/Hero/index.tsx` |
| 10 | Missing Third-Party Script Strategy | 🟡 High | Medium | Low | `src/app/layout.tsx` |

### Biggest Wins for Speed + SEO

1. **Convert Root Layout to Server Component** → 30-40% reduction in initial JS bundle
2. **Implement Proper Caching Strategy** → 50-70% improvement in TTFB
3. **Fix Font Loading** → Eliminate render-blocking, improve LCP by 200-400ms
4. **Optimize Images** → Reduce image payload by 40-60%, improve LCP
5. **Convert Client Components to Server Components** → Reduce hydration cost by 50-70%

---

## 2. Current Baseline & Measurement Plan

### What to Measure

#### Core Web Vitals
- **LCP (Largest Contentful Paint)**: Target < 2.5s
- **INP (Interaction to Next Paint)**: Target < 200ms
- **CLS (Cumulative Layout Shift)**: Target < 0.1

#### Performance Metrics
- **TTFB (Time to First Byte)**: Target < 600ms
- **FCP (First Contentful Paint)**: Target < 1.8s
- **Total Blocking Time (TBT)**: Target < 200ms
- **Speed Index**: Target < 3.4s

#### Bundle Metrics
- **Initial JS Bundle Size**: Target < 100KB (gzipped)
- **Total JS Size**: Target < 300KB (gzipped)
- **Image Weight**: Target < 500KB per page
- **Font Size**: Target < 50KB

### How to Measure

#### 1. Lighthouse (Chrome DevTools)
```bash
# Run in Chrome DevTools
# Performance tab → Lighthouse → Generate Report
# Target: 90+ Performance, 95+ SEO
```

#### 2. PageSpeed Insights
- URL: https://pagespeed.web.dev/
- Test both mobile and desktop
- Monitor Core Web Vitals in Search Console

#### 3. WebPageTest
- URL: https://www.webpagetest.org/
- Test from multiple locations
- Capture waterfall charts

#### 4. Next.js Build Analysis
```bash
npm run build
# Analyze .next/analyze/ directory
# Check bundle sizes in build output
```

#### 5. Chrome Performance Profiler
- Record performance during page load
- Identify long tasks and blocking scripts
- Analyze main thread activity

### Before/After Checklist

#### Before Optimization
- [ ] Run Lighthouse audit (Desktop)
- [ ] Run Lighthouse audit (Mobile)
- [ ] PageSpeed Insights score
- [ ] WebPageTest waterfall
- [ ] Bundle size analysis (`npm run build`)
- [ ] Core Web Vitals from Search Console
- [ ] Screenshot of Network tab (first load)
- [ ] Screenshot of Performance tab
- [ ] Document current TTFB
- [ ] Document current LCP

#### After Optimization
- [ ] Re-run all above tests
- [ ] Compare metrics side-by-side
- [ ] Verify improvements meet targets
- [ ] Test on real devices (3G/4G)
- [ ] Monitor for 1 week in production

---

## 3. Next.js Rendering & Caching Strategy

### Current State Analysis

**Router Type:** App Router (`src/app/` directory)

**Current Issues:**
1. Root layout is client component (`"use client"` in `layout.tsx`)
2. No explicit caching/revalidation strategy
3. Service pages using `Head` component (Pages Router pattern)
4. No ISR/SSG configuration visible

### Recommended Rendering Strategy by Page Type

#### Home Page (`src/app/page.tsx`)
**Current:** Server Component (Good)  
**Recommendation:** 
- ✅ Keep as Server Component
- Add `export const revalidate = 3600` (1 hour ISR)
- Pre-render at build time, revalidate hourly

```typescript
// src/app/page.tsx
export const revalidate = 3600; // ISR: Revalidate every hour

export default function Home() {
  // ... existing code
}
```

#### Service Pages (`src/app/services/[id]/page.tsx`)
**Current:** Client Component (❌ Issue)  
**Recommendation:**
- Convert to Server Component
- Use `generateStaticParams()` for SSG
- Implement ISR with 24-hour revalidation

```typescript
// src/app/services/[id]/page.tsx
export const revalidate = 86400; // 24 hours

export async function generateStaticParams() {
  // Pre-generate popular service pages
  const popularServices = ['ai-ml', 'blockchain', 'development', 'consulting'];
  return popularServices.map((id) => ({ id }));
}

export default async function ServiceDetailPage({ params }: { params: { id: string } }) {
  // Server component - fetch data here
  const service = await getServiceData(params.id);
  // ... render
}
```

#### Blog Pages (`src/app/blog/page.tsx`, `src/app/blog-details/page.tsx`)
**Current:** Unknown  
**Recommendation:**
- Use SSG with ISR
- Revalidate every 6 hours
- Pre-generate latest 20 posts

```typescript
export const revalidate = 21600; // 6 hours
```

#### Contact Page (`src/app/contact/page.tsx`)
**Current:** Server Component (Good)  
**Recommendation:**
- Keep as Server Component
- No caching needed (dynamic form)
- Ensure form submission is client-side

#### About Page (`src/app/about/page.tsx`)
**Current:** Server Component (Good)  
**Recommendation:**
- Use SSG with long revalidation (weekly)
- `export const revalidate = 604800` (7 days)

### Caching Strategy Implementation

#### 1. Update `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    domains: ['img.freepik.com', 'images.unsplash.com', 'appinventiv.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Compression
  compress: true,
  
  // Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons'],
  },
  
  // Remove powered-by header
  poweredByHeader: false,
};

module.exports = nextConfig;
```

#### 2. Fix Root Layout (Critical)

**File:** `src/app/layout.tsx`

**Current Issue:** Uses `"use client"` directive, making entire app client-rendered.

**Fix:**

```typescript
// src/app/layout.tsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata = {
  metadataBase: new URL('https://www.aictum.com'),
  title: {
    default: 'Aictum - AI, ML & Blockchain Technology Solutions',
    template: '%s | Aictum'
  },
  description: 'Leading global technology company specializing in AI, Machine Learning, Blockchain, and Digital Transformation.',
  // ... rest of metadata
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className={inter.variable}>
      <head>
        {/* Remove manual font preconnect - next/font handles this */}
        {/* Keep only essential meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/AictumFavicon.jpg" />
        <link rel="apple-touch-icon" href="/images/AictumFavicon.jpg" />
        <meta name="theme-color" content="#AE69DF" />
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black font-sans`}>
        <Providers>
          <div className="min-h-screen flex flex-col max-w-[100vw] overflow-x-hidden">
            <Header />
            <main className="flex-grow w-full">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
```

**Key Changes:**
- ❌ Remove `"use client"` directive
- ✅ Move font to CSS variable approach
- ✅ Add proper metadata export
- ✅ Remove duplicate font loading from CSS

#### 3. Fix Font Loading in CSS

**File:** `src/styles/index.css`

**Current Issue:** Line 1 imports Google Fonts via CSS, duplicating `next/font/google`.

**Fix:**

```css
/* Remove this line: */
/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap') layer(base); */

/* Keep everything else, but update font-family reference */
@layer base {
  body {
    font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
  }
}

/* Remove duplicate @font-face at bottom if exists */
```

#### 4. Fix Service Pages Metadata

**File:** `src/app/services/[id]/page.tsx`

**Current Issue:** Uses `Head` component from `next/head` (Pages Router pattern).

**Fix:**

```typescript
// src/app/services/[id]/page.tsx
import { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";

// Remove: import Head from "next/head";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const service = servicesData[params.id];
  if (!service) {
    return genMeta({
      title: "Service Not Found",
      description: "The requested service could not be found.",
    });
  }
  
  return genMeta({
    title: `${service.title} Services - Expert Solutions | Aictum`,
    description: service.description.substring(0, 160),
    keywords: [params.id, `${params.id} services`, "AI services"],
    canonical: `${siteConfig.url}/services/${params.id}`,
    ogImage: service.images?.[0] || "/images/services/default.jpg",
  });
}

export default async function ServiceDetailPage({ params }: { params: { id: string } }) {
  // Remove Head component usage
  // Remove script tags with dangerouslySetInnerHTML
  // Use proper JSON-LD in component return
  
  const service = servicesData[params.id];
  
  return (
    <>
      {/* JSON-LD as separate component or in layout */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      {/* Rest of component */}
    </>
  );
}
```

**Apply same fix to:**
- `src/app/blockchain/page.tsx`
- `src/app/ai-ml/page.tsx`
- `src/app/development/page.tsx`
- `src/app/consulting/page.tsx`

---

## 4. Frontend Performance Optimization

### Bundle Size Optimization

#### Current Dependencies Analysis

**Heavy Dependencies:**
- `motion` (framer-motion): ~50KB gzipped
- `swiper`: ~30KB gzipped
- `react-icons`: ~100KB+ (all icons)
- `lucide-react`: ~200KB+ (all icons)

#### Optimization Strategies

##### 1. Tree-Shaking & Dynamic Imports

**Heavy Components to Lazy Load:**

```typescript
// src/app/page.tsx
import dynamic from 'next/dynamic';

// Lazy load heavy components
const AictumBot = dynamic(() => import('@/components/AictumBot'), {
  ssr: false, // Chat bot doesn't need SSR
  loading: () => null, // No loading state needed
});

const Video = dynamic(() => import('@/components/Video'), {
  loading: () => <div className="h-96 bg-gray-200 animate-pulse" />,
});

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="h-64 bg-gray-200 animate-pulse" />,
});

// Keep critical above-fold components as regular imports
import Hero from "@/components/Hero";
import Features from "@/components/Features";
```

##### 2. Optimize Icon Imports

**Current:** Full library imports
```typescript
import { FaCheck, FaLightbulb } from "react-icons/fa";
```

**Optimized:** Individual icon imports
```typescript
// Create: src/lib/icons.ts
export { FaCheck } from "react-icons/fa/faCheck";
export { FaLightbulb } from "react-icons/fa/faLightbulb";
// Or use lucide-react which has better tree-shaking
import { Check, Lightbulb } from "lucide-react";
```

**Better:** Use `lucide-react` with tree-shaking
```typescript
// next.config.js already has optimizePackageImports for lucide-react
import { Check, Lightbulb } from "lucide-react";
```

##### 3. Optimize Animation Library

**Current:** Using `motion` (framer-motion v12)
```typescript
import * as motion from 'motion/react-client';
```

**Options:**

**Option A:** Use CSS animations for simple animations
```css
/* Replace simple motion animations with CSS */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
```

**Option B:** Lazy load motion only where needed
```typescript
const MotionDiv = dynamic(() => import('motion/react-client').then(mod => mod.motion.div), {
  ssr: false,
});
```

**Option C:** Use lighter alternative like `react-spring` or `@react-spring/web`

##### 4. Remove Unused Dependencies

**Potentially Unused:**
- `react-router-dom` - Not needed in Next.js App Router
- `resize-observer-polyfill` - Modern browsers don't need this
- `dropdown-menu` - Check if actually used

**Action:** Audit and remove unused packages
```bash
npm uninstall react-router-dom resize-observer-polyfill
```

##### 5. Route-Level Code Splitting

Next.js automatically splits by route, but ensure:
- No shared heavy dependencies in root layout
- Use dynamic imports for route-specific heavy code

### Component Optimization

#### Convert Client Components to Server Components

**Priority Files to Convert:**

1. **`src/components/Features/index.tsx`** - Likely can be server component
2. **`src/components/Blog/index.tsx`** - Can be server component
3. **`src/components/About/*.tsx`** - Most can be server components
4. **`src/components/Service/AllServiceCard.tsx`** - Can be server component

**Pattern:**

```typescript
// Before (Client Component)
"use client";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* content */}
    </motion.div>
  );
}

// After (Server Component with CSS animations)
// Remove "use client"
export default function Features() {
  return (
    <div className="animate-fade-in">
      {/* content */}
    </div>
  );
}
```

#### Reduce Re-renders

**Issues Found:**
- `AictumBot` re-renders on every state change
- Header scroll listener causes re-renders
- Theme provider might cause unnecessary re-renders

**Fixes:**

```typescript
// src/components/AictumBot.tsx
// Use React.memo for expensive components
export default React.memo(AictumBot);

// src/components/Header/index.tsx
// Throttle scroll listener
useEffect(() => {
  let ticking = false;
  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
      ticking = true;
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

### Font Optimization

**Current Issues:**
1. Font loaded via CSS import AND next/font/google
2. No font-display strategy in CSS import
3. Missing fallback fonts

**Fix (Already covered in Layout section):**
- Use only `next/font/google`
- Remove CSS import
- Add proper fallbacks

**Additional Optimization:**

```typescript
// src/app/layout.tsx
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // ✅ Already set
  variable: '--font-inter',
  preload: true, // ✅ Add this
  fallback: ['system-ui', 'arial'], // ✅ Add this
  adjustFontFallback: true, // ✅ Prevents layout shift
});
```

### Script Optimization

#### Third-Party Scripts Audit

**Current:**
- DNS prefetch for Google Analytics (but no actual script found)
- No GTM or other tracking scripts visible

**Recommendations:**

1. **Use Next.js Script Component**
```typescript
// src/app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {/* Analytics - Load after page is interactive */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        
        {/* Chat widget - Load with low priority */}
        <Script
          src="https://widget.chatwidget.com/script.js"
          strategy="lazyOnload"
        />
        
        {children}
      </body>
    </html>
  );
}
```

2. **Consent Gating for GDPR**
```typescript
// Only load scripts after consent
const [consent, setConsent] = useState(false);

{consent && (
  <Script src="..." strategy="afterInteractive" />
)}
```

3. **Preconnect to External Domains**
```typescript
// In layout.tsx head
<link rel="preconnect" href="https://www.google-analytics.com" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://calendly.com" />
```

### Image Optimization

#### Current Issues

1. **Using `<img>` instead of `next/image`**
   - `src/components/About/WithUsYouCan.tsx` - Line 78
   - Other components may have similar issues

2. **Missing Image Optimization Config**
   - No AVIF/WebP format preference
   - No device sizes configuration
   - No cache TTL

3. **External Images Not Optimized**
   - Freepik images loaded directly
   - Unsplash images loaded directly

#### Fixes

##### 1. Replace All `<img>` with `next/image`

**File:** `src/components/About/WithUsYouCan.tsx`

```typescript
// Before
<motion.img
  src={step.image}
  alt={step.title}
  className="..."
  loading="lazy"
/>

// After
import Image from "next/image";

<Image
  src={step.image}
  alt={step.title}
  width={800}
  height={450}
  className="..."
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

**Action:** Search and replace all `<img>` tags
```bash
# Find all img tags
grep -r "<img" src/components
```

##### 2. Optimize Image Loading

**Priority Images (Above Fold):**
```typescript
// Hero images, logos
<Image
  src="/images/hero.jpg"
  alt="Hero"
  priority // ✅ Add for above-fold images
  quality={90}
  sizes="100vw"
/>
```

**Below Fold Images:**
```typescript
<Image
  src="/images/feature.jpg"
  alt="Feature"
  loading="lazy" // ✅ Default, but explicit
  quality={85} // ✅ Slightly lower for non-critical
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

##### 3. Image Compression

**Action Items:**
1. Compress all images in `public/images/`
2. Convert to WebP/AVIF format
3. Use responsive sizes

**Tool Recommendation:**
```bash
# Install sharp-cli
npm install -g sharp-cli

# Compress images
sharp -i public/images/**/*.{jpg,png} -o public/images-optimized --webp --avif
```

##### 4. External Image Optimization

**Current:** Direct external image URLs
```typescript
src="https://img.freepik.com/premium-photo/..."
```

**Options:**

**Option A:** Use Next.js Image with remotePatterns (already configured)
```typescript
<Image
  src="https://img.freepik.com/premium-photo/..."
  alt="..."
  width={800}
  height={450}
  // Next.js will optimize these
/>
```

**Option B:** Download and host images locally
- Better performance
- Full control over optimization
- No external dependency

**Recommendation:** Download critical images, use remotePatterns for less critical ones.

### CSS Optimization

#### Current Issues

1. **Large Global CSS File** (`src/styles/index.css`)
   - 312 lines
   - Many unused styles potentially
   - Tailwind should handle most styling

2. **Duplicate Font Loading**
   - Already covered

3. **No Critical CSS Extraction**
   - All CSS loaded upfront

#### Fixes

##### 1. Audit Unused CSS

**Tool:** Use PurgeCSS or Tailwind's built-in purging
```javascript
// tailwind.config.js (if exists) or postcss.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  // Tailwind v4 handles this automatically
}
```

##### 2. Split Critical CSS

**For Above-Fold Content:**
```typescript
// src/app/layout.tsx
<head>
  <style dangerouslySetInnerHTML={{
    __html: `
      /* Critical above-fold styles */
      body { font-family: var(--font-inter); }
      .hero { /* hero styles */ }
    `
  }} />
  <link rel="stylesheet" href="/styles/non-critical.css" media="print" onLoad="this.media='all'" />
</head>
```

**Better:** Use Next.js automatic CSS optimization (already enabled)

##### 3. Reduce Global Styles

**Action:** Move component-specific styles to CSS modules or inline with Tailwind
- Keep only truly global styles in `index.css`
- Use Tailwind utilities instead of custom CSS where possible

---

## 5. SEO Optimization

### Current SEO Implementation

**Strengths:**
- ✅ Good metadata structure in `src/lib/seo.ts`
- ✅ JSON-LD structured data
- ✅ Sitemap and robots.txt
- ✅ Semantic HTML structure

**Issues:**
- ❌ Root layout metadata not exported
- ❌ Service pages using wrong metadata pattern
- ❌ Missing Open Graph images
- ❌ No canonical URLs in some pages

### Fixes

#### 1. Fix Root Layout Metadata

**File:** `src/app/layout.tsx`

```typescript
import { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(", "),
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.social.twitter,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
};
```

#### 2. Ensure All Pages Have Metadata

**Checklist:**
- [ ] Home page (`src/app/page.tsx`) - ✅ Has metadata
- [ ] About page (`src/app/about/page.tsx`) - Verify
- [ ] Contact page (`src/app/contact/page.tsx`) - Verify
- [ ] Blog pages - Verify
- [ ] Service pages - ❌ Need fixing (using Head)

#### 3. Add Missing Open Graph Images

**Action:**
1. Create OG images for each page type (1200x630px)
2. Store in `public/images/og/`
3. Reference in metadata

#### 4. Fix Canonical URLs

**Ensure all pages have:**
```typescript
export const metadata = {
  alternates: {
    canonical: `${siteConfig.url}/current-page`,
  },
};
```

#### 5. Improve Structured Data

**Current:** Basic schemas exist

**Enhancements:**
- Add `BreadcrumbList` to all pages
- Add `Article` schema to blog posts
- Add `FAQPage` schema where FAQs exist
- Add `Service` schema to service pages

---

## 6. Accessibility Optimization

### Current Issues

1. **Missing Alt Text** - Some images may lack proper alt text
2. **Color Contrast** - Need to verify WCAG AA compliance
3. **Keyboard Navigation** - Chat bot and dropdowns need testing
4. **ARIA Labels** - Some interactive elements missing labels

### Fixes

#### 1. Image Alt Text Audit

**Action:** Review all images
```typescript
// Ensure all images have descriptive alt text
<Image
  src="/images/feature.jpg"
  alt="AI-powered feature dashboard showing real-time analytics" // ✅ Descriptive
  // Not: alt="image" or alt="feature"
/>
```

#### 2. Color Contrast

**Tool:** Use WAVE or axe DevTools
- Verify all text meets WCAG AA (4.5:1 for normal text)
- Verify interactive elements meet contrast requirements

#### 3. Keyboard Navigation

**Fix Chat Bot:**
```typescript
// src/components/AictumBot.tsx
<button
  onClick={() => setIsOpen(true)}
  aria-label="Open Aictum AI Assistant chat"
  aria-expanded={isOpen}
  className="..."
>
  <BotIcon />
</button>
```

#### 4. ARIA Labels

**Add to:**
- Navigation menu items
- Dropdown menus
- Form inputs
- Buttons without visible text

---

## 7. Implementation Priority & Timeline

### Phase 1: Critical Fixes (Week 1)
**Impact: High | Effort: Low-Medium**

1. ✅ Fix root layout (remove "use client")
2. ✅ Fix font loading duplication
3. ✅ Add caching strategy to next.config.js
4. ✅ Fix service pages metadata (remove Head)
5. ✅ Add image optimization config

**Expected Improvement:** 30-40% performance gain

### Phase 2: Performance Optimization (Week 2)
**Impact: High | Effort: Medium**

1. ✅ Convert client components to server components (priority files)
2. ✅ Implement dynamic imports for heavy components
3. ✅ Optimize icon imports
4. ✅ Replace all `<img>` with `next/image`
5. ✅ Compress and optimize images

**Expected Improvement:** 20-30% additional performance gain

### Phase 3: Advanced Optimizations (Week 3)
**Impact: Medium | Effort: High**

1. ✅ Reduce animation library usage
2. ✅ Implement critical CSS
3. ✅ Optimize third-party scripts
4. ✅ Full accessibility audit and fixes
5. ✅ SEO enhancements

**Expected Improvement:** 10-15% additional performance gain

### Phase 4: Monitoring & Fine-tuning (Ongoing)
1. Set up performance monitoring
2. A/B test optimizations
3. Monitor Core Web Vitals
4. Iterate based on real user data

---

## 8. Code Examples

### Example 1: Converting Client Component to Server Component

**Before:**
```typescript
// src/components/Features/index.tsx
"use client";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      {/* content */}
    </motion.section>
  );
}
```

**After:**
```typescript
// src/components/Features/index.tsx
// Remove "use client"
import { featuresData } from "./featuresData";

export default function Features() {
  return (
    <section className="animate-fade-in">
      {featuresData.map((feature) => (
        <div key={feature.id}>
          {/* content */}
        </div>
      ))}
    </section>
  );
}
```

### Example 2: Proper Metadata in App Router

**Before:**
```typescript
// src/app/services/[id]/page.tsx
"use client";
import Head from "next/head";

export default function ServicePage() {
  return (
    <>
      <Head>
        <title>Service</title>
      </Head>
      {/* content */}
    </>
  );
}
```

**After:**
```typescript
// src/app/services/[id]/page.tsx
import { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";

export async function generateMetadata({ params }): Promise<Metadata> {
  return genMeta({
    title: "Service Title",
    description: "Service description",
  });
}

export default function ServicePage({ params }) {
  // Server component - can fetch data here
  return (
    <>
      {/* content */}
    </>
  );
}
```

### Example 3: Optimized Image Loading

**Before:**
```typescript
<img
  src="/images/hero.jpg"
  alt="Hero"
  className="w-full h-full"
/>
```

**After:**
```typescript
import Image from "next/image";

<Image
  src="/images/hero.jpg"
  alt="Descriptive hero image showing AI technology"
  fill
  priority
  quality={90}
  sizes="100vw"
  className="object-cover"
/>
```

---

## 9. Testing & Validation

### Performance Testing Checklist

- [ ] Lighthouse score > 90 (Desktop)
- [ ] Lighthouse score > 85 (Mobile)
- [ ] LCP < 2.5s
- [ ] INP < 200ms
- [ ] CLS < 0.1
- [ ] TTFB < 600ms
- [ ] Bundle size < 300KB gzipped
- [ ] No render-blocking resources
- [ ] Images optimized (WebP/AVIF)
- [ ] Fonts optimized (preload, swap)

### SEO Testing Checklist

- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] All pages have canonical URLs
- [ ] Open Graph tags present
- [ ] Twitter Card tags present
- [ ] Structured data valid (use Google Rich Results Test)
- [ ] Sitemap accessible
- [ ] Robots.txt correct
- [ ] No duplicate content
- [ ] Mobile-friendly (Google Mobile-Friendly Test)

### Accessibility Testing Checklist

- [ ] WCAG AA compliance
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast meets standards
- [ ] All images have alt text
- [ ] Form labels present
- [ ] ARIA labels where needed

---

## 10. Monitoring & Maintenance

### Tools to Set Up

1. **Google Search Console**
   - Monitor Core Web Vitals
   - Track search performance
   - Identify indexing issues

2. **Google Analytics 4**
   - Track user behavior
   - Monitor page load times
   - Identify slow pages

3. **Vercel Analytics** (if using Vercel)
   - Real user monitoring
   - Core Web Vitals tracking

4. **Sentry** (optional)
   - Error tracking
   - Performance monitoring

### Regular Maintenance Tasks

**Weekly:**
- Review Core Web Vitals in Search Console
- Check for new performance regressions
- Monitor bundle size changes

**Monthly:**
- Full Lighthouse audit
- Review and update dependencies
- Audit new images for optimization
- Check for new accessibility issues

**Quarterly:**
- Full SEO audit
- Performance optimization review
- Accessibility compliance check
- Update optimization plan based on new Next.js features

---

## 11. Expected Results

### Performance Improvements

| Metric | Before (Est.) | After (Target) | Improvement |
|--------|---------------|----------------|-------------|
| Lighthouse Performance | 60-70 | 90+ | +30-40 points |
| LCP | 3.5-4.5s | <2.5s | 40-50% faster |
| TTFB | 800-1200ms | <600ms | 30-40% faster |
| Bundle Size | 400-500KB | <300KB | 30-40% smaller |
| First Load JS | 200-300KB | <100KB | 50-60% smaller |

### SEO Improvements

- Better search rankings from improved Core Web Vitals
- Faster indexing from proper metadata
- Better social sharing from OG tags
- Improved structured data visibility

### User Experience Improvements

- Faster page loads
- Smoother interactions
- Better mobile experience
- Improved accessibility

---

## 12. Additional Recommendations

### Infrastructure

1. **CDN Setup**
   - Use Vercel Edge Network or Cloudflare
   - Cache static assets globally

2. **Image CDN**
   - Consider Cloudinary or Imgix for advanced optimization
   - Automatic format conversion
   - Responsive image generation

3. **Database Optimization** (if applicable)
   - Optimize queries
   - Add caching layer (Redis)
   - Use connection pooling

### Future Considerations

1. **React Server Components** (already using, optimize further)
2. **Streaming SSR** for faster perceived performance
3. **Partial Prerendering** (when available in Next.js)
4. **Edge Functions** for API routes
5. **Service Worker** for offline support

---

## Conclusion

This optimization plan addresses critical performance and SEO issues in the Aictum marketing website. The most impactful changes are:

1. **Converting root layout to server component** - Reduces initial bundle by 30-40%
2. **Implementing proper caching** - Improves TTFB by 50-70%
3. **Fixing font loading** - Improves LCP by 200-400ms
4. **Optimizing images** - Reduces payload by 40-60%
5. **Converting client components** - Reduces hydration cost by 50-70%

Following this plan should result in:
- **90+ Lighthouse Performance score**
- **Sub-2.5s LCP**
- **Improved SEO rankings**
- **Better user experience**

**Next Steps:**
1. Review and prioritize fixes
2. Implement Phase 1 critical fixes
3. Measure baseline performance
4. Iterate through remaining phases
5. Monitor and maintain

---

**Document Version:** 1.0  
**Last Updated:** January 2025  
**Author:** Technical SEO & Performance Audit
