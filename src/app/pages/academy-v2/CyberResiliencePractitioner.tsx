import { Link } from "react-router";
import { CheckCircle2, Calendar, GraduationCap, ArrowLeft } from "lucide-react";

export default function CyberResiliencePractitioner() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen font-sans text-slate-900">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="absolute top-6 left-4 z-50">
                <Link
                    to="/programmes"
                    className="flex items-center justify-center w-10 h-10 bg-slate-900/50 backdrop-blur-md border border-slate-800 text-slate-300 rounded-full hover:text-white hover:border-slate-700 transition-all shadow-lg"
                    aria-label="Back to Academy"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
            </div>
        {/* TOP SECTION: Hero Title & Desc */}
        <div className="mb-10 lg:w-2/3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 mt-4">Cyber Resilience Practitioner</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            Master operational cybersecurity through live-fire training with enterprise-grade toolsets. Graduate Day 1 ready for Security Analyst and SOC leadership roles with hands-on experience in threat detection, incident response, and security architecture.
          </p>
        </div>

        {/* Image and Register Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          <div className="lg:col-span-8">
            <div className="w-full rounded-2xl overflow-hidden border border-orange-100 shadow-[0_4px_24px_rgb(234,88,12,0.1)]">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200" 
                alt="Cyber SOC" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-orange-200/80 p-8 shadow-[0_8px_30px_rgb(234,88,12,0.06)]">
              <div className="flex items-center justify-end mb-6">
                <span className="px-5 py-1.5 text-blue-500 border border-blue-200 rounded-full text-xs font-semibold bg-white">6 Month</span>
              </div>

              <div className="space-y-5 mb-8">
                <div>
                  <div className="font-bold text-slate-900">Duration</div>
                  <div className="text-slate-500 text-sm mt-1">6 Months Part-time Evening Classes</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Cohort</div>
                  <div className="text-slate-500 text-sm mt-1 flex flex-col">
                    <span>Maximum 24 Students</span>
                    <span>Exclusive Learning Experience</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Certification</div>
                  <div className="text-slate-500 text-sm mt-1 flex flex-col">
                    <span>Professional Diploma</span>
                    <span>Industry Recognition</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  to="/register?course=cyber-risk"
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
            <div>
              <h2 className="text-3xl font-bold mb-12">Programme Overview</h2>
              <div className="text-slate-600 space-y-5 leading-relaxed text-lg">
                <p>
                  Our flagship 6-month diploma transforms high-potential graduates and career switchers into Day 1 ready cybersecurity professionals. Through intensive hands-on training with enterprise-grade security tools, you'll master threat detection, incident response, and security architecture across multiple frameworks including NIST CSF, NCSC CAF, and ISO 27001.
                </p>
              </div>
            </div>

            {/* CURRICULUM STRUCTURE Section */}
            <div>
              <h2 className="text-3xl font-bold mb-12">Curriculum Structure</h2>
              <p className="text-slate-600 mb-16 max-w-3xl leading-relaxed">
                Six comprehensive modules building from foundational concepts to advanced operational capabilities. Each module includes hands-on laboratories, case studies, and real-world simulations.
              </p>
              <div className="space-y-6">
                
                {[
                  {
                    title: "Cybersecurity Fundamentals & Risk Management",
                    month: "Month-1",
                    desc: "Foundation in cybersecurity principles, threat landscape analysis, and enterprise risk management frameworks. Introduction to NIST CSF, ISO 27001, and NCSC CAF governance structures.",
                    topics: ["CIA Triad & Security Principles", "Threat Actor Profiling", "Risk Assessment Methodologies", "Compliance Framework Mapping"],
                    labs: ["Enterprise Risk Assessment Simulation", "Framework Gap Analysis Exercise", "Threat Modeling Workshop", "Policy Documentation Project"]
                  },
                  {
                    title: "Network Security & Infrastructure Protection",
                    month: "Month-2",
                    desc: "Deep dive into network architecture security, perimeter defense, and infrastructure hardening. Master enterprise-grade security tools and network monitoring technologies.",
                    topics: ["Zero Trust Architecture", "Firewall & IPS Configuration", "Network Segmentation Design", "VPN & Remote Access Security"],
                    labs: ["Palo Alto Firewall Configuration", "Wireshark Traffic Analysis", "Nessus Vulnerability Scanning", "pfSense Router Hardening"]
                  },
                  {
                    title: "Threat Detection & Security Operations",
                    month: "Month-3",
                    desc: "Advanced SIEM operation, log analysis, and threat hunting methodologies. Build expertise in enterprise security monitoring and anomaly detection techniques.",
                    topics: ["SIEM Architecture & Tuning", "Advanced Persistent Threats", "Behavioural Analysis Techniques", "Security Orchestration (SOAR)"],
                    labs: ["Splunk SIEM Administration", "ELK Stack Log Analysis", "QRadar Rule Development", "Live SOC Simulation Exercise"]
                  },
                  {
                    title: "Incident Response & Digital Forensics",
                    month: "Month-4",
                    desc: "Comprehensive incident response procedures, digital evidence handling, and forensic investigation techniques. Master crisis management and legal compliance requirements.",
                    topics: ["NIST Incident Response Framework", "Digital Evidence Chain of Custody", "Malware Analysis Fundamentals", "Business Continuity Planning"],
                    labs: ["Live Incident Response Drill", "FTK Forensic Investigation", "Volatility Memory Analysis", "Tabletop Crisis Simulation"]
                  },
                  {
                    title: "Cloud Security & Modern Infrastructure",
                    month: "Month-5",
                    desc: "Multi-cloud security architecture, container security, and DevSecOps integration. Master cloud-native security tools across AWS, Azure, and GCP platforms.",
                    topics: ["Cloud Security Posture Management", "Container & Kubernetes Security", "Identity & Access Management", "Serverless Security Architecture"],
                    labs: ["AWS GuardDuty Configuration", "Azure Sentinel Deployment", "GCP Security Command Center", "Terraform Security Templates"]
                  },
                  {
                    title: "Capstone Project & Professional Readiness",
                    month: "Month-6",
                    desc: "Comprehensive capstone project integrating all programme elements. Industry mentorship, job placement assistance, and professional certification preparation.",
                    topicsTitle: "Key Deliverables:",
                    topics: ["Enterprise Security Assessment", "SOC Playbook Development", "Risk Management Framework", "Professional Portfolio Creation"],
                    labsTitle: "Career Support:",
                    labs: ["1:1 Industry Mentorship", "CV & Interview Coaching", "Employer Network Access", "Alumni Community Membership"]
                  }
                ].map((mod, i) => (
                  <div key={i} className="bg-white rounded-xl border border-orange-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <h4 className="font-bold text-xl text-slate-900">{mod.title}</h4>
                      <span className="px-4 py-1 text-blue-500 border border-blue-200 rounded-full text-xs font-semibold whitespace-nowrap self-start sm:self-auto">{mod.month}</span>
                    </div>
                    
                    <p className="text-slate-600 text-sm mb-8 leading-relaxed max-w-4xl">{mod.desc}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm mb-3">{mod.topicsTitle || "Key Topics:"}</h5>
                        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-2">
                          {mod.topics.map((b, idx) => <li key={idx}>{b}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm mb-3">{mod.labsTitle || "Hands-on Labs:"}</h5>
                        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-2">
                          {mod.labs.map((b, idx) => <li key={idx}>{b}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
            {/* Target Audience Card */}
            <div className="bg-white rounded-2xl border border-orange-200/80 p-8 shadow-[0_8px_30px_rgb(234,88,12,0.06)]">
              <h3 className="text-xl font-bold mb-6">Target Audience</h3>
              <ul className="space-y-5">
                {[
                  "High-potential graduates seeking cybersecurity careers",
                  "Career switchers from IT, finance, and consulting",
                  "IT professionals transitioning to security roles",
                  "Military veterans entering civilian cybersecurity"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#cd5c30] shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Graduate Outcomes Card */}
            <div className="bg-white rounded-2xl border border-orange-200/80 p-8 shadow-[0_8px_30px_rgb(234,88,12,0.06)]">
              <h3 className="text-xl font-bold mb-6">Graduate Outcomes</h3>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>Security Operations Center (SOC) Analyst</li>
                <li>Cyber Threat Intelligence Specialist</li>
                <li>Incident Response Team Lead</li>
                <li>Cybersecurity Risk Assessment Consultant</li>
              </ul>
            </div>
          </div>
        </div>


        {/* Assessment & Certification Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-12 text-center">Assessment & Certification</h2>
          <p className="text-slate-600 mb-16 text-center max-w-2xl mx-auto">
            Rigorous assessment methodology combining practical skills demonstration with theoretical knowledge validation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Graduate Outcomes Box */}
            <div className="bg-white rounded-xl border border-orange-200 p-8 shadow-sm">
              <h3 className="font-bold text-xl mb-6">Graduate Outcomes</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">Continuous Assessment</span>
                  <span className="font-bold text-slate-900">40%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">Practical Examinations</span>
                  <span className="font-bold text-slate-900">35%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">Capstone Project</span>
                  <span className="font-bold text-slate-900">25%</span>
                </div>
              </div>
            </div>

            {/* Certification Outcomes Box */}
            <div className="bg-white rounded-xl border border-orange-200 p-8 shadow-sm">
              <h3 className="font-bold text-xl mb-6">Certification Outcomes</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#cd5c30] shrink-0" />
                  <span className="text-slate-600 text-sm">IDR Cyber Resilience Practitioner Diploma</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#cd5c30] shrink-0" />
                  <span className="text-slate-600 text-sm">NIST Cybersecurity Framework Certificate</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#cd5c30] shrink-0" />
                  <span className="text-slate-600 text-sm">ISO 27001 Foundation Certificate</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#cd5c30] shrink-0" />
                  <span className="text-slate-600 text-sm">Digital Portfolio & Career Credentials</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Enrollment Information Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-12 text-center">Enrollment Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            <div className="bg-white rounded-xl border border-orange-200 p-8 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#cd5c30] rounded-xl flex items-center justify-center mb-6 text-white shadow-md">
                <Calendar className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg mb-1">Next Cohort</h4>
              <p className="text-[#cd5c30] font-medium text-sm mb-4">September 2027</p>
              <p className="text-slate-500 text-sm">Applications close 15 August</p>
            </div>

            <div className="bg-white rounded-xl border border-orange-200 p-8 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#cd5c30] rounded-xl flex items-center justify-center mb-6 text-white shadow-md">
                <span className="text-3xl font-bold">£</span>
              </div>
              <h4 className="font-bold text-lg mb-1">Programme Fee</h4>
              <p className="text-[#cd5c30] font-medium text-sm mb-4">£200</p>
              <p className="text-slate-500 text-sm">Payment plans available</p>
            </div>

            <div className="bg-white rounded-xl border border-orange-200 p-8 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#cd5c30] rounded-xl flex items-center justify-center mb-6 text-white shadow-md">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg mb-1">Scholarships</h4>
              <p className="text-[#cd5c30] font-medium text-sm mb-4">Up to 50% Available</p>
              <p className="text-slate-500 text-sm">Merit & need-based funding</p>
            </div>

          </div>
        </div>

        {/* Application Requirements Section */}
        <div className="mt-12 mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Application Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            
            <div>
              <h4 className="font-bold text-lg mb-6 text-slate-900 border-b border-orange-100 pb-3">Academic Requirements</h4>
              <ul className="list-disc pl-5 space-y-3 text-slate-600 text-sm">
                <li>Bachelor's degree (any discipline) or equivalent experience</li>
                <li>Basic understanding of computer networks preferred</li>
                <li>Professional English proficiency (IELTS 6.5 or equivalent)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-slate-900 border-b border-orange-100 pb-3">Application Process</h4>
              <ul className="list-disc pl-5 space-y-3 text-slate-600 text-sm">
                <li>Complete online application form</li>
                <li>Submit CV and academic transcripts</li>
                <li>Attend virtual interview session</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
