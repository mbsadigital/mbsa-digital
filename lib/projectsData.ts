export interface SeoProofItem {
  title: string;
  category: "Google Search Console" | "Google Analytics (GA4)" | "Local SEO / GMB";
  caption: string;
  image: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  client: string;
  duration: string;
  siteUrl: string;
  image: string;
  heroMetric: string;
  heroMetricLabel: string;
  overview: string;
  challenge: string;
  solution: string[];
  results: {
    label: string;
    value: string;
    detail: string;
  }[];
  tools: string[];
  deliverables: string[];
  seoProofImages: SeoProofItem[];
}

export const PROJECTS_DATA_FULL: ProjectDetail[] = [
  {
    id: "harris-pharmacy",
    title: "Harris Pharmacy",
    category: "PHARMACY & HEALTHCARE",
    client: "Harris Healthcare UK",
    duration: "4 Months",
    siteUrl: "https://harrispharmacy.co.uk",
    image: "/harris_pharmacy_1789726798694.jpg",
    heroMetric: "5.1x",
    heroMetricLabel: "Average Campaign ROAS",
    overview:
      "Improved local search visibility, high-intent paid search, and patient prescription transfers across multiple London healthcare branches.",
    challenge:
      "High local search competition and inefficient Google Ads spend with broad keyword matching burning budget with low attribution.",
    solution: [
      "Re-architected Google Ads account with exact match high-intent search themes and negative keyword filters.",
      "Built dynamic location-specific landing pages with click-to-call and 1-step prescription transfer forms.",
      "Fully optimized Google Business Profile, ranking in top 3 Local Pack for 18 primary keywords.",
      "Engineered medical Schema markup and structured NHS services directory data.",
    ],
    results: [
      { label: "Return on Ad Spend", value: "5.1x", detail: "Consistently delivered monthly" },
      { label: "Qualified Calls", value: "+190%", detail: "Direct inbound phone inquiries" },
      { label: "Local Pack Rank", value: "#1", detail: "Across all 4 regional locations" },
      { label: "Organic Search Lift", value: "+185%", detail: "High-intent patient impressions" },
    ],
    tools: ["Google Ads", "Local SEO", "WordPress", "GA4", "Google Search Console", "Schema Markup"],
    deliverables: [
      "Custom WordPress Healthcare Portal",
      "Local SEO & Citation Architecture",
      "Google Business Profile Optimization",
      "Online Prescription Booking Workflow",
      "High-Intent Paid Search Account Restructure",
    ],
    seoProofImages: [
      {
        title: "Google Search Console • Total Impressions & Clicks",
        category: "Google Search Console",
        caption: "Sustained organic search impressions and patient clicks across London localities.",
        image: "/Analytics/Harris/harrisgsc.jpeg",
      },
      {
        title: "GSC • Top Search Queries & Click Distribution",
        category: "Google Search Console",
        caption: "Capturing Page 1 positions for urgent prescription transfers and pharmacy consultations.",
        image: "/Analytics/Harris/harrisgsc2.jpeg",
      },
      {
        title: "GSC • Regional & Geographic Breakdown",
        category: "Google Search Console",
        caption: "High patient density and localized search traffic across target boroughs.",
        image: "/Analytics/Harris/harrisgscgeo.jpeg",
      },
      {
        title: "GA4 • Traffic & Session Acquisition",
        category: "Google Analytics (GA4)",
        caption: "Substantial jump in monthly qualified patient sessions and user engagement.",
        image: "/Analytics/Harris/harrisga.jpeg",
      },
      {
        title: "GA4 • Multi-Channel Acquisition Breakdown",
        category: "Google Analytics (GA4)",
        caption: "Organic search and direct traffic driving the dominant share of patient volume.",
        image: "/Analytics/Harris/harrisga2.jpeg",
      },
      {
        title: "GA4 • Conversion Events & Call Tracking",
        category: "Google Analytics (GA4)",
        caption: "Form submissions and phone calls tracked with multi-touch attribution.",
        image: "/Analytics/Harris/harrisga3.jpeg",
      },
      {
        title: "GA4 • Long-Term Growth Trajectory",
        category: "Google Analytics (GA4)",
        caption: "Baseline monthly users sustained across multiple quarters without ad decay.",
        image: "/Analytics/Harris/harrisga4.jpeg",
      },
    ],
  },
  {
    id: "maia-health",
    title: "Maia Health & Beauty",
    category: "HEALTH & BEAUTY",
    client: "Maia Health Care UK",
    duration: "6 Months",
    siteUrl: "https://maiahealth.co.uk",
    image: "/maia_health_mockup_1789726816504.jpg",
    heroMetric: "+320%",
    heroMetricLabel: "Organic Search Growth",
    overview:
      "Technical SEO, Core Web Vitals optimization, and skincare content marketing strategy for premium aesthetic wellness.",
    challenge:
      "The client relied heavily on expensive paid ads with escalating CAC. Organic visibility was under 2,000 visits/month due to duplicate schemas, crawl bloat, and slow page speeds.",
    solution: [
      "Resolved 450+ technical crawl errors, redirected low-value URLs, and fixed Core Web Vitals to sub-1.2s LCP.",
      "Implemented comprehensive medical content topic clusters targeting high-intent wellness searches.",
      "Optimized consultation booking landing page UX, lifting booking conversion rates by 48%.",
      "Created structured product markup and review rich snippets.",
    ],
    results: [
      { label: "Organic Traffic", value: "+320%", detail: "From 1.8k to 48k monthly visits" },
      { label: "Conversion Rate", value: "4.6%", detail: "Up from 1.9% baseline" },
      { label: "CAC Reduction", value: "-42%", detail: "Blended acquisition cost dropped" },
      { label: "Top 3 SERP Keywords", value: "140+", detail: "Secured competitive skincare queries" },
    ],
    tools: ["SEMrush", "Technical SEO", "Looker Studio", "GA4", "Google Search Console", "Shopify Plus"],
    deliverables: [
      "Technical Core SEO Refactor & Speed Optimization",
      "Product & Category Content Strategy",
      "Skincare Topic Clustering & Editorial Architecture",
      "Shopify / WooCommerce UX Optimization",
      "Conversion Rate Optimization (CRO)",
    ],
    seoProofImages: [
      {
        title: "GA4 • E-Commerce Traffic & Monthly Active Users",
        category: "Google Analytics (GA4)",
        caption: "Accelerated growth in unique monthly shoppers and purchasing user segments.",
        image: "/Analytics/Maia/maiaga.jpeg",
      },
      {
        title: "GA4 • Traffic Sources & Revenue Attribution",
        category: "Google Analytics (GA4)",
        caption: "Organic search outpacing paid channels with higher ROAS and lower bounce rates.",
        image: "/Analytics/Maia/maiaga2.jpeg",
      },
      {
        title: "Google Search Console • Exponential Impressions Growth",
        category: "Google Search Console",
        caption: "Search impression explosion following Core Web Vitals fixes and schema revamp.",
        image: "/Analytics/Maia/maiagsc.jpeg",
      },
      {
        title: "GSC • Average SERP Position & CTR Improvement",
        category: "Google Search Console",
        caption: "Average ranking position climbed from #24 to top 3 for competitive health queries.",
        image: "/Analytics/Maia/maiagsc2.jpeg",
      },
      {
        title: "GSC • Keyword Performance & Queries Matrix",
        category: "Google Search Console",
        caption: "Capturing high-commercial-intent skincare and beauty search terms.",
        image: "/Analytics/Maia/maiagsc3.jpeg",
      },
      {
        title: "GSC • Product Landing Pages Indexing & Rank",
        category: "Google Search Console",
        caption: "Top category pages dominating organic search clicks nationwide.",
        image: "/Analytics/Maia/maiagsc4.jpeg",
      },
    ],
  },
  {
    id: "drtungs-uk",
    title: "drTung's UK",
    category: "ORAL CARE & E-COMMERCE",
    client: "drTung's Natural Oral Care UK",
    duration: "5 Months",
    siteUrl: "https://drtungs.co.uk",
    image: "/darkdigital.png",
    heroMetric: "+240%",
    heroMetricLabel: "eCommerce Revenue Lift",
    overview:
      "Comprehensive content strategy and search visibility improvement across organic e-commerce channels.",
    challenge:
      "Low product page search visibility and high cart abandonment on mobile web traffic against multinational oral care conglomerates.",
    solution: [
      "Deployed programmatic product schema markup and structured FAQs for rich snippets.",
      "Restructured Shopify collection page navigation and faceted search filters.",
      "Created 15 authority oral health guides that rank on page 1 of Google UK.",
      "Implemented automated abandoned cart and post-purchase loyalty flows.",
    ],
    results: [
      { label: "eCommerce Revenue", value: "+240%", detail: "Organic transactions scaled" },
      { label: "SERP Snippets", value: "42", detail: "Featured snippets captured" },
      { label: "Organic Clicks", value: "+180%", detail: "Monthly organic search traffic" },
      { label: "DTC Repeat Orders", value: "+78%", detail: "Lift in customer lifetime value" },
    ],
    tools: ["Shopify Plus", "Ahrefs", "Google Search Console", "GA4", "Rich Schema", "Klaviyo"],
    deliverables: [
      "Educational Content & Editorial Calendar",
      "Rich Snippet & FAQ Schema Implementation",
      "Social-to-Search Cross-Channel Campaigns",
      "GA4 Custom Conversion Tracking",
      "Collection Page Architecture Refactor",
    ],
    seoProofImages: [
      {
        title: "GA4 • eCommerce Revenue & Order Transactions",
        category: "Google Analytics (GA4)",
        caption: "Significant upward trajectory in revenue from organic search visitors.",
        image: "/Analytics/Drtungs/drtungsga.jpeg",
      },
      {
        title: "GA4 • User Engagement & Average Dwell Time",
        category: "Google Analytics (GA4)",
        caption: "Longer on-site dwell times driven by informative oral hygiene guides.",
        image: "/Analytics/Drtungs/drtungsga2.jpeg",
      },
      {
        title: "GA4 • Acquisition Channels Comparison",
        category: "Google Analytics (GA4)",
        caption: "Organic search established as the most cost-efficient revenue generator.",
        image: "/Analytics/Drtungs/drtungsga3.jpeg",
      },
      {
        title: "GA4 • Geographic Distribution Across UK",
        category: "Google Analytics (GA4)",
        caption: "Broad national buyer presence across London, Manchester, and Birmingham.",
        image: "/Analytics/Drtungs/drtungsgeograph.jpeg",
      },
      {
        title: "GA4 • Conversion Rate & Checkout Velocity",
        category: "Google Analytics (GA4)",
        caption: "Optimized mobile funnel resulting in higher completed purchase rates.",
        image: "/Analytics/Drtungs/drtungsgraph2.jpeg",
      },
    ],
  },
  {
    id: "artists-brush",
    title: "Artist's Brush",
    category: "ART & DESIGN PORTFOLIO",
    client: "Studio Brush Collective",
    duration: "3 Months",
    siteUrl: "https://studiobrush.co.uk",
    image: "/lightdigital.png",
    heroMetric: "4.2x",
    heroMetricLabel: "Booking Inquiries",
    overview:
      "Website redesign, UX conversion rate optimization, and localized search positioning for commercial commissions.",
    challenge:
      "Outdated portfolio website with slow load times and no clear lead capture mechanism for commercial clients.",
    solution: [
      "Designed and developed a responsive, ultra-fast Next.js portfolio website.",
      "Optimized service landing pages for commercial art commissions and workshop bookings.",
      "Integrated automated inquiry calendar scheduling and CRM tracking.",
      "Optimized Google My Business profile for regional studio discovery.",
    ],
    results: [
      { label: "Inquiry Volume", value: "4.2x", detail: "Qualified commercial bookings" },
      { label: "Page Load Speed", value: "0.8s", detail: "LCP speed on mobile" },
      { label: "Bounce Rate", value: "-35%", detail: "Engagement significantly improved" },
      { label: "Portfolio Session Time", value: "+95%", detail: "Deeper collector immersion" },
    ],
    tools: ["Next.js", "UX & CRO", "Google My Business", "Local SEO", "GA4", "Vercel"],
    deliverables: [
      "Custom Modern Portfolio Design & Build",
      "Interactive Artwork Showcase & Filtering",
      "Google My Business Profile Domination",
      "Image Compression & Next-Gen CDN Setup",
      "Commission Inquiry Lead Capture Funnel",
    ],
    seoProofImages: [
      {
        title: "GA4 • Live Real-Time Dashboard & User Activity",
        category: "Google Analytics (GA4)",
        caption: "Active user sessions and artwork portfolio engagement tracking.",
        image: "/Analytics/Aristbrush/ga4-analytics-live.jpg",
      },
      {
        title: "Google My Business • Profile Discovery & Calls",
        category: "Local SEO / GMB",
        caption: "Direct telephone inquiries and studio direction requests via Google Maps.",
        image: "/Analytics/Aristbrush/gmb-profile-live.jpg",
      },
      {
        title: "Google Search Console • Authority & Search Clicks",
        category: "Google Search Console",
        caption: "Steady organic growth for high-value commercial art search queries.",
        image: "/Analytics/Aristbrush/gsc-3-authority.jpg",
      },
      {
        title: "GA4 • Inquiries Value & Attribution",
        category: "Google Analytics (GA4)",
        caption: "Tracked commercial project commissions originating from organic search.",
        image: "/Analytics/Aristbrush/gsc-5-ga4-revenue.jpg",
      },
    ],
  },
];
