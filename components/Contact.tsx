"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Globe, Send, AlertCircle, Loader2, Mail, Phone, ChevronDown, Search, Check, X } from "lucide-react";
import { SERVICES_DATA } from "@/lib/servicesData";

interface ServiceOption {
  id: string;
  shortTitle: string;
  fullTitle: string;
  badge: string;
  num: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  ...SERVICES_DATA.map((srv) => ({
    id: srv.id,
    shortTitle: srv.shortTitle || srv.title,
    fullTitle: srv.title,
    badge: srv.badge,
    num: srv.num,
  })),
  {
    id: "custom-growth",
    shortTitle: "Custom Growth Consultation",
    fullTitle: "Full-Funnel Growth / Custom Consultation",
    badge: "Tailored Growth & Advisory Strategy",
    num: "13",
  },
];

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      {/* LinkedIn Blue Container */}
      <path
        fill="#0A66C2"
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14z"
      />
      {/* White Logo Elements */}
      <path
        fill="#ffffff"
        d="M18.5 18.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z"
      />
    </svg>
  );
}
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <defs>
        <radialGradient id="ig-radial" cx="20%" cy="100%" r="130%">
          <stop offset="0%" stopColor="#ffda77" />
          <stop offset="10%" stopColor="#fcae46" />
          <stop offset="35%" stopColor="#f44e3f" />
          <stop offset="60%" stopColor="#e1306c" />
          <stop offset="100%" stopColor="#833ab4" />
        </radialGradient>
      </defs>

      {/* Rounded gradient background base */}
      <rect width="24" height="24" rx="6" fill="url(#ig-radial)" />

      {/* White camera outline */}
      <path
        fill="#ffffff"
        d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-8.38a1.18 1.18 0 1 1-2.36 0 1.18 1.18 0 0 1 2.36 0zM17.8 4H6.2A2.2 2.2 0 0 0 4 6.2v11.6A2.2 2.2 0 0 0 6.2 20h11.6a2.2 2.2 0 0 0 2.2-2.2V6.2A2.2 2.2 0 0 0 17.8 4zm.4 13.8a.4.4 0 0 1-.4.4H6.2a.4.4 0 0 1-.4-.4V6.2a.4.4 0 0 1 .4-.4h11.6a.4.4 0 0 1 .4.4v11.6z"
      />
    </svg>
  );
}
function GoogleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      {/* Blue */}
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      {/* Green */}
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.26 21.36 7.33 24 12 24z"
      />
      {/* Yellow */}
      <path
        fill="#FBBC05"
        d="M5.28 14.27a7.22 7.22 0 0 1 0-4.54V6.6H1.25a11.98 11.98 0 0 0 0 10.8l4.03-3.13z"
      />
      {/* Red */}
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.6l4.03 3.13c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [serviceSearchQuery, setServiceSearchQuery] = useState("");
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const serviceDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        serviceDropdownRef.current &&
        !serviceDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServiceOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filtered services based on search query (Type to Suggestion)
  const filteredServices = useMemo(() => {
    const q = serviceSearchQuery.trim().toLowerCase();
    if (!q) return SERVICE_OPTIONS;
    return SERVICE_OPTIONS.filter(
      (opt) =>
        opt.shortTitle.toLowerCase().includes(q) ||
        opt.fullTitle.toLowerCase().includes(q) ||
        opt.badge.toLowerCase().includes(q)
    );
  }, [serviceSearchQuery]);

  const handleSelectService = (opt: ServiceOption) => {
    setFormState((prev) => ({ ...prev, service: opt.shortTitle }));
    setServiceSearchQuery(opt.shortTitle);
    setIsServiceOpen(false);
  };

  const handleClearService = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFormState((prev) => ({ ...prev, service: "" }));
    setServiceSearchQuery("");
  };

  // Fast auto-return to form after showing success message
  useEffect(() => {
    if (!submitted) return;

    const timer = setTimeout(() => {
      setSubmitted(false);
      setErrorMessage(null);
    }, 2800);

    return () => clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setErrorMessage(null);

    const payload = {
      name: formState.name.trim(),
      email: formState.email.trim(),
      phone: formState.phone.trim(),
      service: formState.service.trim() || "General Growth Inquiry",
      message: formState.message.trim(),
    };

    try {
      // 1. Primary: Next.js internal API route that forwards to mbsadigitalsolutions@gmail.com
      let isSuccess = false;
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await res.json().catch(() => null);

        if (res.ok && data?.success) {
          isSuccess = true;
        }
      } catch (internalErr) {
        console.warn("Direct /api/contact route call failed, attempting fallback:", internalErr);
      }

      // 2. Client fallback to FormSubmit direct AJAX if internal API route is unavailable
      if (!isSuccess) {
        const fallbackRes = await fetch("https://formsubmit.co/ajax/mbsadigitalsolutions@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...payload,
            _subject: `New Client Message from ${payload.name} (${payload.service})`,
            _replyto: payload.email,
            _captcha: "false",
          }),
        });

        const fallbackData = await fallbackRes.json().catch(() => null);

        if (fallbackRes.ok && (fallbackData?.success === "true" || fallbackData?.success === true)) {
          isSuccess = true;
        } else {
          throw new Error(
            fallbackData?.message ||
            "Could not deliver email. Please try the mailto link below."
          );
        }
      }

      setSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setServiceSearchQuery("");
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Something went wrong sending your message. Please try again.";
      setErrorMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const mailtoFallbackUrl = `mailto:mbsadigitalsolutions@gmail.com?subject=${encodeURIComponent(
    `Portfolio Inquiry: ${formState.service || "Growth"} from ${formState.name || "Visitor"}`
  )}&body=${encodeURIComponent(
    `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone || "Not provided"}\nService: ${formState.service || "General"}\n\nMessage:\n${formState.message}`
  )}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 transition-colors duration-500"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-start">
          {/* ========================================================
              LEFT COLUMN: Let's Talk Growth & Contact Info
          ======================================================== */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#14B8A6]" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#14B8A6]">
                  CONTACT
                </span>
              </div>
              {/* Main Headline */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.04]">
                Let&apos;s Talk
                <br />
                <span className="text-[#2563EB]">
                  Growth
                </span>
              </h2>

              {/* Subtitle with Increased Legible Size */}
              <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed max-w-md">
                Whether you&apos;re looking to boost conversions, cut CAC, or launch something new, we&apos;re here to help. Send us a message and it will be delivered directly to our inbox.
              </p>
            </div>

            {/* Contact Details with Clean Horizontal Lines */}
            <div className="mt-10 sm:mt-12 space-y-5">
              {/* Phone */}
              <div className="pt-4 border-t border-stone-200/80 dark:border-white/10">
                <span className="block text-xs sm:text-sm font-semibold mb-1">
                  Phone
                </span>
                <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-medium">
                  <a
                    href="tel:+919574696932"
                    className="hover:text-[#2563EB] transition-colors"
                  >
                    +91 95746 96932
                  </a>
                  <span className="text-stone-400">/</span>
                  <a
                    href="tel:+447393107859"
                    className="hover:text-[#2563EB] transition-colors"
                  >
                    +44 7393 107859
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="pt-4 border-t border-stone-200/80 dark:border-white/10">
                <span className="block text-xs sm:text-sm font-semibold mb-1">
                  Email
                </span>
                <a
                  href="mailto:mbsadigitalsolutions@gmail.com"
                  className="inline-flex items-center gap-2 text-sm sm:text-base hover:text-[#2563EB] font-medium transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                  mbsadigitalsolutions@gmail.com
                </a>
              </div>

              {/* Connect With Us */}
              <div className="pt-4 border-t border-stone-200/80 dark:border-white/10">
                <span className="block text-xs sm:text-sm font-semibold mb-3">
                  Connect With Us
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-xl bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 hover:border-[#2563EB] hover:bg-[#2563EB] text-stone-600 dark:text-stone-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-xl bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 hover:border-[#2563EB] hover:bg-[#2563EB] text-stone-600 dark:text-stone-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google"
                    className="w-9 h-9 rounded-xl bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 hover:border-[#2563EB] hover:bg-white text-stone-600 dark:text-stone-300 hover:text-black flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                  >
                    <GoogleIcon className="w-4 h-4" />
                  </a>


                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: Dark Card with #2563EB Ambient Glow & Form
          ======================================================== */}
          <div className="lg:col-span-7">
            {/* Form Card with interactive border hover effect and glow */}
            <div className="relative rounded-[32px] sm:rounded-[40px] p-7 sm:p-10 lg:p-12 bg-white/95 dark:bg-[#111B2E]/95 backdrop-blur-xl border-2 border-stone-200/80 dark:border-white/10 hover:border-[#2563EB] dark:hover:border-[#2563EB] shadow-2xl hover:shadow-[0_20px_50px_rgba(37,99,235,0.18)] transition-all duration-500 overflow-hidden group">
              {/* Vibrant #2563EB Ambient Light Mesh */}
              <div className="absolute -top-16 -right-16 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#2563EB]/10 dark:bg-[#2563EB]/15 blur-[100px] pointer-events-none group-hover:scale-110 group-hover:bg-[#2563EB]/20 transition-all duration-700" />
              <div className="absolute -bottom-16 -right-10 w-72 h-72 rounded-full bg-[#2563EB]/10 dark:bg-[#2563EB]/15 blur-[90px] pointer-events-none group-hover:scale-110 group-hover:bg-[#2563EB]/20 transition-all duration-700" />

              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-10 sm:py-14 px-4"
                    >
                      <div className="mx-auto mb-4 w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center border-2 border-[#2563EB] bg-[#2563EB]/10 text-[#2563EB] shadow-xl shadow-[#2563EB]/20">
                        <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#2563EB]" />
                      </div>

                      <h4 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-white mb-2">
                        Message Sent Successfully!
                      </h4>

                      <p className="max-w-md mx-auto text-xs sm:text-sm mb-5 leading-relaxed text-stone-600 dark:text-stone-300">
                        Thank you! We have received your inquiry and will reply shortly.
                      </p>

                      {/* Auto-Return Countdown Progress Bar */}
                      <div className="max-w-xs mx-auto mb-5">
                        <div className="w-full bg-stone-200 dark:bg-white/10 rounded-full h-1.5 overflow-hidden">
                          <motion.div
                            initial={{ width: "100%" }}
                            animate={{ width: "0%" }}
                            transition={{ duration: 2.8, ease: "linear" }}
                            className="bg-gradient-to-r from-[#2563EB] to-[#14B8A6] h-full rounded-full"
                          />
                        </div>
                        <span className="text-[11px] text-stone-400 mt-2 block font-medium">
                          Returning to form automatically...
                        </span>
                      </div>

                      <div>
                        <button
                          type="button"
                          onClick={() => {
                            setSubmitted(false);
                            setErrorMessage(null);
                          }}
                          className="px-6 py-2.5 rounded-full border border-stone-300 dark:border-white/15 bg-white dark:bg-white/[0.05] hover:border-[#2563EB] text-stone-700 dark:text-stone-200 hover:text-[#2563EB] text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95"
                        >
                          Back to Form Now
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-4 sm:space-y-5"
                    >
                      {/* Card Header */}
                      <div className="mb-6 sm:mb-8">

                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2.5 text-stone-900 dark:text-white">
                          Send Us a Message
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed max-w-lg text-stone-600 dark:text-stone-400">
                          Fill out the form below to reach us directly. We reply as fast as possible!
                        </p>
                      </div>

                      {/* Error Alert if sending failed */}
                      {errorMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border-2 border-red-500/40 text-red-700 dark:text-red-300 text-xs sm:text-sm flex flex-col gap-2"
                        >
                          <div className="flex items-center gap-2 font-semibold">
                            <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                            <span>{errorMessage}</span>
                          </div>
                          <div className="mt-1">
                            <a
                              href={mailtoFallbackUrl}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 hover:underline"
                            >
                              <Mail className="w-3.5 h-3.5" />
                              Open email client to send to mbsadigitalsolutions@gmail.com directly &rarr;
                            </a>
                          </div>
                        </motion.div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5">
                        {/* Name Input */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block">
                            Your Name <span className="text-[#2563EB]">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              required
                              placeholder="Enter your name"
                              value={formState.name}
                              disabled={loading}
                              onChange={(e) =>
                                setFormState({ ...formState, name: e.target.value })
                              }
                              className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-stone-50/70 dark:bg-[#0B1220]/80 border-2 border-stone-200 dark:border-white/10 hover:border-[#2563EB] dark:hover:border-[#14B8A6] focus:border-[#2563EB] dark:focus:border-[#14B8A6] focus:ring-4 focus:ring-[#2563EB]/15 dark:focus:ring-[#2563EB]/25 text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-500 text-sm outline-none transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.12)] focus:shadow-[0_0_25px_rgba(37,99,235,0.2)] disabled:opacity-60"
                            />
                          </div>
                        </div>

                        {/* Phone Number Input */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block flex items-center justify-between">
                            <span>Phone Number</span>
                            <span className="text-[11px] font-normal text-stone-400">(Optional)</span>
                          </label>
                          <div className="relative">
                            <input
                              type="tel"
                              placeholder="Enter Your Number"
                              value={formState.phone}
                              disabled={loading}
                              onChange={(e) =>
                                setFormState({ ...formState, phone: e.target.value })
                              }
                              className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-stone-50/70 dark:bg-[#0B1220]/80 border-2 border-stone-200 dark:border-white/10 hover:border-[#2563EB] dark:hover:border-[#14B8A6] focus:border-[#2563EB] dark:focus:border-[#14B8A6] focus:ring-4 focus:ring-[#2563EB]/15 dark:focus:ring-[#2563EB]/25 text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-500 text-sm outline-none transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.12)] focus:shadow-[0_0_25px_rgba(37,99,235,0.2)] disabled:opacity-60"
                            />
                          </div>
                        </div>

                        {/* Email Address Input */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block">
                            Your Email Address <span className="text-[#2563EB]">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              required
                              placeholder="Enter Your Email"
                              value={formState.email}
                              disabled={loading}
                              onChange={(e) =>
                                setFormState({ ...formState, email: e.target.value })
                              }
                              className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-stone-50/70 dark:bg-[#0B1220]/80 border-2 border-stone-200 dark:border-white/10 hover:border-[#2563EB] dark:hover:border-[#14B8A6] focus:border-[#2563EB] dark:focus:border-[#14B8A6] focus:ring-4 focus:ring-[#2563EB]/15 dark:focus:ring-[#2563EB]/25 text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-500 text-sm outline-none transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.12)] focus:shadow-[0_0_25px_rgba(37,99,235,0.2)] disabled:opacity-60"
                            />
                          </div>
                        </div>

                        {/* Service Category Select (Two-way: Type to Suggestion + Short Scrollable Selection) */}
                        <div className="space-y-1.5" ref={serviceDropdownRef}>
                          <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block flex items-center justify-between">
                            <span className="flex items-center gap-1.5">
                              Service Needed
                            </span>
                            <span className="text-[11px] font-normal text-stone-400">
                              (Type or scroll to select)
                            </span>
                          </label>

                          <div className="relative">
                            <input
                              type="text"
                              placeholder="Type or click to choose service..."
                              value={serviceSearchQuery}
                              disabled={loading}
                              onFocus={() => setIsServiceOpen(true)}
                              onClick={() => setIsServiceOpen(true)}
                              onChange={(e) => {
                                setServiceSearchQuery(e.target.value);
                                setFormState((prev) => ({ ...prev, service: e.target.value }));
                                if (!isServiceOpen) setIsServiceOpen(true);
                              }}
                              className="w-full pl-4 sm:pl-5 pr-20 py-3.5 sm:py-4 rounded-2xl border-2 border-stone-200 dark:border-white/10 hover:border-[#2563EB] dark:hover:border-[#14B8A6] focus:border-[#2563EB] dark:focus:border-[#14B8A6] focus:ring-4 focus:ring-[#2563EB]/15 dark:focus:ring-[#2563EB]/25 text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-500 text-sm outline-none transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.12)] focus:shadow-[0_0_25px_rgba(37,99,235,0.2)] disabled:opacity-60 cursor-pointer"
                            />

                            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                              {serviceSearchQuery ? (
                                <button
                                  type="button"
                                  onClick={handleClearService}
                                  className="p-1 rounded-full hover:bg-stone-200 dark:hover:bg-white/10 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors cursor-pointer"
                                  title="Clear selection"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              ) : null}
                              <button
                                type="button"
                                onClick={() => setIsServiceOpen((prev) => !prev)}
                                className="p-1 text-stone-400 dark:text-stone-500  transition-transform duration-200 cursor-pointer"
                                style={{ transform: isServiceOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                                aria-label="Toggle service options"
                              >
                                <ChevronDown className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Dropdown Options List */}
                            <AnimatePresence>
                              {isServiceOpen && (
                                <motion.div
                                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                                  transition={{ duration: 0.15, ease: "easeOut" }}
                                  className="absolute left-0 right-0 top-full mt-2 z-50 rounded-2xl bg-white dark:bg-[#111B2E] border-2 border-stone-200 dark:border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden"
                                >                                  {/* Filter status header */}
                                  <div className="px-3.5 py-2 border-b border-stone-100 dark:border-white/5 bg-stone-50/80 dark:bg-white/[0.02] flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400">
                                    <span className="font-medium flex items-center gap-1.5">
                                      <Search className="w-3 h-3 " />
                                      Type to filter or scroll & click
                                    </span>
                                    <span className="text-[10px] bg-stone-200/80 dark:bg-white/10 px-2 py-0.5 rounded-full font-mono font-semibold">
                                      {filteredServices.length} {filteredServices.length === 1 ? "option" : "options"}
                                    </span>
                                  </div>

                                  {/* Scrollable short service list */}
                                  <div className="max-h-56 sm:max-h-60 overflow-y-auto p-1.5 space-y-1 overscroll-contain">
                                    {filteredServices.map((srv) => {
                                      const isSelected =
                                        formState.service === srv.shortTitle ||
                                        formState.service === srv.fullTitle;
                                      return (
                                        <button
                                          key={srv.id}
                                          type="button"
                                          onClick={() => handleSelectService(srv)}
                                          className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between group cursor-pointer ${isSelected
                                            ? "bg-[#2563EB]/10 dark:bg-[#2563EB]/20 font-semibold "
                                            : "hover:bg-stone-100 dark:hover:bg-white/[0.05] text-stone-800 dark:text-stone-200"
                                            }`}
                                        >
                                          <div className="flex items-center gap-2.5 min-w-0 pr-2">
                                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-stone-200/60 dark:bg-white/10 text-stone-600 dark:text-stone-400 group-hover:bg-[#2563EB]/20 group-hover:text-[#2563EB] shrink-0">
                                              {srv.num}
                                            </span>
                                            <div className="min-w-0">
                                              <div className="text-xs sm:text-sm font-semibold truncate ">
                                                {srv.shortTitle}
                                              </div>
                                              <div className="text-[10px] text-stone-500 dark:text-stone-400 truncate">
                                                {srv.badge}
                                              </div>
                                            </div>
                                          </div>
                                          {isSelected ? (
                                            <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                                          ) : null}
                                        </button>
                                      );
                                    })}

                                    {filteredServices.length === 0 && (
                                      <div className="p-4 text-center">
                                        <p className="text-xs text-stone-500 dark:text-stone-400 mb-2.5">
                                          No standard service matches &ldquo;{serviceSearchQuery}&rdquo;
                                        </p>
                                        <button
                                          type="button"
                                          onClick={() => {
                                            setFormState((prev) => ({ ...prev, service: serviceSearchQuery.trim() }));
                                            setIsServiceOpen(false);
                                          }}
                                          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#2563EB] text-white hover:bg-[#2563EB]/90 transition-colors cursor-pointer"
                                        >
                                          Use &ldquo;{serviceSearchQuery}&rdquo; as custom inquiry
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        {/* Message Textarea - Full width on all screen sizes */}
                        <div className="space-y-1.5 sm:col-span-2">
                          <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block">
                            Your Message <span className="text-[#2563EB]">*</span>
                          </label>
                          <div className="relative">
                            <textarea
                              rows={4}
                              required
                              placeholder="Tell us about your project, target goals, or questions..."
                              value={formState.message}
                              disabled={loading}
                              onChange={(e) =>
                                setFormState({ ...formState, message: e.target.value })
                              }
                              className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-stone-50/70 dark:bg-[#0B1220]/80 border-2 border-stone-200 dark:border-white/10 hover:border-[#2563EB] dark:hover:border-[#14B8A6] focus:border-[#2563EB] dark:focus:border-[#14B8A6] focus:ring-4 focus:ring-[#2563EB]/15 dark:focus:ring-[#2563EB]/25 text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-500 text-sm outline-none transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.12)] focus:shadow-[0_0_25px_rgba(37,99,235,0.2)] resize-none disabled:opacity-60"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Submit Button in #2563EB with hover animations */}
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={loading ? {} : { scale: 1.01 }}
                        whileTap={loading ? {} : { scale: 0.99 }}
                        className="w-full py-4 px-6 rounded-2xl bg-[#2563EB] text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-300 cursor-pointer disabled:opacity-70 mt-2 shadow-lg shadow-[#2563EB]/25 hover:shadow-[#2563EB]/45 flex items-center justify-center gap-2 border border-blue-400/30"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}