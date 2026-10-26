"use client";

import React from "react";
import Image from "next/image";
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
  PenLine,
  Plane,
  Megaphone,
  BarChart3,
  ChevronLeft,
  ChevronRight,
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
        <clipPath id="uk-flag-clip">
          <path d="M0 0v30h60V0z" />
        </clipPath>
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M0 0l60 30m0-30L0 30" clipPath="url(#uk-flag-clip)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0v30M0 15h60" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
      </svg>
    </span>
  );
}

export interface CertificateItem {
  title: string;
  issuer: string;
  image?: string; // Add your certificate image path here (e.g. "/banner/googleads.png" or "/my-cert.png")
  credentialUrl?: string; // Optional URL to verify online
}

const CURRENT_ROLE = {
  role: "Digital Marketing Specialist",
  badge: "ACTIVE ROLE",
  description:
    "I Started in SEO over five years ago and I Still enjoy the detective work: finding why a page isn't ranking, fixing it and watching it climb. I lived and worked in London from Sep 2023 to Nov 2025, handing UK health and beauty brands, which taught me how British customers search and what they trust. I now lead a small team and handle International Clients from India.",
};

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  points?: string[];
  skills?: string[];
}

const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Digital Marketing Specialist",
    company: "Mamo Technolabs",
    period: "Sep 2023 – Nov 2025",
    icon: Briefcase,
    description:
      "Lead SEO and campaigns across several client accounts, tracking budgets and ROI.Build and maintain WordPress, Shopify and WooCommerce websites.Mentor the in house team and run international client meetings.",
    points: [
      "Technical SEO & architecture optimizations increasing organic traffic",
      "GA4 custom event telemetry, user journey attribution & CRO testing",
      "Managed international multi-market campaigns and cross-functional teams",
    ],
    skills: ["Technical SEO", "GA4 & CRO", "International Search", "Campaign ROI"],
  },
  {
    role: "UK Health and Beauty Brands",
    company: "Maia Health and Beauty",
    period: "2021 – 2023",
    icon: Megaphone,
    description:
      "Handled SEO, websites and social while based in London. Grew social engagement by 30% across Instagram, Facebook, LinkedIn, TikTok and Pinterest.Built landing pages, lead magnets, newsletters and content calendars.",
    points: [
      "On-page content optimization & search intent clustering",
      "High-authority white-hat backlink acquisition campaigns",
      "Comprehensive monthly ranking and performance reporting",
    ],
    skills: ["Keyword Research", "On-Page SEO", "Link Building", "Competitor Analysis"],
  },
  {
    role: "Earlier SEO roles",
    company: "Explode Solution, Maskoid, Eliteware, QuickNish",
    period: "2020 – 2021",
    icon: BarChart3,
    description:
      "Senior SEO Executive for international clients, from audits to backlink campaigns.Started as a Junior SEO Executive and grew through each role.Freelance WordPress and SEO for e-commerce stores.",
    points: [
      "Local directory citations and Google Business Profile management",
      "Assisted in customer review generation & weekly traffic audits",
    ],
    skills: ["Local SEO", "GMB", "Citation Building", "Traffic Reporting"],
  },
];

const JOURNEY = [
  {
    title: "Diploma in Computer Engineering",
    institution: "Parul University,Gujarat",
  },
  {
    title: "B.E Computer Engineering",
    institution: "Neotech Institute of Technology,Gujarat",
  },
  {
    title: "SEO Carrer Begins",
    institution: "Junior SEO Executive, then Senior SEO roles",
  },
  {
    title: "Msc Advanced Computer Science",
    institution: "University Of Essex, UK",
  },
  {
    title: "Uk Health and Beauty Brands",
    institution: "September 2023 to November 2025, London",
  },
  {
    title: "Team Lead and Strategist",
    institution: "Mamo Technolabs Today",
  },
];

// Add or edit certificates here — just set `image` to any image path in your /public folder
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

function SectionTitle({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2.5 mb-3">
      <div className="w-7 h-7 rounded-lg bg-[#EA580C]/10 dark:bg-[#EA580C]/15 flex items-center justify-center shrink-0">
        <Icon className="w-3.5 h-3.5 text-[#EA580C]" />
      </div>

      <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
        {children}
      </h3>
    </div>
  );
}

