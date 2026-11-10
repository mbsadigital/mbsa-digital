export type ServiceIconName =
  | "Search"
  | "BarChart3"
  | "Globe"
  | "Share2"
  | "Target"
  | "TrendingUp"
  | "MapPin"
  | "Zap"
  | "Layers"
  | "Link2"
  | "DollarSign"
  | "Gauge"
  | "FileCheck"
  | "ShoppingCart"
  | "Sparkles"
  | "Award"
  | "Mail"
  | "Smartphone"
  | "ShieldCheck"
  | "Code2"
  | "Rocket";

export interface ServiceDetail {
  num: string;
  id: string;
  slug: string;
  aliases?: string[];
  title: string;
  shortTitle: string;
  category: string;
  categoryId:
  | "seo-ai-search"
  | "paid-media"
  | "content-social"
  | "websites-creative"
  | "data-cro-automation"
  | "growth-solutions";
  badge: string;
  desc: string;
  tagline: string;
  longDescription: string;
  metaTitle?: string;
  metaDescription?: string;
  primaryKeyword?: string;
  serviceType?: string;
  schemaDescription?: string;
  iconName: ServiceIconName;
  image: string;
  lightImage: string;
  darkImage: string;
  stats: {
    highlight: string;
    label: string;
    sublabel: string;
  };
  deliverables: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  tools: string[];
  benefits: string[];
  caseStudy: {
    client: string;
    impact: string;
    metric: string;
    link?: string;
  };
  faqs: {
    q: string;
    a: string;
  }[];
}

export interface ServiceCategory {
  id: "seo-ai-search" | "paid-media" | "content-social" | "websites-creative" | "data-cro-automation" | "growth-solutions";
  name: string;
  shortName: string;
  count: number;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "seo-ai-search",
    name: "SEO & AI SEARCH",
    shortName: "SEO & AI Search",
    count: 7,
  },
  {
    id: "paid-media",
    name: "PAID MEDIA",
    shortName: "Paid Media",
    count: 4,
  },
  {
    id: "content-social",
    name: "CONTENT, SOCIAL & ENGAGEMENT",
    shortName: "Content & Social",
    count: 6,
  },
  {
    id: "websites-creative",
    name: "WEBSITES & CREATIVE",
    shortName: "Websites & Creative",
    count: 4,
  },
  {
    id: "data-cro-automation",
    name: "DATA, CRO & AUTOMATION",
    shortName: "Data & CRO",
    count: 3,
  },
  {
    id: "growth-solutions",
    name: "GROWTH SOLUTIONS",
    shortName: "Growth Solutions",
    count: 1,
  },
];

