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
  ExternalLink,
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
  Calendar,
  Layers,
  ShieldCheck,
  Check,
} from "lucide-react";

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

interface CertificateItem {
  title: string;
  issuer: string;
  image?: string;
  credentialUrl?: string;
}

const CERTIFICATES: CertificateItem[] = [
  {
    title: "Google Ads Search & PPC Certified",
    issuer: "Google Skillshop",
    image: "/banner/googleads.png",
  },
  {
    title: "Google Analytics 4 (GA4) Certification",
    issuer: "Google Analytics Academy",
    image: "/banner/googleanalytics.png",
  },
  {
    title: "Google Search Console Specialist",
    issuer: "Google Search Central",
    image: "/banner/googlesearchconsole.jpeg",
  },
];

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
  metrics: { label: string; value: string };
}

const EXPERIENCES_DETAILED: DetailedExperience[] = [
  {
    id: "mamo",
    role: "Digital Marketing Specialist & Team Lead",
    company: "Mamo Technolabs",
    period: "Sep 2023 – Nov 2025",
    location: "India & International Accounts",
    flag: "india",
    active: true,
    icon: Briefcase,
    tagline: "High-Performance Technical SEO & Multi-Market Enterprise Growth",
    description:
      "Lead SEO strategy and comprehensive digital marketing campaigns across multi-market client accounts, tracking budgets and maximizing ROI. Build and maintain high-performance WordPress, Shopify, and WooCommerce websites. Mentor the in-house team and lead international client consultations.",
    achievements: [
      "Technical SEO & architecture optimizations increasing organic traffic and organic conversions",
      "GA4 custom event telemetry, user journey attribution modeling, and conversion rate optimization (CRO) testing",
      "Managed international multi-market campaigns and led cross-functional developer & marketing teams",
      "Engineered Core Web Vitals performance tuning resulting in sub-second LCP and 99+ Lighthouse scores",
    ],
    skills: ["Technical SEO", "GA4 & CRO", "International Search", "Campaign ROI", "WordPress & Shopify", "Core Web Vitals"],
    metrics: { label: "Organic ROI Uplift", value: "+340%" },
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
      "Managed SEO, web architecture, and organic social channels while based in London. Grew social engagement by 30% across Instagram, Facebook, LinkedIn, TikTok, and Pinterest. Built high-converting landing pages, lead magnets, email newsletters, and content calendars tailored to UK consumer search intent.",
    achievements: [
      "On-page content optimization & search intent clustering tailored for competitive UK health & beauty queries",
      "High-authority white-hat backlink acquisition campaigns and digital PR across UK publishers",
      "Grew organic social engagement by 30% across Instagram, Facebook, LinkedIn, TikTok, and Pinterest",
      "Comprehensive monthly ranking, revenue attribution, and organic market share reporting",
    ],
    skills: ["Keyword Research", "On-Page SEO", "Link Building", "Competitor Analysis", "UK Search Intent", "Social Growth"],
    metrics: { label: "Social & Search Lift", value: "+30%" },
  },
  {
    id: "explode",
    role: "Senior SEO Executive",
    company: "Explode Solution, Maskoid, Eliteware, QuickNish",
    period: "2020 – 2021",
    location: "Gujarat, India",
    flag: "india",
    icon: BarChart3,
    tagline: "Algorithmic Precision, Crawl Audits & Local Visibility Architecture",
    description:
      "Senior SEO Executive for international accounts, leading technical audits and white-hat link acquisition campaigns. Advanced from Junior SEO Executive with consistent ranking gains across competitive niches. Delivered custom WordPress development and SEO architecture for e-commerce stores.",
    achievements: [
      "Local directory citations, NAP consistency, and Google Business Profile optimization for local & SMB clients",
      "Assisted in customer review generation campaigns & weekly algorithmic traffic audits",
      "Conducted extensive technical crawling, indexation diagnosis, and schema markup deployments",
      "Rapid career progression from Junior SEO Executive to Senior Executive based on verifiable ranking gains",
    ],
    skills: ["Local SEO", "GMB Optimization", "Citation Building", "Traffic Reporting", "Technical Auditing", "Schema Architecture"],
    metrics: { label: "SERP Footprint", value: "Top 3" },
  },
];

