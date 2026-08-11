import { buildRichSummary, fetchRssFeeds, hasUsableSummary, type RssItem } from "./api";

export type NewsCategory = "Investment Banking" | "Digital Risk" | "Cyber Risk";

export interface NewsArticle {
  id: string;
  title: string;
  source: string;
  sourceUrl: string;
  category: NewsCategory;
  image: string;
  publishedAt: string;
  summary: string;
  content: string;
  keyTakeaways: string[];
}

export const NEWS_CATEGORIES: NewsCategory[] = [
  "Investment Banking",
  "Digital Risk",
  "Cyber Risk",
];

interface CategoryFeeds {
  category: NewsCategory;
  feeds: string[];
  fallbackImage: string;
  imagePool: string[];
}

const CATEGORY_KEYWORDS: Record<NewsCategory, string[]> = {
  "Investment Banking": [
    "bank", "financ", "invest", "ipo", "capital market", "equity", "fund",
    "merger", "acquisition", "m&a", "deal", "hedge", "credit", "debt", "bond",
    "yield", "dividend", "portfolio", "trading", "asset", "wall street",
    "goldman", "morgan", "jpmorgan", "barclays", "securities", "underwr",
    "private equity", "venture", "valuation", "listing", "shares", "liquidity",
    "treasury", "funding", "leveraged finance", "private credit",
  ],
  "Digital Risk": [
    "digital risk", "compliance", "regulation", "fca", "sec ruling", "governance",
    "operational risk", "fintech", "fraud", "aml", "kyc", "data privacy", "gdpr",
    "financial crime", "regulatory", "conduct", "supervisory", "oversight",
    "third party risk", "model risk", "resilience", "operational resilience",
    "outsourcing", "incident", "payments", "consumer protection", "disclosure",
  ],
  "Cyber Risk": [
    "cyber", "hack", "breach", "malware", "ransomware", "phishing", "security",
    "vulnerability", "attack", "threat", "exploit", "incident", "infosec",
    "ciso", "firewall", "intrusion", "zero-day", "data leak", "botnet",
    "cybersecurity", "identity", "privacy", "authentication",
  ],
};

function isRelevant(item: RssItem, category: NewsCategory): boolean {
  const text = `${item.title} ${item.description} ${item.source}`.toLowerCase();
  return CATEGORY_KEYWORDS[category].some((kw) => text.includes(kw));
}

const CATEGORY_FEEDS: CategoryFeeds[] = [
  {
    category: "Investment Banking",
    feeds: [
      "https://www.cnbc.com/id/20910258/device/rss/rss.html",
      "https://www.finextra.com/rss/headlines.aspx",
      "https://www.sec.gov/news/pressreleases.rss",
      "https://www.bankofengland.co.uk/rss/news",
      "https://www.federalreserve.gov/feeds/press_all.xml",
      "https://feeds.reuters.com/reuters/businessNews",
    ],
    fallbackImage:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=900&auto=format&fit=crop",
    imagePool: [
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
    ],
  },
  {
    category: "Digital Risk",
    feeds: [
      "https://www.fca.org.uk/news/rss.xml",
      "https://www.finextra.com/rss/headlines.aspx",
      "https://www.sec.gov/news/pressreleases.rss",
      "https://www.bankofengland.co.uk/rss/prudential-regulation-publications",
      "https://www.bankofengland.co.uk/rss/publications",
      "https://www.federalreserve.gov/feeds/press_bcreg.xml",
      "https://www.ecb.europa.eu/rss/press.html",
    ],
    fallbackImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
    imagePool: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop",
    ],
  },
  {
    category: "Cyber Risk",
    feeds: [
      "https://krebsonsecurity.com/feed/",
      "https://www.bleepingcomputer.com/feed/",
      "https://www.darkreading.com/rss.xml",
      "https://www.fca.org.uk/news/rss.xml",
      "https://www.bankofengland.co.uk/rss/news",
    ],
    fallbackImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=900&auto=format&fit=crop",
    imagePool: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=900&auto=format&fit=crop",
    ],
  },
];

const SESSION_KEY = "news_cache_v11";
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes
let inMemoryCache: NewsArticle[] | null = null;
let inMemoryCacheTs = 0;