export const SERVICES_DATA: ServiceDetail[] = [
  // =========================================================================
  // CATEGORY 1: SEO & AI SEARCH (01 - 07)
  // =========================================================================
  {
    num: "01",
    id: "seo-services",
    slug: "seo-services",
    aliases: ["technical-seo", "seo"],
    title: "SEO Services",
    shortTitle: "SEO Services",
    category: "SEO & AI SEARCH",
    categoryId: "seo-ai-search",
    badge: "Technical, On-Page & Content Optimization",
    desc: "Technical, on-page and content SEO",
    tagline: "Build a rock-solid algorithmic foundation that Google loves crawling, indexing, and ranking at the top.",
    longDescription:
      "Search engines cannot rank what they cannot easily crawl, render, and understand. Our complete SEO Services tackle technical bottlenecks, on-page keyword mapping, architecture hierarchies, and content relevance. Every page is systematically optimized with semantic HTML, JSON-LD structured data, and high-intent targeting to deliver sustained organic traffic and revenue growth.",
    metaTitle: "SEO Services: Technical and On-Page Optimisation | MBSA",
    metaDescription: "SEO services that fix what holds rankings back: technical audits, Core Web Vitals, on-page SEO, schema and plain-English reports. Book a free consultation.",
    primaryKeyword: "SEO services",
    serviceType: "Search engine optimisation",
    schemaDescription: "SEO services improve a website so search engines can crawl, understand and rank it for the searches your customers make. Good SEO combines technical fixes, well-structured pages that answer real questions, and signals that show your business is trustworthy, so more of the right people find you without paying for every click.",
    iconName: "Search",
    image: "/images/services/dark/seo-services.png",
    lightImage: "/images/services/light/seo-services.png",
    darkImage: "/images/services/dark/seo-services.png",
    stats: {
      highlight: "+140%",
      label: "Organic Traffic Growth",
      sublabel: "Average 6-month client trajectory",
    },
    deliverables: [
      "Full technical crawl & architecture optimization (Screaming Frog / Semrush)",
      "Core Web Vitals tuning: LCP under 1.2s, INP < 150ms, zero CLS shift",
      "Dynamic JSON-LD Schema markup (LocalBusiness, Medical, Product, FAQ)",
      "Robots.txt, XML sitemap generation & Google Search Console indexing fix",
      "Page title, H1-H3 hierarchy & meta descriptions mapped to high-intent terms",
      "Internal link equity restructuring & orphan page resolution",
      "Ongoing search console telemetry and keyword movement monitoring",
    ],
    process: [
      {
        step: "01",
        title: "Deep Health Audit",
        description: "Full crawl simulating Googlebot desktop & mobile to discover 404s, redirect chains, and indexing blocks.",
      },
      {
        step: "02",
        title: "Infrastructure Repair",
        description: "Fixing server headers, canonical tags, schema markup, and Core Web Vitals bottlenecks.",
      },
      {
        step: "03",
        title: "On-Page Semantic Alignment",
        description: "Injecting primary and LSI search intent terms across meta tags, headers, and body content.",
      },
      {
        step: "04",
        title: "Indexation & Monitoring",
        description: "Submitting live URLs via Google Search Console API and tracking weekly position movements.",
      },
    ],
    tools: ["Google Search Console", "Screaming Frog", "Semrush", "Ahrefs", "Sitebulb", "PageSpeed Insights"],
    benefits: [
      "Eliminate crawl budget waste so high-margin pages index within 48 hours",
      "Achieve green Core Web Vitals for algorithmic ranking advantages",
      "Drive sustainable, intent-driven organic traffic without ongoing ad spend",
    ],
    caseStudy: {
      client: "Harris Pharmacy UK",
      impact: "Recovered 2,400+ indexed URLs post-migration and grew organic search impressions by +140% in under 90 days.",
      metric: "+140% Traffic",
      link: "/projects#harris-pharmacy",
    },
    faqs: [
          {
                "q": "How long does SEO take to show results?",
                "a": "Technical fixes and improvements to existing pages can show movement within a few weeks. Bigger gains from new content and authority usually take three to six months or more, depending on your competition and your site’s history. We give you a realistic timeline after the audit."
          },
          {
                "q": "How much do SEO services cost?",
                "a": "Cost depends on the size of your website, how competitive your market is and how much work is needed. We offer one-off audits, fixed-scope projects and monthly retainers, and we quote after a free consultation so you only pay for what will make a difference."
          },
          {
                "q": "Do you guarantee first-page rankings on Google?",
                "a": "No. Nobody controls Google’s rankings, and any agency that guarantees positions is overpromising. We commit to doing the right work in the right order and to reporting honestly on the results."
          },
          {
                "q": "What is the difference between technical SEO and on-page SEO?",
                "a": "Technical SEO makes sure search engines can access, render and index your site efficiently, covering speed, crawlability, redirects and structured data. On-page SEO makes each page clearly relevant to the searches it targets through its content, headings, titles and internal links. This service includes both."
          },
          {
                "q": "Will SEO changes disrupt our live website?",
                "a": "No. We test changes on a staging site where possible, roll them out in small batches and keep a log of everything we change, so nothing is broken and every change can be reversed."
          },
          {
                "q": "Do you also optimise for AI search like ChatGPT and Google AI Overviews?",
                "a": "Yes. Strong technical SEO is the foundation for AI search visibility. For deeper work on answer engines and AI assistants, see our AEO and GEO service."
          },
          {
                "q": "What is included in your SEO services?",
                "a": "The core elements most clients receive are: technical SEO audit; Core Web Vitals and speed; on-page optimisation; structured data; keyword mapping; monthly reporting. The exact scope is agreed after a short discovery call."
          },
          {
                "q": "Which website platforms do you provide SEO for?",
                "a": "We work with WordPress, Shopify, WooCommerce, Webflow and custom-built websites. The service suits any business whose website isn’t bringing in enough qualified search traffic."
          }
    ],
  },
  {
    num: "02",
    id: "seo-audit",
    slug: "seo-audit",
    aliases: ["audit", "site-audit"],
    title: "SEO Audit",
    shortTitle: "SEO Audit",
    category: "SEO & AI SEARCH",
    categoryId: "seo-ai-search",
    badge: "Technical, Content & AI-Search Health Check",
    desc: "Technical, content and AI-search health check",
    tagline: "A comprehensive 150-point diagnostic revealing every technical, semantic, and AI barrier holding back your rankings.",
    longDescription:
      "Before investing in content or campaigns, you need clarity on what is truly stopping your website from ranking. Our comprehensive SEO Audit examines your server configuration, JavaScript rendering, crawl paths, content depth, backlink risk, and AI search readiness. You receive an actionable, prioritized roadmap ranked by ROI impact.",
    metaTitle: "SEO Audit Services: A Clear Prioritised Fix Plan | MBSA",
    metaDescription: "Get a website SEO audit that ranks every issue by impact: technical crawl, Core Web Vitals, content, links and AI search readiness. Request an audit today.",
    primaryKeyword: "SEO audit services",
    serviceType: "SEO audit",
    schemaDescription: "An SEO audit is a structured review of everything that affects how your website performs in search: technical health, content quality, search intent, internal links, page experience, local signals and authority. A useful audit doesn’t just list problems. It ranks them by impact so you know what to fix first.",
    iconName: "FileCheck",
    image: "/images/services/dark/seo-audit.png",
    lightImage: "/images/services/light/seo-audit.png",
    darkImage: "/images/services/dark/seo-audit.png",
    stats: {
      highlight: "150+",
      label: "Diagnostic Checkpoints",
      sublabel: "Exhaustive algorithmic review",
    },
    deliverables: [
      "Full Screaming Frog & Sitebulb technical crawl report with error categorization",
      "Core Web Vitals lab & field performance audit across mobile and desktop",
      "Content quality, thin page identification, and cannibalization matrix",
      "Internal linking graph & PageRank distribution visualization",
      "Backlink profile toxicity & lost link recovery audit",
      "AI search citation readiness (Google AI Overviews & ChatGPT visibility)",
      "Prioritized executive action plan with clear developer tickets",
    ],
    process: [
      {
        step: "01",
        title: "Crawl & Telemetry Extraction",
        description: "Executing full browser-rendered crawls combined with Google Search Console & GA4 exports.",
      },
      {
        step: "02",
        title: "Algorithmic Diagnosis",
        description: "Evaluating indexation health, schema validity, status codes, and cannibalization conflicts.",
      },
      {
        step: "03",
        title: "Competitive Gap Analysis",
        description: "Benchmarking your architecture and backlink profile against the top 3 ranking competitors.",
      },
      {
        step: "04",
        title: "Executive Roadmap Delivery",
        description: "Delivering a prioritized, step-by-step action plan with clear impact vs effort scores.",
      },
    ],
    tools: ["Screaming Frog", "Sitebulb", "Google Search Console", "Ahrefs", "Semrush", "Lighthouse"],
    benefits: [
      "Uncover hidden penalties, algorithmic drops, and crawl blockers immediately",
      "Stop wasting money on content that fails to index or rank",
      "Get a clear roadmap your development team can execute without confusion",
    ],
    caseStudy: {
      client: "Nordic Health Clinics",
      impact: "Identified 430 orphan URLs and a canonical loop causing a 35% organic traffic slump, resolving the drop within 30 days.",
      metric: "100% Resolved",
      link: "/projects",
    },
    faqs: [
          {
                "q": "What is included in an SEO audit?",
                "a": "Our audit covers technical SEO (crawling, indexing, redirects, canonicals, sitemaps), page speed and Core Web Vitals, content quality and search intent, internal linking, a backlink summary, local SEO signals where relevant, and AI search readiness. You receive a prioritised action plan and a walkthrough call."
          },
          {
                "q": "How much does an SEO audit cost?",
                "a": "The price depends mainly on the size and complexity of your website. A small business site needs far less time than a large e-commerce store. We confirm a fixed price before starting."
          },
          {
                "q": "How long does an SEO audit take?",
                "a": "Most audits take one to three weeks from receiving access, depending on site size. Urgent pre-launch audits can be prioritised."
          },
          {
                "q": "Is a free SEO audit tool enough?",
                "a": "Free tools are useful for spotting obvious errors, but they can’t judge search intent, prioritise by business value or explain what to fix first. An expert audit interprets the data for your goals."
          },
          {
                "q": "What access do you need?",
                "a": "Ideally read access to Google Search Console and Google Analytics 4, plus your website URL. Access is granted through each platform’s user settings, so you never share passwords."
          },
          {
                "q": "Will you fix the issues you find?",
                "a": "We can. Many clients implement fixes themselves using our developer-ready tickets; others ask us to handle them as part of our ongoing SEO services."
          },
          {
                "q": "What is an SEO audit?",
                "a": "An SEO audit is a structured review of everything that affects how your website performs in search: technical health, content quality, search intent, internal links, page experience, local signals and authority. A useful audit doesn’t just list problems. It ranks them by impact so you know what to fix first."
          },
          {
                "q": "When should a business get an SEO audit?",
                "a": "An audit is most useful when you are planning an SEO budget, preparing a redesign or migration, or trying to recover lost traffic. You get a prioritised findings report plus a walkthrough call."
          }
    ],
  },
  {
    num: "03",
    id: "local-seo",
    slug: "local-seo",
    aliases: ["local-seo-gmb", "local"],
    title: "Local SEO",
    shortTitle: "Local SEO",
    category: "SEO & AI SEARCH",
    categoryId: "seo-ai-search",
    badge: "Google Business Profile, Maps & Location Pages",
    desc: "Google Business Profile, Maps and location pages",
    tagline: "Dominate the Google 3-Pack map rankings and capture high-intent local customer calls and foot traffic.",
    longDescription:
      "For regional businesses and multi-location brands, the Google Map Pack drives over 44% of total local clicks. We optimize your Google Business Profile, synchronize citations across all major local aggregators, build localized landing pages, and implement geo-targeted schema markup to ensure you rank #1 whenever nearby customers search.",
    metaTitle: "Local SEO Services: More Calls From Google Maps by MBSA",
    metaDescription: "Local SEO services that win calls, visits and bookings: Google Business Profile optimisation, location pages, citations and real reviews. Get a free audit.",
    primaryKeyword: "local SEO services",
    serviceType: "Local SEO",
    schemaDescription: "Local SEO improves your visibility for searches with local intent, such as “pharmacy near me” or “dentist in Manchester”. It covers your Google Business Profile, consistent business details across the web, location pages on your website, reviews and local relevance signals that help Google trust you in your area.",
    iconName: "MapPin",
    image: "/images/services/dark/local-seo.png",
    lightImage: "/images/services/light/local-seo.png",
    darkImage: "/images/services/dark/local-seo.png",
    stats: {
      highlight: "#1 Pack",
      label: "Map Pack Ranking",
      sublabel: "Target 5-mile service radius",
    },
    deliverables: [
      "Google Business Profile (GBP) complete overhaul & category optimization",
      "Local geo-grid rank tracking (5-mile radius precision visualization)",
      "NAP (Name, Address, Phone) consistency audit across 60+ tier-1 directories",
      "Localized landing page creation with embedded Google Maps & GeoCoordinates schema",
      "Review generation automation framework & review response playbook",
      "Local citation building and duplicate listing suppression",
      "Apple Maps, Bing Places, and local voice search listing synchronization",
    ],
    process: [
      {
        step: "01",
        title: "Geo-Grid Benchmark",
        description: "Mapping current 3-Pack rankings across exact coordinates around your physical location.",
      },
      {
        step: "02",
        title: "Profile Overhaul",
        description: "Optimizing primary/secondary categories, services list, business description, and photo geo-tags.",
      },
      {
        step: "03",
        title: "Citation Cleansing",
        description: "Fixing mismatched NAP data across top data aggregators (Data Axle, Neustar, Foursquare).",
      },
      {
        step: "04",
        title: "Review Velocity Engine",
        description: "Setting up automated customer review workflows to sustainably boost genuine 5-star feedback.",
      },
    ],
    tools: ["Google Business Profile", "BrightLocal", "Whitespark", "Local Viking", "Yext", "Google Maps API"],
    benefits: [
      "Capture immediate calls, appointment bookings, and directions from local buyers",
      "Maintain 100% NAP consistency so search engines trust your location data",
      "Outrank established regional competitors with higher review velocity and schema",
    ],
    caseStudy: {
      client: "Apex Dental Surgery",
      impact: "Secured #1 rank in the 3-Pack for 'emergency dentist near me' across a 6-mile radius, generating a +165% lift in phone enquiries.",
      metric: "+165% Calls",
      link: "/projects",
    },
    faqs: [
          {
                "q": "How do I get my business into the Google Maps results?",
                "a": "Google ranks local results on relevance, distance and prominence. You can strengthen relevance and prominence by completing your Business Profile accurately, choosing the right categories, earning genuine reviews and building strong location pages. Distance from the searcher is outside anyone’s control."
          },
          {
                "q": "How long does local SEO take?",
                "a": "Fixing incorrect details and improving a Business Profile can show results within weeks. Building prominence through reviews, content and citations typically takes three to six months in competitive areas."
          },
          {
                "q": "How much do local SEO services cost?",
                "a": "It depends on the number of locations and how competitive your area is. Single-location businesses need far less work than a 20-branch chain. We quote after reviewing your current listings."
          },
          {
                "q": "Can you manage multiple locations?",
                "a": "Yes. We set up a consistent process so every branch has accurate details, a useful location page and its own reporting."
          },
          {
                "q": "Do you buy or write reviews?",
                "a": "Never. Fake or incentivised reviews breach Google’s policies and can get your profile suspended. We help you ask real customers and respond well. See our online reputation management service for more."
          },
          {
                "q": "Is local SEO different in the UK and India?",
                "a": "The principles are the same, but directories, search behaviour and competition differ. We plan local work around the cities and platforms your customers actually use."
          },
          {
                "q": "What is local SEO?",
                "a": "Local SEO improves your visibility for searches with local intent, such as “pharmacy near me” or “dentist in Manchester”. It covers your Google Business Profile, consistent business details across the web, location pages on your website, reviews and local relevance signals that help Google trust you in your area."
          },
          {
                "q": "How do you measure local SEO results?",
                "a": "We measure the outcomes that matter locally: calls, direction requests, bookings and local rankings, plus Business Profile interactions and rank checks for your priority searches."
          }
    ],
  },
  {
    num: "04",
    id: "ecommerce-seo",
    slug: "ecommerce-seo",
    aliases: ["ecommerce", "shopify-seo"],
    title: "E-commerce SEO",
    shortTitle: "E-commerce SEO",
    category: "SEO & AI SEARCH",
    categoryId: "seo-ai-search",
    badge: "Shopify, WooCommerce & Catalog Optimization",
    desc: "Category, product and Shopify SEO",
    tagline: "Transform your product catalogs and category taxonomy into high-converting organic revenue engines.",
    longDescription:
      "E-commerce websites face unique search challenges: faceted navigation crawl traps, duplicate product variants, thin category pages, and out-of-stock index bloat. We optimize your e-commerce architecture for Shopify, WooCommerce, or headless stores, ensuring every high-margin category and product ranks for buyer-intent search queries.",
    metaTitle: "Ecommerce SEO Services for Shopify & WooCommerce | MBSA",
    metaDescription: "Ecommerce SEO for Shopify and WooCommerce stores: category and product page optimisation, duplicate URL fixes and Product schema that grow organic revenue.",
    primaryKeyword: "ecommerce SEO services",
    serviceType: "Ecommerce SEO",
    schemaDescription: "E-commerce SEO is the practice of improving an online store so its category and product pages rank for the searches shoppers make. It combines technical fixes (like duplicate URLs from filters), helpful category and product content, accurate Product structured data and a site structure that guides both shoppers and search engines.",
    iconName: "ShoppingCart",
    image: "/images/services/dark/ecommerce-seo.png",
    lightImage: "/images/services/light/ecommerce-seo.png",
    darkImage: "/images/services/dark/ecommerce-seo.png",
    stats: {
      highlight: "+210%",
      label: "Organic Revenue Lift",
      sublabel: "Non-brand shopping terms",
    },
    deliverables: [
      "Faceted navigation & filter parameter crawl budget optimization (canonical vs noindex)",
      "Product & Collection page on-page SEO targeting high-commercial search terms",
      "Dynamic Product Schema (JSON-LD) with price, availability, SKU, and aggregateRating",
      "Out-of-stock product management strategy preventing 404 equity loss",
      "Internal linking architecture from blog guides to relevant product collections",
      "Image optimization for Google Image Search & Google Shopping surfaces",
      "Shopify theme speed optimization and third-party app bloat reduction",
    ],
    process: [
      {
        step: "01",
        title: "Catalog Architecture Audit",
        description: "Mapping collection taxonomies, identifying faceted navigation indexing leaks, and pruning dead URLs.",
      },
      {
        step: "02",
        title: "Rich Snippets Engineering",
        description: "Deploying comprehensive Merchant Return, Offer, and Review schema across all active products.",
      },
      {
        step: "03",
        title: "Collection Page Optimization",
        description: "Crafting intent-driven introductory copy, FAQs, and semantic H2/H3 headings for category pages.",
      },
      {
        step: "04",
        title: "Internal Link Amplification",
        description: "Channeling link authority from top-performing informational pages directly to high-margin products.",
      },
    ],
    tools: ["Shopify", "WooCommerce", "Google Merchant Center", "Ahrefs", "Semrush", "Screaming Frog"],
    benefits: [
      "Acquire customers organically without relying entirely on paid ad spend",
      "Earn eye-catching rich snippets (star ratings, in-stock badges, pricing) on SERPs",
      "Improve category page crawlability so new products index almost immediately",
    ],
    caseStudy: {
      client: "Aura Home Living",
      impact: "Restructured 80+ collection pages and fixed faceted URL duplication, resulting in +210% organic e-commerce revenue year-over-year.",
      metric: "+210% Revenue",
      link: "/projects",
    },
    faqs: [
          {
                "q": "What is the difference between ecommerce SEO and regular SEO?",
                "a": "E-commerce SEO deals with problems specific to online stores: thousands of product URLs, filters and variants that create duplicates, out-of-stock items, product feeds and structured data for prices and availability. The goal is ranking category and product pages for buying searches."
          },
          {
                "q": "Is Shopify good for SEO?",
                "a": "Shopify is a solid platform for SEO, but it has quirks, such as duplicate product URLs inside collections, a fixed URL structure and speed issues from too many apps. We know how to work around them."
          },
          {
                "q": "How long does ecommerce SEO take to increase sales?",
                "a": "Technical fixes can lift visibility within weeks. Meaningful growth in organic revenue usually builds over three to six months, faster for stores with existing authority."
          },
          {
                "q": "Should we write unique product descriptions for every product?",
                "a": "For your best-selling and highest-margin products, yes. Unique descriptions that answer buyers’ questions help both rankings and conversions. For very large catalogues, we prioritise by revenue and use smart templates for the rest."
          },
          {
                "q": "Do you help with Google Shopping and Merchant Center?",
                "a": "We make sure your product structured data and feed are accurate and consistent, which supports free listings. Paid Shopping campaigns are part of our Google Ads management."
          },
          {
                "q": "How much does ecommerce SEO cost?",
                "a": "Pricing depends on catalogue size, platform and competition. We quote after a store audit."
          },
          {
                "q": "Which ecommerce platforms do you work with?",
                "a": "We work with Shopify and Shopify Plus stores, WooCommerce (WordPress) stores and custom-built online stores, including growing direct-to-consumer brands."
          },
          {
                "q": "How do you measure ecommerce SEO success?",
                "a": "We measure organic revenue, transactions and non-brand visibility, so you can see the sales that search brings in rather than just traffic."
          }
    ],
  },
  {
    num: "05",
    id: "international-seo",
    slug: "international-seo",
    aliases: ["global-seo", "multilingual-seo"],
    title: "International SEO",
    shortTitle: "International SEO",
    category: "SEO & AI SEARCH",
    categoryId: "seo-ai-search",
    badge: "Hreflang, Multilingual & Global SERP Expansion",
    desc: "Multi-country and multilingual SEO",
    tagline: "Scale your organic footprint across worldwide markets with rock-solid hreflang architecture and localized regional search positioning.",
    longDescription:
      "Expanding across multiple countries or languages requires precise algorithmic orchestration. A single hreflang mismatch can cause Google to show US pricing to UK shoppers or index machine-translated content poorly. We architect foolproof international SEO structures (ccTLDs, subdomains, or subdirectories), implement bidirectional hreflang tags, and optimize for regional search engines like Yandex, Baidu, and local Google indexes.",
    metaTitle: "International SEO Services: Hreflang & Multilingual SEO",
    metaDescription: "International SEO services for brands expanding overseas: hreflang setup, site structure advice, localised keyword research and clear per-market reporting.",
    primaryKeyword: "international SEO services",
    serviceType: "International SEO",
    schemaDescription: "International SEO helps search engines show the right version of your website to people in each country and language. It covers site structure (country domains, subfolders or subdomains), hreflang tags, localised keyword research and content, and building relevance in each market.",
    iconName: "Globe",
    image: "/images/services/dark/international-seo.png",
    lightImage: "/images/services/light/international-seo.png",
    darkImage: "/images/services/dark/international-seo.png",
    stats: {
      highlight: "35+",
      label: "Countries Reached",
      sublabel: "Seamless multi-region indexing",
    },
    deliverables: [
      "International URL structure strategy (ccTLD vs Subdirectory vs Subdomain)",
      "Automated XML sitemap & HTML header hreflang tag generation and validation",
      "Currency and language selector search bot accessibility review",
      "Geo-targeting configuration in Google Search Console and Bing Webmaster",
      "Localized keyword research accounting for regional dialect nuances",
      "Server CDN routing optimization for global low-latency page delivery",
      "International backlink acquisition and localized citation auditing",
    ],
    process: [
      {
        step: "01",
        title: "Global Architecture Planning",
        description: "Selecting the optimal domain and subdirectory structure based on brand authority and regional goals.",
      },
      {
        step: "02",
        title: "Hreflang Matrix Construction",
        description: "Engineering reciprocal hreflang mappings across all languages and regional variants with zero broken returns.",
      },
      {
        step: "03",
        title: "Localized Content Tuning",
        description: "Adapting content for local search intent, currency symbols, and country-specific search queries.",
      },
      {
        step: "04",
        title: "Global Telemetry Tracking",
        description: "Segmenting GSC performance by country to verify correct regional SERP delivery.",
      },
    ],
    tools: ["Google Search Console", "Hreflang Validator", "Ahrefs Global", "Cloudflare", "Screaming Frog"],
    benefits: [
      "Ensure users always land on the correct country version with localized pricing",
      "Eliminate duplicate content penalties between US, UK, AU, and CA English pages",
      "Expand total addressable market globally with compounding organic rankings",
    ],
    caseStudy: {
      client: "TransGlobal Logistics",
      impact: "Architected 14 regional subdirectories with automated hreflang headers, unlocking a +180% organic traffic surge across EMEA.",
      metric: "+180% EMEA Traffic",
      link: "/projects",
    },
    faqs: [
          {
                "q": "What is hreflang and do I need it?",
                "a": "Hreflang is an HTML attribute that tells search engines which language and region each version of a page is for. If you have similar pages for different countries or languages, such as a UK and an India version, you need it to help Google show the right one."
          },
          {
                "q": "Should I use country domains, subfolders or subdomains?",
                "a": "Each works. Country domains (.co.uk, .in) send strong local signals but split authority and cost more to maintain. Subfolders (/uk/, /in/) are easier to manage and share authority. We recommend a structure based on your markets, budget and team."
          },
          {
                "q": "Is translation enough for international SEO?",
                "a": "No. People in different markets use different words, care about different things and trust different signals. Effective international SEO localises keywords, examples, prices and proof, not just the language."
          },
          {
                "q": "Can international SEO hurt my existing rankings?",
                "a": "Done badly, yes, for example through duplicate content or incorrect redirects. Done carefully with hreflang and a clear structure, it protects and builds on existing visibility."
          },
          {
                "q": "How long does it take to rank in a new country?",
                "a": "Expect three to nine months for meaningful visibility in a new market, depending on competition and how much local content and authority you build."
          },
          {
                "q": "What is international SEO?",
                "a": "International SEO helps search engines show the right version of your website to people in each country and language. It covers site structure (country domains, subfolders or subdomains), hreflang tags, localised keyword research and content, and building relevance in each market."
          },
          {
                "q": "What does your international SEO service include?",
                "a": "The core elements most clients receive are: market and keyword research; site structure recommendation; hreflang implementation; localisation guidance; market authority plan; per-market reporting. The exact scope is agreed after a short discovery call."
          },
          {
                "q": "Which markets do you support for international SEO?",
                "a": "We support businesses in the UK, India and other English-speaking and multilingual markets, including Indian brands entering the UK and stores that ship internationally."
          }
    ],
  },
  {
    num: "06",
    id: "link-building-digital-pr",
    slug: "link-building-digital-pr",
    aliases: ["link-building-authority", "digital-pr", "backlinks"],
    title: "Link Building & Digital PR",
    shortTitle: "Link Building & PR",
    category: "SEO & AI SEARCH",
    categoryId: "seo-ai-search",
    badge: "Editorial Backlinks & High-Authority Mentions",
    desc: "Ethical links, digital PR and citations",
    tagline: "Acquire hard-to-replicate editorial backlinks from high-DR industry publications that compound rankings.",
    longDescription:
      "Backlinks remain one of Google's foundational ranking signals. However, spammy guest posts and PBN links will harm your domain. Our link building and digital PR service focuses exclusively on white-hat, editorial acquisitions: proprietary data studies, journalist commentary (HARO/Connectively), interactive assets, and industry resource citations that build unassailable domain authority.",
    metaTitle: "Link Building Services and Digital PR That Lasts | MBSA",
    metaDescription: "White hat link building and digital PR that earn relevant links and brand mentions from trusted sites. No paid links or PBNs. Request your backlink review.",
    primaryKeyword: "link building services",
    serviceType: "Link building and digital PR",
    schemaDescription: "Link building is the process of earning links to your website from other relevant, trustworthy websites. Search engines use these links as one signal of credibility. Ethical link building earns them through useful content, genuine relationships and newsworthy stories, rather than buying them.",
    iconName: "Link2",
    image: "/images/services/dark/link-building-digital-pr.png",
    lightImage: "/images/services/light/link-building-digital-pr.png",
    darkImage: "/images/services/dark/link-building-digital-pr.png",
    stats: {
      highlight: "DR 75+",
      label: "Average Publication DR",
      sublabel: "Strict quality tier filter",
    },
    deliverables: [
      "Competitor backlink gap analysis identifying highest-value authority targets",
      "Digital PR creative campaigns & proprietary industry data studies",
      "Reactive journalist pitching (HARO, Featured, Qwoted, PressPlugs)",
      "Unlinked brand mention identification and link conversion outreach",
      "High-authority resource page link placement and broken link reclamation",
      "Transparent live link tracker with Domain Rating (DR), Organic Traffic, and anchor text",
      "Toxicity audit and Google Disavow file maintenance if legacy spam exists",
    ],
    process: [
      {
        step: "01",
        title: "Authority Gap Audit",
        description: "Analyzing the top 5 ranking competitors to identify high-equity referring domains they possess that you lack.",
      },
      {
        step: "02",
        title: "Asset & Angle Development",
        description: "Creating pitch-worthy data studies, benchmark surveys, and expert commentary briefs that journalists cite.",
      },
      {
        step: "03",
        title: "Personalized Outreach",
        description: "Direct outreach to verified editors, journalists, and webmasters with customized story pitches.",
      },
      {
        step: "04",
        title: "Equity & Anchor Verification",
        description: "Confirming do-follow indexing, contextual placement relevance, and anchor text naturalness.",
      },
    ],
    tools: ["Ahrefs", "Muck Rack", "BuzzStream", "HARO / Connectively", "Hunter.io", "Semrush"],
    benefits: [
      "Lift overall Domain Rating (DR) to make ranking new competitive keywords faster",
      "Secure authentic press coverage that drives referral traffic and brand credibility",
      "100% white-hat editorial links immune to Google algorithm spam penalties",
    ],
    caseStudy: {
      client: "Finova Lending",
      impact: "Secured 42 editorial backlinks from Forbes, Business Insider, and Bloomberg, elevating domain rating from DR 28 to DR 64 in 6 months.",
      metric: "DR 28 → 64",
      link: "/projects",
    },
    faqs: [
          {
                "q": "Do you buy links?",
                "a": "No. Buying or selling links to manipulate rankings breaches Google’s spam policies and can lead to penalties. We earn links through content, outreach and digital PR."
          },
          {
                "q": "How many links will I get each month?",
                "a": "We focus on relevance and quality rather than volume, so we don’t promise fixed numbers. One link from a respected industry publication can be worth more than dozens of weak ones. We report every link earned."
          },
          {
                "q": "What is digital PR?",
                "a": "Digital PR uses traditional PR techniques, such as data stories, expert commentary and newsworthy angles, to earn coverage and links from online publications. It builds both search authority and brand recognition."
          },
          {
                "q": "Do links still matter for SEO in 2026?",
                "a": "Yes. Links remain one of the signals search engines use to judge authority, although content quality and relevance matter more than ever. Brand mentions on trusted sites also help AI systems understand who you are."
          },
          {
                "q": "How much do link building services cost?",
                "a": "It depends on your market, goals and whether we create new assets. We quote a monthly budget after reviewing your link profile."
          },
          {
                "q": "What is link building?",
                "a": "Link building is the process of earning links to your website from other relevant, trustworthy websites. Search engines use these links as one signal of credibility. Ethical link building earns them through useful content, genuine relationships and newsworthy stories, rather than buying them."
          },
          {
                "q": "What does your link building service include?",
                "a": "The core elements most clients receive are: backlink audit; linkable assets; personalised outreach; digital PR; unlinked mention reclamation; monthly link reporting. The exact scope is agreed after a short discovery call."
          },
          {
                "q": "Which link building tactics do you never use?",
                "a": "We never use private blog networks, paid links or automated spam. Links are earned through linkable assets, personalised outreach and digital PR."
          }
    ],
  },
  {
    num: "07",
    id: "aeo-geo-ai-search",
    slug: "aeo-geo-ai-search",
    aliases: ["aeo-geo", "ai-search", "geo"],
    title: "AEO & GEO (AI Search)",
    shortTitle: "AEO & GEO (AI Search)",
    category: "SEO & AI SEARCH",
    categoryId: "seo-ai-search",
    badge: "ChatGPT, Gemini & AI Overview Optimization",
    desc: "Visibility in ChatGPT, Gemini and AI Overviews",
    tagline: "Position your brand as the cited, trusted answer in generative AI engines and Google AI Overviews.",
    longDescription:
      "Search is evolving beyond 10 blue links. Large language models like Google Gemini, ChatGPT, Perplexity, and Claude now synthesize answers directly from web knowledge graphs. Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) structure your digital footprint into unambiguous entities, concise factual answers, and authoritative citations so AI engines repeatedly cite your business as the source.",
    metaTitle: "AEO & GEO Services to Get Your Brand Cited in AI | MBSA",
    metaDescription: "AEO & GEO services that help ChatGPT, Gemini, Perplexity and Google AI Overviews understand and cite your business. Request an AI search visibility review.",
    primaryKeyword: "AEO and GEO services",
    serviceType: "Answer engine optimisation and generative engine optimisation",
    schemaDescription: "Answer engine optimisation (AEO) structures content so search features can extract clear answers to specific questions. Generative engine optimisation (GEO) aims to make your business a trustworthy, well-understood source for AI systems that write answers, such as Google’s AI Overviews, ChatGPT, Gemini and Perplexity. Both build on solid SEO rather than replacing it.",
    iconName: "Sparkles",
    image: "/images/services/dark/aeo-geo-ai-search.png",
    lightImage: "/images/services/light/aeo-geo-ai-search.png",
    darkImage: "/images/services/dark/aeo-geo-ai-search.png",
    stats: {
      highlight: "+85%",
      label: "AI Citation Frequency",
      sublabel: "Across Perplexity, ChatGPT & Gemini",
    },
    deliverables: [
      "Entity extraction audit comparing your brand against Google Knowledge Graph & Wikidata",
      "Q&A answer architecture optimized for LLM token context windows",
      "Deep semantic schema injection (About, Mentions, ItemList, Speakable, FAQPage)",
      "Information gain content auditing ensuring proprietary data for LLM indexing",
      "Brand citation tracking in Google AI Overviews, Perplexity AI, and SearchGPT",
      "Knowledge panel claim & Wikipedia/Wikidata entity linking support",
      "Robots.txt & AI bot crawler permissions (GPTBot, ClaudeBot, PerplexityBot) management",
    ],
    process: [
      {
        step: "01",
        title: "Entity & Semantic Audit",
        description: "Verifying how Google Knowledge Graph, Wikidata, and LLM embedding spaces perceive your brand.",
      },
      {
        step: "02",
        title: "Answer Architecture",
        description: "Restructuring content with clear, direct definitions, structured tables, and high information gain.",
      },
      {
        step: "03",
        title: "Schema & Knowledge Linking",
        description: "Connecting your business entity to verified canonical sources via SameAs schema.",
      },
      {
        step: "04",
        title: "AI Citation Tracking",
        description: "Monitoring daily brand appearance in Google AI Overviews and conversational AI responses.",
      },
    ],
    tools: ["Google Knowledge Graph Search API", "Diffbot", "Perplexity API", "OpenAI API", "Semrush"],
    benefits: [
      "Be the first business recommended when prospects ask AI chatbots for solutions",
      "Protect your visibility as Google expands AI Overviews across commercial queries",
      "Build deep entity authority that traditional keyword-stuffing competitors cannot replicate",
    ],
    caseStudy: {
      client: "Cognitive AI Labs",
      impact: "Optimized semantic entity schema across 200 technical documentation pages, securing inclusion in 72% of Google AI Overviews for target category prompts.",
      metric: "72% AI Inclusion",
      link: "/projects",
    },
    faqs: [
          {
                "q": "Can you guarantee my business will appear in ChatGPT or Google AI Overviews?",
                "a": "No. AI systems decide what to include, answers vary between users and sessions, and no provider offers a way to guarantee inclusion. We make your content clearer, more accurate and better evidenced, which improves your chances."
          },
          {
                "q": "Is AEO or GEO different from SEO?",
                "a": "They build on SEO. Crawlable, fast, well-structured pages remain the foundation. AEO and GEO put extra emphasis on direct answers, consistent business information, evidence and authorship."
          },
          {
                "q": "How do I get my business mentioned in ChatGPT?",
                "a": "Make sure your business is described consistently and clearly across your website and trusted third-party sources, publish content that directly answers customer questions with evidence, and earn mentions on reputable sites. Then monitor a fixed set of questions over time."
          },
          {
                "q": "Do I need an llms.txt file or special schema for AI search?",
                "a": "Google states that no special files or schema are needed for its AI features beyond normal SEO best practice. An llms.txt file is optional and its effect elsewhere is unproven, so we treat it as low priority."
          },
          {
                "q": "How do you measure AEO and GEO?",
                "a": "We use a documented set of 20 to 50 real customer questions, check them on a schedule across AI tools, and record whether and how your business is mentioned or cited. We also track referral traffic from AI tools in GA4."
          },
          {
                "q": "How long before we see changes in AI answers?",
                "a": "Some AI tools reflect website changes within weeks; others update more slowly. We typically review progress over three to six months and report observed patterns with dates."
          },
          {
                "q": "What does your AEO and GEO service include?",
                "a": "The core elements most clients receive are: AI visibility review; entity consistency; answer-ready content; evidence and authorship; structured data; ongoing monitoring. The exact scope is agreed after a short discovery call."
          },
          {
                "q": "Who benefits most from AEO and GEO?",
                "a": "Businesses whose customers research before buying benefit most, such as clinics and health brands, professional services and product brands. No one can guarantee inclusion or citations in AI answers."
          }
    ],
  },

  // =========================================================================
  // CATEGORY 2: PAID MEDIA (08 - 11)
  // =========================================================================
  {
    num: "08",
    id: "google-ads-management",
    slug: "google-ads-management",
    aliases: ["paid-search-ppc", "google-ads", "ppc"],
    title: "Google Ads Management",
    shortTitle: "Google Ads Management",
    category: "PAID MEDIA",
    categoryId: "paid-media",
    badge: "Search, Performance Max, Shopping & Bing",
    desc: "Search, Performance Max, Shopping and Bing",
    tagline: "High-ROI paid search campaigns engineered for bottom-of-funnel conversion and ruthless budget efficiency.",
    longDescription:
      "Pay-per-click advertising should be an investment with predictable returns, not a budget sinkhole. We build tightly themed Google Search, Performance Max, and Shopping campaigns that filter out low-intent clicks. By integrating server-side conversion tracking and automated bidding with first-party CRM data, we maximize ROAS and scale client revenue.",
    metaTitle: "Google Ads Management: PPC That Converts | MBSA Digital",
    metaDescription: "Google Ads management built on solid tracking: Search, Performance Max, Shopping and AI Max campaigns reported by cost per lead. Get a free account review.",
    primaryKeyword: "Google Ads management",
    serviceType: "Google Ads management",
    schemaDescription: "Google Ads management is the ongoing planning, building and optimisation of paid campaigns on Google Search, Shopping, YouTube and Performance Max. It covers keyword and audience targeting, ad copy, bidding, budgets, landing pages and conversion tracking, with the goal of producing customers at a cost that works for your business. It is also known as PPC (pay-per-click) or SEM (search engine marketing).",
    iconName: "DollarSign",
    image: "/images/services/dark/google-ads-management.png",
    lightImage: "/images/services/light/google-ads-management.png",
    darkImage: "/images/services/dark/google-ads-management.png",
    stats: {
      highlight: "4.8x",
      label: "Average Client ROAS",
      sublabel: "Across Google Search & PMax",
    },
    deliverables: [
      "High-intent commercial keyword taxonomy (Exact Match & Phrase Match focus)",
      "Performance Max asset group restructuring with negative keyword exclusion lists",
      "Continuous negative keyword harvesting preventing budget leakage",
      "Server-side Enhanced Conversions setup via Google Tag Manager",
      "Dynamic ad copy creation with personalized assets, sitelinks, and callouts",
      "Landing page conversion rate alignment to boost Google Quality Scores (8-10/10)",
      "Weekly bid optimization and transparent real-time Looker Studio reporting",
    ],
    process: [
      {
        step: "01",
        title: "Search Term Forensic Audit",
        description: "Scouring historical spend data to eliminate wasted budget on broad matching queries and irrelevant clicks.",
      },
      {
        step: "02",
        title: "Account Restructuring",
        description: "Rebuilding campaigns into single-theme ad groups with dedicated negative keyword lists.",
      },
      {
        step: "03",
        title: "Conversion Value Tracking",
        description: "Integrating enhanced conversion tracking to train Google's smart bidding algorithms on real profit, not vanity clicks.",
      },
      {
        step: "04",
        title: "Relentless Scale & Pruning",
        description: "Allocating budget toward winning search queries and testing new high-converting ad copy weekly.",
      },
    ],
    tools: ["Google Ads", "Google Tag Manager", "Microsoft Advertising", "Looker Studio", "SpyFu"],
    benefits: [
      "Lower Cost Per Acquisition (CPA) by eliminating 30%+ of wasted search budget",
      "Achieve high Google Quality Scores that reduce your cost per click below competitors",
      "Attract bottom-of-funnel prospects actively ready to buy right now",
    ],
    caseStudy: {
      client: "Prime Dental UK",
      impact: "Restructured Google Search ad groups and deployed localized landing pages, decreasing cost per patient acquisition by 41% while doubling monthly inquiries.",
      metric: "-41% CPA",
      link: "/projects",
    },
    faqs: [
          {
                "q": "How much should we spend on Google Ads?",
                "a": "It depends on how competitive your searches are, what a customer is worth to you and how many enquiries you can handle. We estimate a sensible starting budget in the audit and adjust based on real results."
          },
          {
                "q": "How much does Google Ads management cost?",
                "a": "Management fees depend on account size and complexity. Ad spend is paid directly to Google from your own account, separately from our fee."
          },
          {
                "q": "What is the difference between PPC, SEM and Google Ads?",
                "a": "PPC (pay-per-click) is any advertising where you pay per click. SEM (search engine marketing) usually means paid search ads. Google Ads is the largest platform for both. In practice, people often use the three terms interchangeably."
          },
          {
                "q": "What is AI Max for Search?",
                "a": "AI Max for Search is a set of Google Ads features that uses AI to match your ads to more relevant searches and tailor ad text automatically. Google is replacing Dynamic Search Ads with it in 2026. It works best with accurate conversion tracking and careful controls."
          },
          {
                "q": "Who owns the Google Ads account?",
                "a": "You do. Campaigns run in an account owned by your business, and you keep full access to all data and assets if we stop working together."
          },
          {
                "q": "Do you manage Microsoft (Bing) Ads too?",
                "a": "Yes. Microsoft Advertising often delivers cheaper clicks, especially for B2B and older audiences, and we can import and adapt successful Google campaigns."
          },
          {
                "q": "What is Google Ads management?",
                "a": "Google Ads management is the ongoing planning, building and optimisation of paid campaigns on Google Search, Shopping, YouTube and Performance Max. It covers keyword and audience targeting, ad copy, bidding, budgets, landing pages and conversion tracking, with the goal of producing customers at a cost that works for your business. It is also known as PPC (pay-per-click) or SEM (search engine marketing)."
          },
          {
                "q": "How do you measure Google Ads performance?",
                "a": "We measure cost per lead, cost per sale and return on ad spend. Conversion tracking is audited and set up first, so the numbers can be trusted."
          }
    ],
  },
  {
    num: "09",
    id: "meta-ads",
    slug: "meta-ads",
    aliases: ["facebook-ads", "instagram-ads"],
    title: "Meta Ads (Facebook & Instagram)",
    shortTitle: "Meta Ads",
    category: "PAID MEDIA",
    categoryId: "paid-media",
    badge: "Direct-Response Creative & Retargeting",
    desc: "Facebook and Instagram ads that convert",
    tagline: "Scroll-stopping visual campaigns and precision lookalike targeting that turn social users into buyers.",
    longDescription:
      "Meta remains the premier social advertising platform for generating direct consumer demand. Success on Facebook and Instagram requires high-velocity creative testing, persuasive video hooks, and robust Conversions API (CAPI) data flow. We build full-funnel Meta advertising campaigns that capture cold attention and retarget interested prospects until they convert.",
    metaTitle: "Meta Ads Agency for Facebook & Instagram | MBSA Digital",
    metaDescription: "Facebook & Instagram ads built for leads and sales: scroll-stopping creatives, audience strategy, Conversions API tracking and click-to-WhatsApp campaigns.",
    primaryKeyword: "Meta Ads agency",
    serviceType: "Meta Ads management",
    schemaDescription: "Meta Ads management is the planning, creative production, targeting, budgeting and optimisation of paid campaigns across Facebook, Instagram, Messenger and WhatsApp. Because Meta’s AI now does much of the audience targeting, creative quality and accurate conversion data have become the biggest levers for results.",
    iconName: "Share2",
    image: "/images/services/dark/metas-ads.png",
    lightImage: "/images/services/light/metas-ads.png",
    darkImage: "/images/services/dark/metas-ads.png",
    stats: {
      highlight: "3.9x",
      label: "Blended Return on Ad Spend",
      sublabel: "Across prospecting & retargeting",
    },
    deliverables: [
      "Meta Conversions API (CAPI) server-side integration for 100% event attribution",
      "Creative concepting: high-hook UGC video scripts, static carousels, and image ads",
      "Broad & Advantage+ audience testing frameworks with high-value lookalikes",
      "Multi-stage retargeting funnels (video viewers, cart abandoners, page visitors)",
      "Dynamic Product Ads (DPA) catalog integration for e-commerce stores",
      "A/B creative testing matrix (headlines, hooks, primary copy, CTAs)",
      "Weekly performance reviews with creative fatigue monitoring",
    ],
    process: [
      {
        step: "01",
        title: "Pixel & CAPI Diagnostics",
        description: "Configuring server-side tracking via Stape or Cloudflare to bypass iOS tracking restrictions.",
      },
      {
        step: "02",
        title: "Creative Sprint",
        description: "Producing varied creative formats (Founder Stories, Problem-Solution, Social Proof reviews).",
      },
      {
        step: "03",
        title: "Targeting & Campaign Launch",
        description: "Deploying Advantage+ shopping campaigns combined with tested custom exclusion audiences.",
      },
      {
        step: "04",
        title: "Creative Iteration & Scaling",
        description: "Scaling winning ad creatives incrementally while replacing fatigued visuals with fresh concepts.",
      },
    ],
    tools: ["Meta Ads Manager", "Meta Conversions API (CAPI)", "Canva Pro", "CapCut", "Motion App", "Triple Whale"],
    benefits: [
      "Generate customer demand rather than just capturing existing search volume",
      "Overcome iOS privacy signal loss with server-side CAPI tracking",
      "Build a predictable customer acquisition channel with creative testing frameworks",
    ],
    caseStudy: {
      client: "SilkSkin Naturals",
      impact: "Launched high-converting UGC video hooks and Advantage+ catalog campaigns, scaling monthly ad spend from £3k to £18k while maintaining a 4.1x ROAS.",
      metric: "4.1x ROAS",
      link: "/projects",
    },
    faqs: [
          {
                "q": "How much should I spend on Facebook and Instagram ads?",
                "a": "Enough to give Meta’s algorithm sufficient conversions to learn, typically at least several times your target cost per result per week, per ad set. We recommend a starting budget after reviewing your goals and margins."
          },
          {
                "q": "Why are my Facebook ads not converting?",
                "a": "Common causes are broken or incomplete tracking, weak creative, the wrong campaign objective, a slow or unclear landing page, or an offer that doesn’t match the audience. Our audit checks all five."
          },
          {
                "q": "What is the Conversions API and do I need it?",
                "a": "The Conversions API sends conversion data from your server directly to Meta, making measurement more reliable when browsers block cookies. Most advertisers benefit from using it alongside the Meta Pixel."
          },
          {
                "q": "Do you create the ad creative?",
                "a": "Yes. We design static and carousel ads and produce or edit short-form video for Reels and Stories. We also use your own photos and footage, which often perform best."
          },
          {
                "q": "Can you run click-to-WhatsApp ads?",
                "a": "Yes. Click-to-WhatsApp ads are especially effective in India, letting customers start a chat with your business directly from an ad. See our WhatsApp marketing service."
          },
          {
                "q": "What is Meta Ads management?",
                "a": "Meta Ads management is the planning, creative production, targeting, budgeting and optimisation of paid campaigns across Facebook, Instagram, Messenger and WhatsApp. Because Meta’s AI now does much of the audience targeting, creative quality and accurate conversion data have become the biggest levers for results."
          },
          {
                "q": "Which platforms do your Meta Ads campaigns run on?",
                "a": "We run campaigns across Facebook, Instagram, Messenger and WhatsApp click-to-chat. They suit consumer brands, local businesses and ecommerce stores."
          },
          {
                "q": "How do you measure Meta Ads results?",
                "a": "We measure cost per lead, cost per purchase and return on ad spend (ROAS), using Pixel and Conversions API data for accurate tracking."
          }
    ],
  },
  {
    num: "10",
    id: "linkedin-marketing-ads",
    slug: "linkedin-marketing-ads",
    aliases: ["linkedin-ads", "b2b-marketing"],
    title: "LinkedIn Marketing & Ads",
    shortTitle: "LinkedIn Ads",
    category: "PAID MEDIA",
    categoryId: "paid-media",
    badge: "B2B Lead Generation & Account-Based Marketing",
    desc: "B2B lead generation and thought leadership",
    tagline: "Target C-suite executives, directors, and B2B buyers with precision ABM funnels and sponsored content.",
    longDescription:
      "LinkedIn is the unrivaled channel for B2B client acquisition. With unmatched professional demographic targeting (job title, seniority, company headcount, industry, and revenue), we put your message directly in front of enterprise decision-makers. We manage Sponsored Content, Document Ads, Lead Gen Forms, and executive thought leadership to generate qualified B2B sales meetings.",
    metaTitle: "LinkedIn Marketing Agency for B2B: Ads & Content | MBSA",
    metaDescription: "B2B LinkedIn marketing to reach decision-makers: founder-led content, profile optimisation, LinkedIn Ads and lead gen forms that grow a qualified pipeline.",
    primaryKeyword: "LinkedIn marketing agency",
    serviceType: "LinkedIn marketing and advertising",
    schemaDescription: "LinkedIn marketing uses organic content and paid LinkedIn Ads to build awareness, trust and leads among professional audiences. Because you can target by job title, seniority, industry and company, it is especially effective for B2B businesses that sell to specific decision-makers.",
    iconName: "Layers",
    image: "/images/services/dark/linkedin-marketing-ads.png",
    lightImage: "/images/services/light/linkedin-marketing-ads.png",
    darkImage: "/images/services/dark/linkedin-marketing-ads.png",
    stats: {
      highlight: "+62%",
      label: "Qualified Sales Meetings",
      sublabel: "Target account engagement",
    },
    deliverables: [
      "Account-Based Marketing (ABM) list matching & precise job title targeting",
      "LinkedIn Lead Gen Form configuration with instant CRM webhook integration",
      "Thought Leader Ads promoting executive founder commentary and case studies",
      "Carousel & Document Ads distributing high-value whitepapers and industry checklists",
      "LinkedIn Insight Tag and Conversions API configuration for precise attribution",
      "Retargeting funnels for website visitors and LinkedIn company page engagers",
      "Cost-per-qualified-lead benchmarking and sales pipeline velocity reporting",
    ],
    process: [
      {
        step: "01",
        title: "ICP Definition & Account Sourcing",
        description: "Defining your Ideal Customer Profile and importing target company accounts into LinkedIn Campaign Manager.",
      },
      {
        step: "02",
        title: "Lead Magnet & Asset Crafting",
        description: "Creating high-value B2B assets (benchmarks, checklists, executive summaries) that justify signups.",
      },
      {
        step: "03",
        title: "Campaign Structuring",
        description: "Launching native Lead Gen Forms alongside Sponsored Content to reduce friction and cost per lead.",
      },
      {
        step: "04",
        title: "CRM Synchronization & Follow-up",
        description: "Syncing leads instantly to HubSpot/Salesforce for rapid sales development rep (SDR) outreach.",
      },
    ],
    tools: ["LinkedIn Campaign Manager", "LinkedIn Sales Navigator", "HubSpot", "Zapier", "Clearbit"],
    benefits: [
      "Zero wasted ad impressions by targeting verified job titles and specific companies",
      "Convert prospects directly on LinkedIn without requiring external website redirects",
      "Position your founders and executives as trusted industry thought leaders",
    ],
    caseStudy: {
      client: "CloudGuard Cybersecurity",
      impact: "Targeted IT Directors and CISOs at financial institutions with Document Ads, booking 48 qualified enterprise demos in 90 days.",
      metric: "48 Enterprise Demos",
      link: "/projects",
    },
    faqs: [
          {
                "q": "Is LinkedIn advertising worth it for small businesses?",
                "a": "It can be, if you sell to a well-defined business audience and your deal value justifies higher click costs. LinkedIn clicks usually cost more than other platforms, but the audience precision often produces better-qualified leads."
          },
          {
                "q": "What is a Thought Leader Ad?",
                "a": "A Thought Leader Ad lets you promote a post from an individual’s profile, such as a founder or expert, as an ad. Content from a real person often earns more trust and engagement than company page posts."
          },
          {
                "q": "Do you write posts for our founders?",
                "a": "Yes. We interview your founders and experts, then write posts in their voice for approval. Nothing is published without sign-off."
          },
          {
                "q": "How long does LinkedIn marketing take to work?",
                "a": "LinkedIn Ads can generate leads within weeks. Organic thought leadership builds over three to six months of consistent posting."
          },
          {
                "q": "Do you do automated LinkedIn outreach?",
                "a": "No. Automated connection and message tools breach LinkedIn’s terms and can get accounts restricted. We focus on content, ads and genuine engagement."
          },
          {
                "q": "What is LinkedIn marketing?",
                "a": "LinkedIn marketing uses organic content and paid LinkedIn Ads to build awareness, trust and leads among professional audiences. Because you can target by job title, seniority, industry and company, it is especially effective for B2B businesses that sell to specific decision-makers."
          },
          {
                "q": "What does your LinkedIn marketing service include?",
                "a": "The core elements most clients receive are: profile and page optimisation; content strategy and writing; LinkedIn Ads; account-based campaigns; engagement guidance; pipeline reporting. The exact scope is agreed after a short discovery call."
          },
          {
                "q": "Who is LinkedIn marketing best for?",
                "a": "LinkedIn marketing works best for B2B services, consultancies, SaaS and professional firms that sell to specific decision-makers. Results are measured by qualified leads, pipeline and engagement from target accounts."
          }
    ],
  },
  {
    num: "11",
    id: "youtube-video-marketing",
    slug: "youtube-video-marketing",
    aliases: ["youtube-marketing", "video-seo"],
    title: "YouTube & Video Marketing",
    shortTitle: "YouTube & Video Marketing",
    category: "PAID MEDIA",
    categoryId: "paid-media",
    badge: "YouTube SEO, TrueView & Shorts Growth",
    desc: "YouTube SEO, video ads and short-form video",
    tagline: "Tap into the world's second-largest search engine with optimized video rankings and high-ROI video ads.",
    longDescription:
      "Video content builds trust faster than any other medium. We manage end-to-end YouTube marketing: organic video SEO (tags, keywords, title hooks, descriptions, and custom thumbnail design) to capture long-tail search traffic, alongside Google Video Ads (In-Feed, In-Stream, and Shorts ads) that drive high-intent viewers to your offers.",
    metaTitle: "YouTube Marketing Services: SEO, Ads and Shorts by MBSA",
    metaDescription: "YouTube and video marketing services: channel strategy, scripting, YouTube SEO, Shorts, Reels, and video ads that build trust and turn viewers into buyers.",
    primaryKeyword: "YouTube marketing services",
    serviceType: "YouTube and video marketing",
    schemaDescription: "YouTube and video marketing uses video content and video ads to attract, educate and convert customers. It includes channel strategy, scripting and production, YouTube SEO (titles, descriptions, chapters and thumbnails), short-form video for Shorts and Reels, and paid video campaigns on YouTube and Google.",
    iconName: "TrendingUp",
    image: "/images/services/dark/youtube-video-marketing.png",
    lightImage: "/images/services/light/youtube-video-marketing.png",
    darkImage: "/images/services/dark/youtube-video-marketing.png",
    stats: {
      highlight: "+320k",
      label: "Organic Video Views",
      sublabel: "Earned across target niche topics",
    },
    deliverables: [
      "YouTube channel architecture, branding, playlists, and trailer optimization",
      "Video keyword research using search volume data from YouTube Suggest and VidIQ",
      "Title hooking, description copywriting, chapter timestamping, and tag mapping",
      "High-CTR thumbnail design and A/B thumbnail testing frameworks",
      "YouTube Shorts strategy for rapid channel subscriber growth and brand reach",
      "Google Video Ads (In-Stream skippable & YouTube Shorts ads) campaign management",
      "Video engagement retention analytics and audience drop-off remediation",
    ],
    process: [
      {
        step: "01",
        title: "Video Content Mapping",
        description: "Identifying the exact questions and tutorials your potential customers are actively searching for on YouTube.",
      },
      {
        step: "02",
        title: "Packaging & SEO Optimization",
        description: "Designing high-contrast clickable thumbnails, compelling titles, and keyword-rich chapters.",
      },
      {
        step: "03",
        title: "Paid Amplification",
        description: "Running targeted in-feed video ads to jumpstart initial view velocity and train the YouTube algorithm.",
      },
      {
        step: "04",
        title: "Funnel Retargeting",
        description: "Creating retargeting lists of viewers who watched >50% of your video and serving them bottom-of-funnel conversion ads.",
      },
    ],
    tools: ["YouTube Studio", "VidIQ", "TubeBuddy", "Google Ads", "Adobe Premiere", "Photoshop"],
    benefits: [
      "Build long-term evergreen organic search traffic that continues delivering views for years",
      "Establish deep personal connection and authority with high-converting video formats",
      "Leverage lower video advertising CPVs compared to competitive Google search terms",
    ],
    caseStudy: {
      client: "SaaS Blueprint",
      impact: "Optimized a 24-video educational library with custom thumbnails and chapters, generating 320,000+ views and 4,800 free trial signups.",
      metric: "4,800 Signups",
      link: "/projects",
    },
    faqs: [
          {
                "q": "How do I rank my videos on YouTube?",
                "a": "Choose topics people actually search for, use clear titles and descriptions with those terms, add chapters and captions, design a compelling thumbnail, and hold attention in the first 30 seconds. Retention and satisfaction strongly influence how YouTube recommends videos."
          },
          {
                "q": "Do you film the videos?",
                "a": "We plan, script and edit, and can coordinate filming."
          },
          {
                "q": "Are YouTube ads expensive?",
                "a": "YouTube ads can be cost-effective because you often pay only when someone watches or engages. Costs vary by audience and format; we recommend a test budget before scaling."
          },
          {
                "q": "Should we focus on long videos or Shorts?",
                "a": "Usually both. Long videos build depth and search visibility, while Shorts and Reels build reach. We often film once and edit for both."
          },
          {
                "q": "Does video help SEO?",
                "a": "Yes. Videos can appear in Google search results and video carousels, and embedding helpful videos on your pages can improve engagement. We add VideoObject structured data where it fits."
          },
          {
                "q": "What is YouTube and video marketing?",
                "a": "YouTube and video marketing uses video content and video ads to attract, educate and convert customers. It includes channel strategy, scripting and production, YouTube SEO (titles, descriptions, chapters and thumbnails), short-form video for Shorts and Reels, and paid video campaigns on YouTube and Google."
          },
          {
                "q": "What does your YouTube marketing service include?",
                "a": "The core elements most clients receive are: channel and content strategy; scripts and storyboards; production and editing; YouTube SEO; Shorts and Reels; video ads and reporting. The exact scope is agreed after a short discovery call."
          },
          {
                "q": "Which video formats do you work with?",
                "a": "We work with YouTube videos, Shorts, Reels and video ads, for brands with expertise, products or results worth showing."
          }
    ],
  },

  // =========================================================================
  // CATEGORY 3: CONTENT, SOCIAL & ENGAGEMENT (12 - 17)
  // =========================================================================
  {
    num: "12",
    id: "content-keyword-strategy",
    slug: "content-keyword-strategy",
    aliases: ["content-strategy", "keyword-research"],
    title: "Content & Keyword Strategy",
    shortTitle: "Content Strategy",
    category: "CONTENT, SOCIAL & ENGAGEMENT",
    categoryId: "content-social",
    badge: "Intent Mining, Topical Clusters & SEO Copy",
    desc: "Keyword research, topic clusters and SEO content",
    tagline: "Dominant topical authority maps and intent-targeted content that systematically wins competitive keywords.",
    longDescription:
      "Random blogging does not rank on modern search engines. To rank for high-value terms, you must establish complete topical authority. We map your domain into structured topic clusters, identify high-intent commercial keywords, and craft detailed content briefs designed to satisfy both human searchers and Google's helpful content algorithms.",
    metaTitle: "Content Marketing and Keyword Strategy Services by MBSA",
    metaDescription: "Content marketing services built on keyword research: intent mapping, topic clusters, briefs, and human-written SEO content that ranks and earns enquiries.",
    primaryKeyword: "content marketing services",
    serviceType: "Content marketing and keyword strategy",
    schemaDescription: "A content and keyword strategy decides which topics and searches your business should be visible for, which page should answer each one and in what order to create or improve them. It connects customer questions to commercial pages, so content supports enquiries and sales rather than just traffic.",
    iconName: "Search",
    image: "/images/services/dark/content-keyword-strategy.png",
    lightImage: "/images/services/light/content-keyword-strategy.png",
    darkImage: "/images/services/dark/content-keyword-strategy.png",
    stats: {
      highlight: "+240%",
      label: "Keyword Footprint Expansion",
      sublabel: "Top 3 & Top 10 Google positions",
    },
    deliverables: [
      "Comprehensive buyer-intent keyword research (Informational, Commercial, Navigational)",
      "Topical authority cluster mapping (Pillar pages and supporting sub-articles)",
      "Content decay audit identifying outdated pages losing traffic to competitors",
      "Detailed editorial briefs with semantic headings (H2/H3), word count, and entity targets",
      "Internal linking architecture blueprints maximizing PageRank distribution",
      "SEO copywriting guidelines and tone-of-voice alignment",
      "Quarterly content production calendar with expected ROI estimates",
    ],
    process: [
      {
        step: "01",
        title: "Intent Mining",
        description: "Scraping SERPs, Google PAA (People Also Ask), and forums to uncover exact customer questions.",
      },
      {
        step: "02",
        title: "Topical Mapping",
        description: "Organizing target keywords into cohesive pillar-cluster hierarchies to build niche authority.",
      },
      {
        step: "03",
        title: "Production & Optimization",
        description: "Drafting or editing content to exceed competitor depth, semantic richness, and readability.",
      },
      {
        step: "04",
        title: "Performance Review",
        description: "Tracking keyword movements post-publishing and optimizing internal links to accelerate rank gains.",
      },
    ],
    tools: ["Semrush", "Ahrefs", "Surfer SEO", "Clearscope", "Google Search Console", "MarketMuse"],
    benefits: [
      "Stop guessing what to write and publish content guaranteed to target real search volume",
      "Establish your website as the authoritative industry leader in Google's semantic index",
      "Generate qualified top and middle-of-funnel leads that feed your sales team",
    ],
    caseStudy: {
      client: "LegalBridge Solicitors",
      impact: "Published 36 topical cluster guides across commercial property law, increasing organic non-branded inbound inquiries by +240% over 12 months.",
      metric: "+240% Inquiries",
      link: "/projects",
    },
    faqs: [
          {
                "q": "Do you use AI to write content?",
                "a": "We may use AI tools to speed up research and outlines, but every piece is planned, written or heavily edited, fact-checked and approved by people. We don’t publish unedited AI text."
          },
          {
                "q": "How many articles should we publish each month?",
                "a": "Quality beats volume. Two to four genuinely useful, well-researched pieces a month usually outperform a high volume of thin posts. We recommend a cadence after the research phase."
          },
          {
                "q": "What is a topic cluster?",
                "a": "A topic cluster is a group of related pages: one comprehensive pillar page on a broad topic, linked to several detailed articles on subtopics. It helps search engines and readers understand your depth on a subject."
          },
          {
                "q": "Can you write for regulated industries like healthcare?",
                "a": "Yes, with care. We follow your compliance requirements, avoid unsupported claims and build in review by a qualified person on your team."
          },
          {
                "q": "Where do your keyword volumes come from?",
                "a": "From established tools such as Semrush, Ahrefs and Google Search Console. Volumes are estimates, so we label each with its source and date and use them to compare opportunities, not as promises."
          },
          {
                "q": "What is a content and keyword strategy?",
                "a": "A content and keyword strategy decides which topics and searches your business should be visible for, which page should answer each one and in what order to create or improve them. It connects customer questions to commercial pages, so content supports enquiries and sales rather than just traffic."
          },
          {
                "q": "What does your content marketing service include?",
                "a": "The core elements most clients receive are: keyword and question research; intent mapping; topic clusters; content briefs; writing and editing; content refresh plan. The exact scope is agreed after a short discovery call."
          },
          {
                "q": "Who is content and keyword strategy best for?",
                "a": "It suits businesses with expertise to share but no clear publishing plan, including service businesses, online stores and healthcare and finance brands. Content is written for people first and structured for search and AI answers."
          }
    ],
  },
  {
    num: "13",
    id: "social-media-marketing",
    slug: "social-media-marketing",
    aliases: ["social-marketing", "smm", "social-email"],
    title: "Social Media Marketing",
    shortTitle: "Social Media Marketing",
    category: "CONTENT, SOCIAL & ENGAGEMENT",
    categoryId: "content-social",
    badge: "Organic Social & Community Growth",
    desc: "Instagram, Facebook and LinkedIn management",
    tagline: "Consistent, high-engagement organic social presence that elevates brand recall and community trust.",
    longDescription:
      "A silent or sporadic social media presence damages prospective buyer confidence. We build and execute consistent social media marketing strategies across Instagram, Facebook, LinkedIn, and X. From strategic content calendars and eye-catching carousel designs to active community engagement and trend tapping, we keep your brand top-of-mind.",
    metaTitle: "Social Media Marketing Services: Content & Reels | MBSA",
    metaDescription: "Social media marketing that keeps your brand visible: strategy, monthly content calendars, Reels, design and community management. Get a free review today.",
    primaryKeyword: "social media marketing services",
    serviceType: "Social media marketing",
    schemaDescription: "Social media marketing is the use of platforms like Instagram, Facebook, LinkedIn and YouTube to build awareness, trust and relationships with customers. It covers strategy, content creation, publishing, community management and measurement, and often works alongside paid social ads.",
    iconName: "Share2",
    image: "/images/services/dark/social-media-marketing.png",
    lightImage: "/images/services/light/social-media-marketing.png",
    darkImage: "/images/services/dark/social-media-marketing.png",
    stats: {
      highlight: "+380%",
      label: "Engagement Rate Surge",
      sublabel: "Across LinkedIn & Instagram",
    },
    deliverables: [
      "Comprehensive monthly social media content calendar with approved copy & visuals",
      "Custom branded visual templates, carousels, and infographic designs",
      "Short-form video editing (Reels, TikTok, Shorts) with kinetic typography",
      "Community management: active comment monitoring, DM triage, and audience interaction",
      "Hashtag strategy and algorithmic reach optimization",
      "Competitor benchmark and viral trend monitoring",
      "Monthly performance reporting analyzing reach, saves, shares, and website referral clicks",
    ],
    process: [
      {
        step: "01",
        title: "Brand Voice & Visual Guide",
        description: "Aligning color palettes, typography, tone of voice, and content pillars for brand consistency.",
      },
      {
        step: "02",
        title: "Batch Creative Production",
        description: "Designing high-impact carousels, infographics, and short-form video snippets in monthly sprints.",
      },
      {
        step: "03",
        title: "Automated Publishing & Triage",
        description: "Scheduling posts at peak audience activity hours and actively monitoring replies and direct messages.",
      },
      {
        step: "04",
        title: "Growth Optimization",
        description: "Analyzing high-performing post formats (educational carousels vs video reels) to double down on winners.",
      },
    ],
    tools: ["Buffer", "Later", "Canva Pro", "Figma", "Sprout Social", "Meta Business Suite"],
    benefits: [
      "Maintain a vibrant, active brand presence that reassures researching prospects",
      "Drive genuine comments, shares, and bookmarks from interested potential clients",
      "Save 20+ hours per week by delegating content production and scheduling",
    ],
    caseStudy: {
      client: "UrbanCraft Architecture",
      impact: "Grew organic Instagram and LinkedIn reach from 4k to 85k monthly impressions with project breakdown carousels, generating 18 high-value residential commissions.",
      metric: "18 Commissions",
      link: "/projects",
    },
    faqs: [
          {
                "q": "Which social media platforms should my business be on?",
                "a": "The ones your customers use. For most consumer and local brands that means Instagram and Facebook; for B2B it is usually LinkedIn. We recommend a focused mix rather than every platform."
          },
          {
                "q": "How often should we post on social media?",
                "a": "Consistency matters more than volume. Three to five quality posts a week on your main platform is a good starting point for most businesses."
          },
          {
                "q": "Do you buy followers or engagement?",
                "a": "No. Bought followers and engagement damage trust, harm reach and distort your data."
          },
          {
                "q": "Do you need us to provide photos and videos?",
                "a": "Your own photos of your team, premises and work usually perform best. We can plan simple shoots with you and supplement with design-led graphics."
          },
          {
                "q": "How do you measure social media ROI?",
                "a": "We track reach and engagement, but focus on website visits, enquiries and sales from social using GA4 and UTM-tagged links."
          },
          {
                "q": "What is social media marketing?",
                "a": "Social media marketing is the use of platforms like Instagram, Facebook, LinkedIn and YouTube to build awareness, trust and relationships with customers. It covers strategy, content creation, publishing, community management and measurement, and often works alongside paid social ads."
          },
          {
                "q": "What is included in your social media management?",
                "a": "The core elements most clients receive are: social media strategy; monthly content calendar; design and Reels; captions and hashtags; community management; monthly reporting. The exact scope is agreed after a short discovery call."
          },
          {
                "q": "Who is your social media marketing service best for?",
                "a": "It suits brands that want a consistent social presence without hiring in-house, such as clinics, salons, restaurants, product brands and professional services."
          }
    ],
  },
  {
    num: "14",
    id: "influencer-marketing",
    slug: "influencer-marketing",
    aliases: ["influencer", "creator-marketing"],
    title: "Influencer Marketing",
    shortTitle: "Influencer Marketing",
    category: "CONTENT, SOCIAL & ENGAGEMENT",
    categoryId: "content-social",
    badge: "Micro-Creator & Key Opinion Leader Partnerships",
    desc: "Micro-influencer and creator campaigns",
    tagline: "Partner with trusted micro-influencers and niche creators to generate authentic social proof and conversions.",
    longDescription:
      "Consumers trust creators far more than traditional corporate advertisements. Rather than wasting money on overpriced celebrity influencers with unverified followers, we identify vetted micro-influencers (10k-100k followers) with authentic engagement and niche authority. We handle outreach, contract negotiation, product gifting, creative briefs, and ROI tracking.",
    metaTitle: "Influencer Marketing Agency for Micro-Creator Campaigns",
    metaDescription: "Influencer marketing with micro and nano creators your customers trust: vetting, briefs, disclosure compliance, UGC for ads and campaigns tracked to sales.",
    primaryKeyword: "influencer marketing agency",
    serviceType: "Influencer marketing",
    schemaDescription: "Influencer marketing is a partnership between a brand and content creators who promote its products or services to their audience. Smaller creators (micro and nano influencers) often have closer, more engaged communities, which can make their recommendations more persuasive and cost-effective than large celebrity accounts.",
    iconName: "Award",
    image: "/images/services/dark/influencer-marketing.png",
    lightImage: "/images/services/light/influencer-marketing.png",
    darkImage: "/images/services/dark/influencer-marketing.png",
    stats: {
      highlight: "5.2x",
      label: "Campaign ROI",
      sublabel: "Vetted micro-influencer partnerships",
    },
    deliverables: [
      "Influencer vetting: audience authenticity, follower engagement rates, and demographic auditing",
      "Campaign strategy & creative guidelines ensuring natural, unscripted product reviews",
      "End-to-end outreach, pricing negotiation, and legal contract management (usage rights)",
      "Product seeding, gifting logistics, and fulfillment coordination",
      "Unique affiliate discount codes and UTM link tracking for each creator",
      "Whitelisting permissions: running Meta ads through creator handles (Spark Ads / Partnership Ads)",
      "Post-campaign performance recap: total impressions, engagement, sales, and content assets library",
    ],
    process: [
      {
        step: "01",
        title: "Creator Discovery & Vetting",
        description: "Screening hundreds of niche creators for genuine audience engagement and brand alignment.",
      },
      {
        step: "02",
        title: "Outreach & Terms Negotiation",
        description: "Securing favorable deliverable rates and securing full digital ad whitelisting usage rights.",
      },
      {
        step: "03",
        title: "Execution & Content Review",
        description: "Coordinating product delivery and ensuring videos adhere to FTC disclosure guidelines while remaining authentic.",
      },
      {
        step: "04",
        title: "Paid Whitelisting & Amplification",
        description: "Turning top-performing creator videos into paid partnership ads on Meta and TikTok.",
      },
    ],
    tools: ["Modash", "Upfluence", "Grin", "HypeAuditor", "Shopify Collabs"],
    benefits: [
      "Acquire authentic user-generated content (UGC) for your own paid advertising funnels",
      "Tap into pre-built, highly engaged niche communities ready to trust recommendations",
      "Gain full legal rights to repurpose influencer creative across your website and email",
    ],
    caseStudy: {
      client: "FitActive Nutrition",
      impact: "Partnered with 28 fitness micro-creators, generating 1.4M authentic impressions and driving £42,000 in tracked first-month sales.",
      metric: "£42k Sales",
      link: "/projects",
    },
    faqs: [
          {
                "q": "How much does influencer marketing cost?",
                "a": "Costs range from free product for nano creators to significant fees for larger accounts. Most small and mid-sized brands get the best value from paid micro-influencer partnerships. We build a plan around your budget."
          },
          {
                "q": "What is the difference between micro and nano influencers?",
                "a": "Definitions vary, but nano influencers typically have around 1,000 to 10,000 followers and micro influencers around 10,000 to 100,000. Smaller creators often have higher engagement and lower costs."
          },
          {
                "q": "Do influencer posts need to be labelled as ads?",
                "a": "Yes. In the UK the ASA and CMA require clear disclosure, and in India ASCI guidelines require it too. We make sure every creator labels paid content correctly."
          },
          {
                "q": "How do you measure influencer marketing results?",
                "a": "With unique discount codes, tracked links and UTM parameters, plus reach and engagement. We report cost per sale or sign-up for each creator."
          },
          {
                "q": "Can we use creator content in our own ads?",
                "a": "Yes, if usage rights are agreed in the contract. We negotiate rights for paid use so you can run top-performing creator content as ads."
          },
          {
                "q": "What is influencer marketing?",
                "a": "Influencer marketing is a partnership between a brand and content creators who promote its products or services to their audience. Smaller creators (micro and nano influencers) often have closer, more engaged communities, which can make their recommendations more persuasive and cost-effective than large celebrity accounts."
          },
          {
                "q": "What does your influencer marketing service include?",
                "a": "The core elements most clients receive are: creator discovery and vetting; outreach and negotiation; creative briefs; compliance; UGC for ads; tracking and reporting. The exact scope is agreed after a short discovery call."
          },
          {
                "q": "Which brands are best suited to influencer marketing?",
                "a": "Consumer brands in beauty, wellness, food, fashion and lifestyle tend to benefit most, along with restaurants, clinics, gyms and brands launching new products."
          }
    ],
  },
  {
    num: "15",
    id: "email-marketing",
    slug: "email-marketing",
    aliases: ["email", "klaviyo", "mailchimp"],
    title: "Email Marketing",
    shortTitle: "Email Marketing",
    category: "CONTENT, SOCIAL & ENGAGEMENT",
    categoryId: "content-social",
    badge: "Automated Workflows & Lifecycle Retention",
    desc: "Newsletters, automations and lifecycle emails",
    tagline: "High-converting email sequences, welcome flows, and newsletter campaigns that turn subscribers into repeat buyers.",
    longDescription:
      "Your email list is your most valuable owned asset—immune to algorithm updates and ad platform bans. We design and build automated lifecycle email flows (Welcome Series, Abandoned Cart, Post-Purchase, Winback) and engaging regular campaigns that build customer loyalty and drive 20% to 40% of total company revenue.",
    metaTitle: "Email Marketing Services: Campaigns & Automation | MBSA",
    metaDescription: "Email marketing services that turn subscribers into repeat customers: welcome, abandoned-cart and winback flows, newsletters, templates and deliverability.",
    primaryKeyword: "email marketing services",
    serviceType: "Email marketing",
    schemaDescription: "Email marketing is sending relevant, permission-based emails to subscribers and customers to build relationships and drive sales. Modern email marketing relies on automated flows, such as welcome, abandoned-cart and win-back sequences, plus segmented campaigns that send the right message to the right people.",
    iconName: "Mail",
    image: "/images/services/dark/email-marketing.png",
    lightImage: "/images/services/light/email-marketing.png",
    darkImage: "/images/services/dark/email-marketing.png",
    stats: {
      highlight: "+32%",
      label: "Revenue from Email",
      sublabel: "Automated lifecycle flows",
    },
    deliverables: [
      "Klaviyo / Mailchimp / ActiveCampaign account setup and subscriber segment cleansing",
      "Core automated flows: Welcome nurture, abandoned cart recovery, browse abandonment, VIP loyalty",
      "Responsive, clean HTML email templates designed for mobile dark mode compatibility",
      "High-converting email copywriting with click-focused subject lines and preview text",
      "Smart subscriber segmentation based on purchase history, engagement frequency, and RFM scores",
      "Deliverability optimization: SPF, DKIM, DMARC verification and spam-trap cleansing",
      "A/B testing matrix for subject lines, send times, and button call-to-actions",
    ],
    process: [
      {
        step: "01",
        title: "List & Deliverability Audit",
        description: "Checking inbox placement, warming up domain reputations, and configuring authentication protocols.",
      },
      {
        step: "02",
        title: "Lifecycle Flow Architecture",
        description: "Building automated multi-step trigger sequences tailored to user behavior and cart actions.",
      },
      {
        step: "03",
        title: "Template & Copy Production",
        description: "Crafting beautiful, accessible email layouts that render flawlessly across Outlook, Apple Mail, and Gmail.",
      },
      {
        step: "04",
        title: "Segmentation & Broadcasts",
        description: "Executing regular promotional and value-add newsletters targeted to engaged customer cohorts.",
      },
    ],
    tools: ["Klaviyo", "Mailchimp", "ActiveCampaign", "Litmus", "Figma", "Brevo"],
    benefits: [
      "Generate dependable, recurring revenue with zero additional advertising cost",
      "Recover 15%+ of abandoned carts automatically without manual intervention",
      "Maintain high inbox deliverability rates by avoiding the spam and promotions tab",
    ],
    caseStudy: {
      client: "PureBotanics UK",
      impact: "Rebuilt Klaviyo automated flows and implemented VIP segmentations, scaling email's contribution from 11% to 34% of total monthly e-commerce revenue.",
      metric: "34% of Revenue",
      link: "/projects",
    },
    faqs: [
          {
                "q": "How often should we send marketing emails?",
                "a": "Most brands do well with one to four campaigns a month plus automated flows. The right frequency depends on how much useful content and offers you have; we test and adjust."
          },
          {
                "q": "Which email marketing platform is best?",
                "a": "Klaviyo is strong for e-commerce, HubSpot for B2B with a CRM, and Mailchimp or Brevo for simpler needs. We recommend one based on your platform and budget."
          },
          {
                "q": "Why are my emails going to spam?",
                "a": "Common causes are missing SPF, DKIM or DMARC records, sending to old or purchased lists, and low engagement. We fix authentication and improve list hygiene."
          },
          {
                "q": "Can I buy an email list?",
                "a": "We don’t recommend it. Bought lists usually breach data protection rules such as UK GDPR and harm deliverability. We help you grow a permission-based list instead."
          },
          {
                "q": "What is a good email open rate?",
                "a": "It varies by industry and is less reliable since privacy changes inflated open counts. We focus on clicks, conversions and revenue per email."
          },
          {
                "q": "What is email marketing?",
                "a": "Email marketing is sending relevant, permission-based emails to subscribers and customers to build relationships and drive sales. Modern email marketing relies on automated flows, such as welcome, abandoned-cart and win-back sequences, plus segmented campaigns that send the right message to the right people."
          },
          {
                "q": "What does your email marketing service include?",
                "a": "The core elements most clients receive are: email strategy; automated flows; campaign planning and copy; responsive templates; deliverability setup; testing and reporting. The exact scope is agreed after a short discovery call."
          },
          {
                "q": "Which email platforms do you work with?",
                "a": "We work with Klaviyo, Mailchimp, HubSpot, Brevo and other email platforms, for ecommerce brands and businesses with a customer or lead list."
          }
    ],
  },
  {
    num: "16",
    id: "whatsapp-marketing",
    slug: "whatsapp-marketing",
    aliases: ["whatsapp", "whatsapp-business-api"],
    title: "WhatsApp Marketing",
    shortTitle: "WhatsApp Marketing",
    category: "CONTENT, SOCIAL & ENGAGEMENT",
    categoryId: "content-social",
    badge: "WhatsApp Business API & Broadcast Automation",
    desc: "WhatsApp Business API, broadcasts and chat",
    tagline: "Unlock 98% open rates with compliant WhatsApp Business API broadcasts, automated alerts, and conversational commerce.",
    longDescription:
      "While email averages a 20% open rate, WhatsApp delivers an astonishing 98% open rate within minutes of delivery. We deploy official WhatsApp Business API solutions to help your business send compliant broadcast marketing, order tracking alerts, abandoned cart reminders, and automated customer support chatbots that drive immediate engagement.",
    metaTitle: "WhatsApp Marketing Services & Business API Setup | MBSA",
    metaDescription: "WhatsApp marketing services: Business API setup, approved templates, opt-in broadcasts, chatbots and click-to-WhatsApp ads linked to your CRM. Speak to us.",
    primaryKeyword: "WhatsApp marketing services",
    serviceType: "WhatsApp marketing",
    schemaDescription: "WhatsApp marketing uses the WhatsApp Business app or the WhatsApp Business Platform (API) to communicate with customers who have opted in. It covers broadcast campaigns using approved message templates, automated replies and chatbots, click-to-WhatsApp ads, catalogues and one-to-one support conversations.",
    iconName: "Smartphone",
    image: "/images/services/dark/whatsapp-marketing.png",
    lightImage: "/images/services/light/whatsapp-marketing.png",
    darkImage: "/images/services/dark/whatsapp-marketing.png",
    stats: {
      highlight: "98%",
      label: "Average Open Rate",
      sublabel: "Under 15 minutes response time",
    },
    deliverables: [
      "Official Meta WhatsApp Business Cloud API verification & green checkmark badge support",
      "Compliance-first opt-in collection widgets and lead generation landing page integrations",
      "Pre-approved Meta message template creation (utility, marketing, and authentication)",
      "Automated e-commerce notifications: order confirmation, shipping tracking, and COD verification",
      "Conversational chatbot workflows answering FAQs and booking sales consultations 24/7",
      "Broadcast campaigns for seasonal sales and VIP product releases with dynamic CTA buttons",
      "Multi-agent shared team inbox configuration for support and sales representatives",
    ],
    process: [
      {
        step: "01",
        title: "API Onboarding & Verification",
        description: "Registering your brand on the Meta Cloud API and securing green tick business verification.",
      },
      {
        step: "02",
        title: "Template Approval",
        description: "Drafting high-conversion notification templates and submitting them for Meta approval.",
      },
      {
        step: "03",
        title: "Workflow Automation",
        description: "Connecting WhatsApp via webhooks to Shopify, WooCommerce, or your CRM for automated triggers.",
      },
      {
        step: "04",
        title: "Broadcast & Conversation Tuning",
        description: "Executing segmented broadcasts and optimizing bot logic based on real customer conversation flows.",
      },
    ],
    tools: ["WhatsApp Cloud API", "Wati", "AiSensy", "Interakt", "Twilio", "ManyChat"],
    benefits: [
      "Reach customers directly on their primary messaging app with near-100% read rates",
      "Accelerate response times to buyer inquiries from hours down to seconds",
      "Recover high-intent abandoned carts with personalized conversational prompts",
    ],
    caseStudy: {
      client: "Luxe Furnishings",
      impact: "Implemented automated WhatsApp abandoned cart alerts with instant representative chat, recovering 26% of lost carts and £38,000 in monthly revenue.",
      metric: "26% Cart Recovery",
      link: "/projects",
    },
    faqs: [
          {
                "q": "What is the WhatsApp Business API?",
                "a": "The WhatsApp Business API, now called the WhatsApp Business Platform, lets medium and large businesses send messages at scale, use automation and chatbots, connect multiple team members and integrate with CRMs. It is accessed through Meta directly or approved providers."
          },
          {
                "q": "Is bulk WhatsApp messaging legal?",
                "a": "Sending marketing messages is allowed only to people who have opted in, using approved templates through the official platform. Unofficial bulk-sending tools breach WhatsApp’s policies and can get your number banned."
          },
          {
                "q": "How much does WhatsApp marketing cost?",
                "a": "Meta charges per message based on category and country, and providers charge a platform fee. We estimate costs based on your expected message volume."
          },
          {
                "q": "What is the difference between WhatsApp Business app and API?",
                "a": "The free app suits very small businesses managing chats by hand on one or two devices. The platform (API) supports automation, multiple agents, broadcasts to opted-in lists and integrations."
          },
          {
                "q": "Can WhatsApp connect to our CRM?",
                "a": "Yes. Through your provider, conversations and leads can sync with CRMs such as HubSpot, Zoho or Salesforce. See our marketing automation service."
          },
          {
                "q": "What is WhatsApp marketing?",
                "a": "WhatsApp marketing uses the WhatsApp Business app or the WhatsApp Business Platform (API) to communicate with customers who have opted in. It covers broadcast campaigns using approved message templates, automated replies and chatbots, click-to-WhatsApp ads, catalogues and one-to-one support conversations."
          },
          {
                "q": "What does your WhatsApp marketing service include?",
                "a": "The core elements most clients receive are: WhatsApp Business Platform setup; message templates; automated journeys; click-to-WhatsApp ads; opt-in list growth; CRM and reporting. The exact scope is agreed after a short discovery call."
          },
          {
                "q": "Which businesses benefit most from WhatsApp marketing?",
                "a": "D2C brands, clinics and diagnostics, education, real estate and local services benefit most, especially for high-consideration enquiries. All campaigns are opt-in only and follow WhatsApp Business policies."
          }
    ],
  },
  {
    num: "17",
    id: "online-reputation-management",
    slug: "online-reputation-management",
    aliases: ["orm", "reputation-management"],
    title: "Online Reputation Management",
    shortTitle: "Reputation Management (ORM)",
    category: "CONTENT, SOCIAL & ENGAGEMENT",
    categoryId: "content-social",
    badge: "Review Management & Brand SERP Protection",
    desc: "Reviews, brand search results and responses",
    tagline: "Protect your brand search results, cultivate authentic 5-star customer reviews, and suppress negative press.",
    longDescription:
      "When prospective clients Google your business name, what appears on Page 1 determines whether they contact you or a competitor. Our Online Reputation Management (ORM) service cleans up search engine results, generates a steady stream of authentic 5-star customer reviews across Trustpilot and Google, and defends your executive leadership from unfair negative press.",
    metaTitle: "Online Reputation Management and Review Services | MBSA",
    metaDescription: "Online reputation management that builds trust: genuine Google review growth, response management, brand search monitoring and checks on what AI tools say.",
    primaryKeyword: "online reputation management",
    serviceType: "Online reputation management",
    schemaDescription: "Online reputation management (ORM) is the ongoing work of monitoring, building and protecting how your business appears online. It covers earning genuine reviews, responding to feedback, improving what appears when people search your brand name, and correcting inaccurate information, including in AI-generated answers.",
    iconName: "ShieldCheck",
    image: "/images/services/dark/online-reputation-management.png",
    lightImage: "/images/services/light/online-reputation-management.png",
    darkImage: "/images/services/dark/online-reputation-management.png",
    stats: {
      highlight: "4.9 ★",
      label: "Target Rating Benchmark",
      sublabel: "Across Google & Trustpilot",
    },
    deliverables: [
      "Brand SERP audit analyzing Page 1 search sentiment for your company and executives",
      "Automated customer review generation funnels (SMS, email, QR codes) for Google & Trustpilot",
      "Professional review response playbook resolving negative customer feedback constructively",
      "Negative SERP suppression: publishing and ranking authoritative positive web assets",
      "Defamation and policy-violating review removal appeals to Google and review platforms",
      "Crisis communication monitoring with 24/7 brand mention alerts",
      "Wikipedia and executive profile verification to reinforce positive search presence",
    ],
    process: [
      {
        step: "01",
        title: "Brand SERP Forensic Audit",
        description: "Auditing all search listings, forum threads, and review ratings appearing for your brand name.",
      },
      {
        step: "02",
        title: "Review Acceleration",
        description: "Deploying automated post-service review invites to happy clients to increase positive review velocity.",
      },
      {
        step: "03",
        title: "Negative Content Suppression",
        description: "Building high-authority digital PR profiles and optimized secondary assets to push negative results off Page 1.",
      },
      {
        step: "04",
        title: "Ongoing Brand Monitoring",
        description: "Continuous real-time scanning of news, Reddit, Twitter, and review portals for brand mentions.",
      },
    ],
    tools: ["Brand24", "Trustpilot", "Google Alerts", "ReviewTrackers", "Semrush Brand Monitoring"],
    benefits: [
      "Turn your Google Page 1 into a glowing showcase of credibility that wins client trust",
      "Increase conversion rates across all other marketing channels by eliminating doubt",
      "Resolve customer complaints proactively before they turn into damaging public reviews",
    ],
    caseStudy: {
      client: "Apex Wealth Partners",
      impact: "Suppressed an outdated 4-year-old unfair forum thread off Page 1 and generated 85+ verified 5-star Google reviews, lifting new inquiry closing rates by 38%.",
      metric: "+38% Close Rate",
      link: "/projects",
    },
    faqs: [
          {
                "q": "Can you remove negative reviews?",
                "a": "We can’t remove genuine reviews, and no ethical provider should promise to. We can report reviews that breach a platform’s policies, such as fake or abusive content, and help you respond professionally to the rest."
          },
          {
                "q": "How do I get more Google reviews?",
                "a": "Ask every satisfied customer at the right moment, make it easy with a direct link or QR code, and follow up once. Don’t offer incentives or filter who you ask, as that breaches Google’s policies."
          },
          {
                "q": "How should I respond to a negative review?",
                "a": "Respond promptly and politely, acknowledge the experience, avoid sharing private details, and offer to resolve it offline. A good reply often reassures future customers more than the review worries them."
          },
          {
                "q": "How much does online reputation management cost?",
                "a": "It depends on the number of locations, platforms and review volume. We quote after an initial audit."
          },
          {
                "q": "Can you fix what AI tools say about my business?",
                "a": "We can’t edit AI answers directly, but we can correct and strengthen the sources they draw from, such as your website, profiles and directory listings, which often improves accuracy over time."
          },
          {
                "q": "What is online reputation management?",
                "a": "Online reputation management (ORM) is the ongoing work of monitoring, building and protecting how your business appears online. It covers earning genuine reviews, responding to feedback, improving what appears when people search your brand name, and correcting inaccurate information, including in AI-generated answers."
          },
          {
                "q": "What does your online reputation management service include?",
                "a": "The core elements most clients receive are: review generation; response management; brand search monitoring; AI answer checks; policy-violating review reports; reputation reporting. The exact scope is agreed after a short discovery call."
          },
          {
                "q": "Who needs online reputation management?",
                "a": "It suits clinics, local businesses, hospitality and service brands, chains and franchises, and businesses recovering after a difficult period. We never use fake reviews or try to hide genuine feedback."
          }
    ],
  },

  // =========================================================================
  // CATEGORY 4: WEBSITES & CREATIVE (18 - 21)
  // =========================================================================
  {
    num: "18",
    id: "website-design-development",
    slug: "website-design-development",
    aliases: ["wordpress-ecommerce", "web-development", "wordpress-development"],
    title: "Website Design & Development",
    shortTitle: "Website Design & Dev",
    category: "WEBSITES & CREATIVE",
    categoryId: "websites-creative",
    badge: "Fast, SEO-Ready WordPress & Next.js Websites",
    desc: "Fast, SEO-ready WordPress websites",
    tagline: "Bespoke, blazingly fast websites built with modern UI design, clean code, and built-in search readiness.",
    longDescription:
      "A slow, outdated website actively drives paying customers away. We design and develop custom, responsive websites using WordPress, Headless CMS, or Next.js. Engineered with computer engineering precision, our sites boast sub-second loading speeds, full Core Web Vitals compliance, conversion-focused UI/UX layouts, and clean semantic architecture.",
    metaTitle: "Website Design and Development: SEO-Ready Sites by MBSA",
    metaDescription: "Website design and development for fast, SEO-ready WordPress and custom sites, with Core Web Vitals, tracking and redirect plans built in. Request a quote.",
    primaryKeyword: "website design and development",
    serviceType: "Website design and development",
    schemaDescription: "An SEO-friendly website is fast, mobile-friendly, accessible and easy for search engines to crawl. It has a logical page structure, one clear purpose per page, descriptive headings, accurate metadata and structured data, and it preserves existing rankings when it replaces an older site.",
    iconName: "Globe",
    image: "/images/services/dark/website-design-development.png",
    lightImage: "/images/services/light/website-design-development.png",
    darkImage: "/images/services/dark/website-design-development.png",
    stats: {
      highlight: "< 0.8s",
      label: "Average Load Time",
      sublabel: "Sub-second global performance",
    },
    deliverables: [
      "Custom responsive UI/UX design crafted in Figma tailored to your brand identity",
      "Lightweight, block-based WordPress development (zero bloated page builders like Elementor)",
      "Full mobile-first optimization guaranteeing responsive perfection on all screen sizes",
      "Built-in on-page technical SEO: semantic HTML5, Schema markup, and clean URLs",
      "Robust security hardening, automated cloud backups, and SSL/HTTPS configuration",
      "Intuitive client CMS dashboard for easy in-house blog and page editing",
    ],
    process: [
      {
        step: "01",
        title: "UX & Wireframing",
        description: "Mapping intuitive user journeys, conversion paths, and information architecture in Figma.",
      },
      {
        step: "02",
        title: "Lightweight Development",
        description: "Writing clean, semantic code with minimal plugins, optimized databases, and modern frameworks.",
      },
      {
        step: "03",
        title: "Speed & SEO Tuning",
        description: "Achieving green Core Web Vitals, preloading critical fonts, and setting up edge caching.",
      },
      {
        step: "04",
        title: "Testing & Launch",
        description: "Cross-browser QA testing, 301 redirect validation, and seamless zero-downtime DNS migration.",
      },
    ],
    tools: ["WordPress", "HTML", "CSS", "Figma"],
    benefits: [
      "Drastically lower bounce rates with instant page loads under 1 second",
      "Rank faster on Google thanks to clean, semantic code without page builder bloat",
      "Effortlessly update content in-house with an intuitive, streamlined editor",
    ],
    caseStudy: {
      client: "Strata Engineering",
      impact: "Rebuilt an outdated 80-page corporate site into a lightning-fast custom WordPress architecture, slashing bounce rates by 48% and boosting lead submissions by +125%.",
      metric: "+125% Leads",
      link: "/projects",
    },
    faqs: [
          {
                "q": "How much does a business website cost?",
                "a": "It depends on the number of pages, features, integrations and content needed. A focused brochure site costs much less than a large custom build. We provide a fixed quote after a discovery call."
          },
          {
                "q": "How long does it take to build a website?",
                "a": "A focused business website typically takes four to eight weeks from kick-off to launch, depending on content readiness and feedback rounds. Larger builds take longer; we agree milestones up front."
          },
          {
                "q": "Will a redesign hurt our Google rankings?",
                "a": "It can if URLs, content and internal links change without a plan. We map every important old URL to a new one, set up 301 redirects, keep valuable content and monitor indexing after launch."
          },
          {
                "q": "Can we edit the website ourselves?",
                "a": "Yes. We build with editable blocks or sections and provide a short training session and written guide."
          },
          {
                "q": "Do you provide hosting and maintenance?",
                "a": "We can recommend reliable hosting and offer maintenance plans for updates, backups, security and small changes."
          },
          {
                "q": "What makes a website SEO-friendly?",
                "a": "An SEO-friendly website is fast, mobile-friendly, accessible and easy for search engines to crawl. It has a logical page structure, one clear purpose per page, descriptive headings, accurate metadata and structured data, and it preserves existing rankings when it replaces an older site."
          },
          {
                "q": "What is included in your website design and development service?",
                "a": "The core elements most clients receive are: sitemap and UX planning; visual design; development; speed and Core Web Vitals; migration protection; tracking from launch. The exact scope is agreed after a short discovery call."
          },
          {
                "q": "Which platforms do you build websites on?",
                "a": "We build on WordPress, Webflow and custom HTML/JS, with SEO structure, speed, accessibility and GA4 tracking built in."
          }
    ],
  },
  {
    num: "19",
    id: "ecommerce-website-development",
    slug: "ecommerce-website-development",
    aliases: ["shopify-development", "woocommerce-dev"],
    title: "E-commerce Website Development",
    shortTitle: "E-commerce Development",
    category: "WEBSITES & CREATIVE",
    categoryId: "websites-creative",
    badge: "Shopify & WooCommerce Store Architecture",
    desc: "Shopify and WooCommerce stores",
    tagline: "High-converting online stores engineered for smooth checkout, lightning speed, and maximum average order value.",
    longDescription:
      "An e-commerce store needs to do more than look pretty—it must convert browsers into buyers. We build custom Shopify, Shopify Plus, and WooCommerce stores optimized for high transaction velocity. From frictionless mobile 1-click checkouts and smart upsell bundles to inventory management integrations and payment gateways, we build stores that scale.",
    metaTitle: "Ecommerce Website Development for Shopify & WooCommerce",
    metaDescription: "Ecommerce website development on Shopify and WooCommerce: fast themes, product pages that convert, payments, shipping and GA4 tracking set up from day one.",
    primaryKeyword: "ecommerce website development",
    serviceType: "Ecommerce website development",
    schemaDescription: "We design and build online stores that load quickly, rank well and make buying easy, with payments, shipping, product data and analytics set up properly from day one.",
    iconName: "ShoppingCart",
    image: "/images/services/dark/ecommerce-website-development.png",
    lightImage: "/images/services/light/ecommerce-website-development.png",
    darkImage: "/images/services/dark/ecommerce-website-development.png",
    stats: {
      highlight: "+38%",
      label: "Checkout Conversion Lift",
      sublabel: "Optimized mobile checkout funnels",
    },
    deliverables: [
      "Custom Shopify Liquid theme development or headless WooCommerce architecture",
      "Mobile-optimized checkout flows supporting Apple Pay, Google Pay, and Klarna",
      "Upsell, cross-sell, and bundle modules designed to increase Average Order Value (AOV)",
      "High-speed product collection filtering without page reloads",
      "Inventory, ERP, and 3PL fulfillment software integrations (ShipStation, Linnworks)",
      "E-commerce schema markup (Product, AggregateOffer, Review) built-in natively",
      "Shopify app audit and optimization to eliminate render-blocking script lag",
    ],
    process: [
      {
        step: "01",
        title: "Store Strategy & UX",
        description: "Designing frictionless product exploration, category filters, and high-converting cart slideouts.",
      },
      {
        step: "02",
        title: "Theme Engineering",
        description: "Coding clean, lightweight Shopify or WooCommerce themes with minimal third-party dependencies.",
      },
      {
        step: "03",
        title: "Payment & App Integration",
        description: "Setting up Stripe, PayPal, Klarna, email flows (Klaviyo), and customer loyalty systems.",
      },
      {
        step: "04",
        title: "Conversion Stress Testing",
        description: "Testing end-to-end purchasing, checkout speed, promo codes, and automated tax calculations.",
      },
    ],
    tools: ["Shopify Plus", "WooCommerce", "Liquid", "Stripe", "Klaviyo", "ReCharge", "Figma"],
    benefits: [
      "Maximize mobile sales with instant payment methods (Apple Pay, Shop Pay, Google Pay)",
      "Increase Average Order Value (AOV) through strategic post-purchase upsells",
      "Achieve fast page loads on product pages even with high-resolution imagery",
    ],
    caseStudy: {
      client: "Kora Activewear",
      impact: "Migrated a sluggish Magento store to custom Shopify Plus, improving mobile checkout conversion rates by +38% and handling £120k Black Friday traffic effortlessly.",
      metric: "+38% Conversion",
      link: "/projects",
    },
    faqs: [
          {
                "q": "Is Shopify or WooCommerce better for SEO?",
                "a": "Both can perform well. Shopify handles hosting and security for you but has a fixed URL structure. WooCommerce offers more control but needs good hosting and maintenance. The quality of the build matters more than the platform."
          },
          {
                "q": "How much does an ecommerce website cost?",
                "a": "It depends on catalogue size, design, integrations and migration needs. We provide a fixed quote after discovery."
          },
          {
                "q": "Can you migrate our store without losing rankings?",
                "a": "Yes. We map old URLs to new ones, set up 301 redirects, migrate product content and metadata, and monitor indexing closely after launch."
          },
          {
                "q": "Which payment gateways do you set up?",
                "a": "We work with major gateways including Shopify Payments, Razorpay, Stripe and PayPal, depending on your country and needs."
          },
          {
                "q": "Do you offer ongoing store support?",
                "a": "Yes. We offer maintenance, app reviews, speed checks and conversion improvements after launch."
          },
          {
                "q": "What is included in your ecommerce website development?",
                "a": "The core elements most clients receive are: store design; theme development; products and collections; payments and shipping; migration and replatforming; tracking and feeds. The exact scope is agreed after a short discovery call."
          },
          {
                "q": "Which ecommerce platforms do you build stores on?",
                "a": "We build on Shopify, Shopify Plus and WooCommerce, for new online stores, replatforming projects and store redesigns."
          },
          {
                "q": "What is built into every store you develop?",
                "a": "Every store is built with product SEO, Core Web Vitals performance and GA4 ecommerce tracking from day one, with payments, shipping and product data set up properly."
          }
    ],
  },
  {
    num: "20",
    id: "branding-design",
    slug: "branding-design",
    aliases: ["branding", "graphic-design"],
    title: "Branding & Design",
    shortTitle: "Branding & Design",
    category: "WEBSITES & CREATIVE",
    categoryId: "websites-creative",
    badge: "Visual Identity, Logos & Brand Guidelines",
    desc: "Brand identity, logos and graphic design",
    tagline: "Memorable brand identities, typography, color palettes, and digital assets that distinguish you from the competition.",
    longDescription:
      "First impressions happen in milliseconds. In a crowded digital market, generic templates will get your business overlooked. We build cohesive visual brand identities from the ground up: memorable logo marks, sophisticated typography pairings, curated color systems, and comprehensive brand guideline books that command premium pricing and customer loyalty.",
    metaTitle: "Branding Agency: Logo Design and Visual Identity | MBSA",
    metaDescription: "Branding and design that make you recognisable: brand strategy, logo design, a visual identity system, brand guidelines, and ready-to-use marketing assets.",
    primaryKeyword: "branding agency",
    serviceType: "Branding and design",
    schemaDescription: "A branding agency helps a business define how it wants to be seen and expresses that consistently. Work usually includes brand strategy (positioning, audience, personality and tone of voice), logo design, a visual identity system of colours, typography and imagery, brand guidelines, and templates for marketing materials.",
    iconName: "Layers",
    image: "/images/services/dark/branding-design.png",
    lightImage: "/images/services/light/branding-design.png",
    darkImage: "/images/services/dark/branding-design.png",
    stats: {
      highlight: "100%",
      label: "Bespoke Vector Assets",
      sublabel: "Complete brand guidelines",
    },
    deliverables: [
      "Primary, secondary, and sub-mark vector logo suites (SVG, EPS, PNG, PDF)",
      "Carefully curated typography hierarchy (Web font pairings and print licensing)",
      "Harmonious brand color palettes (HEX, RGB, CMYK, Pantone codes)",
      "Comprehensive Brand Style Guide book detailing usage rules and spacing",
      "Social media kit: avatars, banner headers, and reusable post templates",
      "Stationery & collateral design: business cards, letterheads, invoice templates, and slide decks",
      "Packaging and merchandise vector mockups",
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Moodboarding",
        description: "Analyzing your market positioning, competitor visuals, and compiling creative moodboards.",
      },
      {
        step: "02",
        title: "Concept Development",
        description: "Sketching and illustrating multiple unique logo concepts and design directions.",
      },
      {
        step: "03",
        title: "Refinement & Typography",
        description: "Perfecting vector geometry, selecting typography pairings, and finalizing harmonious color palettes.",
      },
      {
        step: "04",
        title: "Asset Package Delivery",
        description: "Compiling print-ready and digital vector files alongside a comprehensive brand guidelines manual.",
      },
    ],
    tools: ["Adobe Illustrator", "Figma", "Adobe Photoshop", "InDesign"],
    benefits: [
      "Command premium industry pricing with high-end, polished visual authority",
      "Ensure 100% brand consistency across your website, ads, packaging, and social media",
      "Receive scalable vector files ready for everything from billboards to mobile favicons",
    ],
    caseStudy: {
      client: "Vanguard Capital",
      impact: "Rebranded a 15-year-old financial consultancy with a modern visual identity system, reinforcing institutional trust and aiding in closing a £12M fund raise.",
      metric: "Complete Rebrand",
      link: "/projects",
    },
    faqs: [
          {
                "q": "How much does branding cost?",
                "a": "It depends on scope. A logo and basic identity costs less than full strategy, guidelines and asset design. We quote after a discovery call."
          },
          {
                "q": "What is the difference between a logo and a brand?",
                "a": "A logo is one symbol. A brand is the whole perception of your business: positioning, personality, visuals, tone of voice and customer experience. A logo is part of your brand identity."
          },
          {
                "q": "How long does a branding project take?",
                "a": "A logo and visual identity usually takes three to six weeks, depending on feedback rounds. Full brand strategy and guidelines take longer."
          },
          {
                "q": "Will I own the logo files?",
                "a": "Yes. On final payment you receive full ownership and all source files in formats suitable for web, social and print."
          },
          {
                "q": "Can you design social media templates and ads?",
                "a": "Yes. We create on-brand templates and creatives your team can reuse, plus campaign assets for our social media and Meta Ads services."
          },
          {
                "q": "What does a branding agency do?",
                "a": "A branding agency helps a business define how it wants to be seen and expresses that consistently. Work usually includes brand strategy (positioning, audience, personality and tone of voice), logo design, a visual identity system of colours, typography and imagery, brand guidelines, and templates for marketing materials."
          },
          {
                "q": "What do you deliver in a branding project?",
                "a": "Brand strategy, a logo, a visual identity system, brand guidelines and marketing graphics, delivered as ready-to-use files for web, social and print."
          },
          {
                "q": "Who is branding and design best for?",
                "a": "It suits new businesses, rebrands and brands that look inconsistent, including growing companies and D2C and retail brands."
          }
    ],
  },
  {
    num: "21",
    id: "copywriting-messaging",
    slug: "copywriting-messaging",
    aliases: ["copywriting", "content-writing"],
    title: "Copywriting & Messaging",
    shortTitle: "Copywriting & Messaging",
    category: "WEBSITES & CREATIVE",
    categoryId: "websites-creative",
    badge: "High-Converting Sales Copy & Editorial Content",
    desc: "Website, SEO, ad and email copy",
    tagline: "Persuasive, customer-centric copy that speaks directly to audience pain points and drives decisive conversions.",
    longDescription:
      "Design grabs attention, but words make the sale. Weak, cliché-ridden copy causes interested visitors to hesitate and leave. We write clear, high-converting direct-response copy for websites, landing pages, digital ads, and email campaigns. Grounded in customer psychology, our messaging clearly articulates your unique value proposition and dissolves buyer skepticism.",
    metaTitle: "Copywriting Services: Web, SEO, Ads & Email Copy | MBSA",
    metaDescription: "Copywriting services for websites, SEO pages, landing pages, ads and emails: clear, persuasive copy written by people in your brand voice. Request a quote.",
    primaryKeyword: "copywriting services",
    serviceType: "Copywriting",
    schemaDescription: "Copywriting is writing words that persuade people to take an action, such as making an enquiry, buying or signing up. It includes website copy, landing pages, ads, emails and product descriptions. SEO copywriting also makes sure pages match what people search for, without sacrificing readability.",
    iconName: "FileCheck",
    image: "/images/services/dark/copywriting-messaging.png",
    lightImage: "/images/services/light/copywriting-messaging.png",
    darkImage: "/images/services/dark/copywriting-messaging.png",
    stats: {
      highlight: "+54%",
      label: "Landing Page Conversion",
      sublabel: "Lift following copy rewrite",
    },
    deliverables: [
      "Customer interview mining and pain-point voice-of-customer (VoC) analysis",
      "Homepage, About, and Service page messaging hierarchies",
      "Direct-response landing page copy structured for high conversion rates",
      "High-CTR ad copy for Google Search ads and Meta social campaigns",
      "Email sales sequences, webinar pitches, and nurture newsletters",
      "Compelling call-to-actions (CTAs) that overcome common objections",
      "Brand messaging guide with elevator pitches and value proposition statements",
    ],
    process: [
      {
        step: "01",
        title: "Voice-of-Customer Research",
        description: "Analyzing customer reviews, support tickets, and sales calls to discover the exact words buyers use.",
      },
      {
        step: "02",
        title: "Value Proposition Formulation",
        description: "Crafting a clear headline and subheadline that states what you offer and why it is better.",
      },
      {
        step: "03",
        title: "Drafting & Objection Handling",
        description: "Structuring the page copy to lead prospects through empathy, proof, benefits, and call to action.",
      },
      {
        step: "04",
        title: "Polishing & Readability Testing",
        description: "Testing copy for cadence, brevity, grade-level readability, and persuasive clarity.",
      },
    ],
    tools: ["Hemingway App", "Grammarly Business", "Google Docs", "Ahrefs"],
    benefits: [
      "Explain complex technical products or services in clear, compelling, plain English",
      "Transform passive website visitors into eager phone calls and inquiry form submissions",
      "Establish a distinct, memorable brand voice that competitors cannot copy",
    ],
    caseStudy: {
      client: "B2B SaaS Horizon",
      impact: "Rewrote the core landing page headline and feature copy to focus on ROI rather than jargon, lifting demo booking conversion rate from 2.1% to 3.8%.",
      metric: "2.1% → 3.8%",
      link: "/projects",
    },
    faqs: [
          {
                "q": "Do you use AI to write copy?",
                "a": "We may use AI for research or first-draft ideas, but every piece is written and edited by people who understand your brand and customers. Unedited AI copy tends to sound generic and rarely converts well."
          },
          {
                "q": "What is SEO copywriting?",
                "a": "SEO copywriting is writing pages that read naturally for people while matching what they search for, using clear headings, relevant terms and direct answers, without keyword stuffing."
          },
          {
                "q": "How much do copywriting services cost?",
                "a": "Costs depend on the number of pages and the research involved. We quote per project or per page."
          },
          {
                "q": "How many revisions are included?",
                "a": "Our projects normally include two rounds of revisions per piece, so you can shape the copy until it feels right."
          },
          {
                "q": "Can you write in our brand voice?",
                "a": "Yes. We start by understanding your tone of voice, or help you define one, and write consistently to it."
          },
          {
                "q": "What is copywriting?",
                "a": "Copywriting is writing words that persuade people to take an action, such as making an enquiry, buying or signing up. It includes website copy, landing pages, ads, emails and product descriptions. SEO copywriting also makes sure pages match what people search for, without sacrificing readability."
          },
          {
                "q": "What does your copywriting service include?",
                "a": "The core elements most clients receive are: messaging framework; website copy; sEO copywriting; ad copy; email copy; editing and proofreading. The exact scope is agreed after a short discovery call."
          }
    ],
  },

  // =========================================================================
  // CATEGORY 5: DATA, CRO & AUTOMATION (22 - 24)
  // =========================================================================
  {
    num: "22",
    id: "analytics-reporting",
    slug: "analytics-reporting",
    aliases: ["ga4-analytics", "analytics", "reporting"],
    title: "Analytics & Reporting",
    shortTitle: "Analytics & Reporting",
    category: "DATA, CRO & AUTOMATION",
    categoryId: "data-cro-automation",
    badge: "GA4, Tag Manager & Looker Studio",
    desc: "GA4, Tag Manager and Looker Studio",
    tagline: "Crystal-clear tracking architectures and executive dashboards that illuminate true customer acquisition ROI.",
    longDescription:
      "You cannot grow what you cannot accurately measure. Many businesses operate on broken tracking setups, double-counting pageviews, or missing critical form submission conversions. We build bulletproof tracking ecosystems using Google Analytics 4 (GA4), Google Tag Manager (GTM), and automated Looker Studio dashboards that translate complex telemetry into clear growth actions.",
    metaTitle: "GA4 Setup, Analytics and Looker Studio Reporting | MBSA",
    metaDescription: "GA4 setup and analytics services: tracking audits, Google Tag Manager events, Consent Mode and Looker Studio dashboards that show what really drives leads.",
    primaryKeyword: "GA4 setup",
    serviceType: "Analytics and reporting",
    schemaDescription: "Marketing analytics is the setup and analysis of data that shows how people find and use your website and which channels lead to enquiries or sales. Reporting turns that data into a regular, plain-English summary of what changed and what to do next.",
    iconName: "BarChart3",
    image: "/images/services/dark/analytics-reporting.png",
    lightImage: "/images/services/light/analytics-reporting.png",
    darkImage: "/images/services/dark/analytics-reporting.png",
    stats: {
      highlight: "100%",
      label: "Accurate Conversion Attribution",
      sublabel: "GA4 & Server-Side GTM verified",
    },
    deliverables: [
      "Full GA4 property configuration with custom event parameters and conversion marking",
      "Google Tag Manager (GTM) container architecture (Client-side & Server-side)",
      "E-commerce purchase, cart add, checkout, and refund tracking validation",
      "Custom Looker Studio executive dashboards summarizing traffic, leads, and CAC",
      "Cross-domain tracking and internal IP address traffic filtering",
      "Cookie consent banner integration (Cookiebot / OneTrust) with Google Consent Mode v2",
      "Monthly executive video walkthrough explaining metrics and strategic recommendations",
    ],
    process: [
      {
        step: "01",
        title: "Measurement Audit",
        description: "Testing current tags via GTM Preview mode to identify broken triggers, duplicate hits, and lost events.",
      },
      {
        step: "02",
        title: "GTM Event Configuration",
        description: "Deploying standard dataLayer pushes for all lead forms, button clicks, downloads, and sales.",
      },
      {
        step: "03",
        title: "Dashboard Construction",
        description: "Designing real-time Looker Studio reports that your entire leadership team can understand at a glance.",
      },
      {
        step: "04",
        title: "Insight Translation",
        description: "Providing actionable monthly commentary detailing exactly what the data recommends doing next.",
      },
    ],
    tools: ["Google Analytics 4 (GA4)", "Google Tag Manager", "Looker Studio", "BigQuery", "Supermetrics"],
    benefits: [
      "Eliminate tracking blind spots and know the exact source of every single customer inquiry",
      "Stop wasting hours stitching manual spreadsheets together every month",
      "Maintain 100% GDPR, ePrivacy, and Consent Mode v2 regulatory compliance",
    ],
    caseStudy: {
      client: "Apex Health Group",
      impact: "Consolidated 6 disparate booking platforms into a unified GA4 and Looker Studio dashboard, discovering a 28% under-reporting of paid ad conversion value.",
      metric: "Unified Tracking",
      link: "/projects",
    },
    faqs: [
          {
                "q": "Why don’t GA4 numbers match our ad platform or CRM?",
                "a": "Each tool counts differently: attribution models, time zones, consent choices and ad blockers all affect totals. We explain the differences and set up reporting so you compare like with like."
          },
          {
                "q": "What is a key event in GA4?",
                "a": "A key event (previously called a conversion) is an action you mark as important, such as a form submission, phone call click or purchase. Key events can be imported into Google Ads to guide bidding."
          },
          {
                "q": "Do we need Google Tag Manager?",
                "a": "For most businesses, yes. It makes tracking easier to manage, test and change without editing website code each time."
          },
          {
                "q": "What is Consent Mode v2?",
                "a": "Consent Mode v2 tells Google tags whether a visitor has agreed to cookies and adjusts tracking accordingly. It is important for advertisers reaching users in the UK and EU."
          },
          {
                "q": "Can you track phone calls and WhatsApp clicks?",
                "a": "We can track clicks on phone numbers and WhatsApp links as events. Tracking completed calls usually needs a call-tracking tool, which we can recommend."
          },
          {
                "q": "What is marketing analytics and reporting?",
                "a": "Marketing analytics is the setup and analysis of data that shows how people find and use your website and which channels lead to enquiries or sales. Reporting turns that data into a regular, plain-English summary of what changed and what to do next."
          },
          {
                "q": "What does your analytics and reporting service include?",
                "a": "The core elements most clients receive are: GA4 audit; measurement plan; Google Tag Manager setup; consent-aware tracking; Looker Studio dashboards; insight reports. The exact scope is agreed after a short discovery call."
          },
          {
                "q": "Which analytics tools do you use?",
                "a": "We work with GA4, Google Tag Manager, Search Console and Looker Studio, and deliver clean tracking, a measurement plan and a live dashboard."
          }
    ],
  },
  {
    num: "23",
    id: "conversion-rate-optimisation",
    slug: "conversion-rate-optimisation",
    aliases: ["conversion-rate-optimization", "cro"],
    title: "Conversion Rate Optimisation (CRO)",
    shortTitle: "Conversion Rate (CRO)",
    category: "DATA, CRO & AUTOMATION",
    categoryId: "data-cro-automation",
    badge: "A/B Testing, Heatmaps & Funnel Optimization",
    desc: "More enquiries and sales from the same traffic",
    tagline: "Data-backed heuristic analysis and split testing to convert a higher percentage of existing visitors into customers.",
    longDescription:
      "Doubling your conversion rate produces the exact same revenue impact as doubling your marketing budget—at a fraction of the cost. We conduct deep quantitative and qualitative CRO analysis: scroll heatmaps, session recordings, heuristic friction audits, and statistical A/B split tests to remove roadblocks and turn existing traffic into paying clients.",
    metaTitle: "Conversion Rate Optimisation & A/B Tests | MBSA Digital",
    metaDescription: "CRO services that win more customers from existing traffic: conversion audits, user research, landing page and checkout fixes, and A/B testing. Talk to us.",
    primaryKeyword: "conversion rate optimisation",
    serviceType: "Conversion rate optimisation",
    schemaDescription: "Conversion rate optimisation is the process of increasing the percentage of website visitors who take a desired action, such as making an enquiry or a purchase. It uses analytics, user research and controlled experiments to find and remove what stops people converting.",
    iconName: "Gauge",
    image: "/images/services/dark/conversion-rate-optimisation.png",
    lightImage: "/images/services/light/conversion-rate-optimisation.png",
    darkImage: "/images/services/dark/conversion-rate-optimisation.png",
    stats: {
      highlight: "+42%",
      label: "Inquiry Conversion Increase",
      sublabel: "Statistical 95% confidence A/B tests",
    },
    deliverables: [
      "Quantitative funnel drop-off analysis identifying the exact screens losing visitors",
      "Qualitative user research: Microsoft Clarity / Hotjar session recordings & heatmap review",
      "Heuristic friction evaluation based on proven psychological design principles",
      "Form optimization: reducing friction fields, inline error validation, and mobile usability",
      "Prioritized testing backlog ranked by PXL / ICE impact framework",
      "A/B split test execution with statistical significance calculations (95%+ confidence)",
      "Post-test validation reports with clear learnings and permanent code deployment",
    ],
    process: [
      {
        step: "01",
        title: "Friction Diagnostic",
        description: "Analyzing user session recordings, click heatmaps, and funnel drop-off points to find leaks.",
      },
      {
        step: "02",
        title: "Hypothesis Formulation",
        description: "Developing evidence-backed hypotheses on how to eliminate hesitation and simplify the user action.",
      },
      {
        step: "03",
        title: "Variant Execution",
        description: "Designing and coding clean A/B test variations using client-side testing software.",
      },
      {
        step: "04",
        title: "Statistical Validation",
        description: "Measuring conversion lift until 95% statistical confidence is attained before rolling out the winner permanently.",
      },
    ],
    tools: ["Microsoft Clarity", "Hotjar", "VWO", "Optimizely", "Google Optimize / AB Tasty", "Figma"],
    benefits: [
      "Multiply revenue and leads without spending an additional penny on advertising",
      "Lower your Customer Acquisition Cost (CAC) permanently across all marketing channels",
      "Eliminate subjective internal arguments with objective A/B test data",
    ],
    caseStudy: {
      client: "Novus Financial Software",
      impact: "Redesigned the multi-step demo booking form and added social proof badges, lifting free trial conversions by +42% with 98% statistical significance.",
      metric: "+42% Conversion",
      link: "/projects",
    },
    faqs: [
          {
                "q": "What is a good website conversion rate?",
                "a": "It varies widely by industry, traffic source and what counts as a conversion. Rather than chase a benchmark, we measure your own baseline and aim to improve it steadily."
          },
          {
                "q": "How long does an A/B test take?",
                "a": "Usually two to six weeks, depending on traffic and the size of the change being tested. Low-traffic sites may rely more on research-led fixes than formal tests."
          },
          {
                "q": "Do I need lots of traffic for CRO?",
                "a": "Formal A/B testing needs enough traffic for reliable results, but every site benefits from conversion research and best-practice fixes."
          },
          {
                "q": "Will CRO hurt our SEO?",
                "a": "No, when done properly. We follow Google’s guidance on testing, avoid cloaking and keep tests temporary."
          },
          {
                "q": "What tools do you use for CRO?",
                "a": "Typically GA4, Microsoft Clarity or Hotjar for behaviour analysis, and VWO or Optimizely for testing, depending on your platform and budget."
          },
          {
                "q": "What is conversion rate optimisation?",
                "a": "Conversion rate optimisation is the process of increasing the percentage of website visitors who take a desired action, such as making an enquiry or a purchase. It uses analytics, user research and controlled experiments to find and remove what stops people converting."
          },
          {
                "q": "What does your CRO service include?",
                "a": "The core elements most clients receive are: conversion audit; user research; hypothesis backlog; A/B and multivariate testing; landing page optimisation; form and checkout optimisation. The exact scope is agreed after a short discovery call."
          },
          {
                "q": "How do you measure CRO success?",
                "a": "We measure conversion rate, revenue per visitor and cost per lead, so improvements are tied to enquiries and sales rather than opinions."
          }
    ],
  },
  {
    num: "24",
    id: "marketing-automation-ai",
    slug: "marketing-automation-ai",
    aliases: ["marketing-automation", "ai-workflows", "automation"],
    title: "Marketing Automation & AI",
    shortTitle: "Marketing Automation & AI",
    category: "DATA, CRO & AUTOMATION",
    categoryId: "data-cro-automation",
    badge: "CRM Workflows, AI Tools & Lead Nurturing",
    desc: "CRM workflows, AI tools and lead nurturing",
    tagline: "Intelligent automation workflows and AI tooling that streamline sales processes and nurture prospects 24/7.",
    longDescription:
      "Manual data entry, delayed lead follow-ups, and repetitive tasks drain valuable team time. We design intelligent automation pipelines connecting your website forms, CRM (HubSpot, Salesforce, Pipedrive), and internal messaging. By leveraging modern AI agents and workflow automation (Make, Zapier), we ensure every lead is qualified and routed in seconds.",
    metaTitle: "Marketing Automation & AI Services for CRM Leads | MBSA",
    metaDescription: "Marketing automation services that stop leads slipping away: CRM set-up, workflows, lead scoring, email and WhatsApp nurturing, and practical AI for teams.",
    primaryKeyword: "marketing automation services",
    serviceType: "Marketing automation",
    schemaDescription: "Marketing automation uses software to run repetitive marketing and sales tasks automatically, such as capturing leads into a CRM, sending follow-up emails or WhatsApp messages, scoring leads and alerting your team. AI can add smarter steps, like summarising enquiries or drafting first replies, under human control.",
    iconName: "Zap",
    image: "/images/services/dark/marketing-automation-ai.png",
    lightImage: "/images/services/light/marketing-automation-ai.png",
    darkImage: "/images/services/dark/marketing-automation-ai.png",
    stats: {
      highlight: "< 2 min",
      label: "Lead Response Time",
      sublabel: "Automated routing & notification",
    },
    deliverables: [
      "CRM architecture & pipeline stage configuration (HubSpot, Salesforce, Pipedrive)",
      "Instant lead routing, SDR notification, and calendar booking integration",
      "Multi-channel automated follow-up sequences (Email, SMS, WhatsApp webhooks)",
      "Make.com / Zapier webhook integrations connecting disparate marketing tools",
      "AI-powered lead qualification and intent categorization using OpenAI / Anthropic APIs",
      "Automated client onboarding workflows (agreements, intake questionnaires, folder creation)",
      "Data synchronization between advertising platforms and CRM deal stages for closed-loop attribution",
    ],
    process: [
      {
        step: "01",
        title: "Workflow Bottleneck Audit",
        description: "Mapping existing manual handoffs, delayed follow-up points, and data entry time sinks.",
      },
      {
        step: "02",
        title: "Integration Blueprint",
        description: "Designing resilient webhook architectures with error handling and deduplication logic.",
      },
      {
        step: "03",
        title: "Automation Construction",
        description: "Building automated workflows in Make.com/Zapier and training custom AI agents to parse intake data.",
      },
      {
        step: "04",
        title: "Testing & Rollout",
        description: "Running end-to-end sandbox tests, verifying deliverability, and training your sales team.",
      },
    ],
    tools: ["Make.com", "Zapier", "HubSpot", "OpenAI API", "Pipedrive", "Airtable"],
    benefits: [
      "Contact new inbound leads within 2 minutes, increasing qualification rates by 300%",
      "Save 15+ hours per week per employee on repetitive manual copy-pasting",
      "Close the loop between marketing spend and actual revenue generated in your CRM",
    ],
    caseStudy: {
      client: "Estate Capital Group",
      impact: "Connected website lead forms to HubSpot and WhatsApp via Make.com with AI qualification, reducing lead response time from 4 hours to 90 seconds.",
      metric: "90s Response",
      link: "/projects",
    },
    faqs: [
          {
                "q": "What is the best marketing automation software for small businesses?",
                "a": "HubSpot, Zoho and Brevo are popular choices. The best one depends on your budget, existing tools and how sales and marketing work together. We recommend after mapping your process."
          },
          {
                "q": "How is AI used in marketing automation?",
                "a": "AI can summarise enquiries, suggest replies, personalise messages and help create content. We keep people in control of anything customer-facing and avoid using AI where accuracy is critical without review."
          },
          {
                "q": "Is marketing automation the same as spam?",
                "a": "No. Good automation sends relevant, permission-based messages at the right time. We follow data protection rules such as UK GDPR and India’s DPDP Act."
          },
          {
                "q": "Can you connect our website forms to our CRM?",
                "a": "Yes. We connect forms, ads, WhatsApp and calendars to your CRM so every lead is captured with its source."
          },
          {
                "q": "How long does automation setup take?",
                "a": "A focused setup with core workflows typically takes two to six weeks, depending on your tools and data quality."
          },
          {
                "q": "What is marketing automation?",
                "a": "Marketing automation uses software to run repetitive marketing and sales tasks automatically, such as capturing leads into a CRM, sending follow-up emails or WhatsApp messages, scoring leads and alerting your team. AI can add smarter steps, like summarising enquiries or drafting first replies, under human control."
          },
          {
                "q": "What does your marketing automation service include?",
                "a": "The core elements most clients receive are: CRM setup and clean-up; automated workflows; lead scoring; aI-assisted processes; integrations; pipeline reporting. The exact scope is agreed after a short discovery call."
          },
          {
                "q": "Which CRM and automation platforms do you work with?",
                "a": "We work with HubSpot, Zoho, Brevo, Zapier, Make and other platforms, for growing businesses with more leads than time."
          }
    ],
  },

  // =========================================================================
  // CATEGORY 6: GROWTH SOLUTIONS (25)
  // =========================================================================
  {
    num: "25",
    id: "lead-generation",
    slug: "lead-generation",
    aliases: ["growth-solutions", "lead-gen"],
    title: "Lead Generation",
    shortTitle: "Lead Generation",
    category: "GROWTH SOLUTIONS",
    categoryId: "growth-solutions",
    badge: "Full-Funnel Lead Acquisition Programs",
    desc: "Joined-up programmes that fill your pipeline",
    tagline: "Integrated, multi-channel inbound and outbound acquisition funnels engineered to keep your sales calendar full.",
    longDescription:
      "Isolated marketing tactics rarely produce scalable growth. Real revenue scale requires an integrated system where SEO captures high-intent organic demand, targeted paid ads test offers, conversion rate optimization maximizes inquiry rates, and automated nurturing closes deals. Our Lead Generation program unites all disciplines into one cohesive, revenue-focused engine.",
    metaTitle: "Lead Generation Services: SEO, Ads & CRO | MBSA Digital",
    metaDescription: "Lead generation services that combine SEO, paid ads, landing pages, CRO and prompt follow-up in one programme measured by qualified leads, not just clicks.",
    primaryKeyword: "lead generation services",
    serviceType: "Lead generation",
    schemaDescription: "Lead generation is the process of attracting potential customers and capturing their details or enquiries so your team can follow up. In digital marketing it combines channels such as SEO, paid ads and social media with landing pages, lead magnets and automated follow-up, measured by the quality and cost of leads.",
    iconName: "Target",
    image: "/images/services/dark/lead-generation.png",
    lightImage: "/images/services/light/lead-generation.png",
    darkImage: "/images/services/dark/lead-generation.png",
    stats: {
      highlight: "+180%",
      label: "Sales Pipeline Velocity",
      sublabel: "Full-funnel program acceleration",
    },
    deliverables: [
      "Full-funnel growth architecture audit (Traffic, Landing Page, CRM, Nurture)",
      "High-converting dedicated landing page creation with custom conversion triggers",
      "Integrated multi-channel acquisition strategy (Google Search, Meta Ads, Technical SEO)",
      "Lead magnet development (Industry reports, calculators, diagnostic checklists)",
      "Automated lead scoring, qualification, and calendar booking integration",
      "Closed-loop revenue attribution connecting every marketing dollar to closed deals",
      "Bi-weekly strategic growth calls and dedicated pipeline acceleration dashboard",
    ],
    process: [
      {
        step: "01",
        title: "Funnel Blueprinting",
        description: "Mapping your customer journey from initial discovery through to sales call and closed deal.",
      },
      {
        step: "02",
        title: "Asset & Funnel Assembly",
        description: "Designing high-converting landing pages, compelling offers, and tracking pixels.",
      },
      {
        step: "03",
        title: "Multi-Channel Launch",
        description: "Synchronizing paid search, paid social, and SEO to capture prospects across all touchpoints.",
      },
      {
        step: "04",
        title: "Iterative Scaling",
        description: "Pruning low-converting channels and doubling down on the highest ROI customer sources.",
      },
    ],
    tools: ["Google Ads", "Meta Ads", "HubSpot", "Google Search Console", "Make.com", "Looker Studio"],
    benefits: [
      "Replace sporadic unpredictable referrals with a consistent, repeatable pipeline of leads",
      "Align marketing spend directly with sales revenue rather than vanity metrics",
      "Work with one unified partner covering design, tech, SEO, ads, and automation",
    ],
    caseStudy: {
      client: "Apex Commercial Property",
      impact: "Deployed an integrated lead generation program across Google Search, dedicated landing pages, and automated WhatsApp booking, generating 140+ qualified lease inquiries in 6 months.",
      metric: "140+ Inquiries",
      link: "/projects",
    },
    faqs: [
          {
                "q": "What is the best lead generation channel?",
                "a": "It depends on your audience. Search (SEO and Google Ads) captures people actively looking, LinkedIn suits B2B decision-makers, and Meta works well for consumer services. Most businesses benefit from a mix."
          },
          {
                "q": "How much does a lead cost?",
                "a": "Cost per lead varies widely by industry, location and channel. We establish your baseline and work to reduce it while keeping quality high."
          },
          {
                "q": "Do you guarantee a number of leads?",
                "a": "We don’t guarantee lead numbers because results depend on market, offer and budget. We do commit to clear targets, transparent reporting and continuous improvement."
          },
          {
                "q": "Do you sell or share lead lists?",
                "a": "No. All leads are generated for your business from your own campaigns, and the data belongs to you."
          },
          {
                "q": "How quickly will we see leads?",
                "a": "Paid campaigns can generate leads within days of launch. SEO and content build over months. A combined programme gives you both quick wins and long-term growth."
          },
          {
                "q": "What is lead generation?",
                "a": "Lead generation is the process of attracting potential customers and capturing their details or enquiries so your team can follow up. In digital marketing it combines channels such as SEO, paid ads and social media with landing pages, lead magnets and automated follow-up, measured by the quality and cost of leads."
          },
          {
                "q": "What does your lead generation service include?",
                "a": "The core elements most clients receive are: channel strategy; landing pages; offers and lead magnets; CRO; follow-up automation; lead reporting. The exact scope is agreed after a short discovery call."
          },
          {
                "q": "How do you measure lead generation success?",
                "a": "We measure qualified leads, cost per lead and pipeline value, so the programme is judged on enquiries that turn into business, not clicks."
          }
    ],
  },
];
