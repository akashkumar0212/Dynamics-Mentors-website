import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Cloud, Database, BarChart3, Compass, HelpCircle, CheckCircle2, ChevronRight } from "lucide-react";

const solutionData = {
  "d365-crm": {
    name: "D365 CRM",
    title: "Dynamics 365 Customer Relationship Management",
    icon: HelpCircle,
    desc: "Microsoft Dynamics 365 is a powerful suite of intelligent business applications that helps organizations streamline operations, strengthen customer relationships, and accelerate digital transformation.",
    features: [
      "Unified CRM and ERP Platform",
      "AI-Powered Insights and Automation",
      "Enhanced Customer Engagement",
      "Improved Operational Efficiency",
      "Seamless Integration with Microsoft 365 and Power Platform"
    ]
  },
  "d365-finops": {
    name: "D365 FinOps",
    title: "Dynamics 365 Finance & Operations",
    icon: BarChart3,
    desc: "Microsoft Dynamics 365 Finance & Operations (FinOps) is a comprehensive enterprise solution that helps organizations manage financial processes, optimize operations, and accelerate business growth. Designed for medium and large enterprises, it provides a unified platform to streamline finance, supply chain, manufacturing, procurement, and business operations while delivering real-time visibility and actionable insights.",
    features: [
      "Unified Financial and Operational Management",
      "Automated Accounting and Financial Processes",
      "Supply Chain and Inventory Optimization",
      "Budgeting, Forecasting, and Financial Control",
      "Global Multi-Entity and Multi-Currency Support"
    ]
  },
  "erp": {
    name: "Business Central",
    title: "Centralised ERP for SMBs to streamline finance, operations & sales.",
    icon: Database,
    desc: "Microsoft Dynamics 365 Business Central is an all-in-one business management solution designed to help small and mid-sized businesses streamline operations, enhance productivity, and make smarter decisions. By connecting finance, sales, purchasing, inventory, projects, and customer service into a single platform, Business Central provides complete visibility across your organization.",
    features: [
      "Easily integrate with Microsoft 365, Power Platform, and other business applications",
      "Increase operational efficiency with automated processes",
      "Improve financial control and cash flow management",
      "Enhance inventory accuracy and supply chain efficiency",
      "Real-Time Reporting and Analytics"
    ]
  },
  "sap": {
    name: "Copilot & AI Solutions",
    title: "Transform Business Operations with Copilot & AI Agents",
    icon: Compass,
    desc: "Harness the potential of AI-driven innovation with our Copilot and AI Solutions. We help organizations leverage intelligent assistants, AI agents, and automation technologies to streamline operations, enhance productivity, and deliver exceptional customer experiences.",
    features: [
      "Automate Repetitive and Time-Consuming Tasks",
      "Enhance Customer Engagement and Support",
      "Improve Data Accessibility and Knowledge Sharing",
      "Scale Operations with Intelligent Automation",
      "Reduce Operational Costs"
    ]
  },
  "ai": {
    name: "Power Platform & Power Automate",
    title: "Enterprise Automation & Low-Code Development Services",
    icon: Cpu,
    desc: "Microsoft Power Platform is a powerful suite of low-code tools that enables organizations to build custom applications, automate business processes, analyze data, and create intelligent digital experiences with speed and efficiency.",
    features: [
      "Rapid Low-Code Application Development",
      "Seamless Integration with Microsoft 365 and Dynamics 365",
      "Faster Time-to-Market for Business Applications",
      "Scalable and Secure Cloud-Based Solutions",
      "Increased Productivity and Efficiency"
    ]
  },
  "cloud": {
    name: "Finance Transformation",
    title: "Modernize Financial Operations with Dynamics 365 Finance",
    icon: Cloud,
    desc: " Finance Transformation is the process of reimagining and modernizing financial operations to improve efficiency, accuracy, compliance, and strategic decision-making. We help organizations transform traditional finance functions into intelligent, data-driven, and automated systems that support business growth and agility.",
    features: [
      "Streamlined and Automated Financial Processes",
      "Improved Accuracy and Reduced Manual Effort",
      "Enhanced Collaboration Across Finance Teams",
      "Faster Month-End and Year-End Closing",
      "Stronger Compliance and Risk Control"
    ]
  }
};

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = solutionData[slug];

  if (!solution) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32 text-center space-y-6 bg-white text-slate-700">
        <h2 className="text-3xl font-bold">Solution Practice Not Found</h2>
        <p className="text-slate-500">The requested consulting practice area does not exist.</p>
        <Link to="/" className="inline-flex items-center space-x-2 text-blue-600 font-bold">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  const Icon = solution.icon;

  return (
    <div className="w-full pt-32 pb-24 max-w-5xl mx-auto px-6 md:px-8 space-y-16 bg-white text-slate-700">
      
      {/* Back link */}
      <Link 
        to="/" 
        className="inline-flex items-center space-x-1.5 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Solutions</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Solution Head */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="h-14 w-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-xs">
            <Icon className="h-7 w-7" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight text-slate-900">
            {solution.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            {solution.desc}
          </p>
        </div>

        {/* Feature List Card */}
        <div className="lg:col-span-5 glass-card rounded-3xl p-8 border border-slate-200">
          <h3 className="font-heading font-bold text-lg mb-6 text-slate-900">Core Capabilities</h3>
          <ul className="space-y-4">
            {solution.features.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-left">
                <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 leading-normal">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* CTA Box */}
      <div className="rounded-3xl bg-slate-50 border border-slate-250 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-300">
        <div className="space-y-2 text-left">
          <h4 className="font-heading font-bold text-slate-900">Need consultation on {solution.name}?</h4>
          <p className="text-sm text-slate-550 max-w-md">
            Connect with our lead systems architects to review specifications, timelines, and budgets.
          </p>
        </div>
        <Link 
          to="/contact" 
          className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm hover:scale-[1.02] shadow-md transition-all duration-300 shrink-0"
        >
          Speak with a Mentor
        </Link>
      </div>

    </div>
  );
}
