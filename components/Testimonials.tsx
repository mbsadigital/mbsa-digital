"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ShieldCheck,
  Quote,
  ArrowUpRight,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface TestimonialCard {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  metric: string;
  metricLabel: string;
  quote: string;
  projectSlug: string;
}

const TESTIMONIALS: TestimonialCard[] = [
  {
    id: "harris-pharmacy",
    name: "Dr. James Thornton",
    role: "Operations Director",
    company: "Harris Healthcare UK",
    location: "London, UK",
    avatar: "/clients/dr-james.jpg",
    metric: "+190%",
    metricLabel: "Inbound Patient Calls",
    quote:
      "Our London branches were invisible in local search. Within 4 months of restructuring our local SEO and paid campaigns, inbound calls surged by 190%. We now hold the #1 Local 3-Pack rank across every target borough.",
    projectSlug: "/projects?id=harris-pharmacy",
  },
  {
    id: "maia-health",
    name: "Elena Rostova",
    role: "Co-Founder & Brand Director",
    company: "Maia Health & Beauty UK",
    location: "London, UK",
    avatar: "/clients/elena-rostova.jpg",
    metric: "+320%",
    metricLabel: "Organic Search Lift",
    quote:
      "The technical crawl fixes, Core Web Vitals optimization to 1.1s LCP, and skincare topic clusters generated over 48,000 monthly visits and cut our customer acquisition cost by 42%.",
    projectSlug: "/projects?id=maia-health",
  },
  {
    id: "drtungs-uk",
    name: "Marcus Sterling",
    role: "UK E-Commerce Lead",
    company: "drTung's Oral Care UK",
    location: "Manchester, UK",
    avatar: "/clients/marcus-sterling.jpg",
    metric: "+240%",
    metricLabel: "Organic Revenue Lift",
    quote:
      "Programmatic product schemas and Shopify collection refactoring unlocked 42 Google rich snippets and drove a 240% lift in direct revenue without spending extra on ads.",
    projectSlug: "/projects?id=drtungs-uk",
  },
  {
    id: "artists-brush",
    name: "Sophia Vance",
    role: "Principal Artist & Director",
    company: "Studio Brush Collective",
    location: "London, UK",
    avatar: "/clients/sophia-vance.jpg",
    metric: "4.2x",
    metricLabel: "Commission Bookings",
    quote:
      "The new Next.js website loads instantly at 0.8s LCP. Commercial artwork commissions multiplied 4.2x in 90 days. Professional, data-driven, and exceptional execution.",
    projectSlug: "/projects?id=artists-brush",
  },
];

