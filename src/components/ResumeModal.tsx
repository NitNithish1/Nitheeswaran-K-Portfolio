import React from 'react';
import { personalInfo, educationData, experienceData, certificationsData, skillsData } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-white">Resume Document — Nitheeswaran K</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-sky-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Canvas (Print-styled) */}
        <div className="p-6 sm:p-8 bg-[#090d16] overflow-y-auto space-y-6 text-slate-200 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{personalInfo.name}</h1>
            <p className="text-sm text-sky-400 font-semibold mt-0.5">{personalInfo.title}</p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-3 font-mono">
              <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-sky-400" /> {personalInfo.phone}</span>
              <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-sky-400" /> {personalInfo.email}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-sky-400" /> {personalInfo.location}</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-2 font-mono">
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white underline">github.com/NitNithish1</a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white underline">linkedin.com/in/nitheeswaran-k-63a49a36a</a>
              <a href={personalInfo.socials.leetcode} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white underline">leetcode.com/u/nithish_1245</a>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold mb-2">Career Objective</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.careerObjective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold mb-3">Education</h2>
            <div className="space-y-3">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <h3 className="font-bold text-white">{edu.degree}</h3>
                    <p className="text-slate-400">{edu.institution}, {edu.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-sky-300 font-semibold">{edu.score}</span>
                    <p className="text-slate-400 font-mono text-xs">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold mb-3">Experience</h2>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <h3 className="font-bold text-white">{exp.role} | {exp.company}</h3>
                    <p className="text-slate-400 text-xs">{exp.location}</p>
                  </div>
                  <span className="font-mono text-slate-400 text-xs">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 pl-1">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold mb-2">Technical Skills</h2>
            <div className="text-xs space-y-1 text-slate-300">
              <p><strong>Languages:</strong> Java, Python, HTML5, CSS3, JavaScript, TypeScript, Dart</p>
              <p><strong>Query Languages & DB:</strong> SQL, MySQL, MongoDB, Firebase</p>
              <p><strong>Frameworks & Web:</strong> React.js, FastAPI, Spring Boot, Flutter, Node.js, Express, Tailwind CSS</p>
              <p><strong>DevOps & Tools:</strong> Git, GitHub, VS Code, Postman, CI/CD Pipelines, Docker, Linux</p>
              <p><strong>AI & Vision:</strong> CNN, Gemini Vision API, Chatbot integrations</p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold mb-2">Certifications</h2>
            <div className="text-xs space-y-1 text-slate-300">
              {certificationsData.map((cert, idx) => (
                <p key={idx}>• <strong>{cert.title}</strong> — {cert.issuer}</p>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