interface JourneyStep {
  step: string;
  category: "ACADEMIC" | "CAREER" | "INTERNATIONAL";
  title: string;
  institution: string;
  period: string;
  location: string;
  flag: "india" | "uk";
  highlights: string;
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
    highlights:
      "Established foundational mastery of computer architecture, operating systems, data networks, and programmatic algorithmic logic.",
  },
  {
    step: "02",
    category: "ACADEMIC",
    title: "B.E Computer Engineering",
    institution: "Neotech Institute of Technology",
    period: "2017 – 2020",
    location: "Gujarat, India",
    flag: "india",
    highlights:
      "Advanced software engineering, database management systems, web applications, and technical computing architecture.",
  },
  {
    step: "03",
    category: "CAREER",
    title: "SEO Career Foundations",
    institution: "Junior SEO Executive → Senior SEO Executive",
    period: "2020 – 2021",
    location: "India & Global Accounts",
    flag: "india",
    highlights:
      "Deep-dive into search engine crawling mechanisms, Google ranking algorithms, technical auditing, and data-backed link acquisition.",
  },
  {
    step: "04",
    category: "INTERNATIONAL",
    title: "MSc Advanced Computer Science",
    institution: "University of Essex",
    period: "2021 – 2022",
    location: "Colchester / London, UK",
    flag: "uk",
    highlights:
      "Master of Science in the United Kingdom, specializing in advanced computational intelligence, information retrieval, and modern software architectures.",
  },
  {
    step: "05",
    category: "INTERNATIONAL",
    title: "UK Health & Beauty Brands Lead",
    institution: "Maia Health and Beauty",
    period: "2021 – 2023",
    location: "London, United Kingdom",
    flag: "uk",
    highlights:
      "Lived and worked in London managing UK consumer brands. Mastered UK search psychology, digital PR, e-commerce CRO, and organic social growth.",
  },
  {
    step: "06",
    category: "CAREER",
    title: "Team Lead & Digital Strategist",
    institution: "Mamo Technolabs",
    period: "Sep 2023 – Nov 2025 (Present)",
    location: "India & Transatlantic Accounts",
    flag: "india",
    highlights:
      "Directing cross-functional growth teams, managing multi-market international client accounts, and implementing cutting-edge technical SEO & GA4 telemetry.",
  },
];

