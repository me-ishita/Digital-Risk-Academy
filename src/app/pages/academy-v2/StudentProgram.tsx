import { Link } from "react-router-dom";

export default function StudentProgram() {
  return (
    <section className="min-h-screen bg-slate-950 pt-32 pb-16">
      <div className="container mx-auto px-6">

        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Programs for Students
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Launch your digital risk career with industry-ready skills and real-world experience.
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
                A 4-week practitioner-led programme bridging the gap between academic learning and real-world investment banking and risk roles.
              </p>
              <p className="text-slate-900 font-medium text-[15px] mb-8">
                Final-Year Students, Recent Graduates
              </p>
              <Link
                to="/programs/investment-banking"
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
                src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800"
                alt="Digital Risk Fundamentals"
                className="w-full h-[220px] object-cover"
              />
            </div>
            <div className="px-8 mt-8 flex flex-col flex-grow">
              <h3 className="text-[26px] font-bold mb-5 text-black">Digital Risk Fundamentals</h3>
              <p className="text-slate-500 text-[16px] mb-6 flex-grow leading-relaxed">
                Build a solid foundation in digital risk, governance, and compliance — the essential starting point for any risk or security career.
              </p>
              <p className="text-slate-900 font-medium text-[15px] mb-8">
                Undergraduates, Bootcamp Graduates
              </p>
              <Link
                to="/programs/digital-risk-fundamentals"
                className="block w-full py-4 bg-[#cd5c30] hover:bg-[#b04d27] text-white rounded-full font-semibold transition-colors text-center text-lg shadow-lg shadow-[#cd5c30]/20 active:scale-[0.98]"
              >
                View Course
              </Link>
            </div>
          </div>

          {/* GRC FUNDAMENTALS */}
          <div className="bg-white rounded-[24px] border border-orange-200/80 shadow-[0_8px_30px_rgb(234,88,12,0.08)] flex flex-col overflow-hidden pb-8 transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(234,88,12,0.12)]">
            <div className="w-full">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800"
                alt="GRC Fundamentals"
                className="w-full h-[220px] object-cover"
              />
            </div>
            <div className="px-8 mt-8 flex flex-col flex-grow">
              <h3 className="text-[26px] font-bold mb-5 text-black">GRC Fundamentals</h3>
              <p className="text-slate-500 text-[16px] mb-6 flex-grow leading-relaxed">
                Understand governance, risk management, and compliance frameworks used in regulated industries — a sought-after skillset for graduate roles.
              </p>
              <p className="text-slate-900 font-medium text-[15px] mb-8">
                Students, Career Changers
              </p>
              <button
                type="button"
                className="block w-full py-4 text-center text-lg font-semibold rounded-full border border-orange-500 text-orange-400 bg-transparent shadow-[0_0_12px_rgba(234,88,12,0.4)] hover:shadow-[0_0_18px_rgba(234,88,12,0.7)] transition-all duration-300 cursor-not-allowed opacity-70"
              >
                Upcoming Course
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
