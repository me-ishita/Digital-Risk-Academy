"use client";
import { AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { COURSE_DETAILS, logPayment } from "../../lib/api";
import deveshMehtaImage from "../../../assets/Devesh Mehta.png";
import jonHoldenImage from "../../../assets/Jon-Holden.png";
import manuSharmaImage from "../../../assets/Manu Sharma.png";
import melissaDembroskyImage from "../../../assets/Melissa Dembrosky.png";
import rishiSharmaImage from "../../../assets/Rishi Sharma.png";
import linkedinCircleIcon from "../../../assets/linkedin.png";

import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Users,
  Building2,
  School,
  ArrowRight,
  Award,
  Target,
  Briefcase,
  BookOpen,
  TrendingUp,
  Landmark,
  Linkedin,
  MapPin,
  X,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const HERO_PIN_HEIGHT_CLASS = "h-auto md:h-[150vh]";
const HERO_WORD_DURATION_MS = 380;
const HERO_WORD_STAGGER_MS = 70;
const HERO_FIRST_LINE_TOTAL_MS = HERO_WORD_DURATION_MS + (4 - 1) * HERO_WORD_STAGGER_MS;
const HERO_SECOND_LINE_REVEAL_DELAY_MS = HERO_FIRST_LINE_TOTAL_MS + 100;
const HERO_SECOND_LINE_TOTAL_MS = HERO_WORD_DURATION_MS + (6 - 1) * HERO_WORD_STAGGER_MS;
const HERO_DETAILS_REVEAL_DELAY_MS = HERO_SECOND_LINE_REVEAL_DELAY_MS + HERO_SECOND_LINE_TOTAL_MS + 80;

function WordRevealLine({
  text,
  className,
  wordClassName,
  delayMs = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delayMs?: number;
}) {
  return (
    <motion.span
      className={`${className ?? ""} inline-flex flex-wrap justify-center gap-x-4 gap-y-2 whitespace-normal ${wordClassName ?? ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: HERO_WORD_DURATION_MS / 1000,
        delay: delayMs / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {text}
    </motion.span>
  );
}

const advisoryTeam = [
  {
    name: "Manu Sharma",
    intro: "Cybersecurity & Digital Resilience Expert",
    role: "Visiting Professor, Imperial College London · Partner, Grant Thornton UK LLP",
    summary: "Cybersecurity · Digital Resilience · Technology Risk",
    description:
      "Manu brings a distinctive blend of academic and industry experience across cybersecurity, technology risk and digital resilience.",
    profile:
      "Manu Sharma is an experienced cybersecurity and technology risk leader with a strong track record across professional services, digital resilience and advisory. Alongside his industry leadership, he brings an academic perspective through his role as Visiting Professor at Imperial College London. His experience spans cybersecurity strategy, technology risk, digital resilience and helping organisations navigate complex technology and business challenges.",
    areas: [
      "Cybersecurity",
      "Digital Resilience",
      "Technology Risk",
      "Cyber Risk Advisory",
      "Technology Strategy",
    ],
    industryPerspective:
      "Manu brings together academic insight and practical industry experience, offering a perspective on how organisations can strengthen resilience, manage technology risk and respond to an increasingly complex digital environment.",
    location: "London, United Kingdom",
    linkedin: "https://www.linkedin.com/in/manusharmauk/",
    image: manuSharmaImage,
    imageClassName: "",
  },
  {
    name: "Devesh Mehta",
    intro: "Risk & Financial Services Specialist",
    role: "CEO & Co-Founder, Levrara Consulting Group",
    secondaryRole: "Financial Services Strategy & Transformation Leader",
    summary: "Financial Services · Risk & Finance · Transformation · Strategic Advisory",
    description:
      "Devesh brings extensive experience across financial services leadership, consulting and complex business transformation.",
    profile:
      "Devesh Mehta is a financial services executive, entrepreneur and strategic advisor with extensive experience across consulting, risk, finance and business transformation. He has held senior leadership roles at Nomura and Grant Thornton before founding Levrara Consulting Group, where he advises financial institutions and high-growth organisations on risk, transformation and strategic change.",
    areas: [
      "Financial Services Strategy",
      "Risk & Finance Transformation",
      "Business & Operating Model Change",
      "Strategic Advisory",
      "Governance & Controls",
      "Financial Services Consulting",
    ],
    industryPerspective:
      "Devesh brings a combination of senior financial-services leadership, consulting expertise and entrepreneurial experience. His perspective spans both the strategic decisions organisations need to make and the practical execution required to deliver complex transformation. His experience across banking, professional services and entrepreneurship provides a valuable perspective on how organisations can navigate change while strengthening governance, efficiency and resilience.",
    location: "Greater London, England, United Kingdom",
    linkedin: "https://www.linkedin.com/in/devesh-mehta-86672a88/",
    image: deveshMehtaImage,
    imageClassName: "",
  },
  {
    name: "Rishi Sharma",
    intro: "Technology & Capital Markets Leader",
    role: "Ex COO, Global Credit Technology — Citadel",
    secondaryRole: "Technology & Capital Markets Leader",
    summary: "Technology · Capital Markets · Quantitative Strategies",
    description:
      "Rishi is a technology and capital markets leader with experience spanning global credit technology, quantitative strategies, trading and enterprise risk analytics.",
    profile:
      "Rishi Sharma is a technology and capital markets leader with extensive experience building and scaling technology-driven businesses within global financial markets. During his tenure at Citadel, Rishi served as Chief Operating Officer of Global Credit Technology, following leadership roles spanning quantitative strategies and trading, product management, and enterprise risk and analytics. His experience sits at the intersection of investment, technology and capital markets, with a strong focus on translating complex financial and technology challenges into scalable business and technology solutions.",
    areas: [
      "Capital Markets",
      "Financial Technology",
      "Quantitative Strategies & Trading",
      "Technology Leadership",
      "Risk & Analytics",
      "Product Strategy",
    ],
    industryPerspective:
      "Rishi brings a practitioner-led perspective on how technology can enable innovation, scalability and better decision-making across complex financial markets. His experience spans both technology leadership and the business challenges of modern investment and trading environments.",
    location: "New York, United States",
    linkedin: "https://www.linkedin.com/in/sharmarishi/",
    image: rishiSharmaImage,
    imageClassName: "",
  },
  {
    name: "Melissia Dembrosky",
    intro: "Senior Investment Banking Technology Expert",
    role: "Senior FS Technology Executive (ex- JP Morgan, Citi, HSBC, LSEG)",
    secondaryRole: "Senior Investment Banking Technology Executive",
    summary: "Technology Transformation · Digital Assets · AI · Capital Markets",
    description:
      "Melissia brings extensive experience leading technology transformation across global financial markets and financial-services organisations.",
    profile:
      "Melissia is a senior technology leader with 25+ years experience in strategy, transformation and emerging technology across financial services, including JP Morgan, Lloyds Banking Group, HSBC and Citibank. She builds technology and turns complex AI and cyber risks into clear, board-relevant insights, strengthening governance and enabling informed decisions on AI adoption, data protection and cyber resilience.",
    areas: [
      "Technology Transformation",
      "Digital Assets & Emerging Technology",
      "Artificial Intelligence",
      "Financial & Capital Markets",
      "Trade Finance",
      "Technology Strategy",
    ],
    industryPerspective:
      "Melissia brings a strong understanding of how technology, financial markets and emerging innovation intersect. Her experience in large-scale transformation provides a practical perspective on navigating technology change within complex, highly regulated financial environments.",
    location: "United Kingdom",
    linkedin: "https://www.linkedin.com/in/melissiadembrosky/",
    image: melissaDembroskyImage,
    imageClassName: "",
  },
  {
    name: "Jon Holden",
    intro: "Cybersecurity Leader & Industry Mentor",
    role: "CEO, CyberNorth · Co-Founder, MOTHER · ​Chief Information Security Officer, Atom Bank",
    secondaryRole: "Cybersecurity Leader & Industry Mentor",
    summary: "Cybersecurity · AI · Leadership · Resilience",
    description:
      "Jon is a cybersecurity leader, advisor and mentor with extensive experience helping organisations navigate security, resilience, technology and leadership challenges.",
    profile:
      "Jon Holden is a Seasoned cybersecurity executive and strategic leader with over 30 years of experience spanning global banking, financial technology, and digital security. Recognized for driving regional and national digital resilience. Currently serving as CEO of CyberNorth, championing North East England’s cyber security cluster. Jon also Directs the strategic growth and regional/national impact of CyberNorth, supporting over 100 member businesses and 2,000+ professionals across fintech, space, maritime, and defence sectors. ​Chief Information Security Officer (CISO) | Atom Bank ",
    areas: [
      "Cybersecurity",
      "Cyber Resilience",
      "Security Leadership",
      "AI & Emerging Technology",
      "Risk & Security Strategy",
      "Executive Advisory",
    ],
    industryPerspective:
      "Jon brings a practitioner-first perspective to cybersecurity, focusing on the intersection of people, technology, leadership and resilience. His experience working with organisations and the wider cyber community provides a practical view of how security needs to evolve alongside emerging technologies.",
    location: "Durham, England, United Kingdom",
    linkedin: "https://www.linkedin.com/in/jonholden/",
    image: jonHoldenImage,
    imageClassName: "",
  },
];


const storyExpandItems = [
  {
    title: "Where It Began",
    body: "Digital Risk Academy was founded on a simple conviction: that world-class digital risk education should be accessible, practical, and built for the realities of today's threat landscape — not yesterday's textbooks.",
  },
  {
    title: "The Gap We Saw",
    body: "Organisations were hiring talent with credentials but not capability. Professionals had theoretical knowledge but struggled with real-world application. We built the Academy to bridge that gap — from classroom to boardroom.",
  },
  {
    title: "Built by Practitioners",
    body: "Every programme is designed by practitioners who have led risk functions, responded to incidents, and advised boards. This is education with real-world DNA — built to produce professionals who are ready from day one.",
  },
];

const visionExpandItems = [
  {
    title: "Our Global Vision",
    body: "To become the leading global academy for digital risk capability — equipping the next generation of cyber, AI risk, and governance professionals to lead with clarity, confidence, and integrity.",
  },
  {
    title: "Future We're Building",
    body: "We envision a world where digital risk is understood at every level of an organisation — where security awareness is cultural, governance is embedded, and emerging technologies are adopted with wisdom. That starts with education.",
  },
  {
    title: "Bridging the Gap",
    body: "Industry-aligned skills designed for real-world impact to make the candidates job ready.",
  },
];

const socialExpandItems = [
  {
    title: "Accessible Learning for All",
    body: "Breaking barriers so every learner can access high-quality education.",
  },
  {
    title: "Scholarships & Support",
    body: "Ensuring financial limitations never stop talent from growing.",
  },
  {
    title: "Global Community",
    body: "A diverse ecosystem of learners, mentors, and innovators worldwide.",
  },
];

function ExpandableList({
  items,
  accentColor,
}: {
  items: { title: string; body: string }[];
  accentColor: "orange" | "blue" | "emerald";
}) {
  const [open, setOpen] = useState<number | null>(null);

  const iconColor =
    accentColor === "orange"
      ? "text-orange-400"
      : accentColor === "blue"
        ? "text-blue-400"
        : "text-emerald-400";

  const activeRing =
    accentColor === "orange"
      ? "ring-orange-400/40 bg-orange-400/5"
      : accentColor === "blue"
        ? "ring-blue-400/40 bg-blue-400/5"
        : "ring-emerald-400/40 bg-emerald-400/5";

  return (
    <ul className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li
            key={i}
            className={`rounded-xl border border-white/10 overflow-hidden transition-colors duration-300 ${isOpen ? `ring-1 ${activeRing}` : "hover:bg-white/5"
              }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start gap-2 text-left px-3 py-3"
            >
              <span className="flex-1 text-slate-100 text-base md:text-lg font-semibold leading-snug break-words min-w-0">
                {item.title}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-slate-300 shrink-0 mt-0.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                  }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-3 pb-3 text-slate-300 text-xs md:text-sm leading-relaxed break-words">
                    {item.body}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}

function DropdownList({
  items,
  accentColor,
}: {
  items: { heading: string; body: string }[];
  accentColor: "orange" | "blue" | "emerald";
}) {
  const [open, setOpen] = useState<number | null>(null);

  const activeRing =
    accentColor === "orange"
      ? "ring-orange-400/40 bg-orange-400/10"
      : accentColor === "blue"
        ? "ring-blue-400/40 bg-blue-400/10"
        : "ring-emerald-400/40 bg-emerald-400/10";

  const chevronActive =
    accentColor === "orange"
      ? "text-orange-400"
      : accentColor === "blue"
        ? "text-blue-400"
        : "text-emerald-400";

  return (
    <ul className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li
            key={i}
            className={`rounded-xl border border-white/10 overflow-hidden transition-colors duration-300 ${isOpen ? `ring-1 ${activeRing}` : "hover:bg-white/5"
              }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center gap-3 text-left px-5 py-4"
            >
              <span className="flex-1 text-white text-xl md:text-2xl font-semibold">
                {item.heading}
              </span>
              <ChevronDown
                className={`w-5 h-5 md:w-6 md:h-6 shrink-0 transition-transform duration-300 ${isOpen ? `rotate-180 ${chevronActive}` : "text-slate-300"
                  }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-slate-200 text-lg md:text-xl leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}

function AutoRotatingCard({
  cardTitle,
  items,
  accentColor,
}: {
  cardTitle: string;
  items: { heading: string; body: string; image: string }[];
  accentColor: "orange" | "blue" | "emerald";
  index?: number;
}) {
  return (
    <article className="relative rounded-2xl border border-white/15 bg-slate-900/95 backdrop-blur-sm p-6 md:p-8 shadow-xl shadow-slate-900/20 flex flex-col">
      <h3 className="logo-shine text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6">
        {cardTitle}
      </h3>
      <DropdownList items={items} accentColor={accentColor} />
    </article>
  );
}

function HeroStaticCard({
  title,
  items,
  accentColor,
  show,
  delay,
}: {
  title: string;
  items: { title: string; body: string }[];
  accentColor: "orange" | "blue" | "emerald";
  show: boolean;
  delay: number;
}) {
  const accentBorder =
    accentColor === "orange"
      ? "border-orange-400/30"
      : accentColor === "blue"
        ? "border-blue-400/30"
        : "border-emerald-400/30";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 24 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl border border-white/10 md:border-white/15 bg-transparent md:bg-white/[0.02] backdrop-blur-[2px] p-4 md:p-6 md:min-h-[440px]"
    >
      <h3 className="logo-shine text-left text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-5">
        {title}
      </h3>
      <div className={`rounded-xl border ${accentBorder} bg-transparent md:bg-black/10 p-2 md:p-3`}>
        <ExpandableList items={items} accentColor={accentColor} />
      </div>
    </motion.article>
  );
}

const leaderQuotes = [
  {
    quote:
      "Employers can no longer remain passive recruiters; they must help build the skills ecosystem they will depend on.",
    author: "Subhapratha Rajagopal",
    role: "India Head of Payments, JPMorgan Chase",
  },
  {
    quote:
      "Current curriculum cannot stay frozen while technology changes rapidly; students must become lifelong learners who keep reskilling throughout their careers.",
    author: "Anil Sahasrabudhe",
    role: "Chairman, National Assessment and Accreditation Council",
  },
  {
    quote:
      "Students are not looking for courses; they are looking for progress, income and a pathway to a better life.",
    author: "Priya Agrawal",
    role: "Founder-Director, Antarang Foundation",
  },
  {
    quote:
      "The goal is to accelerate solutions that have already shown they can transform a young person's future through employability-focused learning.",
    author: "Education & Employability Coalition",
    role: "Industry Working Group",
  },
];

export function AcademyHome() {
  const [showFirstHeroDetails, setShowFirstHeroDetails] = useState(false);
  const [showSecondHeroLine, setShowSecondHeroLine] = useState(false);
  const [showMobileStory, setShowMobileStory] = useState(false);
  const [heroProgress, setHeroProgress] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const heroTargetProgressRef = useRef(0);
  const heroCurrentProgressRef = useRef(0);
  const heroAnimationFrameRef = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
  const mapRange = (v: number, inMin: number, inMax: number, outMin: number, outMax: number) =>
    outMin + ((clamp(v, inMin, inMax) - inMin) / (inMax - inMin)) * (outMax - outMin);
  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

  const heroContentOpacity = isMobile ? 1 : 1 - easeOut(mapRange(heroProgress, 0, 0.28, 0, 1));
  const heroContentY = isMobile ? 0 : -mapRange(heroProgress, 0, 0.3, 0, 60);
  const heroContentScale = isMobile ? 1 : 1 - mapRange(heroProgress, 0, 0.3, 0, 0.05);
  const heroContentBlur = isMobile ? 0 : mapRange(heroProgress, 0.1, 0.3, 0, 6);

  const videoScale = 1 + mapRange(heroProgress, 0, 1, 0, 0.08);
  const videoY = -mapRange(heroProgress, 0, 1, 0, 40);

  const cardProgress = (start: number, end: number) =>
    easeOut(mapRange(heroProgress, start, end, 0, 1));

  const card1Progress = cardProgress(0.08, 0.72);
  const card2Progress = cardProgress(0.2, 0.88);
  const card3Progress = cardProgress(0.32, 1);


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("checkout_return") !== "true") return;

    window.history.replaceState({}, document.title, window.location.pathname);

    const pendingOrder = localStorage.getItem("dra_pending_order");
    const pendingCourse = localStorage.getItem("dra_pending_course");
    if (!pendingOrder) return;

    let user: Record<string, unknown> = {};
    try {
      const session = localStorage.getItem("dra_session");
      if (session) {
        const parsed: unknown = JSON.parse(session);
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          user = parsed as Record<string, unknown>;
        }
      }
    } catch { /* ignore corrupted localStorage */ }

    const str = (v: unknown) => (typeof v === "string" ? v : "");
    const courseKey = (typeof pendingCourse === "string" && pendingCourse in COURSE_DETAILS)
      ? pendingCourse
      : "investment-banking";
    const conf = COURSE_DETAILS[courseKey];

    logPayment({
      name: str(user.name),
      email: str(user.email),
      phone: str(user.phone),
      organisation: str(user.organisation),
      course: courseKey,
      amount: conf.amount,
      currency: conf.currency,
      orderId: pendingOrder,
      status: "done",
    }).catch(() => { });

    localStorage.removeItem("dra_pending_order");
    localStorage.removeItem("dra_pending_course");
  }, []);

  useEffect(() => {
    setShowFirstHeroDetails(false);
    setShowSecondHeroLine(false);

    const revealTimer = setTimeout(() => {
      setShowFirstHeroDetails(true);
    }, HERO_DETAILS_REVEAL_DELAY_MS);

    const secondLineTimer = setTimeout(() => {
      setShowSecondHeroLine(true);
    }, HERO_SECOND_LINE_REVEAL_DELAY_MS);

    const storyTimer = setTimeout(() => {
      setShowMobileStory(true);
    }, HERO_DETAILS_REVEAL_DELAY_MS + 800);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(secondLineTimer);
      clearTimeout(storyTimer);
    };
  }, []);

  useEffect(() => {
    const startProgressAnimation = () => {
      if (heroAnimationFrameRef.current !== null) return;

      const tick = () => {
        const target = heroTargetProgressRef.current;
        const current = heroCurrentProgressRef.current;
        const next = current + (target - current) * 0.12;
        const settled = Math.abs(target - next) < 0.001;

        heroCurrentProgressRef.current = settled ? target : next;
        setHeroProgress(heroCurrentProgressRef.current);

        if (settled) {
          heroAnimationFrameRef.current = null;
          return;
        }

        heroAnimationFrameRef.current = window.requestAnimationFrame(tick);
      };

      heroAnimationFrameRef.current = window.requestAnimationFrame(tick);
    };

    const handleScroll = () => {
      if (!heroRef.current || window.innerWidth < 768) return;
      const rect = heroRef.current.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const progress = scrollable > 0 ? clamp(scrolled / scrollable, 0, 1) : 0;
      heroTargetProgressRef.current = progress;
      startProgressAnimation();
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (heroAnimationFrameRef.current !== null) {
        window.cancelAnimationFrame(heroAnimationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="pt-0 mt-0">
      {/* Hero Section — pinned crossfade (Revolut-style, in place) */}
      <section ref={heroRef} className={`relative ${HERO_PIN_HEIGHT_CLASS}`}>
        <div className="md:sticky md:top-0 relative min-h-screen md:min-h-[850px] overflow-hidden">
          {/* Shared video background (parallax) */}
          <div
            className="absolute inset-0 z-0 will-change-transform"
            style={{ transform: `translateY(${videoY}px) scale(${videoScale})` }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover brightness-[0.8]"
            >
              <source src="/academy-hero.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Shared overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/30 to-black/50 md:to-black/60"></div>

          {/* Layer A: Hero content (responsive positioning) */}
          <div
            className="md:absolute md:inset-0 relative z-30 will-change-transform"
            style={{
              opacity: heroContentOpacity,
              transform: `translateY(${heroContentY}px) scale(${heroContentScale})`,
              filter: `blur(${heroContentBlur}px)`,
              pointerEvents: heroContentOpacity < 0.05 ? "none" : "auto",
            }}
          >
            <div className="md:h-full relative px-4 sm:px-6 md:px-8 pt-16 pb-12 md:pt-36 md:pb-[20rem] lg:pb-[18rem]">
              <div className="container mx-auto flex h-full flex-col">
                <div className="flex min-h-0 flex-1 items-center justify-center">
                  <div className="w-full max-w-4xl lg:max-w-5xl">
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <motion.h1
                        className="text-[clamp(1.6rem,6vw,2rem)] sm:text-4xl md:text-[clamp(3rem,5.6vw,4.75rem)] font-bold mb-3 sm:mb-6 leading-[1.12] flex flex-col items-center text-center gap-y-1 sm:gap-y-2 md:gap-y-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                      >
                        <WordRevealLine text="Leadership is not taught." className="block" />
                        <motion.div
                          className="w-full min-h-[1.25em] flex justify-center"
                          initial={false}
                          animate={{ opacity: showSecondHeroLine ? 1 : 0 }}
                          transition={{ duration: 0.45, ease: "easeOut" }}
                        >
                          <WordRevealLine text="It is forged in live decisions." className="block" wordClassName="logo-shine" />
                        </motion.div>
                      </motion.h1>

                      <motion.div
                        className="min-h-[110px] sm:min-h-[120px] md:min-h-[140px] flex flex-col items-center justify-start gap-4 sm:gap-5"
                        initial={false}
                        animate={{ opacity: showFirstHeroDetails ? 1 : 0 }}
                        transition={{ duration: 0.55 }}
                      >

                        <motion.p
                          className="text-[clamp(0.85rem,3.4vw,1rem)] sm:text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto text-center px-2 leading-snug"
                          initial={false}
                          animate={{ opacity: showFirstHeroDetails ? 1 : 0 }}
                          transition={{ duration: 0.45 }}
                        >
                          Digital Risk Academy operates as a not-for-profit — driven by impact, not commercial gain.
                        </motion.p>

                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* <div className="mt-2 md:mt-auto flex w-full flex-col items-center gap-6 md:gap-8">
                   
                  <motion.aside
                    className="block md:hidden w-[calc(100%-2rem)] max-w-lg mx-4 rounded-2xl border border-orange-300/35 bg-black/40 backdrop-blur-md p-6 sm:p-8"
                    initial={false}
                    animate={{ opacity: showFirstHeroDetails ? 1 : 0, y: showFirstHeroDetails ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-orange-300 bg-orange-500/15 border border-orange-400/40 px-3 py-1 rounded-full">
                        Launching This August
                      </span>
                      <h3 className="text-2xl font-extrabold text-white leading-tight">
                        Investment Banking Programme
                      </h3>
                      <p className="text-slate-200/95 text-sm leading-relaxed">
                        A 4-week practitioner-led programme designed to bridge the gap between academic learning and real-world investment banking and risk roles.
                      </p>
                      <Link
                        to="/programmes/investment-banking"
                        className="group inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold text-sm hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.aside>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: showMobileStory ? 1 : 0, y: showMobileStory ? 0 : 20 }}
                    transition={{ duration: 0.6 }}
                    className="w-full"
                  >
                    <MobileStoryVisionImpact />
                  </motion.div>
                </div>

                <motion.aside
                  className="hidden md:block md:absolute md:bottom-6 md:right-6 lg:right-8 lg:bottom-8 md:w-[min(36rem,calc(100%-3rem))] lg:w-[min(40rem,calc(100%-4rem))] rounded-2xl border border-orange-300/35 bg-black/40 backdrop-blur-md p-6 lg:px-10 lg:py-7"
                  initial={false}
                  animate={{ opacity: showFirstHeroDetails ? 1 : 0, x: showFirstHeroDetails ? 0 : 20, y: showFirstHeroDetails ? 0 : 20 }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="flex flex-col items-center text-center gap-4 lg:gap-5">
                    <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-orange-300 bg-orange-500/15 border border-orange-400/40 px-3 py-1 rounded-full">
                      Launching This August
                    </span>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                      Investment Banking Programme
                    </h3>
                    <p className="text-slate-200/95 text-base lg:text-lg leading-relaxed max-w-2xl">
                      A 4-week practitioner-led programme designed to bridge the gap between academic learning and real-world investment banking and risk roles.
                    </p>
                    <Link
                      to="/programmes/investment-banking"
                      className="group inline-flex items-center justify-center gap-2 lg:w-auto lg:px-10 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold text-base hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.aside> */}
              </div>
            </div>

            {/* Layer B: Story / Vision / Social cards — desktop only (scroll-driven) */}
          </div>
          <div
            className="hidden md:absolute md:inset-0 md:z-40 md:flex md:items-center md:px-6 md:pt-20 md:pb-10 overflow-y-auto"
            style={{ pointerEvents: card1Progress < 0.05 ? "none" : "auto" }}
          >
            <div className="container mx-auto w-full">
              <div className="grid grid-cols-3 gap-4 lg:gap-5">
                <div
                  className="will-change-transform"
                  style={{
                    opacity: card1Progress,
                    transform: `translateY(${(1 - card1Progress) * 80}px) scale(${0.94 + card1Progress * 0.06})`,
                  }}
                >
                  <HeroStaticCard title="Our Story" items={storyExpandItems} accentColor="orange" show delay={0} />
                </div>
                <div
                  className="will-change-transform"
                  style={{
                    opacity: card2Progress,
                    transform: `translateY(${(1 - card2Progress) * 80}px) scale(${0.94 + card2Progress * 0.06})`,
                  }}
                >
                  <HeroStaticCard title="Our Vision" items={visionExpandItems} accentColor="blue" show delay={0} />
                </div>
                <div
                  className="will-change-transform"
                  style={{
                    opacity: card3Progress,
                    transform: `translateY(${(1 - card3Progress) * 80}px) scale(${0.94 + card3Progress * 0.06})`,
                  }}
                >
                  <HeroStaticCard title="Social Impact" items={socialExpandItems} accentColor="emerald" show delay={0} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Routing */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-10 sm:mb-14 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Who We Serve</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-2">
              Tailored learning pathways for every stage of your journey
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <AudienceCard
              icon={<Users className="w-10 h-10" />}
              title="For Students"
              image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=55&w=720&auto=format&fit=crop"
              description="Launch your digital risk career with industry-ready skills"
              link="/programmes/students"
              color="orange"
            />

            <AudienceCard
              icon={<Briefcase className="w-10 h-10" />}
              title="For Early Career Professionals"
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=55&w=720&auto=format&fit=crop"
              description="Advance your career with specialised risk expertise"
              link="/programmes/early-career"
              color="blue"
            />

            <AudienceCard
              icon={<Building2 className="w-10 h-10" />}
              title="For Experienced Professionals"
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=55&w=720&auto=format&fit=crop"
              description="Build team capability through corporate training"
              link="/programmes/experienced"
              color="orange"
            />

            <AudienceCard
              icon={<School className="w-10 h-10" />}
              title="For Organisations"
              image="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=55&w=720&auto=format&fit=crop"
              description="Partner with us to enhance academic programmes"
              link="/programmes/organisation"
              color="blue"
            />
          </motion.div>
        </div>
      </section>

      {/* What Makes Academy Unique */}
      <section className="py-16 sm:py-20 md:py-24 bg-white text-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-10 sm:mb-14 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">What Makes Academy Unique</h2>
            <p className="text-xs sm:text-base md:text-lg font-extrabold uppercase tracking-[0.07em] text-orange-400 max-w-5xl mx-auto px-2">
              DIGITAL RISK ACADEMY OPERATES AS A NOT-FOR-PROFIT - DRIVEN BY IMPACT, NOT COMMERCIAL GAIN.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mt-3 sm:mt-4 px-2">
              Students are not looking for courses. They are looking for progress.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <BenefitCard
              icon={<Target className="w-8 h-8" />}
              title="Learn From Active C-Suite Leaders"
              description="Programmes are delivered by active CISOs, AI leaders, and technology executives securing complex global digital ecosystems."
              image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=55&w=720&auto=format&fit=crop"
            />
            <BenefitCard
              icon={<BookOpen className="w-8 h-8" />}
              title="Rigorous Academic Partnerships"
              description="Strategic collaboration with UK universities combines industry agility with the credibility and depth of world-class academia."
              image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=55&w=720&auto=format&fit=crop"
            />
            <BenefitCard
              icon={<Briefcase className="w-8 h-8" />}
              title="Employment-Focused Design"
              description="Training alone does not create outcomes. Learners receive employability support to get and keep quality jobs."
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=55&w=720&auto=format&fit=crop"
            />
            <BenefitCard
              icon={<Users className="w-8 h-8" />}
              title="Apprenticeship Pathways"
              description="Apprenticeship routes bridge the gap between education and employment with practical, mentored experience."
              image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=55&w=720&auto=format&fit=crop"
            />
            <BenefitCard
              icon={<Award className="w-8 h-8" />}
              title="Career Progress Over Credentials"
              description="We focus on confidence, clarity, and career direction - not just course completion and certificates."
              image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=55&w=720&auto=format&fit=crop"
            />
            <BenefitCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Lifelong Reskilling Mindset"
              description="Curriculum and coaching prepare learners to continuously reskill as technology and risk landscapes evolve."
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=55&w=720&auto=format&fit=crop"
            />
          </motion.div>
        </div>
      </section>

      {/* Future Learning Tracks */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-10 sm:mb-14 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Future Learning Tracks</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto px-2">
              Structured pathways designed for real-world digital risk capability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TrackCard
              index={0}
              title="Investment Banking Programme"
              description="A 4-week practitioner-led programme designed to bridge the gap between academic learning and real-world investment banking and risk roles."
              audience="Students, Early-Career Professionals"
              image="https://images.unsplash.com/photo-1630464373688-fb6a37ce89ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGludmVzdG1lbnQlMjBiYW5raW5nfGVufDB8fDB8fHww"
              to="/programmes/investment-banking"
            />
            <TrackCard
              index={1}
              title="AI Risk Governance"
              description="Strategic AI deployment and governance frameworks for executive decision-makers navigating regulatory compliance and risk management."
              audience="C-Suite, Board Members, Risk Leaders"
              image="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800"
              to="/programmes/ai-risk-governance"
            />
            <TrackCard
              index={2}
              title="Executive Leadership Programme"
              description="CISO-in-a-Box training covering crisis management, board communication, and legal defensibility for cyber leadership roles."
              audience="Mid-to-Senior Professionals, Finance Leaders"
              image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800"
              to="/programmes/executive-leadership"
            />
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/programmes"
              className="inline-flex items-center space-x-2 text-orange-500 hover:text-orange-400 font-semibold group text-lg"
            >
              <span>View All Programmes</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Leadership & Advisory Team */}
      <section className="py-16 sm:py-20 md:py-24 bg-white text-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">The Minds Behind the Academy</h2>
            <p className="text-base sm:text-lg text-slate-500 max-w-3xl mx-auto px-2">
              Learn from accomplished professionals with real-world experience across technology, governance, cybersecurity, risk, and business transformation.
            </p>
          </motion.div>

          <AdvisorSlideshow />
        </div>
      </section>

      {/* Quotes Slideshow */}
      <QuoteSlideshowSection />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-orange-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">Ready to Start Your Learning Journey?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 px-2">
              Explore programmes, get personalised guidance, or connect with our academic team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
              <Link
                to="/programmes"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-600 rounded-lg font-semibold text-sm sm:text-base hover:bg-slate-100 transition-all duration-300 text-center"
              >
                Browse All Programmes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}



function AudienceCard({ title, description, link, image }: any) {
  return (
    <motion.div variants={fadeInUp}>
      <Link
        to={link}
        className="block group h-full bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
      >
        <div className="relative h-40 overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-90 brightness-110 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-slate-400 mb-4">{description}</p>
          <div className="flex items-center space-x-2 text-orange-500 font-semibold">
            <span>Explore</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function TrackCard({
  title, description, audience, image, to, index = 0, badge,
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.62,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex flex-col overflow-hidden pb-8 rounded-[24px]
      bg-gradient-to-b from-white to-orange-50/40
      border border-orange-300/40
      shadow-[0_10px_40px_rgba(234,88,12,0.12)]
      transition-all duration-300
      hover:shadow-[0_18px_60px_rgba(234,88,12,0.22)]"
    >
      {/* IMAGE */}
      <div className="w-full overflow-hidden relative aspect-[16/10] sm:aspect-[16/9]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {badge && (
          <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-semibold text-orange-300
    bg-black/70 backdrop-blur-md border border-orange-400/30 rounded-full shadow-lg">
            {badge}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="px-5 sm:px-7 md:px-8 mt-4 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl md:text-[26px] font-bold mb-3 sm:mb-4 text-black leading-snug">{title}</h3>

        <p className="text-slate-800 text-sm sm:text-base mb-4 sm:mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        <p className="text-slate-900 font-medium text-sm sm:text-[15px] mb-6 sm:mb-8">
          {audience}
        </p>

        {/* BUTTON */}
        <Link
          to={to}
          className="relative block w-full py-3 sm:py-4 text-white rounded-full font-semibold text-base sm:text-lg text-center overflow-hidden group
          bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600
          shadow-lg shadow-orange-500/30
          transition-all duration-300
          hover:shadow-orange-500/60 hover:scale-[1.02]"
        >
          {/* Glow layer */}
          <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-30 blur-xl transition duration-500"></span>

          {/* Text */}
          <span className="relative z-10">View Course</span>
        </Link>
      </div>
    </motion.div>
  );
}

function AdvisorSlideshow() {
  const [current, setCurrent] = useState(0);
  const [selectedAdvisor, setSelectedAdvisor] = useState<(typeof advisoryTeam)[number] | null>(null);

  const total = advisoryTeam.length;

  const visibleAdvisors = [
    advisoryTeam[current % total],
    advisoryTeam[(current + 1) % total],
  ];

  const goNext = () => setCurrent((prev) => (prev + 2) % total);
  const goPrev = () => setCurrent((prev) => (prev - 2 + total) % total);

  return (
    <>
      <div className="relative mx-auto w-full max-w-[1280px]">
        <div className="mb-5 flex items-center justify-between">
        </div>

        <div className="grid gap-8 xl:grid-cols-2">
          {visibleAdvisors.map((advisor, idx) => (
            <motion.article
              key={`${advisor.name}-${current}`}
              initial={{ opacity: 0, x: idx === 0 ? -16 : 16, y: 12 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
            >
              <div className="flex h-full min-h-[220px] flex-row">
                <div className="flex w-[210px] shrink-0 items-center justify-center bg-slate-100 p-3 sm:w-[230px]">
                  <div className="h-[175px] w-[175px] overflow-hidden rounded-[18px] bg-slate-200 sm:h-[185px] sm:w-[185px]">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-center px-4 py-4 sm:px-5 sm:py-5">
                  <div>
                    <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-orange-700">
                      {advisor.intro}
                    </span>

                    <h3 className="mt-3 text-[clamp(1.7rem,2vw,2.3rem)] font-extrabold leading-[1.08] text-slate-900">
                      {advisor.name}
                    </h3>

                    <p className="mt-2 text-[14px] font-medium leading-relaxed text-slate-700">
                      {advisor.role}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {advisor.summary.split("·").map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>

                    <p className="mt-3 max-w-[42ch] text-[14px] leading-7 text-slate-600">
                      {advisor.description}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-start">
                    <button
                      type="button"
                      onClick={() => setSelectedAdvisor(advisor)}
                      className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-2 text-[12px] font-semibold text-orange-700 transition-all duration-300 hover:border-orange-300 hover:bg-orange-500 hover:text-white"
                    >
                      <span>View profile</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-orange-700 transition-all duration-300 hover:border-orange-300 hover:bg-orange-500 hover:text-white"
            aria-label="Previous advisors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center justify-center gap-2">
            {advisoryTeam.map((member, index) => (
              <button
                key={member.name}
                type="button"
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-orange-500" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                aria-label={`Show ${member.name}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-orange-700 transition-all duration-300 hover:border-orange-300 hover:bg-orange-500 hover:text-white"
            aria-label="Next advisors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedAdvisor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
            onClick={() => setSelectedAdvisor(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-5xl overflow-hidden rounded-[30px] border border-slate-700 bg-slate-950 shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
            >
              <button
                type="button"
                onClick={() => setSelectedAdvisor(null)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 bg-slate-900 text-slate-200 transition-colors hover:border-orange-400 hover:text-orange-300"
                aria-label="Close profile"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="grid lg:grid-cols-[0.8fr_1.4fr]">
                <div className="border-b border-slate-700 bg-slate-900/80 p-6 md:p-8 lg:border-b-0 lg:border-r">
                  <div className="mb-4 flex justify-center lg:justify-start">
                    <span className="inline-flex items-center rounded-full text-[10px] font-bold uppercase tracking-[0.18em] text-orange-300">
                      {selectedAdvisor.intro}
                    </span>
                  </div>


                  <div className="mx-auto max-w-[260px] overflow-hidden rounded-[22px] border border-slate-600 bg-slate-800 p-2 shadow-xl">
                    <img
                      src={selectedAdvisor.image}
                      alt={selectedAdvisor.name}
                      className="h-[290px] w-full rounded-[18px] object-cover object-center md:h-[340px]"
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-6 text-center lg:text-left">
                    <h3 className="text-2xl font-extrabold text-white md:text-3xl">
                      {selectedAdvisor.name}
                    </h3>

                    <p className="mt-3 text-base font-semibold text-orange-200">
                      {selectedAdvisor.role}
                    </p>

                    <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-300 lg:justify-start">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      <span>{selectedAdvisor.location}</span>
                    </div>

                    <a
                      href={selectedAdvisor.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-3 rounded-full border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-orange-400 hover:text-orange-300"
                    >
                      <img
                        src={linkedinCircleIcon}
                        alt="LinkedIn"
                        className="h-7 w-7 rounded-full object-cover"
                      />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

                <div className="p-6 md:p-8 lg:p-10">
                  <div className="space-y-7">
                    <section className="border-l-2 border-orange-400/60 pl-4">
                      <h4 className="text-lg font-bold uppercase tracking-[0.14em] text-orange-300">
                        Profile
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-slate-200 md:text-base">
                        {selectedAdvisor.profile}
                      </p>
                    </section>

                    <section className="border-l-2 border-blue-400/60 pl-4">
                      <h4 className="text-lg font-bold uppercase tracking-[0.14em] text-blue-300">
                        Area of Expertise
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedAdvisor.areas.map((area) => (
                          <span
                            key={area}
                            className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 md:text-sm"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </section>

                    <section className="border-l-2 border-emerald-400/60 pl-4">
                      <h4 className="text-lg font-bold uppercase tracking-[0.14em] text-emerald-300">
                        Industry Perspective
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-slate-200 md:text-base">
                        {selectedAdvisor.industryPerspective}
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function QuoteSlideshowSection() {
  const [current, setCurrent] = useState(0);
  const total = leaderQuotes.length;

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);

    return () => clearInterval(id);
  }, [total]);

  const quote = leaderQuotes[current];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Voices Shaping the Future</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 px-2">
            Perspectives from leaders across education, policy, and industry
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
            className="bg-slate-900/70 border border-slate-700 rounded-2xl p-5 sm:p-8 md:p-10"
          >
            <p className="text-base sm:text-xl md:text-2xl text-slate-100 leading-relaxed italic mb-6 sm:mb-8">
              "{quote.quote}"
            </p>
            <div>
              <p className="text-slate-400 text-xs sm:text-sm">{quote.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => setCurrent((current - 1 + total) % total)}
            className="w-10 h-10 rounded-full border border-slate-600 text-slate-300 hover:text-white hover:border-orange-400 transition-colors flex items-center justify-center"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2 px-2">
            {leaderQuotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-orange-500 w-6" : "bg-slate-500 w-2"}`}
                aria-label={`Quote ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrent((current + 1) % total)}
            className="w-10 h-10 rounded-full border border-slate-600 text-slate-300 hover:text-white hover:border-orange-400 transition-colors flex items-center justify-center"
            aria-label="Next quote"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ title, description, image }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover brightness-110 contrast-105 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 to-transparent" />
      </div>
      <div className="p-6 text-left">
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </motion.div>
  );
}



