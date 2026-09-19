import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code2, Check, Copy, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Simulated network transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 8000);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-slate-300">
            Have an internship opening, freelance project, or collaboration in mind? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-sm glow-card space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Let's Discuss Opportunities</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  I am currently based in <strong className="text-white">Coimbatore, India</strong> and readily available for junior engineering positions, internships, and project collaborations.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-3.5">
                {/* Email item */}
                <div className="p-3.5 rounded-xl bg-slate-850/70 border border-slate-800 flex items-center justify-between group hover:border-sky-500/40 transition">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">Email Address</span>
                      <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white group-hover:text-sky-300 transition">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone item */}
                <div className="p-3.5 rounded-xl bg-slate-850/70 border border-slate-800 flex items-center justify-between group hover:border-indigo-500/40 transition">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">Direct Phone</span>
                      <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-white group-hover:text-indigo-300 transition">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location item */}
                <div className="p-3.5 rounded-xl bg-slate-850/70 border border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">Location</span>
                    <span className="text-sm font-semibold text-white">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Social profile buttons */}
              <div className="pt-2 border-t border-slate-800/80">
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block mb-3">
                  Online Profiles:
                </span>
                <div className="grid grid-cols-3 gap-2.5">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-social-github"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-500 text-xs font-semibold transition"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-social-linkedin"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-sky-500 text-xs font-semibold transition"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-social-leetcode"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-amber-500 text-xs font-semibold transition"
                  >
                    <Code2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-sm glow-card">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Fill out the fields below and I will respond to your email promptly.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-start gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold">Message delivered successfully!</p>
                    <p className="text-emerald-200/80 mt-0.5">
                      Thank you, {formData.name || 'there'}! Nitheeswaran has received your inquiry and will reach back out soon.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" id="portfolio-contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Connor"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700/80 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700/80 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship opportunity / Project inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700/80 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                  />
                </div>

                {/* Message field */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-slate-300">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-slate-400">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Nitheeswaran, we reviewed your projects and would love to connect regarding an engineering role..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700/80 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition resize-y"
                  />
                </div>

                {/* Stylized Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="contact-submit-btn"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-600 hover:from-indigo-500 hover:to-sky-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-200 flex items-center justify-center gap-2 transform active:scale-98 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
