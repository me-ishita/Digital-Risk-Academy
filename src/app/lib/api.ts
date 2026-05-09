export const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz8WO5yyb7y5pNQErgV98VY4snqXUxrnk-PkhtPdWpvNNSUdXx0_rKtMjGQ-nsPNX0C/exec";

export const COURSE_DETAILS: Record<
  string,
  {
    label: string;
    price: string;
    amount: number;
    currency: string;
    noCodeLink: string;
    paypalLink: string;
    inrPrice: string;
    inrNoCodeLink: string;
  }
> = {
  "investment-banking": {
    label: "Investment Banking Programme",
    price: "£270",
    amount: 270,
    currency: "GBP",
    noCodeLink: "https://buy.stripe.com/eVqcN4auagKEfRt12qcV201",
    paypalLink: "https://www.paypal.com/ncp/payment/3JEJ3YC3ZV5AS",
    inrPrice: "35,000",
    inrNoCodeLink: "",
  },
  "grc-fundamentals": {
    label: "Digital Risk Fundamentals",
    price: "£150",
    amount: 150,
    currency: "GBP",
    noCodeLink: "https://buy.stripe.com/cNi6oGeKqgKE0Wz5iGcV202",
    paypalLink: "https://www.paypal.com/ncp/payment/48F2W5NGGJPUY",
    inrPrice: "₹16,000",
    inrNoCodeLink: "",
  },
  "cyber-risk": {
    label: "Cyber Resilience Practitioner ",
    price: "£200",
    amount: 200,
    currency: "GBP",
    noCodeLink: "https://buy.stripe.com/5kQ8wOfOu1PK7kX3aycV204",
    paypalLink: "https://www.paypal.com/ncp/payment/ZB3MRQF3CAL48",
    inrPrice: "₹21,000",
    inrNoCodeLink: "",
  },
  "Data Privacy Basics": {
    label: "AI Risk Governance",
    price: "£150",
    amount: 150,
    currency: "GBP",
    noCodeLink: "https://buy.stripe.com/9B614m7hYcuo7kXdPccV203",
    paypalLink: "https://www.paypal.com/ncp/payment/WHSYSBS6HU2RN",
    inrPrice: "₹16,000",
    inrNoCodeLink: "",
  },
  "test-1": {
    label: "Test Course (£1)",
    price: "£1",
    amount: 1,
    currency: "GBP",
    noCodeLink: "https://buy.stripe.com/cNieVcdGm3XS6gTh1ocV205",
    paypalLink: "https://www.paypal.com/ncp/payment/2K52XRCPJE3QG",
    inrPrice: "₹100",
    inrNoCodeLink: "https://buy.stripe.com/3cIeVc6dUbqkbBd3aycV200",
  },
};

async function callAppsScript<T>(action: string, payload: object): Promise<T> {
  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ action, ...payload }),
  });
  if (!res.ok) throw new Error("network_error");
  const data = (await res.json()) as { ok: boolean; error?: string } & Record<string, unknown>;
  if (!data.ok) throw new Error(data.error || "unknown_error");
  return data as T;
}

export interface SignupRequest {
  name: string;
  email: string;
  phone: string;
  organization?: string;
  course?: string;
}

export async function signupUser(body: SignupRequest): Promise<{ ok: true }> {
  return callAppsScript<{ ok: true }>("signup", body);
}

export interface LoginResponse {
  ok: true;
  user: {
    course: any; name: string; email: string; phone: string; organization: string 
};
}

export async function loginUser(email: string): Promise<LoginResponse> {
  return callAppsScript<LoginResponse>("login", { email });
}

export type PaymentStatus = "done" | "failed";

export interface LogPaymentRequest {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  course: string;
  amount: number;
  currency: string;
  orderId?: string;
  status: PaymentStatus;
}

export async function logPayment(body: LogPaymentRequest): Promise<{ ok: true }> {
  return callAppsScript<{ ok: true }>("payment", body);
}

export interface RegisterInterestRequest {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  course: string;
}

export async function registerInterest(body: RegisterInterestRequest): Promise<{ ok: true }> {
  return callAppsScript<{ ok: true }>("register_interest", body);
}

export interface RegisterBrochureRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  workExperience: string;
  organization?: string;
}

