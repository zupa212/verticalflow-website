import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'terracube. | Unlock Your Brand\'s Potential',
  description: 'A team of creative experts dedicated to helping you grow your brand and achieve your business goals through digital marketing and production services.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://terracube.gr'),
  alternates: {
    types: {
      'application/rss+xml': [{ url: '/rss.xml', title: 'terracube Blog RSS Feed' }],
    },
  },
  openGraph: {
    type: 'website',
    locale: 'el_GR',
    url: '/',
    siteName: 'terracube',
    title: 'terracube. | Unlock Your Brand\'s Potential',
    description: 'A team of creative experts dedicated to helping you grow your brand and achieve your business goals.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'terracube. | Unlock Your Brand\'s Potential',
    description: 'A team of creative experts dedicated to helping you grow your brand and achieve your business goals.',
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
