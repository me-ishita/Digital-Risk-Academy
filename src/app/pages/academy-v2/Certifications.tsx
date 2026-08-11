import { motion } from "motion/react";
import { Link } from "react-router";
import { Award, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

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
      <div className="absolute top-6 left-4 z-50">
                <Link
                    to="/"
                    className="flex items-center justify-center w-10 h-10 bg-slate-900/50 backdrop-blur-md border border-slate-800 text-slate-300 rounded-full hover:text-white hover:border-slate-700 transition-all shadow-lg"
                    aria-label="Back to Academy"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
            </div>
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">Certifications & Recognition</h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300">
              Validate your digital risk expertise with industry-recognised credentials
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="space-y-12 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >

            <ProgramCard
              title="Investment Banking Programme"
              description="Master core investment banking concepts including valuation, financial modelling, and deal execution."
              audience={[
                "Finance students & MBA aspirants",
                "Aspiring investment bankers",
                "Professionals transitioning into finance",
              ]}
              benefits={[
                "Real-world deal & valuation exposure",
                "Strong financial modelling foundation",
                "High-impact career opportunities",
              ]}
              link="/programmes/investment-banking"
              image="https://images.unsplash.com/photo-1707761918029-1295034aa31e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGludmVzdG1lbnR8ZW58MHx8MHx8fDA%3D"
            />

            <ProgramCard
              title="Digital Risk Fundamentals"
              description="Essential foundation for understanding digital risk landscape including threat identification, risk assessment, and compliance frameworks."
              audience={[
                "Beginners in risk & cybersecurity",
                "Business & tech professionals",
                "Students entering digital risk domain",
              ]}
              benefits={[
                "Strong foundation in risk frameworks",
                "Understanding of modern threat landscape",
                "Career entry into GRC roles",
              ]}
              link="/programmes/digital-risk-fundamentals"
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
            />

            <ProgramCard
              title="Cyber Resilience Practitioner"
              description="Master operational cybersecurity through hands-on simulations and enterprise-grade toolsets."
              audience={[
                "Aspiring security analysts",
                "IT professionals",
                "Cybersecurity enthusiasts",
              ]}
              benefits={[
                "Hands-on SOC & security training",
                "Real-world cyber attack simulations",
                "Job-ready from Day 1",
              ]}
              link="/programmes/cyber-resilience-practitioner"
              image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200"
            />

            <ProgramCard
              title="AI Risk Governance"
              description="Strategic AI deployment and governance frameworks for managing risk, compliance, and responsible AI systems."
              audience={[
                "Leaders & decision-makers",
                "AI/ML professionals",
                "Risk & compliance managers",
              ]}
              benefits={[
                "AI governance frameworks",
                "Regulatory & compliance readiness",
                "Strategic decision-making edge",
              ]}
              link="/programmes/ai-risk-governance"
              image="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200"
            />

          </motion.div>
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
        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${level === 'Foundation' ? 'bg-green-500/10 text-green-400' :
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

function ProgramCard({ title, description, audience, benefits, link, image }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group grid md:grid-cols-2 gap-6 bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all"
    >
      {/* IMAGE */}
      <div className="relative h-[260px] md:h-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* CONTENT */}
      <div className="p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">{title}</h3>
          <p className="text-slate-400 mb-6">{description}</p>

          {/* WHO IT'S FOR */}
          <div className="mb-6">
            <p className="text-sm uppercase tracking-widest text-orange-400 mb-2">
              Who it's for
            </p>
            <ul className="space-y-1 text-sm text-slate-300">
              {audience.map((item: string, i: number) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* BENEFITS */}
          <div>
            <p className="text-sm uppercase tracking-widest text-orange-400 mb-2">
              Key Benefits
            </p>
            <ul className="space-y-1 text-sm text-slate-300">
              {benefits.map((item: string, i: number) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <Link
          to={link}
          className="mt-6 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all"
        >
          View Details
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}