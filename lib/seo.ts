import type { Metadata } from "next";
import { type ServiceDetail } from "./servicesData";
import { type ProjectDetail } from "./projectsData";
import { type BlogPost } from "./fallbackBlogs";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.mbsadigital.com";

export const GA_MEASUREMENT_ID = "G-69X8H55WJ6";
export const GTM_ID = "GTM-KH967JPZ";

export const SITE_CONFIG = {
  name: "MBSA Digital",
  siteName: "MBSA Digital",
  role: "Search-Led Digital Marketing Agency",
  tagline: "DATA → INSIGHTS → ACTION → GROWTH",
  description:
    "MBSA Digital is a search-led digital marketing agency for the UK and India. SEO, AI search visibility, ads and websites that turn visits into leads. Free audit.",
  defaultOgImage: "/image-photo.png",
  email: "mbsadigitalsolutions@gmail.com",
  phones: {
    india: "+91-95746-96932",
    uk: "+44-7393-107859",
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/mbsa-digital",
    instagram: "https://www.instagram.com/mbsadigital",
    facebook: "https://www.facebook.com/mbsadigital",
    twitter: "https://twitter.com/mbsadigital",
  },
  addresses: [
    {
      addressLocality: "London",
      addressCountry: "GB",
    },
    {
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  ],
  areaServed: ["India", "United Kingdom"],
  knowsAbout: [
    "Technical SEO",
    "On-Page SEO",
    "Core Web Vitals Optimization",
    "AEO (Answer Engine Optimization)",
    "GEO (Generative Engine Optimization)",
    "Google Search Console Audits",
    "GA4 Measurement & Attribution",
    "Google Ads Management",
    "Meta Ads Management",
    "WordPress & Shopify Development",
    "Conversion Rate Optimization",
    "Full-Funnel Digital Marketing",
  ],
};

/* =========================================================
   METADATA CONSTRUCTOR HELPER
========================================================= */
export function constructMetadata({
  title,
  description = SITE_CONFIG.description,
  path = "",
  image = SITE_CONFIG.defaultOgImage,
  keywords = [],
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const cleanPath = path ? (path.startsWith("/") ? path : `/${path}`) : "/";
  const canonicalUrl = `${SITE_URL}${cleanPath === "/" ? "/" : cleanPath}`;
  const rawImageUrl = image.startsWith("http")
    ? image
    : `${SITE_URL}${image.startsWith("/") ? "" : "/"}${image}`;
  const fullImageUrl = encodeURI(rawImageUrl);

  const defaultKeywords = [
    "MBSA Digital",
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
  ];

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: Array.from(new Set([...defaultKeywords, ...keywords])),
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
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
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.siteName,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImageUrl],
      creator: "@mbsadigital",
    },
  };
}

/* =========================================================
   STRUCTURED DATA (JSON-LD) GENERATORS
   Exact schema matching MBSA Digital Schema Markup Audit
========================================================= */

// Full Organization Schema (Home, About, Contact)
export function getOrganizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "MBSA Digital",
    url: `${SITE_URL}/`,
    description:
      "MBSA Digital is a search-led digital marketing agency working with businesses in India, the UK and other English-speaking markets, bringing technical SEO, AI search visibility, websites, paid media and analytics together under one plan.",
    email: "mbsadigitalsolutions@gmail.com",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressCountry: "GB",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Vadodara",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "Country",
        name: "United Kingdom",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-95746-96932",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+44-7393-107859",
        contactType: "sales",
        areaServed: "GB",
        availableLanguage: ["en"],
      },
    ],
    founder: {
      "@id": `${SITE_URL}/about#muskan-shekh`,
    },
  };
}

// Compact Organization Reference (for child pages)
export function getOrganizationReferenceJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "MBSA Digital",
    url: `${SITE_URL}/`,
  };
}

// Global WebSite Schema
export function getWebsiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: "MBSA Digital",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-GB",
  };
}

// Person Schema (Founder)
export function getPersonJsonLd() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/about#muskan-shekh`,
    name: "Muskan Shekh",
    jobTitle: "Founder & Head of Search",
    url: `${SITE_URL}/about`,
    worksFor: {
      "@id": `${SITE_URL}/#organization`,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Essex",
    },
    description:
      "Muskan has worked in SEO for more than five years and holds a B.E. in Computer Engineering and an MSc in Advanced Computer Science from the University of Essex.",
    sameAs: ["https://linkedin.com/in/muskanshekh"],
  };
}

