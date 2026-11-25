export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  imageUrl?: string;
  canonicalUrl?: string;
  content: string;
  category: string;
  tags: string[];
  readTime: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  views?: number;
  likes?: number;
  featured: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  faqs?: BlogFaq[];
}

export const FALLBACK_BLOGS: BlogPost[] = [
  {
    _id: "blog_1_november_core_update",
    title: "Google November 2026 Core Update: What to Do Now",
    slug: "november-2026-core-update",
    primaryKeyword: "november 2026 core update",
    secondaryKeywords: [
      "google core update november 2026",
      "how long does a google core update take",
      "core update recovery",
      "ranking drop after core update",
      "google search status dashboard",
      "core update black friday"
    ],
    metaTitle: "Google November 2026 Core Update: What Changed & Next",
    metaDescription: "The Google November 2026 core update began rolling out on 10 November.",
    excerpt: "The Google November 2026 core update began on 10 Nov.",
    description: "The Google November 2026 core update started rolling out on 10 November 2026.",
    content: `The Google November 2026 core update started rolling out on 10 November 2026 at 10:06 a.m. Pacific time (23:36 IST, 18:06 GMT). It applies to all sites and all languages, and Google says the rollout may take up to two weeks. It is a broad ranking change, not a penalty, and Google has published no update-specific guidance.

If your rankings started wobbling last week, you're not imagining it. And the timing is awkward: the rollout could still be running on Black Friday. Here's what we know, what we don't, and the exact steps we're taking for clients right now.

## Key takeaways

- The November 2026 core update is Google's third core update of 2026, after March and May.
- Rollout started 10 November and may take up to two weeks, so expect movement until roughly 24 November.
- Don't judge the impact mid-rollout. Google advises waiting at least a week after it completes.
- A drop is not a penalty. You can't "fix" a core update with quick technical tweaks.
- The safest response is a content and experience review against Google's helpful content questions.

## What is the November 2026 core update?

It's a broad change to Google's core ranking systems that re-assesses how relevant and useful pages are across the whole web. Google described it as a regular update designed to surface relevant, satisfying content from all types of sites.

Core updates don't target a single tactic the way spam updates do. They change how Google weighs many signals at once. That's why some sites rise, some fall and most see small shuffles.

This is the eighth ranking update listed on the Google Search Status Dashboard in 2026, according to Search Engine Journal. It also follows the September 2026 spam update, which ran from 24 September to 8 October.

## When did it start, and how long will it take?

It started on 10 November 2026, and Google says it may take up to two weeks. Both earlier 2026 core updates finished in about 12 days, so many trackers expect completion around 24 November.

Two weeks is an estimate, not a promise. Several past core updates ran longer; the November 2023 update, for example, ran from 2 to 28 November. Watch the Search Status Dashboard for the official "complete" note before you draw conclusions.

| 2026 core update | Started | Approx. rollout length |
|---|---|---|
| March 2026 | March 2026 | About 12 days |
| May 2026 | 21 May 2026 | About 12 days (complete 2 June) |
| November 2026 | 10 November 2026 | Up to 2 weeks (in progress) |

## Who is most likely to be affected?

Every site can move, but pages that answer questions thinly, repeat what others say or show weak first-hand experience tend to be most exposed. YMYL topics such as health and money usually see the sharpest swings.

From what we see across client accounts in India and the UK, three groups deserve extra attention this time:

- **Health and pharmacy sites.** Medical content is judged on trust. Unreviewed articles and pages with no named clinician are risky.
- **E-commerce category pages.** Thin collection pages with a heading and a product grid often lose ground to retailers that explain, compare and guide.
- **Local service sites with templated location pages.** Fifty "SEO agency in [city]" pages with swapped place names rarely survive a core update.

We'll be honest: nobody outside Google knows exactly what changed. Anyone selling a "November core update fix" in week one is guessing.

## What should you do during the rollout?

Mostly, watch and record. Making big changes mid-rollout makes it impossible to tell what caused what.

Here's the 7-step plan we use:

1. **Save a baseline.** Export Search Console data for 3 to 9 November (the week before launch) by page and by query.
2. **Annotate the date.** Mark 10 November in GA4, Search Console notes or your reporting dashboard.
3. **Track daily, decide weekly.** Check positions for your top 50 money pages, but don't react to day-to-day swings.
4. **Separate seasonality.** Black Friday and festive demand distort traffic. Compare clicks and average position, not just sessions.
5. **Check for technical noise.** Rule out a broken release, noindex tags or a slow site before blaming the update.
6. **Wait for completion plus a week.** Then compare the week after completion with your baseline week.
7. **Review the losers, page by page.** Which queries dropped? Which competitor took the spot? What does their page do better?

That last step is where the real work begins. If you'd like a second pair of eyes, see [how we run audits](/how-we-work).

## How do you recover from a core update drop?

You recover by making pages genuinely more useful than the pages now outranking you. Recovery usually shows up at a later core update, not in days.

[Google's core updates guidance](https://developers.google.com/search/docs/appearance/core-updates) points site owners to its helpful content questions. In practice, that means asking, page by page:

- Does this page show first-hand experience, such as real photos, test results or clinician input?
- Is it written by someone the reader would trust, with a visible author or reviewer?
- Does it answer the question fully, or send the reader back to Google?
- Would you bookmark it or share it with a colleague?

A quick example: A UK online pharmacy that lost rankings on "hay fever tablets" might find the winning page compares antihistamines by drowsiness, age suitability and price, with a pharmacist's sign-off. Rewriting the product grid won't close that gap. A pharmacist-reviewed buying guide might.

For an Indian D2C skincare brand, the equivalent might be adding ingredient explanations, skin-type guidance and real customer before-and-after photos to collection pages.

## Does the November 2026 core update affect AI Overviews and AI Mode?

AI Overviews and AI Mode draw on Google's index and ranking systems, so ranking changes can flow through to which pages get cited. Google hasn't said anything specific about this update and AI features.

That matters because AI answers now take a big share of attention. An Ahrefs study of 300,000 keywords, published in February 2026, found AI Overviews correlate with a 58% lower click-through rate for the top-ranking page. So watch your impressions in AI surfaces too, not just blue links.

## Should you pause Black Friday SEO changes?

Pause big structural changes, but don't freeze everything. Updating prices, stock and offer copy is normal business and won't confuse your analysis.

### What we'd avoid until December:
- Migrating platforms or changing URL structures
- Deleting or merging large numbers of pages
- Rewriting templates for every category at once

### What's fine to do now:
- Publishing planned gift guides and offer pages
- Fixing broken links and out-of-stock handling
- Refreshing product feeds and structured data

## The bottom line on the November 2026 core update

The November 2026 core update is a broad re-scoring, not a punishment. Record your baseline now, wait until the rollout is complete plus a week, then improve the pages that lost ground. Teams that make careful, evidence-based improvements tend to recover; teams that panic often make things worse.

## How MBSA Digital can help

MBSA Digital is a search-led agency with offices in Vadodara and London. We review core update impact using Search Console, GA4 and rank data, then give you a prioritised list of pages to fix, with the reasons behind each one. Explore [our SEO services](/services) or our [GA4 and Search Console reporting](/analytics).

Worried about your traffic? [Book a free review](/contact) and we'll tell you what changed and what to do next.`,
    category: "Technical SEO",
    tags: ["Google Core Update", "Technical SEO", "Algorithm Update", "Rankings", "Search Console", "SEO Strategy"],
    readTime: "6 min read",
    coverImage: "/Blog/Google November 2026 Core Update.png",
    imageUrl: "/Blog/Google November 2026 Core Update.png",
    author: {
      name: "Muskan Shekh",
      role: "SEO and Digital Marketing Specialist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"
    },
    featured: true,
    published: true,
    createdAt: "2026-11-16T10:00:00Z",
    updatedAt: "2026-11-16T10:00:00Z",
    faqs: [
      {
        question: "When did the November 2026 core update start?",
        answer: "Google started the November 2026 core update on 10 November 2026 at 10:06 a.m. Pacific time, which was 23:36 in India and 18:06 in the UK. Google confirmed it on the Search Status Dashboard and said the rollout applies globally, to every language, and may take up to two weeks."
      },
      {
        question: "How long does a Google core update take to roll out?",
        answer: "Google usually says up to two weeks. Both earlier 2026 core updates took about 12 days, but some past updates ran longer, such as November 2023, which lasted almost four weeks. Wait for Google's completion note on the Search Status Dashboard before you judge the impact on your site."
      },
      {
        question: "Is a ranking drop after a core update a penalty?",
        answer: "No. A core update re-assesses how useful pages are compared with everything else Google can show. If your pages fall, others were judged more helpful for those queries. There's no manual action to remove, so the response is improving content quality, experience and trust rather than filing a reconsideration request."
      },
      {
        question: "How long does core update recovery take?",
        answer: "Recovery usually takes months, not days. Google's systems need to re-crawl and re-assess improved pages, and bigger shifts often appear during the next core update. Sites that make genuine, meaningful improvements can see gains between updates, but there's no guaranteed timeline, and quick cosmetic edits rarely change the outcome."
      },
      {
        question: "Should I make SEO changes during a core update rollout?",
        answer: "Avoid big changes such as migrations, URL changes or mass content deletion until the rollout ends. They make it hard to tell what caused any movement. Routine work is fine: updating offers, prices and stock, fixing broken links and publishing content you'd already planned for Black Friday or the festive season."
      }
    ]
  },
  {
    _id: "blog_2_search_console_ai_report",
    title: "Search Console AI Report: How to Read Your AI Data",
    slug: "search-console-ai-report",
    primaryKeyword: "search console ai report",
    secondaryKeywords: [
      "search console generative ai report",
      "ai overviews impressions search console",
      "ai mode impressions",
      "how to opt out of ai overviews",
      "search generative ai control",
      "google-extended vs ai opt out"
    ],
    metaTitle: "Search Console AI Report: How to Read Your AI Data",
    metaDescription: "Learn how the Search Console AI report shows impressions in AI Overviews and AI Mode, what the data hides and what to do next. Book an AI visibility audit.",
    excerpt: "Learn how the Search Console AI report shows AI Overviews and AI Mode impressions, what it hides and what to do next. Book an AI visibility audit.",
    description: "The Search Console AI report shows how often your pages appear inside Google's AI Overviews, AI Mode and Discover. Learn how to read and act on the data.",
    content: `The Search Console AI report shows how often your pages appear inside Google's AI Overviews, AI Mode and Discover's generative AI features. Google announced it on 3 June 2026 and rolled it out to all websites worldwide by 31 August 2026. It reports impressions by page, country, date and device, but not clicks or queries.

For two years, AI visibility was a guessing game. Your rankings looked fine, clicks fell and nobody could prove why. Now you can finally see some of the picture. Here's how to read the report, what it leaves out and how to turn it into decisions.

## Key takeaways

- The Search Console AI report shows impressions only. There are no clicks, CTR or query data yet.
- There are two views: one for Search (AI Overviews and AI Mode) and one for Discover.
- Sites with very few AI impressions may not see a report at all.
- A separate setting lets you opt out of Google's AI features, but you lose that visibility completely.
- Use the report to find which pages AI trusts, then compare those pages with the ones it ignores.

## What is the Search Console AI report?

It's a dedicated performance view that separates your impressions in Google's generative AI surfaces from your normal search impressions. Before June 2026, AI Mode data was mixed into the standard Web totals with no way to isolate it.

Google first tested the reports with a small group of UK website owners, then widened access. By 31 August 2026, Google said the insights had reached all websites worldwide. Its help pages still note that sites with too few AI impressions may not see data.

You'll find two reports:
- **Search:** impressions from AI Overviews and AI Mode, with page, country, date and device breakdowns.
- **Discover:** impressions from generative AI features in Discover, with page, country and date breakdowns.

You can read the full details in [Google's announcement on Search Central](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports).

## How do you open the AI report in Search Console?

Open your property, go to Performance and look for the generative AI view alongside the standard Search results report. If it isn't there, your property may not have enough AI impressions yet.

Follow these steps:
1. Sign in to Search Console and select a Domain property if you have one. It captures every subdomain and protocol.
2. Open Performance and select the generative AI report for Search.
3. Set the date range to the longest available period.
4. Switch to the Pages tab to see which URLs earn AI impressions.
5. Add a Country filter (India, United Kingdom) if you serve both markets.
6. Export the data to Google Sheets or Looker Studio so you can track it monthly.

## What does the report show, and what does it hide?

It shows where and how often your pages appear in AI answers. It hides whether anyone clicked, which prompts triggered the appearance and where in the answer you sat.

| Shows | Doesn't show (yet) |
|---|---|
| Impressions in AI Overviews and AI Mode | Clicks and click-through rate |
| Impressions in Discover AI features | The queries or prompts behind each impression |
| Breakdown by page, country and date | Average position within the AI answer |
| Device split (Search report) | Whether you were cited as a link or just mentioned |
| Hourly to monthly views | Data before the report's start date |

That gap matters. Research from Seer Interactive found AI Overview click-through rates fell to 1.3% in December 2025 before rising to 2.4% in February 2026. Impressions alone won't tell you whether you're in that small clicking minority.

There's also regulatory pressure for more. The UK's Competition and Markets Authority issued a conduct requirement on 3 June 2026 that expects Google to provide click-through data and add page-level opt-out controls by March 2027.

## How should you read your AI impressions?

Read them as a map of which pages Google's AI already trusts. Then work out why those pages win and others don't.

We use four simple questions:
1. **Which pages get the most AI impressions?** These are usually clear, well-structured explainers or comparison pages.
2. **Which important pages get none?** Service and product pages often get zero. That's normal, but worth checking.
3. **Do AI impressions match your business priorities?** A UK clinic might find an old blog on "what is a dental bridge" gets thousands of AI impressions while its implant service page gets none.
4. **How do countries differ?** An Indian beauty brand selling in the UK may find its AI impressions are mostly Indian, which tells you where Google sees its authority.

Then compare the AI winners with the standard Performance report. If a page has strong AI impressions but falling organic clicks, the AI answer may be satisfying the searcher before they reach you. That's a cue to add something the summary can't give: a calculator, a price list, a booking slot or expert opinion.

## Should you opt out of AI Overviews and AI Mode?

For most businesses, no. Opting out removes you from AI Overviews, AI Mode and Discover's AI features entirely, so you get no traffic or impressions from them.

Google added a property-level setting called the Search generative AI control. According to Google, it isn't a ranking signal for the rest of Search. It's also separate from Google-Extended, which controls whether your content can be used for AI model training.

Who might consider it? Publishers whose business depends on page views and who see AI answers replacing their clicks. For a pharmacy, clinic or D2C brand, being named in an AI answer is usually worth more than staying out. Our view: measure first, decide later.

## What should you do with the data next?

Use it to prioritise content work. The report won't tell you how to improve, but it shows you where to look.

A practical monthly routine:
- Export AI impressions by page and add them to your SEO tracker.
- Tag each page by type: blog, service, product, location.
- Flag priority pages with zero AI impressions and review their structure.
- Add direct answers under question-style headings, plus tables and lists where they help.
- Strengthen trust signals: named authors, reviewers, sources and dates.
- Check GA4's AI Assistant channel alongside it to see visits from ChatGPT, Gemini and Claude.

## The bottom line on the Search Console AI report

The Search Console AI report is the first official window into your visibility in Google's AI answers. It's limited to impressions, so treat it as a map, not a scoreboard. Pair it with GA4 and conversion data, and use it to decide which pages to improve first.

## How MBSA Digital can help

MBSA Digital helps healthcare, beauty, e-commerce and local service brands in India and the UK measure and grow their presence in AI search. We combine the Search Console AI report, GA4 and manual checks in ChatGPT, Gemini and Perplexity into one view. See our [AI search visibility services](/services) and [analytics and reporting](/analytics), or browse [more SEO and AI search guides](/blog).

Want to know where you stand? [Book an AI visibility audit](/contact).`,
    category: "CRO & Analytics",
    tags: ["Search Console", "AI Overviews", "AI Mode", "Analytics", "SEO Reporting", "Impressions"],
    readTime: "6 min read",
    coverImage: "/Blog/Search Console AI Analytics Dashboard Blog 2.png",
    imageUrl: "/Blog/Search Console AI Analytics Dashboard Blog 2.png",
    author: {
      name: "Muskan Shekh",
      role: "SEO and Digital Marketing Specialist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"
    },
    featured: true,
    published: true,
    createdAt: "2026-11-16T10:00:00Z",
    updatedAt: "2026-11-16T10:00:00Z",
    faqs: [
      {
        question: "Does Search Console show AI Overviews data?",
        answer: "Yes. Since June 2026, Search Console has a generative AI performance report that shows impressions from AI Overviews and AI Mode, plus a separate report for Discover's AI features. Google says it reached all websites worldwide by 31 August 2026, though sites with very few AI impressions may not see data."
      },
      {
        question: "Does the Search Console AI report show clicks?",
        answer: "Not yet. The report currently shows impressions only, broken down by page, country, date and, for Search, device. It doesn't include clicks, click-through rate, queries or position. The UK Competition and Markets Authority expects Google to provide click-through data, so more metrics may follow in future."
      },
      {
        question: "Why can't I see the AI report in Search Console?",
        answer: "The most common reason is low volume. Google's help pages say sites with too few AI impressions may not see a report. Check that you're using a verified property with enough history, and confirm your pages are indexed and eligible to appear as snippets in standard Google Search results."
      },
      {
        question: "Will opting out of AI Overviews hurt my rankings?",
        answer: "Google says the Search generative AI control isn't a ranking signal for the rest of Search. However, opting out removes your site from AI Overviews, AI Mode and Discover's AI features completely. You lose those impressions and any clicks they bring, so most businesses should measure the impact before deciding."
      },
      {
        question: "What is the difference between Google-Extended and the AI opt-out?",
        answer: "Google-Extended is a robots.txt control that decides whether your content can be used to train Google's AI models. The Search generative AI control in Search Console decides whether your content appears in AI Overviews, AI Mode and Discover AI features. They are separate settings and do different jobs."
      }
    ]
  },
  {
    _id: "blog_3_query_fan_out",
    title: "Query Fan-Out: How to Optimise for Google AI Mode",
    slug: "query-fan-out",
    primaryKeyword: "query fan-out",
    secondaryKeywords: [
      "what is query fan-out",
      "google ai mode optimisation",
      "how does google ai mode work",
      "topic clusters for ai search",
      "ai mode seo",
      "ai mode in hindi"
    ],
    metaTitle: "Query Fan-Out Explained: Optimise for Google AI Mode",
    metaDescription: "Query fan-out is how Google AI Mode splits one question into many sub-queries. Learn how to build topic hubs and structure content so AI Mode can cite it.",
    excerpt: "Query fan-out is how Google AI Mode turns one question into many searches. Learn how to structure content so it gets cited. Talk to our AI search team.",
    description: "Query fan-out is how Google AI Mode breaks one complex question into multiple sub-queries. Learn how to build topic hubs that get cited in AI Mode.",
    content: `Query fan-out is the technique Google's AI Mode and AI Overviews use to answer a question: the AI splits one query into several related sub-queries, searches across subtopics and sources at the same time, then combines the results into one answer. To get cited, your content needs to answer those hidden sub-questions clearly, not just the main keyword.

Here's the frustrating part. You can rank on page one for a keyword and still be missing from the AI answer for the same question. Query fan-out explains why. Google isn't only matching your page to what the user typed. It's matching your page to questions the user never typed at all.

## Key takeaways

- Google documents that AI Overviews and AI Mode "may use" query fan-out to build answers.
- One question becomes several searches, so pages that cover a topic's sub-questions get more chances to be cited.
- Google says there are no special optimisations or schema required for AI features.
- Don't create a separate page for every possible sub-query. Build complete, well-structured topic pages instead.
- AI Mode now works in Hindi and seven more Indian languages, which widens the opportunity in India.

## What is query fan-out?

Query fan-out is when an AI search system turns one question into many related searches, runs them in parallel and merges what it finds into a single response. Google introduced the term when it launched AI Mode in 2025.

Google's Search Central page, [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features), says AI Overviews and AI Mode may issue multiple related searches across subtopics and data sources to develop a response. Google also says this lets it show a wider and more diverse set of helpful links than classic search.

Think of it like a researcher, not a librarian. A librarian finds the one book you asked for. A researcher reads around the topic first.

## How does query fan-out work in Google AI Mode?

AI Mode reads your question, works out the sub-topics you probably care about, searches for each one and then writes a single answer with links. You only see the final answer, not the searches behind it.

Here's a simplified example. Someone in Ahmedabad asks AI Mode: "best sunscreen for oily skin in humid weather under ₹500." Behind the scenes, the AI might look for:
- What ingredients suit oily skin
- Gel versus cream sunscreen textures
- SPF and PA ratings explained
- Sunscreen reviews from Indian users
- Products and prices under ₹500

A D2C skincare brand with only a product page competes for one of those slices. A brand with a clear guide covering ingredients, textures, ratings and real reviews can be relevant to all five.

## Why does query fan-out matter for SEO?

It changes the unit of competition from a single keyword to a whole topic. Pages that answer the follow-up questions a real customer would ask get more chances to be pulled into the answer.

Scale matters too. At Google I/O in May 2026, Google said AI Mode had passed one billion monthly users. Google has also said the average AI Mode query is three times as long as a traditional search. Longer questions mean more sub-topics to fan out into.

In India, the opportunity is growing fast. Google expanded AI Mode to Hindi in September 2025 and to Bengali, Kannada, Malayalam, Marathi, Tamil, Telugu and Urdu in October 2025. Brands that publish helpful content in regional languages have less competition in those answers.

## How do you optimise content for query fan-out?

Cover the topic completely on one strong page, structure it so each sub-question has a clear answer, and support it with linked pages for deeper subtopics. Then make sure the basics are solid: indexable, fast and trustworthy.

Here's the 6-step process we use with clients:
1. **List the sub-questions.** Use People Also Ask, Search Console queries, customer emails and sales calls. Ask: what would a customer need to know before deciding?
2. **Map them to sections.** Each important sub-question gets its own H2 or H3, written as a question.
3. **Answer first, then explain.** Open each section with one or two sentences that directly answer the question. AI systems lift these cleanly.
4. **Add structured formats.** Use tables for comparisons, numbered lists for steps and short definitions for terms.
5. **Link out to depth.** Where a sub-topic deserves its own page, such as "SPF vs PA ratings", create it and link both ways.
6. **Prove experience.** Add named authors, expert reviewers, original photos, test results and sources.

## Should you create a page for every fan-out query?

No. Google's guidance warns against producing separate content for every possible fan-out query. Thin, near-duplicate pages are more likely to hurt you than help you.

The better model is the classic hub and spoke, done properly:

| Approach | What it looks like | Risk |
|---|---|---|
| One page per sub-query | 40 short pages, each targeting one variation | Thin content, cannibalisation, wasted crawl budget |
| One giant page | 8,000 words covering everything | Hard to read, weak focus, slow to load |
| Hub and spoke (recommended) | One complete guide plus a handful of deep, linked pages | Low, as long as each page adds something new |

For a London private clinic, that might mean one hub on "knee pain treatment options" with spokes on physiotherapy, injections and surgery, each reviewed by a named consultant.

## What content gets cited in AI Mode answers?

Pages that are indexed, rank reasonably well for related queries and state facts clearly tend to get cited. Google says the same SEO best practices apply and no special markup is needed.

From our testing across healthcare, beauty and e-commerce clients, cited pages usually share a few traits:
- A clear, quotable sentence that answers the question
- Specific details, such as prices, dosages, timelines or sizes
- Comparison tables and step-by-step lists
- Visible expertise, such as a pharmacist, doctor or formulator
- Fresh dates and updated facts

Comparison content is especially exposed to AI answers. Seer Interactive found that "X vs Y" queries triggered an AI Overview 95.4% of the time in its informational sample, and question-style queries 85.9% of the time.

## The bottom line on query fan-out

Query fan-out means Google is answering the questions behind the question. You don't need tricks or special schema to compete. You need complete, well-organised topic coverage, direct answers under clear headings and real expertise. That's good SEO, done with more discipline.

## How MBSA Digital can help

MBSA Digital maps the sub-questions your customers ask, then builds topic hubs that rank in Google and get cited in AI Mode, ChatGPT, Gemini and Perplexity. We work from Vadodara and London across [the industries we work with](/industries), including healthcare—see [our work with Maia Health](/projects/maia-health). Learn more about our [AI search visibility (AEO/GEO)](/services) service.

Ready to plan your topic clusters? [Talk to our AI search team](/contact).`,
    category: "AI & Automations",
    tags: ["Query Fan-Out", "Google AI Mode", "AEO", "GEO", "Topic Clusters", "AI Search"],
    readTime: "6 min read",
    coverImage: "/Blog/Query Fan-Out for Google AI Mode.png",
    imageUrl: "/Blog/Query Fan-Out for Google AI Mode.png",
    author: {
      name: "Muskan Shekh",
      role: "SEO and Digital Marketing Specialist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"
    },
    featured: false,
    published: true,
    createdAt: "2026-11-16T10:00:00Z",
    updatedAt: "2026-11-16T10:00:00Z",
    faqs: [
      {
        question: "What is query fan-out in Google AI Mode?",
        answer: "Query fan-out is the technique Google AI Mode uses to answer complex questions. It breaks one query into several related sub-queries, searches across subtopics and sources at the same time, and combines the results into one response. Google's Search Central documentation says both AI Mode and AI Overviews may use it."
      },
      {
        question: "Does query fan-out replace keyword research?",
        answer: "No. Keyword research still tells you what people search for and how they phrase it. Query fan-out simply means you should research the follow-up questions around each keyword too. Google says the same foundational SEO practices apply to AI features, so indexing, relevance and quality still matter as much as before."
      },
      {
        question: "Do I need special schema to appear in AI Mode?",
        answer: "No. Google says there are no additional technical requirements or special schema needed to appear in AI Overviews or AI Mode. Your page needs to be indexed and eligible to show a snippet in Google Search. Structured data still helps search engines understand your content, but it isn't a requirement for AI features."
      },
      {
        question: "How many sub-queries does AI Mode create?",
        answer: "Google hasn't published a fixed number. It depends on the question's complexity, and Google says AI Mode may issue multiple related searches across subtopics and data sources. Deep Search can run far more. Rather than chasing a number, focus on covering the questions a real customer would ask before deciding."
      },
      {
        question: "Is Google AI Mode available in Indian languages?",
        answer: "Yes. Google launched AI Mode in India in English, added Hindi in September 2025, and expanded it to Bengali, Kannada, Malayalam, Marathi, Tamil, Telugu and Urdu in October 2025. That makes regional-language content a real opportunity for Indian brands that want to appear in AI answers."
      }
    ]
  },
  {
    _id: "blog_4_track_ai_traffic_ga4",
    title: "How to Track AI Traffic in GA4 (ChatGPT, Gemini)",
    slug: "track-ai-traffic-ga4",
    primaryKeyword: "track ai traffic in ga4",
    secondaryKeywords: [
      "ga4 ai assistant channel",
      "chatgpt referral traffic ga4",
      "utm_source=chatgpt.com",
      "ai traffic regex ga4",
      "why does chatgpt traffic show as direct",
      "perplexity traffic google analytics"
    ],
    metaTitle: "How to Track AI Traffic in GA4 (ChatGPT & Gemini)",
    metaDescription: "Learn how to track AI traffic in GA4 with the AI Assistant channel, a regex backup and key events for ChatGPT and Gemini visits. Get a free GA4 tracking check.",
    excerpt: "Learn how to track AI traffic in GA4 using the new AI Assistant channel, a regex backup and key events for ChatGPT and Gemini. Get a free GA4 check.",
    description: "Learn how to track AI traffic in GA4 with the native AI Assistant channel, regex filters, and key conversion events for ChatGPT and Gemini.",
    content: `To track AI traffic in GA4, open Reports > Acquisition > Traffic acquisition and look for the AI Assistant channel that Google added on 13 May 2026. It groups visits from recognised chatbots such as ChatGPT, Gemini and Claude automatically. Then add a custom channel group with a regex backup to catch AI sources the default rule misses.

You've probably heard that AI is sending traffic to websites. But when you open GA4, it's hard to see. Some visits hide in Referral, some in Direct, and some never show up at all. This guide fixes that, step by step, so you can tell your team exactly what AI is worth to the business.

## Key takeaways

- GA4 now has a native AI Assistant channel, live since 13 May 2026, with no setup needed.
- It only counts visits with a recognised AI referrer. App visits and copied links often land in Direct.
- There's no backfill. Your AI channel trend starts from May 2026.
- A custom channel group with regex catches extra sources and gives you a cleaner view.
- AI traffic is small but growing: SE Ranking puts it at 0.32% of all website traffic in 2026.

## How much traffic does AI actually send?

Not much yet, but it's growing quickly and it often converts well. SE Ranking's 2026 study found AI platforms sent 0.32% of all website traffic, up from 0.02% in 2024.

The same study gives useful context:
- ChatGPT sent 74.78% of AI referral traffic, Gemini 11.56%, Perplexity 7.23%, Copilot 3.51% and Claude 2.62%.
- Organic search still sent 42.75% of all website traffic, about 134 times more than AI platforms.
- Claude's share of traffic grew 320% between 2025 and 2026, the fastest of the top five.

So don't abandon SEO. But do measure AI properly, because the people who click from an AI answer have usually done their research already.

## What is the GA4 AI Assistant channel?

It's a new default channel in GA4 that automatically groups visits from recognised AI assistants. Google announced it in the Google Analytics help centre on 13 May 2026.

When GA4 detects a referrer from a recognised AI tool, it sets three values automatically:

| Dimension | Value GA4 assigns |
|---|---|
| Session default channel group | AI Assistant |
| Session medium | ai-assistant |
| Session campaign | (ai-assistant) |

You'll find it in Reports > Acquisition > Traffic acquisition. Check [Google's default channel group documentation](https://support.google.com/analytics/answer/9756891) for how GA4 assigns channels.

Two limits to know. First, there's no backfill, so earlier AI visits stay in Referral. Second, Google hasn't published a full list of recognised AI sources the way it has for search and social, so check your Referral report for anything it misses.

## Why does ChatGPT traffic show as Direct in GA4?

Because many AI clicks arrive without a referrer. The ChatGPT mobile app, desktop apps and copied links often don't pass one, so GA4 has nothing to classify and files the visit as Direct.

OpenAI does help a little. ChatGPT search adds \`utm_source=chatgpt.com\` to the links it cites. That's why ChatGPT is the AI source most GA4 properties can already see. But the tag only sets a source, not a medium, which can push some visits into Unassigned.

The result: whatever GA4 reports is a floor, not a total. Treat it as "at least this much".

## How do you set up AI traffic tracking in GA4 step by step?

Check the native channel first, then build a custom channel group as a backup, then connect it to conversions. It takes about 20 minutes.

1. **Check the AI Assistant channel.** Go to Reports > Acquisition > Traffic acquisition. Set the date range from 13 May 2026 onwards.
2. **Look for leftovers.** Change the dimension to Session source / medium. Search for chatgpt, perplexity, claude, gemini and copilot.
3. **Create a custom channel group.** Go to Admin > Data display > Channel groups > Create new channel group. Copy the default group as your starting point.
4. **Add an "AI Referrals" channel.** Set the condition to Session source matches regex, using the pattern below.
5. **Move it above Referral.** Channel order matters. GA4 assigns sessions to the first rule they match.
6. **Mark your key events.** Make sure bookings, enquiries, calls and purchases are set as key events so you can see AI conversions.
7. **Build a Looker Studio view.** Show AI sessions, key events and revenue by landing page, month on month.

A practical regex to start with:
\`\`\`regex
(chatgpt\\.com|chat\\.openai\\.com|perplexity\\.ai|claude\\.ai|gemini\\.google\\.com|copilot\\.microsoft\\.com)
\`\`\`

Review it every quarter. New AI tools appear, and domains change.

## What should you measure beyond sessions?

Measure what AI visitors do: the pages they land on, the actions they take and the revenue or leads they create. Sessions alone undersell AI.

Here's what we track for clients:
- **Landing pages.** Which pages do AI tools send people to? Often it's guides and comparison pages, not the homepage.
- **Key events.** Appointment bookings, prescription enquiries, add-to-basket and checkout.
- **Engagement rate.** AI visitors often arrive with clear intent.
- **Assisted conversions.** Use the Advertising > Attribution reports to see whether AI touches a journey that ends in Organic or Direct.

Two quick examples: A London aesthetics clinic might find ChatGPT sends visitors to its "lip filler aftercare" guide, then on to booking. That guide deserves a clear booking button. An Indian Shopify store might see Gemini sending people to a size guide; adding product links there turns readers into buyers.

## Does Google AI Mode traffic show in the AI Assistant channel?

No. Clicks from Google AI Mode and AI Overviews arrive from google.com, so GA4 counts them as Organic Search. Leave them there.

To see your Google AI visibility, use the generative AI report in Search Console. It shows AI Overviews and AI Mode impressions by page. Put the two side by side: Search Console for Google's AI, GA4 for other assistants.

## The bottom line on how to track AI traffic in GA4

You can now track AI traffic in GA4 without complicated setup, thanks to the native AI Assistant channel. Add a regex backup, connect it to key events and accept that the numbers are a floor. Measure trends monthly, and judge AI by the leads and sales it brings, not by sessions alone.

## How MBSA Digital can help

MBSA Digital sets up GA4, Google Tag Manager and Looker Studio dashboards that show exactly what organic search, paid media and AI assistants contribute. We're based in Vadodara and London. Learn about [GA4 tracking and CRO](/analytics), [see our projects](/projects) or read [about MBSA Digital](/about).

Not sure your tracking is right? [Get a free GA4 check](/contact).`,
    category: "CRO & Analytics",
    tags: ["GA4", "AI Traffic", "ChatGPT Traffic", "Google Analytics", "Tracking", "Analytics"],
    readTime: "6 min read",
    coverImage: "/Blog/Tracking AI Traffic in GA4.png",
    imageUrl: "/Blog/Tracking AI Traffic in GA4.png",
    author: {
      name: "Muskan Shekh",
      role: "SEO and Digital Marketing Specialist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"
    },
    featured: false,
    published: true,
    createdAt: "2026-11-16T10:00:00Z",
    updatedAt: "2026-11-16T10:00:00Z",
    faqs: [
      {
        question: "Can GA4 track traffic from ChatGPT?",
        answer: "Yes. Since 13 May 2026, GA4 groups visits from recognised AI assistants, including ChatGPT, into a native AI Assistant channel. ChatGPT also adds utm_source=chatgpt.com to cited links. However, visits from the mobile app or copied links often arrive without a referrer and are counted as Direct, so treat the figure as a minimum."
      },
      {
        question: "Where is the AI Assistant channel in GA4?",
        answer: "Go to Reports, then Acquisition, then Traffic acquisition, and look at the Session default channel group. The AI Assistant row appears when GA4 detects visits from recognised AI tools. Sessions are labelled with the medium ai-assistant and the campaign (ai-assistant). Data starts from May 2026, with no backfill."
      },
      {
        question: "What regex should I use to track AI traffic in GA4?",
        answer: "Start with a pattern that lists chatgpt.com, chat.openai.com, perplexity.ai, claude.ai, gemini.google.com and copilot.microsoft.com, separated by vertical bars, with each dot escaped by a backslash. Use it with Session source matches regex in a custom channel group, and place the channel above Referral. Review the list every quarter."
      },
      {
        question: "Why is my AI traffic so low in GA4?",
        answer: "AI still sends a small share of web traffic, about 0.32% in 2026 according to SE Ranking. GA4 also undercounts it, because app visits and copied links often lose the referrer and appear as Direct. Check landing pages and conversions too, as AI visitors are fewer but often further along in deciding."
      },
      {
        question: "Is Google AI Mode traffic counted as AI Assistant in GA4?",
        answer: "No. Clicks from Google AI Mode and AI Overviews come from google.com, so GA4 classifies them as Organic Search. To measure Google's AI visibility, use the generative AI performance report in Search Console, which shows AI Overviews and AI Mode impressions by page, country and date."
      }
    ]
  },
  {
    _id: "blog_5_chatgpt_shopping",
    title: "ChatGPT Shopping: How to Get Your Products Listed",
    slug: "chatgpt-shopping",
    primaryKeyword: "chatgpt shopping",
    secondaryKeywords: [
      "chatgpt product feed",
      "how to get products on chatgpt",
      "chatgpt merchant program",
      "ai shopping for ecommerce",
      "shopify chatgpt",
      "chatgpt shopping vs google shopping"
    ],
    metaTitle: "ChatGPT Shopping: How to Get Your Products Listed",
    metaDescription: "ChatGPT Shopping relies on merchant product feeds. Learn how to get your products listed, fix common feed gaps and measure AI-driven sales. Book a store audit.",
    excerpt: "ChatGPT Shopping now leans on merchant product feeds. Learn how to get your products listed, fix feed gaps and win AI picks. Book a store audit today.",
    description: "ChatGPT Shopping now leans heavily on merchant product feeds. Learn how to get your products recommended, fix feed gaps, and measure AI sales.",
    content: `ChatGPT Shopping is OpenAI's product discovery feature that recommends and compares products inside ChatGPT. To get listed, you need accurate, complete product data: a product feed submitted to OpenAI, crawlable product pages with structured data, and strong signals such as reviews and Google Shopping listings. In 2026, feeds became the main source of ChatGPT's product picks.

If you run an online store, this matters more than it did a year ago. Shoppers now ask ChatGPT "best vitamin C serum for sensitive skin" and get a shortlist without visiting Google. If your products aren't in the data ChatGPT trusts, you're not even in the running.

## Key takeaways

- Product feeds now drive most ChatGPT Shopping picks: 61.54% in July 2026, up from 8.26%, according to Profound.
- Fewer merchants are being shown, so feed quality is a competitive edge.
- OpenAI moved away from in-chat checkout in March 2026. Shoppers usually buy on your site.
- Google Shopping data still matters, because ChatGPT draws on it too.
- Your product feed is now an SEO asset, not just an ads asset.

## What is ChatGPT Shopping?

ChatGPT Shopping is the part of ChatGPT that shows product recommendations, images, prices and comparisons when someone asks a buying question. Discovery and listing in organic results are free for merchants.

The feature has changed a lot. In March 2026, OpenAI said its Instant Checkout feature was in transition to apps, refocusing ChatGPT Shopping on discovery and comparison, with payment handed back to merchant sites. In May 2026, OpenAI added product feed campaigns, letting merchants create ads directly from their catalogues.

So there are now two routes into ChatGPT: free organic recommendations and paid product ads. This guide focuses on the organic route.

## Where does ChatGPT get its product data?

From two main places: product feeds that merchants submit to OpenAI, and product pages it finds on the open web. Third-party data, including Google Shopping results and reviews, also shapes what it recommends.

The balance is shifting fast. Profound analysed 1,757,723 ChatGPT Shopping prompt runs in July 2026, as reported by Search Engine Journal. It found:

| Metric | Before | 10 July 2026 onwards |
|---|---|---|
| Share of product picks from an integrated feed | 8.26% | 61.54% |
| Share of references going to the top 10 stores | 22.5% | 41.8% |
| Unique merchants referenced | 13,524 | 10,607 |

That's a big concentration. More picks come from feeds, and fewer merchants get shown. If your competitor's feed is clean and yours isn't, they take your place.

Google still matters too. A Peec AI study reported by Search Engine Land in March 2026 found that 83% of products in ChatGPT's shopping carousels came from organic Google Shopping results.

## How do you get your products listed in ChatGPT Shopping?

Submit a high-quality product feed to OpenAI, make your product pages easy to read and keep your Google Merchant Center listings strong. Then keep everything in sync.

Here's the step-by-step process:
1. **Apply through OpenAI's merchant programme.** Start at [OpenAI's merchant page](https://chatgpt.com/merchants). Availability has rolled out market by market, so check what's open for the UK and India.
2. **Prepare your feed.** Include titles, descriptions, prices, stock, images, variants, GTINs and brand for every product.
3. **Write titles for people, not codes.** "Bamboo charcoal toothbrush, soft bristles, pack of 4" beats "BCT-SFT-4PK".
4. **Keep price and stock fresh.** Mismatched prices damage trust with both shoppers and AI systems.
5. **Fix your product pages.** Add Product schema with price, availability, reviews and shipping details.
6. **Optimise Google Merchant Center.** Free listings feed Google Shopping, which ChatGPT also draws on.
7. **Build review volume.** Collect reviews on your site and on trusted third-party platforms.
8. **Track and test.** Ask ChatGPT your customers' real questions monthly and record whether you appear.

## What makes a product feed "AI-ready"?

An AI-ready feed answers the questions a shopper would ask a knowledgeable sales assistant: what it is, who it's for, what it's made of, what it costs and whether it's in stock.

Use this checklist:
- Descriptive titles with product type, key feature, size and variant
- Descriptions that explain benefits, ingredients or materials, and use cases
- Correct GTIN or MPN for every product
- Accurate price, currency and sale price
- Live stock status updated at least daily
- High-quality images on a clean background, plus lifestyle shots
- Clear categories and product types
- Shipping and returns information
- Ratings and review counts where allowed

A quick UK example: An oral care brand selling tongue cleaners might describe one simply as "copper tongue cleaner". An AI-ready version would say "pure copper tongue cleaner for fresh breath, Ayurvedic design, suitable for daily use, dishwasher safe". That gives ChatGPT more to match against real questions. See [our Dr Tung's UK project](/projects/drtungs-uk) for the kind of e-commerce work we do.

## Is ChatGPT Shopping better than Google Shopping?

Neither is better. They reach shoppers at different moments, and they increasingly use similar product data. Treat them as one feed strategy with two outlets.

| Feature | ChatGPT Shopping | Google Shopping |
|---|---|---|
| How shoppers search | Long, conversational questions | Shorter product queries |
| Main data source | Merchant feeds plus web pages | Merchant Center feeds |
| Organic listing cost | Free | Free listings available |
| Paid option | Product feed ads (since May 2026) | Shopping ads, Performance Max |
| Checkout | Usually on your website | On your website |

For most Indian and UK D2C brands, Google Shopping still drives more volume. ChatGPT is where research-heavy buyers compare options, such as supplements, skincare and premium personal care.

## How do you measure ChatGPT Shopping results?

Track ChatGPT visits and sales in GA4, and run regular prompt checks. GA4's AI Assistant channel, launched in May 2026, groups visits from recognised chatbots, and ChatGPT adds \`utm_source=chatgpt.com\` to links it cites.

To get the full picture, combine:
- GA4 sessions, add-to-baskets and revenue from ChatGPT
- A monthly list of 20 to 30 buying questions you test in ChatGPT
- Which products appear, and what ChatGPT says about them

If you'd rather not build this yourself, it's part of our [GA4 and AI traffic tracking](/analytics) setup.

## The bottom line on ChatGPT Shopping

ChatGPT Shopping now runs mainly on product feeds, and it's showing fewer merchants. That rewards stores with clean, detailed, up-to-date product data. Fix your feed, strengthen your product pages and Google Shopping presence, and measure what ChatGPT says about you every month.

## How MBSA Digital can help

MBSA Digital helps Shopify, WooCommerce and D2C brands in India and the UK get found in Google, Google Shopping and AI assistants. We audit your feed and product pages, fix structured data and track AI visibility over time. Learn about our [e-commerce and Shopify SEO](/services) work.

Want to know if ChatGPT recommends your products? [Book a store audit](/contact).`,
    category: "AI & Automations",
    tags: ["ChatGPT Shopping", "E-Commerce", "Product Feed", "Google Shopping", "AI E-Commerce"],
    readTime: "6 min read",
    coverImage: "/Blog/ChatGPT Shopping SEO Dashboard Blog 5.png",
    imageUrl: "/Blog/ChatGPT Shopping SEO Dashboard Blog 5.png",
    author: {
      name: "Muskan Shekh",
      role: "SEO and Digital Marketing Specialist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"
    },
    featured: false,
    published: true,
    createdAt: "2026-11-16T10:00:00Z",
    updatedAt: "2026-11-16T10:00:00Z",
    faqs: [
      {
        question: "How do I get my products on ChatGPT Shopping?",
        answer: "Apply through OpenAI's merchant programme and submit a complete product feed with titles, descriptions, prices, stock, images and GTINs. Also make sure your product pages have Product structured data and your Google Merchant Center listings are healthy, because ChatGPT draws on web pages and Google Shopping data as well as feeds."
      },
      {
        question: "Is ChatGPT Shopping free for merchants?",
        answer: "Yes, appearing in organic ChatGPT Shopping recommendations is free. There's no listing fee for being recommended. Since May 2026, OpenAI has also offered paid product feed campaigns that create ads from your catalogue, similar to Google Shopping ads. Organic and paid visibility are separate, so you can use one or both."
      },
      {
        question: "Can you buy products directly in ChatGPT?",
        answer: "Usually not any more. In March 2026, OpenAI said Instant Checkout was moving to apps and refocused ChatGPT Shopping on discovery and comparison. In most cases, shoppers now click through to the merchant's website to complete the purchase, which means your product page still needs to convert well."
      },
      {
        question: "Does ChatGPT Shopping work with Shopify?",
        answer: "Yes. ChatGPT supports Shopify product feeds, and many Shopify stores already have the structured product data it needs. Check your store's sales channel options and OpenAI's merchant page for the current setup in your country, then review titles, descriptions and GTINs, because feed quality matters more than the platform."
      },
      {
        question: "Why isn't my product showing in ChatGPT?",
        answer: "Common reasons include no feed submitted to OpenAI, vague product titles, missing GTINs, out-of-date prices or stock, few reviews and weak Google Shopping presence. Profound's July 2026 data shows feeds now supply most picks and fewer merchants are referenced, so incomplete product data makes it easy for competitors to take your place."
      }
    ]
  },
  {
    _id: "blog_6_shopify_seo_checklist",
    title: "Shopify SEO Checklist: 15 Fixes Before Peak Season",
    slug: "shopify-seo-checklist",
    primaryKeyword: "shopify seo checklist",
    secondaryKeywords: [
      "shopify seo tips",
      "black friday seo",
      "shopify collection page seo",
      "shopify duplicate content",
      "shopify product schema",
      "how to speed up shopify store"
    ],
    metaTitle: "Shopify SEO Checklist: 15 Fixes Before Peak Season",
    metaDescription: "Use this 15-step Shopify SEO checklist to fix site speed, collection pages, product schema and feeds before Black Friday and the January sales rush begins.",
    excerpt: "Use this Shopify SEO checklist to fix speed, collections, schema and feeds before Black Friday and the January sales. Get a free Shopify SEO review.",
    description: "A complete 15-step Shopify SEO checklist covering technical speed, collections, product schema, and peak-season Black Friday readiness.",
    content: `A good Shopify SEO checklist before peak season covers five areas: technical health (speed, indexing, duplicates), collection pages, product pages, structured data and product feeds, and a plan for seasonal URLs. Fix the high-impact items now, freeze risky changes during Black Friday week, and keep evergreen sale pages so they build authority every year.

Peak season is when your SEO either pays off or lets you down. Every slow page, broken filter and out-of-stock dead end costs real money when traffic is at its highest. And this year, Google's November core update is rolling out right up to Black Friday. Here are 15 fixes that make the biggest difference, in the order we'd tackle them.

## Key takeaways

- Adobe forecasts US online holiday spending of $275.1 billion for November and December 2026, up 6.7%.
- Mobile is expected to account for a record 63% of Cyber Week online spend, so test on phones first.
- Keep one evergreen Black Friday URL rather than creating a new one each year.
- Product schema and clean feeds now help you in Google Shopping and AI assistants.
- Freeze theme changes, app installs and URL changes during your peak week.

## Why does Shopify SEO matter more in peak season?

Because demand, competition and ad costs all peak at once. Organic rankings you've already earned bring in sales without paying rising cost-per-click.

Adobe's 2026 holiday forecast shows the scale. It expects Cyber Week, the five days from Thanksgiving to Cyber Monday, to drive $47.5 billion in US online sales. Cyber Monday (30 November) is forecast at $15.1 billion and Black Friday (27 November) at $12.9 billion, growing faster than Cyber Monday.

Those are US figures, but the pattern holds for UK stores, where Black Friday flows into Christmas and the January sales. For Indian D2C brands, the festive season has passed, but wedding season and the January Republic Day sales follow quickly.

## What technical fixes come first?

Speed, indexing and duplicate URLs. If Google can't crawl your store efficiently or shoppers bounce on slow mobile pages, nothing else on this list works properly.

### Technical checklist
1. **Test mobile speed on key templates.** Run PageSpeed Insights on your home, top collection and top product pages. Remove unused apps; each one can add scripts.
2. **Compress and resize images.** Use Shopify's built-in image formats and avoid uploading 4,000-pixel product photos.
3. **Check internal links to product URLs.** Shopify creates collection-based product URLs such as \`/collections/sale/products/item\`. Make sure internal links point to the canonical \`/products/\` URL.
4. **Review indexing in Search Console.** Look for "Crawled, currently not indexed" product pages and thin tag pages.
5. **Control filter URLs.** Faceted filters can create thousands of near-duplicate URLs. Keep valuable filters (for example "vegan lipstick") as proper collections and stop the rest from being indexed.

## How do you optimise Shopify collection pages?

Treat collection pages as your main ranking pages, not just product grids. Add helpful copy, clear headings and internal links so they answer the shopper's question.

### Collection checklist
6. **Write a unique intro.** Add 80 to 150 words above the grid explaining who the range is for and how to choose.
7. **Add buying guidance below the grid.** A short FAQ or comparison table, such as "SPF 30 vs SPF 50", helps both shoppers and AI answers.
8. **Fix title tags and H1s.** Use the main keyword naturally, for example "Vitamin C Serums for Glowing Skin | Brand".

An Indian skincare brand selling across India and the UK might create separate collections for "sunscreen for oily skin" and "sunscreen for dry skin" because people search for both. That's far better than one generic "Sunscreens" page.

## How do you optimise Shopify product pages?

Write original descriptions, add Product structured data and handle stock changes carefully. Product pages win long-tail searches and AI shopping recommendations.

### Product checklist
9. **Replace manufacturer descriptions.** Rewrite them with benefits, ingredients or materials, sizing and usage tips.
10. **Add or fix Product schema.** Include price, availability, brand, reviews and shipping details. Follow [Google's product structured data guide](https://developers.google.com/search/docs/appearance/structured-data/product).
11. **Handle out-of-stock items properly.** Keep the page live, show "back soon" with an email alert and link to alternatives. Don't delete pages that have rankings and links.
12. **Show real reviews.** Reviews add fresh, original content and build trust.

## What should you do with Black Friday and sale pages?

Use one permanent sale URL, such as \`/pages/black-friday\`, and update it every year. A new URL each year starts from zero; a permanent one keeps its links and history.

### Seasonal checklist
13. **Publish your evergreen sale page early.** Even before offers go live, add a "coming soon" version with an email sign-up, so Google can find and index it.
14. **Sync your product feed.** Make sure Google Merchant Center and any AI shopping feeds show correct sale prices and stock. Price mismatches can get products disapproved.
15. **Freeze risky changes.** No theme switches, URL changes, app installs or big template edits during your peak week.

## Which Shopify SEO mistakes cost the most in peak season?

The expensive ones are usually avoidable: deleting sold-out products, launching a new theme in November and creating a fresh sale URL every year.

| Mistake | What happens | Better approach |
|---|---|---|
| Deleting sold-out products | Lost rankings, links and 404 errors | Keep the page, add alternatives and back-in-stock alerts |
| New theme in November | Speed drops, broken schema, layout bugs | Launch theme changes in January or February |
| New sale URL each year | No accumulated authority | One evergreen URL, updated yearly |
| Too many apps | Slow pages and script conflicts | Audit apps quarterly and remove unused ones |
| Ignoring the feed | Wrong prices in Shopping and AI results | Daily feed sync and Merchant Center checks |

## The bottom line on this Shopify SEO checklist

This Shopify SEO checklist isn't about tricks. It's about making sure the pages you already have load fast, say something useful and show accurate prices and stock when shoppers arrive. Fix the technical basics first, strengthen collections and products, then protect your store by freezing risky changes during the busiest week of the year.

## How MBSA Digital can help

MBSA Digital builds and optimises Shopify, WooCommerce and WordPress stores for e-commerce and D2C brands in India and the UK, from our offices in Vadodara and London. We handle technical SEO, collection strategy, structured data and feeds. See our [Shopify SEO and website services](/services), the [e-commerce brands we've worked with](/projects) and the [industries we specialise in](/industries).

Want a second opinion before peak week? [Get a free Shopify SEO review](/contact).`,
    category: "Technical SEO",
    tags: ["Shopify SEO", "E-Commerce SEO", "Black Friday SEO", "Product Schema", "Site Speed"],
    readTime: "7 min read",
    coverImage: "/Blog/Shopify SEO Checklist_ 15 Fixes Before Peak Season Blog 6.png",
    imageUrl: "/Blog/Shopify SEO Checklist_ 15 Fixes Before Peak Season Blog 6.png",
    author: {
      name: "Muskan Shekh",
      role: "SEO and Digital Marketing Specialist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"
    },
    featured: false,
    published: true,
    createdAt: "2026-11-16T10:00:00Z",
    updatedAt: "2026-11-16T10:00:00Z",
    faqs: [
      {
        question: "Is Shopify good for SEO?",
        answer: "Yes. Shopify handles many SEO basics well, including sitemaps, mobile-friendly themes, SSL and editable title tags. Its main weaknesses are fixed URL structures, possible duplicate product URLs through collections and app bloat that slows pages. With good content, structured data and careful app use, Shopify stores can rank very well."
      },
      {
        question: "How do I fix duplicate content on Shopify?",
        answer: "Shopify adds canonical tags pointing product pages to their main /products/ URL, but themes sometimes link to collection-based product URLs. Update your theme so internal links use the canonical URL, prevent indexing of low-value filter and tag pages, and write unique descriptions instead of copying manufacturer text across products."
      },
      {
        question: "Should I create a new Black Friday page every year?",
        answer: "No. Use one permanent URL, such as /pages/black-friday or /collections/black-friday, and update the content each year. That page keeps the links, rankings and history it has built. A new URL every year has to start again from zero, just when competition is at its highest."
      },
      {
        question: "Should I delete out-of-stock products on Shopify?",
        answer: "Usually not. If the product will return, keep the page live, show its stock status, offer back-in-stock alerts and link to alternatives. If it's gone permanently, redirect it to the closest matching product or collection. Deleting pages with rankings or backlinks throws away value you've already earned."
      },
      {
        question: "When should I start SEO for Black Friday?",
        answer: "Ideally two to three months before. Google needs time to crawl and rank new pages, so publish your evergreen sale page and fix technical issues by early autumn. If you're late, focus on quick wins: speed, product feed accuracy, stock handling and updating an existing sale page rather than launching new ones."
      }
    ]
  },
  {
    _id: "blog_7_healthcare_seo",
    title: "Healthcare SEO: How Clinics Build Trust and Rank",
    slug: "healthcare-seo",
    primaryKeyword: "healthcare seo",
    secondaryKeywords: [
      "seo for clinics",
      "medical seo",
      "e-e-a-t for healthcare websites",
      "ymyl content",
      "how to rank a clinic website on google",
      "healthcare content medically reviewed"
    ],
    metaTitle: "Healthcare SEO Guide: How Clinics Build Trust & Rank",
    metaDescription: "A practical healthcare SEO guide for UK and Indian clinics: E-E-A-T, medical review, clinic site structure, local pages, compliance and earning AI citations.",
    excerpt: "A practical healthcare SEO guide for UK and Indian clinics: E-E-A-T, medical review, local pages and AI citations. Talk to MBSA Digital's health team.",
    description: "Healthcare SEO guide for UK and Indian clinics: mastering E-E-A-T, medical review workflows, local citations, and AI search visibility.",
    content: `Healthcare SEO is the practice of helping clinics, hospitals and health brands rank in Google and appear in AI answers for medical searches. Because health is a "Your Money or Your Life" (YMYL) topic, Google holds it to higher standards of trust. Success depends on visible clinical expertise, medically reviewed content, strong local signals and compliant, patient-first pages.

Here's what we hear from clinic owners again and again: "We're better doctors than the chain down the road, but they're everywhere on Google." In most cases, the problem isn't clinical quality. It's that the website doesn't prove that quality in a way Google, AI tools and anxious patients can see.

## Key takeaways

- Health is a YMYL topic, so trust signals carry more weight than in most industries.
- Show who wrote and who reviewed every clinical page, with real credentials.
- Build one strong page per treatment, not thin pages for every keyword variation.
- Patients increasingly check clinics through AI tools, so consistent facts across the web matter.
- Stay within advertising rules: GMC, ASA and CQC in the UK; NMC in India.

## What is healthcare SEO?

Healthcare SEO is search optimisation for medical providers and health brands: clinics, hospitals, dentists, physiotherapists, aesthetics practices and wellness companies. It covers technical SEO, content, local search and reputation.

What makes it different is the stakes. A wrong answer about a skincare routine is annoying. A wrong answer about chest pain can be dangerous. That's why Google's systems, and the AI answers built on them, are cautious about which health sources they show.

The audience is huge in both markets. India had 958 million active internet users in 2025, according to the IAMAI and Kantar Internet in India report, which also found 44% of internet users use AI. In the UK, the NHS website is a constant competitor for health questions.

## Why is E-E-A-T so important for healthcare websites?

Because Google wants health content to come from people with real expertise and experience. E-E-A-T stands for experience, expertise, authoritativeness and trust, and trust is the most important part.

Google's [guidance on helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) asks site owners to think about "who, how and why": who created the content, how it was made and why it exists. For a clinic, that translates into practical steps:
- **Who:** Named authors and medical reviewers, with qualifications and registration numbers (GMC, GDC, NMC or state medical council).
- **How:** A clear review process, a "last reviewed" date and citations to NICE, NHS, WHO or peer-reviewed sources.
- **Why:** Content written to help patients understand options, not just to rank for a keyword.

## How do you structure a clinic website for SEO?

Give every service its own page, every location its own page and every clinician a profile page. Then link them together so Google and patients can follow the path from condition to treatment to doctor to booking.

A simple structure that works:

| Page type | Purpose | Example |
|---|---|---|
| Condition page | Explains symptoms, causes and when to seek help | "Knee pain: causes and treatment options" |
| Treatment page | Explains the procedure, suitability, risks, recovery and cost | "Knee arthroscopy in London" |
| Clinician profile | Shows qualifications, experience and registration | "Dr A. Sharma, Consultant Orthopaedic Surgeon" |
| Location page | Local details, directions, parking, opening hours | "Our Vadodara clinic, Alkapuri" |
| Booking page | Simple, fast, mobile-friendly appointment form | "Book a consultation" |

Avoid the classic mistake: 30 near-identical pages like "best dermatologist in [area]" with only the place name swapped. They're thin, they rarely rank for long and core updates tend to hit them.

## How do you write medical content that ranks?

Answer the patient's real question first, explain options honestly, including risks, and have a qualified clinician review it. Then make it easy to read on a phone.

Our 6-step process for clinical content:
1. **Start with patient questions.** Use front-desk calls, consultation notes and People Also Ask.
2. **Draft in plain English.** Aim for a reading age most patients are comfortable with, and define medical terms.
3. **Add clinical review.** A named doctor or specialist checks accuracy and signs off.
4. **Cite reliable sources.** Link to NICE, NHS, ICMR or peer-reviewed research where relevant.
5. **Show real experience.** Add your own photos, anonymised case outcomes (with consent) and clinician quotes.
6. **Review regularly.** Update pages at least yearly and whenever guidelines change.

Example: a UK aesthetics clinic writing about anti-wrinkle injections should cover who isn't suitable, possible side effects and how to check a practitioner's qualifications. That honesty builds trust with patients and with Google.

## How does AI search change healthcare SEO?

Patients now ask ChatGPT, Gemini and Google AI Mode about symptoms and treatments, then shortlist clinics. AI tools favour clear, consistent, well-sourced information they can quote safely.

BrightLocal's 2026 Local Consumer Review Survey found 45% of consumers had used AI tools for local business recommendations, up from 6% a year earlier. Seer Interactive's 2026 research found around 36% of informational queries showed an AI Overview.

To be cited, make sure:
- Your clinic name, address, phone number and services are identical everywhere online.
- Each treatment page opens with a short, factual summary.
- Doctors' credentials appear on your site and on trusted directories.
- Reviews mention specific treatments, not just "great service".

## What compliance rules affect healthcare SEO?

In the UK, health marketing must follow the ASA's CAP Code, GMC guidance for doctors and CQC expectations. In India, the National Medical Commission sets rules on how doctors can promote themselves.

In practice, that means:
- No guaranteed outcomes or "100% painless" claims
- No promoting prescription-only medicines to the public in the UK
- Before-and-after photos only with consent, and never misleading
- Testimonials that reflect typical experiences

We're not lawyers, so have your compliance lead or legal adviser review high-risk pages. But building compliance into your SEO process early saves painful rewrites later.

## The bottom line on healthcare SEO

Healthcare SEO rewards clinics that prove their expertise openly. Named clinicians, reviewed content, clear treatment pages, consistent local data and compliant claims help you rank in Google, get cited by AI tools and, most importantly, earn patients' trust before they book.

## How MBSA Digital can help

Healthcare and pharmacy are among MBSA Digital's core sectors. From Vadodara and London, we help clinics and health brands with technical SEO, medically reviewed content workflows, local SEO and AI search visibility. See the [healthcare and wellness industries](/industries) we serve, [our Maia Health project](/projects/maia-health), and our [SEO, local SEO and content services](/services).

Want more patients to find you? [Talk to our healthcare team](/contact).`,
    category: "General Growth",
    tags: ["Healthcare SEO", "Medical SEO", "E-E-A-T", "YMYL", "Clinic Marketing", "Local SEO"],
    readTime: "7 min read",
    coverImage: "/Blog/Healthcare SEO Growth Dashboard Blog 7.png",
    imageUrl: "/Blog/Healthcare SEO Growth Dashboard Blog 7.png",
    author: {
      name: "Muskan Shekh",
      role: "SEO and Digital Marketing Specialist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"
    },
    featured: false,
    published: true,
    createdAt: "2026-11-16T10:00:00Z",
    updatedAt: "2026-11-16T10:00:00Z",
    faqs: [
      {
        question: "What is healthcare SEO?",
        answer: "Healthcare SEO is optimising the websites of clinics, hospitals, dentists and health brands so they rank in Google and appear in AI answers for medical searches. It combines technical SEO, medically accurate content, local search and reputation management, with extra focus on trust because health is a Your Money or Your Life topic."
      },
      {
        question: "What is YMYL in SEO?",
        answer: "YMYL stands for Your Money or Your Life. It describes topics, such as health, finance and safety, where poor information could seriously harm someone. Google's quality rater guidelines ask raters to apply higher standards of trust to these pages, so health websites need clear expertise, accurate content and transparent authorship."
      },
      {
        question: "Do medical articles need to be reviewed by a doctor?",
        answer: "Google doesn't require it, but it's strongly recommended. A named, qualified reviewer shows expertise and accountability, which builds trust with patients, search engines and AI tools. Add the reviewer's name, qualifications, registration body and the review date, and update the content when clinical guidelines change."
      },
      {
        question: "How long does SEO take for a clinic?",
        answer: "Most clinics see early improvements in local visibility within three to four months and stronger organic growth in six to twelve months. Timing depends on competition, your website's history and how much content needs building. Specialist treatments in big cities like London or Mumbai usually take longer than local general services."
      },
      {
        question: "Can clinics use patient reviews in their SEO?",
        answer: "Yes, as long as reviews are genuine and you follow the rules. Encourage patients to leave reviews on Google and trusted directories, reply professionally without sharing medical details, and never offer incentives for positive reviews. In the UK, testimonials must not mislead or promote prescription-only medicines to the public."
      }
    ]
  },
  {
    _id: "blog_8_pharmacy_seo",
    title: "Pharmacy SEO: Local Search Guide for UK Pharmacies",
    slug: "pharmacy-seo",
    primaryKeyword: "pharmacy seo",
    secondaryKeywords: [
      "local seo for pharmacies",
      "pharmacy near me ranking",
      "pharmacy google business profile",
      "pharmacy first marketing",
      "how to get more pharmacy customers",
      "independent pharmacy marketing uk"
    ],
    metaTitle: "Pharmacy SEO: Local Search Guide for UK Pharmacies",
    metaDescription: "Pharmacy SEO guide for UK independents: Google Business Profile, Pharmacy First pages, reviews, compliance and AI search.",
    excerpt: "A pharmacy SEO guide for UK independents: Google Business Profile, Pharmacy First pages, reviews and AI search. Book a free local visibility check.",
    description: "Local SEO playbook for independent UK pharmacies: Google Business Profile optimization, Pharmacy First clinical pages, and review strategies.",
    content: `Pharmacy SEO is the work of making a pharmacy visible when nearby patients search Google, Google Maps and AI assistants for medicines, services and advice. For UK independents, it rests on four things: a complete Google Business Profile, service pages for NHS and private services such as Pharmacy First, a steady flow of recent reviews, and accurate, compliant information everywhere online.

Independent pharmacies are offering more clinical services than ever. Yet many patients still walk past them to the chain on the high street, simply because that's what Google showed first. The good news: local search is one of the few places a single-site pharmacy can genuinely outrank a national brand.

## Key takeaways

- Your Google Business Profile is your most important local SEO asset. Your primary category matters most.
- Create a dedicated page for each service: Pharmacy First, travel vaccines, weight management, blood pressure checks.
- Reviews must be recent. Ask every satisfied patient, every week.
- Patients increasingly use AI tools to find local businesses, so keep your details consistent everywhere.
- Stay within GPhC and MHRA rules: no advertising prescription-only medicines to the public.

## Why does pharmacy SEO matter in 2026?

Because pharmacies have become clinical first-stops, and patients find those services through search. If people don't know you offer a service, they won't come in for it.

Pharmacy First, launched in England in January 2024, lets pharmacists treat seven common conditions: sinusitis, sore throat, earache, infected insect bites, impetigo, shingles and uncomplicated urinary tract infections in women. A government answer to Parliament reported 254,692 clinical pathway consultations in June 2025 alone. A Pharmacists' Defence Association report, covered by The Pharmaceutical Journal, said total Pharmacy First Service consultations had passed 6.2 million.

There's a business angle too. The Pharmaceutical Journal reported that 6,551 pharmacies missed the 30-consultation threshold for the £1,000 monthly payment in May 2025. More local visibility means more consultations.

See [NHS England's Pharmacy First page](https://www.england.nhs.uk/primary-care/pharmacy/pharmacy-services/pharmacy-first/) for the current service details.

## How do you optimise a pharmacy's Google Business Profile?

Choose the right primary category, fill in every field, list your services and keep hours accurate, including bank holidays. Then post updates and answer reviews regularly.

Whitespark's 2026 Local Search Ranking Factors survey of 47 local SEO experts ranked the primary Business Profile category first out of 187 factors. Proximity and keywords in the business name followed closely.

### Your pharmacy GBP checklist:
- Primary category: "Pharmacy" (add relevant secondary categories, such as "Vaccination service" where offered)
- Exact business name as on your signage, with no keyword stuffing
- Full opening hours, plus holiday and Sunday hours
- Services listed individually: Pharmacy First, flu jabs, travel clinic, NHS blood pressure checks
- Booking link to your online appointment page
- Real photos: shopfront, consultation room, team
- Weekly posts: seasonal flu clinics, travel vaccine reminders, health awareness days
- Replies to every review within a few days

## Which pages should a pharmacy website have?

One page per service, one page per branch and a clear booking route. Each service page should explain who it's for, what happens, cost (NHS or private) and how to book.

| Page | What it should cover | Search it can win |
|---|---|---|
| Pharmacy First | Seven conditions, eligibility, what to bring, walk-in or book | "pharmacy first near me" |
| Travel clinic | Vaccines offered, timings before travel, prices | "travel vaccinations [town]" |
| Flu and COVID jabs | Eligibility, NHS vs private, seasonal dates | "flu jab near me" |
| Weight management | Consultation process, eligibility, safety | "weight loss clinic [town]" |
| Branch page | Address, map, parking, hours, services at that branch | "pharmacy [area name]" |

One caution on weight management: Prescription-only medicines can't be advertised to the public in the UK. Talk about the consultation service and eligibility, not named injectable drugs.

## How do reviews affect a pharmacy's local ranking?

Reviews influence both ranking and choice. Recent reviews that mention specific services send strong signals to Google and reassure patients.

BrightLocal's 2026 Local Consumer Review Survey found 97% of consumers read reviews for local businesses. Patients want to see recent feedback, not a burst of five-star ratings from three years ago.

Simple ways to keep reviews flowing:
- Print a QR code linking to your review page on the counter and consultation room door.
- Ask after positive interactions, especially after a successful consultation.
- Include a review link in text message reminders, where patients have opted in.
- Reply to every review, without confirming any medical details.
- Never offer incentives for reviews. It breaks Google's policies.

## How do patients find pharmacies through AI search?

They ask ChatGPT, Gemini or Google AI Mode questions like "Which pharmacy near Harrow does travel vaccines on Saturdays?" AI tools answer using Business Profiles, websites, directories and reviews.

BrightLocal's 2026 research found 45% of consumers had used AI tools for local business recommendations, up from 6% a year earlier. To show up:
- Keep your name, address and phone number identical across your site, Google, NHS listings and directories.
- State services, hours and booking options in plain text, not only in images.
- Add LocalBusiness or Pharmacy structured data to branch pages.
- Publish short, clear answers to common questions, such as "Can I get treated for a UTI without seeing a GP?"

## What compliance rules apply to pharmacy marketing?

Pharmacies must follow GPhC standards, MHRA rules on medicines advertising and the ASA's CAP Code. The key rule: don't promote prescription-only medicines to the public.

Also display your GPhC registration details clearly, make sure online services follow GPhC guidance for pharmacy services provided at a distance, and keep health claims accurate. We'd always recommend your superintendent pharmacist signs off new service pages.

## The bottom line on pharmacy SEO

Pharmacy SEO is how independents compete with the chains. A complete Google Business Profile, strong service pages, recent reviews and consistent details across the web help patients find you in Google, Maps and AI tools. Done well, it turns clinical services into steady footfall.

## How MBSA Digital can help

Pharmacy and healthcare are core sectors for MBSA Digital. From our London and Vadodara offices, we help UK pharmacies with Google Business Profile management, service pages, review strategy and compliant content. Read [our Harris Pharmacy case study](/projects/harris-pharmacy), explore our [local SEO services](/services) and see [how we work](/how-we-work).

Want more patients through the door? [Book a free local visibility check](/contact).`,
    category: "General Growth",
    tags: ["Pharmacy SEO", "Local SEO", "Google Business Profile", "Pharmacy First", "UK Pharmacy"],
    readTime: "6 min read",
    coverImage: "/Blog/Pharmacy SEO Analytics Dashboard Blog 8.png",
    imageUrl: "/Blog/Pharmacy SEO Analytics Dashboard Blog 8.png",
    author: {
      name: "Muskan Shekh",
      role: "SEO and Digital Marketing Specialist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"
    },
    featured: false,
    published: true,
    createdAt: "2026-11-16T10:00:00Z",
    updatedAt: "2026-11-16T10:00:00Z",
    faqs: [
      {
        question: "How can a pharmacy rank higher on Google Maps?",
        answer: "Start with your Google Business Profile: choose \"Pharmacy\" as the primary category, complete every field, list each service and keep opening hours accurate. Then build a steady flow of recent reviews, post updates weekly and make sure your name, address and phone number match exactly across your website, NHS listings and directories."
      },
      {
        question: "What is the best Google Business Profile category for a pharmacy?",
        answer: "Use \"Pharmacy\" as your primary category, because Whitespark's 2026 ranking factors survey ranked the primary category as the top local factor. Then add accurate secondary categories for services you genuinely offer, such as vaccinations. Avoid categories that don't match your services, as they can confuse patients and Google."
      },
      {
        question: "Can pharmacies advertise prescription-only medicines online?",
        answer: "No. In the UK, prescription-only medicines can't be advertised to the public. Pharmacies can promote services, such as a weight management consultation or travel clinic, and explain eligibility and the consultation process. Check MHRA guidance and the ASA's CAP Code, and have your superintendent pharmacist approve service pages."
      },
      {
        question: "Should a pharmacy have a separate page for Pharmacy First?",
        answer: "Yes. A dedicated Pharmacy First page helps you rank for searches like \"pharmacy first near me\" and explains the service clearly. Cover the seven conditions, age and eligibility rules, whether patients can walk in or should book, what to bring and when they'll be referred to a GP instead."
      },
      {
        question: "How long does pharmacy SEO take to work?",
        answer: "Google Business Profile improvements can show results within a few weeks, especially for categories, services and reviews. Website service pages usually take three to six months to rank well. Competitive areas, such as central London, take longer, while pharmacies in smaller towns often see faster gains in the local pack."
      }
    ]
  },
  {
    _id: "blog_9_google_business_profile_checklist",
    title: "Google Business Profile Checklist: 15 Steps (2026)",
    slug: "google-business-profile-checklist",
    primaryKeyword: "google business profile checklist",
    secondaryKeywords: [
      "google business profile optimisation",
      "how to rank in google maps",
      "local seo checklist",
      "google business profile categories",
      "how to get more google reviews",
      "local seo vadodara"
    ],
    metaTitle: "Google Business Profile Checklist: 15 Steps for 2026",
    metaDescription: "Our Google Business Profile checklist covers setup, categories, reviews, photos, posts and AI search in 15 clear steps for UK and Indian businesses. Free audit.",
    excerpt: "Our Google Business Profile checklist covers categories, reviews, photos, posts and AI search in 15 clear steps for UK and India. Get a free GBP audit.",
    description: "Complete 15-step Google Business Profile checklist for 2026: primary categories, review generation, local pack dominance, and AI search visibility.",
    content: `A Google Business Profile checklist is a step-by-step list for setting up and maintaining your free Google listing so you appear in Google Maps, the local pack and AI answers. The most important steps are choosing the right primary category, completing every field, collecting recent reviews, adding real photos and keeping hours and services accurate.

If you run a salon in Vadodara, a dental practice in Manchester or a physio clinic in Pune, your Google Business Profile probably brings more customers than your website does. Yet most profiles we audit are half-finished. Here's the 15-step checklist we use with clients in India and the UK.

## Key takeaways

- Your primary category is the single most important choice, according to Whitespark's 2026 survey of local SEO experts.
- Google ranks local results on relevance, distance and prominence.
- 97% of consumers read reviews for local businesses (BrightLocal, 2026).
- 45% of consumers have used AI tools for local recommendations, so consistent information everywhere matters.
- Treat your profile as ongoing work, not a one-off setup.

## Why does your Google Business Profile matter so much?

Because it controls how you appear in Google Maps and the local pack, where most "near me" decisions happen. For many local businesses, it's the first impression customers get.

According to [Google's own local ranking guidance](https://support.google.com/business/answer/7091), local results are based mainly on relevance, distance and prominence. You can't change distance, but you can improve the other two through your profile.

Whitespark's 2026 Local Search Ranking Factors survey, which scored 187 factors with 47 local SEO experts, ranked the primary category first. It also added a new score for AI search visibility for the first time.

## Setup: how do you build a strong foundation?

Get the basics exactly right. Small errors in name, category or address can hold back everything else.

1. **Claim and verify your profile.** Use the business owner's Google account, then add your team as managers, not owners.
2. **Use your real business name.** Match your signage. Adding keywords like "Best Dentist Vadodara" breaks Google's guidelines and can get you suspended.
3. **Choose the most specific primary category.** "Cosmetic dentist" beats "Dentist" if that's your main service. Add accurate secondary categories.
4. **Set your address or service area correctly.** Service-area businesses, such as home physiotherapy, should hide their address and list areas served.
5. **Add complete hours.** Include special hours for Diwali, Christmas and bank holidays.

## Content: what should you add to your profile?

Everything a customer needs to choose you without leaving Google: services, prices where possible, photos, booking links and answers to common questions.

6. **List every service.** Add each one with a short description, for example "Hydrafacial, 60 minutes, suitable for oily skin".
7. **Write a helpful description.** Use the 750 characters to explain who you help, what makes you different and where you are.
8. **Upload real photos.** Add exterior shots (so people can find you), interior, team and work examples. Skip stock images.
9. **Add booking and contact links.** Link to your appointment page and turn on the contact options you can actually monitor.
10. **Add attributes.** Wheelchair access, women-led, languages spoken and other relevant details help with filters and trust.

## Reviews: how do you get more Google reviews?

Ask consistently, make it easy and reply to every review. Recency matters as much as volume.

BrightLocal's 2026 Local Consumer Review Survey found 97% of consumers read reviews for local businesses. Here's how to keep them coming:

11. **Create a short review link and QR code.** Put it on receipts, the reception desk and follow-up messages.
12. **Ask at the right moment.** Right after a successful appointment or delivery, when the customer is happiest.
13. **Reply to every review.** Thank people by name, address complaints calmly and never share private details, especially for healthcare.

Never buy reviews or offer discounts for positive ones. Both break Google's policies, and in the UK fake reviews are also covered by consumer protection law.

## Ongoing: how do you keep your profile ranking?

Keep it active and accurate. Profiles that change with the business tend to perform better than ones set up once and forgotten.

14. **Post updates regularly.** Share offers, events and seasonal services, such as bridal packages before wedding season or flu jabs in autumn.
15. **Keep details consistent everywhere.** Your name, address and phone number should match across your website, Justdial, Practo, Yell, NHS listings, Facebook and other directories.

## How does AI search use your Google Business Profile?

AI tools such as Google AI Mode, Gemini and ChatGPT draw on business listings, websites and reviews to recommend local businesses. Clear, consistent details make you easier to recommend.

The shift is real. BrightLocal's 2026 research found 45% of consumers had used ChatGPT or other AI tools for local recommendations, up from 6% a year earlier. Over the same period, the share using Google for recommendations fell from 83% to 71%.

What helps:

| Do | Avoid |
|---|---|
| Describe services in plain, specific language | Vague phrases like "quality care" |
| Keep hours and services identical on every platform | Different phone numbers on different sites |
| Encourage reviews that mention specific services | Review gating or incentives |
| Add LocalBusiness schema on your website | Hiding key details in images only |

## The bottom line on this Google Business Profile checklist

This Google Business Profile checklist works because it covers what Google actually uses: relevance, distance and prominence. Get the category and basics right, keep adding real photos, services and reviews, and make your details consistent everywhere. That helps you win in Maps today and in AI recommendations tomorrow.

## How MBSA Digital can help

MBSA Digital manages Google Business Profiles for clinics, pharmacies, salons and service businesses across India and the UK, from our offices in Vadodara and London. Learn more about our [local SEO and Google Business Profile management](/services), the [industries we work with](/industries), and our work with [Harris Pharmacy](/projects/harris-pharmacy).

Not sure how your profile compares? [Get a free GBP audit](/contact).`,
    category: "General Growth",
    tags: ["Google Business Profile", "Local SEO", "Google Maps", "Local Pack", "Reviews"],
    readTime: "6 min read",
    coverImage: "/Blog/Google Business Profile Checklist 2026 Blog 9.png",
    imageUrl: "/Blog/Google Business Profile Checklist 2026 Blog 9.png",
    author: {
      name: "Muskan Shekh",
      role: "SEO and Digital Marketing Specialist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"
    },
    featured: false,
    published: true,
    createdAt: "2026-11-16T10:00:00Z",
    updatedAt: "2026-11-16T10:00:00Z",
    faqs: [
      {
        question: "How do I optimise my Google Business Profile?",
        answer: "Choose the most specific primary category, use your real business name, complete every field, list all services, add real photos and keep hours accurate. Then ask customers for reviews regularly, reply to every review, post updates and keep your name, address and phone number consistent across your website and other directories."
      },
      {
        question: "What is the most important Google Business Profile ranking factor?",
        answer: "According to Whitespark's 2026 Local Search Ranking Factors survey of 47 local SEO experts, the primary business category is the most important factor. Proximity to the searcher, keywords in the business name, a physical address in the city and being open at the time of search were also near the top."
      },
      {
        question: "How many Google reviews do I need to rank?",
        answer: "There's no fixed number. What matters is how you compare with competitors in your area, how recent your reviews are and whether they mention your services. A steady flow of genuine reviews every month usually beats a large burst followed by silence, and it reassures customers who check recency."
      },
      {
        question: "Can I add keywords to my Google Business Profile name?",
        answer: "No. Your profile name should match your real business name as it appears on signage and documents. Adding keywords or locations, such as \"Best Salon Vadodara\", breaks Google's guidelines and can lead to suspension. Put keywords in your services, description and posts instead, where they're allowed and useful."
      },
      {
        question: "How often should I post on Google Business Profile?",
        answer: "Aim for at least one post a week, or whenever you have a genuine update such as an offer, event, new service or seasonal reminder. Regular posts keep your profile fresh for customers. Focus on useful updates with a clear call to action rather than posting for the sake of it."
      }
    ]
  },
  {
    _id: "blog_10_seo_agency_vs_in_house",
    title: "SEO Agency vs In-House vs Freelancer: Which to Pick?",
    slug: "seo-agency-vs-in-house",
    primaryKeyword: "seo agency vs in-house",
    secondaryKeywords: [
      "seo agency vs freelancer",
      "how much does seo cost per month",
      "should i hire an seo agency",
      "in-house seo team pros and cons",
      "seo agency pricing uk india",
      "hybrid seo model"
    ],
    metaTitle: "SEO Agency vs In-House vs Freelancer: Which to Pick?",
    metaDescription: "SEO agency vs in-house vs freelancer: compare cost, skills, speed and risk with real pricing data, see when a hybrid model works, then choose the right fit.",
    excerpt: "SEO agency vs in-house vs freelancer: compare cost, skills, speed and risk with real pricing data, then choose the right model. Book a free SEO call.",
    description: "Compare SEO agency vs in-house vs freelancer across monthly costs, speed, skill breadth, and risk to choose the best model for your business.",
    content: `The SEO agency vs in-house decision depends on your budget, how much SEO work you have and how many skills you need. An agency gives you a full team of specialists quickly. An in-house hire gives you deep brand knowledge and daily focus. A freelancer is the most affordable for a narrow, well-defined job. Many growing businesses do best with a hybrid.

It's one of the most common questions we get from founders and marketing managers, usually right before budgets are set for the new year. Get it wrong and you'll spend 12 months paying for the wrong kind of help. Here's an honest comparison, including when an agency like ours is not the right choice.

## Key takeaways

- Ahrefs' survey of 439 SEO providers found $501 to $1,000 a month is the most common retainer.
- Agencies cost more on average, but give you several specialists for the price of one hire.
- In-house works best when SEO is a core growth channel and there's enough work for a full-time role.
- Freelancers suit focused projects, such as a technical audit or a set of articles.
- AI search has widened the skill set needed: technical, content, data, digital PR and AI visibility.

## What's the difference between an SEO agency, in-house team and freelancer?

An agency is an external team with several specialists. An in-house SEO is your own employee. A freelancer is an independent specialist you hire for specific work, usually part-time.

Each option buys you something different:
- **Agency:** breadth of skills, tools, processes and cover when someone's on leave.
- **In-house:** product knowledge, speed of internal decisions and full-time attention.
- **Freelancer:** flexibility, lower cost and often deep skill in one area.

[Google's advice on hiring an SEO](https://developers.google.com/search/docs/fundamentals/do-i-need-seo) recommends interviewing potential SEOs, checking references and being wary of anyone who guarantees rankings. That applies to every model.

## How do the costs compare?

Freelancers are usually cheapest per month, agencies cost more, and in-house is a fixed salary plus tools, training and management time. But cost per skill matters more than headline price.

The most useful benchmark is Ahrefs' SEO pricing survey of 439 providers:
- 78.2% of providers charge a monthly retainer.
- $501 to $1,000 a month is the most popular retainer band, chosen by 20.4% of respondents.
- 57.4% of agencies charge more than $1,000 a month, compared with 32.2% of freelancers.
- Agencies averaged about $3,209 a month and freelancers about $1,349.
- India was a clear outlier: 76% of India-based SEOs charge $1,000 or less a month.

For in-house, the true cost is more than a salary. Add paid tools (often several subscriptions), training, recruitment and the time a manager spends directing the work. One person also can't be expert in technical SEO, content, links and analytics all at once.

## Which option is best for your business?

It depends on your stage, budget and how central search is to growth. Use this comparison to narrow it down.

| Factor | SEO agency | In-house SEO | Freelancer |
|---|---|---|---|
| Typical cost | Medium to high monthly retainer | Salary plus tools and overheads | Lowest; hourly, project or small retainer |
| Range of skills | Wide: technical, content, links, data, AI search | Usually one person's strengths | Deep in one or two areas |
| Speed to start | Fast, often within weeks | Slow; hiring takes months | Fast |
| Brand and product knowledge | Builds over time | Strongest | Limited |
| Tools included | Usually | You pay separately | Sometimes |
| Cover for leave or departure | Yes | No | No |
| Best for | Growing businesses that need several skills | Large sites where SEO is core | Defined projects or tight budgets |

Some real-world patterns we see:
- A single-branch UK pharmacy usually doesn't need a full-time SEO. A freelancer or small agency retainer covering Google Business Profile, service pages and reviews works well.
- An Indian D2C beauty brand on Shopify selling into India and the UK often needs technical, content and feed expertise at once. An agency or hybrid model fits.
- A multi-site healthcare group with hundreds of pages may justify an in-house SEO lead, supported by an agency for technical work and digital PR.

## When should you hire an in-house SEO?

When search is a core revenue channel, there's enough work for a full-time person and you have someone who can manage and support them.

Good signs you're ready:
- You publish content or update products every week.
- Developers ship site changes often, and SEO needs to review them.
- Organic search drives a large share of revenue or leads.
- You can afford tools and training, not just a salary.
- You have a marketing leader to set direction.

If only one or two of those apply, an in-house hire may sit underused, or be stretched too thin.

## What's the hybrid model, and why is it popular?

A hybrid combines an in-house owner with outside specialists. The in-house person knows the business and handles daily work; the agency or freelancers bring technical depth, scale and fresh perspective.

This has grown more popular as search has split into more channels. Google Search, AI Overviews, AI Mode, ChatGPT, Gemini and Perplexity all need slightly different evidence of authority. Few individuals cover all of it well.

A common version for small and mid-sized businesses is a fractional CMO or senior consultant setting strategy, with an agency or freelancers doing the work.

## What questions should you ask before hiring anyone?

Ask how they measure success, who will actually do the work and how they'd approach your specific challenges. Avoid anyone who guarantees rankings:
- What would you do in the first 90 days?
- Which metrics will you report, and how often?
- Can I speak to a current client in my industry?
- How do you approach AI search visibility?
- What happens to our content, accounts and data if we part ways?
- What will you need from our team?

## The bottom line on SEO agency vs in-house

There's no universal winner in the SEO agency vs in-house debate. Choose a freelancer for focused projects, in-house when SEO is central and there's full-time work, and an agency when you need several skills quickly. For many growing businesses in India and the UK, a hybrid gives the best balance of knowledge, depth and cost.

## How MBSA Digital can help

MBSA Digital works as an extension of your team, from Vadodara and London. Some clients use us as their full SEO team; others pair us with an in-house marketer or use our fractional CMO service. See [how we work with clients](/how-we-work), [our SEO and fractional CMO services](/services) and learn more [about our team](/about).

Not sure which model fits? [Book a free SEO call](/contact) and we'll give you an honest answer, even if it isn't us.`,
    category: "General Growth",
    tags: ["SEO Agency", "In-House SEO", "Freelance SEO", "SEO Pricing", "Agency vs In-House"],
    readTime: "6 min read",
    coverImage: "/Blog/SEO Agency vs In-House vs Freelancer Blog 10.png",
    imageUrl: "/Blog/SEO Agency vs In-House vs Freelancer Blog 10.png",
    author: {
      name: "Muskan Shekh",
      role: "SEO and Digital Marketing Specialist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"
    },
    featured: false,
    published: true,
    createdAt: "2026-11-16T10:00:00Z",
    updatedAt: "2026-11-16T10:00:00Z",
    faqs: [
      {
        question: "Is it better to hire an SEO agency or do SEO in-house?",
        answer: "It depends on your needs. An agency suits businesses that need several skills quickly, such as technical SEO, content and link building. In-house suits larger businesses where search is a core channel and there's full-time work. Many growing companies combine both, with an in-house owner and agency specialists."
      },
      {
        question: "How much does SEO cost per month?",
        answer: "Ahrefs' survey of 439 SEO providers found $501 to $1,000 a month is the most common retainer, with agencies averaging about $3,209 and freelancers about $1,349. Prices vary widely by country and scope: 76% of India-based SEOs charge $1,000 or less a month, while UK and US agencies usually charge more."
      },
      {
        question: "Is a freelancer cheaper than an SEO agency?",
        answer: "Usually, yes. Ahrefs found 57.4% of agencies charge more than $1,000 a month, compared with 32.2% of freelancers. However, a freelancer typically covers one or two skill areas. If you need technical SEO, content, links and analytics together, an agency can work out better value per skill."
      },
      {
        question: "How long should I give an SEO agency to show results?",
        answer: "Give most agencies six to twelve months to show meaningful organic growth, though you should see clear activity, fixes and early signals within the first three months. Ask for a 90-day plan up front, agree on measurable goals such as leads or revenue, and review progress monthly."
      },
      {
        question: "What should I avoid when hiring an SEO provider?",
        answer: "Avoid anyone who guarantees first-page rankings, won't explain their methods, buys links or keeps ownership of your accounts and content. Google's own guidance warns against SEOs who make guarantees. Look for transparent reporting, relevant case studies, references you can speak to and a clear plan for your business."
      }
    ]
  }
];

export const CATEGORIES = [
  "Technical SEO",
  "Paid Advertising",
  "Content Strategy",
  "CRO & Analytics",
  "AI & Automations",
  "General Growth"
];

export const PRESET_COVERS = [
  {
    label: "Google November 2026 Core Update",
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    category: "Technical SEO"
  },
  {
    label: "Search Console & AI Metrics",
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    category: "CRO & Analytics"
  },
  {
    label: "AI Neural & Query Fan-Out",
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    category: "AI & Automations"
  },
  {
    label: "ChatGPT Shopping & Feeds",
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    category: "AI & Automations"
  },
  {
    label: "Shopify E-Commerce Optimization",
    url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
    category: "Technical SEO"
  },
  {
    label: "Healthcare & Clinical SEO",
    url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    category: "General Growth"
  },
  {
    label: "Pharmacy & Local Healthcare",
    url: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80",
    category: "General Growth"
  },
  {
    label: "Google Business Profile & Local Maps",
    url: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    category: "General Growth"
  },
  {
    label: "SEO Agency & Team Strategy",
    url: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&w=1200&q=80",
    category: "General Growth"
  }
];
