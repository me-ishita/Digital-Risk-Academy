import { motion } from "motion/react";
import { Link } from "react-router";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export default function DigitalRiskFundamentals() {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen font-sans text-slate-900">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="absolute top-6 left-4 z-50">
                <Link
                    to="/programmes"
                    className="flex items-center justify-center w-10 h-10 bg-slate-900/50 backdrop-blur-md border border-slate-800 text-slate-300 rounded-full hover:text-white hover:border-slate-700 transition-all shadow-lg"
                    aria-label="Back to Academy"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
            </div>
        {/* TOP SECTION: Hero Title & Desc */}
        <div className="mb-10 lg:w-2/3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 mt-4">Digital Risk Fundamentals</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            Master the essential frameworks and methodologies that underpin modern digital risk management. Build foundational expertise in cybersecurity governance, risk assessment, and compliance frameworks.
          </p>
        </div>

        {/* Image and Register Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          <div className="lg:col-span-8">
            <div className="w-full rounded-2xl overflow-hidden border border-orange-100 shadow-[0_4px_24px_rgb(234,88,12,0.1)]">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200" 
                alt="Dashboard" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-orange-200/80 p-8 shadow-[0_8px_30px_rgb(234,88,12,0.06)]">
              <div className="flex items-center justify-between mb-6">
                <span className="text-slate-500 font-medium text-sm">Early Bird Discount Available</span>
                <span className="px-3 py-1 text-blue-500 border border-blue-200 rounded-full text-xs font-semibold">6 Weeks</span>
              </div>

              <div className="space-y-5 mb-8">
                <div>
                  <div className="font-bold text-slate-900">Next Cohort Starts</div>
                  <div className="text-slate-500 text-sm">Early Bird Discount Available</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Delivery Format</div>
                  <div className="text-slate-500 text-sm">Live Online + Self-Paced</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Certificate</div>
                  <div className="text-slate-500 text-sm">Digital Risk Professional</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Class Size</div>
                  <div className="text-slate-500 text-sm">Limited to 25 participants</div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  to="/register?course=grc-fundamentals"
                  className="block w-full py-3.5 text-center bg-[#cd5c30] hover:bg-[#b04d27] text-white rounded-full font-semibold transition-colors shadow-lg shadow-orange-900/20 active:scale-[0.98]"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative items-start mt-12">
          <div className="lg:col-span-8 flex flex-col gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-12">Course Overview</h2>
              <div className="text-slate-600 space-y-5 leading-relaxed text-lg">
                <p>
                  Digital Risk Fundamentals provides comprehensive training in the core frameworks that govern modern cybersecurity practice. This intensive programme covers risk assessment methodologies, compliance frameworks, and governance structures essential for professional cybersecurity roles.
                </p>
                <p>
                  Through practical workshops and real-world case studies, participants develop hands-on expertise in implementing NIST Cybersecurity Framework, NCSC Cyber Assessment Framework, and ISO 27001 controls. The curriculum emphasises practical application over theoretical knowledge.
                </p>
                <p>
                  Graduates emerge with immediately applicable skills in risk quantification, control implementation, and regulatory compliance—ready to contribute meaningfully to organisational cybersecurity programmes from day one.
                </p>
              </div>
            </div>

            {/* CURRICULUM OUTLINE Section */}
            <div>
              <h2 className="text-3xl font-bold mb-12">Curriculum Outline</h2>
              <div className="space-y-4">
                
                {[
                  {
                    week: "Week 1-2: Risk Assessment Foundations",
                    desc: "Fundamental risk assessment methodologies and quantitative analysis techniques. Introduction to enterprise risk management principles and stakeholder communication.",
                    bullets: ["Asset identification and classification methodologies", "Threat modeling and vulnerability assessment", "Risk quantification and impact analysis"]
                  },
                  {
                    week: "Week 3-4: Framework Implementation",
                    desc: "Deep-dive into NIST CSF, NCSC CAF, and ISO 27001 implementation. Practical workshops on control selection and implementation planning.",
                    bullets: ["NIST CSF profile development and maturity assessment", "NCSC CAF principles and outcome implementation", "ISO 27001 control selection and documentation"]
                  },
                  {
                    week: "Week 5-6: Governance and Compliance",
                    desc: "Regulatory compliance requirements, audit preparation, and governance structures. Executive reporting and board communication strategies.",
                    bullets: ["Regulatory mapping and compliance assessment", "Audit evidence collection and management", "Executive risk reporting and KPI development"]
                  }
                ].map((mod, i) => (
                  <div key={i} className="bg-white rounded-xl border border-orange-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg mb-3">{mod.week}</h4>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{mod.desc}</p>
                    <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1.5">
                      {mod.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                    </ul>
                  </div>
                ))}

              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
            {/* What's Included Card */}
            <div className="bg-white rounded-2xl border border-orange-200/80 p-8 shadow-[0_8px_30px_rgb(234,88,12,0.06)]">
              <h3 className="text-xl font-bold mb-6">What's Included</h3>
              <ul className="space-y-4">
                {[
                  "18 hours of live instruction",
                  "Framework implementation toolkits",
                  "Risk assessment templates",
                  "1-year access to resources",
                  "Professional certificate",
                  "Alumni network access"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#cd5c30] shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites Card */}
            <div className="bg-white rounded-2xl border border-orange-200/80 p-8 shadow-[0_8px_30px_rgb(234,88,12,0.06)]">
              <h3 className="text-xl font-bold mb-6">Prerequisites</h3>
              <div className="space-y-5 text-sm">
                <p>
                  <span className="font-bold text-slate-900">Experience:</span> <span className="text-slate-600">2+ years in IT, security, or risk management</span>
                </p>
                <p>
                  <span className="font-bold text-slate-900">Education:</span> <span className="text-slate-600">Bachelor's degree or equivalent professional experience</span>
                </p>
                <p>
                  <span className="font-bold text-slate-900">Technical:</span> <span className="text-slate-600">Basic understanding of IT infrastructure and security concepts</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* WHO SHOULD ATTEND Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-12 text-center">Who Should Attend</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {[
              { title: "IT Professionals", desc: "Technical professionals transitioning into cybersecurity roles or seeking formal risk management training." },
              { title: "Security Analysts", desc: "Early-career security professionals seeking deeper understanding of risk frameworks and governance." },
              { title: "Risk Managers", desc: "Operational risk professionals expanding into cyber risk domain with formal framework training." },
              { title: "Compliance Officers", desc: "Governance professionals requiring deeper technical understanding of cybersecurity controls." }
            ].map((role, i) => (
              <div key={i} className="bg-white border border-orange-200 rounded-xl p-6 shadow-sm text-center">
                <h4 className="font-bold text-base mb-3">{role.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{role.desc}</p>
              </div>
            ))}
            
          </div>
        </div>

        {/* LEARNING OUTCOMES Section */}
        <div className="mt-12 mb-20 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Learning Outcomes</h2>
          
          <div className="flex flex-col gap-4">
            {/* Top row - 2 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-orange-200 rounded-lg p-4 flex items-center gap-4 shadow-sm">
                <span className="text-[#cd5c30] text-3xl font-bold">1</span>
                <p className="text-sm text-slate-600 leading-snug">Conduct comprehensive risk assessments using industry-standard methodologies and quantitative analysis techniques</p>
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-4 flex items-center gap-4 shadow-sm">
                <span className="text-[#cd5c30] text-3xl font-bold">2</span>
                <p className="text-sm text-slate-600 leading-snug">Implement NIST CSF, NCSC CAF, and ISO 27001 controls within existing organisational structures</p>
              </div>
            </div>

            {/* Middle row - 2 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-orange-200 rounded-lg p-4 flex items-center gap-4 shadow-sm">
                <span className="text-[#cd5c30] text-3xl font-bold">3</span>
                <p className="text-sm text-slate-600 leading-snug">Design governance frameworks that align cybersecurity activities with business objectives</p>
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-4 flex items-center gap-4 shadow-sm">
                <span className="text-[#cd5c30] text-3xl font-bold">4</span>
                <p className="text-sm text-slate-600 leading-snug">Prepare audit evidence and documentation that meets regulatory compliance requirements</p>
              </div>
            </div>

            {/* Bottom row - centered item */}
            <div className="flex justify-center">
              <div className="bg-white border border-orange-200 rounded-lg p-4 flex items-center gap-4 shadow-sm w-full md:w-1/2">
                <span className="text-[#cd5c30] text-3xl font-bold">5</span>
                <p className="text-sm text-slate-600 leading-snug">Communicate risk posture and improvement recommendations to executive stakeholders</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
