import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Cpu, Cloud, Database, BarChart3, Compass, HelpCircle, 
  Shield, Users, Zap, CheckCircle2, Factory, HeartPulse, GraduationCap, 
  ShoppingBag, Truck, HardHat, RefreshCw, Layers, ShieldAlert, Award, 
  ChevronRight, ChevronLeft, MessageSquare, Terminal
} from "lucide-react";

// Microsoft Solutions & Practice Areas aligned with dynamicsmentors.com
const services = [
  {
    name: "Microsoft Dynamics 365 Finance",
    description: "Centralize your global financial operations, automate budgeting workflows, manage ledger consolidations, and run real-time compliance reporting.",
    icon: BarChart3,
    borderColor: "border-t-blue-600",
    badgeColor: "bg-blue-50 text-blue-700",
    link: "/solutions/d365-finops"
  },
  {
    name: "Dynamics 365 Supply Chain Management",
    description: "Streamline inventory execution, serialized parts allocations, distribution pipelines, and manufacturing logs with advanced planning capabilities.",
    icon: Factory,
    borderColor: "border-t-indigo-600",
    badgeColor: "bg-indigo-50 text-indigo-700",
    link: "/solutions/d365-finops"
  },
  {
    name: "Dynamics 365 Commerce & Operations",
    description: "Orchestrate multi-channel commerce pathways, coordinate warehouse operations, and optimize retail checkout flows.",
    icon: Layers,
    borderColor: "border-t-sky-600",
    badgeColor: "bg-sky-50 text-sky-700",
    link: "/solutions/d365-crm"
  },
  {
    name: "Dynamics 365 Project Operations",
    description: "Unify project resource management, contracting, tracking metrics, and invoicing systems in a single collaborative interface.",
    icon: HelpCircle,
    borderColor: "border-t-purple-600",
    badgeColor: "bg-purple-50 text-purple-700",
    link: "/solutions/d365-crm"
  },
  {
    name: "Microsoft Power BI & Fabric",
    description: "Convert raw enterprise data warehouses into interactive, real-time intelligence dashboards. Streamline end-to-end data analytics.",
    icon: Cpu,
    borderColor: "border-t-amber-600",
    badgeColor: "bg-amber-50 text-amber-700",
    link: "/solutions/ai"
  },
  {
    name: "Power Apps & Power Automate",
    description: "Build secure, low-code custom business applications. Design complex logic triggers to eliminate manual processes and spreadsheets.",
    icon: Compass,
    borderColor: "border-t-rose-600",
    badgeColor: "bg-rose-50 text-rose-700",
    link: "/solutions/ai"
  },
  {
    name: "Microsoft Azure Integration Services",
    description: "Build secure, scalable cloud connections between Dynamics systems, legacy databases, and third-party APIs using Azure Logic Apps.",
    icon: Cloud,
    borderColor: "border-t-teal-600",
    badgeColor: "bg-teal-50 text-teal-700",
    link: "/contact"
  },
  {
    name: "Business Central ERP",
    description: "Centralized ERP solution for mid-sized organizations to streamline finance, purchasing, inventory, and project support.",
    icon: Database,
    borderColor: "border-t-emerald-600",
    badgeColor: "bg-emerald-50 text-emerald-700",
    link: "/solutions/erp"
  },
  {
    name: "Finance Transformation Advisory",
    description: "Re-engineer accounting structures, accelerate month-end closing, and automate audits through structured Microsoft integrations.",
    icon: RefreshCw,
    borderColor: "border-t-cyan-600",
    badgeColor: "bg-cyan-50 text-cyan-700",
    link: "/solutions/cloud"
  }
];

