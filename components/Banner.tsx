"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface BannerToolItem {
  name: string;
  logo: string;
  bgTint?: string;
  hoverBorder?: string;
}

interface BannerProps {
  /** Speed of the animation in seconds (default: 36) */
  speed?: number;
  /** Pause animation when hovering (default: true) */
  pauseOnHover?: boolean;
  /** Custom items for bottom tool ribbon */
  items?: BannerToolItem[];
  /** Optional extra classes */
  className?: string;
}

const DEFAULT_ITEMS: BannerToolItem[] = [
  {
    name: "Semrush",
    logo: "/banner/semrush.png",
    bgTint: "bg-[#FF642D]/10 dark:bg-[#FF642D]/15 border-[#FF642D]/25",
    hoverBorder: "hover:border-red-500 dark:hover:border-red-500 hover:shadow-[0_0_22px_rgba(239,68,68,0.4)]",
  },
  {
    name: "Google Analytics",
    logo: "/banner/googleanalytics.png",
    bgTint: "bg-[#F9AB00]/10 dark:bg-[#F9AB00]/15 border-[#F9AB00]/25",
    hoverBorder: "hover:border-yellow-400 dark:hover:border-yellow-400 hover:shadow-[0_0_22px_rgba(250,204,21,0.45)]",
  },
  {
    name: "Google Ads",
    logo: "/banner/googleads.png",
    bgTint: "bg-[#4285F4]/10 dark:bg-[#4285F4]/15 border-[#4285F4]/25",
    hoverBorder: "hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_0_22px_rgba(59,130,246,0.4)]",
  },
  {
    name: "Screaming Frog",
    logo: "/banner/scramingfrog.png",
    bgTint: "bg-[#107C10]/10 dark:bg-[#107C10]/15 border-[#107C10]/25",
    hoverBorder: "hover:border-green-500 dark:hover:border-green-400 hover:shadow-[0_0_22px_rgba(34,197,94,0.4)]",
  },
  {
    name: "Google My Business",
    logo: "/banner/googlebussiness.png",
    bgTint: "bg-[#1A73E8]/10 dark:bg-[#1A73E8]/15 border-[#1A73E8]/25",
    hoverBorder: "hover:border-blue-500 dark:hover:border-sky-400 hover:shadow-[0_0_22px_rgba(56,189,248,0.4)]",
  },
  {
    name: "RankMath",
    logo: "/banner/rankmath.png",
    bgTint: "bg-[#7A3E9D]/10 dark:bg-[#7A3E9D]/15 border-[#7A3E9D]/25",
    hoverBorder: "hover:border-red-500 dark:hover:border-rose-400 hover:shadow-[0_0_22px_rgba(244,63,94,0.4)]",
  },
  {
    name: "Claude AI",
    logo: "/banner/claude.png",
    bgTint: "bg-[#D97706]/10 dark:bg-[#D97706]/15 border-[#D97706]/25",
    hoverBorder: "hover:border-yellow-500 dark:hover:border-amber-400 hover:shadow-[0_0_22px_rgba(245,158,11,0.45)]",
  },
  {
    name: "ChatGPT",
    logo: "/banner/chatgpt.png",
    bgTint: "bg-[#10A37F]/10 dark:bg-[#10A37F]/15 border-[#10A37F]/25",
    hoverBorder: "hover:border-green-500 dark:hover:border-emerald-400 hover:shadow-[0_0_22px_rgba(16,185,129,0.4)]",
  },
  {
    name: "Ahrefs",
    logo: "/banner/ahref.jpeg",
    bgTint: "bg-[#0052CC]/10 dark:bg-[#0052CC]/15 border-[#0052CC]/25",
    hoverBorder: "hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-[0_0_22px_rgba(37,99,235,0.4)]",
  },
  {
    name: "Search Console",
    logo: "/banner/googlesearchconsole.png",
    bgTint: "bg-[#4285F4]/10 dark:bg-[#4285F4]/15 border-[#4285F4]/25",
    hoverBorder: "hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_0_22px_rgba(59,130,246,0.4)]",
  },
  {
    name: "WooCommerce",
    logo: "/banner/woocommerce.png",
    bgTint: "bg-[#7F54B3]/10 dark:bg-[#7F54B3]/15 border-[#7F54B3]/25",
    hoverBorder: "hover:border-red-500 dark:hover:border-rose-500 hover:shadow-[0_0_22px_rgba(239,68,68,0.4)]",
  },
  {
    name: "PageSpeed Insights",
    logo: "/banner/pagespeedinsights.png",
    bgTint: "bg-[#00BCD4]/10 dark:bg-[#00BCD4]/15 border-[#00BCD4]/25",
    hoverBorder: "hover:border-green-500 dark:hover:border-teal-400 hover:shadow-[0_0_22px_rgba(20,184,166,0.4)]",
  },
];

