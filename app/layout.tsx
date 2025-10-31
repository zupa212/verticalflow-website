import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://verticalflow.gr';
const siteName = 'VerticalFlow';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'VerticalFlow — Creative Portfolio & Video Production',
    template: '%s | VerticalFlow',
  },
  description: 'VerticalFlow creative portfolio showcasing video production, social media content, web design, and digital marketing services. Based in Greece.',
  keywords: ['video production', 'social media content', 'web design', 'digital marketing', 'creative portfolio', 'Greece', 'video editing', 'brand identity'],
  authors: [{ name: 'VerticalFlow Team' }],
  creator: 'VerticalFlow',
  publisher: 'VerticalFlow',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: 'VerticalFlow — Creative Portfolio & Video Production',
    description: 'VerticalFlow creative portfolio showcasing video production, social media content, web design, and digital marketing services. Based in Greece.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 1200,
        alt: 'VerticalFlow Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VerticalFlow — Creative Portfolio & Video Production',
    description: 'VerticalFlow creative portfolio showcasing video production, social media content, web design, and digital marketing services.',
    images: ['/logo.png'],
    creator: '@verticalflow',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: siteUrl,
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
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/logo.png" />
        <link rel="shortcut icon" href="/icon.png" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileImage" content="/logo.png" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        {/* Bunny CDN Preconnect for faster video loading */}
        <link rel="preconnect" href="https://iframe.mediadelivery.net" />
        <link rel="preconnect" href="https://vz-01468b22-0f0.b-cdn.net" />
        <link rel="dns-prefetch" href="https://iframe.mediadelivery.net" />
        <link rel="dns-prefetch" href="https://vz-01468b22-0f0.b-cdn.net" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* iPhone Safari video playback optimization */}
        <meta name="x-ua-compatible" content="IE=edge" />
        {/* Organization JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'VerticalFlow',
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              description: 'Creative portfolio specializing in video production, social media content, web design, and digital marketing services.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'GR',
              },
              sameAs: [
                // Add your social media profiles here
                // 'https://instagram.com/verticalflow',
                // 'https://facebook.com/verticalflow',
              ],
            }),
          }}
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            /* 120fps iPhone Optimization */
            * {
              -webkit-overflow-scrolling: touch;
              overscroll-behavior: none;
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
              -webkit-perspective: 1000px;
              perspective: 1000px;
              -webkit-transform: translateZ(0);
              transform: translateZ(0);
            }
            
            html {
              scroll-behavior: smooth;
              -webkit-text-size-adjust: 100%;
              -webkit-tap-highlight-color: transparent;
            }
            
            body {
              touch-action: pan-y;
              -webkit-touch-callout: none;
              -webkit-user-select: none;
              user-select: none;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeSpeed;
              overscroll-behavior-y: none;
            }
            
            /* GPU Acceleration for smooth animations */
            video, img, canvas, svg {
              -webkit-transform: translateZ(0);
              transform: translateZ(0);
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
            }
            
            /* Disable pull-to-refresh */
            body {
              overscroll-behavior-y: none;
            }
            
            /* iOS Safari specific optimizations */
            @supports (-webkit-touch-callout: none) {
              body {
                -webkit-overflow-scrolling: touch;
              }
            }
            
            /* iPhone corner radius support */
            .corner-animation {
              border-radius: 47px;
            }
            
            /* Safe area support for iPhone */
            .corner-tl { top: env(safe-area-inset-top); left: env(safe-area-inset-left); }
            .corner-tr { top: env(safe-area-inset-top); right: env(safe-area-inset-right); }
            .corner-bl { bottom: env(safe-area-inset-bottom); left: env(safe-area-inset-left); }
            .corner-br { bottom: env(safe-area-inset-bottom); right: env(safe-area-inset-right); }
          `
        }} />
      </head>
      <body className={spaceGrotesk.className}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('%cMade with ❤️ by XUPI', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
              console.log('%cVerticalFlow Portfolio', 'color: #06b6d4; font-size: 16px;');
              
              // Global smooth scroll optimization
              document.documentElement.style.scrollBehavior = 'smooth';
              document.body.style.overflowX = 'hidden';
            `,
          }}
        />
      </body>
    </html>
  );
}
