"use client";

import React, { useState, useEffect, useMemo, useRef, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Tag,
  Eye,
  Type,
  FileText,
  User,
  Star,
  RefreshCw,
  Lock,
  Unlock,
  X,
  Send,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Highlighter,
  Subscript,
  Superscript,

  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  ListTodo,
  Quote,
  Code,
  Table as TableIcon,
  Minus,
  Link2,
  ImageIcon,
  Undo2,
  Redo2,
  Columns,
  Maximize2,
  Minimize2,
  HelpCircle,
  Lightbulb,
  Info,
  AlertTriangle,
  Globe,
  Trash2,
  Palette,
  ChevronDown,
  LayoutGrid,
  Layers,
  FileCheck
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { BlogPost, FALLBACK_BLOGS, CATEGORIES } from "@/lib/fallbackBlogs";
import {
  BlogFormData,
  createBlog,
  updateBlog,
  fetchBlogById,
  getStoredAdminToken,
  loginAdmin
} from "@/lib/blogApi";
import { ArticleMarkdownRenderer } from "@/lib/markdownRenderer";

export { CATEGORIES };

const SUGGESTED_TAGS = [
  "SEO",
  "Google Ads",
  "GA4",
  "Conversion Rate",
  "AI Automation",
  "Core Web Vitals",
  "Meta Ads",
  "Attribution",
  "Content Strategy",
  "Programmatic SEO"
];

function CreateBlogContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("id") || searchParams.get("edit");

  const [isEditing, setIsEditing] = useState(false);
  const [existingBlog, setExistingBlog] = useState<BlogPost | null>(null);
  const [loadingInitial, setLoadingInitial] = useState(false);

  // Admin Token State
  const [adminToken, setAdminToken] = useState<string | null>(null);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [adminPasswordInput, setAdminPasswordInput] = useState("");
  const [adminLoginError, setAdminLoginError] = useState("");
  const [adminLoginLoading, setAdminLoginLoading] = useState(false);

  // Main Form Data: Title, Description, Image URL, Canonical URL, Full Article Content
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    description: "",
    excerpt: "",
    metaTitle: "",
    metaDescription: "",
    imageUrl: "",
    coverImage: "",
    canonicalUrl: "",
    content: "",
    category: "Technical SEO",
    tags: ["SEO", "Digital Marketing"],
    readTime: "5 min read",
    featured: false
  });

  // Author details
  const [authorName, setAuthorName] = useState("Muskan Shekh");
  const [authorRole, setAuthorRole] = useState("Digital Marketing & SEO Specialist");
  const [authorAvatar, setAuthorAvatar] = useState(
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"
  );

  // UI state
  const [tagInput, setTagInput] = useState("");
  const [activeTab, setActiveTab] = useState<"editor" | "preview">("editor");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [imageError, setImageError] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Editor states: Split View, Fullscreen, Modals
  const [splitView, setSplitView] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [linkModalText, setLinkModalText] = useState("");
  const [linkModalUrl, setLinkModalUrl] = useState("");
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageModalAlt, setImageModalAlt] = useState("");
  const [imageModalUrl, setImageModalUrl] = useState("");
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [tableRows, setTableRows] = useState(3);
  const [tableCols, setTableCols] = useState(3);
  const [isCheatsheetOpen, setIsCheatsheetOpen] = useState(false);

  // Microsoft Word Ribbon & Studio states
  const [wordRibbonTab, setWordRibbonTab] = useState<"home" | "insert" | "layout" | "view">("home");
  const [wordFontFamily, setWordFontFamily] = useState<"font-sans" | "font-serif" | "font-mono">("font-sans");
  const [wordPageWidth, setWordPageWidth] = useState<"standard" | "wide">("standard");
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [isHighlightPickerOpen, setIsHighlightPickerOpen] = useState(false);

  // Undo / Redo history for content editor
  const [contentHistory, setContentHistory] = useState<string[]>([""]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Read stored admin token on mount
  useEffect(() => {
    const token = getStoredAdminToken();
    if (token) setAdminToken(token);
  }, []);

  // Sync content history
  const updateContentWithHistory = (newContent: string) => {
    setFormData((prev) => ({ ...prev, content: newContent }));

    setContentHistory((prev) => {
      const trimmed = prev.slice(0, historyIndex + 1);
      return [...trimmed, newContent];
    });
    setHistoryIndex((prev) => prev + 1);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      const nextIdx = historyIndex - 1;
      setHistoryIndex(nextIdx);
      setFormData((prev) => ({ ...prev, content: contentHistory[nextIdx] }));
    }
  };

  const handleRedo = () => {
    if (historyIndex < contentHistory.length - 1) {
      const nextIdx = historyIndex + 1;
      setHistoryIndex(nextIdx);
      setFormData((prev) => ({ ...prev, content: contentHistory[nextIdx] }));
    }
  };

  // If editId is provided, load the blog to edit
  useEffect(() => {
    if (!editId) return;

    setIsEditing(true);
    setLoadingInitial(true);

    const loadBlogToEdit = async () => {
      try {
        const blog = await fetchBlogById(editId);
        setExistingBlog(blog);
        const desc = blog.description || blog.excerpt || "";
        const img = blog.imageUrl || blog.coverImage || "";
        const canon = blog.canonicalUrl || (blog.slug ? `/viewblog/${blog.slug}` : "");

        setFormData({
          title: blog.title || "",
          description: desc,
          excerpt: desc,
          metaTitle: blog.metaTitle || blog.title || "",
          metaDescription: blog.metaDescription || desc,
          imageUrl: img,
          coverImage: img,
          canonicalUrl: canon,
          content: blog.content || "",
          category: blog.category || "Technical SEO",
          tags: blog.tags || ["SEO"],
          readTime: blog.readTime || "5 min read",
          featured: Boolean(blog.featured)
        });

        setContentHistory([blog.content || ""]);
        setHistoryIndex(0);

        if (blog.author) {
          setAuthorName(blog.author.name || "Muskan Shekh");
          setAuthorRole(blog.author.role || "Digital Marketing & SEO Specialist");
          if (blog.author.avatar) setAuthorAvatar(blog.author.avatar);
        }
      } catch {
        const fallback = FALLBACK_BLOGS.find((b) => b._id === editId || b.slug === editId);
        if (fallback) {
          setExistingBlog(fallback);
          const desc = fallback.description || fallback.excerpt || "";
          const img = fallback.imageUrl || fallback.coverImage || "";
          const canon = fallback.canonicalUrl || (fallback.slug ? `/viewblog/${fallback.slug}` : "");

          setFormData({
            title: fallback.title,
            description: desc,
            excerpt: desc,
            metaTitle: fallback.metaTitle || fallback.title,
            metaDescription: fallback.metaDescription || desc,
            imageUrl: img,
            coverImage: img,
            canonicalUrl: canon,
            content: fallback.content,
            category: fallback.category,
            tags: fallback.tags,
            readTime: fallback.readTime,
            featured: Boolean(fallback.featured)
          });

          setContentHistory([fallback.content || ""]);
          setHistoryIndex(0);
        }
      } finally {
        setLoadingInitial(false);
      }
    };

    loadBlogToEdit();
  }, [editId]);

  // Dynamic Slug preview from Title
  const slugPreview = useMemo(() => {
    return formData.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }, [formData.title]);

  // Estimated read time calculator
  const estimatedReadTime = useMemo(() => {
    const wordCount = formData.content.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(wordCount / 180));
    return `${minutes} min read`;
  }, [formData.content]);

  // Content Statistics
  const contentStats = useMemo(() => {
    const raw = formData.content.trim();
    const words = raw ? raw.split(/\s+/).filter(Boolean).length : 0;
    const characters = formData.content.length;
    const lines = formData.content ? formData.content.split("\n").length : 0;
    return { words, characters, lines };
  }, [formData.content]);

  // Auto-generate Canonical URL based on title slug
  const handleAutoCanonical = () => {
    const baseDomain = typeof window !== "undefined" ? window.location.origin : "https://example.com";
    const slug = slugPreview || "article";
    const generated = `${baseDomain}/viewblog/${slug}`;
    setFormData((prev) => ({ ...prev, canonicalUrl: generated }));
    setToastMessage("Canonical URL generated from title slug!");
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Add Tag
  const handleAddTag = (tagToAdd: string) => {
    const cleanTag = tagToAdd.trim().replace(/^#/, "");
    if (!cleanTag) return;
    if (formData.tags.includes(cleanTag)) return;
    setFormData((prev) => ({
      ...prev,
      tags: [...prev.tags, cleanTag]
    }));
    setTagInput("");
  };

  // Remove Tag
  const handleRemoveTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tagToRemove)
    }));
  };

  // Tag Input KeyDown
  const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      handleAddTag(tagInput);
    }
  };

  // Core insertion helper for textarea
  const insertTextAtCursor = (prefix: string, suffix = "", defaultText = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentVal = textarea.value;
    const selected = currentVal.substring(start, end) || defaultText;

    const insertion = `${prefix}${selected}${suffix}`;
    const newContent = currentVal.substring(0, start) + insertion + currentVal.substring(end);

    updateContentWithHistory(newContent);

    setTimeout(() => {
      textarea.focus();
      const cursorEnd = start + prefix.length + selected.length;
      textarea.setSelectionRange(cursorEnd, cursorEnd);
    }, 10);
  };

  // Toolbar Actions Handler
  const handleToolbarAction = (action: string) => {
    switch (action) {
      case "h1":
        insertTextAtCursor("\n\n# ", "\n", "Main Section Title");
        break;
      case "h2":
        insertTextAtCursor("\n\n## ", "\n", "Key Strategic Pillar");
        break;
      case "h3":
        insertTextAtCursor("\n\n### ", "\n", "Sub-Section Analysis");
        break;
      case "h4":
        insertTextAtCursor("\n\n#### ", "\n", "Operational Detail");
        break;
      case "bold":
        insertTextAtCursor("**", "**", "bold text");
        break;
      case "italic":
        insertTextAtCursor("*", "*", "italicized text");
        break;
      case "underline":
        insertTextAtCursor("<u>", "</u>", "underlined text");
        break;
      case "strike":
        insertTextAtCursor("~~", "~~", "strikethrough text");
        break;
      case "highlight":
        insertTextAtCursor("==", "==", "highlighted point");
        break;
      case "inline-code":
        insertTextAtCursor("`", "`", "configKey");
        break;
      case "sub":
        insertTextAtCursor("<sub>", "</sub>", "subscript");
        break;
      case "sup":
        insertTextAtCursor("<sup>", "</sup>", "superscript");
        break;
      case "align-left":
        insertTextAtCursor('\n\n<div align="left">\n', "\n</div>\n", "Left-aligned paragraph");
        break;
      case "align-center":
        insertTextAtCursor('\n\n<div align="center">\n', "\n</div>\n", "Centered strategic summary");
        break;
      case "align-right":
        insertTextAtCursor('\n\n<div align="right">\n', "\n</div>\n", "Right-aligned signature");
        break;
      case "bullet":
        insertTextAtCursor("\n- ", "\n- Secondary metric takeaway", "Primary strategic milestone");
        break;
      case "number":
        insertTextAtCursor("\n1. ", "\n2. Execution & Launch\n3. Measurement", "Technical Discovery & Audit");
        break;
      case "todo":
        insertTextAtCursor("\n- [ ] ", "\n- [ ] Deploy schema validations\n- [x] Initial benchmark verified", "Complete technical audit");
        break;
      case "quote":
        insertTextAtCursor("\n> ", "\n", "Strategic clarity beats raw activity every single quarter.");
        break;
      case "callout-tip":
        insertTextAtCursor("\n> [!TIP]\n> ", "\n", "Verify server-side hydration metrics in GA4 debug view before deploying at scale.");
        break;
      case "callout-note":
        insertTextAtCursor("\n> [!NOTE]\n> ", "\n", "Google Search Generative Experience requires high entity disambiguation.");
        break;
      case "callout-warning":
        insertTextAtCursor("\n> [!WARNING]\n> ", "\n", "Do not alter canonical headers during migration without 301 redirection maps.");
        break;
      case "code-js":
        insertTextAtCursor("\n```javascript\n", "\n```\n", "// Modern JavaScript / TypeScript snippet\nconst calculateCPA = (spend, conversions) => spend / conversions;");
        break;
      case "code-html":
        insertTextAtCursor('\n```html\n', "\n```\n", '<meta name="robots" content="index, follow" />\n<link rel="canonical" href="https://example.com" />');
        break;
      case "code-python":
        insertTextAtCursor("\n```python\n", "\n```\n", "# Python search analytics audit\nimport pandas as pd\ndf = pd.read_csv('gsc_keywords.csv')");
        break;
      case "code-bash":
        insertTextAtCursor("\n```bash\n", "\n```\n", "# Run audit benchmarks\ncurl -I https://yoursite.com\nnpx lighthouse-ci collect");
        break;
      case "hr":
        insertTextAtCursor("\n\n---\n\n", "");
        break;
      case "link-dialog": {
        const textarea = textareaRef.current;
        if (textarea) {
          const sel = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
          setLinkModalText(sel || "Read Documentation");
        }
        setIsLinkModalOpen(true);
        break;
      }
      case "image-dialog": {
        const textarea = textareaRef.current;
        if (textarea) {
          const sel = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
          setImageModalAlt(sel || "Analytics Dashboard Chart");
        }
        setIsImageModalOpen(true);
        break;
      }
      case "table-dialog":
        setIsTableModalOpen(true);
        break;
      case "clear-formatting": {
        const textarea = textareaRef.current;
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        if (start === end) return;
        const sel = textarea.value.substring(start, end);
        const stripped = sel
          .replace(/[*_~`#=>[\]()]/g, "")
          .replace(/<\/?[^>]+(>|$)/g, "")
          .trim();
        const nextContent = textarea.value.substring(0, start) + stripped + textarea.value.substring(end);
        updateContentWithHistory(nextContent);
        break;
      }
      default:
        break;
    }
  };

  // Microsoft Word Quick-Start Templates
  const handleInsertTemplate = (templateType: "case-study" | "guide" | "audit") => {
    let tpl = "";
    if (templateType === "case-study") {
      tpl = `\n\n# Technical SEO & Revenue Growth Case Study\n\n## Executive Summary\nDetail the high-level challenge, initial baseline metrics, and primary business objectives achieved during this campaign.\n\n---\n\n## 1. Challenge & Baseline Audit\nOutline the organic search limitations, legacy technical debt, or crawlability issues.\n\n- **Client Benchmark:** 14,200 organic visits/mo\n- **Target Goal:** 300% growth within 6 months\n- **Core Constraint:** Inflexible legacy CMS structure\n\n> [!NOTE]\n> Prior to deployment, comprehensive 301 redirection maps were cataloged across all indexable URLs.\n\n## 2. Strategic Execution Framework\nDetail the exact engineering optimizations, programmatic schema rollouts, and content entity architecture.\n\n1. **Technical Foundation:** Fixed Core Web Vitals to 95+ Mobile score\n2. **Entity Architecture:** Deployed JSON-LD Organization & Service schemas\n3. **Content Expansion:** Authored 24 pillar topic clusters with keyword intent\n\n| Execution Phase | Key Deliverables | Status |\n| --- | --- | --- |\n| Phase 1: Technical Audit | Server logs, Crawl budget, TTFB | Completed |\n| Phase 2: On-Page Architecture | Meta models, Entity taxonomy | Completed |\n| Phase 3: Authority Building | Editorial PR, Digital citations | Active |\n\n## 3. Verified Results & Revenue Impact\nHighlight verifiable ROI metrics, organic search visibility gains, and pipeline value.\n\n> [!TIP]\n> Combining GA4 conversion events with Google Search Console data confirmed organic attribution accounted for 68% of total qualified pipeline.\n\n- 🚀 **+340% Organic Traffic Growth**\n- 🎯 **#1 Rankings for 18 High-Intent Search Queries**\n- 💰 **4.2x Return on Organic Marketing Spend**\n\n---\n\n*Document finalized and verified for release.*`;
    } else if (templateType === "guide") {
      tpl = `\n\n# The Definitive 2026 Guide to Modern SEO Architecture\n\n## Introduction\nIn an evolving search landscape dominated by AI Overviews and entity search engines, understanding modern website architecture is essential for enduring visibility.\n\n> [!TIP]\n> Modern search algorithms prioritize entity authority and first-party domain expertise over raw keyword density.\n\n---\n\n## Step 1: Laying the Technical Groundwork\nEnsure clean server-side rendering, sub-second Time to First Byte (TTFB), and automated schema validation.\n\n\`\`\`html\n<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "headline": "Modern SEO Architecture Guide",\n  "author": "Muskan Shekh"\n}\n</script>\n\`\`\`\n\n## Step 2: Content Entity Structuring\nBreak down topics into comprehensive semantic nodes rather than isolated standalone articles.\n\n- **Pillar 1:** Information Architecture & Semantic Silos\n- **Pillar 2:** Search Intent Mapping (Informational, Commercial, Transactional)\n- **Pillar 3:** Internal Link Attribution & PageRank Flow\n\n## Key Takeaways Checklist\n\n- [ ] Audit Core Web Vitals in Google Search Console\n- [ ] Ensure canonical tags match self-referential master URLs\n- [ ] Implement structured data across all service pages\n\n---\n\n*Published for growth teams and engineering leaders.*`;
    } else if (templateType === "audit") {
      tpl = `\n\n# Comprehensive Website & Search Performance Audit\n\n## Audit Overview\n- **Domain Under Review:** \`https://clientdomain.com\`\n- **Audit Date:** ${new Date().toLocaleDateString()}\n- **Auditor:** Muskan Shekh (Technical SEO Specialist)\n\n---\n\n## Priority Action Matrix\n\n| Category | Severity | Issue Summary | Recommended Action |\n| --- | --- | --- | --- |\n| Technical | Critical | Slow Server Response Time | Deploy Edge Caching & Asset Compression |\n| Indexing | High | Duplicate Canonical URLs | Harmonize Trailing Slashes & Headers |\n| On-Page | Medium | Missing Structured Data | Implement JSON-LD Entity Schema |\n| Performance | High | Unoptimized Hero Images | Convert to WebP / AVIF formats |\n\n> [!WARNING]\n> Canonical URL discrepancies can cause index fragmentation and dilute organic ranking signals.\n\n## Recommended Implementation Roadmap\n1. **Sprint 1 (Weeks 1-2):** Resolve critical server errors and crawl budget blockers.\n2. **Sprint 2 (Weeks 3-4):** Execute on-page metadata and semantic hierarchy fixes.\n3. **Sprint 3 (Weeks 5-6):** Launch structured data and internal linking matrix.\n\n---\n\n*Audit complete. Ready for development team handoff.*`;
    }

    if (formData.content.trim()) {
      if (confirm("Append this template to your current content? (Click Cancel to replace existing content)")) {
        insertTextAtCursor("\n\n" + tpl, "");
      } else {
        updateContentWithHistory(tpl);
      }
    } else {
      updateContentWithHistory(tpl);
    }
    setIsTemplateModalOpen(false);
  };

  const handleApplyColor = (colorHex: string) => {
    insertTextAtCursor(`<span style="color: ${colorHex}">`, "</span>", "colored text");
    setIsColorPickerOpen(false);
  };

  const handleApplyHighlight = (colorHex: string) => {
    insertTextAtCursor(`<mark style="background-color: ${colorHex}; padding: 0.15em 0.35em; border-radius: 4px;">`, "</mark>", "highlighted text");
    setIsHighlightPickerOpen(false);
  };

  const handleStyleSelect = (styleVal: string) => {
    switch (styleVal) {
      case "h1":
        insertTextAtCursor("\n\n# ", "\n", "Document Heading 1");
        break;
      case "h2":
        insertTextAtCursor("\n\n## ", "\n", "Section Heading 2");
        break;
      case "h3":
        insertTextAtCursor("\n\n### ", "\n", "Sub-Section Heading 3");
        break;
      case "h4":
        insertTextAtCursor("\n\n#### ", "\n", "Minor Title Heading 4");
        break;
      case "quote":
        insertTextAtCursor("\n> ", "\n", "Blockquote statement");
        break;
      case "code":
        insertTextAtCursor("\n```javascript\n", "\n```\n", "// Code block snippet");
        break;
      case "normal":
      default:
        insertTextAtCursor("\n\n", "\n\n", "Regular paragraph text...");
        break;
    }
  };

  // Insert Link from modal
  const handleInsertLink = () => {
    if (!linkModalUrl.trim()) return;
    const text = linkModalText.trim() || linkModalUrl.trim();
    insertTextAtCursor(`[${text}](`, `)`, linkModalUrl.trim());
    setIsLinkModalOpen(false);
    setLinkModalText("");
    setLinkModalUrl("");
  };

  // Insert Image from modal
  const handleInsertImage = () => {
    if (!imageModalUrl.trim()) return;
    const alt = imageModalAlt.trim() || "Article Illustration";
    insertTextAtCursor(`\n![${alt}](`, `)\n`, imageModalUrl.trim());
    setIsImageModalOpen(false);
    setImageModalAlt("");
    setImageModalUrl("");
  };

  // Insert Table from modal
  const handleInsertTable = () => {
    const rows = Math.max(1, Math.min(10, tableRows));
    const cols = Math.max(1, Math.min(6, tableCols));

    let headerRow = "|";
    let dividerRow = "|";
    for (let c = 1; c <= cols; c++) {
      headerRow += ` Column ${c} |`;
      dividerRow += " --- |";
    }

    let dataRows = "";
    for (let r = 1; r <= rows; r++) {
      let rStr = "|";
      for (let c = 1; c <= cols; c++) {
        rStr += ` Data ${r}-${c} |`;
      }
      dataRows += `\n${rStr}`;
    }

    const tableMarkdown = `\n\n${headerRow}\n${dividerRow}${dataRows}\n\n`;
    insertTextAtCursor(tableMarkdown);
    setIsTableModalOpen(false);
  };

  // Admin login submit
  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdminLoginError("");
    setAdminLoginLoading(true);

    try {
      const res = await loginAdmin(adminPasswordInput);
      setAdminToken(res.token);
      setIsAdminLoginOpen(false);
      setAdminPasswordInput("");
      setToastMessage("Admin passcode authenticated successfully!");
      setTimeout(() => setToastMessage(null), 3000);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Invalid admin passcode";
      setAdminLoginError(msg);
    } finally {
      setAdminLoginLoading(false);
    }
  };

  // Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.title.trim()) {
      setError("Please provide an article title.");
      return;
    }

    const finalDescription = (formData.description || formData.excerpt || "").trim();
    if (!finalDescription) {
      setError("Please provide a concise description for the article.");
      return;
    }

    if (!formData.content.trim()) {
      setError("Please write the full article content.");
      return;
    }

    if (!adminToken) {
      setError("Admin authentication required to publish or update articles. Please unlock with your Admin Key.");
      setIsAdminLoginOpen(true);
      return;
    }

    setIsSubmitting(true);

    const fallbackCover =
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80";
    const finalImage = formData.imageUrl?.trim() || formData.coverImage?.trim() || fallbackCover;
    const finalCanonical =
      formData.canonicalUrl?.trim() || `/viewblog/${slugPreview || "article"}`;

    const payload: BlogFormData = {
      ...formData,
      title: formData.title.trim(),
      description: finalDescription,
      excerpt: finalDescription,
      metaTitle: formData.metaTitle?.trim() || formData.title.trim(),
      metaDescription: formData.metaDescription?.trim() || finalDescription,
      imageUrl: finalImage,
      coverImage: finalImage,
      canonicalUrl: finalCanonical,
      content: formData.content.trim(),
      readTime: formData.readTime || estimatedReadTime,
      tags: formData.tags.length > 0 ? formData.tags : ["SEO", "Digital Marketing"]
    };

    try {
      let targetBlogId = "";

      if (isEditing && existingBlog) {
        const updated = await updateBlog(existingBlog._id, payload, adminToken || undefined);
        targetBlogId = updated.slug || updated._id;
        setToastMessage("Article updated successfully! Redirecting...");
      } else {
        const created = await createBlog(payload, adminToken || undefined);
        targetBlogId = created.slug || created._id;
        setToastMessage("Article published successfully! Redirecting to reader view...");
      }

      setTimeout(() => {
        router.push(`/blog/${targetBlogId}`);
      }, 900);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to save article";
      setError(msg);
      setIsSubmitting(false);
    }
  };

  if (loadingInitial) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-[#2563EB] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-semibold text-stone-600 dark:text-stone-300">
            Loading editorial workspace...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#2563EB]/25 selection:text-[#2563EB] transition-colors duration-300 ${isFullscreen ? "fixed inset-0 z-50 overflow-y-auto" : ""
        }`}
    >
      {/* Background Ambience */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#2563EB]/[0.05] blur-[150px]" />
        <div className="absolute bottom-10 left-10 h-[400px] w-[400px] rounded-full bg-[#FB923C]/[0.04] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(rgba(37, 99, 235, 0.4) 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
        />
      </div>

      {/* EDITORIAL ACTION SUB-BAR */}
      <div className="pt-20 sm:pt-24 w-full border-b border-stone-200/80 dark:border-stone-800/80 bg-white/80 dark:bg-[#0B1220]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-100/70 dark:bg-stone-900/70 hover:border-orange-500/50 hover:bg-orange-500/10 text-stone-700 dark:text-stone-300 hover:text-[#2563EB] text-xs font-bold transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Admin Dashboard</span>
            </Link>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-100/70 dark:bg-stone-900/70 hover:border-orange-500/50 hover:bg-orange-500/10 text-stone-700 dark:text-stone-300 hover:text-[#2563EB] text-xs font-bold transition"
            >
              <span>View Live</span>
            </Link>

            <div className="h-5 w-[1px] bg-stone-300 dark:bg-stone-800 hidden sm:block" />

            <div className="hidden sm:flex items-center gap-2">
              <span className="font-bold text-sm tracking-tight text-stone-900 dark:text-stone-100">
                Editorial Studio
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full font-bold bg-orange-500/15 text-[#2563EB] border border-orange-500/30">
                {isEditing ? "Editing Mode" : "New Article"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {adminToken ? (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-600/15 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-semibold">
                <Unlock className="w-3.5 h-3.5 text-[#2563EB]" />
                <span className="hidden sm:inline">Admin Active</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsAdminLoginOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-300 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 hover:border-orange-500/50 text-stone-700 dark:text-stone-300 text-xs font-medium transition cursor-pointer"
                title="Enter admin passcode"
              >
                <Lock className="w-3.5 h-3.5 text-stone-500" />
                <span className="hidden sm:inline">Admin Key</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <main
        className={`relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 ${splitView ? "max-w-[1600px]" : "max-w-5xl"
          }`}
      >
        {/* HERO TITLE BANNER */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3.5 py-1 mb-3">
            <Sparkles className="h-3.5 w-3.5 text-[#2563EB] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
              {isEditing ? "Article Revision" : "Create & Publish"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
            {isEditing ? (
              <>
                Update{" "}
                <span className="bg-gradient-to-r from-[#2563EB] via-[#14B8A6] to-[#FB923C] bg-clip-text text-transparent">
                  Blog Article
                </span>
              </>
            ) : (
              <>
                Create{" "}
                <span className="bg-gradient-to-r from-[#2563EB] via-[#14B8A6] to-[#FB923C] bg-clip-text text-transparent">
                  New Blog Article
                </span>
              </>
            )}
          </h1>

          <p className="mt-2.5 text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-2xl">
            Configure your blog headline, executive description, image URL, SEO canonical reference,
            and complete markdown content with comprehensive formatting tools.
          </p>
        </div>

        {/* ERROR ALERT */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-bold">Error Saving Article</p>
              <p className="text-xs opacity-90">{error}</p>
            </div>
          </motion.div>
        )}

        {/* ADMIN AUTH REQUIRED NOTICE */}
        {!adminToken && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-800 dark:text-amber-300">
            <div className="flex items-center gap-2.5">
              <Lock className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>
                <strong>Admin Authentication Required:</strong> You can draft content in the Microsoft Word editor, but an active Admin Key is needed to publish or edit articles.
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsAdminLoginOpen(true)}
              className="px-3.5 py-1.5 rounded-xl bg-[#2563EB] text-white font-bold hover:bg-orange-600 transition shrink-0 cursor-pointer text-center"
            >
              Enter Admin Key
            </button>
          </div>
        )}

        {/* TABS (Editor vs Reader Live Preview) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-2 p-1 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
            <button
              type="button"
              onClick={() => setActiveTab("editor")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${activeTab === "editor"
                  ? "bg-[#2563EB] text-white shadow-md shadow-orange-600/30"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
                }`}
            >
              <FileText className="w-4 h-4" />
              <span>Blog Editor</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("preview")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${activeTab === "preview"
                  ? "bg-[#2563EB] text-white shadow-md shadow-orange-600/30"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
                }`}
            >
              <Eye className="w-4 h-4" />
              <span>Live Reader Preview</span>
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs text-stone-500 font-mono">
            <span>Slug:</span>
            <code className="px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-900 text-[#2563EB] font-mono border border-stone-200 dark:border-stone-800">
              /viewblog/{slugPreview || "article-slug"}
            </code>
          </div>
        </div>

        {/* TAB 1: FORM EDITOR */}
        {activeTab === "editor" ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 1. BLOG TITLE */}
            <div className="p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-[#111B2E]/90 backdrop-blur-xl shadow-lg space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 flex items-center gap-2">
                  <Type className="w-4 h-4 text-[#2563EB]" />
                  <span>Blog Title *</span>
                </label>
                <span className="text-xs font-mono text-stone-500">
                  {formData.title.length}/150
                </span>
              </div>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. The 2026 Technical SEO Blueprint: Dominating AI Overviews & Search Generative Experience"
                required
                maxLength={150}
                className="w-full px-4 sm:px-5 py-3.5 rounded-2xl text-base sm:text-lg font-bold bg-stone-50 dark:bg-stone-900/90 border border-stone-300 dark:border-stone-800 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-orange-500/20 text-stone-900 dark:text-stone-100 transition placeholder:text-stone-400"
              />
              <p className="text-xs text-stone-500">
                A captivating, high-impact headline optimized for reader engagement and search queries.
              </p>
            </div>

            {/* 2. DESCRIPTION */}
            <div className="p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-[#111B2E]/90 backdrop-blur-xl shadow-lg space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#2563EB]" />
                  <span>Description *</span>
                </label>
                <span className="text-xs font-mono text-stone-500">
                  {(formData.description || formData.excerpt || "").length}/400
                </span>
              </div>
              <textarea
                value={formData.description || formData.excerpt || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: e.target.value,
                    excerpt: e.target.value
                  })
                }
                placeholder="Enter a compelling executive summary or meta description. This will be used in social previews, directory cards, and search engine snippets..."
                required
                rows={3}
                maxLength={400}
                className="w-full px-4 sm:px-5 py-3.5 rounded-2xl text-sm bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-orange-500/20 transition resize-none leading-relaxed placeholder:text-stone-400"
              />
              <p className="text-xs text-stone-500">
                Concise 2–3 sentence overview for search result snippets and social shares.
              </p>
            </div>

            {/* 2.1 SEO METADATA: META TITLE & META DESCRIPTION */}
            <div className="p-6 sm:p-8 rounded-3xl border border-orange-500/20 dark:border-orange-500/25 bg-gradient-to-b from-orange-500/[0.03] to-transparent bg-white/80 dark:bg-[#111B2E]/90 backdrop-blur-xl shadow-lg space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200/80 dark:border-stone-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-orange-500/10 text-[#2563EB] flex items-center justify-center font-bold">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-stone-900 dark:text-white">
                      Search Engine Optimization (SEO Metadata)
                    </h3>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400">
                      Configure custom Meta Title &amp; Meta Description for Google SERP and crawlers
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full font-bold bg-orange-500/15 text-[#2563EB] border border-orange-500/30">
                  SEO Tags
                </span>
              </div>

              {/* META TITLE */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 flex items-center gap-2">
                    <Type className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Meta Title</span>
                    <span className="text-[10px] font-normal text-stone-400 lowercase">(recommended 50–60 chars)</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, metaTitle: prev.title }))}
                      className="text-[11px] font-semibold text-[#2563EB] hover:underline cursor-pointer"
                    >
                      Use Blog Title
                    </button>
                    <span className="text-xs font-mono text-stone-500">
                      {(formData.metaTitle || "").length}/70
                    </span>
                  </div>
                </div>
                <input
                  type="text"
                  value={formData.metaTitle || ""}
                  onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                  placeholder={formData.title || "e.g. 2026 Technical SEO Blueprint & Growth Framework | Brand"}
                  maxLength={100}
                  className="w-full px-4 sm:px-5 py-3 rounded-2xl text-sm bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-orange-500/20 transition placeholder:text-stone-400"
                />
                <p className="text-[11px] text-stone-500">
                  The HTML <code className="text-[#2563EB]">&lt;title&gt;</code> displayed in search engine rankings and browser tabs. If left blank, defaults to Blog Title.
                </p>
              </div>

              {/* META DESCRIPTION */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Meta Description</span>
                    <span className="text-[10px] font-normal text-stone-400 lowercase">(recommended 140–160 chars)</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          metaDescription: prev.description || prev.excerpt || ""
                        }))
                      }
                      className="text-[11px] font-semibold text-[#2563EB] hover:underline cursor-pointer"
                    >
                      Use Description
                    </button>
                    <span className="text-xs font-mono text-stone-500">
                      {(formData.metaDescription || "").length}/200
                    </span>
                  </div>
                </div>
                <textarea
                  value={formData.metaDescription || ""}
                  onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                  placeholder={
                    formData.description ||
                    formData.excerpt ||
                    "Enter concise meta description for Google search snippets (140–160 characters recommended)..."
                  }
                  rows={2}
                  maxLength={250}
                  className="w-full px-4 sm:px-5 py-3 rounded-2xl text-sm bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-orange-500/20 transition resize-none leading-relaxed placeholder:text-stone-400"
                />
                <p className="text-[11px] text-stone-500">
                  The <code className="text-[#2563EB]">&lt;meta name=&quot;description&quot;&gt;</code> summary displayed beneath the headline in Google search snippets.
                </p>
              </div>

              {/* LIVE GOOGLE SERP PREVIEW BOX */}
              <div className="p-4 rounded-2xl bg-stone-100/80 dark:bg-black/40 border border-stone-200 dark:border-stone-800 space-y-1.5">
                <div className="flex items-center gap-2 text-[11px] text-stone-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Google SERP Live Snippet Preview</span>
                </div>
                <div className="text-[12px] text-stone-500 dark:text-stone-400 font-mono truncate">
                  https://domain.com &rsaquo; blog &rsaquo; {slugPreview || "article-slug"}
                </div>
                <div className="text-base font-semibold text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer truncate">
                  {formData.metaTitle || formData.title || "Article Meta Title Preview"}
                </div>
                <div className="text-xs text-stone-600 dark:text-stone-300 line-clamp-2 leading-relaxed">
                  {formData.metaDescription ||
                    formData.description ||
                    formData.excerpt ||
                    "Enter your meta description above to preview how this strategic article will appear when indexed by search engines like Google and Bing."}
                </div>
              </div>
            </div>

            {/* 3. IMAGE URL (REPLACED COVER IMAGE PICKER) */}
            <div className="p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-[#111B2E]/90 backdrop-blur-xl shadow-lg space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-[#2563EB]" />
                  <span>Image URL</span>
                </label>
                <span className="text-xs text-stone-500 font-mono">
                  Direct image link (Unsplash, Cloudinary, CDN)
                </span>
              </div>

              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="url"
                    value={formData.imageUrl || formData.coverImage || ""}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        imageUrl: e.target.value,
                        coverImage: e.target.value
                      });
                      setImageError(false);
                    }}
                    placeholder="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                    className="w-full px-4 py-3 rounded-2xl text-sm bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#2563EB] pr-10 transition placeholder:text-stone-400 font-mono"
                  />
                  {(formData.imageUrl || formData.coverImage) && (
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, imageUrl: "", coverImage: "" });
                        setImageError(false);
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-red-500 transition p-1 cursor-pointer"
                      title="Clear image URL"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Live Image Banner Preview */}
              {(formData.imageUrl || formData.coverImage) && !imageError && (
                <div className="relative h-48 sm:h-64 w-full rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-md group">
                  <Image
                    src={formData.imageUrl || formData.coverImage || ""}
                    alt="Article Header Illustration"
                    fill
                    unoptimized
                    onError={() => setImageError(true)}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono border border-white/20">
                      Live Image Preview
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-orange-400">
                      Headline Preview
                    </p>
                    <p className="text-base sm:text-lg font-bold line-clamp-1 drop-shadow">
                      {formData.title || "Your Blog Headline"}
                    </p>
                  </div>
                </div>
              )}

              {imageError && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>
                    Could not load image from this URL. Please verify that the image link is valid and accessible.
                  </span>
                </div>
              )}
            </div>

            {/* 4. CANONICAL URL */}
            <div className="p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-[#111B2E]/90 backdrop-blur-xl shadow-lg space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#2563EB]" />
                  <span>Canonical URL</span>
                </label>
                <button
                  type="button"
                  onClick={handleAutoCanonical}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:underline cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Auto-Generate from Title</span>
                </button>
              </div>

              <input
                type="text"
                value={formData.canonicalUrl || ""}
                onChange={(e) => setFormData({ ...formData, canonicalUrl: e.target.value })}
                placeholder="https://yourdomain.com/viewblog/your-article-slug"
                className="w-full px-4 sm:px-5 py-3 rounded-2xl text-sm font-mono bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-orange-500/20 transition placeholder:text-stone-400"
              />

              <div className="p-3.5 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-[11px] text-stone-600 dark:text-stone-400 flex items-start gap-2">
                <Info className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span>
                  The canonical URL tells search engine crawlers (Google, Bing) which URL is the definitive master source of this article, avoiding duplicate content penalties and consolidating SEO authority.
                </span>
              </div>
            </div>

            {/* 5. MICROSOFT WORD STYLE DOCUMENT STUDIO */}
            <div className="rounded-3xl border border-stone-300 dark:border-stone-800 bg-stone-100/90 dark:bg-[#111B2E] shadow-2xl overflow-hidden space-y-0">

              {/* --- WORD TITLE & APP BAR --- */}
              <div className="bg-[#185ABD] dark:bg-[#0F3B7A] text-white px-4 py-2.5 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded bg-white text-[#185ABD] font-black text-xs flex items-center justify-center shadow-xs">
                    W
                  </div>
                  <span className="text-xs font-bold tracking-tight truncate max-w-[200px] sm:max-w-md">
                    {formData.title ? `${formData.title} — Word Document` : "Untitled Article — Microsoft Word Style Studio"}
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[10px] bg-white/15 px-2 py-0.5 rounded-full font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    Auto-Saved
                  </span>
                </div>

                {/* Quick Shortcuts */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setIsTemplateModalOpen(true)}
                    className="px-2.5 py-1 rounded-md bg-white/15 hover:bg-white/25 text-[11px] font-bold text-white transition flex items-center gap-1 cursor-pointer"
                    title="Insert Pre-Built Article Template"
                  >
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span className="hidden md:inline">Templates</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSplitView(!splitView)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition flex items-center gap-1 cursor-pointer ${splitView ? "bg-white text-[#185ABD]" : "bg-white/15 hover:bg-white/25 text-white"
                      }`}
                    title="Toggle Side-by-Side Live Preview"
                  >
                    <Columns className="w-3 h-3" />
                    <span className="hidden md:inline">Split View</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="p-1.5 rounded-md bg-white/15 hover:bg-white/25 text-white transition cursor-pointer"
                    title="Toggle Fullscreen Editor"
                  >
                    {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* --- WORD RIBBON TABS STRIP --- */}
              <div className="bg-stone-200/90 dark:bg-[#1A1816] border-b border-stone-300 dark:border-stone-800 px-3 flex items-center gap-1 text-xs font-semibold text-stone-700 dark:text-stone-300 overflow-x-auto scrollbar-none">
                {[
                  { id: "home", label: "Home" },
                  { id: "insert", label: "Insert" },
                  { id: "layout", label: "Page Layout" },
                  { id: "view", label: "View & Review" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setWordRibbonTab(tab.id as typeof wordRibbonTab)}
                    className={`px-4 py-2 text-xs font-bold transition cursor-pointer border-b-2 ${wordRibbonTab === tab.id
                        ? "border-[#185ABD] text-[#185ABD] dark:border-orange-500 dark:text-[#2563EB] bg-white dark:bg-[#111B2E]"
                        : "border-transparent hover:text-stone-900 dark:hover:text-white hover:bg-stone-100/60 dark:hover:bg-white/5"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* --- WORD RIBBON TOOLBAR PANEL --- */}
              <div className="bg-stone-100 dark:bg-[#111B2E] border-b border-stone-300 dark:border-stone-800 p-2 sm:p-2.5 overflow-x-auto">
                {wordRibbonTab === "home" && (
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Clipboard Group */}
                    <div className="flex items-center gap-0.5 pr-2 border-r border-stone-300 dark:border-stone-800">
                      <button
                        type="button"
                        onClick={handleUndo}
                        disabled={historyIndex <= 0}
                        className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                        title="Undo (Ctrl+Z)"
                      >
                        <Undo2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={handleRedo}
                        disabled={historyIndex >= contentHistory.length - 1}
                        className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                        title="Redo (Ctrl+Y)"
                      >
                        <Redo2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("clear-formatting")}
                        className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400 transition cursor-pointer"
                        title="Clear Formatting (Eraser)"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Font & Heading Styles */}
                    <div className="flex items-center gap-1.5 pr-2 border-r border-stone-300 dark:border-stone-800">
                      <select
                        onChange={(e) => handleStyleSelect(e.target.value)}
                        defaultValue="normal"
                        className="px-2 py-1 text-xs font-semibold rounded bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200 focus:outline-none"
                      >
                        <option value="normal">Normal Text</option>
                        <option value="h1">Heading 1 (Title)</option>
                        <option value="h2">Heading 2 (Section)</option>
                        <option value="h3">Heading 3 (Sub-Section)</option>
                        <option value="h4">Heading 4 (Minor)</option>
                        <option value="quote">Blockquote</option>
                        <option value="code">Code Block</option>
                      </select>

                      <select
                        value={wordFontFamily}
                        onChange={(e) => setWordFontFamily(e.target.value as typeof wordFontFamily)}
                        className="px-2 py-1 text-xs font-semibold rounded bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200 focus:outline-none"
                      >
                        <option value="font-sans">Segoe / Inter (Sans)</option>
                        <option value="font-serif">Georgia / Editorial (Serif)</option>
                        <option value="font-mono">Cascadia / Code (Mono)</option>
                      </select>
                    </div>

                    {/* Character Styles: B, I, U, S, Sub, Sup */}
                    <div className="flex items-center gap-0.5 pr-2 border-r border-stone-300 dark:border-stone-800">
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("bold")}
                        className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 font-bold text-xs transition cursor-pointer"
                        title="Bold (Ctrl+B)"
                      >
                        <Bold className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("italic")}
                        className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 italic text-xs transition cursor-pointer"
                        title="Italic (Ctrl+I)"
                      >
                        <Italic className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("underline")}
                        className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 underline text-xs transition cursor-pointer"
                        title="Underline (Ctrl+U)"
                      >
                        <Underline className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("strike")}
                        className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 line-through text-xs transition cursor-pointer"
                        title="Strikethrough"
                      >
                        <Strikethrough className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("sub")}
                        className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 text-xs transition cursor-pointer"
                        title="Subscript"
                      >
                        <Subscript className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("sup")}
                        className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 text-xs transition cursor-pointer"
                        title="Superscript"
                      >
                        <Superscript className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Color & Highlight Pickers */}
                    <div className="flex items-center gap-1 pr-2 border-r border-stone-300 dark:border-stone-800 relative">
                      {/* Text Color Picker */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => {
                            setIsColorPickerOpen(!isColorPickerOpen);
                            setIsHighlightPickerOpen(false);
                          }}
                          className="px-2 py-1 rounded hover:bg-stone-200 dark:hover:bg-stone-800 text-xs font-bold flex items-center gap-1 transition cursor-pointer"
                          title="Font Text Color"
                        >
                          <span className="text-[#2563EB] font-black underline">A</span>
                          <ChevronDown className="w-2.5 h-2.5" />
                        </button>
                        {isColorPickerOpen && (
                          <div className="absolute top-8 left-0 z-50 p-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xl flex items-center gap-1.5">
                            {[
                              { label: "Dark", color: "#1E293B" },
                              { label: "Orange", color: "#2563EB" },
                              { label: "Blue", color: "#2563EB" },
                              { label: "Green", color: "#059669" },
                              { label: "Red", color: "#DC2626" },
                              { label: "Purple", color: "#7C3AED" },
                            ].map((c) => (
                              <button
                                key={c.color}
                                type="button"
                                onClick={() => handleApplyColor(c.color)}
                                className="w-5 h-5 rounded-full border border-black/10 hover:scale-125 transition cursor-pointer"
                                style={{ backgroundColor: c.color }}
                                title={c.label}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Highlight Picker */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => {
                            setIsHighlightPickerOpen(!isHighlightPickerOpen);
                            setIsColorPickerOpen(false);
                          }}
                          className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 text-amber-500 transition cursor-pointer flex items-center gap-0.5"
                          title="Text Highlight Marker"
                        >
                          <Highlighter className="w-3.5 h-3.5" />
                          <ChevronDown className="w-2.5 h-2.5" />
                        </button>
                        {isHighlightPickerOpen && (
                          <div className="absolute top-8 left-0 z-50 p-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xl flex items-center gap-1.5">
                            {[
                              { label: "Yellow", color: "#FEF08A" },
                              { label: "Orange", color: "#FED7AA" },
                              { label: "Mint", color: "#A7F3D0" },
                              { label: "Sky", color: "#BAE6FD" },
                              { label: "Pink", color: "#FBCFE8" },
                            ].map((h) => (
                              <button
                                key={h.color}
                                type="button"
                                onClick={() => handleApplyHighlight(h.color)}
                                className="w-5 h-5 rounded border border-black/10 hover:scale-125 transition cursor-pointer"
                                style={{ backgroundColor: h.color }}
                                title={h.label}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Paragraph: Lists & Alignment */}
                    <div className="flex items-center gap-0.5 pr-2 border-r border-stone-300 dark:border-stone-800">
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("bullet")}
                        className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 transition cursor-pointer"
                        title="Bullet List (- item)"
                      >
                        <List className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("number")}
                        className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 transition cursor-pointer"
                        title="Numbered List (1. item)"
                      >
                        <ListOrdered className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("todo")}
                        className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 transition cursor-pointer"
                        title="Checklist (- [ ] task)"
                      >
                        <ListTodo className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("align-left")}
                        className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 transition cursor-pointer"
                        title="Align Left"
                      >
                        <AlignLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("align-center")}
                        className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 transition cursor-pointer"
                        title="Align Center"
                      >
                        <AlignCenter className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("align-right")}
                        className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 transition cursor-pointer"
                        title="Align Right"
                      >
                        <AlignRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Quick Inserts */}
                    <div className="flex items-center gap-0.5">
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("link-dialog")}
                        className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 text-[#2563EB] transition cursor-pointer"
                        title="Insert Link"
                      >
                        <Link2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("image-dialog")}
                        className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 text-[#2563EB] transition cursor-pointer"
                        title="Insert Image"
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("table-dialog")}
                        className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 transition cursor-pointer"
                        title="Insert Table"
                      >
                        <TableIcon className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {wordRibbonTab === "insert" && (
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Tables & Media */}
                    <div className="flex items-center gap-1 pr-3 border-r border-stone-300 dark:border-stone-800">
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("table-dialog")}
                        className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-xs font-semibold hover:border-orange-500/50 flex items-center gap-1.5 cursor-pointer"
                      >
                        <TableIcon className="w-3.5 h-3.5 text-[#185ABD] dark:text-[#2563EB]" />
                        <span>Insert Table</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("image-dialog")}
                        className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-xs font-semibold hover:border-orange-500/50 flex items-center gap-1.5 cursor-pointer"
                      >
                        <ImageIcon className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Insert Picture</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("link-dialog")}
                        className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-xs font-semibold hover:border-orange-500/50 flex items-center gap-1.5 cursor-pointer"
                      >
                        <Link2 className="w-3.5 h-3.5 text-blue-600" />
                        <span>Hyperlink</span>
                      </button>
                    </div>

                    {/* Callouts */}
                    <div className="flex items-center gap-1 pr-3 border-r border-stone-300 dark:border-stone-800">
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("callout-tip")}
                        className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-xs font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <Lightbulb className="w-3 h-3" />
                        <span>Tip Banner</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("callout-note")}
                        className="px-2 py-1 rounded bg-blue-500/10 text-blue-600 border border-blue-500/20 text-xs font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <Info className="w-3 h-3" />
                        <span>Note Box</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("callout-warning")}
                        className="px-2 py-1 rounded bg-amber-500/10 text-amber-600 border border-amber-500/20 text-xs font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <AlertTriangle className="w-3 h-3" />
                        <span>Warning Box</span>
                      </button>
                    </div>

                    {/* Code Snippets */}
                    <div className="flex items-center gap-1 pr-3 border-r border-stone-300 dark:border-stone-800">
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("code-js")}
                        className="px-2 py-1 rounded bg-stone-200 dark:bg-stone-800 text-xs font-mono font-bold text-[#2563EB] cursor-pointer"
                        title="JavaScript Code Block"
                      >
                        JS/TS
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("code-python")}
                        className="px-2 py-1 rounded bg-stone-200 dark:bg-stone-800 text-xs font-mono font-bold text-blue-500 cursor-pointer"
                        title="Python Code Block"
                      >
                        PY
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToolbarAction("code-html")}
                        className="px-2 py-1 rounded bg-stone-200 dark:bg-stone-800 text-xs font-mono font-bold text-amber-600 cursor-pointer"
                        title="HTML Code Block"
                      >
                        HTML
                      </button>
                    </div>

                    {/* Quick Article Templates */}
                    <button
                      type="button"
                      onClick={() => setIsTemplateModalOpen(true)}
                      className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#2563EB] to-[#14B8A6] text-white text-xs font-bold shadow-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Article Templates...</span>
                    </button>
                  </div>
                )}

                {wordRibbonTab === "layout" && (
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
                    <div className="flex items-center gap-2 pr-3 border-r border-stone-300 dark:border-stone-800">
                      <span className="text-stone-500 font-bold uppercase text-[10px]">Paper Width:</span>
                      <button
                        type="button"
                        onClick={() => setWordPageWidth("standard")}
                        className={`px-3 py-1 rounded-md text-xs font-bold transition cursor-pointer ${wordPageWidth === "standard"
                            ? "bg-[#185ABD] text-white dark:bg-[#2563EB]"
                            : "bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800"
                          }`}
                      >
                        Standard A4 Sheet (Recommended)
                      </button>
                      <button
                        type="button"
                        onClick={() => setWordPageWidth("wide")}
                        className={`px-3 py-1 rounded-md text-xs font-bold transition cursor-pointer ${wordPageWidth === "wide"
                            ? "bg-[#185ABD] text-white dark:bg-[#2563EB]"
                            : "bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800"
                          }`}
                      >
                        Wide Canvas
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-stone-500 font-bold uppercase text-[10px]">Document Font:</span>
                      <button
                        type="button"
                        onClick={() => setWordFontFamily("font-sans")}
                        className={`px-2.5 py-1 rounded-md font-sans text-xs transition cursor-pointer ${wordFontFamily === "font-sans" ? "bg-stone-800 text-white dark:bg-white dark:text-stone-900" : "bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800"
                          }`}
                      >
                        Modern Sans
                      </button>
                      <button
                        type="button"
                        onClick={() => setWordFontFamily("font-serif")}
                        className={`px-2.5 py-1 rounded-md font-serif text-xs transition cursor-pointer ${wordFontFamily === "font-serif" ? "bg-stone-800 text-white dark:bg-white dark:text-stone-900" : "bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800"
                          }`}
                      >
                        Editorial Serif
                      </button>
                      <button
                        type="button"
                        onClick={() => setWordFontFamily("font-mono")}
                        className={`px-2.5 py-1 rounded-md font-mono text-xs transition cursor-pointer ${wordFontFamily === "font-mono" ? "bg-stone-800 text-white dark:bg-white dark:text-stone-900" : "bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800"
                          }`}
                      >
                        Technical Mono
                      </button>
                    </div>
                  </div>
                )}

                {wordRibbonTab === "view" && (
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setSplitView(!splitView)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${splitView
                          ? "bg-[#185ABD] text-white border-blue-600 dark:bg-[#2563EB] dark:border-orange-600"
                          : "bg-white dark:bg-stone-900 border-stone-300 dark:border-stone-800"
                        }`}
                    >
                      <Columns className="w-3.5 h-3.5" />
                      <span>{splitView ? "Close Split View" : "Side-by-Side Live Preview"}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab("preview")}
                      className="px-3 py-1.5 rounded-lg bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-xs font-bold hover:text-[#2563EB] transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Full Reading View</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      className="px-3 py-1.5 rounded-lg bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-xs font-bold hover:text-[#2563EB] transition flex items-center gap-1.5 cursor-pointer"
                    >
                      {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                      <span>{isFullscreen ? "Exit Fullscreen" : "Fullscreen Distraction-Free"}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsCheatsheetOpen(true)}
                      className="px-3 py-1.5 rounded-lg bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-500 hover:text-[#2563EB] transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>Formatting Cheatsheet</span>
                    </button>
                  </div>
                )}
              </div>

              {/* --- WORD DESK & PAPER DOCUMENT CANVAS --- */}
              <div className="bg-stone-200/70 dark:bg-[#0c0a09] p-3 sm:p-6 lg:p-8 space-y-3">
                {/* Word Ruler */}
                <div className="max-w-4xl mx-auto bg-stone-300/80 dark:bg-stone-900/80 rounded-md h-5 px-4 flex items-center justify-between text-[8px] font-mono text-stone-500 border border-stone-400/30 dark:border-stone-800 select-none shadow-xs">
                  <span className="w-1.5 h-3 bg-stone-500 rounded-xs" title="Left Margin Indicator" />
                  <div className="flex-1 flex justify-around px-2 text-stone-400">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                    <span>11</span>
                    <span>12</span>
                    <span>13</span>
                    <span>14</span>
                    <span>15</span>
                    <span>16</span>
                  </div>
                  <span className="w-1.5 h-3 bg-stone-500 rounded-xs" title="Right Margin Indicator" />
                </div>

                {/* The Paper Sheet / Editor Canvas */}
                <div className={`grid gap-5 ${splitView ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}>
                  <div className={`mx-auto w-full ${splitView ? "" : wordPageWidth === "wide" ? "max-w-5xl" : "max-w-4xl"}`}>
                    <div className="bg-white dark:bg-[#151311] rounded-xl shadow-[0_12px_45px_rgba(0,0,0,0.08)] dark:shadow-[0_16px_50px_rgba(0,0,0,0.6)] border border-stone-200 dark:border-stone-800 p-6 sm:p-10 lg:p-12 transition-all">
                      <textarea
                        ref={textareaRef}
                        id="article-content-textarea"
                        value={formData.content}
                        onChange={(e) => updateContentWithHistory(e.target.value)}
                        placeholder={`Start writing your article here...\n\nUse the Microsoft Word Ribbon toolbar above to format headings, bold/italic text, tables, bullet lists, callouts, and more.\n\nTip: Click 'Templates' in the top bar to auto-populate an entire article outline instantly!`}
                        required
                        rows={isFullscreen ? 32 : splitView ? 24 : 20}
                        className={`w-full bg-transparent text-stone-900 dark:text-stone-100 focus:outline-none transition leading-relaxed resize-y ${wordFontFamily} text-base sm:text-[16.5px]`}
                      />
                    </div>
                  </div>

                  {/* Side-by-side Live Rendered Preview (when splitView is true) */}
                  {splitView && (
                    <div className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#151311] p-6 sm:p-8 overflow-y-auto max-h-[700px] shadow-lg space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#2563EB] font-bold flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5" />
                          <span>Real-Time Formatted Preview</span>
                        </span>
                        <span className="text-[10px] text-stone-500 font-mono">Word Render Engine</span>
                      </div>
                      <ArticleMarkdownRenderer content={formData.content} />
                    </div>
                  )}
                </div>
              </div>

              {/* --- WORD BOTTOM STATUS BAR --- */}
              <div className="bg-stone-200 dark:bg-[#111B2E] border-t border-stone-300 dark:border-stone-800 px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-stone-600 dark:text-stone-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 font-semibold text-stone-800 dark:text-stone-200">
                    <FileText className="w-3.5 h-3.5 text-[#185ABD] dark:text-[#2563EB]" />
                    Page 1 of 1
                  </span>
                  <span>•</span>
                  <span>{contentStats.words} words</span>
                  <span>•</span>
                  <span>{contentStats.characters} characters</span>
                  <span>•</span>
                  <span className="text-[#2563EB] font-bold">{estimatedReadTime} read</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="hidden sm:inline">English (US)</span>
                  <span>•</span>
                  <span>100% Zoom</span>
                  <span>•</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Ready
                  </span>
                </div>
              </div>

            </div>

            {/* 6. CATEGORY & ESTIMATED READ TIME */}
            <div className="p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-[#111B2E]/90 backdrop-blur-xl shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl text-sm font-semibold bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#2563EB]"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {CATEGORIES.map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => setFormData({ ...formData, category: cat })}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition cursor-pointer ${formData.category === cat
                          ? "bg-[#2563EB] text-white shadow-sm"
                          : "bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:border-orange-500/40"
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Estimated Read Time</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, readTime: estimatedReadTime })}
                    className="text-xs font-semibold text-[#2563EB] hover:underline cursor-pointer"
                  >
                    Auto ({estimatedReadTime})
                  </button>
                </div>
                <input
                  type="text"
                  value={formData.readTime}
                  onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                  placeholder="e.g. 5 min read"
                  className="w-full px-4 py-3 rounded-2xl text-sm bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#2563EB]"
                />
                <p className="text-xs text-stone-500 mt-2">
                  Calculated automatically based on content word count.
                </p>
              </div>
            </div>

            {/* 7. TAGS & KEYWORDS */}
            <div className="p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-[#111B2E]/90 backdrop-blur-xl shadow-lg space-y-4">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#2563EB]" />
                <span>Tags & SEO Keywords</span>
              </label>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagInputKeyDown}
                  placeholder="Type keyword and press Enter..."
                  className="flex-1 px-4 py-2.5 rounded-2xl text-sm bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#2563EB]"
                />
                <button
                  type="button"
                  onClick={() => handleAddTag(tagInput)}
                  className="px-4 py-2.5 rounded-2xl bg-stone-100 dark:bg-stone-900 hover:bg-[#2563EB] hover:text-white text-xs font-bold border border-stone-200 dark:border-stone-800 transition cursor-pointer"
                >
                  Add Tag
                </button>
              </div>

              {/* Selected Tags */}
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono font-semibold bg-orange-500/10 text-[#2563EB] border border-orange-500/30"
                  >
                    #{tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:text-red-500 transition cursor-pointer"
                      title="Remove tag"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>

              {/* Suggested Tags */}
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-stone-500 mb-2">
                  Suggested SEO keywords:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_TAGS.map((st) => (
                    <button
                      type="button"
                      key={st}
                      onClick={() => handleAddTag(st)}
                      disabled={formData.tags.includes(st)}
                      className="px-2.5 py-1 rounded-lg text-xs bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-800 disabled:opacity-40 disabled:cursor-not-allowed transition"
                    >
                      + {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 8. AUTHOR DETAILS & FEATURED HERO TOGGLE */}
            <div className="p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-[#111B2E]/90 backdrop-blur-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#2563EB]" />
                  <span>Author Details</span>
                </label>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500/40 shrink-0">
                    <Image
                      src={authorAvatar}
                      alt={authorName}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <input
                      type="text"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder="Author Name"
                      className="w-full px-3 py-1.5 rounded-xl text-xs font-bold bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-800"
                    />
                    <input
                      type="text"
                      value={authorRole}
                      onChange={(e) => setAuthorRole(e.target.value)}
                      placeholder="Author Title / Role"
                      className="w-full px-3 py-1.5 rounded-xl text-[11px] bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-500"
                    />
                  </div>
                </div>
              </div>

              {/* Featured Hero Toggle */}
              <div className="flex flex-col justify-center space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#2563EB]" />
                  <span>Publication Prominence</span>
                </label>
                <label className="flex items-center gap-3 p-4 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 cursor-pointer hover:border-orange-500/40 transition">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-4 h-4 accent-[#2563EB] rounded"
                  />
                  <div>
                    <p className="text-xs font-bold text-stone-900 dark:text-stone-100">
                      Feature as Hero Article
                    </p>
                    <p className="text-[11px] text-stone-500">
                      Pin prominently at the top of the blog directory
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4">
              <Link
                href="/#blog"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl border border-stone-300 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-900 text-stone-700 dark:text-stone-300 text-sm font-bold text-center transition"
              >
                Cancel / Discard
              </Link>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white text-sm font-black tracking-wide shadow-lg shadow-[#2563EB]/30 hover:shadow-[#2563EB]/55 border border-blue-400/30 hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Publishing Article...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{isEditing ? "Save & Update Article" : "Publish Article Now"}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* TAB 2: FULL READER LIVE PREVIEW */
          <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#111B2E] p-6 sm:p-10 shadow-2xl space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB]">
                Reader View Live Preview
              </span>
              <button
                type="button"
                onClick={() => setActiveTab("editor")}
                className="text-xs font-bold text-[#2563EB] hover:underline"
              >
                ← Return to Editor
              </button>
            </div>

            {/* Preview Banner */}
            {(formData.imageUrl || formData.coverImage) && (
              <div className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-stone-200 dark:border-stone-800">
                <Image
                  src={formData.imageUrl || formData.coverImage || ""}
                  alt={formData.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#2563EB] text-white text-xs font-bold">
                    {formData.category}
                  </span>
                </div>
              </div>
            )}

            {/* Header info */}
            <div>
              <div className="flex items-center gap-3 text-xs text-stone-500 font-mono mb-2">
                <span>{formData.readTime || estimatedReadTime}</span>
                <span>•</span>
                <span>Live Preview Mode</span>
                {formData.canonicalUrl && (
                  <>
                    <span>•</span>
                    <span className="text-emerald-500 font-semibold truncate max-w-xs">
                      Canonical: {formData.canonicalUrl}
                    </span>
                  </>
                )}
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-stone-900 dark:text-white tracking-tight leading-tight mb-4">
                {formData.title || "Untitled Article Title"}
              </h1>
              <div className="p-4 sm:p-5 rounded-2xl bg-orange-500/10 border-l-4 border-[#2563EB] text-stone-800 dark:text-stone-200 italic text-base sm:text-lg">
                &ldquo;{formData.description || formData.excerpt || "Article description preview..."}&rdquo;
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 py-3 border-y border-stone-200 dark:border-stone-800">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-orange-500/40">
                <Image
                  src={authorAvatar}
                  alt={authorName}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-stone-900 dark:text-stone-100">{authorName}</p>
                <p className="text-xs text-stone-500">{authorRole}</p>
              </div>
            </div>

            {/* Formatted Content using ArticleMarkdownRenderer */}
            <div className="pt-2">
              <ArticleMarkdownRenderer content={formData.content} />
            </div>

            {/* Tags preview */}
            {formData.tags.length > 0 && (
              <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-wrap gap-2">
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-xl bg-orange-500/10 text-[#2563EB] text-xs font-mono font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* INSERT LINK MODAL */}
      <AnimatePresence>
        {isLinkModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#151210] p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 dark:text-white flex items-center gap-2">
                  <Link2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Insert Hyperlink</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setIsLinkModalOpen(false)}
                  className="p-1 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-stone-600 dark:text-stone-400 block mb-1">
                    Link Text / Anchor:
                  </label>
                  <input
                    type="text"
                    value={linkModalText}
                    onChange={(e) => setLinkModalText(e.target.value)}
                    placeholder="e.g. Read the 2026 Core Web Vitals Report"
                    className="w-full px-3 py-2 rounded-xl text-sm bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-stone-600 dark:text-stone-400 block mb-1">
                    Destination URL:
                  </label>
                  <input
                    type="url"
                    value={linkModalUrl}
                    onChange={(e) => setLinkModalUrl(e.target.value)}
                    placeholder="https://example.com/guide"
                    className="w-full px-3 py-2 rounded-xl text-sm font-mono bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsLinkModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold border border-stone-300 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleInsertLink}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#2563EB] text-white hover:bg-orange-600"
                >
                  Insert Link
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* INSERT IMAGE MODAL */}
      <AnimatePresence>
        {isImageModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#151210] p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 dark:text-white flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-[#2563EB]" />
                  <span>Insert Inline Illustration</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setIsImageModalOpen(false)}
                  className="p-1 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-stone-600 dark:text-stone-400 block mb-1">
                    Image Description (Alt):
                  </label>
                  <input
                    type="text"
                    value={imageModalAlt}
                    onChange={(e) => setImageModalAlt(e.target.value)}
                    placeholder="e.g. Analytics Dashboard Chart"
                    className="w-full px-3 py-2 rounded-xl text-sm bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-stone-600 dark:text-stone-400 block mb-1">
                    Image URL:
                  </label>
                  <input
                    type="url"
                    value={imageModalUrl}
                    onChange={(e) => setImageModalUrl(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-3 py-2 rounded-xl text-sm font-mono bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsImageModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold border border-stone-300 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleInsertImage}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#2563EB] text-white hover:bg-orange-600"
                >
                  Insert Image
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* INSERT TABLE MODAL */}
      <AnimatePresence>
        {isTableModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-sm rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#151210] p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 dark:text-white flex items-center gap-2">
                  <TableIcon className="w-4 h-4 text-[#2563EB]" />
                  <span>Insert Structured Table</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setIsTableModalOpen(false)}
                  className="p-1 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-600 dark:text-stone-400 block mb-1">
                    Columns:
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={6}
                    value={tableCols}
                    onChange={(e) => setTableCols(parseInt(e.target.value) || 3)}
                    className="w-full px-3 py-2 rounded-xl text-sm font-mono bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-center"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-stone-600 dark:text-stone-400 block mb-1">
                    Rows:
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={tableRows}
                    onChange={(e) => setTableRows(parseInt(e.target.value) || 3)}
                    className="w-full px-3 py-2 rounded-xl text-sm font-mono bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-center"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsTableModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold border border-stone-300 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleInsertTable}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#2563EB] text-white hover:bg-orange-600"
                >
                  Create Table
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* WORD PRE-BUILT ARTICLE TEMPLATES MODAL */}
      <AnimatePresence>
        {isTemplateModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#151210] p-6 sm:p-7 shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-orange-500/10 text-[#2563EB] flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-900 dark:text-white">
                      Document Templates
                    </h3>
                    <p className="text-xs text-stone-500">
                      Pre-structured executive blueprints for instant writing
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsTemplateModalOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => handleInsertTemplate("case-study")}
                  className="w-full text-left p-4 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-orange-500/50 hover:bg-orange-500/5 transition group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-stone-900 dark:text-white group-hover:text-[#2563EB] transition">
                      🚀 Technical SEO Case Study
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-500/10 text-[#2563EB] font-bold">
                      Data & ROI
                    </span>
                  </div>
                  <p className="text-xs text-stone-500">
                    Includes Executive Summary, Baseline Audit Metrics, 3-Phase Execution Table, and Verified Revenue ROI Proof.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => handleInsertTemplate("guide")}
                  className="w-full text-left p-4 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-orange-500/50 hover:bg-orange-500/5 transition group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-stone-900 dark:text-white group-hover:text-[#2563EB] transition">
                      📈 Definitive 2026 Guide / Tutorial
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 font-bold">
                      How-To
                    </span>
                  </div>
                  <p className="text-xs text-stone-500">
                    Includes Architectural Introduction, Schema JSON-LD Code Block, Topic Silos, and Execution Checklist.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => handleInsertTemplate("audit")}
                  className="w-full text-left p-4 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-orange-500/50 hover:bg-orange-500/5 transition group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-stone-900 dark:text-white group-hover:text-[#2563EB] transition">
                      📊 Search Performance & Website Audit
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-bold">
                      Audit Matrix
                    </span>
                  </div>
                  <p className="text-xs text-stone-500">
                    Includes Priority Action Matrix with severity ratings, Canonical discrepancy warnings, and Sprint Roadmap.
                  </p>
                </button>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setIsTemplateModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold border border-stone-300 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MARKDOWN FORMATTING CHEATSHEET MODAL */}
      <AnimatePresence>
        {isCheatsheetOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-orange-500/30 bg-white dark:bg-[#151210] p-6 sm:p-8 shadow-2xl space-y-6"
            >
              <button
                type="button"
                onClick={() => setIsCheatsheetOpen(false)}
                className="absolute top-5 right-5 p-1.5 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-orange-500/15 flex items-center justify-center text-[#2563EB]">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-stone-900 dark:text-white">
                    Text Editing & Markdown Reference
                  </h3>
                  <p className="text-xs text-stone-500">
                    Use these syntax shortcuts or toolbar buttons anytime
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 space-y-2">
                  <p className="font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider text-[11px]">
                    Headings & Typography
                  </p>
                  <p><code># Title</code> → Large H1</p>
                  <p><code>## Section</code> → Bold H2</p>
                  <p><code>### Subsection</code> → Orange H3</p>
                  <p><code>**bold**</code> → <strong>Bold text</strong></p>
                  <p><code>*italic*</code> → <em>Italic text</em></p>
                  <p><code>&lt;u&gt;underline&lt;/u&gt;</code> → Underlined</p>
                  <p><code>~~deleted~~</code> → Strikethrough</p>
                  <p><code>==mark==</code> → Highlighted</p>
                  <p><code>`code`</code> → Inline code</p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 space-y-2">
                  <p className="font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider text-[11px]">
                    Callouts & Alerts
                  </p>
                  <p><code>&gt; [!TIP]</code> → 💡 Green Pro Tip box</p>
                  <p><code>&gt; [!NOTE]</code> → 📌 Blue Note box</p>
                  <p><code>&gt; [!WARNING]</code> → ⚠️ Amber Warning box</p>
                  <p><code>&gt; quote</code> → Classic Blockquote</p>
                  <p><code>- [ ] task</code> → Interactive Checklist</p>
                  <p><code>- item</code> → Bulleted list</p>
                  <p><code>1. item</code> → Numbered list</p>
                  <p><code>---</code> → Divider line</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 text-xs font-mono space-y-2">
                <p className="font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider text-[11px]">
                  Tables & Media Links
                </p>
                <p><code>[Anchor Title](https://example.com)</code> → Web Link</p>
                <p><code>![Alt Description](https://images.unsplash.com/...)</code> → Inline Image</p>
                <p><code>| Header 1 | Header 2 |</code> → Markdown Data Table</p>
              </div>

              <div className="text-right">
                <button
                  type="button"
                  onClick={() => setIsCheatsheetOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#2563EB] text-white text-xs font-bold"
                >
                  Close Reference
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ADMIN PASSCODE MODAL */}
      <AnimatePresence>
        {isAdminLoginOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md rounded-3xl border border-orange-500/30 bg-white dark:bg-[#151210] p-6 sm:p-8 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setIsAdminLoginOpen(false)}
                className="absolute top-5 right-5 p-1.5 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-orange-500/15 flex items-center justify-center text-[#2563EB]">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-stone-900 dark:text-white">
                    Admin Passcode
                  </h3>
                  <p className="text-xs text-stone-500">
                    Verify credentials to publish or edit articles
                  </p>
                </div>
              </div>

              {adminLoginError && (
                <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs">
                  {adminLoginError}
                </div>
              )}

              <form onSubmit={handleAdminLogin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    value={adminPasswordInput}
                    onChange={(e) => setAdminPasswordInput(e.target.value)}
                    placeholder="Enter admin passcode (e.g. admin123)"
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAdminLoginOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold border border-stone-300 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={adminLoginLoading}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#2563EB] text-white hover:bg-orange-600 disabled:opacity-60"
                  >
                    {adminLoginLoading ? "Verifying..." : "Authenticate Key"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* TOAST NOTIFICATION */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-stone-900 dark:bg-white text-white dark:text-stone-900 text-xs font-bold shadow-2xl border border-stone-800 dark:border-stone-200"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CreateBlogPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
          <div className="w-8 h-8 border-3 border-[#2563EB] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <CreateBlogContent />
    </Suspense>
  );
}
