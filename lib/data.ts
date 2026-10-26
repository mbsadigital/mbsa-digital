export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  heroHeadline: string;
  heroHighlight: string;
  heroSubheadline: string;
  stats: {
    value: string;
    label: string;
    sublabel: string;
    icon: string;
  }[];
  servicesPills: {
    id: string;
    label: string;
    icon: string;
  }[];
  socials: {
    platform: string;
    url: string;
    handle: string;
    icon: string;
  }[];
  email: string;
  phone: string;
  location: string;
  availability: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  tags?: string[];
  deliverables?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  accentColor: string;
  client: string;
  duration: string;
  results: {
    metric: string;
    label: string;
  }[];
  challenge: string;
  solution: string;
  deliverables: string[];
}

export interface ToolCategory {
  id: string;
  title: string;
  tools: {
    name: string;
    logoType: string;
    color?: string;
    badge?: string;
  }[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details?: string;
}

export interface MilestoneItem {
  icon: string;
  title: string;
  subtitle: string;
  tag: string;
}

export const PROFILE_DATA: ProfileData = {
  name: "Muskan Shekh",
  role: "Digital Marketing & SEO Specialist",
  tagline: "DATA → INSIGHTS → ACTION → GROWTH",
  heroHeadline: "I Turn Data Into",
  heroHighlight: "Digital Growth.",
  heroSubheadline:
    "I connect the data, identify the opportunity and turn insight into action for real business growth.",
  stats: [
    {
      value: "5+",
      label: "Years of IT & Digital",
      sublabel: "Experience",
      icon: "Calendar",
    },
    {
      value: "2.5+",
      label: "Years Working With",
      sublabel: "UK / London Businesses",
      icon: "Building2",
    },
    {
      value: "5+",
      label: "WordPress Websites",
      sublabel: "Built",
      icon: "Globe",
    },
    {
      value: "5+",
      label: "Active / Recent",
      sublabel: "Client Projects",
      icon: "Folder",
    },
  ],
  servicesPills: [
    { id: "seo", label: "SEO", icon: "Search" },
    { id: "analytics", label: "Analytics", icon: "BarChart3" },
    { id: "websites", label: "Websites", icon: "Monitor" },
    { id: "social", label: "Social Media", icon: "Users" },
    { id: "strategy", label: "Strategy", icon: "Target" },
  ],
  socials: [
    { platform: "LinkedIn", url: "https://linkedin.com", handle: "muskan-shekh", icon: "Linkedin" },
    { platform: "Instagram", url: "https://instagram.com", handle: "@muskanshekh", icon: "Instagram" },
    { platform: "Facebook", url: "https://facebook.com", handle: "muskanshekh.digital", icon: "Facebook" },
    { platform: "TikTok", url: "https://tiktok.com", handle: "@muskan.growth", icon: "Video" },
    { platform: "X", url: "https://x.com", handle: "@muskanshekh", icon: "Twitter" },
    { platform: "Pinterest", url: "https://pinterest.com", handle: "muskanshekh", icon: "Share2" },
  ],
  email: "muskan.digital@example.com",
  phone: "+44 (0) 20 7946 0912",
  location: "London, UK / Remote Worldwide",
  availability: "Available for Q3/Q4 Advisory & Digital Growth Projects",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "seo",
    title: "SEO & Organic Growth",
    description: "Technical SEO, keyword research, search visibility and content.",
    icon: "Search",
    iconBg: "bg-teal-50 text-teal-600 border-teal-200",
    iconColor: "#0d9488",
    tags: ["Technical SEO", "Keywords", "Rankings", "On-Page"],
    deliverables: [
      "Comprehensive Technical & On-Page SEO Audits",
      "High-Intent Keyword Research & Topic Clustering",
      "Competitor Gap Analysis & Backlink Strategy",
      "Continuous Core Web Vitals & SERP Optimization",
    ],
  },
  {
    id: "analytics",
    title: "Analytics & Data",
    description: "GA4, GSC, reporting, user behaviour and data interpretation.",
    icon: "BarChart3",
    iconBg: "bg-blue-50 text-blue-600 border-blue-200",
    iconColor: "#2563eb",
    tags: ["GA4", "Search Console", "Looker Studio", "Tracking"],
    deliverables: [
      "GA4 & Google Tag Manager Event Tracking Setup",
      "Automated Executive Looker Studio Dashboards",
      "User Journey & Funnel Drop-off Analysis",
      "Conversion Attribution Modeling & Data Cleansing",
    ],
  },
  {
    id: "websites",
    title: "Websites & WordPress",
    description: "Design, development, UX, landing pages and optimisation.",
    icon: "Globe",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200",
    iconColor: "#4f46e5",
    tags: ["WordPress", "Elementor", "Shopify", "Speed CRO"],
    deliverables: [
      "High-Converting WordPress & WooCommerce Sites",
      "Responsive, Mobile-First UI/UX Experience",
      "Page Speed & Core Web Vitals Optimization",
      "Secure Maintenance & Custom Integration",
    ],
  },
  {
    id: "social",
    title: "Social Media Marketing",
    description: "Strategy, content, design, platforms and performance analysis.",
    icon: "Users",
    iconBg: "bg-purple-50 text-purple-600 border-purple-200",
    iconColor: "#9333ea",
    tags: ["Content Strategy", "Instagram", "LinkedIn", "Creative"],
    deliverables: [
      "Multi-Channel Social Content Strategy & Calendars",
      "Custom Graphic Design & Video Assets",
      "Audience Engagement & Community Management",
      "Performance Reporting & Paid Boosting Guidance",
    ],
  },
  {
    id: "cro",
    title: "Conversion Optimization",
    description: "User journey, landing pages, A/B testing and more.",
    icon: "Target",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
    iconColor: "#059669",
    tags: ["A/B Testing", "Funnels", "Heatmaps", "Copywriting"],
    deliverables: [
      "Landing Page A/B Testing & Micro-Funnels",
      "Heatmap & Scroll-Depth User Behavior Analysis",
      "Value Proposition & Persuasive Copy Crafting",
      "Checkout & Lead Magnet Conversion Lift",
    ],
  },
  {
    id: "growth",
    title: "Digital Growth Strategy",
    description: "Connect all channels into a measurable growth system.",
    icon: "TrendingUp",
    iconBg: "bg-cyan-50 text-cyan-600 border-cyan-200",
    iconColor: "#0891b2",
    tags: ["Full Funnel", "Omnichannel", "KPIs", "Scale"],
    deliverables: [
      "Holistic Omnichannel Digital Roadmap",
      "Customer Acquisition & Retention Loop Architecture",
      "Quarterly Growth OKR Planning & Execution",
      "Cross-Channel Budget Allocation Optimization",
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "harris-pharmacy",
    title: "Harris Pharmacy",
    category: "Pharmacy",
    tags: ["SEO", "LOCAL SEO", "WEBSITE"],
    description: "Improved local search visibility and website performance.",
    image: "/harris_pharmacy_1789726798694.jpg",
    accentColor: "#059669",
    client: "Harris Pharmacy Ltd (UK)",
    duration: "6 Months",
    results: [
      { metric: "+185%", label: "Local Map Pack Visibility" },
      { metric: "+64%", label: "Prescription Inquiries" },
      { metric: "1.2s", label: "Page Load Speed (LCP)" },
    ],
    challenge:
      "Harris Pharmacy had low online discovery in London competitive postal codes and a legacy website with slow mobile loading times, hurting patient prescription bookings.",
    solution:
      "Redesigned a fast, clean WordPress digital pharmacy portal, restructured local Schema markup, optimized Google Business Profiles, and built high-converting local service landing pages.",
    deliverables: [
      "Custom WordPress Healthcare Portal",
      "Local SEO & Citation Architecture",
      "Google Business Profile Optimization",
      "Online Prescription Booking Workflow",
    ],
  },
  {
    id: "maia-health",
    title: "Maia Health & Beauty",
    category: "Health & Beauty",
    tags: ["SEO", "CONTENT", "WEBSITE"],
    description: "Technical SEO and content optimisation.",
    image: "/maia_health_mockup_1789726816504.jpg",
    accentColor: "#db2777",
    client: "Maia Health & Beauty UK",
    duration: "8 Months",
    results: [
      { metric: "+240%", label: "Organic Search Traffic" },
      { metric: "+115%", label: "E-commerce Revenue" },
      { metric: "#1-3", label: "Rankings for Top 20 Keywords" },
    ],
    challenge:
      "A premium skincare brand struggling with technical crawl errors, duplicate content issues, and lack of keyword visibility across organic search engines.",
    solution:
      "Conducted an exhaustive technical SEO overhaul, optimized product schema, mapped out category content pillars, and streamlined checkout UX.",
    deliverables: [
      "Technical Core SEO Refactor",
      "Product & Category Content Strategy",
      "Shopify / WooCommerce UX Optimization",
      "Backlink & Digital PR Outreach",
    ],
  },
  {
    id: "drtungs-uk",
    title: "drTung's UK",
    category: "Oral Care",
    tags: ["SEO", "CONTENT", "DIGITAL"],
    description: "Content strategy and search visibility improvement.",
    image: "/harris_pharmacy_1789726798694.jpg",
    accentColor: "#0284c7",
    client: "drTung's Natural Oral Care (UK)",
    duration: "5 Months",
    results: [
      { metric: "+160%", label: "Targeted Search Impressions" },
      { metric: "+78%", label: "Direct-to-Consumer Orders" },
      { metric: "+45%", label: "Email Subscriber Growth" },
    ],
    challenge:
      "A holistic dental brand needed to penetrate the UK market against legacy pharmaceutical competitors and educate customers on natural oral hygiene.",
    solution:
      "Created an authoritative educational blog hub, targeted long-tail search queries, implemented structured FAQ rich snippets, and aligned social media campaigns with search intent.",
    deliverables: [
      "Educational Content & Editorial Calendar",
      "Rich Snippet & FAQ Schema Implementation",
      "Social-to-Search Cross-Channel Campaigns",
      "GA4 Custom Conversion Tracking",
    ],
  },
  {
    id: "artists-brush",
    title: "Artist's Brush",
    category: "Art & Design",
    tags: ["WEBSITE", "UX", "SEO"],
    description: "Website redesign and content strategy.",
    image: "/maia_health_mockup_1789726816504.jpg",
    accentColor: "#7c3aed",
    client: "Artist's Brush Creative Studio",
    duration: "4 Months",
    results: [
      { metric: "+95%", label: "Session Duration Lift" },
      { metric: "+52%", label: "Portfolio Inquiries" },
      { metric: "99/100", label: "Google PageSpeed Score" },
    ],
    challenge:
      "An upscale art studio and design collective required a modern, visually immersive digital portfolio that converted high-value gallery collectors and commercial commissions.",
    solution:
      "Built a bespoke, lightning-fast portfolio with smooth micro-interactions, high-resolution optimized art showcases, and structured artist biography pages for search engines.",
    deliverables: [
      "Custom Modern Portfolio Design & Build",
      "Interactive Artwork Showcase & Filtering",
      "Image Compression & Next-Gen CDN Setup",
      "Commission Inquiry Lead Capture Funnel",
    ],
  },
];

export const TOOLS_CATEGORIES: ToolCategory[] = [
  {
    id: "seo",
    title: "SEO",
    tools: [
      { name: "Google Search Console", logoType: "gsc", color: "#4285F4" },
      { name: "Ahrefs", logoType: "ahrefs", color: "#FF5A00" },
      { name: "SEMrush", logoType: "semrush", color: "#FF642D" },
      { name: "Screaming Frog", logoType: "frog", color: "#7cb342" },
      { name: "Rank Math", logoType: "rankmath", color: "#ff1356" },
    ],
  },
  {
    id: "analytics",
    title: "Analytics",
    tools: [
      { name: "Google Analytics 4", logoType: "ga4", color: "#F9AB00" },
      { name: "Google Tag Manager", logoType: "gtm", color: "#246FDB" },
      { name: "Google Search Console", logoType: "gsc", color: "#4285F4" },
      { name: "Looker Studio", logoType: "looker", color: "#1A73E8" },
    ],
  },
  {
    id: "web",
    title: "Web & Development",
    tools: [
      { name: "WordPress", logoType: "wordpress", color: "#21759B" },
      { name: "Shopify", logoType: "shopify", color: "#96BF48" },
      { name: "WooCommerce", logoType: "woo", color: "#7F54B3" },
      { name: "Elementor", logoType: "elementor", color: "#92003B" },
      { name: "HTML5 / CSS3 / JS", logoType: "code", color: "#E34F26" },
    ],
  },
  {
    id: "social",
    title: "Social Media",
    tools: [
      { name: "Instagram", logoType: "instagram", color: "#E4405F" },
      { name: "Facebook", logoType: "facebook", color: "#1877F2" },
      { name: "LinkedIn", logoType: "linkedin", color: "#0A66C2" },
      { name: "TikTok", logoType: "tiktok", color: "#000000" },
      { name: "X (Twitter)", logoType: "x", color: "#000000" },
      { name: "Pinterest", logoType: "pinterest", color: "#BD081C" },
    ],
  },
  {
    id: "creative",
    title: "Creative",
    tools: [
      { name: "Canva", logoType: "canva", color: "#00C4CC" },
      { name: "Photoshop", logoType: "photoshop", color: "#31A8FF" },
      { name: "Figma", logoType: "figma", color: "#F24E1E" },
      { name: "Illustrator", logoType: "illustrator", color: "#FF9A00" },
    ],
  },
  {
    id: "ai",
    title: "AI & Productivity",
    tools: [
      { name: "Claude AI", logoType: "claude", color: "#D97706" },
      { name: "ChatGPT 4o", logoType: "chatgpt", color: "#10A37F" },
      { name: "Gemini", logoType: "gemini", color: "#3B82F6" },
      { name: "Perplexity", logoType: "perplexity", color: "#06B6D4" },
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description: "Understand the business and goals",
    details: "Deep-dive stakeholder interviews, audience persona mapping, and clarifying commercial targets.",
  },
  {
    step: "02",
    title: "Analyse",
    description: "Study data, SEO, competitors and users",
    details: "Quantitative traffic analysis, keyword opportunity mapping, and competitor gap audits.",
  },
  {
    step: "03",
    title: "Strategise",
    description: "Prioritise what matters most",
    details: "Designing an actionable growth roadmap ranked by impact vs. effort.",
  },
  {
    step: "04",
    title: "Execute",
    description: "Implement changes across channels",
    details: "High-velocity implementation of technical fixes, content, web UX, and marketing campaigns.",
  },
  {
    step: "05",
    title: "Measure & Optimise",
    description: "Track results and improve continuously",
    details: "Monitoring KPI lift, weekly reporting, iterative A/B testing, and sustainable compound growth.",
  },
];

export const ABOUT_MILESTONES: MilestoneItem[] = [
  {
    icon: "GraduationCap",
    title: "Computer Engineering",
    subtitle: "Diploma",
    tag: "Education",
  },
  {
    icon: "GraduationCap",
    title: "Advanced Computer Science",
    subtitle: "B.E. (Bachelor of Engineering)",
    tag: "Degree",
  },
  {
    icon: "Briefcase",
    title: "IT Experience",
    subtitle: "Professional Experience",
    tag: "Industry",
  },
  {
    icon: "Globe",
    title: "London / UK Experience",
    subtitle: "2.5+ Years",
    tag: "International",
  },
  {
    icon: "TrendingUp",
    title: "Digital Marketing",
    subtitle: "SEO + Analytics + Social",
    tag: "Specialization",
  },
  {
    icon: "Target",
    title: "Data-Driven Growth",
    subtitle: "My Goal",
    tag: "Focus",
  },
];
