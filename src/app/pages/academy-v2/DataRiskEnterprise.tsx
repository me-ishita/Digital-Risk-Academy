import { motion } from "motion/react";
import { Link } from "react-router";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export default function DataRiskEnterprise() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen font-sans text-slate-900">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
      <div className="absolute top-6 left-4 z-50">
                <Link
                    to="/programs"
                    className="flex items-center justify-center w-10 h-10 bg-slate-900/50 backdrop-blur-md border border-slate-800 text-slate-300 rounded-full hover:text-white hover:border-slate-700 transition-all shadow-lg"
                    aria-label="Back to Academy"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
            </div>
        {/* HERO */}
        <div className="mb-10 lg:w-2/3 mt-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Data Risk for Modern Enterprise
          </h1>
          <p className="text-lg font-medium text-slate-700 mb-6">
            (Governance • Privacy • Compliance)
          </p>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            Master enterprise-grade data governance, privacy frameworks, and regulatory compliance.
            Learn how to manage complex data ecosystems, mitigate risk exposure, and build resilient
            data strategies aligned with global standards.
          </p>
        </div>

        {/* IMAGE + REGISTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          <div className="lg:col-span-8">
            <div className="w-full rounded-2xl overflow-hidden border border-orange-100 shadow-[0_4px_24px_rgb(234,88,12,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
                alt="Data Governance Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-orange-200/80 p-8 shadow-[0_8px_30px_rgb(234,88,12,0.06)]">
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-slate-500 font-medium text-sm">
                  Next Cohort Starts
                </span>
                <span className="px-3 py-1 text-blue-500 border border-blue-200 rounded-full text-xs font-semibold">
                  3 Weeks
                </span>
              </div>

              <div className="space-y-5 mb-8">
                <div>
                  <div className="font-bold text-slate-900">Duration</div>
                  <div className="text-slate-500 text-sm">4 Weeks</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Format</div>
                  <div className="text-slate-500 text-sm">Hybrid (Live + Case Study)</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Level</div>
                  <div className="text-slate-500 text-sm">Intermediate to Advanced</div>
                </div>
              </div>

              <Link
                to="/register"
                className="block w-full py-3.5 text-center bg-[#cd5c30] hover:bg-[#b04d27] text-white rounded-full font-semibold transition-colors shadow-lg shadow-orange-900/20 active:scale-[0.98]"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">

          {/* LEFT */}
          <div className="lg:col-span-8 flex flex-col gap-12">

            {/* OVERVIEW */}
            <div>
              <h2 className="text-3xl font-bold mb-10">Programme Overview</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                This programme provides a comprehensive understanding of data risk management in
                modern enterprises. Participants will learn how to design governance frameworks,
                implement privacy-first strategies, and ensure regulatory compliance across global
                jurisdictions such as GDPR and emerging data laws.
              </p>
            </div>

            {/* CURRICULUM */}
            <div>
              <h2 className="text-3xl font-bold mb-10">Curriculum Structure</h2>

              {[
                {
                  week: "Week 1: Data Foundations",
                  bullets: [
                    "Data lifecycle management",
                    "Data classification & ownership",
                    "Data governance frameworks",
                    "Risk identification models",
                  ],
                },
                {
                  week: "Week 2: Privacy & Compliance",
                  bullets: [
                    "GDPR & global regulations",
                    "Data protection strategies",
                    "Privacy-by-design principles",
                    "Audit readiness",
                  ],
                },
                {
                  week: "Week 3: Enterprise Risk",
                  bullets: [
                    "Data breach scenarios",
                    "Third-party risk management",
                    "Security controls implementation",
                    "Incident response planning",
                  ],
                },
                {
                  week: "Week 4: Strategic Integration",
                  bullets: [
                    "Enterprise data strategy",
                    "Risk reporting to leadership",
                    "Cross-functional alignment",
                    "Future data risk trends",
                  ],
                },
              ].map((mod, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-orange-200 p-6 mb-4 shadow-sm hover:shadow-md transition"
                >
                  <h4 className="font-bold text-lg mb-3">{mod.week}</h4>
                  <ul className="list-disc pl-5 text-slate-600 text-sm space-y-2">
                    {mod.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-4 flex flex-col gap-6">

            {/* AUDIENCE */}
            <div className="bg-white rounded-2xl border border-orange-200/80 p-8 shadow-[0_8px_30px_rgb(234,88,12,0.06)]">
              <h3 className="text-xl font-bold mb-6">Target Audience</h3>
              <ul className="space-y-4">
                {[
                  "Data Officers",
                  "Compliance Teams",
                  "IT Directors",
                  "Risk & Governance Professionals",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#cd5c30] mt-0.5" />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* OUTCOME */}
            <div className="bg-white rounded-2xl border border-orange-200/80 p-8 shadow-[0_8px_30px_rgb(234,88,12,0.06)]">
              <h3 className="text-xl font-bold mb-6">Outcome</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Gain the ability to design and implement enterprise-wide data risk strategies,
                ensuring compliance, resilience, and long-term data governance maturity.
              </p>
              <div className="text-[#cd5c30] text-sm font-semibold">
                Enterprise Data Risk Leader
              </div>
            </div>
          </div>
        </div>

        {/* CORE SKILLS */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-10">Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Data Governance", desc: "Design enterprise governance frameworks" },
              { title: "Privacy Compliance", desc: "Implement GDPR & global regulations" },
              { title: "Risk Management", desc: "Identify & mitigate data risks" },
              { title: "Data Strategy", desc: "Align data with business goals" },
            ].map((skill, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-orange-200 p-6 text-center shadow-sm"
              >
                <h4 className="font-bold text-lg mb-2">{skill.title}</h4>
                <p className="text-slate-500 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}