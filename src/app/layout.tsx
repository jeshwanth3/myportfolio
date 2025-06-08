import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { BackToTopButton } from '@/components/back-to-top-button';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Sai Jeshwanth | Product Manager',
  description: 'Showcasing my journey, skills & cool stuff in Product Management and UX Design',
  metadataBase: new URL('https://www.saijeshwanthgoud.com'),
  icons: {
    icon: [{ url: '/sj-high-resolution-logo.png', type: 'image/png', sizes: 'any' }],
    shortcut: ['/sj-high-resolution-logo.png'],
    apple: [
      { url: '/sj-high-resolution-logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Sai Jeshwanth Goud | Product Manager',
    description: 'Showcasing my journey, skills & cool stuff in Product Management and UX Design',
    url: 'https://www.saijeshwanthgoud.com',
    siteName: 'Sai Jeshwanth Goud Portfolio',
    images: [
      {
        url: '/sj-high-resolution-logo.png',
        width: 2000,
        height: 1500,
        alt: 'Sai Jeshwanth Goud Portfolio - High Resolution'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sai Jeshwanth | Product Manager',
    description: 'Showcasing my journey, skills & cool stuff in Product Management and UX Design',
    creator: '@saijeshwanthgoud',
    images: [
      {
        url: '/sj-high-resolution-logo.png',
        width: 2000,
        height: 1500,
        alt: 'Sai Jeshwanth Goud Portfolio - High Resolution'
      }
    ],
  },
  manifest: '/manifest.json',
  verification: {
    google: 'google',
    other: {
      me: ['https://www.saijeshwanthgoud.com'],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground relative`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
          <Toaster />
          <BackToTopButton />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
