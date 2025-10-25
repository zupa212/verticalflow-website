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
      </head>
      <body className={spaceGrotesk.className}>
        <PasswordProtection>
          {children}
        </PasswordProtection>
      </body>
    </html>
  );
}
