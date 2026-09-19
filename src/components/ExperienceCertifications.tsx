import React from 'react';
import { experienceData, certificationsData } from '../data/portfolioData';
import { Briefcase, Award, Calendar, MapPin, CheckCircle2, ShieldCheck, ChevronRight } from 'lucide-react';

export const ExperienceCertifications: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#080c16]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & Credentials
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-slate-300">
            Professional industry exposure and verified engineering skill credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Internship Experience */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-sm glow-card">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Work Experience</h3>
                    <p className="text-xs text-slate-400">Production-level cloud and DevOps exposure</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  Completed
                </span>
              </div>

              {experienceData.map((exp, idx) => (
                <div key={idx} className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                      <h4 className="text-lg font-bold text-white">
                        {exp.role} <span className="text-indigo-400">@ {exp.company}</span>
                      </h4>
                      <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60">
                        <Calendar className="w-3 h-3 text-sky-400" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 flex items-center gap-1.5 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location} • {exp.type}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-2">
                    {exp.achievements.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech badges */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      Tools & Methodologies Applied:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-sm glow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Certifications</h3>
                  <p className="text-xs text-slate-400">Verified domain credentials</p>
                </div>
              </div>

              <div className="space-y-4">
                {certificationsData.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 hover:border-amber-500/40 transition-all flex items-start justify-between gap-3 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Issued by {cert.issuer}
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 whitespace-nowrap">
                      Verified
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-indigo-950/40 to-slate-900/60 border border-indigo-500/20">
                <div className="flex items-center gap-2 text-xs font-semibold text-indigo-300 mb-1">
                  <span>Continuous Learning Track</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Actively solving algorithmic challenges on LeetCode and exploring cutting-edge generative AI models and distributed cloud systems.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