// Complete Homepage @graph Schema
export function getHomeGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationJsonLd(),
      getWebsiteJsonLd(),
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: "SEO & AI Search Agency in UK & India | MBSA Digital",
        description:
          "MBSA Digital is a search-led digital marketing agency for the UK and India.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        inLanguage: "en-GB",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      getPersonJsonLd(),
    ],
  };
}

// BreadcrumbList Schema helper
export function getBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http")
        ? item.path
        : `${SITE_URL}${item.path.startsWith("/") ? "" : "/"}${item.path}`,
    })),
  };
}

// Services CollectionPage Schema (/services hub)
export function getServicesCollectionJsonLd(services: ServiceDetail[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationReferenceJsonLd(),
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/services#webpage`,
        url: `${SITE_URL}/services`,
        name: "Digital Marketing & SEO Services | MBSA Digital",
        description: "Explore 25 digital marketing services from MBSA Digital.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        inLanguage: "en-GB",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/services#breadcrumb`,
        },
        mainEntity: {
          "@id": `${SITE_URL}/services#services`,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/services#services`,
        name: "MBSA Digital services",
        numberOfItems: services.length,
        itemListElement: services.map((s, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: s.title,
          url: `${SITE_URL}/services/${s.id}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/services#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE_URL}/services`,
          },
        ],
      },
    ],
  };
}

// Dynamic Single Service Schema (/services/[id])
export function getServiceCombinedGraphJsonLd(service: ServiceDetail) {
  const serviceUrl = `${SITE_URL}/services/${service.id}`;
  const rawImage = service.image || "/images/services/dark/seo-services.png";
  const imageUrl = rawImage.startsWith("http")
    ? rawImage
    : `${SITE_URL}${rawImage.startsWith("/") ? "" : "/"}${rawImage}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationReferenceJsonLd(),
      {
        "@type": "WebPage",
        "@id": `${serviceUrl}#webpage`,
        url: serviceUrl,
        name: service.metaTitle || `${service.title} | MBSA Digital`,
        description:
          service.metaDescription || service.longDescription || service.desc,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        inLanguage: "en-GB",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        breadcrumb: {
          "@id": `${serviceUrl}#breadcrumb`,
        },
        about: {
          "@id": `${serviceUrl}#service`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: imageUrl,
        },
      },
      {
        "@type": "Service",
        "@id": `${serviceUrl}#service`,
        name: service.title,
        serviceType: service.serviceType || service.title,
        category: service.category || "SEO & AI Search",
        description:
          service.schemaDescription || service.longDescription || service.desc,
        url: serviceUrl,
        image: imageUrl,
        provider: {
          "@id": `${SITE_URL}/#organization`,
        },
        areaServed: [
          {
            "@type": "Country",
            name: "India",
          },
          {
            "@type": "Country",
            name: "United Kingdom",
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${serviceUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE_URL}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: serviceUrl,
          },
        ],
      },
    ],
  };
}

export function getServiceJsonLd(service: ServiceDetail) {
  return getServiceCombinedGraphJsonLd(service);
}

// Projects / Portfolio Hub Schema (/projects)
export function getProjectsCollectionJsonLd(projects: ProjectDetail[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationReferenceJsonLd(),
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/projects#webpage`,
        url: `${SITE_URL}/projects`,
        name: "SEO & Digital Marketing Case Studies | MBSA Digital",
        description:
          "MBSA Digital case studies in SEO, local search, websites, paid ads and social media.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        inLanguage: "en-GB",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/projects#breadcrumb`,
        },
        mainEntity: {
          "@id": `${SITE_URL}/projects#casestudies`,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/projects#casestudies`,
        name: "MBSA Digital case studies",
        numberOfItems: projects.length,
        itemListElement: projects.map((p, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: p.title,
          url: `${SITE_URL}/projects/${p.id}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/projects#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${SITE_URL}/projects`,
          },
        ],
      },
    ],
  };
}

