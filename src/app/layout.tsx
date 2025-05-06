import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter for a more modern macOS feel
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster
import { ThemeProvider } from '@/components/theme-provider'; // Import ThemeProvider

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Use a CSS variable
});

export const metadata: Metadata = {
  title: 'Product Ascent Portfolio - Sai Jeshwanth Goud Illuri', // Updated Title with name
  description: 'Personal portfolio showcasing product management skills and experience.', // Updated Description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>{/* Added lang="en" */}
      {/* Added suppressHydrationWarning to body to potentially ignore extension-added attributes */}
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`} suppressHydrationWarning>
          <ThemeProvider
             attribute="class"
             defaultTheme="dark" // Set dark theme as default
             enableSystem={false} // Disable system preference detection to enforce dark theme
           >
             {children}
             <Toaster /> {/* Add Toaster */}
         </ThemeProvider>
      </body>
    </html>
  );
}