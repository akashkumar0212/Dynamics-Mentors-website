import React from "react";
import { motion } from "framer-motion";
import { Users, Shield, Target, CheckCircle2, Award, Zap, Building } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="w-full pt-32 pb-24 relative overflow-hidden bg-white text-slate-700">
      {/* Background glow mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-radial-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-24">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-600"
          >
            <span>About Our Consultancy</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-heading leading-tight text-slate-900"
          >
            Strategic Systems <br />
            <span className="text-gradient">Mentors & Architects</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            We bridge the gap between complex Microsoft enterprise technologies and clean operational execution.
          </motion.p>
        </div>

        {/* Core Values Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: Users, 
              title: "Expertise First", 
              desc: "Every consultant on our team brings decades of real-world integration experience and active Microsoft credentials." 
            },
            { 
              icon: Shield, 
              title: "Zero Trust Security", 
              desc: "Enterprise data protection, SOC2 validation pathways, and GDPR compliance are woven into every codebase." 
            },
            { 
              icon: Target, 
              title: "Outcome Driven", 
              desc: "We define precise operational metrics and success parameters before writing a single line of database code." 
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="rounded-3xl p-8 bg-white border border-slate-200 hover:border-blue-500/20 hover:shadow-lg transition-all text-left space-y-5"
              >
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </section>

        {/* Detailed Consulting Model */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-3xl font-extrabold tracking-tight font-heading text-slate-900">
              Our Collaborative Mentoring Model
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Unlike traditional external consulting firms that configure packages in isolation and hand over rigid manuals, we work side-by-side with your internal engineering and operations teams.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Our goal is not just deployment; it is active capacity building. We ensure that once the system is live, your team has the skills, documentation, and capability to maintain it independently.
            </p>

            <ul className="space-y-4 text-sm font-semibold text-slate-700">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>Full structured knowledge-transfer program on all repositories</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>Modular pipelines built using standard Azure & GitHub templates</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>Post-migration support blueprints for continuous improvements</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center space-y-6 shadow-xs">
              <div className="text-5xl font-extrabold text-blue-600 font-heading">22+ Years</div>
              <div className="text-sm font-bold uppercase tracking-wider text-slate-650">
                Architecting Enterprise Success
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                From simple database migrations to multi-entity international school ERP integrations, we have seen and solved it all.
              </p>
              <div className="pt-4 border-t border-slate-200 flex items-center justify-around text-xs">
                <div>
                  <div className="font-extrabold text-lg">150+</div>
                  <div className="text-slate-500">Projects Done</div>
                </div>
                <div className="border-l border-slate-200 h-8" />
                <div>
                  <div className="font-extrabold text-lg">100%</div>
                  <div className="text-slate-500">Microsoft Stack</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Showcase */}
        <section className="py-12 border border-slate-200 bg-slate-50/50 rounded-3xl p-8 md:p-12 text-center space-y-6">
          <div className="space-y-1.5 max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase text-blue-600 tracking-wider">Microsoft Competence</span>
            <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900">Certified Architectural Competency</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              We focus 100% of our capacity on Microsoft's enterprise offerings, ensuring state-of-the-art configurations for Dynamics 365, Power Automate, and Azure.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-6 text-left">
            {[
              { title: "Dynamics 365 F&O", role: "Supply Chain & Financials" },
              { title: "Dynamics 365 CE", role: "Sales & Client Engagement" },
              { title: "Power Platform", icon: Award, role: "Canvas Apps & BI Analytics" },
              { title: "Microsoft Azure", role: "Database & Logic Integrations" }
            ].map((cert, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs"
              >
                <Award className="h-6 w-6 text-blue-600 mb-3" />
                <h4 className="font-bold text-sm text-slate-800">{cert.title}</h4>
                <p className="text-xs text-slate-500 mt-1">{cert.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xs -z-10" />
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold font-heading">
              Ready to Upgrade Your Operations?
            </h3>
            <p className="text-blue-100 text-sm md:text-base leading-relaxed">
              Connect with our senior consultants today to review your systems roadmap and configure custom Dynamics 365 integrations.
            </p>
            <div className="flex justify-center gap-4 pt-4 flex-wrap">
              <Link 
                to="/contact" 
                className="px-6 py-3.5 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 transition-all shadow-md text-sm hover:scale-[1.02]"
              >
                Book Architecture Review
              </Link>
              <Link 
                to="/case-studies" 
                className="px-6 py-3.5 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 border border-white/20 transition-all text-sm"
              >
                Read Client Outcomes
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
