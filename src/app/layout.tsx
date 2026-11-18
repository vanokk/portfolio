import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';
import { siteMetadata } from '@/lib/site-metadata';
import { themeInitScript } from '@/components/theme/theme-init';
import { DotBackground } from '@/components/DotBackground';
import './globals.scss';

export const metadata: Metadata = siteMetadata;

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const hasGtm = Boolean(gtmId && /^GTM-[A-Z0-9]+$/.test(gtmId));

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Load the site font without requiring a build-time download. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        {hasGtm && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        {hasGtm && gtmId && <GoogleTagManager gtmId={gtmId} />}
        <DotBackground />
        {children}
      </body>
    </html>
  );
}