export async function registerBrochure(body: RegisterBrochureRequest): Promise<{ ok: true }> {
  return callAppsScript<{ ok: true }>("register", body);
}

export interface RssItem {
  title: string;
  link: string;
  description: string;
  pubDate: number;
  pubDateIso: string;
  authors: string[];
  source: string;
}

interface Rss2JsonItem {
  title?: string;
  link?: string;
  pubDate?: string;
  description?: string;
  content?: string;
  author?: string;
  categories?: string[];
}

interface Rss2JsonResponse {
  status: string;
  feed?: { title?: string; link?: string; description?: string };
  items?: Rss2JsonItem[];
  message?: string;
}

// Boilerplate phrases that appear at the end of blog/news feeds — strip these.
const BOILERPLATE_PATTERNS = [
  /related\s+posts?.*/i,
  /read\s+more.*/i,
  /continue\s+reading.*/i,
  /subscribe\s+to.*/i,
  /copyright\s+\d{4}.*/i,
  /all\s+rights\s+reserved.*/i,
  /privacy\s+policy.*/i,
  /terms\s+of\s+use.*/i,
  /the\s+post\s+.+\s+appeared\s+first.*/i,
];

const DISPLAY_SUMMARY_MIN_WORDS = 200;
const DISPLAY_SUMMARY_MAX_WORDS = 420;
const MIN_ACCEPTABLE_SUMMARY_WORDS = 140;
const READER_CACHE_TTL_MS = 30 * 60 * 1000;
const readerCache = new Map<string, { ts: number; text: string }>();
const READER_JUNK_PATTERNS = [
  /^our use of cookies$/i,
  /^accept recommended cookies$/i,
  /^proceed with necessary cookies only$/i,
  /^close menu$/i,
  /^skip to (main content|navigation|content|footer)$/i,
  /^back to top$/i,
  /^follow us$/i,
  /^useful links$/i,
  /^search$/i,
  /^menu$/i,
  /^home$/i,
  /^share$/i,
  /^subscribe$/i,
  /^newsletter$/i,
  /^advertisement$/i,
  /^advertising$/i,
  /^cookie policy$/i,
  /^privacy policy$/i,
  /^terms of use$/i,
  /^all rights reserved$/i,
  /^sitemap$/i,
  /^contact us$/i,
  /^sign up$/i,
  /^register$/i,
  /^log in$/i,
  /^login$/i,
  /we use necessary cookies/i,
  /we use cookies/i,
  /we(?:'d| would) also like to use non-essential cookies/i,
  /accept recommended settings/i,
  /accept additional cookies/i,
  /reject additional cookies/i,
  /accept analytics/i,
  /campaign advertising cookies/i,
  /\[[x ]\]\s*functional/i,
  /\[[x ]\]\s*non-functional/i,
  /proceed with necessary cookies only/i,
  /this site uses cookies/i,
  /for more information.*cookie policy/i,
  /please enable javascript/i,
  /skip to main content/i,
  /skip to search box/i,
  /get in touch by phone/i,
  /link is external/i,
  /^see all updates/i,
  /^first published:/i,
  /^last updated:/i,
  /^sign up to receive/i,
  /^respond to our/i,
  /^find our most up-to-date/i,
  /^speaker:\s/i,
  /^note:\s/i,
  /^this is a drafted speech/i,
  /^this is a prepared speech/i,
  /^may differ from the delivered/i,
  /^\d{2}[\/-]\d{2}[\/-]\d{4}/,        // lines starting with a date e.g. "21/04/2026..."
  // US .gov website security notices (appear on every .gov page Jina scrapes)
  /\.gov website belongs to an official government/i,
  /https?:\/\/ means you.{0,10}safely connected/i,
  /share sensitive information only on official/i,
  // Federal Reserve site boilerplate
  /the federal reserve, the central bank of the united states/i,
  /provides the nation with a safe, flexible/i,
  /regional banks and foreign banks with u\.?s/i,
  // Contact / address boilerplate
  /for media inquiries,?\s+please/i,
  /constitution avenue n\.?w\./i,
  /washington, d\.?c\.?\s+\d{5}/i,
  // SEC / regulatory site boilerplate
  /the securities and exchange commission/i,
  /sec\.gov is an official website/i,
  /official website of the united states government/i,
];

// Patterns that indicate navigation items — only apply when the line is very short (≤ 6 words).
const NAV_WORD_PATTERNS = [
  /publications/i,
  /policy and guidance/i,
  /corporate documents/i,
  /notices and decisions/i,
  /open consultations/i,
  /receive new and updated warnings/i,
];

function stripHtml(value: string): string {
  return value
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|section|article|h1|h2|h3|h4|h5|h6|li|ul|ol|table|tr|blockquote)>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/[ \t\f\v]+/g, " ")
    .replace(/ *\n+ */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function countWords(value: string): number {
  return value.trim() ? value.trim().split(/\s+/).length : 0;
}

function stripMarkdown(value: string): string {
  return value
    // Jina reader header metadata lines
    .replace(/^Title:\s.*$/gim, "")
    .replace(/^URL Source:\s.*$/gim, "")
    .replace(/^Published Time:\s.*$/gim, "")
    .replace(/^Markdown Content:\s*$/gim, "")
    .replace(/^Description:\s.*$/gim, "")
    // Publication metadata that appears inline (e.g. FCA "First published: 21/04/2026")
    .replace(/\bfirst published:[^\n]*/gi, "")
    .replace(/\blast updated:[^\n]*/gi, "")
    .replace(/\bsee all updates\b/gi, " ")
    // Images — strip entirely
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    // Bold / italic markers — strip markers, keep text
    .replace(/\*{1,3}([^*\n]+)\*{1,3}/g, "$1")
    .replace(/_{1,3}([^_\n]+)_{1,3}/g, "$1")
    // Links — keep text with surrounding spaces so words don't merge
    .replace(/\[([^\]]*)\]\([^)]*\)/g, " $1 ")
    // Jina-injected annotations
    .replace(/\blinks?\s+is\s+external\b/gi, " ")
    .replace(/\bopen\s+in\s+new\s+tab\b/gi, " ")
    // Code spans
    .replace(/`{1,3}[^`]*`{1,3}/g, " ")
    // Block-level markdown
    .replace(/^>\s+/gm, "")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\s#{2,}\s*/g, " ")     // inline #### markers
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/\|/g, " ")
    // Normalise whitespace within lines (collapse multiple spaces / tabs)
    .replace(/[^\S\n]+/g, " ")
    .replace(/\r/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function isJunkLine(value: string): boolean {
  const line = value.trim();
  if (!line) return true;
  if (READER_JUNK_PATTERNS.some((re) => re.test(line))) return true;
  if (BOILERPLATE_PATTERNS.some((re) => re.test(line))) return true;
  const words = countWords(line);
  if (words <= 6 && NAV_WORD_PATTERNS.some((re) => re.test(line))) return true;
  if (line.length < 20 && !/[.!?]$/.test(line)) return true;
  if (/^(?:[A-Z][a-z]+(?:\s+[A-Z][a-z]+){0,4})$/.test(line) && !/[.!?]$/.test(line)) return true;
  if (/^[A-Za-z][A-Za-z\s/&-]{0,40}$/.test(line) && words <= 5 && !/[.!?]$/.test(line)) return true;
  return false;
}

function junkMatchCount(value: string): number {
  return READER_JUNK_PATTERNS.reduce((count, re) => count + (re.test(value) ? 1 : 0), 0);
}

function estimateSentenceCount(value: string): number {
  return value
    .replace(/([.!?])\s+(?=[A-Z0-9"'(])/g, "$1\n")
    .split(/\n+/)
    .map((part) => part.trim())
    .filter((part) => countWords(part) >= 6).length;
}

function isNavigationLikeLine(value: string): boolean {
  const line = value.trim();
  if (!line) return true;
  if (isJunkLine(line)) return true;
  if (/^(?:how to|find our|see our|go to|considering|information for|report a|notification and disclosure|supporting fintech|our vision and priorities|listing applications|uk securities|respond to|sign up to|receive new|receive daily|close menu|open consultations|see current|see our current|see all updates|first published|last updated|speech by|speeches|speaker:|note:|this is a drafted|this is a prepared|published:|updated:|read more|continue reading|board of governors|20th street|for media inquiries|share sensitive|a \.gov|a lock)/i.test(line)) {
    return true;
  }
  if (/[.!?]["')\]]?$/.test(line)) return false;
  const words = countWords(line);
  if (words <= 18) return true;
  if (/:/.test(line) && words <= 20) return true;
  return false;
}

function isJunkHeavyText(value: string): boolean {
  const text = value.trim();
  if (!text) return true;
  if (junkMatchCount(text) >= 2) return true;
  if (/\[[x ]\]/i.test(text) && /(cookie|functional|non-functional)/i.test(text)) return true;
  if (/(accept|reject|necessary|additional)\s+cookies/i.test(text)) return true;
  return false;
}

function dedupeLines(lines: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const line of lines) {
    const key = line.toLowerCase().trim();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    result.push(line);
  }
  return result;
}

function cleanReadableText(value: string): string {
  const cleaned = stripHtml(stripMarkdown(value));
  const lines = dedupeLines(
    cleaned
      .split(/\n+/)
      .map((line) => line.trim())
      .filter((line) => !isJunkLine(line))
  );
  return lines.join("\n\n").trim();
}

function isArticleLikeText(value: string): boolean {
  const text = cleanReadableText(value);
  if (!text || isJunkHeavyText(text)) return false;

  const lines = text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  const wordCount = countWords(text);
  const sentenceCount = estimateSentenceCount(text);
  const navLikeCount = lines.filter(isNavigationLikeLine).length;

  if (wordCount >= 60 && sentenceCount < 2) return false;
  if (wordCount >= 120 && sentenceCount < 3) return false;
  if (lines.length >= 4 && navLikeCount / lines.length > 0.45) return false;
  return true;
}

function splitIntoSentences(value: string): string[] {
  return cleanReadableText(value)
    .replace(/([.!?])\s+(?=[A-Z0-9"'(])/g, "$1\n")
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => {
      if (s.length < 35) return false;
      if (isJunkHeavyText(s)) return false;
      if (BOILERPLATE_PATTERNS.some((re) => re.test(s))) return false;
      if (isNavigationLikeLine(s)) return false;
      return true;
    });
}

function buildParagraphSummary(raw: string, minWords = DISPLAY_SUMMARY_MIN_WORDS, hardMax = DISPLAY_SUMMARY_MAX_WORDS): string {
  const sentences = splitIntoSentences(raw);
  if (sentences.length === 0) return "";

  const paragraphs: string[] = [];
  let currentParagraph: string[] = [];
  let currentParagraphWords = 0;
  let totalWords = 0;
  const PARAGRAPH_TARGET_WORDS = 95;

  for (const sentence of sentences) {
    const sentenceWords = countWords(sentence);
    if (sentenceWords < 6) continue;
    if (totalWords >= minWords && totalWords + sentenceWords > hardMax) break;
    if (totalWords + sentenceWords > hardMax) break;

    if (currentParagraphWords > 0 && currentParagraphWords + sentenceWords > PARAGRAPH_TARGET_WORDS) {
      paragraphs.push(currentParagraph.join(" "));
      currentParagraph = [];
      currentParagraphWords = 0;
    }

    currentParagraph.push(sentence);
    currentParagraphWords += sentenceWords;
    totalWords += sentenceWords;
  }

  if (currentParagraph.length > 0) {
    paragraphs.push(currentParagraph.join(" "));
  }

  return paragraphs.join("\n\n").trim();
}

function toReaderUrl(url: string): string | null {
  if (!/^https?:\/\//i.test(url)) return null;
  return `https://r.jina.ai/${url}`;
}

