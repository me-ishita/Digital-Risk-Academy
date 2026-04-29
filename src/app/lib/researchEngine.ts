import { buildRichSummary, fetchRssFeeds, hasUsableSummary, type RssItem } from "./api";

export type ResearchDomain = "Investment Banking" | "Digital Risk" | "Cyber Risk";

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  affiliation: string;
  year: number;
  venue: string;
  domain: ResearchDomain;
  image: string;
  summary: string;
  keyFindings: string[];
  sourceUrl: string;
}

interface DomainFeeds {
  domain: ResearchDomain;
  feeds: string[];
  venue: string;
  imagePool: string[];
}

const DOMAIN_FEEDS: DomainFeeds[] = [
  {
    domain: "Investment Banking",
    feeds: [
      "https://spiral.imperial.ac.uk/feed/rss_2.0.xml",
      "http://export.arxiv.org/rss/q-fin.RM",
      "http://export.arxiv.org/rss/q-fin.GN",
      "http://export.arxiv.org/rss/q-fin.PM",
      "https://www.federalreserve.gov/feeds/feds.xml",
      "https://www.federalreserve.gov/feeds/ifdp.xml",
      "https://www.bankofengland.co.uk/rss/publications",
      "https://www.ecb.europa.eu/rss/wpapers.html",
      "https://www.bis.org/doclist/bis_fsi_publs.rss",
    ],
    venue: "Finance Research",
    imagePool: [
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
    ],
  },
  {
    domain: "Digital Risk",
    feeds: [
      "https://spiral.imperial.ac.uk/feed/rss_2.0.xml",
      "http://export.arxiv.org/rss/cs.CY",
      "http://export.arxiv.org/rss/q-fin.RM",
      "https://www.federalreserve.gov/feeds/feds_notes.xml",
      "https://www.bankofengland.co.uk/rss/publications",
      "https://www.ecb.europa.eu/rss/publications.html",
      "https://www.ecb.europa.eu/rss/research_bulletin.html",
      "https://www.bis.org/doclist/reshub_papers.rss",
    ],
    venue: "Digital Risk Research",
    imagePool: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop",
    ],
  },
  {
    domain: "Cyber Risk",
    feeds: [
      "https://spiral.imperial.ac.uk/feed/rss_2.0.xml",
      "http://export.arxiv.org/rss/cs.CR",
      "http://export.arxiv.org/rss/cs.NI",
      "http://export.arxiv.org/rss/cs.CY",
    ],
    venue: "arXiv Cryptography & Security",
    imagePool: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=900&auto=format&fit=crop",
    ],
  },
];

const SESSION_KEY = "research_cache_v11";
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes
let inMemoryCache: ResearchPaper[] | null = null;
let inMemoryCacheTs = 0;

