"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Hero from "@/components/Hero";

// Code-split below-the-fold sections to maximize LCP and minimize initial JS execution
const Banner = dynamic(() => import("@/components/Banner"));
const Services = dynamic(() => import("@/components/Services"));
const Projects = dynamic(() => import("@/components/Projects"));
const Gsc = dynamic(() => import("@/components/Gsc"));
const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Blog = dynamic(() => import("@/components/Blog"));
const Faq = dynamic(() => import("@/components/Faq"));
const Contact = dynamic(() => import("@/components/Contact"));

// Reusable smooth scroll reveal section component
function RevealSection({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -60px 0px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  // Global scroll tracking for smooth progress bar
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track scroll position for "Back to top" button
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setShowScrollTop(latest > 500);
    });
    const unsubscribeProgress = scrollYProgress.on("change", (latest) => {
      setScrollPercent(Math.round(latest * 100));
    });

    return () => {
      unsubscribe();
      unsubscribeProgress();
    };
  }, [scrollY, scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1220] text-stone-900 dark:text-stone-100 flex flex-col transition-colors duration-500 relative">
      {/* Top Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2563EB] via-[#14B8A6] to-[#2563EB] origin-left z-[9999] shadow-[0_0_12px_rgba(37,99,235,0.85)] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Main Website Content Container */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 flex flex-col">
          {/* 1. Hero Section (Rendered immediately for optimal LCP & Core Web Vitals) */}
          <Hero />

          {/* 2. Results Strip: Proof within the first scroll (impressions, local growth, LCP, client names) */}

          {/* Tool Stack Marquee Ribbon */}
          <Banner />

          {/* 3. Services / What I Do with Motion inView */}
          <RevealSection>
            <Services />
          </RevealSection>

          {/* 4. Featured Work / Projects with Motion inView */}
          <RevealSection>
            <Projects />
          </RevealSection>

          {/* 5. Live Google Search Console & Analytics Showcase */}
          <RevealSection>
            <Gsc />
          </RevealSection>

          {/* 6. About Profile Dossier with Motion inView */}
          <RevealSection>
            <About />
          </RevealSection>

          {/* 7. Tools Stack / Skills with Motion inView */}
          <RevealSection>
            <Skills />
          </RevealSection>

          {/* 8. Client Testimonials & Endorsements */}
          <RevealSection>
            <Testimonials />
          </RevealSection>

          {/* 9. Blog Articles Section with Motion inView */}
          <RevealSection>
            <Blog />
          </RevealSection>

          {/* 10. Frequently Asked Questions (FAQ) Section with Motion inView */}
          <RevealSection>
            <Faq />
          </RevealSection>

          {/* 11. Pre-Footer CTA Banner & Contact Drawer with Motion inView */}
          <RevealSection>
            <Contact />
          </RevealSection>
        </main>
      </div>

      {/* Floating Scroll To Top Button with In-View & Progress */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-2xl bg-white/90 dark:bg-[#111B2E]/90 text-[#2563EB] border border-orange-600/35 backdrop-blur-xl shadow-[0_4px_25px_rgba(37,99,235,0.25)] hover:border-orange-600 hover:shadow-[0_8px_35px_rgba(37,99,235,0.50)] transition-all duration-300 flex items-center gap-1.5 sm:gap-2 group cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2563EB] transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-stone-700 dark:text-stone-300">
              {scrollPercent}%
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