export default function About() {
  const [previewCertIndex, setPreviewCertIndex] = React.useState<number | null>(null);
  const [showRoleDetails, setShowRoleDetails] = React.useState<boolean>(false);

  const previewCert = previewCertIndex !== null ? CERTIFICATES[previewCertIndex] : null;

  const handlePrevCert = React.useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setPreviewCertIndex((prev) =>
      prev !== null ? (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length : 0
    );
  }, []);

  const handleNextCert = React.useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setPreviewCertIndex((prev) =>
      prev !== null ? (prev + 1) % CERTIFICATES.length : 0
    );
  }, []);

  React.useEffect(() => {
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
    <section
      id="about"
      className="
        relative overflow-hidden
        py-16 sm:py-20 lg:py-24
        bg-white dark:bg-[#090807]
        text-slate-900 dark:text-white
        transition-colors duration-500
      "
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-orange-500/[0.06] dark:bg-orange-500/[0.08] blur-[120px]" />

        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-orange-500/[0.05] dark:bg-orange-500/[0.07] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#EA580C 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-3 mb-4 sm:mb-5">
          <span className="w-8 h-px bg-[#EA580C] dark:bg-[#F97316]" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#EA580C] dark:text-[#F97316]">
            About me
          </span>
        </div>

        {/* 3-COLUMN HERO ROW:
            LEFT: Journey + Certifications (in space below)
            CENTER: Image with Hover to reveal Active Role Details
            RIGHT: Experience
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-5 xl:gap-6 items-stretch">

          {/* =====================================================
              LEFT SIDE: JOURNEY & CERTIFICATIONS (BELOW JOURNEY)
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="order-2 lg:order-1 lg:col-span-4 min-w-0"
          >
            <div className="
              h-full
              rounded-[24px] sm:rounded-[28px]
              bg-[#FFF9F5]
              dark:bg-[#11100E]
              border border-orange-200/60
              dark:border-white/10
              p-4 sm:p-5
              shadow-[0_15px_45px_rgba(234,88,12,0.06)]
              dark:shadow-[0_15px_45px_rgba(0,0,0,0.35)]
              flex flex-col justify-between
            ">
              <div>
                {/* 1. JOURNEY */}
                <SectionTitle icon={GraduationCap}>
                  JOURNEY
                </SectionTitle>

                <div className="relative ml-1 pl-4 sm:pl-5 border-l-2 border-[#EA580C]/40 space-y-2.5 sm:space-y-3 pt-1">
                  {JOURNEY.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.25,
                        delay: index * 0.03,
                      }}
                      className="relative"
                    >
                      {/* Orange Timeline Dot */}
                      <span className="
                        absolute
                        -left-[21px] sm:-left-[25px]
                        top-1.5
                        w-2.5
                        h-2.5
                        rounded-full
                        bg-[#EA580C]
                        ring-4
                        ring-orange-500/20
                      " />

                      <h4 className="
                        text-xs
                        sm:text-[13px]
                        font-bold
                        text-slate-900
                        dark:text-white
                        leading-snug
                      ">
                        {item.title}
                      </h4>

                      <p className="
                        text-[10.5px]
                        sm:text-[11px]
                        text-slate-500
                        dark:text-slate-400
                        font-medium
                        mt-0.5
                        leading-tight
                      ">
                        {item.institution}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Divider between Journey and Certifications */}
                <div className="my-3.5 sm:my-4 h-px bg-slate-200/80 dark:bg-white/10" />

                {/* 2. CERTIFICATIONS (DIRECT IMAGES IN PLACE) */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <SectionTitle icon={Award}>
                      CERTIFICATIONS
                    </SectionTitle>
                    <span className="text-[10px] font-semibold text-[#EA580C] dark:text-orange-400 flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>Click to view</span>
                    </span>
                  </div>

                  {/* Direct Image Show in Place - Cleanly sized without row option text */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                    {CERTIFICATES.map((certificate, idx) => (
                      <button
                        key={certificate.title}
                        type="button"
                        onClick={() => setPreviewCertIndex(idx)}
                        title={`View ${certificate.title}`}
                        className="
                          group
                          relative
                          w-full
                          aspect-[16/11]
                          rounded-xl
                          overflow-hidden
                          border
                          border-slate-200/90
                          dark:border-white/10
                          bg-slate-50/70
                          dark:bg-[#181614]
                          hover:border-[#EA580C]
                          hover:shadow-md
                          hover:shadow-orange-500/20
                          transition-all
                          duration-300
                          cursor-pointer
                          p-2
                          flex
                          items-center
                          justify-center
                          focus:outline-none
                          focus:ring-2
                          focus:ring-[#EA580C]/40
                        "
                      >
                        {certificate.image ? (
                          <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                              src={certificate.image}
                              alt={certificate.title}
                              fill
                              sizes="(max-width: 768px) 33vw, 120px"
                              className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        ) : (
                          <Award className="w-6 h-6 text-[#EA580C]" />
                        )}

                        {/* Direct clean hover overlay */}
                        <div className="
                          absolute inset-0
                          bg-black/50
                          opacity-0 group-hover:opacity-100
                          transition-opacity duration-200
                          flex items-center justify-center
                          backdrop-blur-[1px]
                        ">
                          <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-xs">
                            <Eye className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              CENTER: PROFILE IMAGE (HOVER TO REVEAL ACTIVE ROLE DETAILS)
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="order-1 lg:order-2 lg:col-span-4 min-w-0"
          >
            <div
              className="
                group
                relative
                h-full
                min-h-[460px] sm:min-h-[500px]
                rounded-[24px] sm:rounded-[28px]
                overflow-hidden
                border border-orange-200/60
                dark:border-white/10
                p-2.5 sm:p-3
                bg-white
                dark:bg-[#11100E]
                shadow-[0_15px_45px_rgba(234,88,12,0.06)]
                dark:shadow-[0_15px_45px_rgba(0,0,0,0.35)]
                flex flex-col justify-between
              "
              onMouseEnter={() => setShowRoleDetails(true)}
              onMouseLeave={() => setShowRoleDetails(false)}
              onClick={() => setShowRoleDetails((prev) => !prev)}
            >
              {/* Profile Image Container */}
              <div className="
                relative
                w-full
                h-full
                min-h-[440px] sm:min-h-[480px]
                rounded-[20px] sm:rounded-[22px]
                overflow-hidden
                bg-stone-100
                dark:bg-stone-900
                border
                border-black/5
                dark:border-white/10
              ">
                <Image
                  src="/about_india_to_uk_flight.jpg"
                  alt="Digital Marketing Specialist"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="
                    object-cover
                    object-[center_15%]
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.04]
                  "
                />






                {/* ==============================================
                    SLIDE-UP HOVER OVERLAY: ACTIVE ROLE DETAILS
                ============================================== */}
                <div className={`
                  absolute inset-x-0 bottom-0
                  p-4 sm:p-5
                  rounded-t-[22px]
                  bg-gradient-to-t
                  from-white/95 via-white/90 to-white/80
                  dark:from-[#11100E]/95 dark:via-[#11100E]/90 dark:to-[#11100E]/80
                  backdrop-blur-xl
                  border-t
                  border-orange-500/30
                  transition-all
                  duration-500
                  ease-out
                  z-20
                  ${showRoleDetails
                    ? "translate-y-0 opacity-100 pointer-events-auto"
                    : "translate-y-full opacity-0 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto"
                  }
                `}>
                  {/* Peek Bar: Always visible strip at the bottom */}
                  <div className="flex items-center justify-between gap-2 mb-2.5 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse" />
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white leading-tight">
                        {CURRENT_ROLE.role}
                      </h4>
                    </div>

                    <span className="
                      px-2
                      py-0.5
                      rounded-full
                      bg-orange-700/10
                      text-[#FB923C]
                      text-[9px]
                      font-bold
                      tracking-wider
                      uppercase
                      border
                      border-orange-700/70
                      shrink-0
                    ">
                      {CURRENT_ROLE.badge}
                    </span>
                  </div>

                  {/* Expandable Body: Shown on hover */}
                  <div className="space-y-3 pt-1">
                    <p className="text-[11.5px] sm:text-xs leading-relaxed text-stone-700 dark:text-stone-300">
                      {CURRENT_ROLE.description}
                    </p>

                    {/* INDIA TO UK FLIGHT ROUTE WITH AIRPLANE */}
                    <div className="
                      p-2
                      rounded-xl
                      bg-white/10 dark:bg-white/5
                      border
                      border-stone-200/40 dark:border-white/15
                      backdrop-blur-md
                      flex
                      items-center
                      justify-between
                      gap-2
                    ">
                      {/* India Flag & Label */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <IndiaFlag className="w-3.5 h-2.5" />
                        <span className="text-[10px] font-bold text-stone-900 dark:text-white">
                          India
                        </span>
                      </div>

                      {/* Flight Path with Animated Airplane */}
                      <div className="flex-1 flex items-center justify-center relative px-1">
                        <div className="w-full h-px border-t border-dashed border-orange-500/70 relative" />
                        <div className="
                          absolute
                          px-1.5 py-0.5
                          rounded-full
                          bg-orange-500/20
                          border
                          border-orange-500/50
                          flex
                          items-center
                          justify-center
                          text-orange-500
                          shadow-xs
                        ">
                          <Plane className="w-3.5 h-3.5 rotate-45 animate-pulse" />
                        </div>
                      </div>

                      {/* UK Flag & Label */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="text-[10px] font-bold text-stone-900 dark:text-white">
                          UK
                        </span>
                        <UKFlag className="w-3.5 h-2.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT SIDE: EXPERIENCE
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="order-3 lg:order-3 lg:col-span-4 min-w-0"
          >
            <div className="
              h-full
              rounded-[24px] sm:rounded-[28px]
              bg-[#FFF9F5]
              dark:bg-[#11100E]
              border border-orange-200/60
              dark:border-white/10
              p-4 sm:p-5
              shadow-[0_15px_45px_rgba(234,88,12,0.06)]
              dark:shadow-[0_15px_45px_rgba(0,0,0,0.35)]
              flex flex-col justify-between
            ">
              <div>
                <SectionTitle icon={Briefcase}>
                  EXPERIENCE
                </SectionTitle>

                <div className="space-y-2.5 pt-0.5">
                  {EXPERIENCE.map((exp, idx) => (
                    <div
                      key={idx}
                      className="
                        group
                        rounded-xl
                        border
                        border-slate-200/80
                        dark:border-white/10
                        bg-slate-50/60
                        dark:bg-white/[0.02]
                        p-2.5 sm:p-3
                        hover:border-orange-500/40
                        hover:bg-orange-50/20
                        dark:hover:bg-[#EA580C]/[0.03]
                        transition-all
                        duration-200
                      "
                    >
                      <div className="flex items-start justify-between gap-1.5">
                        <div className="min-w-0">
                          <h5 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white leading-tight">
                            {exp.role}
                          </h5>
                          <p className="text-[10.5px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-[9.5px] sm:text-[10px] shrink-0 font-semibold text-[#EA580C] dark:text-[#FB923C] bg-orange-100/70 dark:bg-orange-500/15 px-1.5 py-0.5 rounded-full border border-orange-200/60 dark:border-orange-500/20">
                          {exp.period}
                        </span>
                      </div>

                      {exp.description && (
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                          {exp.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Certificate Image Lightbox / Preview Modal (PROPER HIGH-RES VIEW) */}
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
                bg-white dark:bg-[#141210]
                rounded-2xl sm:rounded-3xl
                p-4 sm:p-6
                border border-slate-200 dark:border-white/10
                shadow-2xl
                cursor-default
                flex flex-col
              "
            >
              {/* Top Bar with Title and Close Button */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="min-w-0 pr-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-500/15 text-[#EA580C] border border-orange-500/30">
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
                  className="
                    shrink-0
                    p-2
                    rounded-full
                    text-slate-400
                    hover:text-slate-700
                    dark:hover:text-white
                    hover:bg-slate-100
                    dark:hover:bg-white/10
                    transition-colors
                  "
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image Frame - Proper Large Showcase */}
              <div className="
                relative
                w-full
                h-[260px] sm:h-[340px] md:h-[380px]
                rounded-xl sm:rounded-2xl
                bg-slate-50 dark:bg-stone-950/80
                border border-slate-200/80 dark:border-white/10
                p-4 sm:p-6
                flex items-center justify-center
                shadow-inner
                overflow-hidden
              ">
                {previewCert.image && (
                  <div className="relative w-full h-full">
                    <Image
                      src={previewCert.image}
                      alt={previewCert.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 90vw, 650px"
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                )}

                {/* Previous & Next Navigation Buttons */}
                {CERTIFICATES.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevCert}
                      className="
                        absolute left-3 top-1/2 -translate-y-1/2
                        p-2.5 rounded-full
                        bg-black/60 hover:bg-black/85
                        text-white
                        border border-white/20
                        backdrop-blur-md
                        transition-all duration-200
                        shadow-md
                      "
                      aria-label="Previous certificate"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      type="button"
                      onClick={handleNextCert}
                      className="
                        absolute right-3 top-1/2 -translate-y-1/2
                        p-2.5 rounded-full
                        bg-black/60 hover:bg-black/85
                        text-white
                        border border-white/20
                        backdrop-blur-md
                        transition-all duration-200
                        shadow-md
                      "
                      aria-label="Next certificate"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Modal Footer */}
              <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-3 text-xs">
                {/* Dots indicator */}
                <div className="flex items-center gap-1.5">
                  {CERTIFICATES.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setPreviewCertIndex(i)}
                      className={`h-2 rounded-full transition-all duration-200 ${previewCertIndex === i
                        ? "w-6 bg-[#EA580C]"
                        : "w-2 bg-slate-300 dark:bg-stone-700 hover:bg-slate-400"
                        }`}
                      aria-label={`Go to certificate ${i + 1}`}
                    />
                  ))}
                  <span className="text-[11px] text-slate-400 ml-1.5 font-medium">
                    {(previewCertIndex ?? 0) + 1} of {CERTIFICATES.length}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Google Certified Credential</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}