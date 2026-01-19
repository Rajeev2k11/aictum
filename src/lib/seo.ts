// SEO Configuration and Utilities
// Centralized SEO configuration for the entire application

export const siteConfig = {
  name: "Aictum",
  title: "Aictum - AI, ML & Blockchain Technology Solutions",
  description: "Leading global technology company specializing in AI, Machine Learning, Blockchain, and Digital Transformation. Transform your business with cutting-edge technology solutions.",
  url: "https://www.aictum.com", // Update with your actual domain
  ogImage: "/images/og-image.jpg", // Add your OG image
  keywords: [
    "AI solutions",
    "machine learning services",
    "blockchain development",
    "artificial intelligence consulting",
    "ML development company",
    "computer vision",
    "natural language processing",
    "custom AI development",
    "enterprise AI solutions",
    "digital transformation",
    "technology consulting",
    "cloud solutions",
    "software development",
    "data analytics",
    "automation services"
  ],
  author: "Aictum Technologies",
  creator: "Aictum",
  publisher: "Aictum Technologies",
  company: {
    name: "Aictum Technologies",
    legalName: "Aictum Technologies Inc.",
    founded: "2020", // Update with actual founding year
    email: "info@aictum.com", // Update with actual email
    phone: "+1-xxx-xxx-xxxx", // Update with actual phone
    address: {
      streetAddress: "", // Update with actual address
      addressLocality: "",
      addressRegion: "",
      postalCode: "",
      addressCountry: "US"
    }
  },
  social: {
    twitter: "@aictum", // Update with actual handle
    linkedin: "company/aictum", // Update with actual handle
    github: "aictum" // Update with actual handle
  }
};

// Generate Organization Schema
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company.name,
    legalName: siteConfig.company.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo/logo.svg`,
    foundingDate: siteConfig.company.founded,
    email: siteConfig.company.email,
    telephone: siteConfig.company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.company.address.streetAddress,
      addressLocality: siteConfig.company.address.addressLocality,
      addressRegion: siteConfig.company.address.addressRegion,
      postalCode: siteConfig.company.address.postalCode,
      addressCountry: siteConfig.company.address.addressCountry
    },
    sameAs: [
      `https://twitter.com/${siteConfig.social.twitter.replace('@', '')}`,
      `https://www.linkedin.com/${siteConfig.social.linkedin}`,
      `https://github.com/${siteConfig.social.github}`
    ],
    description: siteConfig.description
  };
}

// Generate Website Schema
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.company.name
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

// Generate Breadcrumb Schema
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`
    }))
  };
}

// Generate Service Schema
export function generateServiceSchema(service: {
  name: string;
  description: string;
  features?: string[];
  benefits?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.company.name,
      url: siteConfig.url
    },
    serviceType: service.name,
    areaServed: "Worldwide",
    hasOfferCatalog: service.features ? {
      "@type": "OfferCatalog",
      name: `${service.name} Features`,
      itemListElement: service.features.map((feature, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: typeof feature === 'string' ? feature : feature
        }
      }))
    } : undefined
  };
}

// Generate FAQ Schema
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

// Generate Article Schema (for blog posts)
export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `${siteConfig.url}${article.image}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Person",
      name: article.author
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.company.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo/logo.svg`
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${article.url}`
    }
  };
}

// Generate metadata for pages
export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage,
  noindex = false,
  nofollow = false
}: {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  nofollow?: boolean;
}) {
  const fullTitle = title.includes("Aictum") ? title : `${title} | Aictum`;
  const allKeywords = [...new Set([...siteConfig.keywords, ...keywords])];
  
  return {
    title: fullTitle,
    description,
    keywords: allKeywords.join(", "),
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    alternates: {
      canonical: canonical || siteConfig.url
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical || siteConfig.url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage || siteConfig.ogImage],
      creator: siteConfig.social.twitter,
      site: siteConfig.social.twitter
    },
    verification: {
      google: "", // Add Google Search Console verification code
      yandex: "", // Add Yandex verification code
      bing: "" // Add Bing verification code
    }
  };
}

// Helper to create JSON-LD script tag
export function createJsonLd(schema: any) {
  return {
    __html: JSON.stringify(schema)
  };
}

// SEO-friendly URL slug generator
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Extract keywords from text (simple implementation)
export function extractKeywords(text: string, count: number = 10): string[] {
  const commonWords = new Set([
    "the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for",
    "of", "with", "by", "from", "as", "is", "was", "are", "were", "been",
    "be", "have", "has", "had", "do", "does", "did", "will", "would", "should",
    "can", "could", "may", "might", "must", "shall"
  ]);

  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter(word => word.length > 3 && !commonWords.has(word));

  const frequency: Record<string, number> = {};
  words.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1;
  });

  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([word]) => word);
}
