import React, { useState } from 'react';
import { standaloneHtml, standaloneCss, standaloneJs } from '../data/standaloneCode';
import { X, Copy, Check, Download, FileCode, CheckCircle, Code } from 'lucide-react';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const getActiveCode = () => {
    switch (activeTab) {
      case 'html': return standaloneHtml;
      case 'css': return standaloneCss;
      case 'js': return standaloneJs;
    }
  };

  const getFileName = () => {
    switch (activeTab) {
      case 'html': return 'index.html';
      case 'css': return 'style.css';
      case 'js': return 'script.js';
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getActiveCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadFile = (fileName: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadAll = () => {
    handleDownloadFile('index.html', standaloneHtml);
    setTimeout(() => handleDownloadFile('style.css', standaloneCss), 200);
    setTimeout(() => handleDownloadFile('script.js', standaloneJs), 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#0d121f] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Standalone Code Deliverables</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Ready to test
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Separated HTML, CSS, and JS blocks for instant local editing.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
            aria-label="Close code modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection Bar */}
        <div className="px-6 py-2.5 bg-[#121829] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('html')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition ${
                activeTab === 'html'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <FileCode className="w-3.5 h-3.5 text-rose-400" />
              <span>index.html</span>
            </button>

            <button
              onClick={() => setActiveTab('css')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition ${
                activeTab === 'css'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <FileCode className="w-3.5 h-3.5 text-sky-400" />
              <span>style.css</span>
            </button>

            <button
              onClick={() => setActiveTab('js')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition ${
                activeTab === 'js'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <FileCode className="w-3.5 h-3.5 text-amber-400" />
              <span>script.js</span>
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Copied {getFileName()}!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy {getFileName()}</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadAll}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
              title="Download index.html, style.css, and script.js"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>Download Files</span>
            </button>
          </div>
        </div>

        {/* Code Body Area */}
        <div className="p-4 sm:p-6 bg-[#0a0e1a] overflow-y-auto flex-1 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed select-text">
          <pre className="overflow-x-auto whitespace-pre">
            <code>{getActiveCode()}</code>
          </pre>
        </div>

        {/* Footer Note */}
        <div className="px-6 py-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Testing locally: Place index.html, style.css, and script.js in the same directory.</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-slate-800 text-slate-300 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