const FALLBACK_NEWS: NewsArticle[] = [
  {
    id: "fallback-news-1",
    title: "Banks tighten balance-sheet discipline as funding costs stay elevated",
    source: "Digital Risk Academy",
    sourceUrl: "https://example.com/news/fallback-news-1",
    category: "Investment Banking",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=900&auto=format&fit=crop",
    publishedAt: new Date().toISOString(),
    summary: "Treasury and capital planning remain the main focus as institutions manage higher-for-longer rates and preserve underwriting capacity. The sustained elevation of funding costs has prompted banks to restructure how capital is deployed across business lines.",
    content: "Treasury and capital planning remain the main focus as institutions manage higher-for-longer rates and preserve underwriting capacity. The sustained elevation of funding costs has prompted banks to restructure how capital is deployed across business lines.\n\nCoverage teams are working under tighter return thresholds, and product mix decisions increasingly reflect the cost of holding and financing positions. In several major institutions, treasury functions are being given broader influence over deal economics at the origination stage rather than at the point of commitment.\n\nThis shift reflects a broader reset in how banks think about profitability under a constrained balance sheet. Fee income remains the primary driver of returns, but financing and holding costs mean that advisory-led mandates are increasingly preferred over capital-intensive structured products. Institutions are also being more selective about client relationships, using cost-to-serve data to reallocate relationship manager coverage toward higher-yield segments.\n\nAnalysts note that the discipline imposed by elevated funding costs may outlast any near-term rate reductions, since credit committees have embedded tighter hurdle rates into approval frameworks. The medium-term effect is a more conservative posture across leveraged finance and structured credit, with teams being asked to justify balance sheet exposure with greater granularity than was required in lower-rate environments.",
    keyTakeaways: [
      "Funding costs are reshaping product mix away from capital-intensive structured products.",
      "Treasury functions now influence deal economics earlier in the origination process.",
      "Hurdle rates embedded by credit committees are likely to persist beyond any rate reduction.",
    ],
  },
  {
    id: "fallback-news-2",
    title: "Advisory teams reassess pipeline quality across mid-market mandates",
    source: "Digital Risk Academy",
    sourceUrl: "https://example.com/news/fallback-news-2",
    category: "Investment Banking",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=900&auto=format&fit=crop",
    publishedAt: new Date().toISOString(),
    summary: "Pipeline screening has shifted toward certainty of close, with greater emphasis on sponsor conviction and timing discipline. Mid-market advisory practices are undergoing a significant reorientation as deal teams confront a more selective execution environment.",
    content: "Pipeline screening has shifted toward certainty of close, with greater emphasis on sponsor conviction and timing discipline. Mid-market advisory practices are undergoing a significant reorientation as deal teams confront a more selective execution environment.\n\nIn previous cycles, banks maintained broad pipelines with the expectation that a percentage of mandates would crystallise regardless of early-stage qualification. The current environment has shifted that calculus, with relationship managers under pressure to spend time on deals with higher close probabilities.\n\nSponsor relationships are central to this shift. Private equity clients who demonstrate strong investment conviction and clear exit timelines are receiving more dedicated advisory resource. Banks are investing in earlier financial modelling and scenario analysis for priority mandates, allowing pitch processes to move more quickly once a decision is made.\n\nClose probability frameworks are now standard at many institutions, combining financial metrics with qualitative assessments of sponsor readiness, market timing, and regulatory risk. Origination heads are reviewing pipeline composition monthly rather than quarterly, reducing the number of deals in late-stage preparation that ultimately do not proceed. Execution quality, rather than pipeline depth, is being emphasised as the primary metric for advisory team performance.",
    keyTakeaways: [
      "Deal teams are pre-qualifying mandates more rigorously before committing advisory resource.",
      "Sponsor conviction and exit clarity are now first-order filters at the origination stage.",
      "Monthly pipeline reviews replace quarterly cadence at most mid-market advisory practices.",
    ],
  },
  {
    id: "fallback-news-3",
    title: "Operational resilience programmes move closer to board reporting",
    source: "Digital Risk Academy",
    sourceUrl: "https://example.com/news/fallback-news-3",
    category: "Digital Risk",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
    publishedAt: new Date().toISOString(),
    summary: "Firms are formalizing resilience metrics into board packs to track service recovery, testing cadence, and dependency risk. Regulatory expectations around operational resilience have evolved significantly, with supervisors now expecting institutions to demonstrate readiness rather than simply assert compliance.",
    content: "Firms are formalizing resilience metrics into board packs to track service recovery, testing cadence, and dependency risk. Regulatory expectations around operational resilience have evolved significantly, with supervisors now expecting institutions to demonstrate readiness rather than simply assert compliance.\n\nBoard-level engagement has become a key benchmark, and firms are restructuring their resilience reporting to surface material findings at executive level on a regular cadence. Where earlier frameworks focused on the existence of business continuity and recovery plans, current expectations centre on whether those plans have been tested under realistic conditions and whether the results inform board decisions.\n\nDependency mapping has emerged as a particularly important control area. Regulators have emphasised that firms must understand not only their own service chains but also how critical services are affected by third-party concentration, including cloud infrastructure and shared utilities. This has driven investment in automated inventory tools that continuously update dependency maps as infrastructure changes.\n\nFirms that are further ahead in resilience maturity are beginning to use board reporting as a strategic asset, linking resilience performance to risk appetite frameworks and using it to demonstrate prudent management to both regulators and investors. Testing evidence, including results from live recovery drills, is now expected as a standing agenda item.",
    keyTakeaways: [
      "Board packs must now include live testing evidence, not just policy documentation.",
      "Dependency mapping is required at infrastructure level, including cloud concentration.",
      "Resilience reporting is being repositioned as a strategic governance asset.",
    ],
  },
  {
    id: "fallback-news-4",
    title: "Identity controls gain priority as fraud patterns shift across channels",
    source: "Digital Risk Academy",
    sourceUrl: "https://example.com/news/fallback-news-4",
    category: "Digital Risk",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=900&auto=format&fit=crop",
    publishedAt: new Date().toISOString(),
    summary: "Authentication, device intelligence, and transaction monitoring are being rebalanced to handle higher impersonation risk. Impersonation-based attacks have become the dominant fraud vector across both retail and institutional channels.",
    content: "Authentication, device intelligence, and transaction monitoring are being rebalanced to handle higher impersonation risk. Impersonation-based attacks, in which criminals assume the identity of legitimate customers through social engineering or credential theft, have become the dominant fraud vector across both retail and institutional channels.\n\nFinancial institutions are responding by investing heavily in layered identity assurance controls that verify authenticity at multiple points in the customer journey. Device intelligence tools assess the legitimacy of devices used to access services using behavioural signals, hardware identifiers, and network characteristics to generate risk scores that inform authentication decisions in real time.\n\nTransaction monitoring systems are also being updated to detect patterns consistent with account takeover and authorised push payment fraud. Machine learning models are being retrained on more recent fraud data, with particular attention to synthetic identity cases where the fraudulent account has maintained a pattern of normal activity before being exploited.\n\nRisk teams are grappling with the tension between security and customer experience, as excessive step-up authentication creates abandonment and complaints. Better orchestration of identity controls, informed by risk context rather than static rules, is increasingly viewed as the solution to this challenge. Risk score accuracy is proving to be the binding constraint on step-up effectiveness.",
    keyTakeaways: [
      "Device intelligence and behavioural signals are replacing static authentication rules.",
      "Synthetic identity fraud requires network graph analysis and velocity monitoring.",
      "Step-up control orchestration driven by real-time risk scores reduces customer friction.",
    ],
  },
  {
    id: "fallback-news-5",
    title: "Cloud governance reviews expand to vendor concentration testing",
    source: "Digital Risk Academy",
    sourceUrl: "https://example.com/news/fallback-news-5",
    category: "Cyber Risk",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=900&auto=format&fit=crop",
    publishedAt: new Date().toISOString(),
    summary: "Security and procurement teams are now mapping concentration risk across core service providers and shared dependencies. Cloud adoption in financial services has moved into a state where core business functions depend on a small number of large providers, attracting significant regulatory attention.",
    content: "Security and procurement teams are now mapping concentration risk across core service providers and shared dependencies. Cloud adoption in financial services has moved into a state where core business functions depend on a small number of large providers, attracting significant regulatory attention from supervisors in the UK, EU, and US.\n\nFirms are now conducting structured vendor concentration assessments that go beyond traditional third-party risk reviews. These assessments map service dependencies not just at the vendor level but at the infrastructure level, identifying shared underlying platforms across multiple providers. In some cases, firms have discovered that services provided by nominally different vendors actually run on the same underlying cloud infrastructure, creating hidden concentration risk.\n\nSubstitution analysis has become a key output of these reviews. Governance teams are assessing how quickly a critical service could be migrated to an alternative provider in the event of a significant disruption, and what barriers exist to doing so. Contractual lock-in, data portability limitations, and technical integration complexity are commonly identified as factors that make substitution more difficult than anticipated.\n\nRegulators expect firms to define concentration thresholds above which additional controls or active diversification strategies are required. Procurement and security governance functions are being asked to collaborate more closely to ensure that new vendor commitments are assessed for concentration implications before contracts are signed.",
    keyTakeaways: [
      "Hidden concentration risk arises when different vendors share the same underlying cloud infrastructure.",
      "Substitution timelines are consistently underestimated without detailed technical assessment.",
      "Procurement and security must jointly evaluate concentration implications before contracts are signed.",
    ],
  },
  {
    id: "fallback-news-6",
    title: "Phishing simulations show stronger gains from role-based training",
    source: "Digital Risk Academy",
    sourceUrl: "https://example.com/news/fallback-news-6",
    category: "Cyber Risk",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=900&auto=format&fit=crop",
    publishedAt: new Date().toISOString(),
    summary: "Targeted training by function and privilege level is outperforming one-size-fits-all awareness campaigns. Evidence from recent security programmes suggests that generic training delivered to all staff simultaneously produces diminishing returns.",
    content: "Targeted training by function and privilege level is outperforming one-size-fits-all awareness campaigns. Evidence from recent security programmes suggests that generic training delivered to all staff simultaneously produces diminishing returns, with click rates and credential submission rates in phishing simulations plateauing after initial improvements.\n\nRole-based training programmes are producing measurably different outcomes. By tailoring simulation content to reflect the types of phishing attacks most likely to target a specific function, such as finance staff receiving invoice fraud simulations and IT staff receiving technical lure content, security teams are seeing greater retention and more consistent behaviour change.\n\nPrivilege-based stratification, which applies more intensive training to high-privilege account holders, is also proving effective at reducing the risk associated with the most sensitive access credentials. Pairing simulations with immediate coaching moments, where a brief educational intervention follows an unsuccessful test, has shown the strongest behaviour change effect in recent studies.\n\nThe measurement approach is shifting alongside the training design. Rather than tracking completion rates and self-reported confidence scores, leading programmes now track repeated susceptibility in simulations, time to report a suspicious message, and recovery actions after a simulated compromise. Security leaders are also replacing annual awareness training with shorter, more frequent touchpoints that keep security practices salient throughout the year.",
    keyTakeaways: [
      "Role-specific simulation content outperforms generic campaigns on click rate reduction.",
      "Immediate post-simulation coaching produces the strongest and most durable behaviour change.",
      "Outcome metrics such as sustained susceptibility rates replace completion rate tracking.",
    ],
  },
  {
    id: "fallback-news-7",
    title: "Private credit desks watch refinancing stress across lower-rated issuers",
    source: "Digital Risk Academy",
    sourceUrl: "https://example.com/news/fallback-news-7",
    category: "Investment Banking",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
    publishedAt: new Date().toISOString(),
    summary: "Refinancing calendars and covenant pressure are shaping lender appetite and prompting more conservative structuring. Private credit has absorbed a significant share of leveraged lending activity, and the portfolio originated during the low-rate environment now faces a more challenging operating context.",
    content: "Refinancing calendars and covenant pressure are shaping lender appetite and prompting more conservative structuring. Private credit has absorbed a significant share of leveraged lending activity over the past three years, and the portfolio of loans originated during the low-rate environment now faces a more challenging operating context as refinancing dates approach for weaker credits.\n\nRefinancing pressure is most acute among lower-rated borrowers in rate-sensitive sectors such as retail, leisure, and services, where higher debt service costs have compressed cash generation more severely than initially projected. Covenant frameworks designed with base-case assumptions well above current trading performance are triggering maintenance covenant tests earlier than expected.\n\nUnderwriting committees are responding by demanding more conservative base cases and more detailed downside analysis. Leverage assumptions are being stress-tested against scenarios that combine revenue declines with sustained higher interest rates, producing more selective deployment of capital. Some platforms have reduced new commitments in specific sectors pending clearer evidence of credit stabilisation.\n\nRefinancing risk is now assessed at origination as a first-order credit variable rather than a secondary consideration. Deals in which the refinancing wall falls during a period of projected stress receive heightened scrutiny, and in some cases are declined or restructured to include more equity cushion. The concentration of refinancing risk in 2025 and 2026 is a macro concern that market participants are monitoring closely.",
    keyTakeaways: [
      "Covenant maintenance tests are triggering earlier than projected in rate-sensitive sectors.",
      "Refinancing wall timing is now a first-order underwriting consideration, not a secondary one.",
      "Platforms are selectively reducing deployment pending credit stabilisation evidence.",
    ],
  },
  {
    id: "fallback-news-8",
    title: "Client due diligence workflows move toward continuous monitoring",
    source: "Digital Risk Academy",
    sourceUrl: "https://example.com/news/fallback-news-8",
    category: "Digital Risk",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop",
    publishedAt: new Date().toISOString(),
    summary: "Periodic checks are giving way to ongoing signals, with teams automating watchlists and policy exceptions. Supervisors are now expecting firms to demonstrate that changes in client risk profiles are detected promptly, not only at scheduled review intervals.",
    content: "Periodic checks are giving way to ongoing signals, with teams automating watchlists and policy exceptions. Supervisors are now expecting firms to demonstrate that changes in client risk profiles are detected promptly, not only at scheduled review intervals. This expectation is driving investment in continuous monitoring frameworks that respond to signals as they occur.\n\nAutomated watchlist monitoring is the most established element of this shift. Clients are checked against sanctions lists, politically exposed persons registers, and adverse media sources on a daily or real-time basis. Where a match or alert is generated, it triggers an immediate review workflow rather than being queued for the next scheduled assessment.\n\nProfile drift monitoring goes further, tracking changes in transactional behaviour, ownership structure, or business activity that may alter a client's risk profile without an external alert. Machine learning models are being used to identify patterns that diverge from established baselines, prompting enhanced due diligence reviews when significant changes are detected.\n\nThe operational challenge is managing the volume of alerts generated by continuous monitoring without creating unsustainable workloads for compliance teams. Exception management frameworks that prioritise alerts by risk severity and route them to appropriately skilled reviewers are essential. Data quality is the foundational requirement, as continuous monitoring programmes generate significantly higher false-positive rates when client profile data is incomplete or contains inherited errors from manual onboarding.",
    keyTakeaways: [
      "Continuous monitoring closes the detection gap that exists between scheduled review cycles.",
      "Profile drift models using behavioural baselines catch risk changes without external triggers.",
      "Alert prioritisation frameworks are essential to prevent continuous monitoring from overwhelming compliance teams.",
    ],
  },
  {
    id: "fallback-news-9",
    title: "Cyber incident reporting timelines compress across regulated sectors",
    source: "Digital Risk Academy",
    sourceUrl: "https://example.com/news/fallback-news-9",
    category: "Cyber Risk",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=900&auto=format&fit=crop",
    publishedAt: new Date().toISOString(),
    summary: "Teams are revising notification playbooks to meet shorter disclosure windows and evidence requirements. DORA mandates initial notification of major incidents within four hours of classification, while the SEC requires reporting of material incidents within four business days.",
    content: "Teams are revising notification playbooks to meet shorter disclosure windows and evidence requirements. DORA mandates initial notification of major incidents to competent authorities within four hours of classification, while the SEC requires public companies to report material incidents within four business days of determining materiality.\n\nThese compressed timelines are forcing a significant redesign of incident response programmes. Triage processes must now reach a materiality determination within hours of detection, which requires pre-defined classification criteria and decision rights that are agreed in advance rather than improvised during an active incident.\n\nLegal and communications functions must be integrated into the first response phase rather than brought in after technical containment. Regulatory notifications are legal documents that carry significant consequences if they contain inaccuracies or omissions. Pre-built notification templates, reviewed and approved by regulatory counsel in advance, enable notifications to be drafted quickly with accurate technical content inserted as the incident evolves.\n\nEvidence preservation is also time-sensitive. Forensic evidence of incident origin, progression, and impact must be collected contemporaneously. Firms are investing in automated logging and forensic preservation tools that capture and timestamp evidence across endpoint, network, and cloud environments from the moment of initial detection. Regulators expect submissions to be supported by contemporaneous evidence of the incident timeline, response actions, and assessment methodology, making pre-built playbooks essential rather than optional.",
    keyTakeaways: [
      "DORA's four-hour initial notification window requires triage classification criteria to be pre-agreed.",
      "Legal counsel must be integrated into the first response phase, not brought in post-containment.",
      "Automated forensic preservation from point of detection ensures evidence meets regulatory submission standards.",
    ],
  },
];

