import { motion } from "motion/react";
import { Link } from "react-router";
import { Award, CheckCircle, ArrowRight, BookOpen } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Certifications() {
  return (
    <div className="pt-20">
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">Certifications & Recognition</h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300">
              Validate your digital risk expertise with industry-recognized credentials
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <CertCard
              title="Digital Risk Practitioner"
              level="Foundation"
              description="Validates foundational knowledge in digital risk, cyber fundamentals, and governance basics."
              benefits={[
                "Industry-recognized credential",
                "Portfolio enhancement",
                "Career advancement",
                "Professional network access",
              ]}
            />
            <CertCard
              title="GRC Analyst Certification"
              level="Professional"
              description="Demonstrates expertise in governance, risk, and compliance analysis and implementation."
              benefits={[
                "Advanced credential",
                "Job market differentiation",
                "Salary advancement potential",
                "Continued education credits",
              ]}
            />
            <CertCard
              title="Cyber Risk Specialist"
              level="Professional"
              description="Proves competency in cyber risk assessment, mitigation, and resilience planning."
              benefits={[
                "Specialist recognition",
                "Technical validation",
                "Career progression",
                "Industry credibility",
              ]}
            />
            <CertCard
              title="AI Risk & Governance Leader"
              level="Advanced"
              description="Certifies leadership capability in AI governance, responsible AI, and emerging tech risk."
              benefits={[
                "Executive-level credential",
                "Thought leadership positioning",
                "Strategic role readiness",
                "Innovation authority",
              ]}
            />
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Certification Readiness Programmes</h2>
            <p className="text-slate-300 mb-8 sm:mb-12 text-base sm:text-lg">
              Prepare for industry certifications with our specialised readiness programmes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {["CISSP Prep", "CISM Prep", "CRISC Prep"].map((cert, index) => (
                <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 sm:p-6 hover:border-orange-500/40 transition-colors">
                  <Award className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{cert}</h3>
                  <p className="text-slate-400 text-sm mb-4">Comprehensive exam preparation and practice</p>
                  <Link
                    to="/programs"
                    className="text-orange-500 font-semibold inline-flex items-center gap-1 min-h-[44px]"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-orange-500 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Get Certified?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90">
              Choose a certification path and start your journey to professional recognition.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 min-h-[52px] px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-slate-100 active:scale-[0.99] transition-all"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function CertCard({ title, level, description, benefits }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 sm:p-8 hover:border-orange-500/50 transition-all"
    >
      <div className="flex items-center justify-between mb-4">
        <Award className="w-12 h-12 text-orange-500" />
        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
          level === 'Foundation' ? 'bg-green-500/10 text-green-400' :
          level === 'Professional' ? 'bg-blue-500/10 text-blue-400' :
          'bg-purple-500/10 text-purple-400'
        }`}>
          {level}
        </span>
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-slate-400 mb-6">{description}</p>
      <div className="space-y-2">
        {benefits.map((benefit: string, index: number) => (
          <div key={index} className="flex items-center space-x-2 text-sm text-slate-300">
            <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
