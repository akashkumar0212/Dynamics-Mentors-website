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
      { title: "Fragmented financial operations", desc: "Financial consolidation across multiple schools and legal entities was manual and time-intensive, with limited real-time visibility into group-wide financial performance."},
      { title: "Disconnected supply chain processes", desc: "Procurement, inventory, and supply chain processes for school operations (facilities, catering, supplies) were not standardised across the network, creating inefficiency and inconsistent vendor terms." },
      { title: "Complex HR & payroll operations", desc: "HR and payroll processes spanned multiple disconnected systems, increasing the risk of payroll errors, compliance gaps, and delays in employee lifecycle processing across a large, geographically distributed workforce." },
      { title: "Inconsistent stakeholder experience", desc: "Parents, students, and teachers lacked a unified digital channel for enquiries, enrolment support, and self-service interactions, resulting in a fragmented and inconsistent engagement experience. " },
      { title: "Limited scalability", desc: "Legacy systems offered limited scalability as GEMS Education continued to expand its school portfolio and digital ambitions." },
      // { title: "Scalability Constraints", desc: "Operational blockages preventing smooth expansion into new territories." },
      // { title: "Inconsistent Processes", desc: "Lack of standard operating procedures across regional branch offices." }
    ],
    solutions: [
      { category: "Discovery & Design ", items: ["Microsoft Dynamics 365 Finance & Operations", "Dynamics 365 Customer Engagement"] },
      { category: "Build & Configure ", items: ["Dynamics 365 HR Module", "Custom Payroll Integration Systems"] },
      { category: "Data Migration", items: ["Legacy data extraction, cleansing, mapping, and validation; phased migration approach with reconciliation checkpoints for financial and employee master data "] },
      { category: "Testing & Validation ", items: ["Unit testing, system integration testing across D365FO–payroll interfaces, and user acceptance testing with GEMS finance, HR, and school operations stakeholders "] },
      { category: "Cutover & Go-Live ", items: ["Phased cutover planning, parallel payroll runs for validation, and hypercare support across go-live windows "] },
      { category: "Stabilisation", items: ["Post-go-live monitoring of payroll integration accuracy, financial close support, and knowledge transfer to GEMS internal teams "] }
    ],
    // UPDATED TIMELINE DATA WITH UNIQUE DESCRIPTIONS
    timeline: [
      { title: "Discovery", desc: "Initial stakeholder interviews and requirements gathering across finance, HR, and procurement units." },
      { title: "Business Analysis", desc: "Detailed gap analysis comparing current operational workflows against native Dynamics 365 functionality." },
      { title: "Solution Design", desc: "Architecting system integrations, database structures, and workflow automation blueprints." },
      { title: "Development", desc: "Customizing core modules, building custom middleware APIs, and crafting tailored user interfaces." },
      { title: "Configuration", desc: "Setting environment variables, security hierarchies, approval matrix, and operational parameters." },
      { title: "Data Migration", desc: "Extracting legacy data, performing validation cycles, and populating D365 with complete audit trails." },
      { title: "Testing", desc: "Rigorous unit testing, scenario execution, and integration stability checks across all functional modules." },
      { title: "User Acceptance Testing (UAT)", desc: "Guided user testing sessions and operational sign-offs with key school administrators." },
      { title: "Deployment", desc: "System cutover, final synchronization of production databases, and official platform go-live." },
      { title: "Hypercare Support", desc: "Post-launch operational support, performance optimization, and issue management." }
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
      { metric: "Financial Consolidation ", label: "60% faster month-end close across the school network " },
      { metric: "HR & Payroll Accuracy ", label: "70% reduction in payroll processing errors following automated HR-to-payroll integration " },
      { metric: "Process Efficiency ", label: "65% reduction in manual data entry across HR and finance operations " },
      { metric: "Data Migration ", label: "70% legacy data objects migrated with 99% reconciliation accuracy " },
      { metric: "Scalability ", label: "Platform foundation supporting onboarding of 50+ additional schools without re-architecture " },
      { metric: "Stakeholder Experience ", label: "Unified digital engagement channel adopted by 25K+ parents, students, and teachers via the new portals " },
      // { metric: "Interactive Reports", label: "Integrated Power BI dashboards for executive decision making" },
      // { metric: "Built to Scale", label: "Infrastructure ready for rapid school additions and onboarding" }
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
      { title: "Mandatory Barcode Scanning", desc: "Canon Medical's global head office required that every item be scanned at receipt and dispatch point for full traceability. Standard Warehouse Management in D365FO does not enforce mandatory scanning at these checkpoints." },
      { title: "Advance Serial Allocation", desc: "Required allocating serial numbers well before physical shipment for compliance documentation. Standard WMS does not natively support early serial assignment." },
      { title: "Industry Traceability", desc: "Stricter regulatory requirements for medical equipment tracking compared to standard commercial distribution." },
      { title: "Manual Expense Processing", desc: "Corporate credit card transactions required time-consuming manual entry and reconciliation." },
      { title: "Expense Classification", desc: "Lack of automated classification logic to distinguish between personal and business expenses." },
      { title: "Limited Spend Visibility", desc: "Finance teams lacked real-time reporting for company-wide credit card spend patterns." }
    ],
    solutions: [
      { category: "Mandatory scan-on-receipt and scan-on-dispatch", items: ["Configured mandatory mobile device scanning steps within inbound and outbound work templates, ensuring every item is scanned on receipt and dispatch."] },
      { category: "Early serial number allocation", items: ["Designed a custom serial allocation process enabling warehouse staff to assign serial numbers ahead of the physical pick/pack/ship cycle."] },
      { category: "Location & work template configuration", items: ["Configured location directives, work templates, and mobile device menus tailored to medical device handling."] },
      { category: "Data migration from Standard to Advanced WMS", items: ["Migrated on-hand inventory, open transactions, and serial-tracked items into the new Advanced WMS structure."] },
      { category: "Compliance validation", items: ["Validated the end-to-end scan-and-serialise process against global traceability mandates."] }
    ],
    // UPDATED TIMELINE DATA WITH UNIQUE DESCRIPTIONS
    timeline: [
      { title: "Discovery & Design", desc: "Captured head office traceability requirements and existing warehouse process gaps; documented bank file format and expense classification rules for the credit card solution " },
      { title: "Build & Configure", desc: "Configured AWM location directives, work templates, and mobile scanning workflows; built the credit card file import and classification logic; developed Power BI report models Core feature setup, mobile app interface development, and custom serial logic implementation." },
      { title: "Data Migration", desc: "Migrated on-hand inventory and open transactions from Standard WMS to AWM with reconciliation; validated historical transaction data structure for expense reporting Secure extraction, mapping, and loading of legacy inventory/serial records into AWM." },
      { title: "Testing & Validation", desc: "Dry-run cutover testing for AWM in UAT; end-to-end testing of bank file import through to expense report generation and Power BI refresh End-to-end warehouse scan simulations, operational checks, and key stakeholder UAT." },
      { title: "Cutover & Go-Live", desc: "Phased warehouse cutover with smoke testing of scan-and-serialise workflows; staged rollout of the corporate card import process alongside the existing expense process Final production deployment, system switchover, live warehouse tracking, and support." },
      { title: "Stabilisation", desc: "Hypercare support across warehouse operations and finance teams; refinement of classification rules based on real transaction patterns; user training on new mobile scanning workflows Post-launch refinement, error log analysis, and operator feedback integrations." },
      { title: "Dedicated Support", desc: "Ongoing SLA-backed system maintenance and regular performance optimization." }
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
      { metric: "Traceability Compliance", label: "100% of warehouse receipts and dispatches now enforced through mandatory barcode scanning." },
      { metric: "Serial Number Control", label: "Serial numbers allocated to parts ahead of shipment, satisfying global audit mandates." },
      { metric: "Expense Processing Time", label: "Drastic reduction in processing time required for corporate credit card transactions." },
      { metric: "Expense Accuracy", label: "Automated classification prevented incorrect business expense absorption." },
      { metric: "Spend Visibility", label: "Power BI dashboards providing real-time visibility into credit card expenditure." },
      { metric: "Operational Efficiency", label: "Significant decrease in manual data entry overhead across warehouse and finance." },
      { metric: "Tighter Compliance", label: "Full audit trails maintained for all regulated medical devices." }
    ]
  }
};

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudiesData[slug];

  if (!study) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-40 text-center space-y-6 text-slate-700 dark:text-slate-300">
        <h2 className="text-3xl font-bold font-heading">Case Study Not Found</h2>
        <p className="text-slate-500">The requested client transformation success story does not exist.</p>
        <Link to="/case-studies" className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-bold hover:underline">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Case Studies</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full relative overflow-hidden bg-transparent text-slate-750 dark:text-slate-300 pb-24">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-glow pointer-events-none -z-10" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center space-x-2 text-sm font-semibold text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Case Studies</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6 text-left">
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-500/20">
                <span>Industry:</span>
                <strong>{study.industry}</strong>
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-heading leading-tight text-slate-900 dark:text-white">
                {study.client} <br />
                <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-heading leading-tight text-slate-900 dark:text-white">{study.title}</span>
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl">
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
            <div className="h-10 w-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
              <Info className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight font-heading text-slate-900 dark:text-white">
              Business Challenges
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Before the transition, {study.client} faced complex operational obstacles that limited visibility, increased administrative costs, and slowed growth.
            </p>
            <div className="p-6 rounded-2xl border border-red-100/20 dark:border-red-500/10 bg-red-500/[0.02] text-sm text-slate-500 dark:text-slate-400 relative overflow-hidden">
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
                className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-xs hover:shadow-md transition-all text-left space-y-2.5"
              >
                <div className="flex items-center space-x-2 text-red-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">{c.title}</h4>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <hr className="border-slate-200 dark:border-white/10" />

        {/* Implemented Solution section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Zap className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight font-heading text-slate-900 dark:text-white">
              Our Solution Plan
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              We architected and implemented a unified digital solution leveraging Microsoft Dynamics 365 and cloud integration infrastructure to automate workflows and unify databases.
            </p>
            <div className="p-6 rounded-2xl border border-blue-500/15 dark:border-blue-500/10 bg-blue-500/[0.02] text-sm text-slate-500 dark:text-slate-400 relative overflow-hidden">
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
                className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm space-y-4 text-left"
              >
                <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                  <Server className="h-5 w-5 shrink-0" />
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">{s.category}</h4>
                </div>
                <ul className="space-y-2.5 pl-1">
                  {s.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-sm text-slate-500 dark:text-slate-400">
                      <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <hr className="border-slate-200 dark:border-white/10" />

        {/* Technologies Badge section */}
        <section className="text-center py-6 bg-slate-50 dark:bg-white/[0.01] border border-slate-200 dark:border-white/10 rounded-3xl p-8 space-y-6">
          <div className="space-y-1.5">
            <div className="text-xs uppercase tracking-widest font-semibold text-blue-600 dark:text-blue-400">Enterprise Stack</div>
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">Technologies Integrated</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {study.technologies.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 text-sm font-semibold shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Journey Timeline (UPDATED LOOP) */}
        <section className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="text-xs uppercase tracking-widest font-semibold text-blue-600 dark:text-blue-400">Journey Roadmap</div>
            <h2 className="text-3xl font-extrabold tracking-tight font-heading text-slate-900 dark:text-white">
              Implementation Timeline
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Our structured agile process ensured a seamless deployment with zero data loss and minimal disruption.
            </p>
          </div>

          <div className="relative pl-6 md:pl-0">
            {/* Timeline center line for desktop, side line for mobile */}
            <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 bg-slate-200 dark:bg-white/10 -translate-x-1/2" />

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
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 -translate-x-1/2 z-10 shadow-xs" />

                    {/* Timeline card */}
                    <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                      <div className="inline-block p-5 rounded-2xl bg-white dark:bg-[#1e293b]/30 border border-slate-200 dark:border-white/10 shadow-xs text-left max-w-md w-full">
                        <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase mb-1">Step {idx + 1}</div>
                        
                        {/* Title rendering */}
                        <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                          {typeof step === "object" ? step.title : step}
                        </h4>

                        {/* Description rendering */}
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                          {typeof step === "object" ? step.desc : "Phase-gated review cycles ensuring complete compliance, technical sanity, and functional readiness."}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <hr className="border-slate-200 dark:border-white/10" />

        {/* Quantifiable Outcomes Section */}
        <section className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight font-heading text-slate-900 dark:text-white">
              Quantifiable Business Outcomes
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
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
                className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50/50 dark:from-white/[0.02] dark:to-transparent border border-slate-200 dark:border-white/10 shadow-sm text-left flex flex-col justify-between min-h-[160px] hover:border-emerald-500/30 transition-all duration-300 group"
              >
                <div className="text-xs uppercase font-bold tracking-widest text-emerald-600 dark:text-emerald-450 group-hover:scale-105 transition-transform origin-left">Outcome {idx + 1}</div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white mt-3 font-heading leading-tight">{o.metric}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{o.label}</p>
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