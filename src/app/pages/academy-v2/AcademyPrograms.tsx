import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  CheckCircle2,
  GraduationCap,
  Landmark,
  LockKeyhole,
  MonitorCog,
  Network,
  RadioTower,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

type Programme = {
  title: string;
  description: string;
  participants: string;
  image: string;
  alt: string;
  to?: string;
  level: string;
  format: string;
  outcome: string;
  highlight: string;
  icon: LucideIcon;
};

type ProgrammeSection = {
  id: string;
  label: string;
  programmes: Programme[];
};

const programmeSections: ProgrammeSection[] = [
  {
    id: "flagship",
    label: "Flagship Programmes",
    programmes: [
      {
        title: "Investment Banking Programme",
        description: "Practitioner-led training covering investment banking fundamentals, valuation, deal workflows, governance, and digital risk in modern financial services.",
        participants: "Students, Graduates, Early-Career Professionals",
        image: "https://images.unsplash.com/photo-1630464373688-fb6a37ce89ed?w=800&auto=format&fit=crop&q=80",
        alt: "Investment Banking Programme",
        to: "/programmes/investment-banking",
        level: "Professional Foundation",
        format: "Live cohort + practical labs",
        outcome: "Banking, valuation, deal and risk fluency",
        highlight: "Financial services track",
        icon: Landmark,
      },
      {
        title: "Digital Risk Fundamentals",
        description: "Essential foundation for understanding digital risk landscape. Covers threat identification, risk assessment methodologies, and compliance frameworks for modern enterprises.",
        participants: "New Professionals, Risk Managers, Board Members",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
        alt: "Dashboard",
        to: "/programmes/digital-risk-fundamentals",
        level: "Foundation to Intermediate",
        format: "Guided learning + case studies",
        outcome: "Risk assessment and compliance confidence",
        highlight: "Risk essentials",
        icon: ShieldCheck,
      },
      {
        title: "Cyber Resilience Practitioner",
        description: "Master operational cybersecurity through live-fire training with enterprise-grade toolsets. Graduate Day 1 ready for Security Analyst and SOC leadership roles.",
        participants: "High-potential Graduates, Career Switchers",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
        alt: "Cyber SOC",
        to: "/programmes/cyber-resilience-practitioner",
        level: "Practitioner",
        format: "Hands-on SOC scenarios",
        outcome: "Security analyst and resilience readiness",
        highlight: "Cyber operations",
        icon: MonitorCog,
      },
      {
        title: "AI Risk Governance",
        description: "Strategic AI deployment and governance frameworks for executive decision-makers navigating regulatory compliance and risk management.",
        participants: "C-Suite, Board Members, Risk Leaders",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800",
        alt: "AI Governance Boardroom",
        to: "/programmes/ai-risk-governance",
        level: "Executive",
        format: "Boardroom workshops",
        outcome: "AI governance and oversight capability",
        highlight: "AI assurance",
        icon: Sparkles,
      },
    ],
  },
  {
    id: "executive",
    label: "Executive Programmes",
    programmes: [
      {
        title: "Executive Leadership Programme",
        description: "CISO-in-a-Box training covering crisis management, board communication, and legal defensibility for cyber leadership roles.",
        participants: "Mid-to-Senior Professionals, Finance Leaders",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800",
        alt: "Executive Leadership Boardroom",
        to: "/programmes/executive-leadership",
        level: "Senior Leadership",
        format: "Scenario-led executive sessions",
        outcome: "Board communication and crisis leadership",
        highlight: "Leadership accelerator",
        icon: BriefcaseBusiness,
      },
      {
        title: "CNISCC",
        description: "Certified Network Infrastructure Security Coordination Centre qualification for critical national infrastructure protection and incident response coordination, designed specifically for the unique security challenges of the civil nuclear sector.",
        participants: "Government Professionals, CNI Operators",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800",
        alt: "CNISCC Training",
        to: "/programmes/cniscc",
        level: "Specialist",
        format: "Critical infrastructure simulation",
        outcome: "Incident coordination for high-risk sectors",
        highlight: "CNI security",
        icon: RadioTower,
      },
      {
        title: "Corporate Bespoke Training",
        description: "Tailored training programmes designed to address specific organisational needs, technology stacks, and risk profiles for enterprise teams.",
        participants: "Corporate Teams, Department Heads",
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800",
        alt: "Corporate Bespoke Training",
        level: "Enterprise",
        format: "Custom workshops",
        outcome: "Team capability mapped to business risk",
        highlight: "Tailored delivery",
        icon: Building2,
      },
      {
        title: "Data Privacy Basics (GDPR & Ethics)",
        description: "Learn core principles of data protection, GDPR compliance, and ethical handling of user data in modern digital systems.",
        participants: "Students, Beginners, Data Enthusiasts",
        image: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?q=80&w=800",
        alt: "Data Privacy",
        level: "Foundation",
        format: "Guided essentials",
        outcome: "Privacy-first decision-making",
        highlight: "GDPR and ethics",
        icon: LockKeyhole,
      },
    ],
  },
  {
    id: "foundation",
    label: "Foundation Programmes",
    programmes: [
      {
        title: "Introduction to Ethical Hacking",
        description: "Explore hacking fundamentals, tools, and techniques used to identify system vulnerabilities and strengthen cybersecurity defences.",
        participants: "Students, Tech Beginners, Security Aspirants",
        image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=800",
        alt: "Ethical Hacking",
        level: "Beginner",
        format: "Practical walkthroughs",
        outcome: "Vulnerability discovery mindset",
        highlight: "Offensive security basics",
        icon: ShieldAlert,
      },
      {
        title: "SOC Fundamentals",
        description: "Understand how SOC teams monitor, detect, and respond to cyber threats in real-time enterprise environments.",
        participants: "Early Professionals, IT Analysts, Security Engineers",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800",
        alt: "SOC Operations",
        level: "Foundation",
        format: "Detection workflow labs",
        outcome: "SOC monitoring and response readiness",
        highlight: "Blue team operations",
        icon: MonitorCog,
      },
      {
        title: "VAPT Basics",
        description: "Learn how to identify vulnerabilities, scan systems, and perform penetration testing to secure applications and networks.",
        participants: "Early Professionals, Cybersecurity Learners",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
        alt: "VAPT",
        level: "Foundation",
        format: "Tool-led practice",
        outcome: "Assessment and reporting fundamentals",
        highlight: "Testing essentials",
        icon: Network,
      },
      {
        title: "Phishing Simulation & Awareness",
        description: "Simulate phishing attacks and train employees to recognise and respond to threats, reducing human-related security risks.",
        participants: "Organisations, HR Teams, Security Leaders",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800",
        alt: "Phishing Awareness",
        level: "Organisation-wide",
        format: "Simulation + coaching",
        outcome: "Improved reporting and safer behaviour",
        highlight: "Human risk reduction",
        icon: Users,
      },
    ],
  },
];

