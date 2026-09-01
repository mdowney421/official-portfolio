import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Providers } from "./providers";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://mattdowneydev.com";
const TITLE = "Matt Downey — Full-Stack Software Engineer";
const DESCRIPTION =
  "Matt Downey is a full-stack software engineer who designs, builds, and ships reliable web applications — from product engineering to cloud architecture and technical consulting.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Matt Downey",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#04050a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <head>
        <Script id="gtag-consent-default" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            var storedConsent;
            try { storedConsent = localStorage.getItem("portfolio-cookie-consent"); } catch (e) {}
            gtag('consent', 'default', {
              analytics_storage: storedConsent === 'granted' ? 'granted' : 'denied'
            });`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FMTSTC36H3"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`gtag('js', new Date());
            gtag('config', 'G-FMTSTC36H3');`}
        </Script>
      </head>
      <body>
        <Providers>
          {children}
          <CookieConsentBanner />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
