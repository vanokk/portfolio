import type { Metadata } from 'next';
import { absoluteUrl, site, socialImage } from './site';

export const siteMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: absoluteUrl('/') }],
  alternates: { canonical: absoluteUrl('/') },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    title: site.title,
    description: site.description,
    url: absoluteUrl('/'),
    siteName: site.name,
    locale: 'en_US',
    images: [socialImage()],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [socialImage()],
  },
};
