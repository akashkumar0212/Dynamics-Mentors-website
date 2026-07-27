import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, HelpCircle, Briefcase, TrendingUp, Award, Clock } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      slug: "canon-medical-systems",
      title: "Dynamics 365 Finance & Operations Enhancement",
      client: "Canon Medical Systems ANZ",
      metric: "52% Reduction",
      metricLabel: "In Warehouse Latency",
      tag: "ERP & Supply Chain",
      icon: BarChart3,
      industry: "Healthcare",
      summary: "Optimized warehouse tracking, serialized part allocations, and automated corporate expense approvals for a leading healthcare medical devices manufacturer.",
      color: "from-blue-600 to-cyan-500"
    },
    {
      slug: "gems-education",
      title: "Enterprise Dynamics 365 Transformation",
      client: "GEMS Education",
      metric: "94% Accuracy",
      metricLabel: "In Compliance Audits",
      tag: "ERP & HR Payroll",
      icon: HelpCircle,
      industry: "Education",
      summary: "Consolidated financial ledgers, automated multi-country payroll networks, and centralized student operations for one of the world's largest private education chains.",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <div className="w-full pt-32 pb-24 relative overflow-hidden bg-white text-slate-700">
      {/* Background glow mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-radial-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-20">
        
        {/* Title */}
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-600"
          >
            <span>Client Success Stories</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight"
          >
            Client Outcomes & <br />
            <span className="text-gradient">Case Studies</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            See how our hands-on engineering guidance helps organizations automate operations and achieve quantifiable business improvements.
          </motion.p>
        </div>

        {/* Case Studies Cards Listing */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cases.map((study, idx) => {
            const Icon = study.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                key={study.slug} 
                className="group rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden text-left"
              >
                {/* Metric/Image Header */}
                <div className={`p-8 bg-gradient-to-tr ${study.color} text-white flex flex-col justify-between min-h-[220px] relative`}>
                  <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xs -z-10" />
                  
                  <div className="flex justify-between items-start">
                    <span className="inline-block text-xs font-bold bg-white/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                      {study.tag}
                    </span>
                    <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-extrabold font-heading">{study.metric}</div>
                    <div className="text-xs uppercase font-bold tracking-widest text-blue-100">{study.metricLabel}</div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                      <span>Client:</span>
                      <span className="text-slate-800">{study.client}</span>
                      <span className="text-slate-200">|</span>
                      <span>Sector:</span>
                      <span className="text-slate-800">{study.industry}</span>
                    </div>

                    <h3 className="font-heading font-extrabold text-2xl text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h3>

                    <p className="text-sm text-slate-500 leading-relaxed">
                      {study.summary}
                    </p>
                  </div>

                  {/* Actions footer */}
                  <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                    <Link
                      to={`/case-studies/${study.slug}`}
                      className="flex items-center space-x-2.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group/btn"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* Dynamic statistics callout */}
        <section className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            { icon: TrendingUp, title: "100% Delivery Rate", desc: "Every single Microsoft Dynamics implementation project delivered on time and within budget parameters." },
            { icon: Award, title: "Industry Recognition", desc: "Praised by executives for collaborative mentoring methods that help client developers succeed." },
            { icon: Clock, title: "Support Continuity", desc: "Long-term advisory packages providing custom patch releases, updates, and coaching post-launch." }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="space-y-3">
                <div className="h-9 w-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-bold text-base font-heading text-slate-800">{stat.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{stat.desc}</p>
              </div>
            );
          })}
        </section>

      </div>
    </div>
  );
}