const industries = [
  { name: "Manufacturing", icon: Factory, desc: "Lean supply chain planning, production optimization, and warehouse management." },
  { name: "Healthcare", icon: HeartPulse, desc: "Patient relationship systems, serialized medical device tracking, and Power BI dashboards." },
  { name: "Education", icon: GraduationCap, desc: "Unified multi-campus financial ledger consolidation, student operations, and HR payroll." },
  { name: "Retail & Commerce", icon: ShoppingBag, desc: "Omnichannel inventory control, checkout system sync, and customer engagement." },
  { name: "Distribution & Logistics", icon: Truck, desc: "Advanced barcode scanning integration, picking latency reduction, and shipping dispatch." },
  { name: "Professional Services", icon: HardHat, desc: "Resource allocation, project tracking, project operations, and regulatory compliance." }
];

const differentiators = [
  { icon: Award, title: "Microsoft Certified Mentors", desc: "Our architects hold advanced Microsoft certifications across Dynamics 365, Azure, and Power Platform." },
  { icon: Users, title: "Collaborative Partnership", desc: "We work directly alongside your internal developers and IT teams, transferring deep systems knowledge." },
  { icon: Zap, title: "Tailored Implementation Plans", desc: "No generic templates. We align implementations with your specific commercial goals and database parameters." },
  { icon: Shield, title: "End-to-End Support", desc: "From strategic planning, scoping, and configuration, to post go-live hypercare and optimizations." }
];

const processTimeline = [
  { step: "01", name: "Strategic Discovery", desc: "Assessing legacy application setups, team workflows, and corporate goals." },
  { step: "02", name: "Custom Mapping", desc: "Detailing required system integrations, D365 configuration specs, and data mapping." },
  { step: "03", name: "Architecture Planning", desc: "Designing secure database migration pathways, API layouts, and Azure infrastructure." },
  { step: "04", name: "Sandbox Configuration", desc: "Configuring custom fields, testing logic triggers, and verifying data conversions." },
  { step: "05", name: "Deployment & Go-Live", desc: "Executing secure cloud migrations with rigorous compliance verification and zero downtime." },
  { step: "06", name: "Mentorship & Hypercare", desc: "Conducting hands-on knowledge-transfer sessions for internal engineers and managers." }
];

const clientLogos = [
  "Canon Medical ANZ",
  "GEMS Education",
  "MedNet Systems",
  "Orbit Corporation",
  "Lumina Retail",
  "Helix Healthcare",
  "Apex Supply Chains"
];

