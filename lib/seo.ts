import type { Metadata } from "next";
import { type ServiceDetail } from "./servicesData";
import { type ProjectDetail } from "./projectsData";
import { type BlogPost } from "./fallbackBlogs";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mbsadigital.com";

export const SITE_CONFIG = {
  name: "MBSA Digital",
  siteName: "MBSA Digital",
  role: "Search-Led Digital Marketing Agency",
  tagline: "DATA → INSIGHTS → ACTION → GROWTH",
  description:
    "MBSA Digital is a search-led digital marketing agency for India and the UK. SEO, AI search, ads and websites that turn visits into leads. Get a free audit.",
  defaultOgImage: "/image-photo.png",
  logoUrl: `${SITE_URL}/assets/images/logo.svg`,
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
  const canonicalUrl = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const fullImageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

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
      creator: "@mbsadigital",
    },
  };
}

/* =========================================================
   STRUCTURED DATA (JSON-LD) GENERATORS
========================================================= */

// Global Organization Schema
export function getOrganizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "MBSA Digital",
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/assets/images/logo.svg`,
    },
    description:
      "MBSA Digital is a search-led digital marketing agency working with businesses in India, the UK and other English-speaking markets, bringing technical SEO, AI search visibility, websites, paid media and analytics together under one plan.",
    email: "mbsadigitalsolutions@gmail.com",
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

// Person Schema
export function getPersonJsonLd() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/about#muskan-shekh`,
    name: "Muskan Shekh",
    worksFor: {
      "@id": `${SITE_URL}/#organization`,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Essex",
    },
    description:
      "Muskan has worked in SEO for more than five years and holds a B.E. in Computer Engineering and an MSc in Advanced Computer Science from the University of Essex.",
  };
}

// Complete Homepage @graph Schema (Organization + WebSite + WebPage + FAQPage)
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
        name: "SEO & AI Search Digital Marketing Agency | MBSA Digital",
        description:
          "MBSA Digital is a search-led digital marketing agency for India and the UK. SEO, AI search, ads and websites that turn visits into leads. Get a free audit.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        inLanguage: "en-GB",
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What does an SEO and digital marketing agency actually do?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We help the right people find your business online and make it easy for them to get in touch. In practice that means fixing technical problems on your website, improving and creating the pages people search for, building your local presence, running paid campaigns where they make sense, and reporting on the enquiries and sales that result.",
            },
          },
          {
            "@type": "Question",
            name: "How long does SEO take to show results?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Technical fixes and improvements to existing pages can show movement within a few weeks to a few months. New content and authority usually take longer, often several months, depending on your competition, your website’s history and how much you can invest. We will give you a realistic view after the audit, and we never guarantee rankings.",
            },
          },
          {
            "@type": "Question",
            name: "What are AEO and GEO, and do I need them?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Answer engine optimisation (AEO) and generative engine optimisation (GEO) are about making your content clear, accurate and well structured so that search features and AI assistants can understand it and, potentially, cite it. They build on good SEO rather than replacing it. No one can guarantee inclusion in AI answers, but clear, evidence-backed content improves your chances. Read about our AEO and GEO service.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work with businesses outside India and the UK?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We work with businesses in the UK and India and support clients in other English-speaking markets remotely. Tell us where your customers are and we’ll confirm whether we’re the right fit.",
            },
          },
          {
            "@type": "Question",
            name: "Can you build or fix my website as well?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We design and develop WordPress, WooCommerce and Shopify websites, and we can improve an existing site’s speed, structure and conversion paths without a full rebuild. See website design and development.",
            },
          },
          {
            "@type": "Question",
            name: "How do we get started?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Request a free search audit or send us a message. We’ll review your website, ask a few questions about your goals and come back with what we’d prioritise first. There’s no obligation to continue.",
            },
          },
        ],
      },
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

