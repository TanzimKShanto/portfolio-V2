import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://tanzimk-shanto.vercel.app"),
  title: "Tanzim Khan Shanto — Full-Stack Developer",
  description: "Full-stack developer building fast, type-safe web apps with Next.js, Astro, and Go. Passionate about performance and clean UI.",
  keywords: "Tanzim Khan Shanto, Full Stack Developer, Next.js, Astro, Go, Web Developer",
  openGraph: {
    title: "Tanzim Khan Shanto — Full-Stack Developer",
    description: "Full-stack developer building fast, type-safe web apps with Next.js, Astro, and Go. Passionate about performance and clean UI.",
    images: [
      {
        url: "https://tanzimk-shanto.vercel.app/images/self-photo.png",
        width: 1024,
        height: 1024,
        alt: "Tanzim Khan Shanto — Full-Stack Developer",
      },
    ],
    url: "https://tanzimk-shanto.vercel.app",
    siteName: "Tanzim Khan Shanto",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanzim Khan Shanto — Full-Stack Developer",
    description: "Full-stack developer building fast, type-safe web apps with Next.js, Astro, and Go. Passionate about performance and clean UI.",
    creator: "@tanzimkshanto",
    images: ["https://tanzimk-shanto.vercel.app/images/self-photo.png"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