// Dynamic Single Case Study / Project Schema (/projects/[id])
export function getProjectJsonLd(project: ProjectDetail) {
  const projectUrl = `${SITE_URL}/projects/${project.id}`;
  const rawImage = project.image.startsWith("http")
    ? project.image
    : `${SITE_URL}${project.image.startsWith("/") ? "" : "/"}${project.image}`;
  const headline = project.metaTitle
    ? project.metaTitle.replace(/\s*\|\s*MBSA Digital$/i, "")
    : `${project.title} Case Study`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationReferenceJsonLd(),
      {
        "@type": "WebPage",
        "@id": `${projectUrl}#webpage`,
        url: projectUrl,
        name: project.metaTitle || `${project.title} Case Study | MBSA Digital`,
        description: project.metaDescription || project.overview,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        inLanguage: "en-GB",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        breadcrumb: {
          "@id": `${projectUrl}#breadcrumb`,
        },
        mainEntity: {
          "@id": `${projectUrl}#casestudy`,
        },
      },
      {
        "@type": "Article",
        "@id": `${projectUrl}#casestudy`,
        headline,
        description: project.metaDescription || project.overview,
        url: projectUrl,
        image: encodeURI(rawImage),
        author: {
          "@id": `${SITE_URL}/#organization`,
        },
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        mainEntityOfPage: {
          "@id": `${projectUrl}#webpage`,
        },
        about: {
          "@type": "Organization",
          name: project.client,
          url: project.siteUrl,
        },
        inLanguage: "en-GB",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${projectUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${SITE_URL}/projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: projectUrl,
          },
        ],
      },
    ],
  };
}

// Industries Schema (/industries)
export function getIndustriesGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationReferenceJsonLd(),
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/industries#webpage`,
        url: `${SITE_URL}/industries`,
        name: "SEO for Healthcare, Pharmacy & D2C | MBSA Digital",
        description:
          "SEO and digital marketing for healthcare and pharmacy, health, beauty and wellness, and ecommerce and D2C brands.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        inLanguage: "en-GB",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/industries#breadcrumb`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/industries#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Industries",
            item: `${SITE_URL}/industries`,
          },
        ],
      },
    ],
  };
}

// About Us Schema (/about)
export function getAboutGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationJsonLd(),
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/about#webpage`,
        url: `${SITE_URL}/about`,
        name: "About MBSA Digital: Search-Led Marketing Agency",
        description:
          "Meet MBSA Digital, a search-led marketing agency in India and the UK.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        inLanguage: "en-GB",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/about#breadcrumb`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
        mainEntity: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      getPersonJsonLd(),
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/about#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Us",
            item: `${SITE_URL}/about`,
          },
        ],
      },
    ],
  };
}

// How We Work Schema (/how-we-work)
export function getHowWeWorkGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationReferenceJsonLd(),
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/how-we-work#webpage`,
        url: `${SITE_URL}/how-we-work`,
        name: "How We Work: Our 4-Step Process | MBSA Digital",
        description:
          "How MBSA Digital works: a free discovery call, then a four-step process from audit to monthly reporting.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        inLanguage: "en-GB",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/how-we-work#breadcrumb`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/how-we-work#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: `${SITE_URL}/about`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "How We Work",
            item: `${SITE_URL}/how-we-work`,
          },
        ],
      },
    ],
  };
}

// Contact Us Schema (/contact)
export function getContactGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationJsonLd(),
      {
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact#webpage`,
        url: `${SITE_URL}/contact`,
        name: "Contact Us for a Free SEO Audit | MBSA Digital",
        description:
          "Contact MBSA Digital for a free SEO audit or consultation.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        inLanguage: "en-GB",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/contact#breadcrumb`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
        mainEntity: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/contact#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact",
            item: `${SITE_URL}/contact`,
          },
        ],
      },
    ],
  };
}

// Blog Collection Hub Schema (/blog)
export function getBlogCollectionJsonLd(blogs: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationReferenceJsonLd(),
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/blog#webpage`,
        url: `${SITE_URL}/blog`,
        name: "SEO & AI Search Blog: Guides & Insights | MBSA Digital",
        description:
          "Plain-English guides on SEO, AI search, local SEO, ecommerce and GA4 from MBSA Digital.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        inLanguage: "en-GB",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/blog#breadcrumb`,
        },
        mainEntity: {
          "@id": `${SITE_URL}/blog#blog`,
        },
      },
      {
        "@type": "Blog",
        "@id": `${SITE_URL}/blog#blog`,
        name: "MBSA Digital Insights",
        url: `${SITE_URL}/blog`,
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: "en-GB",
        blogPost: blogs.map((b) => {
          const blogUrl = `${SITE_URL}/blog/${b.slug || b._id}`;
          const rawImage =
            b.coverImage || b.imageUrl || SITE_CONFIG.defaultOgImage;
          const imageUrl = rawImage.startsWith("http")
            ? rawImage
            : `${SITE_URL}${rawImage.startsWith("/") ? "" : "/"}${rawImage}`;
          return {
            "@type": "BlogPosting",
            "@id": `${blogUrl}#article`,
            headline: b.title,
            url: blogUrl,
            datePublished: "2026-11-16T10:00:00Z",
            image: encodeURI(imageUrl),
            author: {
              "@id": `${SITE_URL}/about#muskan-shekh`,
            },
          };
        }),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/blog#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_URL}/blog`,
          },
        ],
      },
    ],
  };
}

