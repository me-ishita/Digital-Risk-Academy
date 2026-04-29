import { motion } from "motion/react";
import { Link, useParams } from "react-router";
import {
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Download,
  Calendar,
  Target,
  BookOpen,
} from "lucide-react";

export function ProgramDetail() {
  const { id } = useParams();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4 sm:mb-6">
              <span className="text-orange-500 text-xs sm:text-sm font-medium">Professional Track</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">GRC Analyst Pathway</h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8">
              Comprehensive training for aspiring GRC analysts with practical projects, real-world frameworks, and certification preparation.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-orange-500" />
                <div>
                  <div className="text-sm text-slate-400">For</div>
                  <div className="font-semibold">Career Changers</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-orange-500" />
                <div>
                  <div className="text-sm text-slate-400">Duration</div>
                  <div className="font-semibold">12 Weeks</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-orange-500" />
                <div>
                  <div className="text-sm text-slate-400">Mode</div>
                  <div className="font-semibold">Live Cohort</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-orange-500" />
                <div>
                  <div className="text-sm text-slate-400">Level</div>
                  <div className="font-semibold">Professional</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/register"
                className="min-h-[52px] px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="/brochure/index.html"
                className="min-h-[52px] px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Brochure</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-12 sm:py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">What You'll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                "GRC frameworks and methodologies",
                "Risk assessment and management",
                "Compliance program development",
                "Policy and procedure design",
                "Audit readiness and execution",
                "Control implementation",
                "Stakeholder communication",
                "Regulatory landscape navigation",
                "Risk reporting and metrics",
                "Tools and technology",
                "Case study analysis",
                "Capstone project",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Why This Matters</h2>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 sm:p-8">
              <p className="text-slate-300 text-base sm:text-lg mb-4">
                GRC professionals are in high demand across all industries. Organizations need skilled practitioners who can navigate complex regulatory environments, build effective governance frameworks, and manage risk strategically.
              </p>
              <p className="text-slate-300 text-base sm:text-lg">
                This program provides the practical, hands-on experience needed to succeed in GRC roles, with real-world projects that build a portfolio you can showcase to employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Format */}
      <section className="py-12 sm:py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Learning Format</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <FormatCard
                icon={<Users className="w-8 h-8" />}
                title="Live Sessions"
                description="Weekly live classes with expert instructors and peer collaboration"
              />
              <FormatCard
                icon={<BookOpen className="w-8 h-8" />}
                title="Self-Paced Content"
                description="Comprehensive learning materials accessible anytime"
              />
              <FormatCard
                icon={<Target className="w-8 h-8" />}
                title="Practical Projects"
                description="Real-world case studies and portfolio-building assignments"
              />
              <FormatCard
                icon={<Award className="w-8 h-8" />}
                title="Assessments"
                description="Regular evaluations to track progress and mastery"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Program Outcomes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              <OutcomeCard
                icon={<Award className="w-10 h-10" />}
                title="Certificate"
                description="Digital Risk Labs GRC Analyst Certificate"
              />
              <OutcomeCard
                icon={<Target className="w-10 h-10" />}
                title="Role Readiness"
                description="Prepared for GRC analyst positions"
              />
              <OutcomeCard
                icon={<BookOpen className="w-10 h-10" />}
                title="Portfolio"
                description="Showcase projects to employers"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 sm:py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3 sm:space-y-4">
              <FAQItem
                question="What are the prerequisites?"
                answer="No specific technical background required. A bachelor's degree or equivalent work experience is recommended. Eagerness to learn and commitment to the program are essential."
              />
              <FAQItem
                question="What is the time commitment?"
                answer="Expect 10-15 hours per week including live sessions, self-study, and project work. Live sessions are typically 2 hours, twice per week."
              />
              <FAQItem
                question="Who should join this program?"
                answer="This program is ideal for career changers, recent graduates, and professionals looking to transition into GRC roles. It's also suitable for those already in adjacent roles who want to formalize their GRC expertise."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-orange-500 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Start Your GRC Career?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90">
              Join the next cohort and build the skills employers are looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/register"
                className="min-h-[52px] px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-slate-100 active:scale-[0.99] transition-all inline-flex items-center justify-center"
              >
                Apply / Enroll
              </Link>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FormatCard({ icon, title, description }: any) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 sm:p-6 hover:border-orange-500/40 transition-colors">
      <div className="text-orange-500 mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm sm:text-base">{description}</p>
    </div>
  );
}

function OutcomeCard({ icon, title, description }: any) {
  return (
    <div className="text-center">
      <div className="inline-flex p-3.5 sm:p-4 rounded-xl bg-orange-500/10 text-orange-500 mb-4">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm sm:text-base">{description}</p>
    </div>
  );
}

function FAQItem({ question, answer }: any) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 sm:p-6">
      <h3 className="text-base sm:text-lg font-bold mb-2">{question}</h3>
      <p className="text-slate-400 text-sm sm:text-base">{answer}</p>
    </div>
  );
}