export default function AboutClient() {
  const [selectedExpId, setSelectedExpId] = useState<string>("mamo");
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

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#090807] text-slate-900 dark:text-white font-[family-name:var(--font-plus-jakarta-sans)] transition-colors duration-500 overflow-hidden">
      {/* Background ambient glows - Exact color palette */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-12 left-1/4 w-[600px] h-[600px] rounded-full bg-[#2563EB]/[0.06] dark:bg-[#2563EB]/[0.08] blur-[150px]" />
        <div className="absolute top-1/2 right-10 w-[550px] h-[550px] rounded-full bg-orange-500/[0.05] dark:bg-orange-500/[0.07] blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#2563EB 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-24">
        
        {/* =========================================================
            HEADER & BREADCRUMBS
        ========================================================= */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6">
            <Link
              href="/"
              className="hover:text-[#2563EB] dark:hover:text-[#14B8A6] transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-[#2563EB] dark:text-[#FB923C] font-bold">About Dossier</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-white/10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2563EB]/[0.06] dark:bg-[#2563EB]/[0.12] border border-[#2563EB]/20 text-[#2563EB] dark:text-[#60A5FA] text-[11px] font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Dossier · Engineering Rigor &amp; Search Mastery</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-950 dark:text-white">
                Journey, Experience &amp;
                <span className="block mt-1 sm:mt-2 text-[#2563EB] dark:text-[#3B82F6]">
                  International Strategy.
                </span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                MSc Computer Science (UK) graduate with 5+ years specializing in technical SEO, Core Web Vitals optimization, and multi-market revenue growth across the UK and India.
              </p>
            </div>

            {/* Quick Stats Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="px-4 py-3 rounded-2xl bg-[#FFF9F5] dark:bg-[#11100E] border border-blue-200/60 dark:border-white/10 shadow-xs">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Global Practice
                </span>
                <span className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5 mt-0.5">
                  <IndiaFlag className="w-3.5 h-2.5" />
                  <span>India</span>
                  <span className="text-[#2563EB] font-normal">↔</span>
                  <UKFlag className="w-3.5 h-2.5" />
                  <span>United Kingdom</span>
                </span>
              </div>
            </div>
          </div>

          {/* Quick Jump Links */}
          <div className="flex items-center gap-2 overflow-x-auto py-4 text-xs font-bold scrollbar-none">
            <span className="text-slate-400 uppercase tracking-widest text-[10px] mr-1 shrink-0">
              Sections:
            </span>
            <a
              href="#executive-profile"
              className="px-3.5 py-1.5 rounded-full bg-blue-50/80 hover:bg-[#2563EB] hover:text-white dark:bg-white/5 dark:hover:bg-[#2563EB] text-[#2563EB] dark:text-slate-300 border border-blue-200/50 dark:border-white/10 transition-all whitespace-nowrap"
            >
              01. Profile &amp; Transatlantic Bridge
            </a>
            <a
              href="#experience-matrix"
              className="px-3.5 py-1.5 rounded-full bg-blue-50/80 hover:bg-[#2563EB] hover:text-white dark:bg-white/5 dark:hover:bg-[#2563EB] text-[#2563EB] dark:text-slate-300 border border-blue-200/50 dark:border-white/10 transition-all whitespace-nowrap"
            >
              02. Professional Experience Matrix
            </a>
            <a
              href="#journey-roadmap"
              className="px-3.5 py-1.5 rounded-full bg-blue-50/80 hover:bg-[#2563EB] hover:text-white dark:bg-white/5 dark:hover:bg-[#2563EB] text-[#2563EB] dark:text-slate-300 border border-blue-200/50 dark:border-white/10 transition-all whitespace-nowrap"
            >
              03. Academic &amp; Career Roadmap
            </a>
            <a
              href="#verified-credentials"
              className="px-3.5 py-1.5 rounded-full bg-blue-50/80 hover:bg-[#2563EB] hover:text-white dark:bg-white/5 dark:hover:bg-[#2563EB] text-[#2563EB] dark:text-slate-300 border border-blue-200/50 dark:border-white/10 transition-all whitespace-nowrap"
            >
              04. Verified Credentials
            </a>
          </div>
        </div>

        {/* =========================================================
            SECTION 1: THE IMAGE & PROFILE - TRANSATLANTIC EXECUTIVE HUB (NEW WAY!)
        ========================================================= */}
        <section id="executive-profile" className="mb-20 sm:mb-28 scroll-mt-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#2563EB] dark:bg-[#14B8A6]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB] dark:text-[#14B8A6]">
              01 · Executive Profile &amp; Global Footprint
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left: High-Definition Portrait with Holographic Glass Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col"
            >
              <div className="
                relative
                h-full
                min-h-[460px] sm:min-h-[520px]
                rounded-[28px] sm:rounded-[32px]
                overflow-hidden
                p-3
                bg-[#FFF9F5] dark:bg-[#11100E]
                border border-orange-200/60 dark:border-white/10
                shadow-[0_20px_60px_rgba(37,99,235,0.08)]
                dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                flex flex-col justify-between
              ">
                {/* Portrait Container */}
                <div className="relative w-full h-full min-h-[440px] sm:min-h-[490px] rounded-[24px] overflow-hidden bg-slate-900 border border-black/5 dark:border-white/10">
                  <Image
                    src="/about_india_to_uk_flight.jpg"
                    alt="Digital Marketing Specialist"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-[center_15%] transition-transform duration-700 ease-out hover:scale-105"
                  />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-20">
                    <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                      <GraduationCap className="w-3.5 h-3.5 text-orange-400" />
                      <span>MSc Advanced CS · UK</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-extrabold uppercase tracking-wide flex items-center gap-1 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>ACTIVE LEAD</span>
                    </span>
                  </div>

                  {/* Bottom Overlay Info Card */}
                  <div className="absolute inset-x-3 bottom-3 p-4 rounded-2xl bg-white/90 dark:bg-[#11100E]/90 backdrop-blur-xl border border-blue-500/20 z-20 shadow-xl">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        Digital Marketing Specialist
                      </h3>
                      <span className="text-[10px] font-bold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-wider">
                        Mamo Technolabs
                      </span>
                    </div>
                    <p className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                      Leading SEO strategy, international enterprise client audits, and high-performance technical architecture.
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-200/80 dark:border-white/10">
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#2563EB]" />
                        <span>Transatlantic Practice</span>
                      </span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2563EB] hover:text-[#1D4ED8] dark:text-[#60A5FA]"
                      >
                        <span>Schedule Call</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: The Transatlantic Corridor & Bio Bento */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 flex flex-col justify-between space-y-5"
            >
              {/* Card 1: Transatlantic Flight Corridor (India 🇮🇳 ✈️ UK 🇬🇧) */}
              <div className="
                p-5 sm:p-6
                rounded-[28px]
                bg-[#FFF9F5] dark:bg-[#11100E]
                border border-blue-200/60 dark:border-white/10
                shadow-[0_15px_45px_rgba(37,99,235,0.06)]
                dark:shadow-[0_15px_45px_rgba(0,0,0,0.35)]
              ">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                      <Plane className="w-4 h-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                        Transatlantic Growth Bridge
                      </h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">
                        September 2023 – November 2025 (London, UK) &amp; India Operations
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] dark:text-[#60A5FA] border border-[#2563EB]/20">
                    Dual-Market Edge
                  </span>
                </div>

                {/* Animated Flight Vector Line */}
                <div className="p-4 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 mb-4">
                  <div className="flex items-center justify-between gap-3">
                    {/* Origin: India */}
                    <div className="flex items-center gap-2 shrink-0">
                      <IndiaFlag className="w-5 h-3.5 shadow-xs" />
                      <div>
                        <span className="text-xs font-extrabold text-slate-900 dark:text-white block">
                          India
                        </span>
                        <span className="text-[10px] font-medium text-slate-500">
                          Engineering &amp; Strategy
                        </span>
                      </div>
                    </div>

                    {/* Flight Path with Plane */}
                    <div className="flex-1 flex items-center justify-center relative px-3">
                      <div className="w-full h-px border-t-2 border-dashed border-[#2563EB]/50 relative" />
                      <div className="
                        absolute
                        px-2 py-1
                        rounded-full
                        bg-[#2563EB]
                        text-white
                        shadow-md shadow-blue-500/25
                        flex items-center gap-1
                      ">
                        <Plane className="w-3 h-3 rotate-45 animate-pulse" />
                        <span className="text-[9px] font-mono font-bold tracking-tight">4,300 mi</span>
                      </div>
                    </div>

                    {/* Destination: UK */}
                    <div className="flex items-center gap-2 shrink-0 text-right">
                      <div>
                        <span className="text-xs font-extrabold text-slate-900 dark:text-white block">
                          London, UK
                        </span>
                        <span className="text-[10px] font-medium text-slate-500">
                          Search Psychology &amp; Brands
                        </span>
                      </div>
                      <UKFlag className="w-5 h-3.5 shadow-xs" />
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Between September 2023 and November 2025, I lived and worked in London managing UK health and beauty brands—learning firsthand how UK consumers search, evaluate credibility, and convert. Today, I lead a specialized growth team and manage international enterprise and SMB accounts from India with seamless time-zone overlap.
                </p>
              </div>

              {/* Card 2: Executive Bio Narrative */}
              <div className="
                p-5 sm:p-6
                rounded-[28px]
                bg-[#FFF9F5] dark:bg-[#11100E]
                border border-blue-200/60 dark:border-white/10
                shadow-[0_15px_45px_rgba(37,99,235,0.06)]
                dark:shadow-[0_15px_45px_rgba(0,0,0,0.35)]
              ">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    The Search Detective Philosophy
                  </h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  I started in SEO over five years ago and continue to love the detective work: discovering why a page is not ranking, resolving technical bottlenecks, diagnosing crawl errors, and watching organic visibility climb sustainably. Every campaign is grounded in clean technical architecture, data-backed GA4 measurement, and high-intent commercial content.
                </p>

                {/* 4 Core Pillars Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4 pt-4 border-t border-slate-200/80 dark:border-white/10">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 text-center">
                    <span className="text-base sm:text-lg font-black text-[#2563EB] block">5+ Yrs</span>
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">Search Mastery</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 text-center">
                    <span className="text-base sm:text-lg font-black text-[#2563EB] block">2 Markets</span>
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">UK 🇬🇧 &amp; India 🇮🇳</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 text-center">
                    <span className="text-base sm:text-lg font-black text-[#2563EB] block">+30%</span>
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">UK Engagement</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 text-center">
                    <span className="text-base sm:text-lg font-black text-[#2563EB] block">100%</span>
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">White-Hat Rigor</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </section>

        {/* =========================================================
            SECTION 2: THE EXPERIENCE MATRIX (NEW WAY!)
        ========================================================= */}
        <section id="experience-matrix" className="mb-20 sm:mb-28 scroll-mt-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#2563EB] dark:bg-[#14B8A6]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB] dark:text-[#14B8A6]">
              02 · Professional Experience Matrix
            </span>
          </div>

          <div className="
            rounded-[28px] sm:rounded-[32px]
            bg-[#FFF9F5] dark:bg-[#11100E]
            border border-orange-200/60 dark:border-white/10
            p-5 sm:p-7 lg:p-8
            shadow-[0_20px_60px_rgba(37,99,235,0.06)]
            dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          ">
            {/* Interactive Role Switcher Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-8 p-1.5 rounded-2xl bg-slate-200/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
              {EXPERIENCES_DETAILED.map((exp) => {
                const isSelected = selectedExpId === exp.id;
                const Icon = exp.icon;
                return (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => setSelectedExpId(exp.id)}
                    className={`
                      relative flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-300 cursor-pointer
                      ${
                        isSelected
                          ? "bg-white dark:bg-[#181614] shadow-md shadow-black/5 border border-slate-200/80 dark:border-white/10 text-slate-900 dark:text-white"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }
                    `}
                  >
                    <div className={`
                      w-9 h-9 rounded-xl flex items-center justify-center shrink-0
                      ${isSelected ? "bg-[#2563EB] text-white" : "bg-slate-300/50 dark:bg-white/10 text-slate-600 dark:text-slate-300"}
                    `}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-black truncate">{exp.company}</span>
                        {exp.flag === "uk" ? <UKFlag className="w-3 h-2" /> : <IndiaFlag className="w-3 h-2" />}
                      </div>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-medium truncate">
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

            {/* Selected Role Detailed Showcase */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExp.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {/* Role Header Banner */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-white/10">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                        {selectedExp.company}
                      </span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                        {selectedExp.flag === "uk" ? <UKFlag className="w-3.5 h-2.5" /> : <IndiaFlag className="w-3.5 h-2.5" />}
                        {selectedExp.location}
                      </span>
                      {selectedExp.active && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold border border-emerald-500/20">
                          CURRENT ROLE
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                      {selectedExp.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                      {selectedExp.tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="px-4 py-2.5 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 text-right">
                      <span className="block text-[10px] uppercase font-bold text-slate-400">
                        {selectedExp.metrics.label}
                      </span>
                      <span className="text-xl font-black text-[#2563EB] dark:text-[#60A5FA]">
                        {selectedExp.metrics.value}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Role Narrative & Key Accomplishments */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Narrative Summary */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="p-4 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>Executive Scope</span>
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {selectedExp.description}
                      </p>
                    </div>

                    {/* Competency Badges */}
                    <div className="p-4 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>Core Methodologies</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedExp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-[11px] font-bold text-slate-700 dark:text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Achievements Checklist */}
                  <div className="lg:col-span-7">
                    <div className="p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 h-full">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Verifiable Achievements &amp; Execution</span>
                      </h4>

                      <div className="space-y-3.5">
                        {selectedExp.achievements.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/20">
                              <Check className="w-3 h-3" />
                            </span>
                            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* =========================================================
            SECTION 3: THE ACADEMIC & CAREER JOURNEY (NEW WAY!)
        ========================================================= */}
        <section id="journey-roadmap" className="mb-20 sm:mb-28 scroll-mt-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#2563EB] dark:bg-[#14B8A6]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB] dark:text-[#14B8A6]">
              03 · Academic &amp; Career Evolution Roadmap
            </span>
          </div>

          <div className="
            rounded-[28px] sm:rounded-[32px]
            bg-[#FFF9F5] dark:bg-[#11100E]
            border border-orange-200/60 dark:border-white/10
            p-5 sm:p-7 lg:p-8
            shadow-[0_20px_60px_rgba(37,99,235,0.06)]
            dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          ">
            <div className="max-w-2xl mb-8">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                From Computer Engineering to International Search Architect
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                A dual-track evolution combining rigorous computing education with hands-on search algorithm engineering and UK commercial brand leadership.
              </p>
            </div>

            {/* Alternating Visual Milestone Roadmap */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#2563EB]/40 space-y-6 sm:space-y-8 pt-2">
              {JOURNEY_ROADMAP.map((item, index) => {
                const isUK = item.flag === "uk";
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="relative group"
                  >
                    {/* Glowing Timeline Marker */}
                    <span className="
                      absolute
                      -left-[31px] sm:-left-[39px]
                      top-2
                      w-3.5
                      h-3.5
                      rounded-full
                      bg-[#2563EB]
                      group-hover:scale-125
                      group-hover:bg-[#1D4ED8]
                      transition-all duration-300
                      ring-4
                      ring-blue-500/20
                      dark:ring-blue-500/30
                    " />

                    <div className="
                      p-4 sm:p-5
                      rounded-2xl
                      bg-white dark:bg-white/[0.03]
                      border border-slate-200/80 dark:border-white/10
                      hover:border-[#2563EB]/40
                      transition-all duration-300
                      shadow-xs
                    ">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md bg-[#2563EB]/10 text-[#2563EB] text-[10px] font-mono font-bold">
                            STEP {item.step}
                          </span>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            {item.category}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300">
                          {isUK ? <UKFlag className="w-3.5 h-2.5" /> : <IndiaFlag className="w-3.5 h-2.5" />}
                          <span>{item.location}</span>
                          <span className="text-slate-400">·</span>
                          <span className="text-[#2563EB] dark:text-[#60A5FA] font-mono text-[11px]">
                            {item.period}
                          </span>
                        </div>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-[#2563EB] dark:text-[#60A5FA] mt-0.5">
                        {item.institution}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                        {item.highlights}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 4: VERIFIED CREDENTIALS & CERTIFICATIONS (NEW WAY!)
        ========================================================= */}
        <section id="verified-credentials" className="mb-20 sm:mb-28 scroll-mt-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#2563EB] dark:bg-[#14B8A6]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB] dark:text-[#14B8A6]">
              04 · Verified Professional Credentials
            </span>
          </div>

          <div className="
            rounded-[28px] sm:rounded-[32px]
            bg-[#FFF9F5] dark:bg-[#11100E]
            border border-blue-200/60 dark:border-white/10
            p-5 sm:p-7 lg:p-8
            shadow-[0_20px_60px_rgba(37,99,235,0.06)]
            dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          ">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200/80 dark:border-white/10">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  Industry Certifications &amp; Accreditations
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Click any certificate card to inspect the full high-resolution verification dossier.
                </p>
              </div>
              <span className="text-xs font-bold text-[#2563EB] dark:text-[#60A5FA] flex items-center gap-1.5 shrink-0">
                <Eye className="w-4 h-4" />
                <span>Interactive High-Res Lightbox</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {CERTIFICATES.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  whileHover={{ y: -4 }}
                  onClick={() => setPreviewCertIndex(idx)}
                  className="
                    group
                    rounded-2xl
                    p-3.5
                    bg-white dark:bg-white/[0.03]
                    border border-slate-200/80 dark:border-white/10
                    hover:border-[#2563EB] dark:hover:border-[#2563EB]
                    hover:shadow-lg hover:shadow-blue-500/10
                    transition-all duration-300
                    cursor-pointer
                    flex flex-col justify-between
                  "
                >
                  {/* Image container */}
                  <div className="
                    relative
                    w-full
                    aspect-[16/10]
                    rounded-xl
                    overflow-hidden
                    bg-slate-50 dark:bg-white/[0.02]
                    border border-slate-200/60 dark:border-white/5
                    p-3
                    flex items-center justify-center
                    mb-3
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

                    {/* Direct clean hover overlay */}
                    <div className="
                      absolute inset-0
                      bg-black/40
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-200
                      flex items-center justify-center
                      backdrop-blur-[1px]
                    ">
                      <div className="px-3 py-1.5 rounded-full bg-white text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-md">
                        <Eye className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>Inspect Credential</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
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
          rounded-[30px] sm:rounded-[36px]
          bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#1E40AF]
          p-6 sm:p-10 lg:p-12
          text-white
          shadow-xl shadow-blue-500/20
          relative overflow-hidden
        ">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-white mb-4">
              <Zap className="w-3.5 h-3.5 text-white" />
              <span>Initiate Strategic Growth</span>
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
              Ready to elevate your organic search revenue?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-blue-100 leading-relaxed">
              Whether you need technical SEO auditing, Core Web Vitals optimization, or full-funnel organic market capture in the UK or internationally, let&apos;s build a custom roadmap.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[#2563EB] hover:bg-blue-50 hover:text-[#1D4ED8] px-6 py-3.5 text-sm font-extrabold shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span>Request Strategic Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 hover:bg-white/25 text-white px-5 py-3.5 text-sm font-bold backdrop-blur-md transition-colors"
              >
                <span>Explore Live Case Studies</span>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/80 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 12 }}
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
              {/* Modal Top Bar */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="min-w-0 pr-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2563EB]/15 text-[#2563EB] dark:text-[#60A5FA] border border-[#2563EB]/30">
                      Verified Credential
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {previewCert.issuer}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1.5 leading-snug">
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

              {/* Certificate High-Res Image Display */}
              <div className="
                relative
                w-full
                h-[280px] sm:h-[360px] md:h-[400px]
                rounded-xl sm:rounded-2xl
                overflow-hidden
                bg-slate-50 dark:bg-black/30
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

              {/* Modal Navigation Footer */}
              <div className="flex items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-200/80 dark:border-white/10">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
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
