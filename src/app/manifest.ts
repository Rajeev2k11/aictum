import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aictum - AI, ML & Blockchain Solutions',
    short_name: 'Aictum',
    description: 'Leading global technology company specializing in AI, Machine Learning, Blockchain, and Digital Transformation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#AE69DF',
    icons: [
      {
        src: '/images/AictumFavicon.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  };
}