const testimonials = [
  {
    quote: "Dynamics Mentors helped us streamline our Dynamics 365 financial workflows and create interactive Power BI dashboards, saving us valuable time and resource costs.",
    author: "Operations Manager",
    company: "Canon Medical Systems ANZ",
    avatar: "CM"
  },
  {
    quote: "Standardizing our financial databases and multi-country payroll systems across all campuses seemed impossible. Dynamics Mentors guided our developers with absolute technical expertise.",
    author: "Director of Enterprise Applications",
    company: "GEMS Education Group",
    avatar: "GE"
  }
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedSolution, setSelectedSolution] = useState(0);

  const solutionsData = [
    { 
      title: "ERP Implementations & Upgrades", 
      desc: "Migrate legacy local databases and manual spreadsheets to a fully automated cloud instance of Dynamics 365 Finance & Supply Chain. Streamline procurement and ledgers.", 
      features: ["Automated Financial Workflows", "Unified Multi-Entity Ledger", "Serialized Part Allocations", "Advanced Inventory Traceability"] 
    },
    { 
      title: "CRM Customizations & Flows", 
      desc: "Configure Dynamics 365 Customer Engagement to match your sales, support, and marketing pipelines. Connect communication channels for full client history transparency.", 
      features: ["Pipeline Automation Triggers", "Custom Portal Integrations", "AI Sales Forecast Reports", "Automated Ticketing Pipelines"] 
    },
    { 
      title: "Analytics & Automation Pipelines", 
      desc: "Leverage Power BI, Microsoft Fabric, and Power Apps to construct low-code dashboards and business logic, eliminating manual verification cycles.", 
      features: ["Real-time KPI Tracking", "Custom Canvas & Model Apps", "Power Automate API Bridges", "Secure Dataverse Setup"] 
    }
  ];

  return (
    <div className="w-full relative overflow-hidden bg-white text-slate-700">
      
      {/* 1. Hero Section */}
      <section className="relative pt-36 pb-28 md:pt-48 md:pb-40 flex items-center justify-center overflow-hidden bg-slate-50/40 border-b border-slate-100">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-blue-50 border border-blue-100 text-xs font-bold text-blue-600 shadow-xs"
            >
              <Zap className="h-4 w-4 text-blue-600 shrink-0" />
              <span>Microsoft Solutions & Cloud Implementations</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] font-heading text-slate-900"
            >
              Maximize Business Value <br />
              <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] font-heading text-slate-900">with Microsoft Dynamics 365</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed font-medium"
            >
              We specialize in Dynamics 365 implementations, migrations, integrations, and long-term support. Partnering with you to streamline operations and unlock data insights.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                to="/contact" 
                className="flex items-center space-x-2.5 px-7 py-4 rounded-xl bg-slate-900 text-white font-bold text-base shadow-md hover:bg-slate-800 hover:scale-[1.02] transition-all duration-300"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <a 
                href="#services" 
                className="px-7 py-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold transition-all duration-305 shadow-xs"
              >
                Explore Services
              </a>
            </motion.div>
          </div>

          {/* Interactive Hero Graphic (Dashboard Sync Simulator) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-sky-400/10 to-blue-500/10 blur-3xl absolute -z-10" />
            
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="enterprise-card rounded-2xl p-6 w-full max-w-md space-y-6 text-left border-t-4 border-t-blue-600"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-1.5">
                  <Terminal className="h-4 w-4 text-blue-600" />
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Dynamics Core Status</span>
                </div>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              </div>

              <div className="space-y-4 text-xs font-semibold">
                <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="text-slate-905 font-bold">GEMS ERP Sync</div>
                    <div className="text-[10px] text-slate-400">Unified Compliance Platform</div>
                  </div>
                  <span className="text-blue-600 font-bold">Active - 94%</span>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="text-slate-905 font-bold">Canon Scan API</div>
                    <div className="text-[10px] text-slate-400">Advanced Barcode Tracking</div>
                  </div>
                  <span className="text-emerald-600 font-bold">Ready</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. Client Logos Marquee */}
      <section className="py-12 border-b border-slate-100 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-6">
          <h4 className="text-[10px] font-bold text-center text-slate-400 uppercase tracking-widest">
            Delivering scalable Microsoft architecture for global organizations
          </h4>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <div className="flex py-2 animate-marquee whitespace-nowrap min-w-full justify-around gap-12">
            {clientLogos.concat(clientLogos).map((logo, idx) => (
              <span 
                key={idx} 
                className="text-lg md:text-xl font-heading font-extrabold tracking-tight text-slate-350 hover:text-slate-900 transition-colors mx-8 cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Section (Content Sync) */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase text-blue-600 tracking-wider">About Dynamics Mentors</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-slate-900 leading-tight">
                Digital Business Transformation <br />
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-slate-900 leading-tight">Through Expert Solutions</span>
              </h2>
              <p className="text-base text-slate-500 leading-relaxed">
                At Dynamics Mentors, we focus on helping businesses streamline operations, boost productivity, and drive digital transformation. We believe that real business transformation stems from more than just implementing technology; it requires continuous evolution driven by expert insights, tailored strategies, and industry-specific knowledge.
              </p>
              <p className="text-base text-slate-500 leading-relaxed">
                We emphasize a partnership approach, ensuring that our solutions are aligned with the unique goals and challenges of each client from initial strategy and planning through to implementation.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-150">
                <div className="text-2xl font-extrabold text-slate-900 font-heading">100%</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Microsoft Stack</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-150">
                <div className="text-2xl font-extrabold text-slate-900 font-heading">D365</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Custom Tailored</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-150">
                <div className="text-2xl font-extrabold text-slate-900 font-heading">Partner</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Support Focused</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl text-left space-y-6">
              <h3 className="font-heading font-extrabold text-lg text-slate-800">Our Service Philosophy</h3>
              <ul className="space-y-4">
                {[
                  { title: "Commitment to Success", desc: "Dedicated to driving business growth by leveraging modern technology to enhance efficiency." },
                  { title: "Expertise-Driven", desc: "Delivering continuous evolution driven by expert insights and industry-specific knowledge." },
                  { title: "Quality & Reliability", desc: "Providing expert guidance, cost-effective solutions, and proven results." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-50 text-blue-650 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-slate-800">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Services Grid (Visual Hierarchy Polish & Microsoft-style Accent borders) */}
      <section id="services" className="py-24 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="text-xs font-bold uppercase text-blue-600 tracking-wider">Core Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-slate-900">
              Expert Solutions Portfolio
            </h2>
            <p className="text-slate-550 leading-relaxed">
              We offer implementation, customization, integration, support, and training for modern Microsoft business applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  key={idx}
                  className={`group relative rounded-2xl p-8 bg-white border border-slate-200 border-t-4 ${item.borderColor} hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left`}
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="h-10 w-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-850">
                        <Icon className="h-5 w-5 text-slate-700" />
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                        Microsoft
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold font-heading text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="pt-8">
                    <Link 
                      to={item.link}
                      className="inline-flex items-center space-x-1 text-xs font-bold text-slate-900 hover:text-blue-600 group-hover:underline"
                    >
                      <span>Explore Practice</span>
                      <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Interactive Solution Panels */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase text-blue-600 tracking-wider">Implementations</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-slate-900">
            Structured Solution Delivery
          </h2>
          <p className="text-slate-500">
            Choose a solution category to explore our tailored strategy and integration capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
            {solutionsData.map((sol, index) => (
              <div
                key={index}
                onClick={() => setSelectedSolution(index)}
                className={`p-6 rounded-2xl border-l-4 text-left cursor-pointer transition-all duration-300 ${
                  selectedSolution === index
                    ? "bg-slate-55 border-l-blue-600 border-y-slate-200 border-r-slate-200 shadow-xs"
                    : "bg-white border-l-slate-200 border-y-slate-200 border-r-slate-200 hover:border-l-slate-400"
                }`}
              >
                <h4 className="font-bold font-heading text-lg text-slate-800 mb-1">{sol.title}</h4>
                <p className="text-xs text-slate-500 line-clamp-2">{sol.desc}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSolution}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8 md:p-10 text-left h-full flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-extrabold font-heading text-slate-900 border-b border-slate-200 pb-4">
                    {solutionsData[selectedSolution].title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                    {solutionsData[selectedSolution].desc}
                  </p>
                  
                  <div className="space-y-3 pt-2">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Capabilities Included:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {solutionsData[selectedSolution].features.map((feat, idx) => (
                        <div key={idx} className="flex items-center space-x-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                          <span className="font-semibold">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 flex justify-end">
                  <Link
                    to="/contact"
                    className="flex items-center space-x-1.5 text-xs font-bold text-blue-600 hover:underline"
                  >
                    <span>Request Custom Scoping Strategy</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 6. Industries Section */}
      <section id="industries" className="py-24 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="text-xs font-bold uppercase text-blue-600 tracking-wider">Target Sectors</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-slate-900">
              Sectors We Serve
            </h2>
            <p className="text-slate-500">
              Transforming operations and compliance guidelines across diverse enterprise landscapes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-slate-205 hover:border-slate-350 hover:shadow-xs transition-all duration-300 text-left space-y-4"
                >
                  <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg font-heading text-slate-900">{ind.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{ind.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. Why Choose Us (Differentiators) */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-4 space-y-6 text-left">
            <span className="text-xs font-bold uppercase text-blue-600 tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading leading-tight text-slate-900">
              Our Professional Advantage
            </h2>
            <p className="text-slate-500 leading-relaxed">
              We align technology choices with your real-world goals, ensuring cost reduction, time savings, and operational scalability.
            </p>
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 text-xs text-blue-700 font-bold uppercase tracking-wider flex items-center gap-2">
              <Award className="h-4.5 w-4.5 text-blue-650" />
              <span>Proven Microsoft Solutions Partner</span>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-350 transition-all text-left space-y-4"
                >
                  <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-650 flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg font-heading leading-tight text-slate-900">{diff.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{diff.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. Consulting Execution Roadmap */}
      <section className="py-24 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="text-xs font-bold uppercase text-blue-600 tracking-wider">Methodology</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-slate-900">
              Strategic Delivery Pipeline
            </h2>
            <p className="text-slate-500">
              Our gated engineering cycles ensure complete data security, compliance sanity, and functional readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 text-left items-stretch relative">
            {processTimeline.map((step, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={idx}
                className="p-5 rounded-xl bg-white border-l-4 border-l-blue-600 border-y-slate-200 border-r-slate-200 border-y border-r shadow-xs flex flex-col justify-between relative"
              >
                <div className="space-y-4">
                  <span className="text-2xl font-extrabold text-blue-600 font-heading">{step.step}</span>
                  <h4 className="font-bold text-base text-slate-800 leading-tight">{step.name}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. Testimonials Carousel */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <span className="text-xs font-bold uppercase text-blue-600 tracking-wider font-semibold">Client Success Endorsements</span>
          
          <div className="relative min-h-[180px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <p className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed italic">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                
                <div className="flex items-center justify-center space-x-3.5 pt-4">
                  <div className="h-11 w-11 rounded-full bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center shadow-md">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-slate-905 text-sm">{testimonials[activeTestimonial].author}</div>
                    <div className="text-xs text-slate-500">{testimonials[activeTestimonial].company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-3 pt-6">
            <button 
              onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-2.5 rounded-full border border-slate-200 hover:bg-slate-50 transition-all text-slate-500"
            >
              <ChevronLeft className="h-4.5 w-4.5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeTestimonial === idx ? "w-6 bg-blue-600" : "w-2 bg-slate-350"
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="p-2.5 rounded-full border border-slate-200 hover:bg-slate-50 transition-all text-slate-500"
            >
              <ChevronRight className="h-4.5 w-4.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 10. Call to Action (CTA) */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mt-16 mb-20">
  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 p-10 md:p-20 text-center text-white shadow-2xl border border-blue-800/30">

    {/* Soft Glow */}
    <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
    <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

    {/* Glass Overlay */}
    <div className="absolute inset-0 bg-white/[0.02]" />

    <div className="relative z-10 max-w-3xl mx-auto">

    <h3
      className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight !text-white"
    >
      Ready to Optimize Your Systems?
    </h3>

      <p className="mt-8 text-lg md:text-xl leading-8 text-white/90">
        Schedule a technical consultation call with our Microsoft solutions architects.
        We'll analyse your current processes and create a tailored modernisation plan
        designed specifically for your business.
      </p>

      <div className="flex justify-center flex-wrap gap-5 mt-10">

        <Link
          to="/contact"
          className="px-8 py-4 rounded-xl bg-white text-slate-900 font-bold shadow-lg hover:bg-slate-100 hover:-translate-y-1 transition-all duration-300"
        >
          Book Consultation Call
        </Link>

        {/* <Link
          to="/about"
          className="px-8 py-4 rounded-xl border border-white/25 bg-white/10 text-white font-bold backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
        >
          Meet the Mentors Team
        </Link> */}

      </div>

    </div>

  </div>
</section>

    </div>
  );
}
