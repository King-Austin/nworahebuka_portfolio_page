import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nworah Ebuka Augustus | Senior Backend Engineer & Software Architect",
    template: "%s | Nworah Ebuka Augustus"
  },
  description: "Senior Software Architect and Backend Engineer specializing in high-performance digital ecosystems, security, and scalability. Results-oriented engineering with a product-first mindset.",
  keywords: ["Nworah Ebuka Augustus", "Software Architect", "Backend Engineer", "Python Developer", "Django Expert", "Scalable Systems", "Security Engineer"],
  authors: [{ name: "Nworah Ebuka Augustus" }],
  creator: "Nworah Ebuka Augustus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nworahebuka.nworahsoft.codes",
    title: "Nworah Ebuka | Senior Software Architect",
    description: "Architecting high-performance digital ecosystems with mathematical precision.",
    siteName: "Nworah Ebuka Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nworah Ebuka | Senior Software Architect",
    description: "Architecting high-performance digital ecosystems with mathematical precision.",
    creator: "@KingAustin360",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
