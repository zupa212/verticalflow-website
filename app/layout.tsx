import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'VerticalFlow',
  description: 'VerticalFlow creative portfolio',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://verticalflow.gr'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://verticalflow.gr" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
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
              console.log('%cNot affiliated with TerraCube or Lovable', 'color: #ef4444; font-size: 12px;');
            `,
          }}
        />
      </body>
    </html>
  );
}
