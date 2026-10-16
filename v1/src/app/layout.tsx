import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Tracking } from "@/components/analytics/Tracking";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { brand, seo } from "@/content/site";
import { absoluteUrl, hasTracking, siteUrl, trackingIds } from "@/lib/env";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "WONK"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  applicationName: brand.name,
  alternates: { canonical: absoluteUrl("/") },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: brand.locale,
    url: absoluteUrl("/"),
    siteName: brand.name,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#8f0012",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: o IntroScript marca o <html> com data-intro antes do React assumir.
    <html
      lang={brand.language}
      className={`${fraunces.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <body>
        {children}
        <SmoothScroll />
        {/* Aviso de cookies e ferramentas de análise, só com algum ID configurado (lib/env.ts). */}
        {hasTracking ? <Tracking siteUrl={siteUrl} ids={trackingIds} /> : null}
      </body>
    </html>
  );
}
