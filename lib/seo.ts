import type { Metadata } from "next";
import { type ServiceDetail } from "./servicesData";
import { type ProjectDetail } from "./projectsData";
import { type BlogPost } from "./fallbackBlogs";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://muskanshekh.com";

export const SITE_CONFIG = {
  name: "Muskan Shekh",
  siteName: "Muskan Shekh - Digital Marketing & SEO Specialist",
  role: "Digital Marketing & Technical SEO Specialist",
  tagline: "DATA → INSIGHTS → ACTION → GROWTH",
  description:
    "I turn data into digital growth. Technical SEO, Core Web Vitals optimization, GA4 attribution modeling, high-converting WordPress websites, and full-funnel digital marketing frameworks.",
  defaultOgImage: "/muskan_hero_portrait_1789726780075.jpg",
  email: "muskan.shekh.seo@gmail.com",
  socials: {
    linkedin: "https://linkedin.com/in/muskanshekh",
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
  knowsAbout: [
    "Technical SEO",
    "On-Page SEO",
    "Core Web Vitals Optimization",
    "AEO (Answer Engine Optimization)",
    "GEO (Generative Engine Optimization)",
    "Google Search Console Audits",
    "GA4 Measurement & Attribution",
    "WordPress E-Commerce Architecture",
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
  const canonicalUrl = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const fullImageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  const defaultKeywords = [
    "Muskan Shekh",
    "Digital Marketing Specialist",
    "Technical SEO Specialist",
    "Core Web Vitals SEO",
    "GA4 Analytics Specialist",
    "WordPress SEO Expert",
    "AI Search Optimization AEO",
    "Generative Engine Optimization GEO",
    "UK SEO Consultant",
    "London Healthcare SEO",
  ];

  return {
    title,
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
      creator: "@muskanshekh",
    },
  };
}

/* =========================================================
   STRUCTURED DATA (JSON-LD) GENERATORS
========================================================= */

// Global Website Schema
export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_CONFIG.siteName,
    description: SITE_CONFIG.description,
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
    inLanguage: "en-GB",
  };
}

// Global Person & Professional Profile Schema
export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: SITE_CONFIG.name,
    jobTitle: SITE_CONFIG.role,
    url: SITE_URL,
    image: `${SITE_URL}${SITE_CONFIG.defaultOgImage}`,
    description: SITE_CONFIG.description,
    knowsAbout: SITE_CONFIG.knowsAbout,
    sameAs: [
      SITE_CONFIG.socials.linkedin,
      SITE_CONFIG.socials.github,
      SITE_CONFIG.socials.twitter,
    ],
  };
}

// BreadcrumbList Schema
export function getBreadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http") ? item.path : `${SITE_URL}${item.path}`,
    })),
  };
}

// Services CollectionPage Schema
export function getServicesCollectionJsonLd(services: ServiceDetail[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/services#webpage`,
    url: `${SITE_URL}/services`,
    name: "Growth Frameworks & Digital Marketing Services | Muskan Shekh",
    description:
      "Explore Technical SEO audits, AI search optimization (AEO/GEO), content strategy, WordPress e-commerce development, and data-driven marketing frameworks.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: services.map((s, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/services/${s.id}`,
        name: s.title,
        description: s.desc,
      })),
    },
  };
}

// Dynamic Single Service Schema
export function getServiceJsonLd(service: ServiceDetail) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.id}#service`,
    name: service.title,
    serviceType: service.shortTitle,
    description: service.longDescription || service.desc,
    provider: {
      "@type": "Person",
      name: SITE_CONFIG.name,
      url: SITE_URL,
    },
    areaServed: ["United Kingdom", "United States", "India", "Global"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Deliverables`,
      itemListElement: service.deliverables.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item,
        },
      })),
    },
  };
}

// FAQPage Schema
export function getFaqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

// Projects CollectionPage Schema
export function getProjectsCollectionJsonLd(projects: ProjectDetail[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/projects#webpage`,
    url: `${SITE_URL}/projects`,
    name: "Case Studies & SEO Growth Proof | Muskan Shekh Portfolio",
    description:
      "Verified client case studies with Google Search Console clicks, GA4 conversion attribution, and Google Business Profile 3-Pack rankings.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((p, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/projects/${p.id}`,
        name: `${p.title} Case Study`,
        description: p.overview,
      })),
    },
  };
}

// Dynamic Single Case Study (CreativeWork / Article) Schema
export function getProjectJsonLd(project: ProjectDetail) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/projects/${project.id}#casestudy`,
    name: `${project.title} - Growth Case Study`,
    headline: `${project.title}: ${project.heroMetric} ${project.heroMetricLabel}`,
    description: project.overview,
    image: project.image.startsWith("http")
      ? project.image
      : `${SITE_URL}${project.image}`,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.name,
      url: SITE_URL,
    },
    about: {
      "@type": "Organization",
      name: project.client,
      url: project.siteUrl,
    },
    url: `${SITE_URL}/projects/${project.id}`,
  };
}

// Blog Hub Collection Schema
export function getBlogCollectionJsonLd(blogs: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    url: `${SITE_URL}/blog`,
    name: "Digital Marketing & Technical SEO Insights | Muskan Shekh Blog",
    description:
      "In-depth articles covering 2026 Technical SEO blueprints, AI search optimization (AEO/GEO), Core Web Vitals, and GA4 attribution frameworks.",
    publisher: {
      "@type": "Person",
      name: SITE_CONFIG.name,
      url: SITE_URL,
    },
    blogPost: blogs.map((b) => ({
      "@type": "BlogPosting",
      headline: b.title,
      description: b.excerpt,
      url: `${SITE_URL}/blog/${b.slug || b._id}`,
      datePublished: b.createdAt,
      dateModified: b.updatedAt || b.createdAt,
      image: b.coverImage,
    })),
  };
}

// Dynamic Single BlogPosting Schema
export function getBlogPostJsonLd(blog: BlogPost) {
  const blogUrl = `${SITE_URL}/blog/${blog.slug || blog._id}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${blogUrl}#article`,
    headline: blog.title,
    description: blog.excerpt,
    url: blogUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": blogUrl,
    },
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt || blog.createdAt,
    image: blog.coverImage
      ? blog.coverImage.startsWith("http")
        ? blog.coverImage
        : `${SITE_URL}${blog.coverImage}`
      : `${SITE_URL}${SITE_CONFIG.defaultOgImage}`,
    author: {
      "@type": "Person",
      name: blog.author?.name || SITE_CONFIG.name,
      jobTitle: blog.author?.role || SITE_CONFIG.role,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: SITE_CONFIG.name,
      url: SITE_URL,
    },
    articleSection: blog.category,
    keywords: blog.tags?.join(", "),
  };
}
