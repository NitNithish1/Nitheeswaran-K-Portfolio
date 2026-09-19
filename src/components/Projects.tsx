import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { Github, ExternalLink, Sparkles, FolderGit2, ArrowUpRight, Activity, Leaf, GraduationCap, GitPullRequest } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Custom visual preview graphics for the 3 projects
  const renderVisualMockup = (projectId: string) => {
    switch (projectId) {
      case 'plant-disease-detection':
        return (
          <div className="w-full h-full bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between z-10">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Leaf className="w-3 h-3" /> CNN + Gemini Vision
              </span>
              <span className="text-[11px] font-mono text-emerald-400 bg-black/40 px-2 py-0.5 rounded border border-emerald-500/20">
                Accuracy: 94.8%
              </span>
            </div>
            
            {/* Visual leaf inspection HUD */}
            <div className="my-auto text-center z-10">
              <div className="inline-block p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 mb-1 shadow-lg shadow-emerald-900/30">
                <Leaf className="w-8 h-8" />
              </div>
              <p className="text-xs font-mono text-slate-300">Leaf Pathology Scanner</p>
              <p className="text-[11px] text-emerald-400 font-mono">Severity: Mild (14%) • Treatment Ready</p>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-emerald-500/20 pt-2 z-10">
              <span>FastAPI Backend</span>
              <span>Firebase DB</span>
            </div>

            {/* Ambient background grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          </div>
        );

      case 'smart-college-management':
        return (
          <div className="w-full h-full bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between z-10">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                <GraduationCap className="w-3 h-3" /> Flutter + Spring Boot
              </span>
              <span className="text-[11px] font-mono text-indigo-400 bg-black/40 px-2 py-0.5 rounded border border-indigo-500/20">
                3 User Roles
              </span>
            </div>
            
            {/* Visual ERP card */}
            <div className="my-auto text-center z-10">
              <div className="inline-block p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 mb-1 shadow-lg shadow-indigo-900/30">
                <GraduationCap className="w-8 h-8" />
              </div>
              <p className="text-xs font-mono text-slate-300">Smart Campus ERP & Chatbot</p>
              <p className="text-[11px] text-indigo-400 font-mono">Attendance • Marks • Timetable • Gemini</p>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-indigo-500/20 pt-2 z-10">
              <span>REST API</span>
              <span>MySQL Engine</span>
            </div>

            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          </div>
        );

      case 'devops-cloud-pipeline':
      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between z-10">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono bg-sky-500/20 text-sky-300 border border-sky-500/30">
                <GitPullRequest className="w-3 h-3" /> CI/CD Automation
              </span>
              <span className="text-[11px] font-mono text-sky-400 bg-black/40 px-2 py-0.5 rounded border border-sky-500/20">
                Vaizai DevOps
              </span>
            </div>
            
            {/* Visual Pipeline flow */}
            <div className="my-auto z-10 px-2">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-300">Build</div>
                <span className="text-sky-400 text-xs">→</span>
                <div className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-300">Test</div>
                <span className="text-sky-400 text-xs">→</span>
                <div className="px-2 py-1 rounded bg-emerald-900/60 border border-emerald-500/40 text-[10px] font-mono text-emerald-300">Deploy</div>
              </div>
              <p className="text-center text-xs font-mono text-slate-300">Continuous Deployment Hub</p>
              <p className="text-center text-[11px] text-sky-400 font-mono">Docker Containers • Zero Downtime</p>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-sky-500/20 pt-2 z-10">
              <span>GitHub Actions</span>
              <span>Health: 99.9%</span>
            </div>

            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-slate-300">
            Real-world applications built with modern frontend frameworks, scalable cloud backends, and AI vision integrations.
          </p>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group rounded-2xl bg-[#0e1424] border border-slate-800/90 hover:border-indigo-500/50 overflow-hidden flex flex-col glow-card transition-all duration-300 shadow-lg shadow-black/40"
            >
              {/* Image Placeholder / Interactive Mockup Banner */}
              <div 
                className="h-48 sm:h-52 w-full relative overflow-hidden cursor-pointer border-b border-slate-800"
                onClick={() => setSelectedProject(project)}
                title="Click to view detailed case study"
              >
                {renderVisualMockup(project.id)}
                
                {/* Overlay hover prompt */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <span className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/90 text-slate-900 flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span>Inspect Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Project #0{index + 1}
                  </span>
                </div>

                <h3 
                  onClick={() => setSelectedProject(project)}
                  className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors cursor-pointer mb-2 line-clamp-1"
                  title={project.title}
                >
                  {project.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-github-${project.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800/70 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/70 hover:border-slate-600 transition"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    id={`project-live-${project.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-indigo-600/90 hover:bg-indigo-600 text-white shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
