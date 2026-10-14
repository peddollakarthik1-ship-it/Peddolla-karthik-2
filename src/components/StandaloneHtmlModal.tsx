import React, { useState } from 'react';
import { X, Copy, Check, Download, Code2, Eye } from 'lucide-react';
import { generateStandaloneHtml } from '../utils/standaloneHtml';

interface StandaloneHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneHtmlModal: React.FC<StandaloneHtmlModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const code = generateStandaloneHtml();

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'peddolla-karthik-portfolio.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Code2 className="w-5 h-5 text-blue-400" />
            <div>
              <h2 className="text-sm font-bold tracking-tight">
                Standalone HTML5 Code (Tailwind CDN)
              </h2>
              <p className="text-2xs text-slate-400">
                Single-file website ready to run anywhere without build steps
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg inline-flex items-center gap-1.5 shadow-2xs transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-lg inline-flex items-center gap-1.5 border border-slate-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .html</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-4 bg-slate-950 overflow-y-auto flex-1 font-mono text-xs text-slate-300 leading-relaxed">
          <pre className="whitespace-pre overflow-x-auto p-2">
            <code>{code}</code>
          </pre>
        </div>

        {/* Bottom Banner */}
        <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
          <span>&check; Includes complete Tailwind CSS script CDN and responsive layout.</span>
          <button
            onClick={onClose}
            className="font-semibold text-slate-700 hover:text-slate-900"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
