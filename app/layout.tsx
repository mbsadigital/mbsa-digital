import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_CONFIG, SITE_URL, getOrganizationJsonLd, getWebsiteJsonLd } from "@/lib/seo";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1220" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SEO & AI Search Digital Marketing Agency | MBSA Digital",
    template: "%s | MBSA Digital",
  },
  description: "MBSA Digital is a search-led digital marketing agency for India and the UK. SEO, AI search, ads and websites that turn visits into leads. Get a free audit.",
  keywords: [
    "digital marketing agency",
    "SEO agency",
    "AI SEO agency",
    "SEO and digital marketing agency",
    "digital marketing agency India",
    "UK digital marketing agency",
    "Technical SEO",
    "Google Ads",
    "Meta Ads",
    "GA4 Analytics",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  alternates: {
    canonical: SITE_URL,
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
  openGraph: {
    title: "SEO & AI Search Digital Marketing Agency | MBSA Digital",
    description: "MBSA Digital is a search-led digital marketing agency for India and the UK. SEO, AI search, ads and websites that turn visits into leads. Get a free audit.",
    url: SITE_URL,
    siteName: SITE_CONFIG.siteName,
    images: [
      {
        url: `${SITE_URL}${SITE_CONFIG.defaultOgImage}`,
        width: 1200,
        height: 630,
        alt: "SEO & AI Search Digital Marketing Agency | MBSA Digital",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = getOrganizationJsonLd();
  const websiteJsonLd = getWebsiteJsonLd();

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakartaSans.variable} ${caveat.variable} light scroll-smooth overflow-x-hidden max-w-full`}
      suppressHydrationWarning
    >
      <head>
        {/* Global Structured Data: Organization & WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased font-sans flex flex-col w-full overflow-x-hidden max-w-full"
      >
        <ThemeProvider>
          <Navbar />
          <div className="flex-1 flex flex-col min-w-0 w-full overflow-x-clip">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