// Dynamic Single BlogPosting Schema (/blog/[id])
export function getBlogPostJsonLd(blog: BlogPost) {
  const blogUrl = `${SITE_URL}/blog/${blog.slug || blog._id}`;
  const rawImage =
    blog.coverImage || blog.imageUrl || SITE_CONFIG.defaultOgImage;
  const rawImageUrl = rawImage.startsWith("http")
    ? rawImage
    : `${SITE_URL}${rawImage.startsWith("/") ? "" : "/"}${rawImage}`;
  const imageUrl = encodeURI(rawImageUrl);

  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationReferenceJsonLd(),
      {
        "@type": "WebPage",
        "@id": `${blogUrl}#webpage`,
        url: blogUrl,
        name: blog.metaTitle || `${blog.title} | MBSA Digital Blog`,
        description: blog.metaDescription || blog.excerpt || blog.description,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        inLanguage: "en-GB",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        breadcrumb: {
          "@id": `${blogUrl}#breadcrumb`,
        },
        primaryImageOfPage: {
          "@id": `${blogUrl}#primaryimage`,
        },
      },
      {
        "@type": "BlogPosting",
        "@id": `${blogUrl}#article`,
        headline: blog.title,
        description: blog.metaDescription || blog.excerpt || blog.description,
        url: blogUrl,
        mainEntityOfPage: {
          "@id": `${blogUrl}#webpage`,
        },
        isPartOf: {
          "@id": `${SITE_URL}/blog#blog`,
        },
        image: {
          "@type": "ImageObject",
          "@id": `${blogUrl}#primaryimage`,
          url: imageUrl,
        },
        datePublished: "2026-11-16T10:00:00Z",
        dateModified: "2026-11-16T10:00:00Z",
        author: {
          "@type": "Person",
          "@id": `${SITE_URL}/about#muskan-shekh`,
          name: "Muskan Shekh",
          url: `${SITE_URL}/about`,
        },
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        articleSection: blog.category,
        keywords: blog.tags?.join(", "),
        inLanguage: "en-GB",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${blogUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: blog.title,
            item: blogUrl,
          },
        ],
      },
    ],
  };
}

// Privacy Policy Schema (/privacy-policy)
export function getPrivacyPolicyGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationReferenceJsonLd(),
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/privacy-policy#webpage`,
        url: `${SITE_URL}/privacy-policy`,
        name: "Privacy Policy | MBSA Digital",
        description:
          "Read how MBSA Digital collects, uses and protects the personal details shared through this website, and your rights under UK and Indian data protection laws.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        inLanguage: "en-GB",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/privacy-policy#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/privacy-policy#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Privacy Policy",
            item: `${SITE_URL}/privacy-policy`,
          },
        ],
      },
    ],
  };
}

// Terms and Conditions Schema (/terms-and-conditions)
export function getTermsGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationReferenceJsonLd(),
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/terms-and-conditions#webpage`,
        url: `${SITE_URL}/terms-and-conditions`,
        name: "Terms and Conditions | MBSA Digital",
        description:
          "The terms for using the MBSA Digital website: content use, no guaranteed marketing outcomes, intellectual property, liability limits and third-party links.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        inLanguage: "en-GB",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/terms-and-conditions#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/terms-and-conditions#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Terms and Conditions",
            item: `${SITE_URL}/terms-and-conditions`,
          },
        ],
      },
    ],
  };
}

// Client Analytics & Proofs Schema (/analytics)
export function getAnalyticsGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationReferenceJsonLd(),
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/analytics#webpage`,
        url: `${SITE_URL}/analytics`,
        name: "Client Results & Analytics Proof | MBSA Digital",
        description:
          "Screenshots from Google Search Console, GA4, Google Business Profile and social media campaigns for MBSA Digital clients.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        inLanguage: "en-GB",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/analytics#breadcrumb`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/analytics#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Client Analytics & Proofs",
            item: `${SITE_URL}/analytics`,
          },
        ],
      },
    ],
  };
}
