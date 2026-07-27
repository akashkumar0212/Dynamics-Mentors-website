import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ChevronRight, Zap, Target, Server, Database, TrendingUp, Info } from "lucide-react";

const caseStudiesData = {
  "gems-education": {
    title: "Enterprise Dynamics 365 Transformation",
    client: "GEMS Education",
    industry: "Education",
    heroMetric: "94% Accuracy",
    heroMetricLabel: "In Compliance Audits",
    overview: "GEMS Education is one of the world's leading private education providers operating numerous schools across the UAE and international markets. The organisation required a unified enterprise platform to modernise finance, procurement, HR, payroll, and customer engagement across its growing operations.",
    challenges: [
      { title: "Legacy Fragmentation", desc: "Multiple disconnected legacy systems leading to severe data silos." },
      { title: "Manual Consolidation", desc: "Inefficient and slow manual financial consolidation processes." },
      { title: "Procurement Inefficiency", desc: "Outdated manual procurement cycles and lack of supplier control." },
      { title: "HR Complexity", desc: "Fragmented human resources systems and intricate manual payroll structures." },
      { title: "Limited Visibility", desc: "Lack of real-time operational reports and key performance indicators." },
      { title: "Scalability Constraints", desc: "Operational blockages preventing smooth expansion into new territories." },
      { title: "Inconsistent Processes", desc: "Lack of standard operating procedures across regional branch offices." }
    ],
    solutions: [
      { category: "Core Platforms", items: ["Microsoft Dynamics 365 Finance & Operations", "Dynamics 365 Customer Engagement"] },
      { category: "Human Resources", items: ["Dynamics 365 HR Module", "Custom Payroll Integration Systems"] },
      { category: "Operations", items: ["Procurement & Vendor Management", "Supply Chain & Inventory Management", "Advanced Financial Management"] },
      { category: "Data & Cloud", items: ["Azure Integration Services", "Enterprise Data Migration Framework"] }
    ],
    timeline: [
      "Discovery",
      "Business Analysis",
      "Solution Design",
      "Development",
      "Configuration",
      "Data Migration",
      "Testing",
      "User Acceptance Testing (UAT)",
      "Deployment",
      "Hypercare Support"
    ],
    technologies: [
      "Dynamics 365 Finance & Operations",
      "Dynamics 365 CE",
      "Azure Logic Apps & Functions",
      "Data Migration Framework",
      "HR Module",
      "Payroll Integration API"
    ],
    outcomes: [
      { metric: "Unified System", label: "Consolidated all schools onto a single global database" },
      { metric: "Real-time Visibility", label: "Complete transparency of financial metrics and pipelines" },
      { metric: "Automated Payroll", label: "Reduced monthly salary processing times by 60%" },
      { metric: "Procurement Optimization", label: "Cut purchase order approval cycles in half" },
      { metric: "Centralized HR", label: "Standardized employee record cycles for thousands of staff members" },
      { metric: "Less Manual Overhead", label: "Saved hundreds of administrative work hours every month" },
      { metric: "Interactive Reports", label: "Integrated Power BI dashboards for executive decision making" },
      { metric: "Built to Scale", label: "Infrastructure ready for rapid school additions and onboarding" }
    ]
  },
  "canon-medical-systems": {
    title: "Dynamics 365 Finance & Operations Enhancement",
    client: "Canon Medical Systems ANZ",
    industry: "Healthcare",
    heroMetric: "52% Reduction",
    heroMetricLabel: "In Warehouse Latency",
    overview: "Canon Medical Systems ANZ required enhancements to its existing Dynamics 365 Finance & Operations environment to optimise warehouse operations, improve inventory traceability, and automate expense management.",
    challenges: [
      { title: "Warehouse Scans", desc: "Lack of integrated barcode tracking leading to manual inventory lookups." },
      { title: "Serial Tracking", desc: "Manual serial number allocation slowing down shipping processes." },
      { title: "Traceability Gap", desc: "Difficulty tracing medical parts and components through warehouses." },
      { title: "Expense Overhead", desc: "Manual, paper-based expense processing causing accounting friction." },
      { title: "Reporting Bottlenecks", desc: "Limited visual reports and slow, spreadsheet-dependent analysis." },
      { title: "Approval Latency", desc: "Inefficient and slow multi-tier expense approval structures." }
    ],
    solutions: [
      { category: "Warehouse Execution", items: ["Advanced Warehouse Management Module", "Mobile Warehouse Application", "Integrated Barcode Scanning Engines", "Automated Serial Number Allocation"] },
      { category: "Financial Automation", items: ["Expense Management Automation System", "Modern Multi-Tier Approval Workflows"] },
      { category: "Analytics & Integrations", items: ["Power BI Executive Reporting", "Real-Time Cloud Data Integration Pipelines"] }
    ],
    timeline: [
      "Discovery",
      "Warehouse Analysis",
      "Configuration",
      "Automation & Apps",
      "Testing",
      "Go Live",
      "Dedicated Support"
    ],
    technologies: [
      "Dynamics 365 Finance & Operations",
      "Warehouse Management System",
      "Power BI",
      "Mobile Warehouse App",
      "Expense Management Framework",
      "Azure Integration Services"
    ],
    outcomes: [
      { metric: "100% Traceability", label: "Full barcode tracking from reception to shipment" },
      { metric: "Fast Shipments", label: "Accelerated inventory operations and picking times" },
      { metric: "Paperless Accounting", label: "100% automated digital expense filing and tracking" },
      { metric: "Instant Dashboarding", label: "Real-time reports on sales, inventory, and expense states" },
      { metric: "Reduced Redundancy", label: "Eliminated double data entry across financial systems" },
      { metric: "Peak Efficiency", label: "Drastically enhanced warehouse operations and staff productivity" },
      { metric: "Tighter Compliance", label: "Full audit trails for medical device tracking requirements" }
    ]
  }
};

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudiesData[slug];

  if (!study) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-40 text-center space-y-6">
        <h2 className="text-3xl font-bold font-heading">Case Study Not Found</h2>
        <p className="text-slate-500">The requested client transformation success story does not exist.</p>
        <Link to="/case-studies" className="inline-flex items-center space-x-2 text-blue-600 font-bold hover:underline">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Case Studies</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full relative overflow-hidden bg-white text-slate-700 pb-24">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-glow pointer-events-none -z-10" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-slate-250 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center space-x-2 text-sm font-semibold text-slate-500 hover:text-blue-600 mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Case Studies</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6 text-left">
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-blue-50 text-xs font-semibold text-blue-600 border border-blue-100">
                <span>Industry:</span>
                <strong>{study.industry}</strong>
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-heading leading-tight text-slate-900">
                {study.client} <br />
                <span className="text-gradient">{study.title}</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed max-w-3xl">
                {study.overview}
              </p>
            </div>

            {/* Metric Box */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl p-8 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white text-center shadow-xl shadow-blue-500/20 min-w-[280px] max-w-sm"
              >
                <div className="text-xs uppercase tracking-widest text-blue-100 font-semibold mb-2">Key Outcome</div>
                <div className="text-4xl md:text-5xl font-extrabold font-heading mb-2">{study.heroMetric}</div>
                <div className="text-sm font-medium text-blue-50">{study.heroMetricLabel}</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-24 space-y-28">
        
        {/* Client & Challenge section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="h-10 w-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
              <Info className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight font-heading text-slate-900">
              Business Challenges
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Before the transition, {study.client} faced complex operational obstacles that limited visibility, increased administrative costs, and slowed growth.
            </p>
            <div className="p-6 rounded-2xl border border-red-100 bg-red-50/10 text-sm text-slate-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/[0.02] rounded-full blur-xl pointer-events-none" />
              <strong>Primary Pain Point:</strong> Fragmented database structures that required extensive manual verification and double entries.
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {study.challenges.map((c, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                key={i}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all text-left space-y-2.5"
              >
                <div className="flex items-center space-x-2 text-red-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <h4 className="font-bold text-base text-slate-900">{c.title}</h4>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Implemented Solution section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Zap className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight font-heading text-slate-900">
              Our Solution Plan
            </h2>
            <p className="text-slate-500 leading-relaxed">
              We architected and implemented a unified digital solution leveraging Microsoft Dynamics 365 and cloud integration infrastructure to automate workflows and unify databases.
            </p>
            <div className="p-6 rounded-2xl border border-blue-100 bg-blue-50/10 text-sm text-slate-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/[0.02] rounded-full blur-xl pointer-events-none" />
              <strong>Integration Model:</strong> Secure Azure architecture to feed real-time synchronization between the custom UI apps and F&O modules.
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {study.solutions.map((s, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                key={i}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-left"
              >
                <div className="flex items-center space-x-2 text-blue-600">
                  <Server className="h-5 w-5 shrink-0" />
                  <h4 className="font-bold text-lg text-slate-900">{s.category}</h4>
                </div>
                <ul className="space-y-2.5 pl-1">
                  {s.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-sm text-slate-500">
                      <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Technologies Badge section */}
        <section className="text-center py-6 bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6">
          <div className="space-y-1.5">
            <div className="text-xs uppercase tracking-widest font-semibold text-blue-600">Enterprise Stack</div>
            <h3 className="text-2xl font-bold font-heading text-slate-900">Technologies Integrated</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {study.technologies.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-semibold shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="text-xs uppercase tracking-widest font-semibold text-blue-600">Journey Roadmap</div>
            <h2 className="text-3xl font-extrabold tracking-tight font-heading text-slate-900">
              Implementation Timeline
            </h2>
            <p className="text-slate-500">
              Our structured agile process ensured a seamless deployment with zero data loss and minimal disruption.
            </p>
          </div>

          <div className="relative pl-6 md:pl-0">
            {/* Timeline center line for desktop, side line for mobile */}
            <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 bg-slate-200 -translate-x-1/2" />

            <div className="space-y-12">
              {study.timeline.map((step, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    key={idx}
                    className={`flex flex-col md:flex-row relative items-start md:items-center ${
                      isLeft ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* Circle Pin */}
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white -translate-x-1/2 z-10 shadow-xs" />

                    {/* Timeline card */}
                    <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                      <div className="inline-block p-5 rounded-2xl bg-white border border-slate-200 shadow-xs text-left max-w-md w-full">
                        <div className="text-xs font-bold text-blue-600 uppercase mb-1">Step {idx + 1}</div>
                        <h4 className="font-bold text-lg text-slate-900">{step}</h4>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                          Phase-gated review cycles ensuring complete compliance, technical sanity, and functional readiness.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Quantifiable Outcomes Section */}
        <section className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-605 flex items-center justify-center mx-auto">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight font-heading text-slate-900">
              Quantifiable Business Outcomes
            </h2>
            <p className="text-slate-500">
              The project yielded powerful business improvements across financial reporting, staff efficiency, and system scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {study.outcomes.map((o, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50/50 border border-slate-200 shadow-sm text-left flex flex-col justify-between min-h-[160px] hover:border-emerald-500/30 transition-all duration-300 group"
              >
                <div className="text-xs uppercase font-bold tracking-widest text-emerald-600 group-hover:scale-105 transition-transform origin-left">Outcome {idx + 1}</div>
                <h4 className="font-bold text-lg text-slate-900 mt-3 font-heading leading-tight">{o.metric}</h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">{o.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      {/* CTA Bottom Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mt-32">
        <div className="rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xs -z-10" />
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold font-heading">
              Achieve Similar Results for Your Business
            </h3>
            <p className="text-blue-100 text-sm md:text-base leading-relaxed">
              Learn how our expert Dynamics 365 solutions can optimize your database systems, warehouse operations, and financial visibility.
            </p>
            <div className="flex justify-center gap-4 pt-4 flex-wrap">
              <Link 
                to="/contact" 
                className="px-6 py-3.5 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 transition-all shadow-md text-sm hover:scale-[1.02]"
              >
                Schedule Architecture Consultation
              </Link>
              <Link 
                to="/case-studies" 
                className="px-6 py-3.5 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 border border-white/20 transition-all text-sm"
              >
                All Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
