import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'VerticalFlow | Creative Portfolio & Design Showcase',
  description: 'Personal creative portfolio showcasing brand development, digital design, video production, and visual storytelling projects across various industries.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://verticalflow.gr'),
  keywords: ['portfolio', 'designer', 'creative', 'branding', 'video production', 'digital design', 'showcase'],
  alternates: {
    types: {
      'application/rss+xml': [{ url: '/rss.xml', title: 'VerticalFlow Portfolio RSS Feed' }],
    },
  },
  openGraph: {
    type: 'website',
    locale: 'el_GR',
    url: '/',
    siteName: 'VerticalFlow',
    title: 'VerticalFlow | Creative Portfolio & Design Showcase',
    description: 'Personal creative portfolio showcasing brand development, digital design, and visual storytelling projects.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VerticalFlow | Creative Portfolio & Design Showcase',
    description: 'Personal creative portfolio showcasing brand development, digital design, and visual storytelling projects.',
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