// Services CollectionPage Schema (CollectionPage + BreadcrumbList + ItemList)
export function getServicesCollectionJsonLd(services: ServiceDetail[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/services#webpage`,
        url: `${SITE_URL}/services`,
        name: "Digital Marketing Services: SEO, AI, Ads | MBSA Digital",
        description:
          "Explore 25 digital marketing services from MBSA Digital: SEO, AI search, Google and Meta Ads, social, websites, analytics and CRO. Pick one or a full plan.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/services#breadcrumb`,
        },
        inLanguage: "en-GB",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
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

// Dynamic Single Service Schema (Combined @graph with WebPage, Service, Organization, WebSite, BreadcrumbList, and FAQPage)
export function getServiceCombinedGraphJsonLd(service: ServiceDetail) {
  const serviceUrl = `${SITE_URL}/services/${service.id}`;
  const graph: any[] = [
    getOrganizationJsonLd(),
    getWebsiteJsonLd(),
    {
      "@type": "WebPage",
      "@id": `${serviceUrl}#webpage`,
      url: serviceUrl,
      name: service.metaTitle || `${service.title}: Technical and On-Page Optimisation | MBSA`,
      description: service.metaDescription || service.longDescription || service.desc,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      breadcrumb: {
        "@id": `${serviceUrl}#breadcrumb`,
      },
      inLanguage: "en-GB",
      about: {
        "@id": `${serviceUrl}#service`,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: service.title,
      serviceType: service.serviceType || service.shortTitle || service.title,
      description: service.schemaDescription || service.longDescription || service.desc,
      url: serviceUrl,
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
      category: service.category || "SEO & AI Search",
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
  ];

  if (service.faqs && service.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${serviceUrl}#faq`,
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

// Backward-compatible individual generators if needed
export function getServiceJsonLd(service: ServiceDetail) {
  return getServiceCombinedGraphJsonLd(service);
}

// FAQPage Schema helper
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

// About Us @graph Schema
export function getAboutGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/about#webpage`,
        url: `${SITE_URL}/about`,
        name: "About MBSA Digital: Search-Led Digital Marketing Agency",
        description:
          "Meet MBSA Digital, a search-led agency in India and the UK. See our story, principles and leadership, and why we never promise rankings nobody can control.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/about#breadcrumb`,
        },
        inLanguage: "en-GB",
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
        mainEntity: {
          "@id": `${SITE_URL}/#organization`,
        },
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
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
      {
        "@type": "Person",
        "@id": `${SITE_URL}/about#muskan-shekh`,
        name: "Muskan Shekh",
        worksFor: {
          "@id": `${SITE_URL}/#organization`,
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "University of Essex",
        },
        description:
          "Muskan has worked in SEO for more than five years and holds a B.E. in Computer Engineering and an MSc in Advanced Computer Science from the University of Essex.",
      },
    ],
  };
}

// How We Work @graph Schema
export function getHowWeWorkGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/how-we-work#webpage`,
        url: `${SITE_URL}/how-we-work`,
        name: "Our Digital Marketing Process in 4 Steps | MBSA Digital",
        description:
          "See how MBSA Digital works: discovery call, audit, prioritised roadmap, delivery and monthly reporting. Know what happens at each stage before you sign up.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/how-we-work#breadcrumb`,
        },
        inLanguage: "en-GB",
        publisher: {
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
            name: "How We Work",
            item: `${SITE_URL}/how-we-work`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/how-we-work#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What access will you need?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Usually Google Search Console, GA4, Google Tag Manager, your Business Profile, website admin and any ad accounts. You grant access through each platform’s user management, so you can remove it at any time and never need to share passwords.",
            },
          },
          {
            "@type": "Question",
            name: "How often will we hear from you?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You receive a monthly report and review call, plus updates when important work goes live. You can contact your point of contact by email, phone or WhatsApp between reports.",
            },
          },
          {
            "@type": "Question",
            name: "What do you need from our team?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A main contact who can answer questions and approve work, input from subject experts for content, and developer time if we are not managing your website directly.",
            },
          },
          {
            "@type": "Question",
            name: "How soon will we see results?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Paid campaigns and quick technical fixes can show results within weeks. SEO, content and reputation work usually build over three to six months. Your roadmap sets out what to expect and when.",
            },
          },
        ],
      },
    ],
  };
}