export const Banner: React.FC<BannerProps> = ({
  speed = 36,
  pauseOnHover = true,
  items = DEFAULT_ITEMS,
  className = "",
}) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-8 sm:py-12 ${className}`}
      style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}
    >
      {/* Subtle dotted grid aura behind the ribbon matching the reference design */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:22px_22px] pointer-events-none" />

      {/* Infinite Marquee Track Container with Left and Right Side Cover */}
      <div
        className="
          relative
          w-full
          [mask-image:linear-gradient(to_right,transparent_0%,black_60px,black_calc(100%-60px),transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_60px,black_calc(100%-60px),transparent_100%)]
          sm:[mask-image:linear-gradient(to_right,transparent_0%,black_140px,black_calc(100%-140px),transparent_100%)]
          sm:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_140px,black_calc(100%-140px),transparent_100%)]
        "
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div className={`marquee-track py-2 ${isPaused ? "marquee-paused" : ""}`}>
          {[0, 1].map((setIdx) => (
            <div
              key={setIdx}
              className="flex items-center gap-3.5 sm:gap-5 pr-3.5 sm:pr-5 shrink-0"
              aria-hidden={setIdx === 1}
            >
              {items.map((item, idx) => (
                <div
                  key={`${setIdx}-${idx}`}
                  className={`
                    group/pill
                    flex
                    items-center
                    gap-2.5
                    sm:gap-3.5
                    pl-2
                    sm:pl-2.5
                    pr-4.5
                    sm:pr-5.5
                    py-1.5
                    sm:py-2
                    rounded-full
                    bg-white/85
                    dark:bg-[#100f0e]/85
                    border
                    border-stone-200/90
                    dark:border-white/10
                    backdrop-blur-xl
                    shadow-[0_4px_18px_rgba(0,0,0,0.04)]
                    dark:shadow-[0_6px_24px_rgba(0,0,0,0.5)]
                    hover:scale-[1.04]
                    transition-all
                    duration-300
                    cursor-pointer
                    shrink-0
                    ${item.hoverBorder || "hover:border-stone-400"}
                  `}
                >
                  {/* Circular brand-tinted icon pod matching reference screenshot */}
                  <div
                    className={`
                      relative
                      w-8
                      h-8
                      sm:w-9.5
                      sm:h-9.5
                      rounded-full
                      flex
                      items-center
                      justify-center
                      shrink-0
                      overflow-hidden
                      p-1.5
                      sm:p-2
                      border
                      transition-transform
                      duration-300
                      group-hover/pill:scale-110
                      ${item.bgTint || "bg-stone-100 dark:bg-white/10 border-stone-200 dark:border-white/10"}
                    `}
                  >
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={28}
                      height={28}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Tool Label - clean & neutral, text does NOT turn orange */}
                  <span className="font-bold text-xs sm:text-sm md:text-[14.5px] text-stone-800 dark:text-stone-100 tracking-tight whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Left Side Cover Overlay (Deep multi-stop gradient) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 sm:w-48 md:w-64 lg:w-80 bg-gradient-to-r from-white via-white/85 dark:from-[#0B1220] dark:via-[#0B1220]/85 to-transparent z-20" />

        {/* Right Side Cover Overlay (Deep multi-stop gradient) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 sm:w-48 md:w-64 lg:w-80 bg-gradient-to-l from-white via-white/85 dark:from-[#0B1220] dark:via-[#0B1220]/85 to-transparent z-20" />
      </div>
    </div>
  );
};

export default Banner;