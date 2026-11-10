"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    id: "agency-scope",
    question: "What does an SEO and digital marketing agency actually do?",
    answer:
      "We help the right people find your business online and make it easy for them to get in touch. In practice that means fixing technical problems on your website, improving and creating the pages people search for, building your local presence, running paid campaigns where they make sense, and reporting on the enquiries and sales that result.",
  },
  {
    id: "seo-timeline",
    question: "How long does SEO take to show results?",
    answer:
      "Technical fixes and improvements to existing pages can show movement within a few weeks to a few months. New content and authority usually take longer, often several months, depending on your competition, your website’s history and how much you can invest. We will give you a realistic view after the audit, and we never guarantee rankings.",
  },
  {
    id: "aeo-geo-need",
    question: "What are AEO and GEO, and do I need them?",
    answer:
      "Answer engine optimisation (AEO) and generative engine optimisation (GEO) are about making your content clear, accurate and well structured so that search features and AI assistants can understand it and, potentially, cite it. They build on good SEO rather than replacing it. No one can guarantee inclusion in AI answers, but clear, evidence-backed content improves your chances. Read about our AEO and GEO service.",
  },
  {
    id: "target-markets",
    question: "Do you work with businesses outside India and the UK?",
    answer:
      "Yes. We work with businesses in the UK and India and support clients in other English-speaking markets remotely. Tell us where your customers are and we’ll confirm whether we’re the right fit.",
  },
  {
    id: "website-builds",
    question: "Can you build or fix my website as well?",
    answer:
      "Yes. We design and develop WordPress, WooCommerce and Shopify websites, and we can improve an existing site’s speed, structure and conversion paths without a full rebuild. See website design and development.",
  },
  {
    id: "getting-started",
    question: "How do we get started?",
    answer:
      "Request a free search audit or send us a message. We’ll review your website, ask a few questions about your goals and come back with what we’d prioritise first. There’s no obligation to continue.",
  },
];

export default function Faq() {
  // First item open by default like the reference design
  const [openId, setOpenId] = useState<string | null>("agency-scope");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#0B1220] text-stone-900 dark:text-white transition-colors duration-500 overflow-hidden"
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] rounded-full bg-[#2563EB]/[0.06] dark:bg-[#2563EB]/[0.10] blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ========================================================
              LEFT COLUMN: Header & "Book a 15 min call" Card
          ======================================================== */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            {/* FAQs Tag with Dot */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#2563EB] dark:bg-[#14B8A6]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#2563EB] dark:text-[#14B8A6]">
                FAQ
              </span>
            </div>
            {/* Main Section Heading with Enhanced Size */}
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-stone-900 dark:text-white leading-[1.12] mb-8 sm:mb-10">
              Questions People
              <br />
              <span className="text-[#2563EB] dark:text-[#2f97ee]">
                Ask Me
              </span>
            </h2>

            {/* Avatar Image Display Only */}
            <div className="relative mt-6 sm:mt-8 max-w-sm">
              <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden p-3 sm:p-4">
                <div className="relative w-full aspect-square rounded-2xl sm:rounded-[24px] overflow-hidden">
                  <Image
                    src="/image-photo.png"
                    alt="FAQ Avatar"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 280px, 360px"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: Clean Accordion Q&A List
          ======================================================== */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            {FAQ_LIST.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="rounded-2xl sm:rounded-3xl bg-[#F8FAFC] dark:bg-[#111B2E] border border-orange-200/80 dark:border-white/10 p-5 sm:p-6 shadow-sm hover:border-orange-500/50 transition-all duration-200"
                >
                  {/* Question Header & Toggle Button */}
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-base sm:text-lg md:text-xl font-bold text-stone-900 dark:text-white leading-snug">
                      {faq.question}
                    </span>

                    <span className="flex-shrink-0 text-stone-500 dark:text-stone-400 transition-transform duration-200">
                      {isOpen ? (
                        <X className="w-5 h-5 text-stone-800 dark:text-stone-200" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  {/* Expandable Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3.5 text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed font-normal">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
