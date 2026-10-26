"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Check,
  Copy,
  ExternalLink,
  Lightbulb,
  Info,
  AlertTriangle,
  Quote as QuoteIcon
} from "lucide-react";

// Helper to format inline markdown spans (bold, italic, code, links, underline, etc.)
export function renderInlineMarkdown(text: string): React.ReactNode {
  if (!text) return null;

  // Split text by tokens while preserving them
  // Patterns handled:
  // 1. Links: [text](url)
  // 2. Images: ![alt](url)
  // 3. Bold: **text**
  // 4. Italic: *text* or _text_
  // 5. Underline: <u>text</u>
  // 6. Strikethrough: ~~text~~
  // 7. Highlight: ==text== or <mark>text</mark>
  // 8. Inline code: `code`
  // 9. Subscript: <sub>text</sub>
  // 10. Superscript: <sup>text</sup>

  // We can use a regex tokenizer that matches these constructs
  const tokenRegex =
    /(!\[([^\]]*)\]\(([^)]+)\)|\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*|__([^_]+)__|~~([^~]+)~~|==([^=]+)==|`([^`]+)`|<u>(.*?)<\/u>|<mark>(.*?)<\/mark>|<sub>(.*?)<\/sub>|<sup>(.*?)<\/sup>)/g;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const fullMatch = match[0];
    const key = `inline-${match.index}`;

    if (fullMatch.startsWith("![") && match[2] !== undefined && match[3] !== undefined) {
      // Inline image
      parts.push(
        <span key={key} className="inline-block my-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={match[3]}
            alt={match[2] || "Inline illustration"}
            className="rounded-xl max-h-80 object-cover shadow-md border border-stone-200 dark:border-stone-800"
            loading="lazy"
          />
          {match[2] && (
            <span className="block text-center text-xs text-stone-500 mt-1 italic">
              {match[2]}
            </span>
          )}
        </span>
      );
    } else if (fullMatch.startsWith("[") && match[4] !== undefined && match[5] !== undefined) {
      // Link [text](url)
      parts.push(
        <a
          key={key}
          href={match[5]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#EA580C] hover:underline font-semibold inline-flex items-center gap-0.5 break-words"
        >
          <span>{match[4]}</span>
          <ExternalLink className="w-3 h-3 inline ml-0.5 opacity-70" />
        </a>
      );
    } else if (fullMatch.startsWith("**") && match[6] !== undefined) {
      // Bold
      parts.push(
        <strong key={key} className="font-extrabold text-stone-900 dark:text-stone-100">
          {match[6]}
        </strong>
      );
    } else if ((fullMatch.startsWith("*") && match[7] !== undefined) || (fullMatch.startsWith("__") && match[8] !== undefined)) {
      // Italic
      parts.push(
        <em key={key} className="italic text-stone-800 dark:text-stone-200">
          {match[7] || match[8]}
        </em>
      );
    } else if (fullMatch.startsWith("~~") && match[9] !== undefined) {
      // Strikethrough
      parts.push(
        <del key={key} className="line-through text-stone-400 dark:text-stone-500">
          {match[9]}
        </del>
      );
    } else if (fullMatch.startsWith("==") && match[10] !== undefined) {
      // Highlight ==text==
      parts.push(
        <mark
          key={key}
          className="bg-orange-500/20 text-orange-900 dark:text-orange-200 px-1 py-0.5 rounded font-medium"
        >
          {match[10]}
        </mark>
      );
    } else if (fullMatch.startsWith("`") && match[11] !== undefined) {
      // Inline Code
      parts.push(
        <code
          key={key}
          className="px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-stone-900 text-[#EA580C] font-mono text-[0.85em] border border-stone-200/80 dark:border-stone-800"
        >
          {match[11]}
        </code>
      );
    } else if (fullMatch.startsWith("<u>") && match[12] !== undefined) {
      // Underline
      parts.push(
        <u key={key} className="underline underline-offset-4 decoration-[#EA580C]">
          {match[12]}
        </u>
      );
    } else if (fullMatch.startsWith("<mark>") && match[13] !== undefined) {
      // Highlight <mark>
      parts.push(
        <mark
          key={key}
          className="bg-amber-400/25 text-amber-950 dark:text-amber-200 px-1 py-0.5 rounded font-medium"
        >
          {match[13]}
        </mark>
      );
    } else if (fullMatch.startsWith("<sub>") && match[14] !== undefined) {
      // Subscript
      parts.push(<sub key={key} className="text-[0.75em] align-sub">{match[14]}</sub>);
    } else if (fullMatch.startsWith("<sup>") && match[15] !== undefined) {
      // Superscript
      parts.push(<sup key={key} className="text-[0.75em] align-super text-[#EA580C] font-bold">{match[15]}</sup>);
    } else {
      parts.push(fullMatch);
    }

    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

