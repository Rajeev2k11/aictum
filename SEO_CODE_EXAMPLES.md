# SEO Code Examples - Copy & Paste Templates

## 📄 Template for Static Pages

Use this template for pages like About, Contact, Blog, etc.

### Example: About Page SEO

```typescript
// src/app/about/page.tsx
import { Metadata } from "next";
import { 
  generateMetadata as genMeta, 
  siteConfig, 
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  createJsonLd 
} from "@/lib/seo";

// Generate SEO metadata
export const metadata: Metadata = genMeta({
  title: "About Us - Leading AI & Technology Company | Aictum",
  description: "Learn about Aictum's mission to transform businesses through AI, Machine Learning, and Blockchain solutions. Meet our expert team and discover our journey.",
  keywords: [
    "about aictum",
    "AI company",
    "technology company",
    "machine learning experts",
    "blockchain specialists",
    "our team",
    "company history",
    "technology vision"
  ],
  canonical: `${siteConfig.url}/about`,
  ogImage: "/images/about/about-og.jpg"
});

export default function AboutPage() {
  // Generate schemas
  const organizationSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" }
  ]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(organizationSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(breadcrumbSchema)}
      />

      {/* Page Content */}
      <main>
        <h1>About Aictum Technologies</h1>
        {/* Your content here */}
      </main>
    </>
  );
}
```

---

## 📝 Template for Blog Posts

### Example: Blog Post SEO

```typescript
// src/app/blog/[slug]/page.tsx
import { Metadata } from "next";
import { 
  generateMetadata as genMeta, 
  siteConfig,
  generateArticleSchema,
  generateBreadcrumbSchema,
  createJsonLd,
  generateSlug 
} from "@/lib/seo";

// For blog posts with dynamic content
interface BlogPost {
  title: string;
  description: string;
  content: string;
  author: string;
  publishDate: string;
  image: string;
  tags: string[];
}

// Generate metadata for blog post
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  // Fetch blog post data
  const post = await getBlogPost(params.slug); // Your data fetching logic

  return genMeta({
    title: `${post.title} | Aictum Blog`,
    description: post.description,
    keywords: post.tags,
    canonical: `${siteConfig.url}/blog/${params.slug}`,
    ogImage: post.image
  });
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await getBlogPost(params.slug);

  // Generate schemas
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.publishDate,
    author: post.author,
    url: `/blog/${params.slug}`
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${params.slug}` }
  ]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(articleSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(breadcrumbSchema)}
      />

      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  );
}

// Helper function (example)
async function getBlogPost(slug: string): Promise<BlogPost> {
  // Your data fetching logic here
  return {
    title: "Example Blog Post",
    description: "This is an example",
    content: "<p>Blog content...</p>",
    author: "John Doe",
    publishDate: "2026-01-19",
    image: "/images/blog/example.jpg",
    tags: ["AI", "Machine Learning"]
  };
}
```

---

## ❓ Template for FAQ Page

```typescript
// src/app/faq/page.tsx
import { Metadata } from "next";
import { 
  generateMetadata as genMeta, 
  siteConfig,
  generateFAQSchema,
  createJsonLd 
} from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "FAQ - Frequently Asked Questions | Aictum",
  description: "Find answers to common questions about our AI, ML, and Blockchain services. Learn about pricing, timelines, and more.",
  keywords: [
    "FAQ",
    "questions",
    "AI services questions",
    "pricing",
    "support",
    "how it works"
  ],
  canonical: `${siteConfig.url}/faq`
});

export default function FAQPage() {
  // Your FAQ data
  const faqs = [
    {
      question: "What AI services do you offer?",
      answer: "We offer comprehensive AI services including Computer Vision, Natural Language Processing, Machine Learning model development, and custom AI solutions tailored to your business needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A typical AI project takes 3-6 months from initial consultation to deployment. We provide detailed timelines during the consultation phase."
    },
    // Add more FAQs
  ];

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(faqSchema)}
      />

      <main>
        <h1>Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div key={index}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </main>
    </>
  );
}
```

---

## 📞 Template for Contact Page

```typescript
// src/app/contact/page.tsx
import { Metadata } from "next";
import { 
  generateMetadata as genMeta, 
  siteConfig,
  generateBreadcrumbSchema,
  createJsonLd 
} from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Contact Us - Get in Touch with AI Experts | Aictum",
  description: "Contact Aictum for AI, ML, and Blockchain consulting. Schedule a free consultation to discuss your project. We're here to help transform your business.",
  keywords: [
    "contact aictum",
    "AI consultation",
    "get quote",
    "contact AI company",
    "schedule consultation",
    "business inquiry"
  ],
  canonical: `${siteConfig.url}/contact`
});

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact Us", url: "/contact" }
  ]);

  // Optional: Local Business Schema for contact page
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.company.name,
    "url": siteConfig.url,
    "telephone": siteConfig.company.phone,
    "email": siteConfig.company.email,
    "address": {
      "@type": "PostalAddress",
      ...siteConfig.company.address
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$"
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(breadcrumbSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(localBusinessSchema)}
      />

      <main>
        <h1>Contact Aictum Technologies</h1>
        {/* Contact form and info */}
      </main>
    </>
  );
}
```

---

## 🛍️ Template for Product/Service Category Pages

```typescript
// src/app/ai-ml/page.tsx (Category page example)
import { Metadata } from "next";
import { 
  generateMetadata as genMeta, 
  siteConfig,
  generateBreadcrumbSchema,
  createJsonLd 
} from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "AI & ML Solutions - Artificial Intelligence Services | Aictum",
  description: "Explore our comprehensive AI and Machine Learning solutions. From Computer Vision to NLP, we deliver cutting-edge AI services for enterprise success.",
  keywords: [
    "AI solutions",
    "machine learning services",
    "artificial intelligence",
    "computer vision",
    "natural language processing",
    "deep learning",
    "AI consulting"
  ],
  canonical: `${siteConfig.url}/ai-ml`
});

