import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft } from "lucide-react";
export default function EarlyCareerProgram() {
  return (
    <section className="min-h-screen bg-slate-950 pt-32 pb-16">
      <div className="container mx-auto px-6">
        <div className="absolute top-6 left-4 z-50">
                <Link
                    to="/"
                    className="flex items-center justify-center w-10 h-10 bg-slate-900/50 backdrop-blur-md border border-slate-800 text-slate-300 rounded-full hover:text-white hover:border-slate-700 transition-all shadow-lg"
                    aria-label="Back to Academy"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
            </div>
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Programs for Early Career Professionals
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Advance your career with specialised risk expertise and hands-on practitioner training.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">

          {/* INVESTMENT BANKING */}
          <div className="bg-white rounded-[24px] border border-orange-200/80 shadow-[0_8px_30px_rgb(234,88,12,0.08)] flex flex-col overflow-hidden pb-8 transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(234,88,12,0.12)]">
            <div className="w-full">
              <img
                src="https://images.unsplash.com/photo-1630464373688-fb6a37ce89ed?q=80&w=800"
                alt="Investment Banking"
                className="w-full h-[220px] object-cover"
              />
            </div>
            <div className="px-8 mt-8 flex flex-col flex-grow">
              <h3 className="text-[26px] font-bold mb-5 text-black">Investment Banking & Digital Risk</h3>
              <p className="text-slate-500 text-[16px] mb-6 flex-grow leading-relaxed">
                Deepen your understanding of financial risk, regulatory frameworks, and digital operations in investment banking environments.
              </p>
              <p className="text-slate-900 font-medium text-[15px] mb-8">
                Junior Analysts, Associate-Level Professionals
              </p>
              <Link
                to="/programs/investment-banking"
                className="block w-full py-4 bg-[#cd5c30] hover:bg-[#b04d27] text-white rounded-full font-semibold transition-colors text-center text-lg shadow-lg shadow-[#cd5c30]/20 active:scale-[0.98]"
              >
                View Course
              </Link>
            </div>
          </div>

          {/* CYBER RESILIENCE */}
          <div className="bg-white rounded-[24px] border border-orange-200/80 shadow-[0_8px_30px_rgb(234,88,12,0.08)] flex flex-col overflow-hidden pb-8 transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(234,88,12,0.12)]">
            <div className="w-full">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800"
                alt="Cyber Resilience"
                className="w-full h-[220px] object-cover"
              />
            </div>
            <div className="px-8 mt-8 flex flex-col flex-grow">
              <h3 className="text-[26px] font-bold mb-5 text-black">Cyber Resilience Practitioner</h3>
              <p className="text-slate-500 text-[16px] mb-6 flex-grow leading-relaxed">
                Build practical cyber resilience skills covering threat detection, incident response, and security operations for early-stage professionals.
              </p>
              <p className="text-slate-900 font-medium text-[15px] mb-8">
                Security Analysts, IT Professionals (1–4 yrs)
              </p>
              <Link
                to="/programs/cyber-resilience-practitioner"
                className="block w-full py-4 bg-[#cd5c30] hover:bg-[#b04d27] text-white rounded-full font-semibold transition-colors text-center text-lg shadow-lg shadow-[#cd5c30]/20 active:scale-[0.98]"
              >
                View Course
              </Link>
            </div>
          </div>

          {/* DIGITAL RISK FUNDAMENTALS */}
          <div className="bg-white rounded-[24px] border border-orange-200/80 shadow-[0_8px_30px_rgb(234,88,12,0.08)] flex flex-col overflow-hidden pb-8 transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(234,88,12,0.12)]">
            <div className="w-full">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800"
                alt="Digital Risk Fundamentals"
                className="w-full h-[220px] object-cover"
              />
            </div>
            <div className="px-8 mt-8 flex flex-col flex-grow">
              <h3 className="text-[26px] font-bold mb-5 text-black">Digital Risk Fundamentals</h3>
              <p className="text-slate-500 text-[16px] mb-6 flex-grow leading-relaxed">
                Consolidate your risk knowledge with a structured programme covering governance frameworks, risk assessment, and regulatory expectations.
              </p>
              <p className="text-slate-900 font-medium text-[15px] mb-8">
                Risk Coordinators, Compliance Associates
              </p>
              <Link
                to="/programs/digital-risk-fundamentals"
                className="block w-full py-4 bg-[#cd5c30] hover:bg-[#b04d27] text-white rounded-full font-semibold transition-colors text-center text-lg shadow-lg shadow-[#cd5c30]/20 active:scale-[0.98]"
              >
                View Course
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
