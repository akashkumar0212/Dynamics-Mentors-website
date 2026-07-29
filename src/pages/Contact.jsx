import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Globe, Building } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    practice: "D365 FinOps",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mvzeqekv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          practice: "D365 FinOps",
          message: "",
        });
      } else {
        alert("Unable to send your request. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="w-full pt-32 pb-24 relative overflow-hidden bg-white text-slate-700">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-radial-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-20">
        
        {/* Page Title Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-600 shadow-xs"
          >
            <span>Consultation & Scoping Request</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight"
          >
            Connect With Our <br />
            <span className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">Solutions Architects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            Partner with us to streamline your business operations. Submit your inquiry below and our lead consultants will respond within one business day.
          </motion.p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office directories */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl border border-slate-205 bg-white p-8 text-left space-y-8 shadow-sm">
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold font-heading text-slate-900">
                  Global Directory
                </h3>
                <p className="text-sm text-slate-550 leading-relaxed">
                  Have questions regarding Dynamics 365 migrations, Power BI dashboards, customized Power Apps, or Azure configurations? Reach out directly.
                </p>
              </div>

              <div className="space-y-6">
                
                {/* Australia Address */}
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">Australia Office</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      69 Centennial Drive, The Ponds, NSW 2769, Australia
                    </p>
                  </div>
                </div>

                {/* India Registered Office */}
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-blue-55 flex items-center justify-center shrink-0">
                    <Building className="h-5 w-5 text-blue-605" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">India Registered Office</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      F-1101, Antriksh Golf View 1, Noida Sector-78, Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">Phone Support</h4>
                    <p className="text-xs text-slate-500 mt-1">+61 403 209 633</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-650 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">Email Enquiries</h4>
                    <p className="text-xs text-slate-500 mt-1">info@dynamicsmentors.com</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">Business Hours</h4>
                    <p className="text-xs text-slate-500 mt-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-slate-100 space-y-3 text-left">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Connect on Social</div>
                <div className="flex items-center gap-3">
                  {[
                    { icon: FaLinkedin, url: "https://linkedin.com" },
                    { icon: FaTwitter, url: "https://twitter.com" },
                    // { icon: FaGithub, url: "https://github.com" }
                  ].map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="h-10 w-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-550 flex items-center justify-center hover:text-blue-600 transition-all shadow-xs"
                      >
                        <Icon className="h-4.5 w-4.5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Google Map Mock/Iframe pointing to Australian address area */}
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-md h-100 w-308 bg-slate-100">
            <iframe
              title="Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.491227438211!2d150.8970105742874!3d-33.696235810139065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129efb17dabe9f%3A0x78f460342e42f356!2s69%20Centennial%20Dr%2C%20The%20Ponds%20NSW%202769%2C%20Australia!5e0!3m2!1sen!2sin!4v1785137751312!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "contrast(1.05) grayscale(0.05)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full"
            />
          </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-205 bg-white p-8 text-left shadow-lg">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="h-20 w-20 rounded-full bg-emerald-50 text-emerald-600 mb-6 shadow-xs flex items-center justify-center">
                    <CheckCircle className="h-10 w-10" />
                  </div>

                  <h3 className="text-3xl font-extrabold font-heading text-slate-900 mb-3">
                    Enquiry Submitted!
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed max-w-md">
                    Thank you for connecting with us. Our solutions team has received your information and will reach out to you within
                    <strong> 1 business day</strong>.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-md hover:bg-slate-800 transition-all duration-300"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-blue-500">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your Name"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-blue-500">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-blue-500">Company Name</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Canon Medical"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-blue-500">Practice Area</label>
                      <select
                        value={formData.practice}
                        onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all cursor-pointer"
                      >
                        <option>D365 Finance</option>
                        <option>D365 Supply Chain</option>
                        <option>D365 Customer Engagement</option>
                        <option>Business Central</option>
                        <option>Power Apps & Automate</option>
                        <option>Power BI & Fabric</option>
                        <option>Azure Integration Services</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-blue-500">Project Overview</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project challenges, timelines, or Microsoft stack requirements..."
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all"
                    />
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-slate-500 bg-slate-50 border border-slate-100 p-3.5 rounded-xl">
                    <Globe className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Your data is stored securely. Form submissions are verified and protected under SSL encryption.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-white font-bold text-base shadow-md hover:bg-slate-800 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Solutions Consultation</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
