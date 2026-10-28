import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_CONFIG, SITE_URL, getWebsiteJsonLd, getPersonJsonLd } from "@/lib/seo";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1220" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MBSA Digital Marketing & Technical SEO Specialist",
    template: "%s | MBSA",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "MBSA",
    "Digital Marketing Specialist",
    "Technical SEO Specialist",
    "Core Web Vitals",
    "AEO GEO Search Optimization",
    "GA4 Analytics",
    "WordPress Development",
    "Conversion Rate Optimization",
    "London SEO Consultant",
    "UK Healthcare SEO",
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
    title: "MBSA Digital Marketing & Technical SEO Specialist",
    description: SITE_CONFIG.description,
    url: SITE_URL,
    siteName: SITE_CONFIG.siteName,
    images: [
      {
        url: `${SITE_URL}${SITE_CONFIG.defaultOgImage}`,
        width: 1200,
        height: 630,
        alt: "MBSA - Digital Marketing & Technical SEO Specialist",
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
  const websiteJsonLd = getWebsiteJsonLd();
  const personJsonLd = getPersonJsonLd();

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakartaSans.variable} ${caveat.variable} light scroll-smooth`}
      suppressHydrationWarning
    >
      <head>

        {/* Global Structured Data: WebSite & Person Entity */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased font-sans flex flex-col"
      >
        <ThemeProvider>
          <Navbar />
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
