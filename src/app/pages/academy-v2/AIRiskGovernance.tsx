import { Link } from "react-router";
import { CheckCircle2 } from "lucide-react";

export default function AIRiskGovernance() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen font-sans text-slate-900">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* TOP SECTION: Hero Title & Desc */}
        <div className="mb-10 lg:w-2/3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 mt-4">AI Risk Governance</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            Strategic AI deployment and governance frameworks for executive decision-makers navigating regulatory compliance and algorithmic risk management in enterprise environments.
          </p>
        </div>

        {/* Image and Register Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          <div className="lg:col-span-8">
            <div className="w-full rounded-2xl overflow-hidden border border-orange-100 shadow-[0_4px_24px_rgb(234,88,12,0.1)]">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200" 
                alt="AI Governance" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-orange-200/80 p-8 shadow-[0_8px_30px_rgb(234,88,12,0.06)]">
              <div className="flex items-center justify-end mb-6">
                <span className="px-5 py-1.5 text-blue-500 border border-blue-200 rounded-full text-xs font-semibold bg-white">2 Weeks</span>
              </div>

              <div className="space-y-5 mb-8">
                <div>
                  <div className="font-bold text-slate-900">Duration</div>
                  <div className="text-slate-500 text-sm mt-1">2 Weeks</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Next Cohort</div>
                  <div className="text-slate-500 text-sm mt-1 flex flex-col gap-1">
                    <span>Start Date : 15 March 2025</span>
                    <span>Application Deadline : 28 February 2025</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Availability</div>
                  <div className="text-slate-500 text-sm mt-1">6 seats remaining</div>
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

            {/* Course Details Snippet */}
            <div className="bg-white rounded-2xl border border-orange-200/80 p-8 shadow-[0_8px_30px_rgb(234,88,12,0.06)]">
              <h3 className="text-xl font-bold mb-6">Course Details</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#cd5c30] shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed"><span className="font-bold text-slate-900">Format:</span> <span className="text-slate-600">Intensive Residential</span></span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#cd5c30] shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed"><span className="font-bold text-slate-900">Commitment:</span> <span className="text-slate-600">Full-time Immersion</span></span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#cd5c30] shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed"><span className="font-bold text-slate-900">Faculty:</span> <span className="text-slate-600">Active AI Leaders & CISOs</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Programme Overview and Why This Programme */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative items-start mt-12">
          <div className="lg:col-span-8 flex flex-col gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-12">Programme Overview</h2>
              <div className="text-slate-600 space-y-5 leading-relaxed text-sm md:text-base">
                <p>
                  This intensive residential programme equips C-suite executives and board members with the strategic frameworks needed to govern AI deployment responsibly. Delivered through live-fire scenarios and real-world case studies, participants master the ability to interrogate technical teams and make defensible AI decisions at board level.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-slate-900">Target Audience:</h4>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                  <li>C-Suite Executives</li>
                  <li>Board Members</li>
                  <li>Risk Leaders</li>
                  <li>Non-Technical Executives</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4 text-slate-900">Key Skills</h4>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                  <li>AI governance frameworks</li>
                  <li>Model risk management</li>
                  <li>Algorithmic bias detection</li>
                  <li>Regulatory compliance (EU AI Act)</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-slate-900">Learning Outcomes</h4>
              <ul className="list-disc pl-5 space-y-3 text-slate-600 text-sm">
                <li>Master AI governance frameworks and model risk management methodologies</li>
                <li>Develop competency in algorithmic bias detection and explainability requirements</li>
                <li>Navigate regulatory compliance including EU AI Act and emerging global standards</li>
                <li>Execute board-level AI communication and ethical AI deployment strategies</li>
                <li>Lead crisis simulation exercises and develop defensible AI decision-making capabilities</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="bg-white rounded-2xl border border-orange-200/80 p-8 shadow-[0_8px_30px_rgb(234,88,12,0.06)]">
              <h3 className="text-xl font-bold mb-6">Why This Programme?</h3>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="leading-relaxed">Live-fire training with real AI governance scenarios</li>
                <li className="leading-relaxed">Taught by active AI leaders and industry CISOs</li>
                <li className="leading-relaxed">Small cohort sizes ensuring intensive mentorship</li>
                <li className="leading-relaxed">Alumni network of C-suite AI governance leaders</li>
                <li className="leading-relaxed">Practical frameworks immediately deployable</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CURRICULUM STRUCTURE Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-12 text-center sm:text-left">Curriculum Structure</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-xl border border-orange-200 p-8 shadow-sm">
              <h4 className="font-bold text-xl text-slate-900 mb-6">Week 1: Foundations & Frameworks</h4>
              <ul className="list-disc pl-5 text-slate-600 text-sm space-y-3">
                <li>AI fundamentals for executive decision-makers</li>
                <li>Governance frameworks: NIST AI RMF, EU AI Act, DORA compliance</li>
                <li>Risk assessment methodologies and model validation techniques</li>
                <li>Algorithmic bias identification and mitigation strategies</li>
                <li>Explainability requirements and technical interrogation methods</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-orange-200 p-8 shadow-sm">
              <h4 className="font-bold text-xl text-slate-900 mb-6">Week 2: Application & Crisis Management</h4>
              <ul className="list-disc pl-5 text-slate-600 text-sm space-y-3">
                <li>Regulatory landscape navigation and compliance strategies</li>
                <li>Live case studies: AI failures and governance breakdowns</li>
                <li>Crisis simulation exercises with real-time decision making</li>
                <li>Board presentation workshops and stakeholder communication</li>
                <li>Ethical AI deployment frameworks and implementation roadmaps</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Application Process Section */}
        <div className="mt-12 mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-xl border border-orange-200 p-8 shadow-sm text-center">
              <h4 className="font-bold text-lg mb-4 text-slate-900">Submit Application</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Complete executive profile and leadership experience assessment
              </p>
            </div>

            <div className="bg-white rounded-xl border border-orange-200 p-8 shadow-sm text-center">
              <h4 className="font-bold text-lg mb-4 text-slate-900">Strategic Interview</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                45-minute discussion on AI challenges and governance objectives
              </p>
            </div>

            <div className="bg-white rounded-xl border border-orange-200 p-8 shadow-sm text-center">
              <h4 className="font-bold text-lg mb-4 text-slate-900">Offer & Acceptance</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Receive programme offer with cohort placement confirmation
              </p>
            </div>

            <div className="bg-white rounded-xl border border-orange-200 p-8 shadow-sm text-center">
              <h4 className="font-bold text-lg mb-4 text-slate-900">Programme Begins</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Intensive 2-week residential experience with fellow executives
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
