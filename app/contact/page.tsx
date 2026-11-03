"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Phone,
  Clock,
  MapPin,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Check,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    helpWith: "Free search & website audit",
    service: "Not sure yet, please advise",
    budget: "Prefer not to say",
    message: "",
  });

  const [agreedToPolicy, setAgreedToPolicy] = useState(true);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all required fields (Your Name, Work Email, and Your Goals).");
      return;
    }

    if (!agreedToPolicy) {
      setErrorMessage("Please agree to the privacy consent to submit your enquiry.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && (result?.success || result?.needsActivation)) {
        setSubmitted(true);
      } else {
        throw new Error(result?.error || "Could not deliver your message right now.");
      }
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Something went wrong sending your message. Please use direct email.";
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  const mailtoFallbackUrl = `mailto:mbsadigitalsolutions@gmail.com?subject=${encodeURIComponent(
    `Enquiry: ${formData.helpWith} from ${formData.name || "Client"}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nWork Email: ${formData.email}\nPhone: ${formData.phone || "N/A"}\nCompany: ${formData.company || "N/A"}\nWebsite: ${formData.website || "N/A"}\nHelp With: ${formData.helpWith}\nMain Service: ${formData.service}\nBudget: ${formData.budget}\n\nGoals / Message:\n${formData.message}`
  )}`;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1220] text-slate-900 dark:text-slate-100 font-[family-name:var(--font-plus-jakarta-sans)] transition-colors duration-500 overflow-hidden">
      {/* Background ambient glows matching site design system */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-[#2563EB]/[0.08] dark:bg-[#2563EB]/[0.10] blur-[160px]" />
        <div className="absolute top-1/3 -right-24 w-[550px] h-[550px] rounded-full bg-[#14B8A6]/[0.06] dark:bg-[#14B8A6]/[0.08] blur-[170px]" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#2563EB 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-24">
        {/* =========================================================
            1. BREADCRUMB NAVIGATION
        ========================================================= */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6 sm:mb-8">
          <Link
            href="/"
            className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">Contact</span>
        </div>

        {/* =========================================================
            2. PAGE HEADER (EXACT CONTENT FROM WIREFRAME IMAGE)
        ========================================================= */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3.5 h-1 bg-orange-500 rounded-full" />
            <span className="text-xs font-black uppercase tracking-widest text-slate-600 dark:text-slate-400">
              CONTACT
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.06]">
            Tell us about your <span className="text-[#2563EB]">business</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Request a free search audit, ask for a proposal or just ask a question. A specialist will read your message and reply by email.
          </p>
        </div>

        {/* =========================================================
            3. MAIN CONTENT: 2-COLUMN GRID (FORM + DETAILS)
        ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* =======================================================
              LEFT COLUMN: THE CONTACT FORM CARD
          ======================================================= */}
          <div className="lg:col-span-7 xl:col-span-8 p-6 sm:p-8 md:p-10 rounded-[32px] bg-white dark:bg-[#111B2E] border border-slate-200/90 dark:border-white/10 shadow-xl shadow-blue-500/[0.04]">

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 px-4 text-center max-w-lg mx-auto"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-5 border border-emerald-500/30">
                    <Check className="w-8 h-8 stroke-[2.5]" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white mb-2">
                    Enquiry Received!
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    Thank you, <span className="font-bold text-slate-900 dark:text-white">{formData.name}</span>. A specialist will review your details
                    {formData.website ? ` and analyze ${formData.website}` : ""} and email you at{" "}
                    <span className="font-bold text-[#2563EB] dark:text-[#60A5FA]">{formData.email}</span> within 24 hours.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        website: "",
                        helpWith: "Free search & website audit",
                        service: "Not sure yet, please advise",
                        budget: "Prefer not to say",
                        message: "",
                      });
                    }}
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2563EB] text-white text-xs sm:text-[13.5px] font-bold border hover:border-blue-800 shadow-md shadow-[#2563EB] hover:shadow-[#2563EB] hover:-translate-y-0.5 transition-all duration-300 min-h-[42px] touch-manipulation cursor-pointer"
                  >
                    <span>Send Another Enquiry</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>
              ) : (
                <form key="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  {/* Error Notification Alert */}
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-500/30 text-red-700 dark:text-red-300 text-xs sm:text-sm flex flex-col gap-2"
                    >
                      <div className="flex items-center gap-2 font-semibold">
                        <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                      <div>
                        <a
                          href={mailtoFallbackUrl}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 hover:underline"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Click here to open your email client with your message pre-filled &rarr;</span>
                        </a>
                      </div>
                    </motion.div>
                  )}

                  {/* Row 1: Your name * & Work email * */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                        Your name <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        disabled={loading}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B1220] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                        Work email <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        disabled={loading}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B1220] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone or WhatsApp (optional) & Company (optional) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                        Phone or WhatsApp <span className="text-slate-400 font-normal">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        disabled={loading}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 7... or +91 9..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B1220] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                        Company <span className="text-slate-400 font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        disabled={loading}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your Company Name"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B1220] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Website (optional) & What can we help with? */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                        Website <span className="text-slate-400 font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        disabled={loading}
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="yourcompany.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B1220] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                        What can we help with?
                      </label>
                      <div className="relative">
                        <select
                          disabled={loading}
                          value={formData.helpWith}
                          onChange={(e) => setFormData({ ...formData, helpWith: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B1220] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all appearance-none cursor-pointer pr-10"
                        >
                          <option value="Free search & website audit">Free search &amp; website audit</option>
                          <option value="SEO Strategy & Technical Optimisation">SEO Strategy &amp; Technical Optimisation</option>
                          <option value="Paid Media & PPC (Google & Meta Ads)">Paid Media &amp; PPC (Google &amp; Meta Ads)</option>
                          <option value="Web Design & Performance Engineering">Web Design &amp; Performance Engineering</option>
                          <option value="Analytics, GA4 Tracking & CRO">Analytics, GA4 Tracking &amp; CRO</option>
                          <option value="General Enquiry / Partnership">General Enquiry / Partnership</option>
                        </select>
                        <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                          ▼
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Main service you're interested in (optional) */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                      Main service you&apos;re interested in <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <div className="relative">
                      <select
                        disabled={loading}
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B1220] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all appearance-none cursor-pointer pr-10"
                      >
                        <option value="Not sure yet, please advise">Not sure yet, please advise</option>
                        <option value="Technical SEO & AI Search (AEO/GEO)">Technical SEO &amp; AI Search (AEO/GEO)</option>
                        <option value="SEO Audit (Comprehensive 150-Point)">SEO Audit (Comprehensive 150-Point)</option>
                        <option value="Local SEO & Multi-Location Dominance">Local SEO &amp; Multi-Location Dominance</option>
                        <option value="E-commerce SEO (Shopify / WooCommerce)">E-commerce SEO (Shopify / WooCommerce)</option>
                        <option value="International SEO (UK & Transatlantic)">International SEO (UK &amp; Transatlantic)</option>
                        <option value="Google Ads & PPC Management">Google Ads &amp; PPC Management</option>
                        <option value="Meta Ads & Paid Social Scaling">Meta Ads &amp; Paid Social Scaling</option>
                        <option value="Conversion Rate Optimisation (CRO)">Conversion Rate Optimisation (CRO)</option>
                        <option value="Website Design & Custom Next.js Dev">Website Design &amp; Custom Next.js Dev</option>
                        <option value="Ongoing Strategic Retainer">Ongoing Strategic Retainer</option>
                      </select>
                      <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Row 5: Approximate monthly budget (optional) */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                      Approximate monthly budget <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <div className="relative">
                      <select
                        disabled={loading}
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B1220] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all appearance-none cursor-pointer pr-10"
                      >
                        <option value="Prefer not to say">Prefer not to say</option>
                        <option value="Under £1,000 / $1,200">Under £1,000 / $1,200</option>
                        <option value="£1,000 – £3,000 / $1,200 – $3,800">£1,000 – £3,000 / $1,200 – $3,800</option>
                        <option value="£3,000 – £5,000 / $3,800 – $6,500">£3,000 – £5,000 / $3,800 – $6,500</option>
                        <option value="£5,000+ / $6,500+">£5,000+ / $6,500+</option>
                      </select>
                      <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Row 6: Your goals or question * */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                      Your goals or question <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      disabled={loading}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. We want more enquiries from Google for our clinics in Manchester and Leeds."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B1220] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all resize-none"
                    />
                  </div>

                  {/* Row 7: Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={agreedToPolicy}
                        onChange={(e) => setAgreedToPolicy(e.target.checked)}
                        className="w-4 h-4 mt-0.5 rounded border-slate-300 dark:border-white/20 text-[#2563EB] focus:ring-[#2563EB] cursor-pointer"
                      />
                      <span className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        I agree that MBSA Digital may use these details to respond to my enquiry, as described in the{" "}
                        <span className="text-[#2563EB] dark:text-[#60A5FA] underline font-semibold">
                          privacy policy
                        </span>
                        .
                      </span>
                    </label>
                  </div>

                  {/* Row 8: Submit Button in Brand Style */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="
                        group
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        w-full
                        sm:w-auto
                        px-7
                        sm:px-8
                        py-3
                        sm:py-3.5
                        rounded-full
                        bg-[#2563EB]
                        text-white
                        text-xs
                        sm:text-[13.5px]
                        font-bold
                        border
                        border-transparent
                        hover:border-blue-800
                        shadow-md
                        shadow-[#2563EB]/30
                        hover:shadow-[#2563EB]/50
                        hover:-translate-y-0.5
                        transition-all
                        duration-300
                        min-h-[44px]
                        touch-manipulation
                        cursor-pointer
                        disabled:opacity-60
                      "
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send enquiry</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Row 9: Note under button */}
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed pt-2">
                    Fields marked * are required. Your details are confidential and never shared with third parties.
                  </p>
                </form>
              )}
            </AnimatePresence>

          </div>

          {/* =======================================================
              RIGHT COLUMN: CONTACT DETAILS & WHAT HAPPENS NEXT
          ======================================================= */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">

            {/* Card 1: Contact details (Exact match to Image right top) */}
            <div className="p-6 sm:p-7 rounded-[28px] bg-white dark:bg-[#111B2E] border border-slate-200/90 dark:border-white/10 shadow-lg shadow-blue-500/[0.03]">
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                Contact details
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                    <Mail className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                    <span>EMAIL</span>
                  </div>
                  <a
                    href="mailto:mbsadigitalsolutions@gmail.com"
                    className="text-xs sm:text-sm font-bold text-[#2563EB] dark:text-[#60A5FA] hover:underline break-all block"
                  >
                    mbsadigitalsolutions@gmail.com
                  </a>
                </div>

                {/* India Phone */}
                <div className="pt-4 border-t border-slate-200/70 dark:border-white/5">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                    <Phone className="w-3.5 h-3.5 text-emerald-500" />
                    <span>INDIA</span>
                  </div>
                  <a
                    href="tel:+919574696932"
                    className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors block"
                  >
                    +91 95746 96932
                  </a>
                </div>

                {/* United Kingdom Phone */}
                <div className="pt-4 border-t border-slate-200/70 dark:border-white/5">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                    <Phone className="w-3.5 h-3.5 text-sky-500" />
                    <span>UNITED KINGDOM</span>
                  </div>
                  <a
                    href="tel:+447393107859"
                    className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors block"
                  >
                    +44 7393 107859
                  </a>
                </div>

                {/* Hours */}
                <div className="pt-4 border-t border-slate-200/70 dark:border-white/5">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>HOURS</span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 block">
                    Monday – Friday: 9:00 AM – 6:00 PM (GMT &amp; IST)
                  </span>
                </div>

                {/* Address */}
                <div className="pt-4 border-t border-slate-200/70 dark:border-white/5">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>ADDRESS</span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 block leading-relaxed">
                    London, United Kingdom &amp; Surat, Gujarat, India
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: What happens next (Exact match to Image right bottom) */}
            <div className="p-6 sm:p-7 rounded-[28px] bg-white dark:bg-[#111B2E] border border-slate-200/90 dark:border-white/10 shadow-lg shadow-blue-500/[0.03]">
              <div className="flex items-center gap-2 mb-5">
                <ShieldCheck className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" />
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
                  What happens next
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-500/10 text-[#2563EB] dark:text-[#60A5FA] text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 border border-blue-500/20">
                    1
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    We read your message and, if you shared a website, take an initial look.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-500/10 text-[#2563EB] dark:text-[#60A5FA] text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 border border-blue-500/20">
                    2
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    We reply by email to arrange a short call, or answer your question directly.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-500/10 text-[#2563EB] dark:text-[#60A5FA] text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 border border-blue-500/20">
                    3
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    For audits, we share our findings and recommended priorities on a call.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
