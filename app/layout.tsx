import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { CHANNEL_URL, SITE_URL } from "./data/products";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Khushboo Master — Perfumes & Fragrances",
    template: "%s | Khushboo Master",
  },
  description:
    "Khushboo Master: a fragrance channel catalogue of the 14 verified perfume, body spray and room fragrance videos, with links to watch each video on YouTube.",
  openGraph: {
    title: "Khushboo Master — Perfumes & Fragrances",
    description:
      "A catalogue of the 14 verified Khushboo Master fragrance videos, with links to watch each one on YouTube.",
    type: "website",
    url: SITE_URL,
    siteName: "Khushboo Master",
  },
  robots: { index: true, follow: true },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Khushboo Master",
  url: SITE_URL,
  sameAs: [CHANNEL_URL],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
