import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { BackToTopButton } from '@/components/back-to-top-button';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Sai Jeshwanth Goud | Product Manager',
  description: 'Showcasing my journey, skills & cool stuff in Product Management and UX Design',
  metadataBase: new URL('https://saijeswanthgoud.com'),
  icons: {
    icon: [
      {
        url: '/sj-high-resolution-logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/sj-high-resolution-logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/sj-high-resolution-logo.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
    shortcut: '/sj-high-resolution-logo.png',
    apple: {
      url: '/sj-high-resolution-logo.png',
      type: 'image/png',
      sizes: '180x180',
    },
  },
  openGraph: {
    title: 'Sai Jeshwanth Goud | Product Manager',
    description: 'Showcasing my journey, skills & cool stuff in Product Management and UX Design',
    url: 'https://saijeswanthgoud.com',
    siteName: 'Sai Jeshwanth Goud Portfolio',
    images: [
      {
        url: '/sj-high-resolution-logo.png',
        width: 1200,
        height: 630,
        alt: 'Sai Jeshwanth Goud Portfolio',
        type: 'image/png',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sai Jeshwanth Goud | Product Manager',
    description: 'Showcasing my journey, skills & cool stuff in Product Management and UX Design',
    creator: '@SaiJeshwanth',
    images: [{
      url: '/sj-high-resolution-logo.png',
      alt: 'Sai Jeshwanth Goud Portfolio',
      width: 1200,
      height: 630,
    }],
  },
  alternates: {
    canonical: 'https://saijeswanthgoud.com'
  },
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'Sai Jeshwanth Goud',
    statusBarStyle: 'default',
    capable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground relative`} suppressHydrationWarning>
          <ThemeProvider
             attribute="class"
             defaultTheme="dark"
             enableSystem={false} // Enforce dark theme
           >
             {children}
             <Toaster />
             <BackToTopButton />
             <Analytics />
         </ThemeProvider>
      </body>
    </html>
  );
}
