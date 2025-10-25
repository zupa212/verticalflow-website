import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { PasswordProtection } from '@/components/PasswordProtection';

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
        <link rel="icon" href="/icon" />
        <link rel="apple-touch-icon" href="/apple-icon" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <style dangerouslySetInnerHTML={{
          __html: `
            * {
              -webkit-overflow-scrolling: touch;
              overscroll-behavior: none;
            }
            body {
              touch-action: pan-y;
              -webkit-touch-callout: none;
              -webkit-user-select: none;
              user-select: none;
            }
          `
        }} />
      </head>
      <body className={spaceGrotesk.className}>
        <PasswordProtection>
          {children}
        </PasswordProtection>
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
