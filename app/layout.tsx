import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Vertical Flow | The design partner for top-tier companies',
  description: 'We help funded startups ship iconic brands, conversion-ready sites, and investor-proof decks.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://verticalflow.gr'),
  alternates: {
    types: {
      'application/rss+xml': [{ url: '/rss.xml', title: 'Vertical Flow Blog RSS Feed' }],
    },
  },
  openGraph: {
    type: 'website',
    locale: 'el_GR',
    url: '/',
    siteName: 'Vertical Flow',
    title: 'Vertical Flow | The design partner for top-tier companies',
    description: 'We help funded startups ship iconic brands, conversion-ready sites, and investor-proof decks.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vertical Flow | The design partner for top-tier companies',
    description: 'We help funded startups ship iconic brands, conversion-ready sites, and investor-proof decks.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="application/rss+xml" title="Vertical Flow Blog RSS Feed" href="/rss.xml" />
      </head>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
