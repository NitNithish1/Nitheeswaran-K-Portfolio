import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, Code2, FileText, Send } from 'lucide-react';

interface NavbarProps {
  onOpenCodeModal: () => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCodeModal, onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090d16]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="group flex items-center gap-2 text-lg font-bold tracking-tight text-white transition"
          id="nav-brand-logo"
        >
          <span className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 group-hover:border-indigo-400 group-hover:scale-105 transition-transform text-sm font-mono font-semibold">
            NK
          </span>
          <span className="font-mono text-slate-300 group-hover:text-white transition">
            &lt;<span className="text-white">Nitheeswaran</span><span className="text-sky-400">.K</span>/&gt;
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              id={`nav-link-${link.id}`}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === link.id
                  ? 'text-sky-400 bg-sky-500/10 border border-sky-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenCodeModal}
            id="nav-btn-view-source"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/80 hover:bg-slate-700 text-indigo-300 border border-indigo-500/30 hover:border-indigo-400 transition"
            title="View separated HTML, CSS, and JS source files"
          >
            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>HTML/CSS/JS Code</span>
          </button>

          <button
            onClick={onOpenResumeModal}
            id="nav-btn-view-resume"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 hover:border-slate-500 transition"
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            id="nav-btn-hire-me"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 transition transform active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenCodeModal}
            className="p-2 rounded-lg bg-slate-800 text-indigo-300 border border-indigo-500/30 text-xs flex items-center gap-1"
            title="View HTML, CSS, JS files"
          >
            <Code2 className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="nav-mobile-toggle-btn"
            className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090d16]/98 border-b border-slate-800/90 px-5 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-fadeIn">
          <div className="space-y-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                  activeSection === link.id
                    ? 'text-sky-400 bg-sky-500/10 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCodeModal();
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold bg-slate-800 text-indigo-300 border border-indigo-500/30"
            >
              <Code2 className="w-4 h-4" />
              Source Code
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700"
            >
              <FileText className="w-4 h-4" />
              Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