// Code Block with Copy Button
function CodeBlockComponent({ code, language }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-stone-800 bg-[#0d0c0b] text-stone-100 shadow-xl">
      <div className="flex items-center justify-between px-4 py-2 bg-stone-900/90 border-b border-stone-800 text-xs font-mono text-stone-400">
        <span className="uppercase font-bold tracking-wider text-[#EA580C]">
          {language || "code"}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-[11px] font-sans font-semibold transition cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-stone-400" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 sm:p-5 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-stone-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Parse markdown table rows
function MarkdownTable({ rawTable }: { rawTable: string }) {
  const lines = rawTable.trim().split("\n").filter(Boolean);
  if (lines.length < 2) return <pre>{rawTable}</pre>;

  const parseRow = (line: string) => {
    const trimmed = line.trim().replace(/^\||\|$/g, "");
    return trimmed.split("|").map((cell) => cell.trim());
  };

  const headerCells = parseRow(lines[0]);
  const dataRows = lines.slice(2).map(parseRow);

  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-stone-200 dark:border-stone-800 shadow-md">
      <table className="min-w-full text-left text-sm divide-y divide-stone-200 dark:divide-stone-800">
        <thead className="bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-bold">
          <tr>
            {headerCells.map((h, idx) => (
              <th key={idx} className="px-4 py-3 text-xs uppercase font-bold tracking-wider">
                {renderInlineMarkdown(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-200 dark:divide-stone-800/60 bg-white dark:bg-[#120F0D]">
          {dataRows.map((row, rIdx) => (
            <tr
              key={rIdx}
              className="hover:bg-orange-500/[0.03] transition-colors"
            >
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="px-4 py-3 text-stone-700 dark:text-stone-300">
                  {renderInlineMarkdown(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Main Rich Markdown Article Content Renderer
export function ArticleMarkdownRenderer({
  content,
  className = ""
}: {
  content: string;
  className?: string;
}) {
  if (!content) {
    return (
      <div className="text-stone-400 italic text-sm py-4">
        No content written yet.
      </div>
    );
  }

  // Split content into major blocks by double newline
  const rawBlocks = content.split(/\n\n+/);

  return (
    <div className={`space-y-6 leading-relaxed ${className}`}>
      {rawBlocks.map((block, idx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // 1. Headings
        if (trimmed.startsWith("#### ")) {
          return (
            <h4
              key={idx}
              className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 mt-6 mb-2 tracking-tight"
            >
              {renderInlineMarkdown(trimmed.replace(/^####\s+/, ""))}
            </h4>
          );
        }

        if (trimmed.startsWith("### ")) {
          return (
            <h3
              key={idx}
              className="text-xl sm:text-2xl font-bold text-[#EA580C] mt-8 mb-3 tracking-tight"
            >
              {renderInlineMarkdown(trimmed.replace(/^###\s+/, ""))}
            </h3>
          );
        }

        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={idx}
              className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-stone-100 mt-10 mb-4 tracking-tight flex items-center gap-3"
            >
              <span className="w-2 h-7 bg-[#EA580C] rounded-full inline-block shrink-0" />
              <span>{renderInlineMarkdown(trimmed.replace(/^##\s+/, ""))}</span>
            </h2>
          );
        }

        if (trimmed.startsWith("# ")) {
          return (
            <h1
              key={idx}
              className="text-3xl sm:text-4xl font-black text-stone-900 dark:text-stone-100 my-6 tracking-tight"
            >
              {renderInlineMarkdown(trimmed.replace(/^#\s+/, ""))}
            </h1>
          );
        }

        // 2. Horizontal Divider
        if (trimmed === "---" || trimmed === "***" || trimmed === "___") {
          return (
            <hr
              key={idx}
              className="my-8 border-t-2 border-stone-200 dark:border-stone-800"
            />
          );
        }

        // 3. Fenced Code Block
        if (trimmed.startsWith("```")) {
          const lines = trimmed.split("\n");
          const firstLine = lines[0];
          const lang = firstLine.replace(/^```/, "").trim();
          const lastLineIdx = lines[lines.length - 1].startsWith("```")
            ? lines.length - 1
            : lines.length;
          const codeBody = lines.slice(1, lastLineIdx).join("\n");
          return (
            <CodeBlockComponent key={idx} code={codeBody} language={lang} />
          );
        }

        // 4. Markdown Table (starts with | and contains | --- |)
        if (trimmed.startsWith("|") && trimmed.includes("|") && trimmed.includes("---")) {
          return <MarkdownTable key={idx} rawTable={trimmed} />;
        }

        // 5. Callout Boxes (> [!TIP], > [!NOTE], > [!WARNING])
        if (trimmed.startsWith("> [!TIP]")) {
          const body = trimmed.replace(/^>\s*\[!TIP\]\s*/i, "").replace(/^>\s*/gm, "");
          return (
            <div
              key={idx}
              className="my-6 p-5 rounded-2xl border-l-4 border-emerald-500 bg-emerald-500/10 text-stone-800 dark:text-stone-200 shadow-sm space-y-1"
            >
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                <span>Pro Tip</span>
              </div>
              <div className="text-sm sm:text-base leading-relaxed pl-6">
                {renderInlineMarkdown(body)}
              </div>
            </div>
          );
        }

        if (trimmed.startsWith("> [!NOTE]")) {
          const body = trimmed.replace(/^>\s*\[!NOTE\]\s*/i, "").replace(/^>\s*/gm, "");
          return (
            <div
              key={idx}
              className="my-6 p-5 rounded-2xl border-l-4 border-blue-500 bg-blue-500/10 text-stone-800 dark:text-stone-200 shadow-sm space-y-1"
            >
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                <Info className="w-4 h-4" />
                <span>Important Note</span>
              </div>
              <div className="text-sm sm:text-base leading-relaxed pl-6">
                {renderInlineMarkdown(body)}
              </div>
            </div>
          );
        }

        if (trimmed.startsWith("> [!WARNING]") || trimmed.startsWith("> [!CAUTION]")) {
          const body = trimmed
            .replace(/^>\s*\[!(WARNING|CAUTION)\]\s*/i, "")
            .replace(/^>\s*/gm, "");
          return (
            <div
              key={idx}
              className="my-6 p-5 rounded-2xl border-l-4 border-amber-500 bg-amber-500/10 text-stone-800 dark:text-stone-200 shadow-sm space-y-1"
            >
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>Warning</span>
              </div>
              <div className="text-sm sm:text-base leading-relaxed pl-6">
                {renderInlineMarkdown(body)}
              </div>
            </div>
          );
        }

        // Standard Blockquote
        if (trimmed.startsWith("> ")) {
          const quoteText = trimmed.replace(/^>\s*/gm, "");
          return (
            <blockquote
              key={idx}
              className="my-6 pl-5 py-3 border-l-4 border-[#EA580C] bg-orange-500/5 text-stone-800 dark:text-stone-200 italic rounded-r-2xl text-base sm:text-lg relative"
            >
              <QuoteIcon className="w-5 h-5 text-[#EA580C]/40 mb-1" />
              <div>{renderInlineMarkdown(quoteText)}</div>
            </blockquote>
          );
        }

        // 6. Task List / Checklist (- [ ] or - [x])
        if (/^[-*]\s+\[[ xX]\]/.test(trimmed)) {
          const items = trimmed.split("\n").filter(Boolean);
          return (
            <div key={idx} className="my-5 space-y-2.5 pl-2">
              {items.map((item, itemIdx) => {
                const isChecked = /^[-*]\s+\[[xX]\]/.test(item);
                const itemText = item.replace(/^[-*]\s+\[[ xX]\]\s*/, "");
                return (
                  <div key={itemIdx} className="flex items-start gap-3 text-sm sm:text-base">
                    <div
                      className={`w-5 h-5 mt-0.5 rounded-lg flex items-center justify-center shrink-0 border transition ${
                        isChecked
                          ? "bg-[#EA580C] border-[#EA580C] text-white"
                          : "border-stone-400 dark:border-stone-600 bg-transparent"
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span
                      className={`leading-relaxed ${
                        isChecked
                          ? "line-through text-stone-400 dark:text-stone-500"
                          : "text-stone-800 dark:text-stone-200"
                      }`}
                    >
                      {renderInlineMarkdown(itemText)}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        }

        // 7. Bullet List (- item or * item)
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const items = trimmed.split("\n").filter(Boolean);
          return (
            <ul key={idx} className="my-5 space-y-2.5 pl-2">
              {items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-3 text-sm sm:text-base">
                  <span className="w-2 h-2 rounded-full bg-[#EA580C] mt-2.5 shrink-0" />
                  <span className="text-stone-800 dark:text-stone-200 leading-relaxed">
                    {renderInlineMarkdown(item.replace(/^[-*]\s*/, ""))}
                  </span>
                </li>
              ))}
            </ul>
          );
        }

        // 8. Numbered List (1. item)
        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed.split("\n").filter(Boolean);
          return (
            <ol
              key={idx}
              className="my-5 space-y-2.5 pl-4 list-decimal list-outside text-sm sm:text-base text-stone-800 dark:text-stone-200"
            >
              {items.map((item, itemIdx) => (
                <li key={itemIdx} className="pl-1 leading-relaxed">
                  {renderInlineMarkdown(item.replace(/^\d+\.\s*/, ""))}
                </li>
              ))}
            </ol>
          );
        }

        // 9. Centered / Aligned block: <div align="center">...</div>
        if (trimmed.includes('align="center"') || trimmed.includes("align='center'")) {
          const innerText = trimmed
            .replace(/<div[^>]*align=["']center["'][^>]*>/gi, "")
            .replace(/<\/div>/gi, "")
            .trim();
          return (
            <div key={idx} className="my-4 text-center">
              {renderInlineMarkdown(innerText)}
            </div>
          );
        }

        // 10. Standalone Image: ![alt](url)
        if (/^!\[([^\]]*)\]\(([^)]+)\)$/.test(trimmed)) {
          const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
          if (imgMatch) {
            const alt = imgMatch[1];
            const src = imgMatch[2];
            return (
              <figure key={idx} className="my-8 text-center">
                <div className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-xl bg-stone-100 dark:bg-stone-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={alt || "Article illustration"}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {alt && (
                  <figcaption className="text-xs text-stone-500 font-mono mt-2">
                    {alt}
                  </figcaption>
                )}
              </figure>
            );
          }
        }

        // 11. Standard Paragraph
        return (
          <p
            key={idx}
            className="text-stone-800 dark:text-stone-200 text-base sm:text-lg leading-relaxed"
          >
            {renderInlineMarkdown(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
