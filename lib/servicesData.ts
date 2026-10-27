export interface ServiceDetail {
  num: string;
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  desc: string;
  tagline: string;
  longDescription: string;
  iconName:
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
    | "Gauge";
  image: string;
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

export const SERVICES_DATA: ServiceDetail[] = [
  // ===================== SET 1 (01 - 06) =====================
  {
    num: "01",
    id: "technical-seo",
    slug: "technical-seo",
    title: "Technical and One Page SEO",
    shortTitle: "Technical & On-Page SEO",
    badge: "Crawling, CWV & High-Rank Infrastructure",
    desc: "Audit, Core Web Vitals, indexing fixes, structured data, titles and meta description.",
    tagline: "Build a rock-solid algorithmic foundation that Google loves crawling, indexing, and ranking at the top.",
    longDescription:
      "Search engines cannot rank what they cannot easily crawl and understand. We resolve low-level technical bottlenecks—render-blocking assets, JavaScript hydration lag, broken canonical hierarchies, duplicate schemas, and crawl budget waste. Every page is systematically optimized with semantic HTML, JSON-LD rich snippets, and precise keyword targeting to maximize organic impressions.",
    iconName: "Search",
    image: "/images/gsc-console-live.jpg",
    stats: {
      highlight: "+140%",
      label: "Organic Traffic Growth",
      sublabel: "Average 6-month client trajectory",
    },
    deliverables: [
      "In-depth 120-point crawl & architecture audit (Screaming Frog / Semrush)",
      "Core Web Vitals tuning: LCP under 1.2s, INP < 150ms, zero CLS shift",
      "Dynamic JSON-LD Schema markup (LocalBusiness, MedicalWebPage, Product, FAQ)",
      "Robots.txt, XML sitemap generation & Google Search Console indexing fix",
      "Page title, H1-H3 hierarchy & meta descriptions mapped to high-intent terms",
      "Canonicalization, pagination & internal link equity flow restructuring",
      "International hreflang & mobile-first rendering verification",
    ],
    process: [
      {
        step: "01",
        title: "Deep Health Audit",
        description: "Full crawl simulating Googlebot desktop & mobile to discover 404s, redirect loops, and indexing blocks.",
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
    tools: ["Google Search Console", "Screaming Frog", "Semrush", "Ahrefs", "PageSpeed Insights", "Schema.org", "Lighthouse"],
    benefits: [
      "Eliminate crawl errors preventing your site from ranking",
      "Boost organic visibility for high-intent search queries",
      "Improve mobile page load speed and user engagement",
      "Qualify for Google rich snippets, FAQs, and knowledge graphs",
    ],
    caseStudy: {
      client: "Harris Pharmacy UK",
      impact: "Zero indexing errors, +185% local organic impressions, and sub-1.2s LCP load time across 25+ location pages.",
      metric: "+185% Organic Reach",
      link: "/projects#harris-pharmacy",
    },
    faqs: [
      {
        q: "How fast do technical SEO changes reflect in Google?",
        a: "Critical fixes like robots.txt and sitemap resubmissions typically register within 48–72 hours. Broader algorithmic re-evaluations and ranking gains usually mature over 4 to 8 weeks as Google recrawls.",
      },
      {
        q: "Do you optimize Next.js, WordPress, or Shopify sites?",
        a: "Yes! We specialize in React/Next.js SSR/SSG architectures, Shopify Plus liquid templates, and custom WordPress setups.",
      },
      {
        q: "Will technical SEO modifications disrupt our live website or design?",
        a: "Never. All code-level tweaks, schema injections, and asset re-orderings are thoroughly tested in local and staging environments prior to production rollout with zero visual downtime.",
      },
      {
        q: "What tools do you use to diagnose crawl budget and site health?",
        a: "We rely on enterprise crawlers and diagnostics including Screaming Frog SEO Spider, Google Search Console API, Sitebulb, Semrush, and Chrome Lighthouse.",
      },
    ],
  },
  {
    num: "02",
    id: "aeo-geo",
    slug: "aeo-geo",
    title: "AEO and GEO (AI Search Optimization)",
    shortTitle: "AEO & GEO (AI Search)",
    badge: "Answer Engine & Generative AI Citations",
    desc: "Content shaped so answer engines and AI assistants can Understand it and cite it.",
    tagline: "Position your brand as the canonical, trusted citation source across ChatGPT, Perplexity, Google Gemini, and AI Overviews.",
    longDescription:
      "Search is rapidly shifting from 10 blue links to AI synthesis. Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) structure your domain's expertise so large language models can extract, verify, and cite your answers directly. We build semantic knowledge graphs, clear question-answer clusters, and authoritative brand entity signals that earn top placement in AI Overviews and conversational answer engines.",
    iconName: "BarChart3",
    image: "/images/ga4-analytics-live.jpg",
    stats: {
      highlight: "100%",
      label: "Attribution & Citation Accuracy",
      sublabel: "Verified across AI Overviews & Search",
    },
    deliverables: [
      "Entity and Knowledge Graph optimization for brand authority",
      "FAQ & conversational prompt clustering tailored for Perplexity & ChatGPT",
      "Google AI Overview citation targeting and position-zero capture",
      "Structured fact-based tables, definitions, and consensus content blocks",
      "Brand mention syndication and authoritative co-occurrence mapping",
      "Server-side tracking protocols and GA4 AI referral channel measurement",
      "Executive Looker Studio suites for monitoring AI search footprint",
    ],
    process: [
      {
        step: "01",
        title: "Entity & Semantic Audit",
        description: "Mapping your current brand presence across LLM training sets, Wikidata, and Google Knowledge Graph.",
      },
      {
        step: "02",
        title: "Answer Architecture",
        description: "Restructuring key topics into direct, factual answer blocks with verified citation sources.",
      },
      {
        step: "03",
        title: "Schema & Knowledge Linking",
        description: "Deploying high-level JSON-LD schemas linking your founders, certifications, and service entities.",
      },
      {
        step: "04",
        title: "AI Citation Tracking",
        description: "Continuously testing queries across Perplexity, ChatGPT, and Google Gemini to monitor citation share.",
      },
    ],
    tools: ["ChatGPT Plus", "Perplexity Pro", "Google Gemini", "Google Search Console", "Semrush", "Diffbot", "Wikidata"],
    benefits: [
      "Stay ahead of traditional organic traffic drop-offs caused by AI Overviews",
      "Gain direct citations in ChatGPT and conversational research tools",
      "Establish unambiguous brand authority in your market niche",
      "Attract highly qualified, ready-to-buy users asking detailed questions",
    ],
    caseStudy: {
      client: "Maia Health & drTung's",
      impact: "Captured featured citations in Google AI Overviews for high-intent health and oral care queries, lifting organic referral value by +68%.",
      metric: "+68% AI Referral Value",
      link: "/projects#maia-health",
    },
    faqs: [
      {
        q: "What is the difference between SEO and AEO/GEO?",
        a: "SEO optimizes for search engine rankings on SERPs. AEO and GEO optimize for conversational AI systems (ChatGPT, Perplexity, Gemini, Google SGE) so your content is synthesized and cited as the answer.",
      },
      {
        q: "How do AI engines like ChatGPT and Perplexity decide what to cite?",
        a: "Large language models evaluate topical consensus, unambiguous factual schema markup, verified entity relations (Wikidata/Knowledge Graph), and clear Q&A answer formats that directly solve user search intent.",
      },
      {
        q: "Will optimizing for AI Overviews hurt our traditional Google rankings?",
        a: "Quite the opposite. The clear semantic hierarchies and entity validation required for AI citation also represent best practices for standard Google ranking algorithms, boosting both channels.",
      },
    ],
  },
  {
    num: "03",
    id: "content-strategy",
    slug: "content-strategy",
    title: "Content and Keyword Strategy",
    shortTitle: "Content & Keyword Strategy",
    badge: "Semantic Content & Topic Clusters",
    desc: "Research around real questions people type, written in a natural human voice.",
    tagline: "Move beyond vanity keywords. Attract high-intent buyers with semantic topic clusters that convert.",
    longDescription:
      "Most content strategies fail because they chase high-volume, low-intent keywords with generic articles. We conduct deep buyer-journey keyword research to uncover the exact commercial and technical questions your prospects ask before purchasing. Every piece of content is organized into strategic pillar-and-cluster hubs that dominate entire topical verticals while maintaining a genuine, authentic brand voice.",
    iconName: "Globe",
    image: "/maia_health_mockup_1789726816504.jpg",
    stats: {
      highlight: "<0.8s",
      label: "Average User LCP",
      sublabel: "Speed-optimized reader experience",
    },
    deliverables: [
      "Commercial vs Informational search intent mapping and keyword clustering",
      "Content Pillar and Supporting Topic Cluster architecture blueprints",
      "Editorial style guide & technical tone-of-voice documentation",
      "SEO-optimized copywriting for landing pages, blogs, and service pages",
      "Internal linking matrix to pass search equity to revenue pages",
      "Content refresh plan for decaying URLs and historical winners",
    ],
    process: [
      {
        step: "01",
        title: "Intent Mining",
        description: "Scouring search queries, forum discussions, and customer support questions for true intent.",
      },
      {
        step: "02",
        title: "Topical Mapping",
        description: "Building 3–5 core content pillars with 10–15 satellite cluster topics each.",
      },
      {
        step: "03",
        title: "Production & Optimization",
        description: "Crafting original, authoritative content equipped with graphics, citations, and microdata.",
      },
      {
        step: "04",
        title: "Performance Review",
        description: "Tracking click-through rates, time on page, and goal conversions to refine underperforming pages.",
      },
    ],
    tools: ["Ahrefs", "Semrush", "Google Trends", "AnswerThePublic", "SurferSEO", "Grammarly", "Notion"],
    benefits: [
      "Attract qualified prospects actively looking for your solutions",
      "Build compounding organic traffic that lowers your cost-per-acquisition",
      "Establish topical authority that boosts rankings for your entire domain",
    ],
    caseStudy: {
      client: "AristBrush Portfolio",
      impact: "Designed 4 topic clusters targeting commercial art buyers and gallery commissions, yielding a +240% increase in inbound inquiries.",
      metric: "+240% Inquiries",
      link: "/projects#artist-brush",
    },
    faqs: [
      {
        q: "Do you write with AI or human copywriters?",
        a: "All strategic content is human-written, editor-verified, and enriched with real industry experience. AI is used solely for initial data clustering and competitive analysis.",
      },
      {
        q: "How do you pick keywords that generate revenue rather than vanity traffic?",
        a: "We focus heavily on Bottom-of-Funnel (BOFU) search queries—high commercial intent keywords such as product comparisons, service alternatives, and localized solutions—rather than broad informational terms that rarely convert.",
      },
      {
        q: "How often should existing blog content and service pages be refreshed?",
        a: "We audit content decay every 3 to 6 months. Updating statistics, expanding thin sections, and strengthening internal links on older posts frequently produces immediate ranking jumps without writing from scratch.",
      },
    ],
  },
  {
    num: "04",
    id: "wordpress-ecommerce",
    slug: "wordpress-ecommerce",
    title: "WordPress and E-Commerce",
    shortTitle: "WordPress & E-Commerce",
    badge: "High-Converting Custom Web Builds",
    desc: "Fast, responsive WordPress, Shopify, and WooCommerce sites built to rank and convert.",
    tagline: "Turn your website into a lightning-fast 24/7 sales engine designed for top SEO rankings and seamless checkouts.",
    longDescription:
      "A slow, cluttered website bleeds revenue and damages search engine rankings. We design and develop custom WordPress, WooCommerce, and Shopify stores with a mobile-first philosophy, blazing-fast Core Web Vitals performance, and frictionless conversion funnels. From bespoke product filtering to streamlined checkout flows, every pixel is engineered to maximize conversion rate and customer trust.",
    iconName: "Share2",
    image: "/images/built-to-grow-hero.jpg",
    stats: {
      highlight: "3.2x",
      label: "Engagement & CVR Lift",
      sublabel: "Frictionless checkout experience",
    },
    deliverables: [
      "Custom WordPress / WooCommerce / Shopify theme development",
      "Mobile-first responsive UX/UI design engineered for conversion",
      "Next-gen image optimization (AVIF/WebP), lazy loading & CDN setup",
      "Frictionless checkout flow with 1-click payment integration (Stripe, PayPal, Apple Pay)",
      "Technical on-site SEO architecture baked directly into the site code",
      "Database cleanup, caching layer (Redis / WP Rocket), and script minification",
    ],
    process: [
      {
        step: "01",
        title: "UX & Wireframing",
        description: "Mapping intuitive user journeys, navigation menus, and streamlined product discovery paths.",
      },
      {
        step: "02",
        title: "Lightweight Development",
        description: "Building with clean code, avoiding bloated page builders that slow down Core Web Vitals.",
      },
      {
        step: "03",
        title: "Speed & SEO Tuning",
        description: "Configuring server-side caching, image CDNs, and technical schema integrations.",
      },
      {
        step: "04",
        title: "Testing & Launch",
        description: "Running end-to-end checkout simulations across 10+ mobile devices before zero-downtime deployment.",
      },
    ],
    tools: ["WordPress", "WooCommerce", "Shopify", "Elementor Pro", "WP Rocket", "Cloudflare", "Next.js", "Stripe"],
    benefits: [
      "Sub-second load times that keep mobile shoppers on your site",
      "Higher checkout completion rates with reduced cart abandonment",
      "Fully responsive layout optimized for all modern screen resolutions",
    ],
    caseStudy: {
      client: "drTung's Oral Care UK",
      impact: "Re-engineered Shopify product pages and collection architecture, slashing bounce rates by 34% and boosting revenue by +240%.",
      metric: "+240% Store Revenue",
      link: "/projects#drtungs",
    },
    faqs: [
      {
        q: "Can you redesign our existing store without losing our SEO rankings?",
        a: "Yes! We run full 301 redirect mappings, preserve historical URL structures, and verify staging environments before live cutover so your search equity stays protected.",
      },
      {
        q: "Do you build custom themes or rely on heavy pre-made builders?",
        a: "We prioritize clean, lightweight custom code and headless/modern stacks (Tailwind, Next.js, or stripped-down WooCommerce/Shopify setups) to prevent the bloat and slow load times common with heavy drag-and-drop builders.",
      },
      {
        q: "Can you integrate third-party payment gateways, CRMs, and ERP systems?",
        a: "Yes. We configure secure API integrations with Stripe, PayPal, Apple Pay, Klarna, Klaviyo, HubSpot, and custom inventory databases.",
      },
    ],
  },
  {
    num: "05",
    id: "social-email",
    slug: "social-email",
    title: "Social and Email Marketing",
    shortTitle: "Social & Email Marketing",
    badge: "Audience Retention & Lifecycle Funnels",
    desc: "Content calendars, reels,Canva visuals and newsletters across major platforms.",
    tagline: "Build an active community, nurture repeat buyers, and turn one-time visitors into lifelong brand advocates.",
    longDescription:
      "Acquiring a new customer is expensive; retaining them generates profit. We craft end-to-end retention and brand-building engines across Instagram, LinkedIn, and automated email flows (Klaviyo / Mailchimp). Through thumb-stopping visuals, strategic storytelling, and personalized behavioral email triggers (abandoned cart, post-purchase, VIP nurture), we drive consistent lifetime value (LTV).",
    iconName: "Target",
    image: "/harris_pharmacy_1789726798694.jpg",
    stats: {
      highlight: "+32%",
      label: "Checkout & Flow CVR",
      sublabel: "Automated retention campaigns",
    },
    deliverables: [
      "Monthly social media content calendars with tailored brand voice",
      "Canva & Adobe visual design: carousels, reels, stories & infographics",
      "Automated email marketing flows (Welcome series, Cart recovery, Win-back)",
      "Segmented subscriber lists for hyper-targeted promotions & announcements",
      "High-converting email copy with engaging subject lines and preview text",
      "Community management & response guidelines to build brand loyalty",
    ],
    process: [
      {
        step: "01",
        title: "Audience Persona Study",
        description: "Identifying who your ideal buyers are, what content they interact with, and their purchasing triggers.",
      },
      {
        step: "02",
        title: "Creative Calendar & Templates",
        description: "Designing reusable branded templates, video reels, and aesthetic carousels.",
      },
      {
        step: "03",
        title: "Email Flow Automation",
        description: "Setting up behavioral triggers for abandoned checkouts, new subscribers, and repeat purchasers.",
      },
      {
        step: "04",
        title: "A/B Subject & Send Testing",
        description: "Continuously testing send times, email layouts, and promo offers for maximum revenue.",
      },
    ],
    tools: ["Klaviyo", "Mailchimp", "Canva Pro", "Adobe Photoshop", "Meta Business Suite", "Later", "Brevo"],
    benefits: [
      "Generate predictable, high-margin revenue from owned email channels",
      "Rescue abandoned checkouts with automated 3-step recovery sequences",
      "Maintain a consistent, professional brand aesthetic across all social touchpoints",
    ],
    caseStudy: {
      client: "Harris Pharmacy Patient Portal",
      impact: "Automated prescription renewal reminder emails and local community health spotlights, generating 1,845+ direct phone inquiries.",
      metric: "1,845 Inquiries",
      link: "/projects#harris-pharmacy",
    },
    faqs: [
      {
        q: "What email marketing platforms do you support?",
        a: "We work with Klaviyo (best for e-commerce), Mailchimp, Brevo, ActiveCampaign, and Omnisend.",
      },
      {
        q: "How quickly can automated email flows recover abandoned checkout revenue?",
        a: "Automated abandoned cart, checkout abandonment, and browse abandonment flows typically start recapturing 8% to 18% of lost revenue within the first 48 hours of activation.",
      },
      {
        q: "Do you design custom graphics and write all the copy for social & email?",
        a: "Yes. We deliver complete turn-key assets: custom Canva/Adobe graphics, branded carousel slides, subject lines with proven open rates, and engaging copy aligned with your brand guidelines.",
      },
    ],
  },
  {
    num: "06",
    id: "analytics-reporting",
    slug: "analytics-reporting",
    title: "Analytics and Reporting",
    shortTitle: "Analytics & Looker Dashboards",
    badge: "GA4, GTM & Transparent Revenue Attribution",
    desc: "Clear reports that show what worked, what didn't, and what to do next.",
    tagline: "Cut through vanity metrics with crystal-clear GA4 tracking and Looker Studio dashboards that reveal your true ROI.",
    longDescription:
      "You cannot grow what you do not accurately measure. We engineer custom Google Analytics 4 (GA4) and Google Tag Manager (GTM) setups that capture the entire customer journey—from first click to final purchase. We consolidate your data into executive Looker Studio dashboards that translate complex analytics into actionable insights: which channels drive revenue, where users drop off, and where to invest next.",
    iconName: "TrendingUp",
    image: "/images/growth-hero-visual.jpg",
    stats: {
      highlight: "4.5x",
      label: "Target ROAS Insight",
      sublabel: "Multi-touch attribution models",
    },
    deliverables: [
      "Full Google Analytics 4 (GA4) property audit & clean migration",
      "Google Tag Manager (GTM) custom event, button-click & form submission tracking",
      "E-commerce monetization tracking: Add to Cart, Begin Checkout, Purchase & LTV",
      "Executive Looker Studio dashboards with real-time interactive filters",
      "Multi-channel attribution modeling (First Click, Last Non-Direct, Data-Driven)",
      "UTM campaign tagging framework for paid ads, email, and organic links",
    ],
    process: [
      {
        step: "01",
        title: "Measurement Audit",
        description: "Checking current data leaks, duplicate tags, and unverified conversion goals.",
      },
      {
        step: "02",
        title: "GTM Event Configuration",
        description: "Wiring up custom JavaScript triggers for button clicks, form submissions, and video plays.",
      },
      {
        step: "03",
        title: "Dashboard Construction",
        description: "Designing branded, real-time Looker Studio dashboards connected to GA4, GSC, and ad platforms.",
      },
      {
        step: "04",
        title: "Insight Translation",
        description: "Delivering monthly plain-English executive summaries detailing wins, warnings, and growth steps.",
      },
    ],
    tools: ["Google Analytics 4 (GA4)", "Google Tag Manager", "Looker Studio", "Google Search Console", "BigQuery", "Hotjar"],
    benefits: [
      "Eliminate guesswork by knowing exactly which channels generate paying customers",
      "Identify high-friction drop-off points in your sign-up or checkout funnel",
      "Stop wasting marketing budget on underperforming campaigns",
    ],
    caseStudy: {
      client: "AristBrush & drTung's",
      impact: "Configured unified cross-domain GA4 tracking and Looker Studio reports, exposing hidden attribution channels that boosted ad ROAS from 2.1x to 5.1x.",
      metric: "5.1x ROAS Verified",
      link: "/analytics",
    },
    faqs: [
      {
        q: "Why do I need custom GA4 setup if I already have basic GA4 installed?",
        a: "Default GA4 only tracks generic page views. Without custom event tracking via GTM, you cannot accurately track specific button clicks, file downloads, form submissions, phone calls, or revenue attribution.",
      },
      {
        q: "Can you fix broken e-commerce conversion tracking and missing purchase values?",
        a: "Yes. We audit your data layer and Google Tag Manager triggers, resolving issues like duplicate transactions, missing tax/shipping revenue, and unlinked payment gateway referrals.",
      },
      {
        q: "Do our stakeholders get 24/7 access to live reporting dashboards?",
        a: "Absolutely. We construct executive Looker Studio dashboards that update in real time with interactive date, channel, and device filters—accessible securely from any device.",
      },
    ],
  },

  // ===================== SET 2 (07 - 12) =====================
  {
    num: "07",
    id: "local-seo-gmb",
    slug: "local-seo-gmb",
    title: "Local SEO & Google Business Profile",
    shortTitle: "Local SEO & Map Pack",
    badge: "Google 3-Pack & Geo-Targeted Domination",
    desc: "Google Map Pack domination, local geo-citations, NAP consistency, and high-converting reviews.",
    tagline: "Own the top 3 spots in Google Maps when high-intent local customers search for your services.",
    longDescription:
      "For location-based businesses, clinics, and service providers, 70%+ of calls come directly from the Google Maps 3-Pack. We optimize your Google Business Profile (GBP), build consistent local NAP (Name, Address, Phone) citations, inject hyper-local geo-coordinates, and build automated review generation funnels that establish unbeatable local prominence across your service radius.",
    iconName: "MapPin",
    image: "/Analytics/Aristbrush/gmb-profile-live.jpg",
    stats: {
      highlight: "+210%",
      label: "Direct Phone Inquiries",
      sublabel: "Verified via Google Maps & GBP",
    },
    deliverables: [
      "Comprehensive Google Business Profile (GBP) audit & category optimization",
      "Local 3-Pack Geo-Grid ranking tracking across target zip/postal codes",
      "Consistent NAP citation distribution across 50+ tier-1 directories",
      "Automated SMS/Email Google review acquisition funnel setup",
      "Geo-targeted localized landing pages with embedded Google Maps schema",
      "Local spam fighting: reporting competitor keyword stuffing & fake profiles",
    ],
    process: [
      {
        step: "01",
        title: "Geo-Grid Benchmark",
        description: "Scanning your profile's rank across a 10-mile radius grid to pinpoint drop-off zones.",
      },
      {
        step: "02",
        title: "Profile Overhaul",
        description: "Optimizing primary/secondary categories, services list, geo-tagged photos, and products.",
      },
      {
        step: "03",
        title: "Citation Cleansing",
        description: "Fixing conflicting addresses and phone numbers across Yelp, Apple Maps, Bing, and industry directories.",
      },
      {
        step: "04",
        title: "Review Velocity Engine",
        description: "Setting up a frictionless review request sequence that turns happy clients into 5-star testimonials.",
      },
    ],
    tools: ["Google Business Profile", "BrightLocal", "Whitespark", "GeoImgr", "Google Maps Platform", "Local Viking"],
    benefits: [
      "Appear at the top of Google Maps searches in your target service area",
      "Drive direct phone calls, direction requests, and website visits",
      "Build a pristine 5-star reputation that beats local competitors",
    ],
    caseStudy: {
      client: "Harris Pharmacy UK",
      impact: "Captured #1 positions across 8 key NHS pharmacy keywords, generating 1,845 phone calls directly from the Google Map Pack.",
      metric: "#1 Map Pack Rank",
      link: "/projects#harris-pharmacy",
    },
    faqs: [
      {
        q: "How long does it take to rank in Google's local 3-pack?",
        a: "Minor category corrections and citation cleanup often yield ranking improvements in 3 to 6 weeks. Competitive metropolitan areas typically take 2 to 4 months of sustained review velocity and citation building.",
      },
      {
        q: "What if my company has multiple branch locations or service areas?",
        a: "We develop dedicated multi-location architectures with unique localized landing pages, distinct Google Business Profiles for each physical location, and location-specific schema markups.",
      },
      {
        q: "How do you help us get more positive customer reviews safely?",
        a: "We implement automated SMS and email review collection funnels that invite satisfied customers to leave Google reviews directly, fully compliant with Google's non-gating review policies.",
      },
    ],
  },
  {
    num: "08",
    id: "conversion-rate-optimization",
    slug: "conversion-rate-optimization",
    title: "Conversion Rate Optimization (CRO)",
    shortTitle: "Conversion Optimization (CRO)",
    badge: "Funnels, Heatmaps & Revenue Maximization",
    desc: "Heatmap analysis, session replays, friction removal, and high-velocity A/B testing.",
    tagline: "Turn more of your existing traffic into paying customers without spending an extra penny on ads.",
    longDescription:
      "Driving traffic to a broken funnel is like pouring water into a leaky bucket. We study quantitative data (GA4 funnels, drop-off rates) and qualitative data (Hotjar heatmaps, session recordings, scroll depth) to eliminate hesitation and cognitive friction. We write persuasive, value-centric copy and execute methodical A/B tests that permanently lift conversion rates.",
    iconName: "Zap",
    image: "/Analytics/Aristbrush/gsc-5-ga4-revenue.jpg",
    stats: {
      highlight: "+48%",
      label: "Checkout & Lead CVR",
      sublabel: "Tested via statistical significance",
    },
    deliverables: [
      "Full funnel drop-off analysis: Cart → Checkout → Shipping → Payment",
      "Heatmap, click-tracking & rage-click session recording diagnostic",
      "Conversion copy rewrites for hero sections, forms, and CTA buttons",
      "Form optimization: reducing friction fields and implementing autofill",
      "Mobile checkout UX re-engineering for 1-thumb thumb zone accessibility",
      "Hypothesis-driven A/B testing roadmap with 95%+ statistical significance",
    ],
    process: [
      {
        step: "01",
        title: "Friction Diagnostic",
        description: "Watching session recordings to find where users hesitate, rage-click, or abandon carts.",
      },
      {
        step: "02",
        title: "Hypothesis Formulation",
        description: "Drafting testable design and copy changes ranked by business impact and implementation effort.",
      },
      {
        step: "03",
        title: "Variant Execution",
        description: "Coding A/B variants with zero layout flicker or page speed degradation.",
      },
      {
        step: "04",
        title: "Statistical Validation",
        description: "Measuring winner variants to a 95% confidence interval before permanent deployment.",
      },
    ],
    tools: ["Hotjar", "Microsoft Clarity", "Google Optimize / VWO", "GA4 Funnels", "Figma", "Convert"],
    benefits: [
      "Double your leads or orders without increasing your ad budget",
      "Slash customer acquisition costs (CAC) across all channels",
      "Provide a smoother, delightful buying experience for customers",
    ],
    caseStudy: {
      client: "drTung's UK E-Commerce",
      impact: "Streamlined 3-step checkout into a 1-page accordion flow, reducing checkout abandonment by 34% and lifting store revenue by +240%.",
      metric: "+48% CVR Lift",
      link: "/projects#drtungs",
    },
    faqs: [
      {
        q: "What traffic do I need for effective CRO testing?",
        a: "For formal A/B testing, at least 10,000 monthly visitors is ideal. For sites with lower traffic, we conduct heuristic reviews and best-practice UX overhauls that provide immediate conversion wins.",
      },
      {
        q: "How do you guarantee that A/B test variations don't slow down page speed?",
        a: "We utilize server-side split testing and lightweight asynchronous scripts that avoid common layout shifts (CLS) and render-blocking delays associated with older testing tools.",
      },
      {
        q: "What conversion rate improvement can we realistically expect?",
        a: "While results vary by industry and baseline, clients typically see a 20% to 50% relative lift in form completions or checkout conversions across prioritized high-friction funnel steps.",
      },
    ],
  },
  {
    num: "09",
    id: "programmatic-seo",
    slug: "programmatic-seo",
    title: "Programmatic SEO & Scalable Pages",
    shortTitle: "Programmatic SEO",
    badge: "Data-Driven Templates & Long-Tail Scale",
    desc: "Data-driven template architectures targeting thousands of long-tail commercial queries.",
    tagline: "Build automated, template-based SEO hubs that capture thousands of high-intent long-tail search queries simultaneously.",
    longDescription:
      "When scaling a marketplace, directory, SaaS, or multi-location brand, creating individual pages manually is too slow. Programmatic SEO creates dynamically populated, highly customized landing pages from structured databases (Airtable, Supabase, CMS collections). Each page addresses specific city/state combinations, comparison queries, or feature verticals with zero duplicate content penalties.",
    iconName: "Layers",
    image: "/images/gsc-4-keywords.jpg",
    stats: {
      highlight: "10K+",
      label: "Indexed Query Pages",
      sublabel: "Scalable directory & location hubs",
    },
    deliverables: [
      "Large-scale keyword database structuring and variable permutation mapping",
      "Dynamic Next.js / React SSR/SSG template engineering with static generation",
      "Automated internal linking architecture connecting parent/child hierarchies",
      "Programmatic OpenGraph image generation for rich social and search snippets",
      "Unique data enrichment algorithms preventing thin/duplicate content penalties",
      "Bulk XML sitemap splitting and Google Search Console index monitoring",
    ],
    process: [
      {
        step: "01",
        title: "Pattern Identification",
        description: "Finding keyword formulas with high intent (e.g., '[Service] in [City]', 'Best [Tool] for [Niche]').",
      },
      {
        step: "02",
        title: "Database Enrichment",
        description: "Compiling structured data points so each generated page offers genuine unique value.",
      },
      {
        step: "03",
        title: "Template Engineering",
        description: "Designing fast, responsive Next.js dynamic routes (`/services/[city]/[service]`).",
      },
      {
        step: "04",
        title: "Staged Indexation",
        description: "Rolling out pages in batches to protect crawl budget and monitor index rates.",
      },
    ],
    tools: ["Next.js App Router", "Supabase", "Airtable", "Screaming Frog", "Google Sheets", "Ahrefs API"],
    benefits: [
      "Dominate hundreds of location or feature keywords simultaneously",
      "Exponentially increase your organic keyword footprint",
      "Low incremental cost per page compared to manual copywriting",
    ],
    caseStudy: {
      client: "Digital Growth Directory Hub",
      impact: "Generated 1,200 programmatic location pages with unique local schema, achieving a +310% surge in long-tail clicks within 90 days.",
      metric: "+310% Long-Tail Clicks",
      link: "/analytics",
    },
    faqs: [
      {
        q: "Does programmatic SEO get penalized for duplicate content?",
        a: "Only if done poorly with thin text replacements. We enrich every page with unique data points, dynamic statistics, specific FAQs, and localized schemas to satisfy Google's helpful content guidelines.",
      },
      {
        q: "What technology stack do you use to deploy thousands of scalable pages?",
        a: "We use Next.js App Router with Static Site Generation (SSG) and Incremental Static Regeneration (ISR), backed by structured databases (Supabase, Airtable, or PostgreSQL) and high-speed edge CDNs like Cloudflare.",
      },
      {
        q: "How do you manage internal linking across thousands of programmatic pages?",
        a: "We engineer automated semantic link clusters (breadcrumb hierarchies, related city hubs, and category parent-child maps) so crawl equity flows smoothly to all indexed URLs.",
      },
    ],
  },
  {
    num: "10",
    id: "link-building-authority",
    slug: "link-building-authority",
    title: "Authority & Digital PR Link Building",
    shortTitle: "Link Building & Digital PR",
    badge: "Editorial Placements & Domain Authority",
    desc: "White-hat digital PR, journalist outreach, unlinked brand reclamation, and natural backlinks.",
    tagline: "Earn high-authority editorial backlinks from trusted industry publications that drive domain rank equity.",
    longDescription:
      "Backlinks remain one of Google's top 3 core ranking factors. However, spammy guest posts and link farms can trigger severe manual penalties. We execute 100% white-hat Digital PR and targeted outreach: positioning your team as quoted experts on platforms like Connectively/HARO, creating linkable data assets, and reclaiming high-value unlinked brand mentions on authoritative domains.",
    iconName: "Link2",
    image: "/Analytics/Aristbrush/gsc-3-authority.jpg",
    stats: {
      highlight: "DA 65+",
      label: "Average Placement Authority",
      sublabel: "Editorial, contextually relevant sites",
    },
    deliverables: [
      "Competitor backlink gap analysis to uncover high-authority linking targets",
      "Creation of data-driven linkable assets (industry studies, calculators, original research)",
      "Journalist and editor pitching for expert commentary (Connectively / Qwoted / SourceBottle)",
      "Unlinked brand mention monitoring and reclamation outreach",
      "Broken link building on top-tier educational and industry resource hubs",
      "Toxic backlink audit and Google Disavow file management if needed",
    ],
    process: [
      {
        step: "01",
        title: "Gap Audit",
        description: "Analyzing the top 5 ranking competitors to identify the link volume and authority needed to overtake them.",
      },
      {
        step: "02",
        title: "Asset Crafting",
        description: "Publishing original statistics or expert guides that journalists naturally reference.",
      },
      {
        step: "03",
        title: "Targeted Pitching",
        description: "Reaching out directly to journalists and editors with personalized story angles.",
      },
      {
        step: "04",
        title: "Equity Verification",
        description: "Monitoring newly acquired do-follow backlinks and verifying anchor text natural distribution.",
      },
    ],
    tools: ["Ahrefs", "Semrush", "Connectively (HARO)", "Hunter.io", "Buzzstream", "Pitchbox"],
    benefits: [
      "Increase your Domain Rating (DR) to outrank entrenched competitors",
      "Drive direct referral traffic from authoritative industry blogs",
      "Gain permanent algorithmic trust signals that protect your rankings from updates",
    ],
    caseStudy: {
      client: "AristBrush Portfolio",
      impact: "Secured editorial mentions on top contemporary art and design publications, lifting domain rating by +14 points and landing 1st-page rankings for commercial art commissions.",
      metric: "+14 DR Points",
      link: "/projects#artist-brush",
    },
    faqs: [
      {
        q: "Do you buy links or use PBNs?",
        a: "Never. We strictly execute white-hat outreach, editorial pitching, and content-driven digital PR. Every acquired link is earned legitimately and compliant with Google's webmaster guidelines.",
      },
      {
        q: "How do you secure backlinks on high DR authority publications?",
        a: "We pitch your brand's proprietary data, original survey results, and expert founder commentary to journalists actively seeking quotes via platforms like Connectively, Qwoted, and direct editorial outreach.",
      },
      {
        q: "Are the acquired backlinks permanent and do-follow?",
        a: "Yes. We focus on permanent editorial in-content do-follow links on contextually relevant websites with genuine organic traffic—never rented links or temporary sidebar widgets.",
      },
    ],
  },
  {
    num: "11",
    id: "paid-search-ppc",
    slug: "paid-search-ppc",
    title: "PPC & Paid Search Management",
    shortTitle: "PPC & Google Ads",
    badge: "High-Intent Google Ads & Remarketing",
    desc: "High-intent Google Search, Shopping, and remarketing campaigns engineered to maximize profit.",
    tagline: "Generate immediate, predictable customer acquisition with tightly targeted Google Search & Shopping campaigns.",
    longDescription:
      "When you need instant pipeline velocity while organic rankings build, paid search delivers immediate demand capture. We structure Google Ads and Meta campaigns with relentless focus on ROAS: negative keyword gating to eliminate wasted spend, exact-match single-theme ad groups, high-converting landing page pairings, and server-side conversion tracking for flawless attribution.",
    iconName: "DollarSign",
    image: "/images/gsc-1-ecommerce.jpg",
    stats: {
      highlight: "4.8x",
      label: "Average Return On Ad Spend (ROAS)",
      sublabel: "Across Google Search & Shopping",
    },
    deliverables: [
      "Google Search, Performance Max & Shopping campaign architecture",
      "Negative keyword lists preventing wasted budget on non-converting searches",
      "Ad copywriting with dynamic keyword insertion and compelling extensions",
      "Targeted remarketing sequences on Google Display & Meta for abandoned visitors",
      "Server-side conversion tracking integration with GA4 and Google Ads Enhanced Conversions",
      "Weekly bid optimization, search query reports, and budget reallocation",
    ],
    process: [
      {
        step: "01",
        title: "Commercial Intent Audit",
        description: "Filtering high-intent 'ready-to-buy' search terms from generic informational searches.",
      },
      {
        step: "02",
        title: "Campaign Structuring",
        description: "Building tightly focused ad groups paired with dedicated conversion landing pages.",
      },
      {
        step: "03",
        title: "Bid & Asset Launch",
        description: "Deploying automated smart bidding rules (Target ROAS / Target CPA) with rich sitelinks.",
      },
      {
        step: "04",
        title: "Relentless Pruning",
        description: "Weekly search term mining to add negative keywords and shift budget to top-performing ad copies.",
      },
    ],
    tools: ["Google Ads", "Meta Ads Manager", "Google Tag Manager", "Optmyzr", "Semrush", "Looker Studio"],
    benefits: [
      "Instant top-of-page visibility for your most valuable commercial keywords",
      "Eliminate wasted ad spend with disciplined negative keyword strategies",
      "Complete transparency into cost-per-lead and return on investment",
    ],
    caseStudy: {
      client: "Maia Health & drTung's",
      impact: "Restructured Google Ads Search & Shopping campaigns, cutting cost-per-acquisition (CPA) by 42% while scaling revenue to 5.1x ROAS.",
      metric: "5.1x ROAS",
      link: "/projects#maia-health",
    },
    faqs: [
      {
        q: "How much ad budget should I start with?",
        a: "We recommend starting with a minimum monthly ad spend of $1,000–$2,000 to gather enough statistically meaningful click and conversion data for optimization.",
      },
      {
        q: "How do you prevent wasted spend on irrelevant search terms?",
        a: "We build extensive negative keyword lists prior to launch and conduct weekly search query mining to instantly block irrelevant clicks, ensuring every ad dollar targets high-intent buyers.",
      },
      {
        q: "Do you also build and optimize dedicated landing pages for ad campaigns?",
        a: "Yes. Ad quality scores depend heavily on landing page relevance. We build targeted, fast-loading landing pages designed specifically around the search query and campaign offer.",
      },
    ],
  },
  {
    num: "12",
    id: "core-web-vitals-speed",
    slug: "core-web-vitals-speed",
    title: "Core Web Vitals & Speed Optimization",
    shortTitle: "Speed & Core Web Vitals",
    badge: "Sub-Second Loading & 100 PageSpeed",
    desc: "Advanced server caching, image compression, script tree-shaking, and sub-second loading.",
    tagline: "Transform sluggish page load times into instantaneous, sub-second responses that delight visitors and satisfy Google's CWV benchmark.",
    longDescription:
      "Every 100ms delay in page load time reduces conversion rates by up to 7%. Furthermore, Google officially factors Core Web Vitals (Largest Contentful Paint, Interaction to Next Paint, Cumulative Layout Shift) into organic search rankings. We optimize code delivery, replace render-blocking JavaScript, compress media to next-gen formats (AVIF/WebP), and configure edge caching so your site achieves 90+ PageSpeed scores.",
    iconName: "Gauge",
    image: "/images/gsc-2-local-seo.jpg",
    stats: {
      highlight: "<0.6s",
      label: "Mobile LCP Speed",
      sublabel: "Green scores across all 3 CWV metrics",
    },
    deliverables: [
      "Comprehensive PageSpeed Insights & WebPageTest waterfall diagnostic",
      "LCP (Largest Contentful Paint) optimization: preloading hero images & critical CSS",
      "INP (Interaction to Next Paint) fixing: breaking up long JavaScript main-thread tasks",
      "CLS (Cumulative Layout Shift) elimination: explicit width/height dimension reserving",
      "Next-generation image compression (AVIF, WebP) and automated CDN routing",
      "Server caching configuration (Redis / LiteSpeed / Fastly / Cloudflare Edge Rules)",
      "Unused CSS and third-party tracking script deferment",
    ],
    process: [
      {
        step: "01",
        title: "Waterfall Diagnostic",
        description: "Breaking down the exact timeline of DNS lookup, TTFB, DOM parsing, and asset execution.",
      },
      {
        step: "02",
        title: "Critical Path Optimization",
        description: "Inlining critical above-the-fold CSS and deferring non-essential third-party scripts.",
      },
      {
        step: "03",
        title: "Asset Modernization",
        description: "Converting heavy PNGs and JPEGs to modern AVIF/WebP formats with dynamic responsive sizing.",
      },
      {
        step: "04",
        title: "Edge Caching & Verification",
        description: "Setting up Cloudflare edge cache rules and validating field data in Google Search Console.",
      },
    ],
    tools: ["Google PageSpeed Insights", "WebPageTest", "Chrome DevTools", "Cloudflare", "Lighthouse", "WP Rocket", "Redis"],
    benefits: [
      "Achieve 90+ performance scores on Google Lighthouse and PageSpeed",
      "Drastically reduce mobile bounce rates from impatient visitors",
      "Gain an algorithmic ranking advantage over slower competitors",
    ],
    caseStudy: {
      client: "Harris Pharmacy UK",
      impact: "Reduced mobile LCP from 3.8s down to 1.1s, achieving green Core Web Vitals status on 100% of URLs and lifting overall organic dwell time by 2m 45s.",
      metric: "1.1s LCP Speed",
      link: "/projects#harris-pharmacy",
    },
    faqs: [
      {
        q: "Will speed optimization break my website's design or features?",
        a: "No. We test all optimizations thoroughly in staging environments. Critical scripts (checkout, analytics, forms) are carefully deferred without interrupting functionality.",
      },
      {
        q: "Can you achieve green Core Web Vitals on WordPress and Shopify?",
        a: "Yes. We optimize Shopify Liquid templates and WordPress themes by deferring non-critical apps, compressing images to AVIF/WebP, inlining critical CSS, and preloading key hero assets without sacrificing visual flair.",
      },
      {
        q: "How do you fix high Interaction to Next Paint (INP) and Cumulative Layout Shift (CLS)?",
        a: "We break up long JavaScript tasks into smaller chunks, reserve explicit CSS aspect-ratio dimensions for all images and embeds, and ensure dynamic elements load without jarring layout jumps.",
      },
    ],
  },
];
