export interface ServiceInclusionCategory {
  title: string;
  items: string[];
}

export interface ServiceStepItem {
  step: string;
  name: string;
  description: string;
}

export interface ServiceFitDetails {
  goodFitTitle?: string;
  goodFitPoints: string[];
  inclusionCategories: ServiceInclusionCategory[];
  howItWorksSteps: ServiceStepItem[];
  expectationsText: string;
  trustPoints?: string[];
}

export const SERVICE_FIT_DATA: Record<string, ServiceFitDetails> = {
  // 01: Technical and One Page SEO
  "technical-seo": {
    goodFitTitle: "This is a good fit if:",
    goodFitPoints: [
      "Your pages are not showing up on Google, or traffic has dropped without a clear reason",
      "Your website feels slow, especially on mobile",
      "Search Console shows errors, warnings or pages that are not indexed",
      "You have just built or redesigned a site and want it to be search-ready",
      "You publish good content but it still does not rank",
    ],
    inclusionCategories: [
      {
        title: "Technical SEO",
        items: [
          "Full technical audit with Screaming Frog and Google Search Console",
          "Fixes for crawl errors, broken links, redirects and duplicate pages",
          "Core Web Vitals and site speed improvements",
          "Mobile usability checks",
          "XML sitemap and robots.txt set up correctly",
          "Schema markup (structured data) so Google and AI tools understand your content",
        ],
      },
      {
        title: "On-page SEO",
        items: [
          "Meta titles and descriptions written for people and search engines",
          "Clear heading structure (H1, H2, H3)",
          "Content improvements for search intent and keyword coverage",
          "Internal links that guide visitors and spread page strength",
          "Image names, alt text and file size improvements",
        ],
      },
    ],
    howItWorksSteps: [
      {
        step: "01",
        name: "Audit",
        description: "I scan your site and list every issue that affects search.",
      },
      {
        step: "02",
        name: "Prioritise",
        description: "I rank the fixes by impact so the biggest wins come first.",
      },
      {
        step: "03",
        name: "Fix",
        description: "I make the changes myself or give your developer a clear checklist.",
      },
      {
        step: "04",
        name: "Measure",
        description: "I track rankings, traffic and indexing, then keep improving.",
      },
    ],
    expectationsText:
      "A technical SEO project gives you a faster, cleaner site that Google can read without trouble. You will get a plain-English report, a priority list and a clear view of what changed. I never promise a number one ranking, because nobody honestly can. I do promise honest work and clear reporting.",
    trustPoints: [
      "Plain-English audit reports with zero confusing jargon",
      "Ranked priority list so highest-value fixes happen first",
      "Hands-on execution or clear checklists for your developer",
      "Weekly verification of indexation and ranking recovery",
    ],
  },

  // 02: AEO and GEO (AI Search Optimization)
  "aeo-geo": {
    goodFitTitle: "This is a good fit if:",
    goodFitPoints: [
      "ChatGPT, Perplexity, or Gemini recommend your competitors instead of you",
      "Your organic traffic is dropping because Google AI Overviews answer queries directly",
      "You want your brand to become the trusted, canonical source cited across generative AI engines",
      "You have strong authority offline, but LLMs do not recognize your brand entity",
      "You want future-proof search visibility that does not rely solely on traditional 10 blue links",
    ],
    inclusionCategories: [
      {
        title: "Entity & Knowledge Architecture",
        items: [
          "Full AI citation audit across ChatGPT, Perplexity, Gemini, and Google SGE",
          "Wikidata, JSON-LD entity graph, and sameAs knowledge-base connections",
          "Founder and organization authoritativeness alignment (E-E-A-T signals)",
          "Competitor AI citation share benchmarking and gap identification",
          "Fact-based entity summaries structured for LLM crawler extraction",
        ],
      },
      {
        title: "Answer Engine Optimization",
        items: [
          "Direct answer formatting for conversational Q&A search prompts",
          "Consensus definition blocks, comparison tables, and statistical summaries",
          "FAQ schema structuring for Google AI Overviews position-zero extraction",
          "Brand mention syndication to establish co-occurrence authority",
          "GA4 and server-log tracking for AI referral traffic and LLM bots",
        ],
      },
    ],
    howItWorksSteps: [
      {
        step: "01",
        name: "Audit",
        description: "I test your core search queries across ChatGPT, Perplexity, and Gemini to see how AI currently sees you.",
      },
      {
        step: "02",
        name: "Map",
        description: "I map the high-intent conversational prompts where your brand deserves direct citation.",
      },
      {
        step: "03",
        name: "Structure",
        description: "I engineer schema entities, structured answer cards, and citation-friendly data blocks.",
      },
      {
        step: "04",
        name: "Track",
        description: "I monitor AI citation shares and referral traffic across major AI engines and refine.",
      },
    ],
    expectationsText:
      "An AEO and GEO project establishes your brand as an authoritative entity for modern AI assistants. You will get full transparency into how AI models perceive your business, structured content that answer engines cite, and a clear hedge against zero-click search. I never promise AI exclusivity, but I do promise rigorous semantic engineering and verified citations.",
    trustPoints: [
      "Verified citation testing across ChatGPT, Perplexity & Gemini",
      "Complete semantic entity schema for Google Knowledge Graph",
      "Direct answer blocks engineered for position-zero SERPs",
      "Dedicated tracking for conversational search referrals",
    ],
  },

  // 03: Content and Keyword Strategy
  "content-strategy": {
    goodFitTitle: "This is a good fit if:",
    goodFitPoints: [
      "You publish blog posts regularly, but they get little to no organic traffic",
      "You rank for broad keywords that bring casual readers who never buy",
      "You do not know which topics your target buyers search for before making a purchase",
      "Your existing content library is decaying, fragmented, or outdated",
      "You want a compounding organic content machine that generates qualified leads month after month",
    ],
    inclusionCategories: [
      {
        title: "Buyer-Intent Keyword Research",
        items: [
          "Commercial vs. informational search intent segmentation",
          "Competitor content gap analysis to uncover high-opportunity search terms",
          "Pillar page and satellite topic cluster architecture blueprints",
          "Bottom-of-funnel (BOFU) high-conversion search query discovery",
          "Search volume, difficulty, and business revenue priority scoring",
        ],
      },
      {
        title: "Content Planning & Architecture",
        items: [
          "12-month editorial roadmap mapped to customer acquisition stages",
          "Detailed content briefs with H1-H3 outlines, target entities, and word counts",
          "Internal linking matrices that funnel page equity to money pages",
          "Content decay audits and refresh checklists for historical winners",
          "Conversion copy guidelines with clear, natural calls-to-action",
        ],
      },
    ],
    howItWorksSteps: [
      {
        step: "01",
        name: "Discover",
        description: "I analyze your buyers' real questions, your competitors' gaps, and your historical traffic data.",
      },
      {
        step: "02",
        name: "Blueprint",
        description: "I build topic cluster maps with prioritized content briefs designed to outrank the competition.",
      },
      {
        step: "03",
        name: "Produce",
        description: "I provide clear editorial outlines or write high-converting, human-first copy ready to rank.",
      },
      {
        step: "04",
        name: "Refine",
        description: "I review indexing, dwell time, and conversions, updating underperforming posts for continuous compounding.",
      },
    ],
    expectationsText:
      "You will stop guessing what to write and start targeting terms that drive actual business revenue. You get a prioritized keyword blueprint, ready-to-execute content briefs, and internal linking structures that build real topical authority. I focus on buyer intent, not vanity impressions.",
    trustPoints: [
      "No vanity keywords — 100% focus on buyer intent and revenue",
      "Pillar & cluster architecture to own topical search verticals",
      "Ready-to-write briefs with clear H1-H3 headers and entity targets",
      "Ongoing decay tracking to refresh and protect ranking articles",
    ],
  },

  // 04: WordPress and E-Commerce
  "wordpress-ecommerce": {
    goodFitTitle: "This is a good fit if:",
    goodFitPoints: [
      "Your website is slow, clunky, or frustrating for mobile visitors",
      "Visitors add products to cart or view services, but abandon before checkout",
      "Your current WordPress or Shopify theme is bloated with heavy plugins that hurt SEO",
      "You need a modern, responsive website that looks incredible and is engineered to rank",
      "You are spending on traffic that is not turning into sales or booked consultations",
    ],
    inclusionCategories: [
      {
        title: "Store & Site Development",
        items: [
          "Custom WordPress, WooCommerce, or Shopify theme development",
          "Mobile-first responsive UX/UI engineered for maximum conversions",
          "1-click payment integrations (Stripe, PayPal, Apple Pay, Klarna)",
          "Frictionless single-page or streamlined checkout workflows",
          "Database cleanup, plugin auditing, and obsolete code removal",
        ],
      },
      {
        title: "E-Commerce SEO & Performance",
        items: [
          "Sub-second load times with next-gen image compression (AVIF/WebP)",
          "Structured Product, Review, and Breadcrumb schema integration",
          "Faceted navigation and category filter SEO optimization",
          "Server-side caching and global Cloudflare CDN configuration",
          "End-to-end checkout tracking and abandonment analytics",
        ],
      },
    ],
    howItWorksSteps: [
      {
        step: "01",
        name: "Analyze",
        description: "I audit your current site speed, user friction, and checkout drop-off points.",
      },
      {
        step: "02",
        name: "Design",
        description: "I craft clean, lightning-fast layouts focused on mobile UX and intuitive navigation.",
      },
      {
        step: "03",
        name: "Build",
        description: "I write clean, lightweight code without bloated page builders or unnecessary plugins.",
      },
      {
        step: "04",
        name: "Launch",
        description: "I run thorough cross-browser checkout tests before zero-downtime deployment.",
      },
    ],
    expectationsText:
      "You get a blazing-fast, beautiful e-commerce store or website that your customers love using. It will be technically sound, easy for Google to crawl, and streamlined for checkouts. I deliver tested code, no bloated plugins, and full training on managing your new store.",
    trustPoints: [
      "Zero bloated builders — clean, lightweight and maintainable code",
      "Sub-second mobile loading speeds for superior checkout conversions",
      "Complete 301 redirect mapping to protect existing SEO equity",
      "Thorough testing across 10+ mobile devices before launch",
    ],
  },

  // 05: Social and Email Marketing
  "social-email": {
    goodFitTitle: "This is a good fit if:",
    goodFitPoints: [
      "You have website traffic or past customers, but no automated system to bring them back",
      "Your abandoned checkout rate is high and leaving significant revenue on the table",
      "Your social media channels are inconsistent and do not reflect the quality of your brand",
      "You have an email list but rarely send to it or do not know what converts",
      "You want automated flows that generate predictable sales around the clock",
    ],
    inclusionCategories: [
      {
        title: "Automated Email Sequences",
        items: [
          "3-step high-converting Abandoned Cart and Checkout recovery flows",
          "Branded Welcome Series that nurtures new subscribers into first-time buyers",
          "Post-purchase VIP education, cross-sell, and review request sequences",
          "Customer win-back flows for subscribers who have not ordered in 60+ days",
          "List hygiene, deliverability checks, and inbox placement optimization",
        ],
      },
      {
        title: "Social Media & Retention",
        items: [
          "Monthly social content calendars with high-engagement post angles",
          "Custom Canva and Adobe graphic templates tailored to your brand",
          "Short-form video hooks, carousel designs, and story promotions",
          "Audience segmentation based on purchase frequency and behavior",
          "Full revenue attribution and email flow performance reporting",
        ],
      },
    ],
    howItWorksSteps: [
      {
        step: "01",
        name: "Segment",
        description: "I analyze your customer lifecycle to find where buyers drop off and where money is being lost.",
      },
      {
        step: "02",
        name: "Design",
        description: "I create stunning email templates and social graphics that match your exact visual identity.",
      },
      {
        step: "03",
        name: "Automate",
        description: "I configure automated behavioral triggers in Klaviyo or Mailchimp with proven persuasive copy.",
      },
      {
        step: "04",
        name: "Optimize",
        description: "I A/B test subject lines, send times, and incentives to continuously maximize revenue per recipient.",
      },
    ],
    expectationsText:
      "You get automated email funnels that reliably recapture lost checkouts and turn one-time shoppers into repeat buyers. Everything is built on clean deliverability, persuasive copywriting, and your brand's unique aesthetic. No spammy gimmicks—just authentic, high-converting retention.",
    trustPoints: [
      "Automated cart recovery flows active within 48 hours",
      "Flawless inbox deliverability — avoiding the spam tab",
      "On-brand aesthetic visuals created for Instagram & LinkedIn",
      "Transparent revenue attribution tracked directly in Klaviyo/GA4",
    ],
  },

  // 06: Analytics and Reporting
  "analytics-reporting": {
    goodFitTitle: "This is a good fit if:",
    goodFitPoints: [
      "You are spending money on marketing but do not know which channels actually generate revenue",
      "Your Google Analytics 4 (GA4) was automatically created and is not tracking conversions correctly",
      "You are tired of confusing reports filled with vanity numbers like clicks and impressions",
      "You have duplicate transactions, missing e-commerce data, or broken form tracking",
      "You need a single, crystal-clear dashboard your stakeholders and team can understand in 30 seconds",
    ],
    inclusionCategories: [
      {
        title: "GA4 & Tag Manager Engineering",
        items: [
          "Comprehensive GA4 property audit and clean tracking architecture setup",
          "Google Tag Manager (GTM) custom event triggers for forms, clicks, and calls",
          "Full e-commerce data layer: View Item, Add to Cart, Begin Checkout, Purchase",
          "Elimination of self-referrals, unlinked payment gateways, and duplicate conversions",
          "Cross-domain tracking and server-side tracking configuration",
        ],
      },
      {
        title: "Executive Looker Studio Dashboards",
        items: [
          "Bespoke, interactive Looker Studio dashboard built specifically for your KPIs",
          "Multi-touch attribution models comparing organic, paid, social, and email ROI",
          "Real-time date range, channel, and device comparison filters",
          "Automated weekly and monthly PDF summary emails delivered to your inbox",
          "Plain-English executive summaries explaining what the numbers actually mean",
        ],
      },
    ],
    howItWorksSteps: [
      {
        step: "01",
        name: "Audit",
        description: "I inspect your tag firing, data layer variables, and conversion events to identify tracking errors.",
      },
      {
        step: "02",
        name: "Instrument",
        description: "I wire up custom GTM tags and clean server-side events for every meaningful business action.",
      },
      {
        step: "03",
        name: "Build",
        description: "I design an intuitive Looker Studio dashboard that visualizes your true cost-per-acquisition and ROI.",
      },
      {
        step: "04",
        name: "Synthesize",
        description: "I walk you through your live dashboard and provide ongoing plain-English insights on what to do next.",
      },
    ],
    expectationsText:
      "You will finally have total clarity on where your customers come from and which marketing efforts generate real revenue. No vanity metrics or technical jargon—just bulletproof conversion tracking and an executive dashboard you can trust to make business decisions.",
    trustPoints: [
      "100% verified conversion and e-commerce revenue tracking",
      "Real-time Looker Studio dashboard accessible 24/7 on any device",
      "Zero duplicate transactions or missing payment gateway referrals",
      "Plain-English monthly executive summaries of marketing ROI",
    ],
  },

  // 07: Local SEO & Google Business Profile
  "local-seo-gmb": {
    goodFitTitle: "This is a good fit if:",
    goodFitPoints: [
      "Competitors with fewer or worse reviews rank above you in Google Maps",
      "Local customers in your city search for your services but your business does not appear in the 3-Pack",
      "Your Google Business Profile has suspended edits, conflicting phone numbers, or wrong categories",
      "You want a steady stream of direct phone calls, walk-ins, and local quote requests",
      "You have multiple branches or service areas and need a unified local search strategy",
    ],
    inclusionCategories: [
      {
        title: "Google Business Profile Domination",
        items: [
          "Complete GBP profile audit, primary/secondary category optimization",
          "Local 3-Pack geo-grid rank tracking across your target service radius",
          "Services, products, and localized keyword integration into profile descriptions",
          "High-resolution geo-tagged photo uploads and weekly promotional updates",
          "Spam fighting: reporting competitor keyword stuffing and fake profiles",
        ],
      },
      {
        title: "Local Citations & Landing Pages",
        items: [
          "Consistent NAP (Name, Address, Phone) distribution across 50+ tier-1 directories",
          "Automated SMS/Email Google review acquisition sequence setup",
          "Localized landing page architecture with embedded Google Maps & LocalBusiness schema",
          "Local backlink acquisition from chambers of commerce, sponsorships, and local press",
          "Monthly phone call, direction request, and website click reporting",
        ],
      },
    ],
    howItWorksSteps: [
      {
        step: "01",
        name: "Scan",
        description: "I run a geo-grid scan across your local area to pinpoint exactly where you rank and where you drop off.",
      },
      {
        step: "02",
        name: "Optimize",
        description: "I overhaul your Google Business Profile categories, services, and local citations for maximum prominence.",
      },
      {
        step: "03",
        name: "Build",
        description: "I deploy localized schema markup and establish an automated review collection workflow.",
      },
      {
        step: "04",
        name: "Expand",
        description: "I track your 3-Pack rankings weekly and expand your visibility across adjacent zip codes.",
      },
    ],
    expectationsText:
      "A dedicated local SEO push will maximize your visibility in the Google Maps 3-Pack, putting your business directly in front of nearby buyers ready to call or visit. You get transparent geo-grid tracking, pristine citations, and honest reporting on calls and direction requests.",
    trustPoints: [
      "Transparent geo-grid ranking scans across your service radius",
      "Consistent NAP cleanup across top directories and map databases",
      "Automated review funnels compliant with Google's guidelines",
      "Direct phone call and direction request conversion telemetry",
    ],
  },

  // 08: Conversion Rate Optimization (CRO)
  "conversion-rate-optimization": {
    goodFitTitle: "This is a good fit if:",
    goodFitPoints: [
      "You get good website traffic, but your conversion rate or sales remain disappointingly low",
      "Visitors drop off heavily on your pricing, checkout, or lead contact pages",
      "You are spending money on ads or SEO, but the cost per lead or acquisition is too high",
      "You are guessing what changes to make instead of using real user behavior data",
      "You want to increase revenue from your existing visitors without buying more traffic",
    ],
    inclusionCategories: [
      {
        title: "Friction & Behavioral Diagnostics",
        items: [
          "Full funnel drop-off analysis: Landing Page → Form / Cart → Confirmation",
          "Heatmap, scroll-depth, and rage-click diagnostics via Hotjar / Clarity",
          "Session recording analysis to identify customer hesitation and confusion",
          "Mobile usability and thumb-zone accessibility overhaul",
          "Competitive UX heuristic review identifying missed value propositions",
        ],
      },
      {
        title: "Conversion Engineering & A/B Testing",
        items: [
          "Persuasive headline, value proposition, and micro-copy rewrites",
          "Form optimization: field reduction, autofill enablement, and friction removal",
          "Trust signal placement: testimonials, guarantees, security badges, and FAQ blocks",
          "Hypothesis-driven A/B testing roadmap prioritized by ICE impact framework",
          "Statistical significance verification to declare true permanent winners",
        ],
      },
    ],
    howItWorksSteps: [
      {
        step: "01",
        name: "Diagnose",
        description: "I watch user session recordings and analyze funnel drop-offs to pinpoint exact friction points.",
      },
      {
        step: "02",
        name: "Hypothesize",
        description: "I create clear, data-backed design and copy improvements ranked by potential revenue impact.",
      },
      {
        step: "03",
        name: "Implement",
        description: "I code and deploy clean variations without layout shifts or page speed hits.",
      },
      {
        step: "04",
        name: "Validate",
        description: "I measure conversion lift to a 95%+ confidence level before making winning changes permanent.",
      },
    ],
    expectationsText:
      "CRO systematically eliminates the leaks in your sales funnel. Instead of guessing, we use empirical user recordings and data to turn more clicks into revenue. You get clear documentation on what was tested, what won, and how much your conversion rate increased.",
    trustPoints: [
      "Hypotheses backed by real visitor screen recordings and heatmaps",
      "A/B tests deployed without layout shifts or speed degradation",
      "Strict statistical validation (95%+ confidence) for all winners",
      "Direct reduction in customer acquisition costs across all channels",
    ],
  },

  // 09: Programmatic SEO & Scalable Pages
  "programmatic-seo": {
    goodFitTitle: "This is a good fit if:",
    goodFitPoints: [
      "You have a business that serves hundreds of cities, industries, or product categories",
      "Creating thousands of landing pages manually is way too slow, expensive, and impractical",
      "You want to capture thousands of high-intent long-tail search queries simultaneously",
      "You manage a directory, SaaS, marketplace, or multi-location brand looking for exponential scale",
      "You want clean automated templates that avoid Google thin or duplicate content penalties",
    ],
    inclusionCategories: [
      {
        title: "Data Architecture & Permutations",
        items: [
          "Keyword database structuring for scalable search query patterns",
          "Unique data enrichment algorithms ensuring every generated page offers distinct value",
          "Custom Airtable / Supabase / headless CMS database integration",
          "Dynamic location, demographic, and feature variable mapping",
          "Crawl budget optimization and XML sitemap splitting for mass indexation",
        ],
      },
      {
        title: "Template Engineering & Next.js Architecture",
        items: [
          "High-speed Next.js dynamic routing with Static Site Generation (SSG/ISR)",
          "Automated breadcrumb and semantic parent-child internal linking matrices",
          "Dynamic OpenGraph and schema markup generation per individual page",
          "Quality gate checks ensuring zero thin-content algorithmic penalties",
          "Bulk Search Console indexing monitoring and performance tracking",
        ],
      },
    ],
    howItWorksSteps: [
      {
        step: "01",
        name: "Model",
        description: "I identify your repeatable high-intent search patterns (e.g. '[Service] in [City]' or '[Tool] Alternative').",
      },
      {
        step: "02",
        name: "Enrich",
        description: "I structure and enrich your database so every page has genuine, differentiated value and statistics.",
      },
      {
        step: "03",
        name: "Code",
        description: "I engineer fast, responsive Next.js dynamic templates built for Core Web Vitals perfection.",
      },
      {
        step: "04",
        name: "Index",
        description: "I roll out pages in staged batches to manage crawl budget and track organic impression growth.",
      },
    ],
    expectationsText:
      "Programmatic SEO transforms your domain into a massive search footprint covering thousands of long-tail queries. You get custom-coded, data-rich templates that Google indexes with confidence—not spammy automated garbage, but genuine, useful hubs that attract qualified traffic.",
    trustPoints: [
      "No thin content: rich unique data injected into every page template",
      "Sub-second Next.js SSG / ISR architecture for top Core Web Vitals",
      "Semantic parent-child internal linking to circulate link equity",
      "Staged indexation rollout preserving Googlebot crawl budget",
    ],
  },

  // 10: Authority & Digital PR Link Building
  "link-building-authority": {
    goodFitTitle: "This is a good fit if:",
    goodFitPoints: [
      "Your competitors outrank you simply because their domains have higher authority and more backlinks",
      "You are stuck on page 2 or 3 of Google despite having great on-page content",
      "You have been burned in the past by spammy link sellers or fear Google penalties",
      "You want legitimate editorial placements and mentions in recognized industry publications",
      "You want permanent authority signals that protect your site during algorithmic core updates",
    ],
    inclusionCategories: [
      {
        title: "Digital PR & Journalist Outreach",
        items: [
          "Journalist and editor pitching for expert founder commentary (Connectively / HARO / Qwoted)",
          "Creation of data-driven linkable assets (industry surveys, benchmark statistics, calculators)",
          "Targeted editorial outreach to contextually relevant industry publications",
          "Unlinked brand mention monitoring and reclamation into do-follow links",
          "Podcast guesting and expert quote positioning for authoritative backlinks",
        ],
      },
      {
        title: "Link Equity & Risk Management",
        items: [
          "Comprehensive backlink profile audit to identify and neutralize toxic links",
          "Competitor link gap analysis revealing the exact placements needed to surpass rivals",
          "Natural anchor text distribution to protect against algorithmic over-optimization",
          "Verification of real organic traffic and Domain Rating on all target link sources",
          "Monthly transparent report with live placement URLs and domain metrics",
        ],
      },
    ],
    howItWorksSteps: [
      {
        step: "01",
        name: "Analyze",
        description: "I audit your competitors' link profiles to calculate the authority gap needed to beat them.",
      },
      {
        step: "02",
        name: "Craft",
        description: "I develop compelling story angles, expert quotes, or proprietary data assets journalists want.",
      },
      {
        step: "03",
        name: "Pitch",
        description: "I conduct personalized, 1-on-1 editorial outreach to journalists and editors in your niche.",
      },
      {
        step: "04",
        name: "Verify",
        description: "I verify each acquired placement for permanence, indexation, and clean do-follow authority.",
      },
    ],
    expectationsText:
      "Every single backlink we build is 100% white-hat, editorially placed, and earned through merit. No private blog networks (PBNs), no link farms, and no rented links. You get real placements on real websites with genuine traffic, providing lasting authority that moves rankings safely.",
    trustPoints: [
      "100% white-hat editorial placements on real, active websites",
      "Zero PBNs, comment spam, or shady rented link networks",
      "Contextually relevant do-follow links with natural anchor distribution",
      "Monthly delivery report with live verified URLs and domain metrics",
    ],
  },

  // 11: PPC & Paid Search Management
  "paid-search-ppc": {
    goodFitTitle: "This is a good fit if:",
    goodFitPoints: [
      "You need immediate customer inquiries or sales while organic SEO compounds",
      "You are running Google Ads but spending too much per conversion with disappointing ROAS",
      "You waste budget on irrelevant clicks from people looking for free advice or wrong services",
      "You want transparent reporting showing exact cost-per-lead and return on ad spend",
      "You want tightly controlled campaigns where every dollar goes toward high-intent buyers",
    ],
    inclusionCategories: [
      {
        title: "Google Search & Shopping Architecture",
        items: [
          "Single-Theme Ad Group (STAG) search campaign structuring for high quality scores",
          "Comprehensive negative keyword lists to permanently block irrelevant traffic",
          "High-converting ad copywriting with responsive assets and dynamic extensions",
          "Google Shopping and Performance Max optimization with clean product feed management",
          "Bid management using automated smart bidding rules (Target CPA / Target ROAS)",
        ],
      },
      {
        title: "Tracking & Conversion Alignment",
        items: [
          "Google Ads Enhanced Conversions setup via GTM for accurate conversion attribution",
          "Dedicated conversion landing page recommendations to maximize quality scores",
          "Retargeting campaigns on Google Display and Meta for abandoned visitors",
          "Weekly search term mining to eliminate wasted spend and discover new winners",
          "Real-time Looker Studio dashboard tracking spend, conversions, and profit",
        ],
      },
    ],
    howItWorksSteps: [
      {
        step: "01",
        name: "Audit",
        description: "I review your search term reports, negative keyword lists, and bid strategies to stop money waste.",
      },
      {
        step: "02",
        name: "Restructure",
        description: "I rebuild your campaigns around high-intent commercial keywords and compelling ad copy.",
      },
      {
        step: "03",
        name: "Launch",
        description: "I configure conversion tracking with Enhanced Conversions and launch structured bidding.",
      },
      {
        step: "04",
        name: "Prune",
        description: "I review search queries weekly, adding negative keywords and shifting budget to top performers.",
      },
    ],
    expectationsText:
      "Paid search should be an ATM, not an expense. You get tightly managed campaigns focused exclusively on commercial search intent, zero wasted budget on junk queries, and complete transparency into cost-per-acquisition. No opaque agency fees—just disciplined, profitable performance.",
    trustPoints: [
      "Disciplined negative keyword curation to stop wasted budget",
      "Enhanced Conversions setup ensuring 100% accurate ROAS attribution",
      "Continuous A/B copy testing to improve Google Ads Quality Scores",
      "Direct access to your own Google Ads account with zero markup",
    ],
  },

  // 12: Core Web Vitals & Speed Optimization
  "core-web-vitals-speed": {
    goodFitTitle: "This is a good fit if:",
    goodFitPoints: [
      "Your website takes more than 2-3 seconds to load, especially on mobile devices",
      "Google Search Console reports Core Web Vitals errors: LCP, INP, or CLS issues",
      "Mobile visitors bounce before your page finishes loading or before seeing your offer",
      "You have a WordPress, Shopify, or React site with bloated scripts, plugins, or huge images",
      "You want 90+ PageSpeed Insights scores to gain an algorithmic edge and improve conversions",
    ],
    inclusionCategories: [
      {
        title: "Core Web Vitals Remediation",
        items: [
          "LCP (Largest Contentful Paint) optimization: preloading critical assets & hero images",
          "INP (Interaction to Next Paint) fixing: breaking up long JavaScript main-thread tasks",
          "CLS (Cumulative Layout Shift) elimination: explicit CSS aspect-ratio reservations",
          "Critical CSS inlining and non-blocking asynchronous script execution",
          "Font display swap and self-hosting to prevent layout flashes and render blocks",
        ],
      },
      {
        title: "Asset Compression & Caching",
        items: [
          "Next-gen image conversion (AVIF/WebP) with automated responsive sizing",
          "Server-level caching configuration (Redis / Fastly / LiteSpeed / Cloudflare Edge)",
          "Third-party tracking script deferment (Google Tag Manager, Meta Pixel, heatmaps)",
          "Code minification, tree-shaking, and unused CSS/JS stripping",
          "Pre- and post-optimization speed benchmark reports validated on real mobile devices",
        ],
      },
    ],
    howItWorksSteps: [
      {
        step: "01",
        name: "Profile",
        description: "I run detailed waterfall diagnostics to pinpoint every millisecond delay across TTFB, FCP, and LCP.",
      },
      {
        step: "02",
        name: "Optimize",
        description: "I eliminate render-blocking scripts, inline critical CSS, and convert images to next-gen formats.",
      },
      {
        step: "03",
        name: "Cache",
        description: "I configure edge caching and server rules so repeat visitors experience near-instant page loads.",
      },
      {
        step: "04",
        name: "Validate",
        description: "I verify field data in Google Search Console to ensure your site passes Core Web Vitals assessments.",
      },
    ],
    expectationsText:
      "Your site will load dramatically faster without breaking any functionality, layout aesthetics, or tracking scripts. You will receive before-and-after PageSpeed reports and field-data verification in Search Console. Faster load times mean lower bounce rates and an algorithmic advantage on Google.",
    trustPoints: [
      "90+ PageSpeed Scores across both mobile and desktop views",
      "Green Core Web Vitals field data validated in Search Console",
      "Zero broken layouts or deferred functionality — tested in staging",
      "Next-gen image compression and edge caching active permanently",
    ],
  },
};

export function getServiceFitDetails(slugOrId: string): ServiceFitDetails {
  if (SERVICE_FIT_DATA[slugOrId]) {
    return SERVICE_FIT_DATA[slugOrId];
  }
  // Fallback to technical-seo if key is unmatched
  return SERVICE_FIT_DATA["technical-seo"];
}
