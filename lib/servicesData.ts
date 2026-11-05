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
        q: "How soon do SEO fixes reflect in Google rankings?",
        a: "Technical and indexing fixes are often recognized by Google within 7 to 14 days following Search Console URL inspection requests. Full keyword ranking lifts typically consolidate over 6 to 12 weeks.",
      },
      {
        q: "Do you fix the code directly or just provide a PDF recommendation?",
        a: "We implement the changes directly in your CMS, Next.js codebase, or WordPress theme, ensuring error-free deployment and automated verification.",
      },
      {
        q: "How do you handle site migrations without losing rankings?",
        a: "We implement rigorous 1-to-1 301 redirect mapping, preserve canonical hierarchies, verify staging headers, and monitor Googlebot crawl logs in real-time.",
      },
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
        q: "What makes this different from an automated online SEO checker?",
        a: "Automated tools run generic scripts that miss nuanced JavaScript rendering errors, canonical loops, and intent mismatches. Our audit is manually conducted by senior technical SEOs using enterprise crawlers.",
      },
      {
        q: "What format will the audit be delivered in?",
        a: "You receive an interactive executive dashboard, a detailed technical spreadsheet with exact URLs, and ready-to-assign Jira or GitHub tickets for your developers.",
      },
      {
        q: "Can you implement the audit fixes for us?",
        a: "Yes. We offer turnkey execution where our engineering team directly implements all technical, schema, and on-page fixes.",
      },
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
        q: "How does Local SEO differ from regular organic SEO?",
        a: "Local SEO focuses on physical proximity, Google Business Profile optimization, local citations, and geo-targeted landing pages to win map pack listings, whereas organic SEO targets global or national web search results.",
      },
      {
        q: "Can you manage local SEO for businesses with multiple branches?",
        a: "Yes. We create distinct location page hierarchies, manage multi-location GBP bulk verification, and prevent internal cannibalization between nearby branches.",
      },
      {
        q: "How important are Google reviews for map rankings?",
        a: "Review quantity, velocity, keyword mentions in reviews, and owner response rates are among the top 3 ranking factors for Google's local algorithm.",
      },
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
        q: "How do you handle out-of-stock products for SEO?",
        a: "We avoid returning 404s for temporary out-of-stock items. We keep the page live with email restock alerts, recommend related in-stock items, and update schema to 'OutOfStock' to preserve accumulated link equity.",
      },
      {
        q: "Why is faceted navigation dangerous for e-commerce SEO?",
        a: "Filters (color, size, price) can generate millions of duplicate URLs, consuming Google's crawl budget and diluting ranking power. We configure proper canonicalization and robots rules to prevent index bloat.",
      },
      {
        q: "Can you optimize Shopify stores that use third-party apps?",
        a: "Yes. We audit third-party app scripts, remove unused render-blocking code, and inject clean native schemas directly into theme files.",
      },
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
        q: "Should I use ccTLDs (.co.uk, .de) or subdirectories (/uk/, /de/)?",
        a: "Subdirectories (/uk/, /de/) allow all international versions to inherit the domain authority of your primary root domain, making it far faster and more cost-effective to rank compared to maintaining separate ccTLDs.",
      },
      {
        q: "What is the most common hreflang mistake?",
        a: "Missing reciprocal return tags (e.g., page A points to page B as German, but page B does not point back to page A as English). We automate validation to ensure 100% bi-directional compliance.",
      },
      {
        q: "Can I just use Google Translate for multilingual SEO?",
        a: "Machine-translated content without human review often fails Google's helpful content criteria and misses colloquial search keywords. We recommend human-reviewed localization for primary pages.",
      },
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
        q: "Do you buy links or use private blog networks (PBNs)?",
        a: "Never. We strictly execute manual digital PR, journalist pitching, and content-driven editorial outreach. Every link is earned on real, editorial websites with genuine organic traffic.",
      },
      {
        q: "How many links do you build per month?",
        a: "We prioritize quality over vanity metrics. Typically, campaigns secure 6 to 15 high-DR (DR 50-90+), highly relevant editorial placements each month.",
      },
      {
        q: "Can backlinks help pages that are currently stuck on page 2?",
        a: "Yes. When technical SEO and content quality are solid, targeted high-authority contextual links are often the exact catalyst needed to push page 2 URLs into the top 3.",
      },
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
        q: "What is the difference between SEO and GEO (Generative Engine Optimization)?",
        a: "SEO optimizes for keyword algorithms that match queries to web URLs. GEO optimizes for neural networks and LLMs that evaluate semantic concepts, entity relationships, factual authority, and concise answers.",
      },
      {
        q: "Will blocking AI bots harm my SEO rankings?",
        a: "Blocking commercial AI scrapers won't immediately hurt traditional Google rankings, but it stops your brand from being cited in ChatGPT, Perplexity, and Apple Intelligence. We create tailored robots rules balancing content protection and visibility.",
      },
      {
        q: "How do AI engines decide which websites to cite?",
        a: "LLMs prioritize sources that offer high information gain (unique statistics, expert quotes), clear structural formatting (tables, bullet points), and strong entity verification across Wikidata and top-tier publications.",
      },
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
        q: "What monthly ad spend do you typically manage?",
        a: "We work with businesses spending anywhere from £1,500/month to £50,000+/month across Google Ads and Microsoft Advertising.",
      },
      {
        q: "Do you own our Google Ads account?",
        a: "No. You retain 100% administrative ownership of your Google Ads and analytics accounts. We access them via our Google Partner MCC.",
      },
      {
        q: "What is Performance Max and should I be using it?",
        a: "Performance Max runs across Search, YouTube, Display, Discover, and Maps. It is powerful when fed clean first-party conversion data and strict negative keywords, but can burn budget if unmonitored.",
      },
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
        q: "Who provides the creative assets (photos, videos)?",
        a: "We can work with your existing brand assets or script, design, and produce UGC-style video ads and custom graphics tailored for direct-response performance.",
      },
      {
        q: "How does the Meta Conversions API (CAPI) help after iOS 14 updates?",
        a: "Browser pixels lose up to 30% of conversion data due to ad blockers and privacy limits. CAPI sends conversion data directly from your server to Meta, restoring accurate attribution and algorithm learning.",
      },
      {
        q: "How often should ad creative be refreshed?",
        a: "Depending on your ad spend, creative fatigue typically sets in after 2 to 4 weeks. We introduce new hooks and visual variations continuously to maintain high CTRs.",
      },
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
        q: "Why are LinkedIn ad clicks more expensive than Facebook or Google?",
        a: "LinkedIn allows you to pinpoint the exact VP of Engineering or Chief Marketing Officer at a Fortune 500 company. While cost-per-click is higher, lead quality and deal sizes are substantially larger.",
      },
      {
        q: "What is the best ad format for B2B lead generation?",
        a: "Native LinkedIn Lead Gen Forms combined with Document Ads (PDF carousels) usually achieve the lowest cost per qualified lead because users don't have to leave the LinkedIn app.",
      },
      {
        q: "Can you target specific named accounts (ABM)?",
        a: "Yes. You can upload a list of target companies (e.g. 500 enterprise accounts) and target only employees matching your desired seniority levels within those specific companies.",
      },
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
        q: "What matters most for ranking videos on YouTube?",
        a: "Click-Through Rate (CTR) from the thumbnail/title and Average Percentage Viewed (Audience Retention). We design packaging that wins clicks and advise on script structure to keep viewers watching.",
      },
      {
        q: "Are YouTube Shorts useful for B2B brands?",
        a: "Yes. Repurposing key insights from longer webinars or podcasts into 30-60 second Shorts helps build top-of-funnel brand recall rapidly on mobile devices.",
      },
      {
        q: "How do you track sales or leads from YouTube videos?",
        a: "We use tracked UTM parameters in video descriptions, pinned comments, and YouTube interactive end-screen cards, combined with GA4 attribution.",
      },
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
        q: "What is a topic cluster?",
        a: "A topic cluster consists of a central 'pillar' page covering a broad topic comprehensively, linked bi-directionally to multiple detailed sub-pages covering specific questions. This architecture signals deep topical authority to Google.",
      },
      {
        q: "Do you write the articles or just provide the keywords?",
        a: "We offer both: full end-to-end SEO writing with subject-matter research, or detailed editorial briefs that your internal team can write.",
      },
      {
        q: "How do you prevent keyword cannibalization?",
        a: "We audit every target keyword against your existing indexed URLs to ensure each unique search intent maps to one single canonical URL.",
      },
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
        q: "Which social media platforms should my business focus on?",
        a: "It depends on your audience: B2B companies should prioritize LinkedIn and YouTube, while consumer lifestyle, retail, and hospitality brands thrive on Instagram and TikTok.",
      },
      {
        q: "Do I get to approve posts before they go live?",
        a: "Yes. All copy, graphics, and video drafts are uploaded to a collaborative preview calendar for your feedback and signoff before scheduling.",
      },
      {
        q: "Can organic social media replace paid advertising?",
        a: "Organic social builds brand credibility, trust, and retention, while paid ads offer targeted scale. The two work best when integrated together.",
      },
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
        q: "Why choose micro-influencers over celebrity influencers?",
        a: "Micro-influencers typically enjoy 3x to 5x higher engagement rates, charge significantly lower fees, and possess authentic rapport with their followers, resulting in superior conversion rates.",
      },
      {
        q: "How do you detect fake followers or bot engagement?",
        a: "We use specialized auditing software (Modash, HypeAuditor) to analyze follower growth anomalies, comment quality, audience location distributions, and engagement ratios before outreach.",
      },
      {
        q: "What is creator whitelisting?",
        a: "Whitelisting allows your brand to run paid ads through the influencer's official social profile. It combines their personal credibility with your targeted ad spend.",
      },
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
        q: "Which email marketing platform do you recommend?",
        a: "For e-commerce (Shopify/WooCommerce), Klaviyo is the gold standard for data integration. For B2B lead nurturing, ActiveCampaign or HubSpot provide superior CRM automation.",
      },
      {
        q: "How do you ensure emails land in the primary inbox rather than Spam or Promotions?",
        a: "We authenticate SPF, DKIM, and DMARC records, maintain clean list hygiene by pruning unengaged contacts, and balance image-to-text ratios to satisfy email client filters.",
      },
      {
        q: "How many promotional emails should we send per week?",
        a: "Most brands find optimal engagement with 1 to 2 targeted weekly campaigns, combined with behavioral automated flows that trigger only when a customer takes a specific action.",
      },
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
        q: "What is the difference between WhatsApp Business app and the WhatsApp API?",
        a: "The standard mobile app is limited to one device and small broadcast lists. The WhatsApp Business API allows multi-user access, unlimited broadcasts, automated CRM webhooks, and chatbot integrations.",
      },
      {
        q: "Is there a risk of my WhatsApp number being blocked?",
        a: "We strictly adhere to Meta's opt-in policies and message quality tier guidelines, using only pre-approved templates and opt-in lists to ensure 100% account safety.",
      },
      {
        q: "Can customers reply and talk to a real person?",
        a: "Yes. Inquiries can be answered automatically by our conversational bot, and seamlessly escalated to human agents on a unified dashboard when complex support is required.",
      },
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
        q: "Can you remove a fake or defamatory Google review?",
        a: "Yes. If a review violates Google's prohibited and restricted content policies (conflict of interest, harassment, spam, fake engagement), we submit formal evidence-based removal appeals.",
      },
      {
        q: "How do you push negative search results off Page 1?",
        a: "We create and optimize authoritative web properties (Crunchbase, LinkedIn articles, press releases, medium interviews, YouTube videos) that naturally outrank negative threads over time.",
      },
      {
        q: "How long does reputation cleanup typically take?",
        a: "Review acceleration and rating improvements show results within 2 to 4 weeks. Pushing down third-party negative URLs on Google typically takes 3 to 6 months of systematic SEO and PR.",
      },
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
        q: "Why do you avoid bloated page builders like Elementor or Divi?",
        a: "Heavy builders inject hundreds of unneeded CSS/JS files that tank Core Web Vitals and slow down your site. We use clean custom Gutenberg blocks or Next.js to ensure lightning-fast speeds.",
      },
      {
        q: "Will our team be able to edit text and add blog posts easily?",
        a: "Yes. We create custom, user-friendly fields and provide full video training so your team can easily update content without touching code.",
      },
      {
        q: "How do you ensure our existing SEO rankings aren't lost during a redesign?",
        a: "We maintain identical URL structures where possible, map 100% of changed URLs with 301 redirects, and preserve existing metadata and schema markup.",
      },
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
        q: "Should I choose Shopify or WooCommerce for my online store?",
        a: "Shopify is ideal for ease of maintenance, hosted security, and global payment scale. WooCommerce offers unlimited open-source customization and complete ownership for specialized requirements.",
      },
      {
        q: "Can you migrate all our existing products, customer accounts, and order history?",
        a: "Yes. We execute secure database migrations transferring all SKUs, product variations, customer records, and past orders without data loss.",
      },
      {
        q: "How do you handle subscriptions or recurring orders?",
        a: "We integrate leading subscription engines like ReCharge or native Shopify Subscriptions, enabling automated repeat billing and customer portal management.",
      },
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
        q: "What file formats will I receive for my logo?",
        a: "You receive industry-standard vector formats (AI, EPS, SVG) that can scale infinitely without quality loss, as well as high-resolution transparent PNGs and JPEGs for web and digital use.",
      },
      {
        q: "How many logo concepts do you present?",
        a: "We present 3 to 4 distinct creative concepts, each with real-world mockups. We then iterate and refine your chosen concept until it is 100% perfect.",
      },
      {
        q: "Do I own full copyright to the final designs?",
        a: "Yes. Upon project completion and final payment, 100% intellectual property ownership and commercial copyright transfer directly to you.",
      },
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
        q: "What is voice-of-customer (VoC) research?",
        a: "VoC research involves studying how real customers describe their problems and what made them choose your solution. Using their actual vocabulary in your copy makes your messaging resonate instantly.",
      },
      {
        q: "Do you write copy with SEO in mind?",
        a: "Yes. We seamlessly blend primary and semantic search terms into natural, compelling headings and body paragraphs without ever compromising conversion psychology.",
      },
      {
        q: "Can you review and improve our existing website copy?",
        a: "Yes. We offer copy auditing and rewrites where we analyze your existing pages, remove corporate fluff, and sharpen your value propositions.",
      },
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
        q: "What is Google Consent Mode v2 and do I need it?",
        a: "Consent Mode v2 is mandatory for any business advertising on Google in Europe or the UK. It adjusts tag behavior based on user cookie consent, preserving conversion modeling while respecting privacy laws.",
      },
      {
        q: "Why is GA4 showing lower session counts than Universal Analytics used to?",
        a: "GA4 uses an event-based data model rather than session-based tracking, and deduplicates multiple hits more accurately. We configure GA4 to ensure you have a clean, comparable baseline.",
      },
      {
        q: "Can Looker Studio dashboards connect to non-Google ad platforms like Facebook and LinkedIn?",
        a: "Yes. Using verified connectors, we pull data from Meta Ads, LinkedIn, Shopify, and Google into one single unified executive report.",
      },
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
        q: "How much traffic do I need to run A/B split testing?",
        a: "Reliable A/B testing typically requires at least 15,000 to 25,000 monthly unique visitors. For lower-traffic sites, we execute qualitative heuristic optimization and user-testing sprints with massive impact.",
      },
      {
        q: "What kinds of changes do you test?",
        a: "We test value proposition headlines, call-to-action button placements, form field reduction, checkout layouts, trust badges, pricing page displays, and mobile navigation ergonomics.",
      },
      {
        q: "Will A/B testing hurt my SEO rankings?",
        a: "No. Testing tools use JavaScript DOM manipulation and standard canonical headers so search engines see no cloaking or duplicate content violations.",
      },
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
        q: "Why is fast lead response time so critical?",
        a: "Studies consistently show that contacting an inbound lead within 5 minutes makes you 21x more likely to qualify them compared to waiting 30 minutes. Automation ensures this happens 24/7.",
      },
      {
        q: "Do we need enterprise software like Salesforce to benefit from automation?",
        a: "No. Small businesses can build world-class automation pipelines using affordable tools like Make.com, HubSpot Free/Starter, and Airtable.",
      },
      {
        q: "Can AI help categorize and summarize incoming inquiries?",
        a: "Yes. We configure AI models to read incoming contact submissions, extract key requirements, score urgency, and draft personalized initial responses for your team to approve.",
      },
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
        q: "What makes this different from hiring separate SEO or ad agencies?",
        a: "Separate agencies often point fingers at each other when leads don't convert. Our full-funnel approach takes ownership of the entire chain: the traffic, the landing page speed, the copy, and the CRM automation.",
      },
      {
        q: "How quickly can a lead generation program go live?",
        a: "Initial landing page creation, tracking setup, and paid search campaigns can typically launch within 10 to 14 days, generating leads immediately while long-term organic SEO compounds.",
      },
      {
        q: "How do you ensure lead quality rather than spam submissions?",
        a: "We implement multi-step qualification questions, reCAPTCHA v3 protection, and first-party conversion feedback loops that train ad algorithms on qualified prospects only.",
      },
    ],
  },
];