async function fetchReadableText(url: string): Promise<string> {
  const cacheHit = readerCache.get(url);
  if (cacheHit && Date.now() - cacheHit.ts < READER_CACHE_TTL_MS) {
    return cacheHit.text;
  }

  const readerUrl = toReaderUrl(url);
  if (!readerUrl) return "";

  const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
  const timeoutId = controller
    ? setTimeout(() => controller.abort(), 12000)
    : null;

  try {
    const res = await fetch(readerUrl, {
      cache: "no-store",
      signal: controller?.signal,
    });
    if (!res.ok) throw new Error(`reader_status_${res.status}`);
    const text = cleanReadableText(await res.text());
    if (text) {
      readerCache.set(url, { ts: Date.now(), text });
    }
    return text;
  } finally {
    if (timeoutId !== null) clearTimeout(timeoutId);
  }
}

function extractSummary(description: string, content: string): string {
  const cleanDesc = stripHtml(description);
  const cleanContent = stripHtml(content);

  // Use whichever source has more words
  const raw = cleanContent.split(" ").length > cleanDesc.split(" ").length
    ? cleanContent
    : cleanDesc;

  if (!raw.trim()) return "";

  // Split into sentences on ". ", "! ", "? " followed by a capital or digit
  const sentences = raw
    .replace(/([.!?])\s+(?=[A-Z0-9"‘’“”])/g, "$1\n")
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => {
      if (s.length < 20) return false;
      // Drop boilerplate
      return !BOILERPLATE_PATTERNS.some((re) => re.test(s));
    });

  // Accumulate sentences: keep going until at least 300 words, hard stop at 800.
  const MIN_WORDS = 300;
  const HARD_MAX = 800;
  const parts: string[] = [];
  let wordCount = 0;

  for (const sentence of sentences) {
    const w = sentence.split(/\s+/).length;
    if (wordCount >= MIN_WORDS && wordCount + w > HARD_MAX) break;
    if (wordCount + w > HARD_MAX) break;
    parts.push(sentence);
    wordCount += w;
  }

  return parts.join(" ");
}

export function hasUsableSummary(summary: string): boolean {
  const text = cleanReadableText(summary);
  return countWords(text) >= MIN_ACCEPTABLE_SUMMARY_WORDS
    && isArticleLikeText(text);
}

export async function buildRichSummary(url: string, ...fallbackSources: string[]): Promise<string> {
  const candidates = fallbackSources
    .map((source) => cleanReadableText(source))
    .filter((source) => source.length > 0);

  if (url) {
    try {
      const scraped = await fetchReadableText(url);
      if (scraped) candidates.unshift(scraped);
    } catch (err) {
      console.warn("[reader] fetch failed", url, err);
    }
  }

  const ranked = [...candidates].sort((a, b) => countWords(b) - countWords(a));
  for (const candidate of ranked) {
    if (!isArticleLikeText(candidate)) continue;
    const summary = buildParagraphSummary(candidate);
    if (hasUsableSummary(summary)) return summary;
  }

  const combined = buildParagraphSummary(ranked.join(" "), 120, DISPLAY_SUMMARY_MAX_WORDS);
  if (hasUsableSummary(combined)) return combined;
  return "";
}

async function fetchSingleFeedViaRss2Json(url: string): Promise<RssItem[]> {
  const endpoint = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}&num=50`;
  const res = await fetch(endpoint, { cache: "no-store" });
  if (!res.ok) throw new Error(`rss2json_status_${res.status}`);
  const data = (await res.json()) as Rss2JsonResponse;
  if (data.status !== "ok" || !Array.isArray(data.items)) {
    throw new Error(data.message || "rss2json_bad_response");
  }
  const sourceName = data.feed?.title || new URL(url).hostname.replace(/^www\./, "");
  return data.items
    .filter((item) => (item.title || "").trim().length > 0 && (item.link || "").trim().length > 0)
    .map((item) => {
      const description = extractSummary(item.description || "", item.content || "");
      const pub = item.pubDate ? new Date(item.pubDate.replace(" ", "T") + "Z") : new Date();
      const pubMs = Number.isNaN(pub.getTime()) ? Date.now() : pub.getTime();
      return {
        title: stripHtml(item.title || "").slice(0, 240),
        link: item.link || "",
        description,
        pubDate: pubMs,
        pubDateIso: new Date(pubMs).toISOString(),
        authors: item.author ? [item.author] : [],
        source: sourceName,
      } satisfies RssItem;
    });
}

export async function fetchRssFeeds(urls: string[]): Promise<RssItem[]> {
  const results = await Promise.all(
    urls.map(async (url) => {
      try {
        return await fetchSingleFeedViaRss2Json(url);
      } catch (err) {
        console.warn("[rss] feed failed", url, err);
        return [] as RssItem[];
      }
    })
  );
  const merged = results.flat();
  merged.sort((a, b) => b.pubDate - a.pubDate);
  const seen = new Set<string>();
  const unique: RssItem[] = [];
  for (const item of merged) {
    const key = item.link || item.title;
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(item);
  }
  return unique;
}
