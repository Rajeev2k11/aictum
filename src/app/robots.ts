import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/*.json$',
          '/signin',
          '/signup',
          '/error',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/signin',
          '/signup',
        ],
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/signin',
          '/signup',
        ],
        crawlDelay: 0,
      },
      {
        userAgent: 'Slurp', // Yahoo
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/signin',
          '/signup',
        ],
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/signin',
          '/signup',
        ],
      },
      {
        userAgent: 'Baiduspider', // Baidu (China)
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/signin',
          '/signup',
        ],
      },
      {
        userAgent: 'YandexBot', // Yandex (Russia)
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/signin',
          '/signup',
        ],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}

