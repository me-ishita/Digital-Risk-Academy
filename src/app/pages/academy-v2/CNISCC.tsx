import { motion } from "motion/react";
import { Link } from "react-router";
import { CheckCircle2, Trophy, ShieldCheck, UserCheck, Zap, ArrowLeft } from "lucide-react";

export default function CNISCC() {
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
        {/* TOP SECTION: Hero Title & Desc */}
        <div className="mb-10 lg:w-3/4 mt-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Civil Nuclear Industry Security Controller Course</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mb-6">
            Comprehensive two-day intensive training program designed to develop specialized security controllers for the UK's civil nuclear industry
          </p>
          <div className="inline-block px-3 py-1 text-slate-700 font-bold text-sm tracking-wider uppercase border border-slate-300 rounded">
            FIRST OF ITS KIND
          </div>
        </div>

        {/* Image and Register Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          <div className="lg:col-span-8">
            <div className="w-full rounded-2xl overflow-hidden border border-orange-100 shadow-[0_4px_24px_rgb(234,88,12,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200"
                alt="Nuclear Security Training Boardroom"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-orange-200/80 p-8 shadow-[0_8px_30px_rgb(234,88,12,0.06)]">

              <div className="flex items-center justify-between mb-8">
                <span className="text-slate-500 font-medium text-sm">Next Cohort</span>
                <span className="px-3 py-1 text-blue-500 border border-blue-200 rounded-full text-xs font-semibold">2 Days</span>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <div className="font-bold text-slate-900">Duration</div>
                  <div className="text-slate-500 text-sm">2 Days Intensive Training</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Format</div>
                  <div className="text-slate-500 text-sm">In-Person Classroom Training</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Group Size</div>
                  <div className="text-slate-500 text-sm">Maximum 16 Participants</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Certification</div>
                  <div className="text-slate-500 text-sm">Industry Recognized Certificate</div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  to="/register"
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
            {/* OVERVIEW */}
            <div>
              <h2 className="text-3xl font-bold mb-12">Course Overview</h2>
              <div className="text-slate-600 space-y-8 leading-relaxed text-lg">
                <p>
                  A specialized program combining theoretical knowledge with practical application, designed specifically for the unique security challenges of the civil nuclear sector
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-slate-900 text-xl mb-2">Intensive Format</h3>
                    <p className="text-base">Concentrated two-day program maximizing learning efficiency while minimizing time away from operations</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xl mb-2">Industry-Focused</h3>
                    <p className="text-base">Content specifically tailored to civil nuclear industry requirements and regulatory frameworks</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xl mb-2">Expert Instruction</h3>
                    <p className="text-base">Led by certified professionals with extensive nuclear security and regulatory experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CURRICULUM STRUCTURE */}
            <div>
              <h2 className="text-3xl font-bold mb-12">Curriculum Structure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    day: "Day One: Foundations & Frameworks",
                    bullets: [
                      "Nuclear Security Regulatory Framework",
                      "ONR Security Assessment Principles",
                      "Security Controller Roles & Responsibilities",
                      "Threat Assessment Methodologies",
                      "Security Plan Development"
                    ]
                  },
                  {
                    day: "Day Two: Implementation & Practice",
                    bullets: [
                      "Incident Response Protocols",
                      "Security System Integration",
                      "Case Study Analysis",
                      "Practical Scenario Exercises",
                      "Assessment & Certification"
                    ]
                  }
                ].map((mod, i) => (
                  <div key={i} className="bg-white rounded-xl border border-orange-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg mb-4 text-slate-900">{mod.day}</h4>
                    <ul className="list-disc pl-5 text-slate-600 text-sm space-y-2">
                      {mod.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
            {/* Target Audience Card */}
            <div className="bg-white rounded-2xl border border-orange-200/80 p-8 shadow-[0_8px_30px_rgb(234,88,12,0.06)]">
              <h3 className="text-xl font-bold mb-6">Target Audience</h3>
              <ul className="space-y-4">
                {[
                  "Security Managers",
                  "Compliance Officers",
                  "Operations Personnel",
                  "Risk Assessors",
                  "Training Coordinators",
                  "Consultants"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#cd5c30] shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certificate Course Options */}
            <div className="bg-white rounded-2xl border border-orange-200/80 p-8 shadow-[0_8px_30px_rgb(234,88,12,0.06)]">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Certificate Course</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Comprehensive training with course completion certificate
              </p>
              <div className="text-lg font-bold text-[#cd5c30] mb-6">£750 per participant</div>
              <Link
                to="/register"
                className="block w-full py-3.5 text-center bg-[#cd5c30] hover:bg-[#b04d27] text-white rounded-full font-semibold transition-colors text-sm active:scale-[0.98]"
              >
                Select Certificate
              </Link>
            </div>

            {/* Option 2 */}
            <div className="bg-white rounded-2xl border-2 border-orange-300 p-8 shadow-[0_8px_30px_rgb(234,88,12,0.08)] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-50 border border-blue-200 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Recommended
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 mt-2">Qualification Course</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Complete program with formal assessment and industry qualification
              </p>
              <div className="text-lg font-bold text-[#cd5c30] mb-6">£850 per participant</div>
              <Link
                to="/register"
                className="block w-full py-3.5 text-center bg-[#cd5c30] hover:bg-[#b04d27] text-white rounded-full font-semibold transition-colors text-sm active:scale-[0.98]"
              >
                Select Qualification
              </Link>
            </div>

          </div>
        </div>

        {/* KEY LEARNING BENEFITS */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Learning Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Comprehensive Knowledge", desc: "Gain deep understanding of nuclear security principles and regulatory requirements" },
              { title: "Practical Skills", desc: "Develop hands-on capabilities for implementing security controls and incident response" },
              { title: "Professional Network", desc: "Connect with industry peers and experts within the nuclear security community" },
              { title: "Career Advancement", desc: "Enhance professional credentials in the specialized nuclear security field" }
            ].map((benefit, i) => (
              <div key={i} className="bg-white rounded-xl border border-orange-200 p-8 shadow-sm text-center">
                <h4 className="font-bold text-lg mb-3 text-slate-900">{benefit.title}</h4>
                <p className="text-slate-500 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE CNISCC */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose CNISCC</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Trophy, title: "Industry Leadership", desc: "First and only specialized nuclear security controller course in the UK" },
              { icon: ShieldCheck, title: "ONR Aligned", desc: "Fully aligned with Office for Nuclear Regulation security requirements" },
              { icon: UserCheck, title: "Expert Instructors", desc: "Taught by certified professionals with decades of nuclear experience" },
              { icon: Zap, title: "Immediate Application", desc: "Practical, scenario-based learning that can be immediately applied" }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-xl border border-orange-200 p-8 shadow-sm text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg bg-orange-50 text-[#cd5c30] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-slate-900">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* APPLICATION PROCESS Section */}
        <div className="mt-12 mb-20 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Application Process</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Our selective admissions process ensures every participant is prepared for this intensive specialized training.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "Application", desc: "Submit current role and security clearance details" },
              { step: "Verification", desc: "Confirm industry eligibility and sponsorship" },
              { step: "Acceptance", desc: "Course materials and joining instructions issued" },
              { step: "Certification", desc: "Intensive 2-day training and final assessment" }
            ].map((process, i) => (
              <div key={i} className="bg-white rounded-xl border border-orange-200 p-8 shadow-sm text-center">
                <h4 className="font-bold text-lg mb-3">{process.step}</h4>
                <p className="text-slate-500 text-sm max-w-[180px] mx-auto">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

