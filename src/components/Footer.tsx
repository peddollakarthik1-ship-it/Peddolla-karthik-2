import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, FileText, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenHtmlModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenHtmlModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                PK
              </span>
              <span className="text-base font-bold text-white tracking-tight">
                Peddolla Karthik
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Sales Executive &amp; Sales Representative with hands-on experience in electronics retail at Big C Mobiles and customer logistics at Go Express. Based in Amrad, Nizamabad.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#about" className="hover:text-white transition-colors">About &amp; Objective</a>
              <a href="#experience" className="hover:text-white transition-colors">Work Experience</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills &amp; Competencies</a>
              <a href="#education" className="hover:text-white transition-colors">Education &amp; Qualifications</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact Details</a>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Information
            </h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <a href={`tel:${portfolioData.phone}`} className="hover:text-white transition-colors">
                  {portfolioData.formattedPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <a href={`mailto:${portfolioData.email}`} className="hover:text-white transition-colors truncate">
                  {portfolioData.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{portfolioData.location}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={onOpenResume}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-2xs font-semibold inline-flex items-center gap-1 transition-colors"
              >
                <FileText className="w-3 h-3 text-blue-400" />
                <span>View ATS Resume</span>
              </button>
              <button
                onClick={onOpenHtmlModal}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-2xs font-semibold inline-flex items-center gap-1 transition-colors"
              >
                <Code2 className="w-3 h-3 text-blue-400" />
                <span>Get HTML Code</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            <p>&copy; {new Date().getFullYear()} Peddolla Karthik. All rights reserved.</p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-xs font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