export function AcademyPrograms() {
  const [activeSectionId, setActiveSectionId] = useState(programmeSections[0].id);
  const activeSection = programmeSections.find((section) => section.id === activeSectionId) ?? programmeSections[0];

  return (
    <div className="bg-white pt-20 text-slate-950">
      <div className="absolute left-4 top-6 z-50">
        <Link
          to="/"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-slate-200 shadow-lg backdrop-blur-md transition-all hover:border-orange-300 hover:text-white"
          aria-label="Back to Academy"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
      </div>

      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(234,88,12,0.12),transparent_34%),linear-gradient(135deg,#ffffff_0%,#f8fafc_52%,#f1f5f9_100%)] py-10 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-7xl text-center"
          >
            <h1
              className="inline-block text-3xl sm:text-4xl md:text-5xl font-black tracking-wide uppercase leading-tight"
              style={{ color: "#000000" }}
            >
              Explore Our Learning Pathways
            </h1>
            <p className="mt-4 whitespace-nowrap text-[clamp(0.82rem,2vw,1.125rem)] leading-7 text-slate-700">
              Industry-led programmes designed to develop practical skills for today's digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2 shadow-[0_14px_38px_rgba(15,23,42,0.06)] sm:mb-12 sm:flex-row">
              {programmeSections.map((section) => {
                const isActive = section.id === activeSectionId;

                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveSectionId(section.id)}
                    className={`flex-1 rounded-md px-4 py-3 text-center text-sm font-extrabold uppercase tracking-[0.1em] transition-all duration-300 ${isActive
                        ? "bg-slate-950 text-white shadow-lg shadow-slate-900/15"
                        : "text-slate-700 hover:bg-white hover:text-slate-950"
                      }`}
                  >
                    {section.label}
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeSection.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-7 xl:grid-cols-2 xl:gap-8"
            >
              {activeSection.programmes.map((programme, index) => (
                <ProgrammeCard
                  key={programme.title}
                  programme={programme}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="mx-auto grid max-w-6xl gap-6 rounded-lg border border-slate-800 bg-slate-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">Need help choosing?</p>
              <h2 className="mt-2 text-2xl font-black sm:text-3xl">Match the right programme to your role, goals, and experience.</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
                Our advisors can help learners and teams select the right pathway, from individual career development to enterprise capability building.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-white/10 transition-colors hover:bg-orange-50"
            >
              Contact an Advisor
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ProgrammeCard({
  programme,
  index,
}: {
  programme: Programme;
  index: number;
}) {
  const isAvailable = Boolean(programme.to);
  const ProgrammeIcon = programme.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group flex min-h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_12px_34px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_20px_54px_rgba(15,23,42,0.12)]"
    >
      <div className="relative h-64 overflow-hidden bg-slate-900 sm:h-72 lg:h-80">
        <img
          src={programme.image}
          alt={programme.alt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/18 to-transparent" />
        <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/75 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md">
            <ProgrammeIcon className="h-3.5 w-3.5 text-orange-300" />
            {programme.highlight}
          </span>
          <span
            className={`rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] backdrop-blur-md ${isAvailable
                ? "border border-emerald-300/30 bg-emerald-500/20 text-emerald-50"
                : "border border-orange-300/30 bg-orange-500/20 text-orange-50"
              }`}
          >
            {isAvailable ? "Live Course" : "Coming Soon"}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="mt-1 text-2xl font-black leading-tight text-white">{programme.title}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[15px] leading-7 text-slate-700">{programme.description}</p>

        <div className="mt-5 grid gap-3">
          <InfoRow icon={Users} label="Participants" value={programme.participants} />
          <div className="grid gap-3 sm:grid-cols-2">
            <InfoRow icon={GraduationCap} label="Level" value={programme.level} compact />
            <InfoRow icon={CalendarClock} label="Format" value={programme.format} compact />
          </div>
          <InfoRow icon={CheckCircle2} label="Outcome" value={programme.outcome} />
        </div>

        <div className="mt-auto pt-6">
          {isAvailable ? (
            <Link
              to={programme.to as string}
              className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#cd5c30] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#cd5c30]/20 transition-all hover:bg-[#b04d27] active:scale-[0.98]"
            >
              View Course
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <button
              type="button"
              className="inline-flex min-h-[46px] w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-orange-300 bg-orange-50 px-6 py-3 text-sm font-bold text-orange-700 shadow-[0_10px_24px_rgba(234,88,12,0.12)]"
              aria-disabled="true"
            >
              Upcoming Course
              <CalendarClock className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  compact = false,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  compact?: boolean;
}) {
  return (
    <div className={`flex items-start gap-3 rounded-md border border-slate-200 bg-slate-50 ${compact ? "px-3 py-3" : "px-4 py-3"}`}>
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">{label}</p>
        <p className="mt-0.5 text-sm font-semibold leading-5 text-slate-900">{value}</p>
      </div>
    </div>
  );
}
