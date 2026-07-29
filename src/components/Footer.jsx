import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, CheckCircle, Globe, Building } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import faviconLogo from "../assets/favicon.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-24 pb-12 relative overflow-hidden text-left">
      {/* Decorative glow elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-800">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center p-1 shadow-xs transition-transform duration-300 group-hover:scale-105">
                <img src={faviconLogo} alt="Dynamics Mentors Logo" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-base font-extrabold tracking-tight text-white leading-none">DYNAMICS</span>
                <span className="font-heading text-[10px] font-bold tracking-widest text-blue-400 mt-0.5 leading-none">MENTORS</span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Dynamics Mentors provides implementation, customization, integration, support, and training services for Microsoft Dynamics 365, Azure, and Power Platform.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: FaLinkedin, url: "https://linkedin.com" },
                { icon: FaTwitter, url: "https://twitter.com" },
                // { icon: FaGithub, url: "https://github.com" },
                { icon: FaYoutube, url: "https://youtube.com" }
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 rounded-xl bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center hover:text-white hover:border-slate-500 transition-all shadow-xs"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-xs font-bold tracking-wider uppercase text-white mb-6">Solutions</h4>
            <ul className="space-y-3">
              {[
                { label: "D365 Finance", path: "/solutions/d365-finops" },
                { label: "D365 Supply Chain", path: "/solutions/d365-finops" },
                { label: "D365 CRM", path: "/solutions/d365-crm" },
                { label: "Business Central", path: "/solutions/erp" },
                { label: "Power Platform", path: "/solutions/ai" }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-xs font-bold tracking-wider uppercase text-white mb-6">Industries</h4>
            <ul className="space-y-3">
              {[
                "Manufacturing",
                "Healthcare",
                "Education",
                "Retail",
                "Distribution"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="/#industries" className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-xs font-bold tracking-wider uppercase text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", path: "/about" },
                { label: "Case Studies", path: "/case-studies" },
                { label: "Careers", path: "/careers" },
                { label: "Contact Us", path: "/contact" }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact Details Column */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-heading text-xs font-bold tracking-wider uppercase text-white mb-4">Newsletter</h4>
            
            {subscribed ? (
              <div className="flex items-center space-x-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl">
                <CheckCircle className="h-4 w-4 shrink-0" />
                <span>Subscribed successfully.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-xs text-white outline-none focus:border-slate-500 transition-all"
                />
                <button
                  type="submit"
                  className="p-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shrink-0"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Global Addresses, Phone & Email section */}
<div className="py-14 border-b border-slate-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

  {/* Australia */}
  <div className="flex items-start gap-4">

    <div className="mt-1">
      <MapPin className="h-5 w-5 text-blue-400" />
    </div>

    <div>
      <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
        Australia Address
      </h5>

      <p className="text-sm leading-6 text-slate-400">
        69 Centennial Drive,
        <br />
        The Ponds,
        <br />
        NSW 2769,
        <br />
        Australia
      </p>
    </div>

  </div>

  {/* India */}
  <div className="flex items-start gap-4">

    <div className="mt-1">
      <Building className="h-5 w-5 text-blue-400" />
    </div>

    <div>
      <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
        India Office
      </h5>

      <p className="text-sm leading-6 text-slate-400">
        F-1101,
        <br />
        Antriksh Golf View 1,
        <br />
        Sector-78, Noida,
        <br />
        Uttar Pradesh 201301,
        <br />
        India
      </p>
    </div>

  </div>

  {/* Phone */}
  <div className="flex items-start gap-4">

    <div className="mt-1">
      <Phone className="h-5 w-5 text-blue-400" />
    </div>

    <div>
      <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
        Phone Support
      </h5>

      <p className="text-sm leading-6 text-slate-400">
        +61 403 209 633
      </p>
    </div>

  </div>

  {/* Email */}
  <div className="flex items-start gap-4">

    <div className="mt-1">
      <Mail className="h-5 w-5 text-blue-400" />
    </div>

    <div>
      <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
        Enquiries
      </h5>

      <p className="text-sm leading-6 text-slate-400 break-all">
        info@dynamicsmentors.com
      </p>
    </div>

  </div>

</div>

        {/* Bottom copyright details */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>© {currentYear} Dynamics Mentors. All rights reserved.</div>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
