import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft } from "lucide-react";
export default function ExperiencedProgram() {
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
            Programs for Experienced Professionals
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Strategic programs for leadership, governance, and enterprise risk.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">

          {/* AI RISK */}
          <div className="bg-white rounded-[24px] border border-orange-200/80 shadow-[0_8px_30px_rgb(234,88,12,0.08)] flex flex-col overflow-hidden pb-8 transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(234,88,12,0.12)]">
                {/* Image */}
                <div className="w-full">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800"
                    alt="AI Governance Boardroom"
                    className="w-full h-[220px] object-cover"
                  />
                </div>
                {/* Content */}
                <div className="px-8 mt-8 flex flex-col flex-grow">

                  <h3 className="text-[26px] font-bold mb-5 text-black">AI Risk Governance</h3>
                  <p className="text-slate-500 text-[16px] mb-6 flex-grow leading-relaxed">
                    Strategic AI deployment and governance frameworks for executive decision-makers navigating regulatory compliance and risk management.
                  </p>
                  <p className="text-slate-900 font-medium text-[15px] mb-8">
                    C-Suite, Board Members, Risk Leaders
                  </p>
                  <Link
                    to="/programs/ai-risk-governance"
                    className="block w-full py-4 bg-[#cd5c30] hover:bg-[#b04d27] text-white rounded-full font-semibold transition-colors text-center text-lg shadow-lg shadow-[#cd5c30]/20 active:scale-[0.98]"
                  >
                    View Course
                  </Link>
                </div>
              </div>

          {/* DATA RISK */}
          <div className="bg-white rounded-[24px] border border-orange-200/80 shadow-[0_8px_30px_rgb(234,88,12,0.08)] flex flex-col overflow-hidden pb-8 transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(234,88,12,0.12)]">
                {/* Image */}
                <div className="w-full">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
                    alt="Data Risk Dashboard"
                    className="w-full h-[220px] object-cover"
                  />
                </div>
                {/* Content */}
                <div className="px-8 mt-8 flex flex-col flex-grow">
                  <h3 className="text-[26px] font-bold mb-5 text-black">Data Risk for Modern Enterprise</h3>
                  <p className="text-slate-500 text-[16px] mb-6 flex-grow leading-relaxed">
                    Comprehensive data governance, privacy protection, and regulatory compliance framework for enterprises managing complex data ecosystems.
                  </p>
                  <p className="text-slate-900 font-medium text-[15px] mb-8">
                    Data Officers, Compliance Teams, IT Directors
                  </p>
                  <Link
                    to="/programs/data-risk-enterprise"
                    className="block w-full py-4 bg-[#cd5c30] hover:bg-[#b04d27] text-white rounded-full font-semibold transition-colors text-center text-lg shadow-lg shadow-[#cd5c30]/20 active:scale-[0.98]"
                  >
                    View Course
                  </Link>
                </div>
              </div>


          {/* CNISCC */}
          <div className="bg-white rounded-[24px] border border-orange-200/80 shadow-[0_8px_30px_rgb(234,88,12,0.08)] flex flex-col overflow-hidden pb-8 transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(234,88,12,0.12)]">
                {/* Image */}
                <div className="w-full">
                  <img
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800"
                    alt="CNISCC Training"
                    className="w-full h-[220px] object-cover"
                  />
                </div>
                {/* Content */}
                <div className="px-8 mt-8 flex flex-col flex-grow">

                  <h3 className="text-[26px] font-bold mb-5 text-black">CNISCC</h3>
                  <p className="text-slate-500 text-[16px] mb-6 flex-grow leading-relaxed">
                    Certified Network Infrastructure Security Coordination Centre qualification for critical national infrastructure protection and incident response coordination.
                  </p>
                  <p className="text-slate-900 font-medium text-[15px] mb-8">
                    Government Professionals, CNI Operators
                  </p>
                  <Link
                    to="/programs/cniscc"
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