const FALLBACK_RESEARCH: ResearchPaper[] = [
  {
    id: "fallback-research-1",
    title: "Stress Testing Liquidity Risk Across Concentrated Funding Profiles",
    authors: ["Digital Risk Academy"],
    affiliation: "Digital Risk Academy",
    year: 2026,
    venue: "Research Brief",
    domain: "Investment Banking",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=900&auto=format&fit=crop",
    summary: "This brief examines how funding concentration, collateral mobility, and scenario design affect liquidity resilience under stressed market conditions. Institutions with concentrated funding profiles face amplified liquidity pressure when market conditions deteriorate, as the withdrawal of a small number of large funding counterparties can trigger rapid outflows that existing liquidity buffers struggle to absorb.\n\nThe research evaluates how scenario design influences the usefulness of stress test outputs. Generic stress scenarios that apply uniform haircuts and withdrawal assumptions frequently fail to capture the idiosyncratic features of concentrated funding profiles. Scenarios that reflect the specific counterparty composition of a firm's funding base, combined with realistic assumptions about counterparty behaviour in stress, produce results that are more useful for capital planning and contingency funding preparedness.\n\nCollateral mobility is identified as a key variable. Firms that hold high-quality liquid assets in legally accessible structures, and that have pre-positioned collateral at central banks and clearing houses before stress materialises, demonstrate stronger recovery profiles in simulation. Board and senior management reporting is most effective when liquidity stress results are paired with actionable recovery steps, enabling decision-makers to assess operational readiness rather than simply reviewing compliance with regulatory minimums.",
    keyFindings: [
      "Counterparty-specific scenario design outperforms generic stress assumptions for concentrated funding profiles.",
      "Pre-positioned collateral at central banks significantly reduces intraday liquidity execution risk under stress.",
      "Board reporting must pair stress outcomes with specific, timed recovery actions to be operationally useful.",
    ],
    sourceUrl: "https://example.com/research/fallback-research-1",
  },
  {
    id: "fallback-research-2",
    title: "Selecting Capital Allocation Metrics for Higher-Rate Environments",
    authors: ["Digital Risk Academy"],
    affiliation: "Digital Risk Academy",
    year: 2026,
    venue: "Research Brief",
    domain: "Investment Banking",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=900&auto=format&fit=crop",
    summary: "The paper compares return-on-capital lenses for coverage, structuring, and advisory teams operating with tighter funding spreads. As interest rates have remained elevated, the traditional metric frameworks used to evaluate deal profitability have required recalibration to reflect the true economic cost of holding and financing positions.\n\nReturn on regulatory capital, risk-weighted asset efficiency, and return on tangible equity are the three primary lenses in common use, but each produces different signals about the attractiveness of specific transactions. Coverage teams focused on fee generation may optimise for different metrics than balance sheet teams that carry financing risk across deal duration. The paper argues that selecting the right metric for each business function, rather than applying a single group-wide target, produces more accurate signals about value creation.\n\nHigher-rate environments increase the value of scenario-aware capital planning. When funding costs are more variable, the range of plausible return outcomes across a deal's life is wider, and capital allocation decisions benefit from being evaluated across multiple rate and spread scenarios rather than against a single point estimate. The paper recommends regular reviews of metric design alongside strategic planning cycles to ensure alignment with current funding cost realities and business priorities.",
    keyFindings: [
      "Single group-wide return metrics produce misleading signals when applied to heterogeneous business functions.",
      "Metric selection shapes origination behaviour more reliably than adjusting headline return targets.",
      "Scenario-aware capital planning becomes materially more valuable in higher-rate, higher-volatility environments.",
    ],
    sourceUrl: "https://example.com/research/fallback-research-2",
  },
  {
    id: "fallback-research-3",
    title: "Building Measurable Resilience Controls for Digital Banking Platforms",
    authors: ["Digital Risk Academy"],
    affiliation: "Digital Risk Academy",
    year: 2026,
    venue: "Research Brief",
    domain: "Digital Risk",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
    summary: "A practical framework for turning platform resilience into measurable controls, test evidence, and executive reporting. Digital banking platforms have become critical infrastructure for a growing share of financial transactions, and regulators in multiple jurisdictions have raised expectations about the standards to which these platforms must perform.\n\nThe framework proposes a control hierarchy that begins with the identification of important business services and works down to the specific technical and operational controls that underpin service delivery. Each control is assigned a measurable objective, a testing method that generates evidence of compliance, and an owner responsible for maintaining and attesting to control effectiveness.\n\nTesting methodology is a central focus of the research. The paper distinguishes between tabletop exercises, which evaluate decision-making and communication protocols, and technical tests, which validate actual recovery capability. Both types of test are necessary but serve different purposes. Technical tests must include scenarios that reflect realistic failure modes, including infrastructure failures, third-party outages, and data corruption events, rather than only testing against planned maintenance windows.\n\nExecutive reporting is most useful when it moves beyond binary pass or fail assessments and provides context about the severity, probability, and potential impact of identified gaps. Boards that receive resilience reports structured in this way are better positioned to make informed decisions about investment in control improvements and to assess whether the firm's resilience posture is consistent with its stated risk appetite.",
    keyFindings: [
      "Control hierarchies grounded in important business services make resilience objectives measurable and auditable.",
      "Technical recovery tests must simulate realistic failure modes beyond planned maintenance scenarios.",
      "Severity-contextualised board reporting enables strategic investment decisions rather than compliance checkbox responses.",
    ],
    sourceUrl: "https://example.com/research/fallback-research-3",
  },
  {
    id: "fallback-research-4",
    title: "Identity Assurance Design for Reduced-Friction Fraud Detection",
    authors: ["Digital Risk Academy"],
    affiliation: "Digital Risk Academy",
    year: 2026,
    venue: "Research Brief",
    domain: "Digital Risk",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=900&auto=format&fit=crop",
    summary: "This study explores how layered identity checks can improve fraud detection without creating unnecessary user friction. As financial services migrate to fully digital channels, the friction associated with identity verification has become both a competitive differentiator and a security control, and institutions must balance these objectives carefully.\n\nThe research evaluates a range of identity assurance approaches, from knowledge-based authentication through to biometric verification and device intelligence scoring. Each approach carries different tradeoffs between security effectiveness, operational cost, and user experience. Knowledge-based authentication has become increasingly ineffective as personally identifiable information is more readily available to fraudsters through data breaches and social engineering.\n\nStep-up controls, which apply additional verification only when a risk threshold is exceeded, emerge from the research as the most effective design pattern for balancing security and experience. Implementing step-up controls effectively requires a real-time risk assessment engine that evaluates session characteristics, device signals, and behavioural patterns to generate a risk score that determines which authentication level to apply.\n\nSynthetic identity fraud presents a distinct challenge for identity assurance systems, since the fraudulent identity has been constructed to appear legitimate over time. The paper reviews countermeasures including velocity analysis, network graph analysis, and document verification techniques, and evaluates their effectiveness against different synthetic identity typologies encountered in financial services.",
    keyFindings: [
      "Risk context-triggered step-up authentication reduces friction for legitimate users while maintaining security effectiveness.",
      "Device intelligence signal quality is the binding constraint on step-up control precision.",
      "Synthetic identity detection requires network graph and velocity analysis beyond standard document verification.",
    ],
    sourceUrl: "https://example.com/research/fallback-research-4",
  },
  {
    id: "fallback-research-5",
    title: "Third-Party Concentration Analysis for Critical Technology Services",
    authors: ["Digital Risk Academy"],
    affiliation: "Digital Risk Academy",
    year: 2026,
    venue: "Research Brief",
    domain: "Digital Risk",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=900&auto=format&fit=crop",
    summary: "The paper proposes a control model for mapping provider dependencies, substitution options, and concentration thresholds. The concentration of critical technology services among a small number of large providers has become a systemic concern for financial regulators, who worry that a significant failure or disruption at a major provider could cascade across multiple firms simultaneously.\n\nThe control model begins with a service inventory that identifies all technology services classified as critical to the delivery of important business services. For each critical service, the model maps the underlying provider and infrastructure dependencies, including any shared infrastructure between nominally different vendors. This mapping process frequently reveals hidden concentration risk that is not visible when third-party risk assessments are conducted at the vendor level alone.\n\nSubstitution analysis is applied to each critical service to evaluate how quickly and at what cost the service could be migrated to an alternative provider in the event of disruption. The research finds that substitution timelines are systematically underestimated by firms that have not conducted detailed technical assessments of integration complexity, data portability requirements, and regulatory approval timelines.\n\nConcentration thresholds provide a framework for governance decision-making. Once concentration is measured, the model enables the definition of thresholds above which additional controls, contractual protections, fallback arrangements, or active substitution exercises are required. The paper recommends that these thresholds be agreed at board or senior management level and reviewed annually alongside strategic technology planning.",
    keyFindings: [
      "Infrastructure-level dependency mapping reveals hidden concentration that vendor-level assessments miss.",
      "Substitution timelines are systematically underestimated without detailed technical integration assessments.",
      "Board-approved concentration thresholds create a governance trigger for mandatory diversification or fallback controls.",
    ],
    sourceUrl: "https://example.com/research/fallback-research-5",
  },
  {
    id: "fallback-research-6",
    title: "Measuring Behavior Change After Targeted Security Training",
    authors: ["Digital Risk Academy"],
    affiliation: "Digital Risk Academy",
    year: 2026,
    venue: "Research Brief",
    domain: "Digital Risk",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=900&auto=format&fit=crop",
    summary: "This paper evaluates whether targeted training reduces risky actions more effectively than generic awareness programs. The security training market has grown substantially over the past decade, but evidence of actual behaviour change produced by training investments has been limited. Most programmes measure inputs such as completion rates and knowledge scores rather than outputs such as observed changes in employee behaviour under real conditions.\n\nThe research uses phishing simulation data, help desk reporting patterns, and access log analysis to evaluate behaviour change across financial services employees who participated in both generic and role-specific training programmes over a two-year period. The results show a statistically significant difference in simulation click rates and credential submission rates between employees who received targeted training and those in generic programme cohorts.\n\nRetention of security practices is stronger in role-specific training because the content is perceived as directly relevant to daily work tasks. Employees in high-privilege roles who received privilege-aware training showed the greatest behaviour change and the fastest recovery following a simulated compromise event.\n\nThe paper recommends that security teams move away from completion-based measurement frameworks entirely, replacing them with outcome-based metrics that track sustained behaviour change over time. Immediate coaching interventions, in which a brief educational message is delivered immediately after an unsuccessful simulation, show the strongest effect size of any intervention evaluated in the study.",
    keyFindings: [
      "Role-specific simulation cohorts show significantly lower click and credential submission rates than generic training groups.",
      "High-privilege account holders benefit most from privilege-aware training content and targeted simulation scenarios.",
      "Immediate post-failure coaching produces the largest and most sustained behaviour change of any intervention tested.",
    ],
    sourceUrl: "https://example.com/research/fallback-research-6",
  },
  {
    id: "fallback-research-7",
    title: "Covenant Pressure and Structuring Discipline in Private Credit",
    authors: ["Digital Risk Academy"],
    affiliation: "Digital Risk Academy",
    year: 2026,
    venue: "Research Brief",
    domain: "Investment Banking",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
    summary: "A structural analysis of how tighter covenants and refinancing risk are changing credit committee expectations. Private credit markets expanded rapidly during the period of low interest rates, with lending standards loosening in response to competitive pressure between direct lenders seeking to deploy growing pools of committed capital.\n\nThe higher-rate environment has exposed weaknesses in some of that lending, and credit committees are now recalibrating their approach to structuring and documentation. Maintenance covenants are being reinstated in transactions from which they were previously absent or negotiated to levels so loose as to be ineffective. Credit committees are requiring that downside scenarios be modelled against specific covenant thresholds, demonstrating that a realistic deterioration in performance would trigger a renegotiation dialogue early enough to allow corrective action before default.\n\nRefinancing risk is now assessed at origination as a first-order credit variable rather than a secondary consideration. Deals in which the refinancing wall falls during a period of projected stress in the borrower's sector receive heightened scrutiny, and in some cases are declined or restructured to include more equity cushion. Underwriting assumptions are being tested against scenarios that combine revenue decline with the current cost of refinancing, rather than using the lower rates at which original facilities were priced.\n\nThe effect on deal economics is visible in pricing spreads and structure, with lenders requiring wider margins and tighter documentation as compensation for the risks they are taking on in the current environment.",
    keyFindings: [
      "Maintenance covenant reinstatement is the primary structural change in direct lending underwriting since the rate reset.",
      "Refinancing wall timing relative to sector stress projections is now a first-order origination screening criterion.",
      "Wider pricing spreads and tighter documentation reflect the permanent repricing of credit risk in private markets.",
    ],
    sourceUrl: "https://example.com/research/fallback-research-7",
  },
  {
    id: "fallback-research-8",
    title: "Workflow Automation for Continuous Client Due Diligence",
    authors: ["Digital Risk Academy"],
    affiliation: "Digital Risk Academy",
    year: 2026,
    venue: "Research Brief",
    domain: "Digital Risk",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop",
    summary: "The paper outlines how firms can combine watchlists, triggers, and exception handling into a continuous monitoring model. Financial crime compliance functions are under pressure to demonstrate that their due diligence programmes detect changes in client risk profiles promptly, rather than only at scheduled review intervals.\n\nThe automation architecture proposed in the paper integrates three core components: a signal collection layer that aggregates data from external sources such as sanctions lists, adverse media feeds, and corporate registry updates; a risk engine that evaluates incoming signals against client profiles and generates alerts when significant changes are detected; and a case management system that routes alerts to appropriately skilled reviewers and tracks resolution timelines.\n\nException handling is identified as the operationally critical element of the model. High volumes of alerts can render continuous monitoring programmes counterproductive if the review workload exceeds available capacity. The paper presents a prioritisation framework that ranks alerts by a combination of signal severity, client risk rating, and business relationship importance, ensuring that the most material alerts receive immediate attention while lower-priority items are processed within defined service-level windows.\n\nData quality is the foundational requirement. The research finds that continuous monitoring programmes generate significantly higher false-positive rates when client profile data is incomplete or contains errors inherited from manual onboarding processes. Remediation of underlying data quality issues before implementing automation is the single most important factor in determining the effectiveness of continuous monitoring at scale.",
    keyFindings: [
      "Three-layer architecture combining signal ingestion, risk engine, and case management is the effective design pattern.",
      "Alert prioritisation by severity and client risk rating prevents continuous monitoring from overwhelming compliance capacity.",
      "Data quality remediation before automation is the single greatest determinant of false-positive rate at scale.",
    ],
    sourceUrl: "https://example.com/research/fallback-research-8",
  },
  {
    id: "fallback-research-9",
    title: "Incident Disclosure Readiness in Shorter Reporting Windows",
    authors: ["Digital Risk Academy"],
    affiliation: "Digital Risk Academy",
    year: 2026,
    venue: "Research Brief",
    domain: "Digital Risk",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=900&auto=format&fit=crop",
    summary: "This brief reviews how incident response teams can compress triage, escalation, and evidence collection into shorter disclosure windows. Regulatory reporting requirements for significant cyber incidents have tightened across major jurisdictions, with DORA in Europe mandating four-hour initial notification windows and the SEC in the United States requiring four-business-day materiality reporting.\n\nTriage speed is the first constraint. Reaching a classification decision within hours of incident detection requires pre-defined criteria for what constitutes a major or material incident, agreed decision rights that allow operational security teams to invoke the disclosure process without waiting for executive approval, and tooling that surfaces relevant evidence to decision-makers rapidly. Organisations that have not pre-agreed their classification criteria frequently spend hours in internal debate rather than preparing regulatory notifications.\n\nLegal integration must begin at the moment a potential major incident is detected, not after containment has been achieved. Regulatory notifications are legal documents that carry significant consequences if they contain inaccuracies or omissions. Pre-built notification templates, reviewed and approved by regulatory counsel in advance, enable notifications to be drafted quickly with accurate technical content inserted as the incident evolves.\n\nEvidence preservation is also time-sensitive. Forensic evidence of incident origin, progression, and impact must be collected contemporaneously. The brief reviews automated preservation tooling that captures and timestamps evidence across endpoint, network, and cloud environments from the point of initial detection, ensuring that regulators receive complete and credible evidence submissions within the required windows.",
    keyFindings: [
      "Pre-agreed classification criteria and decision rights are the prerequisite for meeting four-hour DORA notification windows.",
      "Pre-built regulatory notification templates reviewed by legal counsel eliminate the drafting bottleneck during live incidents.",
      "Automated forensic preservation from initial detection prevents evidence degradation and supports credible regulatory submissions.",
    ],
    sourceUrl: "https://example.com/research/fallback-research-9",
  },
  {
    id: "fallback-research-10",
    title: "Adversarial Machine Learning Threats in Financial Fraud Detection Systems",
    authors: ["Digital Risk Academy"],
    affiliation: "Digital Risk Academy",
    year: 2026,
    venue: "Research Brief",
    domain: "Cyber Risk",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=900&auto=format&fit=crop",
    summary: "This paper examines how adversarial inputs can degrade the performance of machine learning models used in fraud detection and cyber threat classification across financial institutions. Attackers increasingly exploit model blind spots by crafting inputs that evade detection while achieving their objectives, undermining the reliability of AI-powered defences. The study reviews published attack taxonomies and maps them to real-world financial threat scenarios, including account takeover, synthetic identity fraud, and payment anomaly evasion. Defence strategies including adversarial training, input validation, and model ensembling are evaluated for their effectiveness under different threat models.",
    keyFindings: [
      "Adversarial examples can reduce fraud model accuracy by over 30% without triggering alerts.",
      "Ensemble approaches and input validation together offer stronger resistance than either alone.",
      "Regular red-team exercises against production models are essential for maintaining detection reliability.",
    ],
    sourceUrl: "https://example.com/research/fallback-research-10",
  },
  {
    id: "fallback-research-11",
    title: "Zero-Trust Architecture Adoption in Critical Financial Infrastructure",
    authors: ["Digital Risk Academy"],
    affiliation: "Digital Risk Academy",
    year: 2026,
    venue: "Research Brief",
    domain: "Cyber Risk",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=900&auto=format&fit=crop",
    summary: "This study assesses the maturity and implementation challenges of zero-trust network architecture across systemically important financial institutions. Traditional perimeter-based security models have proven insufficient against insider threats and lateral movement by external attackers. The paper surveys deployment patterns across authentication, micro-segmentation, endpoint verification, and least-privilege access controls, drawing on regulatory guidance from NIST, FCA, and the Bank of England. Common barriers to adoption—including legacy system integration, operational complexity, and staff training—are identified alongside recommended sequencing strategies for phased rollouts.",
    keyFindings: [
      "Most institutions remain at early-stage zero-trust maturity despite rising regulatory expectations.",
      "Micro-segmentation delivers the strongest risk reduction per unit of implementation effort.",
      "Legacy infrastructure compatibility is the primary barrier cited by security and architecture teams.",
    ],
    sourceUrl: "https://example.com/research/fallback-research-11",
  },
  {
    id: "fallback-research-12",
    title: "Ransomware Resilience Frameworks for Tier-One Banking Operations",
    authors: ["Digital Risk Academy"],
    affiliation: "Digital Risk Academy",
    year: 2026,
    venue: "Research Brief",
    domain: "Cyber Risk",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=900&auto=format&fit=crop",
    summary: "This paper proposes a structured resilience framework for banking institutions facing ransomware threats, integrating prevention, detection, containment, and recovery into a single operational model. High-profile ransomware incidents have demonstrated that no organisation is immune, and that recovery time objectives are frequently missed due to inadequate backup architecture and unclear decision rights during an incident. The framework draws on post-incident reviews from the financial sector and maps controls to regulatory requirements including DORA, FFIEC guidelines, and the Bank of England's operational resilience rules. Particular attention is paid to immutable backup strategies, crisis communication protocols, and board-level escalation triggers.",
    keyFindings: [
      "Immutable off-site backups are the single most effective control for reducing ransomware recovery time.",
      "Decision authority during an active ransomware event must be pre-assigned and rehearsed to avoid delays.",
      "Regulatory reporting obligations under DORA require triage completion within hours, not days.",
    ],
    sourceUrl: "https://example.com/research/fallback-research-12",
  },
];

