import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { BackToTopButton } from '@/components/back-to-top-button';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: '',
  description: '',
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
         </ThemeProvider>
      </body>
    </html>
  );
}
