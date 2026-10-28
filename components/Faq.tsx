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
    id: "specialization",
    question: "What does an SEO specialist actually do?",
    answer:
      "I make sure the right people can find your website. That means fixing technical problems, writing helpful content around what customers search for, earning trustworthy links, and tracking results so we know what is working.",
  },
  {
    id: "early-stage",
    question: "What is AEO and GEO, and do I need them?",
    answer:
      "AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) help your content get chosen as the answer in featured snippets, voice search, and AI tools like ChatGPT, Gemini, and Perplexity. If your customers ask questions before they buy, you need them.",
  },
  {
    id: "project-timeline",
    question: "How long does SEO take to show results?",
    answer:
      "Small technical fixes can show movement in weeks. Steady ranking and traffic growth usually takes a few months, and it depends on your competition and site history. I will always be honest about timelines.",
  },
  {
    id: "ai-integration",
    question: "Have you worked with UK businesses?",
    answer:
      "Yes. I lived in London from September 2023 to November 2025 and handled UK health, pharmacy, and beauty brands, so I understand UK search habits, spelling, and customer expectations.",
  },
  {
    id: "getting-started",
    question: "Can you build and fix my website too?",
    answer:
      "Yes. I build and maintain WordPress, Shopify, and WooCommerce sites with responsive design, speed, and SEO in mind from day one.",
  },
  {
    id: "quality-assurance",
    question: "How do we start working together?",
    answer:
      "Send me your website and your goal. I will review your current visibility, point out the biggest opportunities and suggest a practical plan.",
  },
];

export default function Faq() {
  // First item open by default like the reference design
  const [openId, setOpenId] = useState<string | null>("specialization");

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
              <span className="text-[#2563EB]">
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