function hashSeed(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function pickImage(category: NewsCategory, seed: string): string {
  const feed = CATEGORY_FEEDS.find((c) => c.category === category)!;
  const pool = feed.imagePool;
  return pool[hashSeed(seed) % pool.length];
}

function stableId(link: string): string {
  return `rss_${hashSeed(link).toString(36)}`;
}

function interleaveBuckets<T>(buckets: T[][], limit: number): T[] {
  const positions = buckets.map(() => 0);
  const result: T[] = [];

  while (result.length < limit) {
    let addedInRound = false;
    for (let i = 0; i < buckets.length && result.length < limit; i += 1) {
      const item = buckets[i][positions[i]];
      if (!item) continue;
      result.push(item);
      positions[i] += 1;
      addedInRound = true;
    }
    if (!addedInRound) break;
  }

  return result;
}

function dedupeArticles(items: NewsArticle[]): NewsArticle[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = item.sourceUrl || item.id;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function generateKeyTakeaways(text: string): string[] {
  if (!text || text.trim().length < 60) return [];
  const sentences = text
    .replace(/([.!?])\s+(?=[A-Z"'‘“])/g, "$1\n")
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => {
      if (s.length < 40 || s.length > 400) return false;
      if (/^(read more|subscribe|click here|learn more|for more|©|copyright|all rights)/i.test(s)) return false;
      return true;
    });
  if (sentences.length === 0) return [];
  const count = Math.min(3, sentences.length);
  const step = Math.max(1, Math.floor(sentences.length / count));
  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    const s = sentences[Math.min(i * step, sentences.length - 1)];
    if (!s || result.includes(s)) continue;
    const words = s.split(/\s+/);
    result.push(words.length > 28 ? words.slice(0, 28).join(" ") + "." : s);
  }
  return result;
}

async function rssToArticle(item: RssItem, category: NewsCategory): Promise<NewsArticle> {
  const published = item.pubDateIso || new Date(item.pubDate || Date.now()).toISOString();
  const summary = await buildRichSummary(item.link, item.description, item.title);
  return {
    id: stableId(item.link || item.title),
    title: item.title,
    source: item.source || "Source",
    sourceUrl: item.link,
    category,
    image: pickImage(category, item.link || item.title),
    publishedAt: published,
    summary,
    content: summary,
    keyTakeaways: generateKeyTakeaways(summary),
  };
}

function readSessionCache(): NewsArticle[] | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { ts: number; data: NewsArticle[] };
    if (Date.now() - parsed.ts > CACHE_TTL_MS) return null;
    if (!Array.isArray(parsed.data) || parsed.data.length === 0) return null;
    inMemoryCacheTs = parsed.ts;
    return parsed.data;
  } catch {
    return null;
  }
}

function writeSessionCache(data: NewsArticle[]): void {
  if (typeof window === "undefined") return;
  if (!Array.isArray(data) || data.length === 0) return;
  try {
    window.sessionStorage.setItem(SESSION_KEY, JSON.stringify({ ts: Date.now(), data }));
  } catch {
    /* quota or disabled storage — ignore */
  }
}

export async function fetchArticles(): Promise<NewsArticle[]> {
  if (inMemoryCache && inMemoryCache.length > 0 && Date.now() - inMemoryCacheTs < CACHE_TTL_MS) return inMemoryCache;
  const cached = readSessionCache();
  if (cached && cached.length > 0) {
    inMemoryCache = cached;
    return cached;
  }

  let combined: NewsArticle[] = [];
  try {
    const perCategory = await Promise.all(
      CATEGORY_FEEDS.map(async (cf) => {
        try {
          const items = await fetchRssFeeds(cf.feeds);
          return items
            .filter((item) => isRelevant(item, cf.category) && item.description.trim().length > 40)
            .slice(0, 6)
            .map((item) => ({ item, category: cf.category }));
        } catch {
          return [] as Array<{ item: RssItem; category: NewsCategory }>;
        }
      })
    );
    const selected = interleaveBuckets(perCategory, 15);
    const enriched = dedupeArticles(await Promise.all(
      selected.map(({ item, category }) => rssToArticle(item, category))
    ));
    combined = enriched.filter((article) => hasUsableSummary(article.summary)).slice(0, 9);
  } catch {
    combined = [];
  }

  if (combined.length === 0) {
    // Don't persist the fallback to session storage — we want to retry the real feeds on next visit.
    inMemoryCache = FALLBACK_NEWS;
    return FALLBACK_NEWS;
  }

  inMemoryCache = combined;
  inMemoryCacheTs = Date.now();
  writeSessionCache(combined);
  return combined;
}

export async function getArticleById(id: string): Promise<NewsArticle | null> {
  const all = await fetchArticles();
  const decoded = (() => {
    try {
      return decodeURIComponent(id);
    } catch {
      return id;
    }
  })();
  return all.find((a) => a.id === decoded || a.id === id) ?? null;
}