function hashSeed(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 33 + seed.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function pickImage(domain: ResearchDomain, seed: string): string {
  const feed = DOMAIN_FEEDS.find((d) => d.domain === domain)!;
  const pool = feed.imagePool;
  return pool[hashSeed(seed) % pool.length];
}

function stableId(link: string): string {
  return `paper_${hashSeed(link).toString(36)}`;
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

function dedupePapers(items: ResearchPaper[]): ResearchPaper[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = item.sourceUrl || item.id;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const VENUE_BY_SOURCE: Record<string, string> = {
  "spiral.imperial.ac.uk": "Imperial College London",
  "export.arxiv.org": "arXiv",
  "arxiv.org": "arXiv",
  "federalreserve.gov": "Federal Reserve",
  "bankofengland.co.uk": "Bank of England",
  "ecb.europa.eu": "European Central Bank",
  "bis.org": "BIS",
};

const DOMAIN_KEYWORDS: Record<ResearchDomain, string[]> = {
  "Investment Banking": [
    "bank", "credit", "capital", "liquidity", "equity", "bond", "portfolio",
    "asset pricing", "valuation", "trading", "merger", "acquisition", "deal",
    "loan", "yield", "default", "derivative", "market", "funding",
    "private credit", "securit", "treasury", "intermediation",
  ],
  "Digital Risk": [
    "compliance", "regulation", "regulatory", "governance", "operational resilience",
    "operational risk", "model risk", "third party", "third-party", "outsourcing",
    "conduct", "fraud", "aml", "kyc", "fintech", "payments", "data privacy",
    "privacy", "data protection", "audit", "supervis", "disclosure", "digital",
  ],
  "Cyber Risk": [
    "cyber", "security", "cybersecurity", "privacy-preserving", "cryptograph",
    "ransomware", "phishing", "malware", "vulnerability", "intrusion",
    "network security", "authentication", "zero trust", "software security",
    "threat", "attack", "incident response", "adversarial",
  ],
};

function matchesResearchDomain(item: RssItem, domain: ResearchDomain): boolean {
  const text = `${item.title} ${item.description} ${item.source}`.toLowerCase();
  return DOMAIN_KEYWORDS[domain].some((kw) => text.includes(kw));
}

function resolveVenue(item: RssItem, cf: DomainFeeds): string {
  try {
    const host = new URL(item.link).hostname.replace(/^www\./, "");
    for (const [key, label] of Object.entries(VENUE_BY_SOURCE)) {
      if (host.includes(key)) return label;
    }
  } catch { /* ignore bad urls */ }
  if (item.source) {
    for (const [key, label] of Object.entries(VENUE_BY_SOURCE)) {
      if (item.source.toLowerCase().includes(key)) return label;
    }
  }
  return cf.venue;
}

function generateKeyFindings(text: string): string[] {
  if (!text || text.trim().length < 60) return [];
  const sentences = text
    .replace(/([.!?])\s+(?=[A-Z"''"])/g, "$1\n")
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => {
      if (s.length < 40 || s.length > 400) return false;
      if (/^(read more|subscribe|click here|©|copyright|all rights)/i.test(s)) return false;
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

async function rssToPaper(item: RssItem, cf: DomainFeeds): Promise<ResearchPaper> {
  const published = item.pubDate
    ? new Date(item.pubDate)
    : item.pubDateIso
    ? new Date(item.pubDateIso)
    : new Date();
  const year = published.getFullYear();
  const venue = resolveVenue(item, cf);
  const summary = await buildRichSummary(item.link, item.description, item.title);

  return {
    id: stableId(item.link || item.title),
    title: item.title,
    authors: item.authors.length ? item.authors : [venue],
    affiliation: venue,
    year,
    venue,
    domain: cf.domain,
    image: pickImage(cf.domain, item.link || item.title),
    summary,
    keyFindings: generateKeyFindings(summary),
    sourceUrl: item.link,
  };
}

function readSessionCache(): ResearchPaper[] | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { ts: number; data: ResearchPaper[] };
    if (Date.now() - parsed.ts > CACHE_TTL_MS) return null;
    if (!Array.isArray(parsed.data) || parsed.data.length === 0) return null;
    inMemoryCacheTs = parsed.ts;
    return parsed.data;
  } catch {
    return null;
  }
}

function writeSessionCache(data: ResearchPaper[]): void {
  if (typeof window === "undefined") return;
  if (!Array.isArray(data) || data.length === 0) return;
  try {
    window.sessionStorage.setItem(SESSION_KEY, JSON.stringify({ ts: Date.now(), data }));
  } catch {
    /* quota or disabled storage — ignore */
  }
}

export async function fetchResearch(): Promise<ResearchPaper[]> {
  if (inMemoryCache && inMemoryCache.length > 0 && Date.now() - inMemoryCacheTs < CACHE_TTL_MS) return inMemoryCache;
  const cached = readSessionCache();
  if (cached && cached.length > 0) {
    inMemoryCache = cached;
    return cached;
  }

  let combined: ResearchPaper[] = [];
  try {
    const perDomain = await Promise.all(
      DOMAIN_FEEDS.map(async (df) => {
        try {
          const items = await fetchRssFeeds(df.feeds);
          return items
            .filter((item) => matchesResearchDomain(item, df.domain))
            .slice(0, 6)
            .map((item) => ({ item, feed: df }));
        } catch {
          return [] as Array<{ item: RssItem; feed: DomainFeeds }>;
        }
      })
    );
    const selected = interleaveBuckets(perDomain, 15);
    const enriched = dedupePapers(await Promise.all(
      selected.map(({ item, feed }) => rssToPaper(item, feed))
    ));
    combined = enriched.filter((paper) => hasUsableSummary(paper.summary)).slice(0, 9);
  } catch {
    combined = [];
  }

  if (combined.length === 0) {
    // Don't persist the fallback to session storage — retry the real feeds next visit.
    inMemoryCache = FALLBACK_RESEARCH;
    return FALLBACK_RESEARCH;
  }

  inMemoryCache = combined;
  inMemoryCacheTs = Date.now();
  writeSessionCache(combined);
  return combined;
}

// Alias kept for the existing Research.tsx import name.
export const fetchResearchPapers = fetchResearch;

export async function getPaperById(id: string): Promise<ResearchPaper | null> {
  const all = await fetchResearch();
  const decoded = (() => {
    try {
      return decodeURIComponent(id);
    } catch {
      return id;
    }
  })();
  return all.find((p) => p.id === decoded || p.id === id) ?? null;
}
