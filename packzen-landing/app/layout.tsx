/**
 * Root Layout Component
 * 
 * Performance Optimizations:
 * 1. Font Loading:
 *    - Local fonts reduce network requests
 *    - Variable fonts minimize file size while supporting multiple weights
 *    - Font display swap prevents FOIT (Flash of Invisible Text)
 * 
 * 2. Layout Optimization:
 *    - Minimal wrapper component reduces JS bundle
 *    - Static metadata generation
 *    - No client-side JavaScript unless necessary
 * 
 * Best Practices:
 * 1. TypeScript:
 *    - Readonly props prevent accidental mutations
 *    - Explicit type definitions improve maintainability
 * 
 * 2. SEO:
 *    - Proper meta tags
 *    - Semantic HTML structure
 *    - Language attribute for accessibility
 */

import { Header } from "@/components/layout/Header"; // Local component
import { Footer } from "@/components/layout/Footer"; // Local component
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PackZen - Custom Packaging Solutions",
  description: "Elevate your brand with eco-friendly, customizable packaging. Fast, easy, and affordable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}