import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Github, Linkedin, Code2, Mail, Terminal, Sparkles, CheckCircle2, Copy, Check } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-sky-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                {personalInfo.status}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-mono text-sky-400 font-semibold tracking-wide">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                <span className="text-white">{personalInfo.name}</span>
                <br />
                <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {personalInfo.title}
                </span>
              </h1>
            </div>

            {/* Brief Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Computer Science Engineer specialized in crafting intelligent web applications, automated cloud CI/CD pipelines, and robust backend architectures. Focused on turning complex problems into high-performance digital products.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                id="hero-cta-view-work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                id="hero-cta-contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-slate-800/80 hover:bg-slate-750 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Get In Touch</span>
              </a>

              <button
                onClick={onOpenResume}
                id="hero-cta-resume"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm text-slate-400 hover:text-sky-300 hover:bg-slate-800/40 border border-transparent hover:border-slate-700/60 transition"
              >
                <span>View Resume</span>
              </button>
            </div>

            {/* Social Channels */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mr-1">Connect:</span>
              
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-social-github"
                className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/70 hover:border-sky-500/50 hover:shadow-sm hover:shadow-sky-500/20 transition transform hover:-translate-y-0.5"
                aria-label="GitHub Profile"
                title="GitHub: NitNithish1"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-social-linkedin"
                className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/70 hover:border-sky-500/50 hover:shadow-sm hover:shadow-sky-500/20 transition transform hover:-translate-y-0.5"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-social-leetcode"
                className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/70 hover:border-amber-500/50 hover:shadow-sm hover:shadow-amber-500/20 transition transform hover:-translate-y-0.5"
                aria-label="LeetCode Profile"
                title="LeetCode Profile"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
              </a>

              <div className="relative">
                <button
                  onClick={handleCopyEmail}
                  id="hero-copy-email-btn"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/70 text-xs font-mono transition"
                  title="Click to copy email address"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span className="hidden sm:inline">{personalInfo.email}</span>
                  <span className="sm:hidden">Email</span>
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Terminal Preview */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-sky-500/20 rounded-2xl blur-lg opacity-75"></div>

              {/* Terminal Window */}
              <div className="relative rounded-2xl bg-[#0d121f] border border-slate-800/90 shadow-2xl shadow-black/80 overflow-hidden">
                {/* Window Header */}
                <div className="px-4 py-3 bg-[#131929] border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                      engineer.profile.ts
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded border border-slate-700/50">
                    v2.4
                  </span>
                </div>

                {/* Code Body */}
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 space-y-2 bg-[#0a0e1a]/95 select-text">
                  <div className="text-slate-400 italic">
                    {'// Nitheeswaran K — Developer Profile & Tech Matrix'}
                  </div>
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-sky-300">developer</span> = &#123;
                  </div>
                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-slate-400">fullName:</span>{' '}
                      <span className="text-emerald-300">"{personalInfo.name}"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">degree:</span>{' '}
                      <span className="text-emerald-300">"B.E. Computer Science"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">institution:</span>{' '}
                      <span className="text-emerald-300">"V.S.B College of Engineering"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">recentExperience:</span> &#123;
                      <div className="pl-4 text-xs">
                        <span className="text-slate-400">role:</span> <span className="text-amber-300">"DevOps Intern"</span>,
                        <br />
                        <span className="text-slate-400">company:</span> <span className="text-amber-300">"Vaizai Solutions"</span>
                      </div>
                      &#125;,
                    </div>
                    <div>
                      <span className="text-slate-400">languages:</span> [
                      <span className="text-indigo-300">"Java"</span>,{' '}
                      <span className="text-indigo-300">"Python"</span>,{' '}
                      <span className="text-indigo-300">"TS/JS"</span>,{' '}
                      <span className="text-indigo-300">"SQL"</span>
                      ],
                    </div>
                    <div>
                      <span className="text-slate-400">aiInterests:</span> [
                      <span className="text-indigo-300">"CNN Vision"</span>,{' '}
                      <span className="text-indigo-300">"Gemini AI"</span>
                      ],
                    </div>
                    <div>
                      <span className="text-slate-400">openToWork:</span>{' '}
                      <span className="text-emerald-400 font-bold">true</span>
                    </div>
                  </div>
                  <div>&#125;;</div>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Ready for production</span>
                    </span>
                    <span className="text-slate-400">UTF-8 • TSX</span>
                  </div>
                </div>
              </div>

              {/* Stat callouts below */}
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800/80 backdrop-blur-sm">
                  <div className="text-lg font-bold text-white font-mono">7.5</div>
                  <div className="text-[11px] text-slate-400">B.E. CGPA</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800/80 backdrop-blur-sm">
                  <div className="text-lg font-bold text-sky-400 font-mono">3+</div>
                  <div className="text-[11px] text-slate-400">Major Projects</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800/80 backdrop-blur-sm">
                  <div className="text-lg font-bold text-indigo-400 font-mono">3</div>
                  <div className="text-[11px] text-slate-400">Certifications</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
