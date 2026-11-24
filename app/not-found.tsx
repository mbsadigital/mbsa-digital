import React from "react";
import Link from "next/link";
import {
  Home,
  ArrowRight,
  Search,
  Sparkles,
  BarChart3,
  BookOpen,
  Compass,
  Mail,
  RotateCcw,
} from "lucide-react";

export default function NotFound() {
  const popularLinks = [
    {
      title: "Growth & SEO Services",
      desc: "Explore 25 tailored search, AI & digital performance solutions.",
      href: "/services",
      icon: Sparkles,
      badge: "25 Solutions",
    },
    {
      title: "Client Case Studies",
      desc: "Real campaign execution data with documented revenue lift.",
      href: "/projects",
      icon: BarChart3,
      badge: "Verified ROI",
    },
    {
      title: "Live Analytics Proofs",
      desc: "Google Search Console, GA4 & GMB performance telemetry.",
      href: "/analytics",
      icon: Search,
      badge: "Live Telemetry",
    },
    {
      title: "Insights & Guides",
      desc: "Deep dives on technical SEO, algorithm updates & AI search.",
      href: "/blog",
      icon: BookOpen,
      badge: "10 Articles",
    },
  ];

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#0B1220] text-stone-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      {/* Background Ambience Flares */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        {/* Growth Blue Flare */}
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[460px] w-[460px] rounded-full bg-[#2563EB]/[0.08] dark:bg-[#2563EB]/[0.14] blur-[140px]" />
        {/* Teal Accent Flare */}
        <div className="absolute right-1/4 bottom-1/4 h-[380px] w-[380px] rounded-full bg-[#14B8A6]/[0.06] dark:bg-[#14B8A6]/[0.10] blur-[150px]" />
        {/* Subtle Matrix Grid */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#2563EB 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        {/* 1. Status Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 text-[#2563EB] dark:text-[#60A5FA] text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
          <Compass className="w-3.5 h-3.5 animate-spin [animation-duration:12s]" />
          <span>404 — URL Crawl Anomaly</span>
        </div>

        {/* 2. Hero 404 Numerical Display */}
        <div className="relative my-2 select-none">
          <div className="text-7xl min-[400px]:text-8xl sm:text-9xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#14B8A6] drop-shadow-sm">
            404
          </div>
          <div className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-stone-500 dark:text-stone-400 mt-2">
            HTTP_STATUS_CODE: 404_NOT_FOUND
          </div>
        </div>

        {/* 3. Headline & Description */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-stone-900 dark:text-white tracking-tight mt-4 mb-3">
          Lost in Search Space?
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-stone-600 dark:text-stone-300 max-w-xl mx-auto leading-relaxed mb-8">
          The page or URL you followed might have been moved, renamed, or is temporarily unindexed.
          Our algorithmic discovery engine has several direct pathways to get you back on track:
        </p>

        {/* 4. Primary & Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 min-h-[44px]"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-[#111B2E] hover:bg-stone-50 dark:hover:bg-[#1E293B] text-stone-800 dark:text-stone-100 hover:text-[#2563EB] dark:hover:text-[#60A5FA] border border-stone-200/90 dark:border-white/10 hover:border-blue-400 text-xs sm:text-sm font-bold shadow-xs hover:-translate-y-0.5 active:scale-95 transition-all duration-200 min-h-[44px]"
          >
            <Sparkles className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" />
            <span>Explore 25 Services</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-stone-100 dark:bg-white/5 hover:bg-stone-200/80 dark:hover:bg-white/10 text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-white/10 text-xs sm:text-sm font-bold transition-all duration-200 min-h-[44px]"
          >
            <Mail className="w-4 h-4 text-[#14B8A6]" />
            <span>Request Free Audit</span>
          </Link>
        </div>

        {/* 5. Popular Recommended Destinations (4-Card Grid) */}
        <div className="text-left">
          <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
            <span className="w-6 h-px bg-[#2563EB]" />
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              Popular Destinations on MBSA Digital
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-[#111B2E] border border-stone-200/90 dark:border-white/10 shadow-xs hover:shadow-xl hover:shadow-blue-500/10 hover:border-[#2563EB]/60 dark:hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-800/60 text-[#2563EB] dark:text-[#60A5FA] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-stone-500 dark:text-stone-400 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-stone-900 dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors mb-1.5 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 dark:border-white/5 flex items-center justify-between text-xs font-bold text-[#2563EB] dark:text-[#60A5FA]">
                    <span>Visit Section</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
