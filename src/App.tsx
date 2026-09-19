import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperienceCertifications } from './components/ExperienceCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CodeExportModal } from './components/CodeExportModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 relative selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Subtle Background Radial Highlights */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[650px] h-[650px] rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute top-1/3 -left-40 w-[550px] h-[550px] rounded-full bg-sky-600/10 blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[160px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar
          onOpenCodeModal={() => setCodeModalOpen(true)}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero onOpenResume={() => setResumeModalOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <ExperienceCertifications />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Code Export Modal (HTML / CSS / JS) */}
      <CodeExportModal
        isOpen={codeModalOpen}
        onClose={() => setCodeModalOpen(false)}
      />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
}
