"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  Sparkles,
  Eye,
  X,
  Plane,
  Megaphone,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Globe2,
  ArrowUpRight,
  ArrowLeft,
  Zap,
  MapPin,
  Layers,
  ShieldCheck,
  Check,
  Compass,
  Code2,
  BookOpen,
  Building2,
  Target,
  FileCheck,
  ShoppingCart,
  Users,
  ExternalLink,
  Search,
  ArrowRight,
} from "lucide-react";

/* =========================================================
   FLAG COMPONENTS
========================================================= */

function IndiaFlag({ className = "w-4 h-3" }: { className?: string }) {
  return (
    <span className={`inline-block rounded-xs overflow-hidden shadow-xs ring-1 ring-black/10 shrink-0 ${className}`}>
      <svg viewBox="0 0 640 480" className="w-full h-full block">
        <path fill="#FF9933" d="M0 0h640v160H0z" />
        <path fill="#FFFFFF" d="M0 160h640v160H0z" />
        <path fill="#128807" d="M0 320h640v160H0z" />
        <circle cx="320" cy="240" r="38" fill="#000080" />
        <circle cx="320" cy="240" r="30" fill="#FFFFFF" />
        <circle cx="320" cy="240" r="8" fill="#000080" />
      </svg>
    </span>
  );
}

