import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle, Upload, Heart, Zap, Award, Target, FileText, Send } from "lucide-react";

const positions = [
  // {
  //   id: "d365-fo-consultant",
  //   title: "Senior Dynamics 365 Finance & Operations Consultant",
  //   department: "Enterprise ERP",
  //   location: "Ghaziabad, India / Remote Available",
  //   type: "Full-Time",
  //   experience: "5+ Years",
  //   description: "Lead implementation and customization projects for global clients using Microsoft Dynamics 365 Finance and Supply Chain Management. Collaborate with business users to map requirements and design robust solutions.",
  //   requirements: [
  //     "Extensive experience in D365 F&O modules (Finance, Supply Chain, or Retail)",
  //     "Strong understanding of accounting practices, procurement, and warehouse operations",
  //     "Excellent communication and client-facing skills",
  //     "Microsoft certifications in Dynamics 365 Finance/SCM are a strong plus"
  //   ]
  // },
  // {
  //   id: "power-platform-dev",
  //   title: "Power Platform & D365 CE Developer",
  //   department: "Cloud Solutions",
  //   location: "Ghaziabad, India / Hybrid",
  //   type: "Full-Time",
  //   experience: "3+ Years",
  //   description: "Design and implement custom business applications and automated workflows using Power Apps, Power Automate, Power BI, and Dynamics 365 Customer Engagement (CRM).",
  //   requirements: [
  //     "Proficient in Power Apps (Canvas & Model-Driven), Power Automate, and Dataverse",
  //     "Experience writing C# plugins and JavaScript for Dynamics 365 CE",
  //     "Ability to integrate custom web APIs and construct responsive user interfaces",
  //     "Familiarity with Azure Integration Services (Logic Apps, Function Apps)"
  //   ]
  // },
  // {
  //   id: "ai-solutions-engineer",
  //   title: "AI & Copilot Integration Engineer",
  //   department: "AI & Automation",
  //   location: "Ghaziabad, India / Hybrid",
  //   type: "Full-Time",
  //   experience: "2+ Years",
  //   description: "Build next-generation intelligent agents, customize Microsoft Copilot Studio deployments, and orchestrate custom AI models with Dynamics 365 and Office 365 environments.",
  //   requirements: [
  //     "Experience with Microsoft Copilot Studio, Azure OpenAI, and Cognitive Services",
  //     "Strong coding skills in Python, Node.js, or C#",
  //     "Understanding of prompt engineering, vector databases, and RAG architectures",
  //     "Knowledge of Dynamics 365 data structures is highly preferred"
  //   ]
  // }
];

const benefits = [
  { icon: Award, title: "Microsoft Certifications", desc: "We fully fund all professional Microsoft certification exams and training materials." },
  { icon: Zap, title: "Leading Edge Tech", desc: "Work with Microsoft's latest innovations, including Copilot Studio, Azure AI, and Power Platform." },
  { icon: Heart, title: "Wellness & Healthcare", desc: "Comprehensive health insurance plans, wellness programs, and active mental health support." },
  { icon: Target, title: "Mentorship Culture", desc: "Learn directly from senior consultants and solution architects with decades of experience." }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobId: "",
    resume: "",
    coverLetter: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        jobId: "",
        resume: "",
        coverLetter: "",
      });
    }, 1500);
  };

  return (
    <div className="w-full pt-32 pb-24 relative overflow-hidden bg-white text-slate-700">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-24">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-600"
          >
            <span>Careers at Dynamics Mentors</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-heading leading-tight text-slate-900"
          >
            Shape the Future of <br />
            <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-heading leading-tight text-slate-900">Enterprise Consulting</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            We don't just build systems; we mentor teams, integrate cutting-edge Microsoft technologies, and transform businesses. Join our high-performance consultancy.
          </motion.p>
        </div>

        {/* Culture & Values */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h2 className="text-3xl font-extrabold tracking-tight font-heading text-slate-900">
              Our Professional Culture
            </h2>
            <p className="text-slate-500 leading-relaxed">
              At Dynamics Mentors, we foster a collaborative ecosystem where technical excellence meets strategic execution. We believe that true growth happens when you pair expert guidance with challenging enterprise projects.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-800">Mentorship-Led Growth</h4>
                  <p className="text-sm text-slate-500 mt-1">Work directly under Microsoft MVP-caliber architects and enterprise leaders.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-800">Global Impact</h4>
                  <p className="text-sm text-slate-500 mt-1">Deliver scalable Dynamics solutions for multinational corporations and school chains.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-tr from-slate-900 via-slate-800 to-blue-950 p-8 flex flex-col justify-between border border-white/10 text-white text-left">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest text-blue-300 font-semibold">Our Mission</div>
              <div className="text-2xl font-bold font-heading">Empowering teams with deep systems expertise.</div>
            </div>
            <div className="p-4 rounded-2xl border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-lg font-bold">150+ Projects</div>
                <div className="text-xs text-blue-200">Delivered Globally</div>
              </div>
              <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Briefcase className="h-5 w-5" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight font-heading text-slate-900">
              Why Join Dynamics Mentors?
            </h2>
            <p className="text-slate-500">
              We provide the tools, support, and professional freedom you need to deliver your best work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl p-6 bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all text-left space-y-4"
                >
                  <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800">{benefit.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
