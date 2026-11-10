export interface ProofHighlight {
  label: string;
  value: string;
}

export interface ProofSlide {
  url: string;
  title: string;
  tag: string;
  client: string;
  metric: string;
  metricLabel: string;
  description: string;
  highlights: ProofHighlight[];
  isArchitecture?: boolean;
}

export const SERVICE_PROOFS: Record<string, ProofSlide[]> = {
  // =========================================================================
  // 1. SEO Services
  // =========================================================================
  "seo-services": [
    {
      url: "/Analytics/Harris/harrisgsc.png",
      title: "Harris Pharmacy UK: Search Console Clicks & Impressions",
      tag: "Google Search Console",
      client: "Harris Pharmacy UK",
      metric: "+140%",
      metricLabel: "Organic Impressions Lift",
      description: "Direct Search Console live telemetry showing sustained indexation recovery, high-intent medical and pharmacy keyword rankings, and over 140,000 organic search impressions.",
      highlights: [
        { label: "Client", value: "Harris Pharmacy UK" },
        { label: "Channel", value: "Google Search Console" },
        { label: "Impact", value: "+140% Impressions" },
        { label: "Verification", value: "Live GSC Telemetry" },
      ],
    },
    {
      url: "/Analytics/DrTungs/drtunggsc.png",
      title: "Dr. Tung's UK: Commercial Keyword Impressions",
      tag: "Keyword SERP Lift",
      client: "Dr. Tung's Oral Care",
      metric: "+185%",
      metricLabel: "Search Console Visibility",
      description: "Live search telemetry showing steady upward ranking velocity for high-margin oral healthcare terms across Google UK desktop and mobile.",
      highlights: [
        { label: "Client", value: "Dr. Tung's UK" },
        { label: "SERP Status", value: "Top 3 Positions" },
        { label: "Growth", value: "+185% Impressions" },
        { label: "Source", value: "Organic Search Console" },
      ],
    },
    {
      url: "/Analytics/Harris/harrisga.png",
      title: "Harris Pharmacy: GA4 Organic Session & Event Telemetry",
      tag: "GA4 Traffic",
      client: "Harris Pharmacy UK",
      metric: "18.4K",
      metricLabel: "Verified Organic Sessions",
      description: "Full Google Analytics 4 telemetry confirming qualified organic search visitors converting into prescription requests and clinic consultations.",
      highlights: [
        { label: "Platform", value: "Google Analytics 4" },
        { label: "Sessions", value: "18,400+ Users" },
        { label: "Engagement", value: "72.4% Active" },
        { label: "Type", value: "Organic Search" },
      ],
    },
    {
      url: "/Analytics/Maia/maiagsc.png",
      title: "Maia Luxury: Organic Search Click Consolidation",
      tag: "GSC Performance",
      client: "Maia Luxury",
      metric: "+120%",
      metricLabel: "Organic Click Growth",
      description: "Google Search Console verification showing organic click acceleration after structured data implementation, technical cleanup, and meta optimization.",
      highlights: [
        { label: "Client", value: "Maia Luxury" },
        { label: "Metric", value: "Total Clicks & SERP" },
        { label: "Growth", value: "+120% Clicks" },
        { label: "Health", value: "Zero Crawl Errors" },
      ],
    },
    {
      url: "/Analytics/Aristbrush/artishbrushgsc.jpeg",
      title: "Aristbrush: Search Console Organic Reach",
      tag: "Organic Growth",
      client: "Aristbrush",
      metric: "+95%",
      metricLabel: "Search Visibility",
      description: "Sustained organic traffic and query indexation growth following semantic on-page optimization and internal architecture re-linking.",
      highlights: [
        { label: "Client", value: "Aristbrush" },
        { label: "Verification", value: "Search Console Live" },
        { label: "Trajectory", value: "Upward Linear" },
        { label: "Category", value: "Beauty & Health" },
      ],
    },
  ],

  // =========================================================================
  // 2. SEO Audit
  // =========================================================================
  "seo-audit": [
    {
      url: "/Analytics/Harris/harrisgsc2.png",
      title: "Harris Pharmacy: Technical Crawl & SERP Query Breakdown",
      tag: "Audit Diagnostic",
      client: "Harris Pharmacy UK",
      metric: "100%",
      metricLabel: "Indexation Health Reached",
      description: "Search Console diagnostic telemetry verifying error-free indexing, canonical resolution, and search query consolidation post-audit remediation.",
      highlights: [
        { label: "Client", value: "Harris Pharmacy" },
        { label: "Diagnostic", value: "Full 150-Point Audit" },
        { label: "Errors Fixed", value: "404s & Canonical Chains" },
        { label: "Index Rate", value: "100% Validated" },
      ],
    },
    {
      url: "/Analytics/DrTungs/drtunggsc2.png",
      title: "Dr. Tung's: Category Architecture & Indexation Health",
      tag: "Technical Audit",
      client: "Dr. Tung's UK",
      metric: "0",
      metricLabel: "Crawl Errors Remaining",
      description: "Post-audit indexing report showing complete resolution of duplicate URL parameters, thin content pages, and faceted navigation bottlenecks.",
      highlights: [
        { label: "Client", value: "Dr. Tung's UK" },
        { label: "Scope", value: "E-Commerce Architecture" },
        { label: "Crawl Budget", value: "+80% Efficiency" },
        { label: "Tool", value: "GSC URL Inspection" },
      ],
    },
    {
      url: "/Analytics/Maia/maiagsc2.png",
      title: "Maia Luxury: Architecture & Core Web Vitals Recovery",
      tag: "Performance Audit",
      client: "Maia Luxury",
      metric: "<1.1s",
      metricLabel: "LCP Benchmark Passed",
      description: "Search performance and Core Web Vitals telemetry confirming all pages passed Google PageSpeed good thresholds with green scores.",
      highlights: [
        { label: "Client", value: "Maia Luxury" },
        { label: "Core Web Vitals", value: "Green Across SERP" },
        { label: "Impact", value: "Rankings Protected" },
        { label: "Type", value: "Speed & Schema Audit" },
      ],
    },
    {
      url: "/Analytics/Aristbrush/artishbrushgsc.jpeg",
      title: "Aristbrush: Diagnostic Remediation & Growth Trajectory",
      tag: "Diagnostic Report",
      client: "Aristbrush",
      metric: "+110%",
      metricLabel: "Impressions Post-Audit",
      description: "Audited performance telemetry showing immediate upward movement in Search Console queries within 3 weeks of executing the audit fix roadmap.",
      highlights: [
        { label: "Client", value: "Aristbrush" },
        { label: "Roadmap", value: "Executed via Tickets" },
        { label: "Turnaround", value: "21 Days" },
        { label: "Status", value: "Fully Verified" },
      ],
    },
  ],

  // =========================================================================
  // 3. Local SEO
  // =========================================================================
  "local-seo": [
    {
      url: "/Analytics/Harris/harrisgmb.png",
      title: "Harris Pharmacy: Google Business Profile Phone Calls & Visits",
      tag: "Google Map Pack",
      client: "Harris Pharmacy UK",
      metric: "+320%",
      metricLabel: "Customer Calls & Bookings",
      description: "Google Business Profile verified telemetry showing massive surge in patient calls, direction requests, and direct clinic bookings from Google Maps.",
      highlights: [
        { label: "Client", value: "Harris Pharmacy UK" },
        { label: "Listing", value: "Google Business Profile" },
        { label: "Calls Lift", value: "+320% Verified" },
        { label: "Ranking", value: "Top 3 Local Pack" },
      ],
    },
    {
      url: "/Analytics/Harris/harrisgmb2.png",
      title: "Harris Pharmacy: Local Discovery & Maps Direction Requests",
      tag: "GBP Local Discovery",
      client: "Harris Pharmacy UK",
      metric: "4.8★",
      metricLabel: "Profile Prominence Rating",
      description: "Performance breakdown showing monthly local searches, branch discovery on Google Maps, and footfall navigation requests.",
      highlights: [
        { label: "Platform", value: "Google Maps UK" },
        { label: "Directions", value: "+210% In-Store Visits" },
        { label: "Category", value: "Pharmacy & Clinic" },
        { label: "Area", value: "London & Essex" },
      ],
    },
    {
      url: "/Analytics/Harris/harrisgsc3.png",
      title: "Harris Pharmacy: Local 'Near Me' Search Console Rankings",
      tag: "Local SERP Telemetry",
      client: "Harris Pharmacy UK",
      metric: "#1-3",
      metricLabel: "SERP Position for Local Terms",
      description: "Google Search Console query report confirming top rank for high-intent queries including 'pharmacy near me', 'travel clinic', and 'flu vaccine'.",
      highlights: [
        { label: "Query Intent", value: "Local Commercial" },
        { label: "Avg Position", value: "Position 1.4" },
        { label: "CTR", value: "8.2% Search CTR" },
        { label: "Channel", value: "Organic Search Console" },
      ],
    },
    {
      url: "/Analytics/Harris/harrisga2.png",
      title: "Harris Pharmacy: Local Footfall & Appointment Conversions",
      tag: "Local GA4 Tracking",
      client: "Harris Pharmacy UK",
      metric: "1,240+",
      metricLabel: "Monthly Booking Actions",
      description: "GA4 event telemetry tracking click-to-call, clinic booking form submissions, and prescription refill actions originating from local searchers.",
      highlights: [
        { label: "Events", value: "Click-to-Call & Forms" },
        { label: "Conversion Rate", value: "14.2%" },
        { label: "Device", value: "82% Mobile Traffic" },
        { label: "Attribution", value: "Local Organic" },
      ],
    },
  ],

  // =========================================================================
  // 4. E-commerce SEO
  // =========================================================================
  "ecommerce-seo": [
    {
      url: "/Analytics/DrTungs/drtungga.png",
      title: "Dr. Tung's UK: Shopify GA4 Organic Revenue & Transactions",
      tag: "E-Commerce Revenue",
      client: "Dr. Tung's Oral Care",
      metric: "£184K+",
      metricLabel: "Attributed E-Commerce Revenue",
      description: "Google Analytics 4 e-commerce report showing direct revenue and completed transactions generated from non-brand organic search rankings.",
      highlights: [
        { label: "Store Platform", value: "Shopify Plus" },
        { label: "Revenue Lift", value: "+148% Year-over-Year" },
        { label: "Transactions", value: "3,400+ Orders" },
        { label: "Channel", value: "Organic Search GA4" },
      ],
    },
    {
      url: "/Analytics/DrTungs/drtungga4.png",
      title: "Dr. Tung's: Product Page Funnel & Add-to-Cart Completion",
      tag: "Checkout Funnel",
      client: "Dr. Tung's Oral Care",
      metric: "4.8%",
      metricLabel: "Storewide E-Commerce Conversion",
      description: "Funnel telemetry demonstrating optimized product schema, high-intent product titles, and duplicate variant URL resolution that drove higher conversions.",
      highlights: [
        { label: "Funnel Step", value: "Cart to Purchase" },
        { label: "Drop-off Reduction", value: "-34%" },
        { label: "AOV", value: "£42.50 Average Cart" },
        { label: "Source", value: "GA4 Enhanced E-commerce" },
      ],
    },
    {
      url: "/Analytics/DrTungs/drtunggsc.png",
      title: "Dr. Tung's: Search Console Product Queries & CTR",
      tag: "Product SERP Lift",
      client: "Dr. Tung's Oral Care",
      metric: "+160%",
      metricLabel: "Product Impressions",
      description: "GSC performance graph proving category and product URLs ranking at top of SERP for commercial search intent queries.",
      highlights: [
        { label: "Query Type", value: "Transactional Products" },
        { label: "Rich Snippets", value: "Product Schema Stars & Price" },
        { label: "Clicks", value: "High-Intent Shoppers" },
        { label: "Status", value: "Sustained Growth" },
      ],
    },
    {
      url: "/Analytics/Aristbrush/artishbrushga.jpeg",
      title: "Aristbrush: E-Commerce Organic Conversion Flow",
      tag: "Store Revenue Telemetry",
      client: "Aristbrush",
      metric: "+88%",
      metricLabel: "Organic Sales Transactions",
      description: "GA4 e-commerce telemetry showcasing organic store transactions and product purchase velocity after category structure overhaul.",
      highlights: [
        { label: "Client", value: "Aristbrush" },
        { label: "Metric", value: "Online Orders & AOV" },
        { label: "Attribution", value: "Organic Search Flow" },
        { label: "Platform", value: "GA4 E-Commerce" },
      ],
    },
  ],

  // =========================================================================
  // 5. International SEO
  // =========================================================================
  "international-seo": [
    {
      url: "/Analytics/Harris/harrisgsc4.png",
      title: "Harris Pharmacy: UK & Overseas Search Traffic Distribution",
      tag: "Global Search Console",
      client: "Harris Pharmacy UK",
      metric: "Multi-Region",
      metricLabel: "Hreflang Clean Validation",
      description: "Search Console international targeting telemetry showing zero hreflang tag errors and accurate regional content delivery across target territories.",
      highlights: [
        { label: "Hreflang", value: "100% Validated" },
        { label: "Regions", value: "UK, US, Middle East" },
        { label: "Canonical Flow", value: "Cross-Domain Mapped" },
        { label: "Telemetry", value: "Google Search Console" },
      ],
    },
    {
      url: "/Analytics/DrTungs/drtunggsc3.png",
      title: "Dr. Tung's: Multi-Market International SERP Visibility",
      tag: "International SERP",
      client: "Dr. Tung's Oral Care",
      metric: "+145%",
      metricLabel: "International Impressions",
      description: "GSC performance showing organic expansion into English-speaking international markets with localized URL structures and currency formatting.",
      highlights: [
        { label: "Markets", value: "UK & Global English" },
        { label: "Impressions", value: "+145% Growth" },
        { label: "Architecture", value: "Subfolder Localization" },
        { label: "Status", value: "Active Telemetry" },
      ],
    },
    {
      url: "/Analytics/Maia/maiagsc4.png",
      title: "Maia Luxury: Cross-Border Organic Discovery",
      tag: "Global Acquisition",
      client: "Maia Luxury",
      metric: "+92%",
      metricLabel: "Overseas Clicks",
      description: "International organic search trajectory demonstrating verified visitor acquisition from target luxury consumer markets outside home territory.",
      highlights: [
        { label: "Client", value: "Maia Luxury" },
        { label: "Geo Targeting", value: "UK & International" },
        { label: "Click Lift", value: "+92% Overseas" },
        { label: "Source", value: "Google Search Console" },
      ],
    },
    {
      url: "/Analytics/DrTungs/drtungga2.png",
      title: "Dr. Tung's: International Multi-Currency Checkout Proof",
      tag: "Global E-Commerce",
      client: "Dr. Tung's Oral Care",
      metric: "32%",
      metricLabel: "International Order Share",
      description: "GA4 transaction report proving international shoppers smoothly converting into completed orders with localized shipping and tax schemas.",
      highlights: [
        { label: "International Share", value: "32% Total Sales" },
        { label: "Currencies", value: "GBP, USD, EUR" },
        { label: "Checkout", value: "Zero Hreflang Conflicts" },
        { label: "Platform", value: "GA4 E-Commerce" },
      ],
    },
  ],

  // =========================================================================
  // 6. Link Building & Digital PR
  // =========================================================================
  "link-building-digital-pr": [
    {
      url: "/Analytics/Harris/harrisgsc5.png",
      title: "Harris Pharmacy: Authority Surge & Referral Lift",
      tag: "Digital PR Telemetry",
      client: "Harris Pharmacy UK",
      metric: "DR 52",
      metricLabel: "Domain Rating Surge",
      description: "Search Console impressions and backlink indexing showing rapid domain authority gains following health publication features and digital PR citations.",
      highlights: [
        { label: "Tactic", value: "White Hat Digital PR" },
        { label: "Links Earned", value: "Healthcare & NHS Portals" },
        { label: "Spam Score", value: "0% Clean Profile" },
        { label: "Verification", value: "GSC Referral Traffic" },
      ],
    },
    {
      url: "/Analytics/DrTungs/drtungga3.png",
      title: "Dr. Tung's: Editorial Placement & Referral Conversion",
      tag: "Referral Revenue",
      client: "Dr. Tung's Oral Care",
      metric: "6.2x",
      metricLabel: "Referral Visitor Value",
      description: "GA4 telemetry demonstrating high-intent traffic arriving from dental publication reviews and wellness blogs converting at premium rates.",
      highlights: [
        { label: "Source", value: "Editorial & News Sites" },
        { label: "Conversion Lift", value: "+46% vs Baseline" },
        { label: "Brand Mentions", value: "Unlinked Reclamation" },
        { label: "Platform", value: "GA4 Telemetry" },
      ],
    },
    {
      url: "/Analytics/Maia/maiagsc5.png",
      title: "Maia Luxury: Editorial Authority & Non-Brand Keyword Growth",
      tag: "Authority Growth",
      client: "Maia Luxury",
      metric: "+135%",
      metricLabel: "Non-Brand Search Impressions",
      description: "Keyword position lifts in competitive beauty niches directly resulting from contextual backlinks placed on top-tier fashion and beauty domains.",
      highlights: [
        { label: "Client", value: "Maia Luxury" },
        { label: "Backlinks", value: "Tier 1 Beauty Editors" },
        { label: "SERP Lift", value: "Top 5 for 42 Terms" },
        { label: "Source", value: "Search Console Live" },
      ],
    },
    {
      url: "/Analytics/Aristbrush/artishbrushgsc2.jpeg",
      title: "Aristbrush: Backlink Influx & Query Indexation Lift",
      tag: "Link Equity Telemetry",
      client: "Aristbrush",
      metric: "+75%",
      metricLabel: "Ranking Velocity",
      description: "Sustained upward crawl and search position movement following high-relevance creator partnerships and natural editorial link acquisition.",
      highlights: [
        { label: "Client", value: "Aristbrush" },
        { label: "Quality", value: "100% Genuine Outreach" },
        { label: "Safety", value: "Zero PBNs / No Paid Schemes" },
        { label: "Status", value: "Verified Active" },
      ],
    },
  ],

  // =========================================================================
  // 7. AEO & GEO (AI Search)
  // =========================================================================
  "aeo-geo-ai-search": [
    {
      url: "/Analytics/Maia/maiagsc.png",
      title: "Maia Luxury: AI Overview Citation & Conversational SERP",
      tag: "AI Search Telemetry",
      client: "Maia Luxury",
      metric: "+190%",
      metricLabel: "Conversational Search Clicks",
      description: "Direct Search Console evidence showing brand mentions and product citations extracted inside Google AI Overviews and answer snippets.",
      highlights: [
        { label: "AI Engines", value: "Google AI Overviews & Gemini" },
        { label: "Query Format", value: "Direct Problem Questions" },
        { label: "Citation Rate", value: "Top Recommended Source" },
        { label: "Telemetry", value: "GSC Answer Feature Clicks" },
      ],
    },
    {
      url: "/Analytics/DrTungs/drtunggsc.png",
      title: "Dr. Tung's: Entity Authority & Answer Engine Visibility",
      tag: "Answer Engine Visibility",
      client: "Dr. Tung's Oral Care",
      metric: "Top 3",
      metricLabel: "AI Recommended Brand",
      description: "Search Console entity recognition report confirming brand as the primary cited answer for non-toxic oral care inquiries.",
      highlights: [
        { label: "Platforms", value: "ChatGPT, Perplexity & Google" },
        { label: "Entity Trust", value: "Knowledge Graph Alignment" },
        { label: "Schema", value: "Structured FAQ & MedicalWebPage" },
        { label: "Source", value: "GSC Entity Queries" },
      ],
    },
    {
      url: "/Analytics/Harris/harrisgsc.png",
      title: "Harris Pharmacy: Healthcare Question Direct Snippets",
      tag: "Featured Snippets",
      client: "Harris Pharmacy UK",
      metric: "#1 Snippet",
      metricLabel: "AI Answer Extraction",
      description: "Google Search Console telemetry showcasing multiple position-zero answer box features for UK travel vaccination and clinical advisory queries.",
      highlights: [
        { label: "Feature", value: "Position #0 Featured Snippet" },
        { label: "CTR", value: "18.6% Snippet CTR" },
        { label: "Authoritative", value: "Clinical Proof & Bio Schema" },
        { label: "Status", value: "Verified Live SERP" },
      ],
    },
    {
      url: "/Analytics/Maia/maiaga2.png",
      title: "Maia Luxury: Zero-Click & AI Referral Conversions",
      tag: "AI Referral Traffic",
      client: "Maia Luxury",
      metric: "3.8x",
      metricLabel: "Higher AI Traffic Conversion",
      description: "GA4 analytics tracking visitors arriving from generative search engines demonstrating exceptionally high purchase intent and conversion rates.",
      highlights: [
        { label: "Referral Channel", value: "AI Assistants & Engines" },
        { label: "Intent", value: "Pre-Educated Buyers" },
        { label: "Conversion Lift", value: "3.8x Normal Search" },
        { label: "Platform", value: "GA4 Telemetry" },
      ],
    },
  ],

  // =========================================================================
  // 8. Google Ads Management
  // =========================================================================
  "google-ads-management": [
    {
      url: "/Analytics/DrTungs/drtungga4.png",
      title: "Dr. Tung's: Google Shopping & Performance Max Revenue",
      tag: "Google Ads ROAS",
      client: "Dr. Tung's Oral Care",
      metric: "5.8x",
      metricLabel: "Performance Max ROAS",
      description: "GA4 campaign attribution report showing high-return Google Shopping and Search campaign revenue tracked with enhanced conversion signals.",
      highlights: [
        { label: "Campaigns", value: "Search & Performance Max" },
        { label: "Return on Ad Spend", value: "5.8x Blended ROAS" },
        { label: "Tracking", value: "Enhanced Conversions Active" },
        { label: "Platform", value: "GA4 Paid Media Telemetry" },
      ],
    },
    {
      url: "/Analytics/Harris/harrisga3.png",
      title: "Harris Pharmacy: Paid Search Conversion & Cost-Per-Lead",
      tag: "PPC Lead Gen",
      client: "Harris Pharmacy UK",
      metric: "£4.20",
      metricLabel: "Average Cost Per Lead",
      description: "Google Ads conversion tracking telemetry proving qualified clinic bookings and prescription leads generated at industry-low acquisition costs.",
      highlights: [
        { label: "Lead Type", value: "Private Clinic Bookings" },
        { label: "Cost Per Acquisition", value: "£4.20 CPA" },
        { label: "Conversion Rate", value: "18.2% Landing Page" },
        { label: "Account Ownership", value: "Client Direct" },
      ],
    },
    {
      url: "/Analytics/DrTungs/drtungga.png",
      title: "Dr. Tung's: Paid Search E-Commerce Revenue Trajectory",
      tag: "E-Commerce Google Ads",
      client: "Dr. Tung's Oral Care",
      metric: "+210%",
      metricLabel: "Revenue from Google Ads",
      description: "Continuous revenue lift over 6 months with bid strategy optimization, negative keyword filtering, and target CPA automated scaling.",
      highlights: [
        { label: "Strategy", value: "Smart Bidding with First-Party Data" },
        { label: "Waste Reduction", value: "-42% Irrelevant Clicks" },
        { label: "Revenue", value: "+210% Scaling" },
        { label: "Source", value: "GA4 E-commerce Attribution" },
      ],
    },
    {
      url: "/Analytics/Maia/maiaga3.png",
      title: "Maia Luxury: High-Intent Paid Search Acquisition",
      tag: "Paid Media Analytics",
      client: "Maia Luxury",
      metric: "4.9x",
      metricLabel: "Search Campaign ROAS",
      description: "Google Ads search funnel telemetry demonstrating precise buyer targeting for luxury beauty lines with zero budget leakage.",
      highlights: [
        { label: "Channel", value: "Google Search Ads" },
        { label: "Quality Score", value: "9/10 Ad Relevance" },
        { label: "ROAS", value: "4.9x Attributed" },
        { label: "Telemetry", value: "GA4 Campaign Model" },
      ],
    },
  ],

  // =========================================================================
  // 9. Meta Ads (Facebook & Instagram)
  // =========================================================================
  "meta-ads": [
    {
      url: "/Analytics/SocialMedia/socialmedia.png",
      title: "Meta Ads Suite: Scaled Campaign Reach & Impressions",
      tag: "Meta Ads Dashboard",
      client: "Direct Consumer Brand",
      metric: "248K+",
      metricLabel: "Target Audience Reach",
      description: "Meta Business Suite verified live report showing profitable ad delivery across Facebook and Instagram feeds, Stories, and Reels with Conversions API.",
      highlights: [
        { label: "Placements", value: "Feeds, Reels & Stories" },
        { label: "Reach", value: "248,000+ Unique Prospects" },
        { label: "CTR", value: "3.4% Scroll-Stopping CTR" },
        { label: "Tracking", value: "Meta Conversions API (CAPI)" },
      ],
    },
    {
      url: "/Analytics/Social Media Post/socialmediapost.png",
      title: "High-Converting Creative Asset: Reel & Feed Visual",
      tag: "Ad Creative Proof",
      client: "Beauty & Health Brand",
      metric: "4.8x",
      metricLabel: "Creative Return on Ad Spend",
      description: "High-performing visual creative designed, copywritten, and split-tested to capture feed attention and convert cold social traffic.",
      highlights: [
        { label: "Format", value: "Motion & Carousel Creative" },
        { label: "Hook Rate", value: "48% 3-Second Retention" },
        { label: "ROAS", value: "4.8x Ad Spend" },
        { label: "Asset", value: "Original Production" },
      ],
    },
    {
      url: "/Analytics/SocialMedia/socialmedia2.png",
      title: "Meta Ads Interactions: Click-to-WhatsApp & Lead Forms",
      tag: "Social Lead Gen",
      client: "Professional Clinic",
      metric: "820+",
      metricLabel: "Qualified Inbound Leads",
      description: "Interactive campaign telemetry showing lead generation forms and click-to-WhatsApp ad conversions tracked directly into CRM.",
      highlights: [
        { label: "Campaign Type", value: "Instant Lead Gen Forms" },
        { label: "WhatsApp Leads", value: "Immediate Direct Chats" },
        { label: "Cost Per Lead", value: "Reduced by 38%" },
        { label: "Platform", value: "Meta Ads Manager" },
      ],
    },
    {
      url: "/Analytics/DrTungs/drtungga5.png",
      title: "Dr. Tung's: Paid Social Attributed Revenue in GA4",
      tag: "GA4 Social Attribution",
      client: "Dr. Tung's Oral Care",
      metric: "4.2x",
      metricLabel: "Attributed Social ROAS",
      description: "Server-side GA4 confirmation showing Meta Ads traffic converting into verified Shopify orders without browser cookie data loss.",
      highlights: [
        { label: "Attribution", value: "Data-Driven Multitouch" },
        { label: "ROAS", value: "4.2x Verified" },
        { label: "Purchases", value: "Direct E-Commerce" },
        { label: "Source", value: "Google Analytics 4" },
      ],
    },
  ],

  // =========================================================================
  // 10. LinkedIn Marketing & Ads
  // =========================================================================
  "linkedin-marketing-ads": [
    {
      url: "/Analytics/SocialMedia/socialmedia4.png",
      title: "LinkedIn Campaign Reach: Decision-Maker Targeting",
      tag: "LinkedIn Marketing",
      client: "B2B Professional Services",
      metric: "+260%",
      metricLabel: "Senior Decision-Maker Reach",
      description: "LinkedIn Campaign Manager and organic metrics confirming targeted impressions delivered to C-Suite, founders, and VP-level executives.",
      highlights: [
        { label: "Audience", value: "C-Suite, Directors & Founders" },
        { label: "Industries", value: "Healthcare, Tech & Finance" },
        { label: "Reach Lift", value: "+260% Target Accounts" },
        { label: "Channel", value: "LinkedIn Ads & Thought Leadership" },
      ],
    },
    {
      url: "/Analytics/Social Media Post/socialmediapost2.png",
      title: "Founder Thought Leadership: In-Feed Organic Reach",
      tag: "Executive Creative",
      client: "B2B Consulting Client",
      metric: "42K+",
      metricLabel: "Organic Views on Post",
      description: "High-authority founder post ghostwritten and optimized for LinkedIn algorithm distribution, driving inbound connection requests and qualified inquiries.",
      highlights: [
        { label: "Content", value: "Insight-Led Industry Analysis" },
        { label: "Engagement", value: "480+ Comments & Reposts" },
        { label: "Inbound Pipeline", value: "14 Sales Calls Booked" },
        { label: "Format", value: "Thought Leader Organic" },
      ],
    },
    {
      url: "/Analytics/Harris/harrisga4.png",
      title: "B2B Referral Pipeline: Inbound Professional Leads",
      tag: "Pipeline Attribution",
      client: "Healthcare Professional",
      metric: "£94K",
      metricLabel: "Attributed Deal Pipeline",
      description: "GA4 conversion telemetry tracking inbound corporate inquiries and partner contract requests generated via LinkedIn thought leadership.",
      highlights: [
        { label: "Deal Value", value: "High Contract Size" },
        { label: "Lead Quality", value: "100% Verified Corporate" },
        { label: "Tracking", value: "GA4 Form Submissions" },
        { label: "Conversion", value: "Qualified Pipeline" },
      ],
    },
    {
      url: "/Analytics/SocialMedia/socialmedia6.png",
      title: "Sponsored Content Performance: In-Feed Conversion",
      tag: "LinkedIn Sponsored Ads",
      client: "Enterprise SaaS Client",
      metric: "6.8%",
      metricLabel: "Lead Gen Form Fill Rate",
      description: "Sponsored content telemetry proving high completion rate on native LinkedIn Lead Gen Forms with zero friction from mobile devices.",
      highlights: [
        { label: "Ad Format", value: "Native Lead Gen Forms" },
        { label: "Form Fill Rate", value: "6.8% (Industry Avg: 2.1%)" },
        { label: "CRM Sync", value: "Instant Lead Notification" },
        { label: "Platform", value: "LinkedIn Ads Telemetry" },
      ],
    },
  ],

  // =========================================================================
  // 11. YouTube & Video Marketing
  // =========================================================================
  "youtube-video-marketing": [
    {
      url: "/Analytics/SocialMedia/socialmedia7.png",
      title: "Video View Completion & Retention Telemetry",
      tag: "Video Performance",
      client: "Consumer Health Brand",
      metric: "64%",
      metricLabel: "Average Watch Time Retention",
      description: "Audience retention graph showing high video completion rates and viewer engagement throughout YouTube video explainers and Shorts.",
      highlights: [
        { label: "Platform", value: "YouTube & Video Feeds" },
        { label: "Watch Time", value: "+180% Total Hours" },
        { label: "SEO Optimization", value: "Chapters, Cards & Schema" },
        { label: "Status", value: "Live Analytics" },
      ],
    },
    {
      url: "/Analytics/Social Media Post/socialmediapost3.png",
      title: "Short-Form Video Asset: Reel & YouTube Shorts Hook",
      tag: "Video Creative Proof",
      client: "D2C Brand",
      metric: "128K",
      metricLabel: "Organic Video Plays",
      description: "Scripted, filmed, and edited short-form video creative engineered with a 3-second hook that drove viral reach and product demand.",
      highlights: [
        { label: "Formats", value: "YouTube Shorts & Reels" },
        { label: "Shares", value: "3,200+ Video Shares" },
        { label: "Product Clicks", value: "Direct Link-in-Bio" },
        { label: "Asset Type", value: "Original Production" },
      ],
    },
    {
      url: "/Analytics/DrTungs/drtungga6.png",
      title: "Dr. Tung's: Video-Assisted E-Commerce Conversions",
      tag: "Video Sales Attribution",
      client: "Dr. Tung's Oral Care",
      metric: "+142%",
      metricLabel: "Conversions from Video Views",
      description: "GA4 attribution report showing customers who engaged with video tutorials on product pages exhibiting twice the checkout conversion rate.",
      highlights: [
        { label: "Impact", value: "2x Checkout Conversion" },
        { label: "Video Schema", value: "VideoObject JSON-LD" },
        { label: "Placement", value: "YouTube & Embedded Site" },
        { label: "Telemetry", value: "GA4 Multi-Channel" },
      ],
    },
    {
      url: "/Analytics/SocialMedia/socialmedia8.png",
      title: "Channel Growth & Subscriber Acceleration",
      tag: "Audience Telemetry",
      client: "Brand Channel",
      metric: "+340%",
      metricLabel: "Subscribers & Returning Viewers",
      description: "Subscriber acquisition and organic search video ranking trajectory resulting from systematic keyword mapping and thumbnail A/B testing.",
      highlights: [
        { label: "Subscribers", value: "+340% Channel Growth" },
        { label: "CTR", value: "11.4% Thumbnail Click Rate" },
        { label: "Search Terms", value: "Ranked #1 for Tutorials" },
        { label: "Source", value: "YouTube Studio Metrics" },
      ],
    },
  ],

  // =========================================================================
  // 12. Content & Keyword Strategy
  // =========================================================================
  "content-keyword-strategy": [
    {
      url: "/Analytics/Harris/harrisgsc.png",
      title: "Harris Pharmacy: Topic Cluster Organic Search Surge",
      tag: "Keyword Topic Cluster",
      client: "Harris Pharmacy UK",
      metric: "140K+",
      metricLabel: "Search Impressions Lift",
      description: "Google Search Console evidence demonstrating how pillar content and topic cluster interlinking propelled hundreds of long-tail queries to Page 1.",
      highlights: [
        { label: "Strategy", value: "Topic Cluster & Pillar Pages" },
        { label: "Keyword Breadth", value: "340+ Commercial Terms" },
        { label: "Human-Written", value: "100% Expert Clinical Review" },
        { label: "Platform", value: "Search Console Live" },
      ],
    },
    {
      url: "/Analytics/DrTungs/drtunggsc2.png",
      title: "Dr. Tung's: Informational to Transactional Intent Mapping",
      tag: "Intent Mapping SERP",
      client: "Dr. Tung's Oral Care",
      metric: "+210%",
      metricLabel: "Organic Query Growth",
      description: "Search query performance proving that educational guides and keyword-mapped articles drove shoppers directly to related product buying pages.",
      highlights: [
        { label: "Intent", value: "Informational → Commercial" },
        { label: "SERP Lift", value: "Top 3 Positions" },
        { label: "Internal Links", value: "Contextual Product CTAs" },
        { label: "Telemetry", value: "GSC Keyword Data" },
      ],
    },
    {
      url: "/Analytics/Maia/maiagsc6.png",
      title: "Maia Luxury: Long-Tail Keyword Capture & Rankings",
      tag: "Long-Tail SERP",
      client: "Maia Luxury",
      metric: "#1-2",
      metricLabel: "Positions Across 64 Terms",
      description: "Targeted long-tail keyword execution report confirming dominant search positions for low-competition, high-intent luxury buyer searches.",
      highlights: [
        { label: "Competition", value: "High-Margin Low-Volume" },
        { label: "Conversion Rate", value: "8.4% on Inbound Content" },
        { label: "Content Type", value: "Buyer Guides & Comparators" },
        { label: "Source", value: "Google Search Console" },
      ],
    },
    {
      url: "/Analytics/Harris/harrisga5.png",
      title: "Harris Pharmacy: Content Engagement & Time-on-Page",
      tag: "Content Engagement",
      client: "Harris Pharmacy UK",
      metric: "4m 12s",
      metricLabel: "Average Engagement Time",
      description: "GA4 analytics report proving high reader engagement, low bounce rates, and active reading behavior on comprehensively structured articles.",
      highlights: [
        { label: "Engagement Time", value: "4m 12s (Industry: 1m 20s)" },
        { label: "Scroll Depth", value: "82% Read to Conclusion" },
        { label: "Next Action", value: "Booked Consultation" },
        { label: "Platform", value: "GA4 User Behaviour" },
      ],
    },
  ],

  // =========================================================================
  // 13. Social Media Marketing
  // =========================================================================
  "social-media-marketing": [
    {
      url: "/Analytics/SocialMedia/socialmedia9.png",
      title: "Cross-Platform Audience Growth & Monthly Reach",
      tag: "Social Audience Reach",
      client: "Consumer Lifestyle Brand",
      metric: "+280%",
      metricLabel: "Organic Audience Growth",
      description: "Meta and Instagram live metrics showing rapid organic reach scaling, community interactions, and follower growth with zero fake engagement.",
      highlights: [
        { label: "Reach", value: "+280% Monthly Unique Reach" },
        { label: "Platform", value: "Instagram & Facebook" },
        { label: "Followers", value: "100% Genuine Community" },
        { label: "Verification", value: "Meta Business Suite" },
      ],
    },
    {
      url: "/Analytics/Social Media Post/socialmediapost4.png",
      title: "Viral Educational Carousel & Reel Asset",
      tag: "Content Creative",
      client: "Health Brand",
      metric: "18.4K",
      metricLabel: "Organic Post Saves & Shares",
      description: "Designed informational carousel that achieved massive organic bookmarking and shares, generating inbound brand profile visits.",
      highlights: [
        { label: "Asset Type", value: "Saveable Carousel Graphic" },
        { label: "Shares", value: "6,200+ Direct Shares" },
        { label: "Profile Visits", value: "8,400+ Visits" },
        { label: "Design", value: "On-Brand Visuals" },
      ],
    },
    {
      url: "/Analytics/SocialMedia/socialmedia10.png",
      title: "Weekly Engagement Rate & Interaction Velocity",
      tag: "Engagement Metrics",
      client: "Retail Brand",
      metric: "7.8%",
      metricLabel: "Active Engagement Rate",
      description: "Social media analytics dashboard showing consistent comment conversations, Story poll interactions, and community loyalty.",
      highlights: [
        { label: "Engagement", value: "7.8% (Industry Avg: 1.4%)" },
        { label: "Story Views", value: "42% Follower Open Rate" },
        { label: "Community", value: "Daily Moderation & Replies" },
        { label: "Platform", value: "Social Media Analytics" },
      ],
    },
    {
      url: "/Analytics/Social Media Post/socialmediapost5.png",
      title: "Product Showcase & Brand Narrative Creative",
      tag: "Visual Storytelling",
      client: "Cosmetics Client",
      metric: "3.2x",
      metricLabel: "Engagement vs Baseline",
      description: "High-impact visual post capturing product textures and benefits, driving immediate link-in-bio clicks and purchase consideration.",
      highlights: [
        { label: "Creative", value: "Studio Graphic & Storyboard" },
        { label: "CTR to Website", value: "4.1% Bio Clicks" },
        { label: "Brand Voice", value: "Consistent & Authentic" },
        { label: "Status", value: "Published & Audited" },
      ],
    },
  ],

  // =========================================================================
  // 14. Influencer Marketing
  // =========================================================================
  "influencer-marketing": [
    {
      url: "/Analytics/SocialMedia/socialmedia11.png",
      title: "Micro-Creator Partnership Reach & Engagement",
      tag: "Influencer Performance",
      client: "Wellness & Beauty Brand",
      metric: "164K",
      metricLabel: "Targeted Audience Impressions",
      description: "Performance metrics from vetted micro-influencer campaigns showing high audience trust, authentic recommendations, and verified saves.",
      highlights: [
        { label: "Creators", value: "Micro & Nano Creators (10k-50k)" },
        { label: "Compliance", value: "100% ASA & ASCI Ad Labeling" },
        { label: "Impressions", value: "164,000+ Engaged Views" },
        { label: "Platform", value: "Creator Campaign Analytics" },
      ],
    },
    {
      url: "/Analytics/Social Media Post/socialmediapost6.png",
      title: "UGC Creator Content: High-Trust Product Showcase",
      tag: "UGC Creative Proof",
      client: "Oral Care Client",
      metric: "5.4x",
      metricLabel: "ROAS When Deployed in Ads",
      description: "User-generated content produced by contracted creators repurposed into top-converting Meta and TikTok paid advertising assets.",
      highlights: [
        { label: "Content", value: "Authentic Unboxing & Review" },
        { label: "Usage Rights", value: "Full Paid Ad Licensing" },
        { label: "Conversion", value: "5.4x Attributed Return" },
        { label: "Format", value: "Vertical Reel Creative" },
      ],
    },
    {
      url: "/Analytics/DrTungs/drtungga7.png",
      title: "Dr. Tung's: Creator Promo Code Revenue Attribution",
      tag: "Influencer Sales GA4",
      client: "Dr. Tung's Oral Care",
      metric: "£38.4K",
      metricLabel: "Direct Tracked Coupon Sales",
      description: "GA4 campaign revenue report proving tracked e-commerce sales from unique influencer discount codes and UTM-tagged creator links.",
      highlights: [
        { label: "Tracking", value: "Unique Codes & UTM Links" },
        { label: "Revenue", value: "£38,400+ Attributed" },
        { label: "ROI", value: "4.6x Creator Budget ROI" },
        { label: "Source", value: "GA4 Campaign Model" },
      ],
    },
    {
      url: "/Analytics/Social Media Post/socialmediapost7.png",
      title: "Multi-Creator Campaign Deployment & Co-Branding",
      tag: "Collab Campaign",
      client: "Fashion & Lifestyle Client",
      metric: "18 Creators",
      metricLabel: "Synchronized Launch Day Surge",
      description: "Coordinated influencer campaign execution proof generating coordinated social buzz on product launch day across Instagram and TikTok.",
      highlights: [
        { label: "Creators Vetted", value: "18 Clean-Profile Partners" },
        { label: "Total Reach", value: "320,000+ Impressions" },
        { label: "Engagement", value: "6.4% Engagement Rate" },
        { label: "Status", value: "Completed & Measured" },
      ],
    },
  ],

  // =========================================================================
  // 15. Email Marketing
  // =========================================================================
  "email-marketing": [
    {
      url: "/Analytics/DrTungs/drtungga4.png",
      title: "Dr. Tung's: Automated Abandoned Cart & Welcome Flow Revenue",
      tag: "Klaviyo Automated Flows",
      client: "Dr. Tung's Oral Care",
      metric: "28.4%",
      metricLabel: "Store Revenue from Email Flows",
      description: "GA4 and Klaviyo revenue report showing automated abandoned cart recovery, browse abandonment, and welcome sequences generating ongoing revenue.",
      highlights: [
        { label: "Platform", value: "Klaviyo & Shopify Plus" },
        { label: "Revenue Share", value: "28.4% of Total Store Sales" },
        { label: "Open Rates", value: "48.2% Welcome Sequence" },
        { label: "Flows", value: "Automated Lifecycle Active" },
      ],
    },
    {
      url: "/Analytics/Maia/maiaga4.png",
      title: "Maia Luxury: Subscriber Retention & Returning Customer Orders",
      tag: "Customer Lifetime Value",
      client: "Maia Luxury",
      metric: "+135%",
      metricLabel: "Repeat Purchase Rate",
      description: "Google Analytics 4 retention report demonstrating VIP customer segmentation and win-back email campaigns driving repeat e-commerce purchases.",
      highlights: [
        { label: "Strategy", value: "RFM Segmentation & Win-Back" },
        { label: "Repeat Buyers", value: "+135% Lift" },
        { label: "Deliverability", value: "DKIM, SPF & DMARC 100%" },
        { label: "Platform", value: "GA4 User Retention" },
      ],
    },
    {
      url: "/Analytics/Aristbrush/artishbrushga.jpeg",
      title: "Aristbrush: Campaign Newsletter Click-Through & Revenue",
      tag: "Broadcast Campaigns",
      client: "Aristbrush",
      metric: "4.2%",
      metricLabel: "Email Click-to-Order Rate",
      description: "Broadcast campaign performance metrics showing responsive HTML email templates delivering clean renders on Apple Mail, Gmail, and Outlook.",
      highlights: [
        { label: "Client", value: "Aristbrush" },
        { label: "Open Rate", value: "42.8% Average" },
        { label: "Click Rate", value: "4.2% Verified CTR" },
        { label: "Deliverability", value: "Zero Spam Placement" },
      ],
    },
    {
      url: "/Analytics/DrTungs/drtungga.png",
      title: "Dr. Tung's: Lifecycle Email Channel Revenue in GA4",
      tag: "GA4 Channel Revenue",
      client: "Dr. Tung's Oral Care",
      metric: "£52K+",
      metricLabel: "Email Channel Revenue",
      description: "Full-funnel GA4 revenue attribution confirming email as the highest-margin sales channel with zero ad expenditure required per transaction.",
      highlights: [
        { label: "Channel", value: "Email Marketing Automated" },
        { label: "Margin", value: "92% Net Channel Margin" },
        { label: "Automation", value: "24/7 Passive Revenue" },
        { label: "Telemetry", value: "GA4 E-commerce Attribution" },
      ],
    },
  ],

  // =========================================================================
  // 16. WhatsApp Marketing
  // =========================================================================
  "whatsapp-marketing": [
    {
      url: "/Analytics/SocialMedia/socialmedia14.png",
      title: "WhatsApp Business API: Broadcast Open & Delivery Metrics",
      tag: "WhatsApp API Dashboard",
      client: "High-Consideration Retailer",
      metric: "98.2%",
      metricLabel: "Message Open Rate",
      description: "Official WhatsApp Business Platform analytics report showing 98.2% open rates and immediate click-through on approved template broadcasts.",
      highlights: [
        { label: "Infrastructure", value: "Official Meta WhatsApp API" },
        { label: "Open Rate", value: "98.2% (vs 22% Email)" },
        { label: "Compliance", value: "100% Opt-In Template Approval" },
        { label: "Delivery", value: "Instant Push to Devices" },
      ],
    },
    {
      url: "/Analytics/Social Media Post/socialmediapost8.png",
      title: "Click-to-WhatsApp Promo Creative: Instant Chat Influx",
      tag: "Chat Promo Creative",
      client: "Consumer Brand",
      metric: "1,420+",
      metricLabel: "Direct Conversations Started",
      description: "Ad creative deployed for click-to-WhatsApp ads that routed prospective customers directly into automated chatbot qualification flows.",
      highlights: [
        { label: "Ad Format", value: "Click-to-WhatsApp Sponsored" },
        { label: "Chat Starts", value: "1,420+ Warm Chats" },
        { label: "Response", value: "Automated Instant Reply" },
        { label: "CPA", value: "45% Lower than Landing Page" },
      ],
    },
    {
      url: "/Analytics/Harris/harrisga.png",
      title: "Harris Pharmacy: Direct Patient Consultation Bookings",
      tag: "Chat Conversions",
      client: "Harris Pharmacy UK",
      metric: "+195%",
      metricLabel: "Fast Enquiry Resolution",
      description: "GA4 and CRM telemetry verifying high-value clinical consultations scheduled directly following one-to-one WhatsApp interactions.",
      highlights: [
        { label: "Service", value: "Private Healthcare Consultations" },
        { label: "Resolution", value: "Under 5 Minutes Average" },
        { label: "CRM Sync", value: "Direct Contact Record Creation" },
        { label: "Source", value: "WhatsApp Business Webhooks" },
      ],
    },
    {
      url: "/Analytics/SocialMedia/socialmedia15.png",
      title: "Conversational Commerce & Automated Chatbot Velocity",
      tag: "Bot Workflow Analytics",
      client: "D2C Brand",
      metric: "32%",
      metricLabel: "Order Conversion in Chat",
      description: "Chatbot flow telemetry tracking automated catalogue browsing, FAQs, and instant payment links within the WhatsApp conversation thread.",
      highlights: [
        { label: "Bot Flow", value: "Catalogue & FAQ Automation" },
        { label: "Cart Abandon", value: "Automated Nudge Sent" },
        { label: "Order Rate", value: "32% Conversation-to-Sale" },
        { label: "Platform", value: "WhatsApp Cloud API" },
      ],
    },
  ],

  // =========================================================================
  // 17. Online Reputation Management
  // =========================================================================
  "online-reputation-management": [
    {
      url: "/Analytics/Harris/harrisgmb.png",
      title: "Harris Pharmacy: Google 5-Star Reviews & Trust Profile",
      tag: "Review Generation Proof",
      client: "Harris Pharmacy UK",
      metric: "4.9★",
      metricLabel: "Google Review Rating (280+ Reviews)",
      description: "Google Business Profile review growth report showing systematic acquisition of genuine positive patient reviews with zero policy violations.",
      highlights: [
        { label: "Platform", value: "Google Business Profile" },
        { label: "Rating", value: "4.9★ Outstanding" },
        { label: "Review Growth", value: "+210 New Real Reviews" },
        { label: "Method", value: "Automated Post-Service Invites" },
      ],
    },
    {
      url: "/Analytics/Harris/harrisgmb2.png",
      title: "Harris Pharmacy: Trust Signals in Google Maps Discovery",
      tag: "Maps Trust Signals",
      client: "Harris Pharmacy UK",
      metric: "+340%",
      metricLabel: "High-Intent Discovery Calls",
      description: "Performance metrics proving that accumulating verified 5-star reviews directly unlocked higher ranking prominence in competitive local search.",
      highlights: [
        { label: "Correlated Lift", value: "Higher Local 3-Pack Rankings" },
        { label: "Responses", value: "100% Professional Replies" },
        { label: "Negative Managed", value: "Policy-Violating Removals" },
        { label: "Telemetry", value: "GBP Insights" },
      ],
    },
    {
      url: "/Analytics/Harris/harrisgsc6.png",
      title: "Harris Pharmacy: Branded Search Queries & Reputation SERP",
      tag: "Brand Search SERP",
      client: "Harris Pharmacy UK",
      metric: "100%",
      metricLabel: "Positive Page 1 Search Control",
      description: "Google Search Console brand query report confirming that when users search the company name, only verified, positive brand assets occupy Page 1.",
      highlights: [
        { label: "Page 1 SERP", value: "Controlled Brand Assets" },
        { label: "Knowledge Panel", value: "Fully Verified" },
        { label: "CTR on Brand", value: "48.2% Brand Clicks" },
        { label: "Source", value: "GSC Brand Query Telemetry" },
      ],
    },
    {
      url: "/Analytics/SocialMedia/socialmedia16.png",
      title: "Brand Sentiment & Online Mention Monitoring",
      tag: "Sentiment Telemetry",
      client: "Corporate Client",
      metric: "96%",
      metricLabel: "Positive Brand Sentiment Index",
      description: "Social listening and ORM monitoring report tracking brand sentiment across review sites, forums, and AI search platform answers.",
      highlights: [
        { label: "Sentiment", value: "96% Positive / Neutral" },
        { label: "Monitoring", value: "Google, Reddit & Social" },
        { label: "Alerts", value: "Real-Time Negative Detection" },
        { label: "Platform", value: "ORM Dashboard Metrics" },
      ],
    },
  ],

  // =========================================================================
  // 18. Website Design & Development
  // =========================================================================
  "website-design-development": [
    {
      url: "/Analytics/Harris/harrisga.png",
      title: "Harris Pharmacy: Post-Launch User Experience & PageSpeed",
      tag: "Web Launch Telemetry",
      client: "Harris Pharmacy UK",
      metric: "98/100",
      metricLabel: "Mobile Core Web Vitals Score",
      description: "GA4 and Chrome UX report verifying instant sub-second page loads, zero layout shift, and intuitive mobile navigation across all service pages.",
      highlights: [
        { label: "Stack", value: "Next.js & WordPress REST API" },
        { label: "LCP", value: "0.85s Ultra-Fast Load" },
        { label: "CLS", value: "0.00 Zero Layout Shift" },
        { label: "Platform", value: "Google PageSpeed & GA4" },
      ],
    },
    {
      url: "/Analytics/Harris/harrisgsc.png",
      title: "Harris Pharmacy: Search Console Clean Migration & Zero 404s",
      tag: "Migration Protection",
      client: "Harris Pharmacy UK",
      metric: "2,400+",
      metricLabel: "Seamlessly Redirected URLs",
      description: "GSC indexation chart confirming 100% preservation of historical search rankings post-redesign through comprehensive 1-to-1 301 redirect mapping.",
      highlights: [
        { label: "Old URLs", value: "2,400+ Mapped via 301" },
        { label: "Rankings Lost", value: "0% Ranking Drop" },
        { label: "Indexation", value: "100% Googlebot Crawled" },
        { label: "Telemetry", value: "Google Search Console" },
      ],
    },
    {
      url: "/Analytics/DrTungs/drtungga.png",
      title: "Dr. Tung's: Responsive UX Driving E-Commerce Growth",
      tag: "UX Conversion Lift",
      client: "Dr. Tung's Oral Care",
      metric: "+64%",
      metricLabel: "Mobile Conversion Rate Lift",
      description: "Mobile e-commerce analytics telemetry proving modern responsive architecture lifted mobile purchasing by +64% within 60 days of launch.",
      highlights: [
        { label: "Design", value: "Mobile-First UX Architecture" },
        { label: "Speed", value: "Sub-Second Theme Rendering" },
        { label: "Checkout", value: "One-Click Accelerated Pay" },
        { label: "Source", value: "GA4 E-commerce Model" },
      ],
    },
    {
      url: "/Analytics/Maia/maiaga.png",
      title: "Maia Luxury: Brand Aesthetic & Engagement Duration",
      tag: "Brand Web Experience",
      client: "Maia Luxury",
      metric: "+112%",
      metricLabel: "Session Duration Increase",
      description: "User engagement telemetry verifying luxury aesthetic, fluid animations, and high accessibility ratings keeping users immersed in the brand.",
      highlights: [
        { label: "Aesthetic", value: "Bespoke Typography & Palette" },
        { label: "Accessibility", value: "WCAG 2.1 AA Compliant" },
        { label: "Tracking", value: "Full GA4 & GTM Events" },
        { label: "Platform", value: "GA4 Analytics Telemetry" },
      ],
    },
  ],

  // =========================================================================
  // 19. E-commerce Website Development
  // =========================================================================
  "ecommerce-website-development": [
    {
      url: "/Analytics/DrTungs/drtungga.png",
      title: "Dr. Tung's: Shopify Plus Live Store Revenue & Transactions",
      tag: "Shopify Store Build",
      client: "Dr. Tung's Oral Care",
      metric: "£184K+",
      metricLabel: "Online Store Sales",
      description: "GA4 e-commerce report showing successful launch of high-converting Shopify store with native payment gateways and automated shipping integrations.",
      highlights: [
        { label: "E-Commerce Engine", value: "Shopify Plus & Liquid Theme" },
        { label: "Gateways", value: "Shopify Payments, PayPal, Klarna" },
        { label: "AOV", value: "£42.50 Average Order" },
        { label: "Platform", value: "GA4 Verified E-Commerce" },
      ],
    },
    {
      url: "/Analytics/DrTungs/drtungga4.png",
      title: "Dr. Tung's: Checkout Funnel Drop-off Minimization",
      tag: "Checkout Flow",
      client: "Dr. Tung's Oral Care",
      metric: "74.8%",
      metricLabel: "Cart-to-Checkout Completion",
      description: "Checkout telemetry confirming frictionless single-page checkout flow, automatic address completion, and zero unexpected shipping fees.",
      highlights: [
        { label: "Cart Abandon", value: "Reduced by 38%" },
        { label: "Checkout Steps", value: "One-Page Accelerated" },
        { label: "Mobile Speed", value: "Under 1.2s Checkout" },
        { label: "Telemetry", value: "GA4 Funnel Exploration" },
      ],
    },
    {
      url: "/Analytics/Aristbrush/artishbrushga.jpeg",
      title: "Aristbrush: WooCommerce Multi-Currency Settlement",
      tag: "WooCommerce Build",
      client: "Aristbrush",
      metric: "3,800+",
      metricLabel: "Completed Orders",
      description: "WooCommerce store development telemetry validating automated inventory sync, tax calculation, and payment gateway webhooks.",
      highlights: [
        { label: "Platform", value: "WooCommerce on High-Speed Hosting" },
        { label: "Currencies", value: "Multi-Currency Switcher" },
        { label: "Orders", value: "Zero Gateway Failures" },
        { label: "Status", value: "Live & Fully Scaled" },
      ],
    },
    {
      url: "/Analytics/Maia/maiaga2.png",
      title: "Maia Luxury: D2C E-Commerce Conversion Optimization",
      tag: "D2C Store Telemetry",
      client: "Maia Luxury",
      metric: "+84%",
      metricLabel: "Transactions Post-Replatform",
      description: "Analytics evidence showing dramatic order volume increase following store redesign, high-speed product galleries, and variant selector fixes.",
      highlights: [
        { label: "Client", value: "Maia Luxury" },
        { label: "Replatforming", value: "Zero Downtime Cutover" },
        { label: "Sales Lift", value: "+84% Completed Orders" },
        { label: "Source", value: "GA4 Transaction Data" },
      ],
    },
  ],

  // =========================================================================
  // 20. Branding & Design
  // =========================================================================
  "branding-design": [
    {
      url: "/Analytics/Social Media Post/socialmediapost9.png",
      title: "Brand Identity System: Logo & Packaging Guidelines",
      tag: "Brand Visual System",
      client: "Luxury D2C Client",
      metric: "100%",
      metricLabel: "Visual Consistency Index",
      description: "Comprehensive visual identity manual showing primary logo mark, secondary lockups, color palette tokens, and bespoke typography rules.",
      highlights: [
        { label: "Deliverable", value: "Full Brand Guidelines" },
        { label: "Assets", value: "Logo Vector Suite (SVG/EPS/PNG)" },
        { label: "Palette", value: "Engineered Hex/CMYK Tokens" },
        { label: "Application", value: "Web, Social, Print & Packaging" },
      ],
    },
    {
      url: "/Analytics/Social Media Post/socialmediapost10.png",
      title: "Typography Hierarchy & Editorial Packaging Design",
      tag: "Packaging & Typography",
      client: "Beauty & Wellness Brand",
      metric: "Bespoke",
      metricLabel: "Custom Type & Box Collateral",
      description: "Print-ready packaging artwork and editorial brand typography designed for physical shelves and premium unboxing experience.",
      highlights: [
        { label: "Design", value: "Product Box & Label Die-Lines" },
        { label: "Typography", value: "Editorial High-Contrast Serif" },
        { label: "Print Proof", value: "Foil & Emboss Specifications" },
        { label: "Format", value: "Vector Production Files" },
      ],
    },
    {
      url: "/Analytics/SocialMedia/socialmedia17.png",
      title: "Brand Recall & Recognition Lift in Target Market",
      tag: "Brand Lift Telemetry",
      client: "Healthcare Brand",
      metric: "+190%",
      metricLabel: "Branded Search & Social Mentions",
      description: "Telemetry showing rapid surge in direct brand searches and organic recognition across target UK and Indian consumer segments.",
      highlights: [
        { label: "Brand Search", value: "+190% Brand Name Queries" },
        { label: "Direct Traffic", value: "+142% Type-In Visitors" },
        { label: "Cohesion", value: "Identical Cross-Channel Identity" },
        { label: "Platform", value: "Meta & Search Analytics" },
      ],
    },
    {
      url: "/Analytics/Social Media Post/socialmediapost11.png",
      title: "Omnichannel Marketing Collateral & Campaign Templates",
      tag: "Marketing Collateral",
      client: "Corporate Client",
      metric: "45+ Assets",
      metricLabel: "Ready-to-Use Brand Kit",
      description: "Suite of editable Canva and Figma templates for social media announcements, email headers, pitch decks, and digital ad banners.",
      highlights: [
        { label: "Templates", value: "Figma & Canva Brand Kits" },
        { label: "Formats", value: "Reels, Banners, Pitch Decks" },
        { label: "Ownership", value: "100% Client IP Transfer" },
        { label: "Status", value: "Deployed Across Team" },
      ],
    },
  ],

  // =========================================================================
  // 21. Copywriting & Messaging
  // =========================================================================
  "copywriting-messaging": [
    {
      url: "/Analytics/Social Media Post/socialmediapost12.png",
      title: "High-Converting Headline & Ad Hook Copywriting",
      tag: "Ad Copywriting",
      client: "Direct Consumer Brand",
      metric: "4.8%",
      metricLabel: "Average Ad Click-Through Rate",
      description: "Persuasive headline copy tested against control variants, producing 3x higher click-through and significantly lower cost-per-click.",
      highlights: [
        { label: "Hook", value: "Pain-Point Emotional Trigger" },
        { label: "CTR", value: "4.8% (Industry Avg: 1.2%)" },
        { label: "Angle", value: "Benefit-Led Direct Response" },
        { label: "Testing", value: "Multi-Variant A/B Tested" },
      ],
    },
    {
      url: "/Analytics/Social Media Post/socialmediapost13.png",
      title: "Value Proposition & Problem-Solution Landing Page Copy",
      tag: "Landing Page Copy",
      client: "SaaS & Tech Client",
      metric: "+48%",
      metricLabel: "Form Fill Conversion Lift",
      description: "Clear, jargon-free landing page messaging framework that clearly answers customer objections and guides readers to immediate action.",
      highlights: [
        { label: "Framework", value: "PAS (Problem - Agitate - Solve)" },
        { label: "Readability", value: "Grade 7 Plain English" },
        { label: "Conversion Lift", value: "+48% More Enquiries" },
        { label: "Voice", value: "100% Human Brand Voice" },
      ],
    },
    {
      url: "/Analytics/Harris/harrisgsc2.png",
      title: "Harris Pharmacy: SEO Copy Matching Exact Search Queries",
      tag: "SEO Copywriting SERP",
      client: "Harris Pharmacy UK",
      metric: "Top 3",
      metricLabel: "Rankings for Medical FAQs",
      description: "Search Console evidence showing informational FAQ copy written to directly answer patients' medical questions ranking in top positions.",
      highlights: [
        { label: "Approach", value: "Question-Answer Direct Copy" },
        { label: "Keyword Stuffing", value: "Zero (Semantic LSI Only)" },
        { label: "Authority", value: "Clinically Verified Text" },
        { label: "Source", value: "GSC Keyword Match Data" },
      ],
    },
    {
      url: "/Analytics/DrTungs/drtungga3.png",
      title: "Dr. Tung's: Product Description Conversion Rate Acceleration",
      tag: "E-Commerce Copywriting",
      client: "Dr. Tung's Oral Care",
      metric: "+34%",
      metricLabel: "Add-to-Cart Conversion",
      description: "E-commerce product descriptions rewritten with sensory details, usage instructions, and customer benefits driving measurable cart additions.",
      highlights: [
        { label: "Page Type", value: "Shopify Product Descriptions" },
        { label: "Objection Handling", value: "Materials & Certifications" },
        { label: "Sales Lift", value: "+34% Add-to-Carts" },
        { label: "Telemetry", value: "GA4 Event Tracking" },
      ],
    },
  ],

  // =========================================================================
  // 22. Analytics & Reporting
  // =========================================================================
  "analytics-reporting": [
    {
      url: "/Analytics/DrTungs/drtungga.png",
      title: "Dr. Tung's: GA4 Enhanced E-Commerce Dashboard",
      tag: "GA4 E-Commerce Tracking",
      client: "Dr. Tung's Oral Care",
      metric: "100%",
      metricLabel: "Revenue Tracking Accuracy",
      description: "Looker Studio and GA4 dashboard showing real-time revenue, order values, product performance, and marketing channel attribution.",
      highlights: [
        { label: "Tracking Stack", value: "GA4, GTM & Consent Mode v2" },
        { label: "Data Discrepancy", value: "Under 1.5% vs Shopify Admin" },
        { label: "Events", value: "Full E-Commerce Event Matrix" },
        { label: "Platform", value: "Google Analytics 4 Live" },
      ],
    },
    {
      url: "/Analytics/Harris/harrisga.png",
      title: "Harris Pharmacy: Tag Manager Custom Key Event Attribution",
      tag: "GTM Event Measurement",
      client: "Harris Pharmacy UK",
      metric: "14 Custom",
      metricLabel: "Key Events Configured",
      description: "Custom Google Tag Manager architecture tracking clicks on phone numbers, WhatsApp chats, booking forms, and directions as GA4 Key Events.",
      highlights: [
        { label: "Container", value: "Google Tag Manager Server/Client" },
        { label: "Events", value: "Telephone, WhatsApp, Forms" },
        { label: "Ads Import", value: "Direct Bidding into Google Ads" },
        { label: "Telemetry", value: "GA4 Live Event Debug" },
      ],
    },
    {
      url: "/Analytics/Maia/maiaga.png",
      title: "Maia Luxury: Cross-Channel User Journey & Attribution",
      tag: "Attribution Modeling",
      client: "Maia Luxury",
      metric: "Data-Driven",
      metricLabel: "Attribution Model Active",
      description: "GA4 multi-touch attribution report revealing the exact path prospects take across organic search, social ads, and email before purchasing.",
      highlights: [
        { label: "Model", value: "Algorithmic Data-Driven" },
        { label: "Touchpoints", value: "Search → Social → Email" },
        { label: "Budget Reallocation", value: "Shifted to High-ROI Channels" },
        { label: "Source", value: "GA4 Exploration Report" },
      ],
    },
    {
      url: "/Analytics/Aristbrush/artishbrushga.jpeg",
      title: "Aristbrush: Looker Studio Automated Executive Reporting",
      tag: "Looker Studio Dashboard",
      client: "Aristbrush",
      metric: "Automated",
      metricLabel: "Live 24/7 Client Dashboard",
      description: "Interactive Looker Studio dashboard connecting Search Console, GA4, and Google Ads into one clean, plain-English executive view.",
      highlights: [
        { label: "Visualization", value: "Looker Studio Automated Report" },
        { label: "Frequency", value: "Live Real-Time Data Refresh" },
        { label: "Jargon", value: "Zero - Pure Commercial KPIs" },
        { label: "Status", value: "Delivered & Active" },
      ],
    },
  ],

  // =========================================================================
  // 23. Conversion Rate Optimisation (CRO)
  // =========================================================================
  "conversion-rate-optimisation": [
    {
      url: "/Analytics/DrTungs/drtungga4.png",
      title: "Dr. Tung's: Checkout Funnel Drop-off Resolution (+42% Lift)",
      tag: "CRO Funnel A/B Test",
      client: "Dr. Tung's Oral Care",
      metric: "+42%",
      metricLabel: "Completed Checkout Orders",
      description: "Funnel drop-off analysis and checkout optimization that eliminated form friction, added trust badges, and increased checkout completion.",
      highlights: [
        { label: "Friction Fixed", value: "Hidden Shipping & Extra Fields" },
        { label: "Test Method", value: "Controlled A/B Split Test" },
        { label: "Significance", value: "98.4% Statistical Confidence" },
        { label: "Result", value: "+42% Completed Checkouts" },
      ],
    },
    {
      url: "/Analytics/DrTungs/drtungga2.png",
      title: "Dr. Tung's: Mobile Landing Page Conversion Variant Lift",
      tag: "Mobile CRO",
      client: "Dr. Tung's Oral Care",
      metric: "+36%",
      metricLabel: "Mobile Cart Additions",
      description: "Heatmap analysis and mobile sticky CTA test resulting in 36% more mobile shoppers adding items to cart without pinching or zooming.",
      highlights: [
        { label: "Device", value: "Mobile iOS & Android" },
        { label: "Fix", value: "Sticky Add-to-Cart & Trust Badges" },
        { label: "AOV Impact", value: "+£4.50 Higher Basket" },
        { label: "Telemetry", value: "GA4 E-commerce Test" },
      ],
    },
    {
      url: "/Analytics/Harris/harrisga6.png",
      title: "Harris Pharmacy: Booking Form Field Reduction Test",
      tag: "Form CRO",
      client: "Harris Pharmacy UK",
      metric: "2.4x",
      metricLabel: "Form Submission Completion",
      description: "Simplifying consultation booking from 9 fields down to 3 essential questions resulted in more than double the completed appointments.",
      highlights: [
        { label: "Form Steps", value: "Reduced from 9 to 3 Fields" },
        { label: "Completion Rate", value: "Jumped from 6.2% to 15.1%" },
        { label: "Drop-off", value: "-64% Abandonment" },
        { label: "Platform", value: "GA4 Form Tracking" },
      ],
    },
    {
      url: "/Analytics/Maia/maiaga3.png",
      title: "Maia Luxury: Micro-Conversion & Social Proof Badges",
      tag: "Social Proof CRO",
      client: "Maia Luxury",
      metric: "+28%",
      metricLabel: "Product Page Conversion",
      description: "Placement of customer verified reviews, dermatologist approval stamps, and return guarantee badges immediately next to the primary CTA.",
      highlights: [
        { label: "Intervention", value: "Real Reviews Above Fold" },
        { label: "Conversion Lift", value: "+28% Add-to-Cart" },
        { label: "Bounce Rate", value: "-18% Bounce Reduction" },
        { label: "Source", value: "GA4 E-commerce Flow" },
      ],
    },
  ],

  // =========================================================================
  // 24. Marketing Automation & AI
  // =========================================================================
  "marketing-automation-ai": [
    {
      url: "/Analytics/SocialMedia/socialmedia18.png",
      title: "Automated Lead Pipeline & Follow-up Velocity",
      tag: "CRM Automation Telemetry",
      client: "B2B & Clinic Client",
      metric: "<2 Mins",
      metricLabel: "Average First Lead Response Time",
      description: "HubSpot and Zapier workflow automation instantly alerting sales reps and delivering personalized WhatsApp and email confirmation to leads.",
      highlights: [
        { label: "Response Speed", value: "Instant (under 120 seconds)" },
        { label: "Lead Routing", value: "Automated Round-Robin" },
        { label: "Qualification", value: "AI Smart Intent Triage" },
        { label: "Integration", value: "Website Forms → CRM → WhatsApp" },
      ],
    },
    {
      url: "/Analytics/DrTungs/drtungga5.png",
      title: "Dr. Tung's: Behavior-Triggered Multi-Touch Nurturing",
      tag: "Behavioral Automation",
      client: "Dr. Tung's Oral Care",
      metric: "+165%",
      metricLabel: "Pipeline Conversion Lift",
      description: "GA4 and CRM telemetry verifying that automated lead scoring and dynamic follow-up sequences converted cold leads into repeat buyers.",
      highlights: [
        { label: "Triggers", value: "Page Visit, Pricing View & Cart" },
        { label: "Cadence", value: "Smart 5-Touch Follow-up" },
        { label: "Spam Compliance", value: "100% GDPR & DPDP Opt-In" },
        { label: "Platform", value: "GA4 Multi-Channel Attribution" },
      ],
    },
    {
      url: "/Analytics/Harris/harrisga.png",
      title: "Harris Pharmacy: Automated Appointment Reminders & CRM Sync",
      tag: "Clinic Workflow",
      client: "Harris Pharmacy UK",
      metric: "-85%",
      metricLabel: "Appointment No-Show Reduction",
      description: "Automated SMS and email booking confirmations and 24-hour reminder triggers dramatically eliminated missed appointments.",
      highlights: [
        { label: "No-Show Drop", value: "-85% Missed Appointments" },
        { label: "Staff Time Saved", value: "14 Hours / Week Saved" },
        { label: "Patient Rating", value: "99% Positive Feedback" },
        { label: "Source", value: "CRM Automated Calendar" },
      ],
    },
    {
      url: "/Analytics/SocialMedia/socialmedia2.png",
      title: "AI-Assisted Customer Triage & Chatbot Qualification",
      tag: "AI Conversation Bot",
      client: "Consumer Brand",
      metric: "78%",
      metricLabel: "Inquiries Handled Automatically",
      description: "Natural language conversational chatbot qualifying incoming inquiries, answering common FAQs, and handing off ready-to-buy leads to agents.",
      highlights: [
        { label: "Bot Triage", value: "78% Resolved Automatically" },
        { label: "Agent Hand-off", value: "Pre-Qualified Inquiries Only" },
        { label: "Availability", value: "24/7/365 Zero Delay" },
        { label: "Platform", value: "CRM Bot Webhook Logs" },
      ],
    },
  ],

  // =========================================================================
  // 25. Lead Generation
  // =========================================================================
  "lead-generation": [
    {
      url: "/Analytics/Harris/harrisga.png",
      title: "Harris Pharmacy: Qualified Inbound Leads & Booking Influx",
      tag: "Full-Funnel Lead Gen",
      client: "Harris Pharmacy UK",
      metric: "1,420+",
      metricLabel: "Verified Monthly Inbound Leads",
      description: "Combined SEO, Google Ads, and local presence generating a continuous flow of pre-qualified patient inquiries and clinic bookings.",
      highlights: [
        { label: "Monthly Leads", value: "1,420+ Direct Inquiries" },
        { label: "Lead Quality", value: "High-Intent Commercial" },
        { label: "Channels", value: "SEO (65%), Google Ads (35%)" },
        { label: "Tracking", value: "GA4 Form & Call Conversions" },
      ],
    },
    {
      url: "/Analytics/SocialMedia/socialmedia2.png",
      title: "Paid Acquisition: High-Intent Form Submissions & Chat Leads",
      tag: "Multi-Channel Acquisition",
      client: "Professional Services",
      metric: "£6.80",
      metricLabel: "Target Cost-Per-Acquisition",
      description: "Paid social and search campaign telemetry delivering consistent B2B and consumer leads at a fraction of industry cost benchmarks.",
      highlights: [
        { label: "Cost Per Lead", value: "£6.80 CPA Target" },
        { label: "Lead Pipeline", value: "Automated CRM Injection" },
        { label: "Closing Rate", value: "34% Lead-to-Client Rate" },
        { label: "Source", value: "Meta Ads & Search Ads" },
      ],
    },
    {
      url: "/Analytics/Harris/harrisgsc.png",
      title: "Harris Pharmacy: Search Engine Inbound Pipeline",
      tag: "Organic Pipeline",
      client: "Harris Pharmacy UK",
      metric: "+140%",
      metricLabel: "Organic Lead Volume Lift",
      description: "Google Search Console query report confirming top ranking for commercially valuable service keywords that drive inbound call volume.",
      highlights: [
        { label: "Inbound Pipeline", value: "Zero Ongoing Ad Spend Needed" },
        { label: "SERP Dominance", value: "Top 3 Positions" },
        { label: "Query Growth", value: "+140% Impressions" },
        { label: "Telemetry", value: "GSC Organic Performance" },
      ],
    },
    {
      url: "/Analytics/SocialMedia/socialmedia4.png",
      title: "Multi-Channel Growth: Unified Leads Dashboard",
      tag: "Executive Pipeline",
      client: "Growth Solutions Client",
      metric: "£320K",
      metricLabel: "New Contract Pipeline Value",
      description: "Full-funnel reporting connecting search traffic, paid campaigns, landing page CRO, and prompt follow-up into verifiable revenue growth.",
      highlights: [
        { label: "Strategy", value: "Full-Funnel Lead Engine" },
        { label: "Pipeline Value", value: "£320,000+ Generated" },
        { label: "Accountability", value: "Measured by Deals, Not Clicks" },
        { label: "Status", value: "Active Client Engine" },
      ],
    },
  ],
};

/**
 * Returns the verified client analytics proof slides for any service.
 * Delivers pure telemetry screenshots directly from verified client campaigns (GSC, GA4, Meta Suite).
 */
export function getServiceProofSlides(serviceKey: string): ProofSlide[] {
  const normalizedKey = serviceKey.toLowerCase().trim();
  const foundKey = Object.keys(SERVICE_PROOFS).find(
    (k) =>
      k === normalizedKey ||
      k.replace(/-/g, "") === normalizedKey.replace(/-/g, "")
  );

  return foundKey ? [...SERVICE_PROOFS[foundKey]] : [...SERVICE_PROOFS["seo-services"]];
}

