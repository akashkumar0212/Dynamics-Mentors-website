import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronDown, Cpu, Cloud, Database, BarChart3, HelpCircle, 
  Compass, ArrowRight, Home, Users, Briefcase, FileText, Phone, 
  Building, Mail, ChevronRight, MessageSquare
} from "lucide-react";
import { cn } from "../lib/utils";
import faviconLogo from "../assets/favicon.png";

const solutions = [
  { name: "D365 CRM", path: "/solutions/d365-crm", description: "Customer relationship management optimization", icon: HelpCircle },
  { name: "D365 FinOps", path: "/solutions/d365-finops", description: "Finance and operations ERP automation", icon: BarChart3 },
  { name: "Business Central", path: "/solutions/erp", description: "Integrated enterprise resource planning for SMBs", icon: Database },
  { name: "Copilot & AI Solutions", path: "/solutions/sap", description: "Next-gen intelligent models & agent automation", icon: Cpu },
  { name: "Power Platform & Power Automate", path: "/solutions/ai", description: "Enterprise low-code tools and dashboards", icon: Compass },
  { name: "Finance Transformation", path: "/solutions/cloud", description: "Modernize and automate finance operations", icon: Cloud },
];

const industries = [
  { name: "Manufacturing", path: "/#industries" },
  { name: "Healthcare", path: "/#industries" },
  { name: "Education", path: "/#industries" },
  { name: "Retail", path: "/#industries" },
  { name: "Distribution", path: "/#industries" },
  { name: "Professional Services", path: "/#industries" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [isOpen]);

  // Close menus on path change
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsIndustriesOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[9998] transition-all duration-300 w-full border-b",
        scrolled 
          ? "py-3 bg-white/95 backdrop-blur-xl border-slate-200/80 shadow-md" 
          : "py-5 bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="h-10 w-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center p-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <img 
              src={faviconLogo}
              alt="Dynamics Mentors Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-base font-extrabold tracking-tight text-slate-900 leading-none">
              DYNAMICS
            </span>
            <span className="font-heading text-xs font-bold tracking-widest text-blue-600 mt-0.5 leading-none">
              MENTORS
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center space-x-8">
          <Link to="/" className={cn("text-sm font-semibold transition-colors hover:text-blue-600", location.pathname === "/" ? "text-blue-600" : "text-slate-600")}>
            Home
          </Link>

          <Link to="/about" className={cn("text-sm font-semibold transition-colors hover:text-blue-600", location.pathname === "/about" ? "text-blue-600" : "text-slate-600")}>
            About
          </Link>

          <a href="/#services" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
            Services
          </a>

          {/* Solutions Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center space-x-1.5 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors py-1.5 focus:outline-none">
              <span>Solutions</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isDropdownOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-96 rounded-2xl z-[9999] bg-white border border-slate-200 shadow-2xl p-4 grid gap-3"
                >
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-1">Dynamics Practices</div>
                  {solutions.map((solution) => {
                    const Icon = solution.icon;
                    return (
                      <Link
                        key={solution.name}
                        to={solution.path}
                        className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="h-8 w-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-bold text-slate-900 leading-tight">{solution.name}</div>
                          <div className="text-xs text-slate-500 mt-1 leading-tight">{solution.description}</div>
                        </div>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsIndustriesOpen(true)}
            onMouseLeave={() => setIsIndustriesOpen(false)}
          >
            <button className="flex items-center space-x-1.5 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors py-1.5 focus:outline-none">
              <span>Industries</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isIndustriesOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {isIndustriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 rounded-2xl z-[9999] bg-white border border-slate-200 shadow-2xl p-4 grid gap-1.5"
                >
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-1">Target Sectors</div>
                  {industries.map((ind) => (
                    <a
                      key={ind.name}
                      href={ind.path}
                      className="block p-2 rounded-xl text-sm font-bold text-left text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                    >
                      {ind.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/case-studies" className={cn("text-sm font-semibold transition-colors hover:text-blue-600", location.pathname === "/case-studies" ? "text-blue-600" : "text-slate-600")}>
            Case Studies
          </Link>

          <Link to="/careers" className={cn("text-sm font-semibold transition-colors hover:text-blue-600", location.pathname === "/careers" ? "text-blue-600" : "text-slate-600")}>
            Careers
          </Link>

          <Link to="/contact" className={cn("text-sm font-semibold transition-colors hover:text-blue-600", location.pathname === "/contact" ? "text-blue-600" : "text-slate-600")}>
            Contact
          </Link>
        </nav>

        {/* Right side Actions */}
        <div className="hidden xl:flex items-center space-x-4">
          <Link 
            to="/contact" 
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-md hover:bg-slate-800 hover:scale-[1.02] transition-all duration-305 shrink-0"
          >
            <span>Request Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile controls & Toggle */}
        <div className="flex items-center space-x-3 xl:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 transition-all focus:outline-none"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Slide-in Mobile Drawer (Premium redesign) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Drawer Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] bg-slate-900/60 backdrop-blur-md cursor-pointer"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Drawer Container (Fixed height viewport capture) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 z-[10000] w-full max-w-[390px] h-[100dvh] bg-white flex flex-col justify-between overflow-hidden shadow-2xl border-l border-slate-200"
            >
              {/* 1. Header (Static height) */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white">
                <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                  <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-1 shadow-xs">
                    <img src={faviconLogo} alt="Dynamics Mentors" className="h-full w-full object-contain" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-heading text-sm font-extrabold tracking-tight text-slate-900">
                      DYNAMICS
                    </span>
                    <span className="font-heading text-[10px] font-bold tracking-widest text-blue-600 mt-0.5 leading-none">
                      MENTORS
                    </span>
                  </div>
                </Link>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-xl text-slate-500 hover:text-slate-905 hover:bg-slate-50 border border-slate-100 transition-colors focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* 2. Main content area (Scrollable) */}
              <div className="flex-grow overflow-y-auto p-6 space-y-8 bg-slate-50/30">
                
                {/* Brand Tagline Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-150/40 text-left">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Company Vision</div>
                  <p className="text-xs font-semibold text-slate-700 leading-relaxed">
                    Partnering to deliver modern Dynamics 365, Azure, and Power Platform cloud solutions.
                  </p>
                </div>

                {/* Main Links Grid */}
                <div className="space-y-3">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left">Main Navigation</div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { to: "/", label: "Home", icon: Home },
                      { to: "/about", label: "About Us", icon: Users },
                      { to: "/case-studies", label: "Case Studies", icon: FileText },
                      { to: "/careers", label: "Careers", icon: Briefcase },
                      { to: "/contact", label: "Contact Us", icon: Phone }
                    ].map((link) => {
                      const Icon = link.icon;
                      const isActive = location.pathname === link.to;
                      return (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex flex-col items-start p-4 rounded-2xl border text-left transition-all duration-300 hover:scale-[1.02]",
                            isActive
                              ? "bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-950/15"
                              : "bg-white border-slate-200 text-slate-700 hover:border-slate-350 hover:bg-slate-50"
                          )}
                        >
                          <Icon className={cn("h-5 w-5 mb-2.5", isActive ? "text-blue-400" : "text-blue-600")} />
                          <span className="font-bold text-xs">{link.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Solutions Category Accordion-style Listing */}
                <div className="space-y-3">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left">Practice Areas</div>
                  <div className="space-y-2">
                    {solutions.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all text-left group"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                              <Icon className="h-4.5 w-4.5" />
                            </div>
                            <span className="text-xs font-bold text-slate-800">{item.name}</span>
                          </div>
                          <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Industries Section */}
                <div className="space-y-3">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left">Sectors We Serve</div>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((ind) => (
                      <a
                        key={ind.name}
                        href={ind.path}
                        onClick={() => setIsOpen(false)}
                        className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-all"
                      >
                        {ind.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Drawer Premium Footer (Static height) */}
              <div className="p-6 border-t border-slate-100 bg-white shrink-0 space-y-4">
                <div className="text-left">
                  <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Need Dynamics 365 Experts?</div>
                  <p className="text-xs text-slate-500 mt-0.5">Reach out directly to speak with an architect.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+61403209633"
                    className="flex items-center justify-center space-x-2 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-all"
                  >
                    <Phone className="h-3.5 w-3.5 text-blue-600" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href="mailto:info@dynamicsmentors.com"
                    className="flex items-center justify-center space-x-2 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-all"
                  >
                    <Mail className="h-3.5 w-3.5 text-blue-600" />
                    <span>Email Us</span>
                  </a>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-md hover:bg-slate-800 transition-all"
                >
                  <MessageSquare className="h-4 w-4 text-blue-400" />
                  <span>Schedule Consultation</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
