import React from 'react';
import { personalInfo, educationData } from '../data/portfolioData';
import { GraduationCap, Briefcase, Languages, MapPin, Target, Sparkles, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-slate-300">
            Dedicated to software craftsmanship, continuous learning, and creating impactful technical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Bio & Career Objective */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Career Objective Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm glow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Career Objective</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base italic border-l-2 border-indigo-500/40 pl-4 py-1">
                "{personalInfo.careerObjective}"
              </p>
            </div>

            {/* About Narrative Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm glow-card space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Passionate Developer & Problem Solver</span>
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Currently pursuing a Bachelor of Engineering in Computer Science at <strong className="text-white">V.S.B College of Engineering Technical Campus</strong> in Coimbatore. I combine hands-on full-stack development skills with modern DevOps methodologies to deliver secure, responsive, and maintainable systems.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                During my DevOps Internship at <strong className="text-white">Vaizai Solutions</strong>, I actively contributed to CI/CD automation, container workflows, and deployment cycles, sharpening my understanding of how enterprise code progresses from local commit to cloud production.
              </p>

              {/* Quick Details Chips */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-800/80">
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <Languages className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>English, Tamil</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <Briefcase className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>DevOps Intern @ Vaizai Solutions</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Open for Opportunities</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Academic Journey */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm glow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Education</h3>
                  <p className="text-xs text-slate-400">Academic qualifications & achievements</p>
                </div>
              </div>

              <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline bullet */}
                    <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-sky-400 group-hover:scale-125 transition-transform" />
                    
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between flex-wrap gap-1">
                        <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
                          {edu.score}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {edu.period}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                        {edu.degree}
                      </h4>

                      <p className="text-sm text-slate-300 font-medium">
                        {edu.institution}
                      </p>

                      <p className="text-xs text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {edu.location}
                      </p>

                      {edu.description && (
                        <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