export default function Testimonials() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [slideDirection, setSlideDirection] = useState<"normal" | "reverse">("normal");

  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#0B1220] text-stone-900 dark:text-white transition-colors duration-500 overflow-hidden"
      aria-label="Client Testimonials and Endorsements"
    >
      <style>{`
        @keyframes testimonials-slide {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .testimonials-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: testimonials-slide 32s linear infinite;
        }

        .testimonials-paused {
          animation-play-state: paused !important;
        }

        .testimonials-reverse {
          animation-direction: reverse;
        }
      `}</style>

      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full bg-[#2563EB]/[0.06] dark:bg-[#2563EB]/[0.10] blur-[150px] pointer-events-none" />

      {/* Proper Grid Container matching the site's max-w-7xl and left/right padding */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] dark:text-[#14B8A6] mb-2">
              <span className="w-5 h-px bg-[#2563EB] dark:bg-[#14B8A6]" />
              <span>CLIENT VALIDATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-stone-900 dark:text-white leading-[1.12]">
              Trusted by Founders.<br />
              <span className="text-[#2563EB]">
                Proven by Results.
              </span>
            </h2>
          </div>

          {/* Controls: Auto-Play Indicator & Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-white/[0.05] border border-stone-200 dark:border-white/10 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isPlaying ? "bg-emerald-400" : "bg-amber-400"} opacity-75`} />
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? "bg-emerald-500" : "bg-amber-500"}`} />
              </span>
              <span className="text-[11px] font-bold text-stone-600 dark:text-stone-300">
                {isPlaying ? "Auto-Sliding" : "Paused on Hover"}
              </span>
            </div>

            {/* Play/Pause & Direction Toggles */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSlideDirection((prev) => (prev === "normal" ? "reverse" : "normal"))}
                aria-label="Reverse slide direction"
                title="Change slide direction"
                className="w-8 h-8 rounded-xl bg-white dark:bg-white/10 hover:bg-[#2563EB] hover:text-white border border-stone-200 dark:border-white/15 text-stone-700 dark:text-stone-200 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
              >
                {slideDirection === "normal" ? (
                  <ChevronLeft className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsPlaying((prev) => !prev)}
                aria-label={isPlaying ? "Pause auto slide" : "Resume auto slide"}
                title={isPlaying ? "Pause auto slide" : "Resume auto slide"}
                className="w-8 h-8 rounded-xl bg-white dark:bg-white/10 hover:bg-[#2563EB] hover:text-white border border-stone-200 dark:border-white/15 text-stone-700 dark:text-stone-200 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================
            AUTO-PLAYING SLIDING MARQUEE TRACK (Pauses on touch/hover)
            Properly bounded within the container with elegant side fades
        ======================================================== */}
        <div
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl py-2"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          onTouchStart={() => setIsPlaying(false)}
          onTouchEnd={() => setIsPlaying(true)}
        >
          <div
            className={`testimonials-track gap-4 sm:gap-6 ${!isPlaying ? "testimonials-paused" : ""
              } ${slideDirection === "reverse" ? "testimonials-reverse" : ""}`}
          >
            {[0, 1].map((setIdx) => (
              <div
                key={setIdx}
                className="flex items-center gap-4 sm:gap-6 shrink-0"
                aria-hidden={setIdx === 1}
              >
                {TESTIMONIALS.map((item) => (
                  <div
                    key={`${setIdx}-${item.id}`}
                    className="
                      group
                      shrink-0 w-[280px] min-[360px]:w-[310px] sm:w-[360px] lg:w-[385px]
                      rounded-2xl sm:rounded-3xl p-4.5 sm:p-6
                      bg-[#F8FAFC] dark:bg-[#111B2E]
                      border border-orange-200/80 dark:border-white/10
                      hover:border-orange-500/70 dark:hover:border-orange-500/70
                      hover:shadow-xl hover:shadow-orange-500/15
                      transition-all duration-300
                      flex flex-col justify-between
                      relative overflow-hidden
                    "
                  >
                    {/* Subtle Top Orange Glow Accent on Hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm" />

                    {/* Watermark Quote Icon */}
                    <Quote className="absolute top-3 right-3 w-14 h-14 text-stone-200/35 dark:text-white/[0.02] pointer-events-none" />

                    {/* Top Area: Headshot Photo + Client Info */}
                    <div>
                      <div className="flex items-center gap-3.5 mb-3.5">
                        {/* Real Client Headshot Photo */}
                        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-[#2563EB]/40 shadow-md group-hover:ring-[#2563EB] transition-all">
                          <Image
                            src={item.avatar}
                            alt={item.name}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            sizes="48px"
                          />
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-sm text-stone-900 dark:text-white truncate">
                              {item.name}
                            </h4>
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          </div>

                          <p className="text-[11px] text-stone-500 dark:text-stone-400 truncate">
                            {item.role} • <span className="font-semibold text-stone-700 dark:text-stone-300">{item.company}</span>
                          </p>

                          {/* 5 Stars */}
                          <div className="flex items-center gap-0.5 text-amber-500 mt-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Short & Punchy Quote */}
                      <p className="text-xs sm:text-[13px] text-stone-700 dark:text-stone-200 leading-relaxed italic line-clamp-3 mb-4">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    {/* Bottom Area: Measurable Outcome Pill + Case Study Link */}
                    <div className="pt-3 border-t border-stone-200/70 dark:border-white/10 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-base sm:text-lg font-black text-[#2563EB] leading-none">
                          {item.metric}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                          {item.metricLabel}
                        </span>
                      </div>

                      <Link
                        href={item.projectSlug}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2563EB] hover:text-[#1D4ED8] group/link shrink-0"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Side Fade Gradient Overlays directly at container edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#F8FAFC] dark:from-[#0B1220] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#F8FAFC] dark:from-[#0B1220] to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