// Projects CollectionPage Schema
export function getProjectsCollectionJsonLd(projects: ProjectDetail[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/projects#webpage`,
        url: `${SITE_URL}/projects`,
        name: "Portfolio: SEO & Marketing Case Studies by MBSA Digital",
        description:
          "Browse MBSA Digital case studies in SEO, local search, websites, ads and social. Every result shows its baseline, timeframe and data source. View our work.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/projects#breadcrumb`,
        },
        inLanguage: "en-GB",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
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
            name: "Portfolio",
            item: `${SITE_URL}/projects`,
          },
        ],
      },
    ],
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
      "@id": `${SITE_URL}/#organization`,
    },
    about: {
      "@type": "Organization",
      name: project.client,
      url: project.siteUrl,
    },
    url: `${SITE_URL}/projects/${project.id}`,
  };
}

// Industries Schema
export function getIndustriesGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/industries#webpage`,
        url: `${SITE_URL}/industries`,
        name: "Digital Marketing by Industry: Healthcare to D2C | MBSA",
        description:
          "SEO and digital marketing for healthcare and pharmacy, beauty and wellness, ecommerce and D2C, and local services, shaped around how every sector searches.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/industries#breadcrumb`,
        },
        inLanguage: "en-GB",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        about: [
          {
            "@type": "Thing",
            name: "Healthcare & pharmacy",
          },
          {
            "@type": "Thing",
            name: "Health, beauty & wellness",
          },
          {
            "@type": "Thing",
            name: "E-commerce & D2C brands",
          },
          {
            "@type": "Thing",
            name: "Local & professional services",
          },
        ],
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

// Blog Hub Collection Schema
export function getBlogCollectionJsonLd(blogs: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/blog#webpage`,
        url: `${SITE_URL}/blog`,
        name: "SEO Blog: Guides on AI Search, Ads & GA4 | MBSA Digital",
        description:
          "Plain-English guides on SEO, AI search, Google Ads, websites and GA4, written by MBSA Digital specialists and updated when things change. Explore our blog.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/blog#breadcrumb`,
        },
        inLanguage: "en-GB",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
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
        blogPost: blogs.map((b) => ({
          "@type": "BlogPosting",
          headline: b.title,
          description: b.excerpt,
          url: `${SITE_URL}/blog/${b.slug || b._id}`,
          datePublished: b.createdAt,
          dateModified: b.updatedAt || b.createdAt,
          image: b.coverImage,
        })),
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
            name: "Insights",
            item: `${SITE_URL}/blog`,
          },
        ],
      },
    ],
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
      "@id": `${SITE_URL}/#organization`,
    },
    articleSection: blog.category,
    keywords: blog.tags?.join(", "),
  };
}

// Contact Us @graph Schema
export function getContactGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact#webpage`,
        url: `${SITE_URL}/contact`,
        name: "Contact MBSA Digital: Free SEO Audits and Consultations",
        description:
          "Contact MBSA Digital for a free SEO audit or consultation. Share your goals and a specialist replies by email, or call our India and UK numbers. Start now.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/contact#breadcrumb`,
        },
        inLanguage: "en-GB",
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
        mainEntity: {
          "@id": `${SITE_URL}/#organization`,
        },
        publisher: {
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
            name: "Contact Us",
            item: `${SITE_URL}/contact`,
          },
        ],
      },
    ],
  };
}

// Privacy Policy Schema
export function getPrivacyPolicyGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/privacy-policy#webpage`,
        url: `${SITE_URL}/privacy-policy`,
        name: "Privacy Policy: How MBSA Digital Protects Personal Data",
        description:
          "Learn how MBSA Digital collects, uses and protects the personal details shared through this website, and the rights you have under UK and Indian data laws.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/privacy-policy#breadcrumb`,
        },
        inLanguage: "en-GB",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
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

// Terms and Conditions Schema
export function getTermsGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/terms-and-conditions#webpage`,
        url: `${SITE_URL}/terms-and-conditions`,
        name: "Terms and Conditions for Using the MBSA Digital Website",
        description:
          "The terms for using the MBSA Digital website: content use, no guaranteed marketing outcomes, intellectual property, liability limits and third-party links.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/terms-and-conditions#breadcrumb`,
        },
        inLanguage: "en-GB",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
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