function UKFlag({ className = "w-4 h-3" }: { className?: string }) {
  return (
    <span className={`inline-block rounded-xs overflow-hidden shadow-xs ring-1 ring-black/10 shrink-0 ${className}`}>
      <svg viewBox="0 0 60 30" className="w-full h-full block">
        <clipPath id="uk-flag-clip-about">
          <path d="M0 0v30h60V0z" />
        </clipPath>
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M0 0l60 30m0-30L0 30" clipPath="url(#uk-flag-clip-about)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0v30M0 15h60" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
      </svg>
    </span>
  );
}

/* =========================================================
   ANIMATED TEXT REVEAL HELPER
========================================================= */

function AnimatedText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.04,
            delayChildren: delay,
          },
        },
      }}
      className={`inline-block ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="inline-block mr-[0.28em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* =========================================================
   IMAGE 1 DATA: PRINCIPLES, WHY WE EXIST & TOOLKIT
========================================================= */

const PRINCIPLES = [
  {
    num: "01",
    title: "Evidence before opinion",
    desc: "Recommendations are based on your data, your customers and your competitors, and we show our reasoning.",
  },
  {
    num: "02",
    title: "Impact before activity",
    desc: "We prioritise the work most likely to move your business forward, even if it's less visible.",
  },
  {
    num: "03",
    title: "Plain English",
    desc: "Reports and advice your whole team can understand and act on, without jargon.",
  },
  {
    num: "04",
    title: "You own everything",
    desc: "Your website, analytics, ad accounts and content belong to your business, always.",
  },
  {
    num: "05",
    title: "No guaranteed rankings",
    desc: "We won't promise outcomes nobody controls. We commit to the work and to honest results.",
  },
  {
    num: "06",
    title: "Ethical methods only",
    desc: "No fake reviews, bought links or tactics that put your business at risk.",
  },
];

const TOOLKIT_ITEMS = [
  { name: "Google Search Console", category: "Indexing & Organic SERP", icon: Search },
  { name: "Google Analytics 4", category: "Telemetry & Attribution", icon: BarChart3 },
  { name: "Google Tag Manager", category: "Custom Event Tracking", icon: Code2 },
  { name: "Looker Studio", category: "Executive Dashboards", icon: BarChart3 },
  { name: "Google Business Profile", category: "Local Maps & 3-Pack", icon: MapPin },
  { name: "Google Ads & Meta Ads", category: "Paid Acquisition", icon: Target },
  { name: "Semrush & Ahrefs", category: "Competitor Intelligence", icon: TrendingUp },
  { name: "Screaming Frog", category: "Technical Crawling", icon: FileCheck },
  { name: "PageSpeed Insights", category: "Core Web Vitals", icon: Zap },
  { name: "WordPress, WooCommerce & Shopify", category: "E-Commerce CMS", icon: ShoppingCart },
];

/* =========================================================
   CERTIFICATES DATA
========================================================= */

interface CertificateItem {
  title: string;
  issuer: string;
  image?: string;
  credentialUrl?: string;
  badge: string;
  date: string;
}

const CERTIFICATES: CertificateItem[] = [
  {
    title: "Google Ads Search & PPC Certified",
    issuer: "Google Skillshop",
    image: "/banner/googleads.png",
    badge: "Official Accreditation",
    date: "Google Central",
  },
  {
    title: "Google Analytics 4 (GA4) Certification",
    issuer: "Google Analytics Academy",
    image: "/banner/googleanalytics.png",
    badge: "Enterprise Measurement",
    date: "Measurement Suite",
  },
  {
    title: "Google Search Console Specialist",
    issuer: "Google Search Central",
    image: "/banner/googlesearchconsole.jpeg",
    badge: "Technical Auditing",
    date: "Search Infrastructure",
  },
];

/* =========================================================
   DETAILED EXPERIENCE MATRIX DATA
========================================================= */

interface DetailedExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  flag: "uk" | "india";
  active?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  description: string;
  achievements: string[];
  skills: string[];
  metrics: { label: string; value: string; detail: string };
}

const EXPERIENCES_DETAILED: DetailedExperience[] = [
  {
    id: "mamo",
    role: "Digital Marketing Specialist & Team Lead",
    company: "Mamo Technolabs",
    period: "Sep 2023 – Nov 2025",
    location: "India & Transatlantic Accounts",
    flag: "india",
    active: true,
    icon: Briefcase,
    tagline: "High-Performance Technical SEO & Multi-Market Enterprise Growth",
    description:
      "Lead enterprise SEO architecture and full-funnel digital campaigns across multi-market client accounts. Architect ultra-fast WordPress, Shopify, and headless platforms with sub-second LCP and 99+ Core Web Vitals. Direct a multidisciplinary growth squad and lead technical consultations for transatlantic clients.",
    achievements: [
      "Technical SEO & crawl architecture optimizations driving massive organic visibility surges across international niches",
      "GA4 custom event telemetry, user journey attribution modeling, and conversion rate optimization (CRO) testing",
      "Managed international multi-market campaigns and led cross-functional developer & marketing teams",
      "Engineered Core Web Vitals performance tuning resulting in sub-second LCP and 99+ Lighthouse scores",
    ],
    skills: [
      "Technical SEO Architecture",
      "GA4 Telemetry & CRO",
      "International Multi-Market Search",
      "Core Web Vitals Engineering",
      "WordPress & Shopify Optimization",
      "Algorithmic Penalty Diagnosis",
    ],
    metrics: {
      label: "Organic ROI Uplift",
      value: "+340%",
      detail: "Multi-client 12-month attribution",
    },
  },
  {
    id: "maia",
    role: "UK Health & Beauty Brands Lead",
    company: "Maia Health and Beauty",
    period: "2021 – 2023",
    location: "London, United Kingdom",
    flag: "uk",
    icon: Megaphone,
    tagline: "On-The-Ground London Search Strategy & E-Commerce Acquisition",
    description:
      "Directed search engine visibility, e-commerce content infrastructure, and customer acquisition channels while living and working in London. Implemented semantic search clustering tailored to UK consumer search intent and scaled organic social community channels by 30%.",
    achievements: [
      "On-page content optimization & search intent clustering tailored for competitive UK health & beauty queries",
      "High-authority white-hat backlink acquisition campaigns and digital PR across prominent UK publishers",
      "Grew organic social engagement by 30% across Instagram, Facebook, LinkedIn, TikTok, and Pinterest",
      "Comprehensive monthly ranking, revenue attribution, and organic market share reporting",
    ],
    skills: [
      "UK Consumer Search Psychology",
      "Digital PR & Link Outreach",
      "Semantic Topic Clustering",
      "E-Commerce CRO Funnels",
      "Competitor SERP Analysis",
      "Omnichannel Organic Growth",
    ],
    metrics: {
      label: "Social & Search Lift",
      value: "+30%",
      detail: "Omnichannel brand engagement",
    },
  },
  {
    id: "explode",
    role: "Senior SEO Executive",
    company: "Explode Solution & Maskoid",
    period: "2020 – 2021",
    location: "Gujarat, India",
    flag: "india",
    icon: BarChart3,
    tagline: "Algorithmic Precision, Crawl Audits & Local Visibility Architecture",
    description:
      "Led technical audits and white-hat link acquisition campaigns for high-growth enterprise clients. Rapidly advanced from Junior SEO Executive to Senior Executive through verifiable top-3 search rankings across competitive commercial keywords.",
    achievements: [
      "Local directory citations, NAP consistency, and Google Business Profile optimization for local & SMB clients",
      "Assisted in customer review generation campaigns & weekly algorithmic traffic audits",
      "Conducted extensive technical crawling, indexation diagnosis, and schema markup deployments",
      "Rapid career progression from Junior SEO Executive to Senior Executive based on verifiable ranking gains",
    ],
    skills: [
      "Local SERP Dominance",
      "Crawl Budget Optimization",
      "Structured Schema Markup",
      "Google Business Profile",
      "Backlink Footprint Auditing",
      "Technical Log Analysis",
    ],
    metrics: {
      label: "SERP Footprint",
      value: "Top 3",
      detail: "Primary target keywords",
    },
  },
];

/* =========================================================
   JOURNEY ROADMAP DATA
========================================================= */

interface JourneyStep {
  step: string;
  category: "ACADEMIC" | "CAREER" | "INTERNATIONAL";
  title: string;
  institution: string;
  period: string;
  location: string;
  flag: "india" | "uk";
  highlights: string;
  badge: string;
  technologies: string[];
}

const JOURNEY_ROADMAP: JourneyStep[] = [
  {
    step: "01",
    category: "ACADEMIC",
    title: "Diploma in Computer Engineering",
    institution: "Parul University",
    period: "2014 – 2017",
    location: "Gujarat, India",
    flag: "india",
    badge: "Engineering Rigor",
    technologies: ["C / C++", "Computer Architecture", "Data Networks", "Operating Systems"],
    highlights:
      "Established foundational mastery of computer systems, networking protocols, hardware architecture, and programmatic algorithmic logic that underpins modern search engine crawlers.",
  },
  {
    step: "02",
    category: "ACADEMIC",
    title: "B.E. in Computer Engineering",
    institution: "Neotech Institute of Technology",
    period: "2017 – 2020",
    location: "Gujarat, India",
    flag: "india",
    badge: "Software Systems",
    technologies: ["Database Architecture", "Web Applications", "Algorithms", "Software Engineering"],
    highlights:
      "Deep study of database management systems, web computing, server architectures, and software design principles—giving me an engineering advantage over non-technical marketers.",
  },
  {
    step: "03",
    category: "CAREER",
    title: "SEO Career Foundations & Algorithm Analysis",
    institution: "Junior SEO Executive → Senior SEO Executive",
    period: "2020 – 2021",
    location: "India & Global Accounts",
    flag: "india",
    badge: "Algorithmic Grounding",
    technologies: ["Google Bot Crawling", "Technical Auditing", "Schema Architecture", "Local SEO"],
    highlights:
      "Direct immersion in search engine crawling mechanisms, Google ranking algorithms, technical auditing, and data-backed link acquisition across high-volume digital stores.",
  },
  {
    step: "04",
    category: "INTERNATIONAL",
    title: "MSc in Advanced Computer Science",
    institution: "University of Essex",
    period: "2021 – 2022",
    location: "Colchester / London, UK",
    flag: "uk",
    badge: "Postgraduate Mastery",
    technologies: ["Information Retrieval", "Computational Intelligence", "Cloud Systems", "Modern Web Architecture"],
    highlights:
      "Master of Science degree in the United Kingdom, specializing in advanced computational intelligence, information retrieval models, machine learning principles, and modern software architectures.",
  },
  {
    step: "05",
    category: "INTERNATIONAL",
    title: "UK Health & Beauty Brands Lead",
    institution: "Maia Health and Beauty",
    period: "2021 – 2023",
    location: "London, United Kingdom",
    flag: "uk",
    badge: "London Market Leadership",
    technologies: ["UK Search Intent", "Digital PR Outreach", "E-Commerce CRO", "Social Search Growth"],
    highlights:
      "Lived and worked in London directing digital visibility for UK consumer brands. Mastered UK search psychology, digital PR outreach, e-commerce CRO, and transatlantic audience acquisition.",
  },
  {
    step: "06",
    category: "CAREER",
    title: "Team Lead & Digital Marketing Specialist",
    institution: "Mamo Technolabs",
    period: "Sep 2023 – Nov 2025 (Present)",
    location: "India & Transatlantic Accounts",
    flag: "india",
    badge: "Enterprise Leadership",
    technologies: ["Technical SEO Strategy", "GA4 Attribution", "Core Web Vitals", "Cross-Functional Squad Leadership"],
    highlights:
      "Directing cross-functional growth teams, managing multi-market international client accounts, and implementing cutting-edge technical SEO & GA4 telemetry for enterprise scalability.",
  },
];

/* =========================================================
   MAIN ABOUT CLIENT COMPONENT
========================================================= */

export default function AboutClient() {
  const [selectedExpId, setSelectedExpId] = useState<string>("mamo");
  const [timelineFilter, setTimelineFilter] = useState<"ALL" | "ACADEMIC" | "CAREER">("ALL");
  const [experienceViewMode, setExperienceViewMode] = useState<"interactive" | "all">("interactive");
  const [previewCertIndex, setPreviewCertIndex] = useState<number | null>(null);

  const selectedExp =
    EXPERIENCES_DETAILED.find((e) => e.id === selectedExpId) || EXPERIENCES_DETAILED[0];

  const previewCert = previewCertIndex !== null ? CERTIFICATES[previewCertIndex] : null;

  const handlePrevCert = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setPreviewCertIndex((prev) =>
      prev !== null ? (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length : 0
    );
  }, []);

  const handleNextCert = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setPreviewCertIndex((prev) =>
      prev !== null ? (prev + 1) % CERTIFICATES.length : 0
    );
  }, []);

  useEffect(() => {
    if (previewCertIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewCertIndex(null);
      if (e.key === "ArrowLeft") handlePrevCert();
      if (e.key === "ArrowRight") handleNextCert();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [previewCertIndex, handlePrevCert, handleNextCert]);

  const filteredTimeline = JOURNEY_ROADMAP.filter((item) => {
    if (timelineFilter === "ALL") return true;
    if (timelineFilter === "ACADEMIC") return item.category === "ACADEMIC" || item.title.includes("MSc");
    if (timelineFilter === "CAREER") return item.category === "CAREER" || item.category === "INTERNATIONAL";
    return true;
  });

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#0B1220] text-slate-900 dark:text-slate-100 font-[family-name:var(--font-plus-jakarta-sans)] transition-colors duration-500 overflow-hidden">

      {/* Background Ambient Glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[650px] h-[650px] rounded-full bg-[#2563EB]/[0.08] dark:bg-[#2563EB]/[0.12] blur-[160px]" />
        <div className="absolute top-1/3 -right-24 w-[600px] h-[600px] rounded-full bg-[#14B8A6]/[0.07] dark:bg-[#14B8A6]/[0.09] blur-[170px]" />
        <div className="absolute bottom-1/4 left-10 w-[550px] h-[550px] rounded-full bg-[#1D4ED8]/[0.06] dark:bg-[#1D4ED8]/[0.10] blur-[180px]" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#2563EB 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-24">

        {/* =========================================================
            HEADER & BREADCRUMBS
        ========================================================= */}
        <div className="mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6"
          >
            <Link
              href="/"
              className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span className="text-slate-300 dark:text-slate-600">/</span>
            <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">About MBSA Digital</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-white/10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/[0.08] dark:bg-[#2563EB]/[0.16] border border-[#2563EB]/20 text-[#2563EB] dark:text-[#60A5FA] text-[11px] font-bold uppercase tracking-wider mb-4"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Dossier · Technical SEO Architect &amp; Engineering Lead</span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-950 dark:text-white">
                <AnimatedText text="Engineering Rigor Meets" />
                <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#14B8A6] bg-clip-text text-transparent">
                  Transatlantic Search Mastery.
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
              >
                MSc Computer Science (UK) graduate with 5+ years driving technical SEO architecture, sub-second Core Web Vitals, and dual-market commercial growth across the United Kingdom and India.
              </motion.p>
            </div>

            {/* Quick Practice Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 shrink-0"
            >
              <div className="px-4 py-3 rounded-2xl bg-white dark:bg-[#111B2E] border border-blue-500/20 dark:border-blue-500/30 shadow-md shadow-blue-500/5">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  Dual-Market Presence
                </span>
                <span className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2 mt-1">
                  <IndiaFlag className="w-4 h-3" />
                  <span>India</span>
                  <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">⇄</span>
                  <UKFlag className="w-4 h-3" />
                  <span>United Kingdom</span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* Quick Jump Navigation Pill Bar */}
          <div className="flex items-center gap-2 overflow-x-auto py-4 text-xs font-bold no-scrollbar">
            <span className="text-slate-400 uppercase tracking-widest text-[10px] mr-1 shrink-0">
              Navigation:
            </span>
            <a
              href="#executive-profile"
              className="px-3.5 py-1.5 rounded-full bg-blue-500/10 hover:bg-[#2563EB] hover:text-white dark:bg-white/5 dark:hover:bg-[#2563EB] text-[#2563EB] dark:text-slate-300 border border-blue-500/20 dark:border-white/10 transition-all whitespace-nowrap"
            >
              01. Executive Profile &amp; Bridge
            </a>
            <a
              href="#why-we-exist"
              className="px-3.5 py-1.5 rounded-full bg-blue-500/10 hover:bg-[#2563EB] hover:text-white dark:bg-white/5 dark:hover:bg-[#2563EB] text-[#2563EB] dark:text-slate-300 border border-blue-500/20 dark:border-white/10 transition-all whitespace-nowrap"
            >
              02. Why We Exist &amp; Principles
            </a>
            <a
              href="#leadership-toolkit"
              className="px-3.5 py-1.5 rounded-full bg-blue-500/10 hover:bg-[#2563EB] hover:text-white dark:bg-white/5 dark:hover:bg-[#2563EB] text-[#2563EB] dark:text-slate-300 border border-blue-500/20 dark:border-white/10 transition-all whitespace-nowrap"
            >
              03. Leadership &amp; Daily Toolkit
            </a>
            <a
              href="#experience-matrix"
              className="px-3.5 py-1.5 rounded-full bg-blue-500/10 hover:bg-[#2563EB] hover:text-white dark:bg-white/5 dark:hover:bg-[#2563EB] text-[#2563EB] dark:text-slate-300 border border-blue-500/20 dark:border-white/10 transition-all whitespace-nowrap"
            >
              04. Professional Experience Matrix
            </a>
            <a
              href="#journey-roadmap"
              className="px-3.5 py-1.5 rounded-full bg-blue-500/10 hover:bg-[#2563EB] hover:text-white dark:bg-white/5 dark:hover:bg-[#2563EB] text-[#2563EB] dark:text-slate-300 border border-blue-500/20 dark:border-white/10 transition-all whitespace-nowrap"
            >
              05. Academic &amp; Career Roadmap
            </a>
          </div>
        </div>

        {/* =========================================================
            SECTION 1: LEFT CONTENT & RIGHT IMAGE (EXECUTIVE PROFILE)
        ========================================================= */}
        <section id="executive-profile" className="mb-24 sm:mb-32 scroll-mt-28">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-1 rounded-full bg-[#2563EB] dark:bg-[#14B8A6]" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#2563EB] dark:text-[#14B8A6]">
              01 · Executive Profile &amp; Global Footprint
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* LEFT COLUMN: NARRATIVE CONTENT, TRANSATLANTIC CORRIDOR & PILLARS */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Card 1: Transatlantic Flight Corridor (India 🇮🇳 ✈️ UK 🇬🇧) */}
              <div className="
                p-6 sm:p-7
                rounded-[28px]
                bg-white dark:bg-[#111B2E]
                border border-slate-200/80 dark:border-white/10
                shadow-xl shadow-blue-500/[0.04]
                relative overflow-hidden
              ">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-[#2563EB] dark:text-[#60A5FA]">
                      <Plane className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">
                        Transatlantic Growth Bridge
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                        Sep 2023 – Nov 2025 (London, UK) &amp; India Growth Headquarters
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-[#2563EB] dark:text-[#60A5FA] border border-blue-500/20">
                    Dual-Market Edge
                  </span>
                </div>

                {/* Animated Flight Vector Line */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0B1220]/70 border border-slate-200/80 dark:border-white/10 mb-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 shrink-0">
                      <IndiaFlag className="w-6 h-4 shadow-sm rounded-xs" />
                      <div>
                        <span className="text-xs font-black text-slate-900 dark:text-white block">
                          India
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                          Engineering Rigor &amp; Strategy
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center relative px-3">
                      <div className="w-full h-px border-t-2 border-dashed border-[#2563EB]/40 relative" />
                      <div className="
                        absolute
                        px-2.5 py-1
                        rounded-full
                        bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]
                        text-white
                        shadow-md shadow-blue-500/30
                        flex items-center gap-1.5
                      ">
                        <Plane className="w-3 h-3 rotate-45 animate-pulse" />
                        <span className="text-[9px] font-mono font-bold tracking-tight">4,300 mi</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0 text-right">
                      <div>
                        <span className="text-xs font-black text-slate-900 dark:text-white block">
                          London, UK
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                          Search Intent &amp; High-Value Markets
                        </span>
                      </div>
                      <UKFlag className="w-6 h-4 shadow-sm rounded-xs" />
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Living and leading search campaigns in London gave me firsthand command of UK consumer intent, digital PR outreach, and high-conversion e-commerce funnels. Today, I lead cross-functional engineering and growth teams from India, orchestrating transatlantic client campaigns with flawless time-zone coverage.
                </p>
              </div>

              {/* Card 2: Strategic Value Pillars & Bio Philosophy */}
              <div className="
                p-6 sm:p-7
                rounded-[28px]
                bg-white dark:bg-[#111B2E]
                border border-slate-200/80 dark:border-white/10
                shadow-xl shadow-blue-500/[0.04]
              ">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center text-[#14B8A6]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">
                      The Search Detective Philosophy
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Algorithmic Precision · Crawl Architecture · GA4 Attribution
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  I started in search over five years ago and treat search engines like vast computational systems to decode. Rather than relying on guesswork, I diagnose crawl bottlenecks, reconstruct internal link equity, implement pristine JSON-LD schema, and tune Core Web Vitals to sub-second thresholds.
                </p>

                {/* 4 Core Quantitative Pillars */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-200/80 dark:border-white/10">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#0B1220]/70 border border-slate-200/80 dark:border-white/10 text-center">
                    <span className="text-lg sm:text-xl font-black text-[#2563EB] dark:text-[#60A5FA] block">5+ Yrs</span>
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Search Architecture</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#0B1220]/70 border border-slate-200/80 dark:border-white/10 text-center">
                    <span className="text-lg sm:text-xl font-black text-[#2563EB] dark:text-[#60A5FA] block">2 Markets</span>
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">UK 🇬🇧 &amp; India 🇮🇳</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#0B1220]/70 border border-slate-200/80 dark:border-white/10 text-center">
                    <span className="text-lg sm:text-xl font-black text-[#2563EB] dark:text-[#60A5FA] block">+340%</span>
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Organic ROI Surge</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#0B1220]/70 border border-slate-200/80 dark:border-white/10 text-center">
                    <span className="text-lg sm:text-xl font-black text-[#2563EB] dark:text-[#60A5FA] block">100%</span>
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">White-Hat Rigor</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t border-slate-200/80 dark:border-white/10">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#2563EB] text-white text-xs sm:text-[13.5px] font-bold border hover:border-blue-800 shadow-md shadow-[#2563EB] hover:shadow-[#2563EB] hover:-translate-y-0.5 transition-all duration-300 min-h-[42px] sm:min-h-[44px] touch-manipulation"
                  >
                    <span>Request Technical SEO Audit</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/how-we-work"
                    className="relative group/link inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/90 dark:bg-[#0f0f11] backdrop-blur-xl text-stone-800 dark:text-white text-xs sm:text-[13.5px] font-semibold shadow-sm hover:bg-orange-600/[0.10] transition-all duration-300 min-h-[42px] sm:min-h-[44px] touch-manipulation before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-orange-500 before:via-amber-400 before:to-orange-600 before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none hover:before:opacity-100 after:content-[''] after:absolute after:inset-[1px] after:rounded-full after:bg-white/90 dark:after:bg-[#0f0f11] after:opacity-0 after:transition-opacity after:duration-300 after:pointer-events-none hover:after:opacity-100"
                  >
                    <span className="relative z-10">See How We Work</span>
                    <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: HIGH-DEFINITION PORTRAIT WITH LIVE GLOWING BORDER & BADGES */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col"
            >
              <div className="
                relative
                h-full
                min-h-[480px] sm:min-h-[550px]
                rounded-[32px]
                overflow-hidden
                p-3
                bg-white dark:bg-[#111B2E]
                border border-slate-200/80 dark:border-white/10
                shadow-2xl shadow-blue-500/10
                flex flex-col justify-between
                live-border-glow
              ">
                <div className="relative w-full h-full min-h-[460px] sm:min-h-[520px] rounded-[26px] overflow-hidden bg-slate-950 border border-black/10 dark:border-white/10">
                  <Image
                    src="/about_india_to_uk_flight.jpg"
                    alt="Digital Marketing Specialist and Technical SEO Architect"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-[center_18%] transition-transform duration-700 ease-out hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-20">
                    <span className="px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                      <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                      <span>MSc Advanced CS · UK</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-extrabold uppercase tracking-wide flex items-center gap-1.5 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>ACTIVE LEAD</span>
                    </span>
                  </div>

                  <div className="absolute inset-x-3 bottom-3 p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-[#0B1220]/95 backdrop-blur-xl border border-blue-500/20 dark:border-blue-500/30 z-20 shadow-2xl">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-sm font-black text-slate-900 dark:text-white">
                        Muskan Shekh
                      </h3>
                      <span className="text-[10px] font-extrabold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-wider">
                        Founder &amp; Head of Search
                      </span>
                    </div>

                    <p className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                      Master of Science in Advanced Computer Science (UK). Driving enterprise SEO strategy, Core Web Vitals, and transatlantic organic growth.
                    </p>

                    <div className="flex items-center justify-between pt-2.5 border-t border-slate-200/80 dark:border-white/10">
                      <span className="text-[10.5px] font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                        <span>Transatlantic Practice · UK ↔ India</span>
                      </span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2563EB] dark:text-[#60A5FA] hover:text-[#1D4ED8] transition-colors"
                      >
                        <span>Schedule Call</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* =========================================================
            SECTION 1.5: WHY WE EXIST & PRINCIPLES (EXACT MATCH TO IMAGE 1)
        ========================================================= */}
        <section id="why-we-exist" className="mb-24 sm:mb-32 scroll-mt-28">

          {/* Part A: WHY WE EXIST (Image 1 top) */}
          <div className="p-6 sm:p-10 rounded-[32px] bg-white dark:bg-[#111B2E] border border-slate-200/80 dark:border-white/10 shadow-xl shadow-blue-500/[0.04] mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-1 bg-[#2563EB] rounded-full" />
              <span className="text-xs font-black uppercase tracking-widest text-[#2563EB] dark:text-[#60A5FA]">
                WHY WE EXIST
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 dark:text-white leading-tight">
                  Search has changed. Most marketing hasn&apos;t caught up.
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Customers now find businesses through a mix of search results, map listings, AI-generated answers and recommendations. Yet many companies still split that work between a freelancer for SEO, a developer for the website and an agency for ads, with nobody responsible for how it fits together.
                </p>
                <p>
                  We started MBSA Digital to close that gap. Our work begins with diagnosis: understanding what is actually stopping the right people from finding and choosing you. Then we fix the highest-value problems first and measure what changes in enquiries and sales, not just traffic.
                </p>
                <p>
                  We&apos;re deliberately honest about what marketing can and can&apos;t promise. Nobody controls Google&apos;s rankings or what AI assistants say. What we control is the quality of the work, the clarity of our advice and the honesty of our reporting.
                </p>
              </div>
            </div>
          </div>

          {/* Part B: PRINCIPLES (Image 1 middle - 6 cards) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-1 rounded-full bg-[#2563EB] dark:bg-[#14B8A6]" />
              <div>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#2563EB] dark:text-[#14B8A6] block">
                  PRINCIPLES
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white mt-1">
                  How we work with clients
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PRINCIPLES.map((p, idx) => (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="
                    p-6
                    rounded-2xl
                    bg-white dark:bg-[#111B2E]
                    border border-slate-200/80 dark:border-white/10
                    shadow-md shadow-blue-500/[0.03]
                    hover:border-blue-500/40
                    transition-all
                    group
                  "
                >
                  <span className="text-xs font-mono font-bold text-slate-400 block mb-3">
                    {p.num}
                  </span>
                  <h4 className="text-base font-black text-slate-900 dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </section>

        {/* =========================================================
            SECTION 1.7 & 1.8: LEADERSHIP & DAILY TOOLKIT (IMAGE 1)
        ========================================================= */}
        <section id="leadership-toolkit" className="mb-24 sm:mb-32 scroll-mt-28 space-y-16">

          {/* Part A: LEADERSHIP (Image 1 bottom) */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-1 rounded-full bg-[#2563EB] dark:bg-[#14B8A6]" />
              <div>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#2563EB] dark:text-[#14B8A6] block">
                  PEOPLE
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white mt-1">
                  Leadership
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Clients work directly with experienced specialists.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Leader 1: Muskan Shekh */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111B2E] border border-blue-500/20 dark:border-blue-500/30 shadow-xl shadow-blue-500/[0.04]">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white flex items-center justify-center font-black text-sm shadow-md shadow-blue-500/25">
                    MBSA
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-950 dark:text-white">
                      Muskan Shekh
                    </h4>
                    <span className="text-xs font-bold text-[#2563EB] dark:text-[#60A5FA]">
                      Founder &amp; Head of Search
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  Muskan has worked in SEO for more than five years, starting as a junior SEO executive and moving into senior SEO and team-lead roles. She spent time in London working with UK health and beauty brands on technical SEO, websites and content. She holds a B.E. in Computer Engineering and an MSc in Advanced Computer Science from the University of Essex, and is Google Ads and Google Analytics certified.
                </p>

                <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
                  <a
                    href="https://linkedin.com/in/muskanshekh"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] dark:text-[#60A5FA] hover:underline"
                  >
                    <span>Connect on LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[10px] font-mono text-slate-400">
                    MSc Computer Science (UK)
                  </span>
                </div>
              </div>

              {/* Leader 2: Specialist Engineering Network */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111B2E] border border-dashed border-slate-300 dark:border-white/20 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 flex items-center justify-center font-black text-sm">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-slate-950 dark:text-white">
                        Specialist Delivery Team
                      </h4>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                        Technical SEO, Web Architecture &amp; Data
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Our extended network brings hand-picked technical engineers, conversion rate specialists, and digital PR outreach strategists. No junior account managers or layers of bureaucracy — you work directly with senior consultants who execute the changes.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span>100% Senior Involvement</span>
                  <Link href="/contact" className="text-[#2563EB] dark:text-[#60A5FA] hover:underline">
                    Meet the Team →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Part B: TOOLKIT (Image 1 bottom - 10 tools) */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-1 rounded-full bg-[#2563EB] dark:bg-[#14B8A6]" />
              <div>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#2563EB] dark:text-[#14B8A6] block">
                  TOOLKIT
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white mt-1">
                  Tools we use every day
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  We use established, industry-standard platforms so our findings can be checked and your data stays in tools you can access:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {TOOLKIT_ITEMS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white dark:bg-[#111B2E] border border-slate-200/80 dark:border-white/10 shadow-xs hover:border-blue-500/40 transition-all flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-[#2563EB] dark:text-[#60A5FA] shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h5 className="text-xs font-black text-slate-900 dark:text-white truncate">
                        {item.name}
                      </h5>
                      <span className="text-[10px] text-slate-400 truncate block">
                        {item.category}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </section>

        {/* =========================================================
            SECTION 2: PROFESSIONAL EXPERIENCE MATRIX
        ========================================================= */}
        <section id="experience-matrix" className="mb-24 sm:mb-32 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-8 h-1 rounded-full bg-[#2563EB] dark:bg-[#14B8A6]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#2563EB] dark:text-[#14B8A6]">
                04 · Professional Experience &amp; Enterprise Leadership
              </span>
            </div>

            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold">
              <button
                type="button"
                onClick={() => setExperienceViewMode("interactive")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${experienceViewMode === "interactive"
                    ? "bg-[#2563EB] text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
              >
                Interactive Spotlight
              </button>
              <button
                type="button"
                onClick={() => setExperienceViewMode("all")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${experienceViewMode === "all"
                    ? "bg-[#2563EB] text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
              >
                Comprehensive View ({EXPERIENCES_DETAILED.length})
              </button>
            </div>
          </div>

          <div className="
            rounded-[32px]
            bg-white dark:bg-[#111B2E]
            border border-slate-200/80 dark:border-white/10
            p-5 sm:p-7 lg:p-9
            shadow-xl shadow-blue-500/[0.04]
            relative
          ">
            {experienceViewMode === "interactive" ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8 p-1.5 rounded-2xl bg-slate-100 dark:bg-[#0B1220]/80 border border-slate-200/80 dark:border-white/10">
                  {EXPERIENCES_DETAILED.map((exp) => {
                    const isSelected = selectedExpId === exp.id;
                    const Icon = exp.icon;
                    return (
                      <button
                        key={exp.id}
                        type="button"
                        onClick={() => setSelectedExpId(exp.id)}
                        className={`
                          relative flex items-center gap-3 p-3.5 rounded-xl text-left transition-all duration-300 cursor-pointer
                          ${isSelected
                            ? "bg-white dark:bg-[#111B2E] shadow-md shadow-blue-500/10 border border-blue-500/20 text-slate-950 dark:text-white"
                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                          }
                        `}
                      >
                        <div className={`
                          w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors
                          ${isSelected ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/20" : "bg-slate-200/70 dark:bg-white/10 text-slate-600 dark:text-slate-300"}
                        `}>
                          <Icon className="w-5 h-5" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-black truncate">{exp.company}</span>
                            {exp.flag === "uk" ? <UKFlag className="w-3.5 h-2.5" /> : <IndiaFlag className="w-3.5 h-2.5" />}
                          </div>
                          <span className="text-[10.5px] text-slate-500 dark:text-slate-400 block font-medium truncate mt-0.5">
                            {exp.period}
                          </span>
                        </div>

                        {exp.active && (
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedExp.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="space-y-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-white/10">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-xs font-black uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                            {selectedExp.company}
                          </span>
                          <span className="text-slate-400">·</span>
                          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-bold">
                            {selectedExp.flag === "uk" ? <UKFlag className="w-3.5 h-2.5" /> : <IndiaFlag className="w-3.5 h-2.5" />}
                            <span>{selectedExp.location}</span>
                          </span>
                          {selectedExp.active && (
                            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black border border-emerald-500/20">
                              ACTIVE LEAD ROLE
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 dark:text-white">
                          {selectedExp.role}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                          {selectedExp.tagline}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <div className="px-5 py-3 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 dark:border-blue-500/30 text-right">
                          <span className="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                            {selectedExp.metrics.label}
                          </span>
                          <span className="text-2xl font-black text-[#2563EB] dark:text-[#60A5FA]">
                            {selectedExp.metrics.value}
                          </span>
                          <span className="block text-[9px] font-medium text-slate-500 dark:text-slate-400">
                            {selectedExp.metrics.detail}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      <div className="lg:col-span-5 space-y-5">
                        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0B1220]/70 border border-slate-200/80 dark:border-white/10">
                          <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white mb-2.5 flex items-center gap-1.5">
                            <Briefcase className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" />
                            <span>Executive Mandate</span>
                          </h4>
                          <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                            {selectedExp.description}
                          </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0B1220]/70 border border-slate-200/80 dark:border-white/10">
                          <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-1.5">
                            <Layers className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" />
                            <span>Core Capabilities &amp; Stack</span>
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedExp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#111B2E] border border-slate-200/80 dark:border-white/10 text-[11px] font-bold text-slate-700 dark:text-slate-300 shadow-xs"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-7">
                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1220]/70 border border-slate-200/80 dark:border-white/10 h-full flex flex-col justify-between">
                          <div>
                            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                              <span>Verifiable Execution &amp; Key Milestones</span>
                            </h4>

                            <div className="space-y-4">
                              {selectedExp.achievements.map((item, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                                  className="flex items-start gap-3.5 p-3 rounded-xl bg-white dark:bg-[#111B2E] border border-slate-200/60 dark:border-white/5 hover:border-blue-500/30 transition-colors"
                                >
                                  <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/20">
                                    <Check className="w-3 h-3" />
                                  </span>
                                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
                                    {item}
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-semibold">
                            <span>Status: Verified Professional Engagement</span>
                            <span className="text-[#2563EB] dark:text-[#60A5FA]">100% Client Retention</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </>
            ) : (
              <div className="space-y-8">
                {EXPERIENCES_DETAILED.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1220]/70 border border-slate-200/80 dark:border-white/10 space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200/80 dark:border-white/10">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-black uppercase text-[#2563EB] dark:text-[#60A5FA]">
                            {exp.company}
                          </span>
                          <span className="text-slate-400">·</span>
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1">
                            {exp.flag === "uk" ? <UKFlag className="w-3 h-2" /> : <IndiaFlag className="w-3 h-2" />}
                            <span>{exp.location}</span>
                          </span>
                        </div>
                        <h4 className="text-lg font-black text-slate-900 dark:text-white">
                          {exp.role}
                        </h4>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-black text-[#2563EB] dark:text-[#60A5FA] block">
                          {exp.metrics.value}
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      {exp.achievements.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
                          <span className="text-emerald-500 shrink-0">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* =========================================================
            SECTION 3: ACADEMIC & CAREER EVOLUTION ROADMAP
        ========================================================= */}
        <section id="journey-roadmap" className="mb-24 sm:mb-32 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-8 h-1 rounded-full bg-[#2563EB] dark:bg-[#14B8A6]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#2563EB] dark:text-[#14B8A6]">
                05 · Academic Foundation &amp; Career Evolution
              </span>
            </div>

            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold">
              <button
                type="button"
                onClick={() => setTimelineFilter("ALL")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${timelineFilter === "ALL"
                    ? "bg-[#2563EB] text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
              >
                Complete Track ({JOURNEY_ROADMAP.length})
              </button>
              <button
                type="button"
                onClick={() => setTimelineFilter("ACADEMIC")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${timelineFilter === "ACADEMIC"
                    ? "bg-[#2563EB] text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
              >
                Academic Track 🎓
              </button>
              <button
                type="button"
                onClick={() => setTimelineFilter("CAREER")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${timelineFilter === "CAREER"
                    ? "bg-[#2563EB] text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
              >
                Career &amp; Leadership 💼
              </button>
            </div>
          </div>

          <div className="
            rounded-[32px]
            bg-white dark:bg-[#111B2E]
            border border-slate-200/80 dark:border-white/10
            p-5 sm:p-7 lg:p-9
            shadow-xl shadow-blue-500/[0.04]
            relative
          ">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white leading-tight">
                <AnimatedText text="From Computational Systems to" />
                <span className="block mt-1 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#14B8A6] bg-clip-text text-transparent">
                  International Search Architecture.
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                A dual-track evolution combining formal computing degrees with direct enterprise search execution, algorithmic auditing, and UK brand growth.
              </p>
            </div>

            <div className="relative pl-6 sm:pl-10 space-y-8 sm:space-y-10 pt-2">
              <div className="absolute left-[11px] sm:left-[15px] top-4 bottom-4 w-[3px] bg-slate-200 dark:bg-white/10">
                <motion.div
                  className="w-full bg-gradient-to-b from-[#2563EB] via-[#38BDF8] to-[#14B8A6]"
                  initial={{ height: "0%" }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </div>

              {filteredTimeline.map((item, index) => {
                const isUK = item.flag === "uk";
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                  >
                    <span className="
                      absolute
                      -left-[31px] sm:-left-[43px]
                      top-5
                      w-4
                      h-4
                      rounded-full
                      bg-[#2563EB]
                      group-hover:scale-130
                      group-hover:bg-[#38BDF8]
                      transition-all duration-300
                      ring-4
                      ring-blue-500/20
                      dark:ring-blue-500/30
                      z-10
                    " />

                    <div className="
                      live-moving-border
                      rounded-2xl
                      p-[1.5px]
                      transition-transform duration-300
                      group-hover:-translate-y-1
                    ">
                      <div className="
                        p-5 sm:p-6
                        rounded-2xl
                        bg-slate-50 dark:bg-[#0B1220]
                        border border-slate-200/60 dark:border-white/5
                        shadow-md shadow-blue-500/[0.03]
                      ">
                        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-md bg-[#2563EB]/15 text-[#2563EB] dark:text-[#60A5FA] text-[10px] font-mono font-black">
                              STEP {item.step}
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                              {item.category}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-[#2563EB] dark:text-[#60A5FA] text-[10px] font-bold">
                              {item.badge}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                            {isUK ? <UKFlag className="w-4 h-2.5" /> : <IndiaFlag className="w-4 h-2.5" />}
                            <span>{item.location}</span>
                            <span className="text-slate-300 dark:text-slate-600">·</span>
                            <span className="text-[#2563EB] dark:text-[#60A5FA] font-mono text-[11px] font-bold">
                              {item.period}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-lg sm:text-xl font-black text-slate-950 dark:text-white leading-snug group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-bold text-[#2563EB] dark:text-[#38BDF8] mt-0.5 flex items-center gap-1.5">
                          {item.category === "ACADEMIC" ? (
                            <BookOpen className="w-3.5 h-3.5" />
                          ) : (
                            <Building2 className="w-3.5 h-3.5" />
                          )}
                          <span>{item.institution}</span>
                        </p>

                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                          {item.highlights}
                        </p>

                        <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap gap-1.5">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded-md bg-white dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-[10px] font-bold text-slate-600 dark:text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 4: VERIFIED CREDENTIALS & CERTIFICATIONS
        ========================================================= */}
        <section id="verified-credentials" className="mb-24 sm:mb-32 scroll-mt-28">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-1 rounded-full bg-[#2563EB] dark:bg-[#14B8A6]" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#2563EB] dark:text-[#14B8A6]">
              06 · Verified Professional Credentials
            </span>
          </div>

          <div className="
            rounded-[32px]
            bg-white dark:bg-[#111B2E]
            border border-slate-200/80 dark:border-white/10
            p-5 sm:p-7 lg:p-9
            shadow-xl shadow-blue-500/[0.04]
          ">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-5 border-b border-slate-200/80 dark:border-white/10">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">
                  Industry Certifications &amp; Accreditations
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Click any certificate card to inspect the full high-resolution verification dossier in the modal.
                </p>
              </div>
              <span className="text-xs font-bold text-[#2563EB] dark:text-[#60A5FA] flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                <Eye className="w-4 h-4" />
                <span>Interactive Lightbox</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {CERTIFICATES.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  whileHover={{ y: -5 }}
                  onClick={() => setPreviewCertIndex(idx)}
                  className="
                    group
                    rounded-2xl
                    p-4
                    bg-slate-50 dark:bg-[#0B1220]/70
                    border border-slate-200/80 dark:border-white/10
                    hover:border-[#2563EB] dark:hover:border-[#2563EB]
                    hover:shadow-xl hover:shadow-blue-500/10
                    transition-all duration-300
                    cursor-pointer
                    flex flex-col justify-between
                  "
                >
                  <div className="
                    relative
                    w-full
                    aspect-[16/10]
                    rounded-xl
                    overflow-hidden
                    bg-white dark:bg-[#111B2E]
                    border border-slate-200/60 dark:border-white/5
                    p-3
                    flex items-center justify-center
                    mb-4
                  ">
                    {cert.image ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 30vw"
                          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <Award className="w-10 h-10 text-[#2563EB]" />
                    )}

                    <div className="
                      absolute inset-0
                      bg-slate-950/60
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-200
                      flex items-center justify-center
                      backdrop-blur-[2px]
                    ">
                      <div className="px-3.5 py-1.5 rounded-full bg-white text-slate-900 text-xs font-black flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>Inspect Verification</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                        {cert.badge}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold">
                        {cert.date}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block">
                      {cert.issuer}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1 leading-snug group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors">
                      {cert.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            BOTTOM STRATEGIC CALL TO ACTION
        ========================================================= */}
        <section className="
          rounded-[32px] sm:rounded-[40px]
          bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#0F172A]
          p-8 sm:p-12 lg:p-16
          text-white
          shadow-2xl shadow-blue-500/25
          relative overflow-hidden
        ">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-teal-400/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-black uppercase tracking-wider text-white mb-4 border border-white/20">
              <Zap className="w-3.5 h-3.5 text-white" />
              <span>Initiate Strategic Growth</span>
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Ready to elevate your organic search revenue?
            </h3>

            <p className="mt-4 text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-2xl">
              Whether you need technical SEO auditing, Core Web Vitals optimization, or full-funnel organic market capture in the UK or internationally, let&apos;s build a custom roadmap.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#2563EB] text-white text-xs sm:text-[13.5px] font-bold border hover:border-blue-800 shadow-md shadow-[#2563EB] hover:shadow-[#2563EB] hover:-translate-y-0.5 transition-all duration-300 min-h-[42px] sm:min-h-[44px] touch-manipulation"
              >
                <span>Request Strategic Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/how-we-work"
                className="relative group/link inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/90 dark:bg-[#0f0f11] backdrop-blur-xl text-stone-800 dark:text-white text-xs sm:text-[13.5px] font-semibold shadow-sm hover:bg-orange-600/[0.10] transition-all duration-300 min-h-[42px] sm:min-h-[44px] touch-manipulation before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-orange-500 before:via-amber-400 before:to-orange-600 before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none hover:before:opacity-100 after:content-[''] after:absolute after:inset-[1px] after:rounded-full after:bg-white/90 dark:after:bg-[#0f0f11] after:opacity-0 after:transition-opacity after:duration-300 after:pointer-events-none hover:after:opacity-100"
              >
                <span className="relative z-10">See Our 4-Step Process</span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* =========================================================
          HIGH-RESOLUTION CERTIFICATE LIGHTBOX MODAL
      ========================================================= */}
      <AnimatePresence>
        {previewCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewCertIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/85 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full max-w-xl sm:max-w-2xl
                bg-white dark:bg-[#111B2E]
                rounded-2xl sm:rounded-3xl
                p-4 sm:p-6
                border border-slate-200 dark:border-white/10
                shadow-2xl
                cursor-default
                flex flex-col
              "
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="min-w-0 pr-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#2563EB]/15 text-[#2563EB] dark:text-[#60A5FA] border border-[#2563EB]/30">
                      {previewCert.badge}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                      {previewCert.issuer}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mt-1.5 leading-snug">
                    {previewCert.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setPreviewCertIndex(null)}
                  title="Close (Esc)"
                  className="
                    p-2
                    rounded-full
                    bg-slate-100 hover:bg-slate-200
                    dark:bg-white/10 dark:hover:bg-white/20
                    text-slate-600 dark:text-slate-300
                    transition-colors
                    shrink-0
                    cursor-pointer
                  "
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="
                relative
                w-full
                h-[280px] sm:h-[360px] md:h-[400px]
                rounded-xl sm:rounded-2xl
                overflow-hidden
                bg-slate-100 dark:bg-black/40
                border border-slate-200/80 dark:border-white/10
                flex items-center justify-center
                p-2 sm:p-4
              ">
                {previewCert.image ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={previewCert.image}
                      alt={previewCert.title}
                      fill
                      sizes="(max-width: 768px) 95vw, 650px"
                      className="object-contain"
                      priority
                    />
                  </div>
                ) : (
                  <div className="text-center p-6">
                    <Award className="w-16 h-16 text-[#2563EB] mx-auto mb-3" />
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Certificate Verified
                    </p>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-200/80 dark:border-white/10">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                  {previewCertIndex !== null ? previewCertIndex + 1 : 1} of {CERTIFICATES.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevCert}
                    title="Previous Certificate (←)"
                    className="
                      p-2 rounded-xl
                      bg-slate-100 hover:bg-slate-200
                      dark:bg-white/10 dark:hover:bg-white/20
                      text-slate-700 dark:text-slate-200
                      transition-colors cursor-pointer
                    "
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNextCert}
                    title="Next Certificate (→)"
                    className="
                      p-2 rounded-xl
                      bg-slate-100 hover:bg-slate-200
                      dark:bg-white/10 dark:hover:bg-white/20
                      text-slate-700 dark:text-slate-200
                      transition-colors cursor-pointer
                    "
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
