import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Sai Jeshwanth | Portfolio",
  description:
    "Showcasing my journey, skills & cool stuff in Product Management",
  metadataBase: new URL("https://www.saijeshwanthgoud.com"),
  icons: {
    icon: [
      { url: "/sj-high-resolution-logo.png", type: "image/png", sizes: "any" },
    ],
    shortcut: ["/sj-high-resolution-logo.png"],
    apple: [
      {
        url: "/sj-high-resolution-logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Sai Jeshwanth Goud | Product Manager",
    description:
      "Showcasing my journey, skills & cool stuff in Product Management and UX Design",
    url: "https://www.saijeshwanthgoud.com",
    siteName: "Sai Jeshwanth Goud Portfolio",
    images: [
      {
        url: "/sj-high-resolution-logo.png",
        width: 2000,
        height: 1500,
        alt: "Sai Jeshwanth Goud Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Jeshwanth | Product Manager",
    description:
      "Showcasing my journey, skills & cool stuff in Product Management",
    creator: "@saijeshwanthgoud",
    images: [
      {
        url: "/sj-high-resolution-logo.png",
        width: 2000,
        height: 1500,
        alt: "Sai Jeshwanth Goud Portfolio",
      },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    google: "google",
    other: {
      me: ["https://www.saijeshwanthgoud.com"],
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
