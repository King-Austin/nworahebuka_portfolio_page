import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Newsreader({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: { default: `${site.name} — Backend Engineer & Systems Architect`, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: "Nworah Ebuka — Engineering Portfolio",
  authors: [{ name: site.name, url: site.origin }],
  creator: site.name,
  publisher: site.name,
  keywords: ["Nworah Ebuka", "Nworah Ebuka Augustus", "King Austin", "Nigerian backend engineer", "Python developer", "Django developer", "Node.js developer", "API engineer", "systems architect", "Websync Digital"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_NG", siteName: site.name, title: site.name, description: site.description, url: "/", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: site.name }] },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, images: ["/og-image.png"] },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml", sizes: "any" }], shortcut: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f2efe6" }, { media: "(prefers-color-scheme: dark)", color: "#151512" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const website = { "@context": "https://schema.org", "@type": "WebSite", "@id": `${site.origin}/#website`, url: site.origin, name: site.shortName, alternateName: [site.name, "King Austin"], description: site.description, inLanguage: "en-NG", publisher: { "@id": `${site.origin}/#person` } };
  return <html lang="en-NG" suppressHydrationWarning className={`${sans.variable} ${serif.variable}`}><body><JsonLd data={website} /><a href="#main" className="skip-link">Skip to content</a><Nav /><main id="main">{children}</main><Footer /><GoogleAnalytics /></body></html>;
}
