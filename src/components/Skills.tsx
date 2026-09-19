import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import {
  Code,
  Layout,
  Server,
  GitBranch,
  Search,
  Zap,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Languages' | 'Frontend & Mobile' | 'Backend & Cloud' | 'DevOps & Tools'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'All', label: 'All Skills', icon: Sparkles },
    { id: 'Languages', label: 'Languages', icon: Code },
    { id: 'Frontend & Mobile', label: 'Frontend & Mobile', icon: Layout },
    { id: 'Backend & Cloud', label: 'Backend & Cloud', icon: Server },
    { id: 'DevOps & Tools', label: 'DevOps & Tools', icon: GitBranch },
  ] as const;

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeTab === 'All' || skill.category === activeTab;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 bg-[#080c16]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-slate-300">
            A comprehensive overview of programming languages, modern frameworks, database management, and DevOps tooling.
          </p>
        </div>

        {/* Controls: Category Tabs & Quick Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 w-full sm:w-auto">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  id={`skills-tab-${cat.id.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === cat.id
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g., Python)..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-400 text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group p-4 rounded-xl bg-slate-900/60 hover:bg-slate-850 border border-slate-800/80 hover:border-indigo-500/40 glow-card transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:text-sky-300 flex items-center justify-center transition-colors">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] text-slate-400">
                      {skill.category}
                    </span>
                  </div>
                </div>

                {skill.highlight && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" title="Core Strength" />
                )}
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>Proficiency</span>
                  <span className="text-slate-300 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 transition-all duration-500 group-hover:brightness-125"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies Tag Cloud */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/80 via-[#0d1322] to-slate-900/80 border border-slate-800">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-sky-400" />
            <h3 className="text-lg font-bold text-white">Full Stack & DevOps Summary</h3>
          </div>
          <p className="text-sm text-slate-300 mb-5 leading-relaxed">
            Proficient with end-to-end development lifecycles from architecture, database schema design, and responsive frontend implementation to containerization and CI/CD pipelines.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Java", "Python", "React.js", "TypeScript", "FastAPI", "Spring Boot",
              "Node.js", "Express", "MySQL", "MongoDB", "Firebase", "Flutter",
              "Docker", "CI/CD Automation", "Git & GitHub", "REST APIs", "Gemini AI",
              "Linux", "VS Code", "Postman"
            ].map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-200 border border-slate-700/60 hover:border-indigo-400 hover:text-white transition"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