export default function AIMLPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "AI & ML Solutions", url: "/ai-ml" }
  ]);

  // ItemList Schema for category pages
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "AI & ML Services",
    "description": "Our AI and Machine Learning service offerings",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Computer Vision",
        "url": `${siteConfig.url}/services/computer-vision`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Natural Language Processing",
        "url": `${siteConfig.url}/services/nlp`
      },
      // Add more services
    ]
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(breadcrumbSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(itemListSchema)}
      />

      <main>
        <h1>AI & Machine Learning Solutions</h1>
        {/* Category content */}
      </main>
    </>
  );
}
```

---

## 🖼️ Image SEO Best Practices

```typescript
import Image from "next/image";

// ✅ GOOD: Descriptive alt text with keywords
<Image
  src="/images/services/ai-machine-learning.jpg"
  alt="AI and Machine Learning solutions for enterprise by Aictum - Computer Vision, NLP, and custom AI development"
  width={1200}
  height={630}
  priority // For above-the-fold images
  sizes="(max-width: 768px) 100vw, 50vw"
/>

// ✅ GOOD: Hero images with priority loading
<Image
  src="/images/hero.jpg"
  alt="Aictum - Leading AI, ML and Blockchain development company"
  fill
  priority
  className="object-cover"
/>

// ✅ GOOD: Lazy loading for below-fold images
<Image
  src="/images/team.jpg"
  alt="Aictum expert AI development team"
  width={800}
  height={600}
  loading="lazy" // Default for next/image
  placeholder="blur"
  blurDataURL="data:image/..." // Optional
/>

// ❌ BAD: Generic alt text
<Image src="/image.jpg" alt="image" />

// ❌ BAD: No alt text
<Image src="/image.jpg" />
```

---

## 🔗 Internal Linking Best Practices

```typescript
import Link from "next/link";

// ✅ GOOD: Descriptive anchor text with keywords
<Link href="/services/computer-vision">
  Explore our Computer Vision solutions
</Link>

// ✅ GOOD: Context-rich linking
<p>
  Our <Link href="/ai-ml">AI and Machine Learning services</Link> help 
  businesses automate processes and gain insights from data.
</p>

// ✅ GOOD: CTA with clear intent
<Link href="/contact" className="btn-primary">
  Schedule a Free AI Consultation
</Link>

// ❌ BAD: Generic anchor text
<Link href="/services">Click here</Link>

// ❌ BAD: No context
<Link href="/page">Read more</Link>
```

---

## 📱 Mobile SEO Meta Tags

```typescript
// In layout.tsx or specific pages
<head>
  {/* Viewport - Mobile First */}
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
  
  {/* Format Detection */}
  <meta name="format-detection" content="telephone=yes" />
  <meta name="format-detection" content="email=yes" />
  
  {/* Apple Touch Icon */}
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  
  {/* Apple Mobile Web App */}
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="Aictum" />
  
  {/* Android Chrome Theme */}
  <meta name="theme-color" content="#AE69DF" />
  <meta name="mobile-web-app-capable" content="yes" />
</head>
```

---

## 🌐 International SEO (Hreflang)

```typescript
// For multi-language/region support
export const metadata: Metadata = {
  // ... other metadata
  alternates: {
    canonical: 'https://www.aictum.com',
    languages: {
      'en-US': 'https://www.aictum.com',
      'en-GB': 'https://www.aictum.co.uk',
      'es-ES': 'https://www.aictum.es',
      'de-DE': 'https://www.aictum.de',
    },
  },
};
```

---

## 🎯 Quick Checklist for New Pages

When creating a new page, ensure:

- [ ] Import SEO utilities from `@/lib/seo`
- [ ] Generate unique meta title (50-60 chars)
- [ ] Write compelling meta description (150-160 chars)
- [ ] Add 5-10 relevant keywords
- [ ] Set canonical URL
- [ ] Add appropriate schema (Breadcrumb minimum)
- [ ] Use proper H1 heading (one per page)
- [ ] Structure H2, H3 properly
- [ ] Optimize images with alt text
- [ ] Add internal links with descriptive anchor text
- [ ] Test with Google Rich Results Test

---

## 🚀 Common Patterns

### Pattern 1: Simple Static Page
1. Import SEO utilities
2. Generate metadata with `genMeta()`
3. Add breadcrumb schema
4. Use proper headings

### Pattern 2: Dynamic Page
1. Implement `generateMetadata()` function
2. Fetch data and generate unique metadata
3. Add relevant schemas
4. Use `generateStaticParams()` for SSG

### Pattern 3: Category/Listing Page
1. Category-focused metadata
2. Add ItemList schema
3. Link to individual items
4. Use breadcrumb navigation

---

## 💡 Pro Tips

1. **Always use `next/image`** for automatic optimization
2. **Add schemas incrementally** - breadcrumb is minimum
3. **Test schemas** at Google Rich Results Test
4. **Keep titles under 60 characters** for full display
5. **Write for humans first**, search engines second
6. **Use keywords naturally** - no stuffing
7. **Update sitemaps automatically** - use Next.js dynamic sitemap
8. **Internal linking** - link relevant pages together

---

## 📚 Additional Resources

- [Next.js Metadata Docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org Types](https://schema.org/docs/full.html)
- [Google Search Central](https://developers.google.com/search)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

---

**Ready to create SEO-optimized pages!** 🎉

Just copy the appropriate template and customize for your needs.
