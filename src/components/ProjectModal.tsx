import React from 'react';
import { Project } from '../types';
import { X, Github, ExternalLink, Check, Layers, Cpu, Activity } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#0d121f] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div>
            <span className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Visual Banner */}
          <div 
            className="w-full h-44 rounded-xl flex items-center justify-center relative overflow-hidden border border-slate-700/50 shadow-inner"
            style={{ background: project.imagePlaceholder }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="relative z-10 text-center px-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/40 backdrop-blur-md text-slate-200 border border-white/20 mb-2">
                {project.subtitle}
              </span>
              <h4 className="text-lg font-bold text-white tracking-wide drop-shadow-md">
                {project.title}
              </h4>
            </div>
          </div>

          {/* Detailed Overview */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-400" />
              Project Overview
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Metrics if available */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-lg font-bold font-mono text-sky-400">{metric.value}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{metric.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-sky-400" />
              Core Architecture & Highlights
            </h4>
            <ul className="space-y-2">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono mb-2.5">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white"
          >
            Close
          </button>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
