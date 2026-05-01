import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft } from "lucide-react";
export default function OrganisationProgram() {
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
                        Programs for Organisations
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Build secure, aware, and resilient teams across your organization.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">

                    {/* BESPOKE */}
                    <div className="bg-white rounded-[24px] border border-orange-200/80 shadow-[0_8px_30px_rgb(234,88,12,0.08)] flex flex-col overflow-hidden pb-8 transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(234,88,12,0.12)]">
                        {/* Image */}
                        <div className="w-full">
                            <img
                                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800"
                                alt="Corporate Bespoke Training"
                                className="w-full h-[220px] object-cover"
                            />
                        </div>
                        {/* Content */}
                        <div className="px-8 mt-8 flex flex-col flex-grow">

                            <h3 className="text-[26px] font-bold mb-5 text-black">Corporate Bespoke Training</h3>
                            <p className="text-slate-500 text-[16px] mb-6 flex-grow leading-relaxed">
                                Tailored training programmes designed to address specific organisational needs, technology stacks, and risk profiles for enterprise teams.
                            </p>
                            <p className="text-slate-900 font-medium text-[15px] mb-8">
                                Corporate Teams, Department Heads
                            </p>
                            <button
                                type="button"
                                className="block w-full py-4 text-center text-lg font-semibold rounded-full border border-orange-500 text-orange-400 bg-transparent shadow-[0_0_12px_rgba(234,88,12,0.4)] hover:shadow-[0_0_18px_rgba(234,88,12,0.7)] transition-all duration-300 cursor-not-allowed opacity-70"
                            >
                                Upcoming Course
                            </button>
                        </div>
                    </div>

                    {/* EXECUTIVE */}
                    <div className="bg-white rounded-[24px] border border-orange-200/80 shadow-[0_8px_30px_rgb(234,88,12,0.08)] flex flex-col overflow-hidden pb-8 transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(234,88,12,0.12)]">
                        {/* Image */}
                        <div className="w-full">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800"
                                alt="Executive Leadership Boardroom"
                                className="w-full h-[220px] object-cover"
                            />
                        </div>
                        {/* Content */}
                        <div className="px-8 mt-8 flex flex-col flex-grow">

                            <h3 className="text-[26px] font-bold mb-5 text-black">Executive Leadership Programme</h3>
                            <p className="text-slate-500 text-[16px] mb-6 flex-grow leading-relaxed">
                                CISO-in-a-Box training covering crisis management, board communication, and legal defensibility for cyber leadership roles.
                            </p>
                            <p className="text-slate-900 font-medium text-[15px] mb-8">
                                Mid-to-Senior Professionals, Finance Leaders
                            </p>
                            <Link
                                to="/programs/executive-leadership"
                                className="block w-full py-4 bg-[#cd5c30] hover:bg-[#b04d27] text-white rounded-full font-semibold transition-colors text-center text-lg shadow-lg shadow-[#cd5c30]/20 active:scale-[0.98]"
                            >
                                View Course
                            </Link>
                        </div>
                    </div>

                    {/* PHISHING */}
                    <div className="bg-white rounded-[24px] border border-orange-200/80 shadow-[0_8px_30px_rgb(234,88,12,0.08)] flex flex-col overflow-hidden pb-8 transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(234,88,12,0.12)]">
                        <div className="w-full">
                            <img
                                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800"
                                alt="Phishing Awareness"
                                className="w-full h-[220px] object-cover"
                            />
                        </div>
                        <div className="px-8 mt-8 flex flex-col flex-grow">
                            <h3 className="text-[26px] font-bold mb-5 text-black">Phishing Simulation & Awareness</h3>
                            <p className="text-slate-500 text-[16px] mb-6 flex-grow leading-relaxed">
                                Simulate phishing attacks and train employees to recognize and respond to threats, reducing human-related security risks.
                            </p>
                            <p className="text-slate-900 font-medium text-[15px] mb-8">
                                Organizations, HR Teams, Security Leaders
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