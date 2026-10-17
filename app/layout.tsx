import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/provider";
import JsonLd from "@/components/jsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://tanzimkshanto.dev"),
  title: "Tanzim Khan Shanto — Full-Stack Developer",
  description: "Full-stack developer building fast, type-safe web apps with Next.js, Astro, and Go. Passionate about performance and clean UI.",
  keywords: "Tanzim Khan Shanto, Full Stack Developer, Next.js, Astro, Go, Web Developer",
  alternates: {
    canonical: "https://tanzimkshanto.dev",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/self-photo.jpg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Tanzim Khan Shanto — Full-Stack Developer",
    description: "Full-stack developer building fast, type-safe web apps with Next.js, Astro, and Go. Passionate about performance and clean UI.",
    images: [
      {
        url: "https://tanzimkshanto.dev/images/self-photo.jpg",
        width: 1024,
        height: 1024,
        alt: "Tanzim Khan Shanto — Full-Stack Developer",
      },
    ],
    url: "https://tanzimkshanto.dev",
    siteName: "Tanzim Khan Shanto",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanzim Khan Shanto — Full-Stack Developer",
    description: "Full-stack developer building fast, type-safe web apps with Next.js, Astro, and Go. Passionate about performance and clean UI.",
    creator: "@tanzimkshanto",
    images: ["https://tanzimkshanto.dev/images/self-photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={jetbrainsMono.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        <JsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
