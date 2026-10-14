import React from 'react';
import { X, Printer, Download, MapPin, Phone, Mail, CheckCircle, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

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
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="no-print px-6 py-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Curriculum Vitae / Printable Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg inline-flex items-center gap-1.5 shadow-2xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable ATS Resume Document */}
        <div className="overflow-y-auto p-6 sm:p-10 text-slate-900 bg-white space-y-6 print-page font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-300 pb-5 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
                {portfolioData.name}
              </h1>
              <p className="text-base font-bold text-blue-700 mt-0.5">
                {portfolioData.title}
              </p>
            </div>

            <div className="text-xs text-slate-600 text-center sm:text-right space-y-1">
              <div>Phone: <strong className="text-slate-900">{portfolioData.formattedPhone}</strong></div>
              <div>Email: <strong className="text-slate-900">{portfolioData.email}</strong></div>
              <div>Location: <strong className="text-slate-900">{portfolioData.location}</strong></div>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              {portfolioData.careerObjective}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
              Professional Work Experience
            </h2>

            <div className="space-y-4">
              {/* Go Express */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-slate-900">
                  <span className="text-sm">Sales Representative &mdash; Go Express</span>
                  <span className="text-slate-500 font-medium">Nizamabad, Telangana</span>
                </div>
                <ul className="mt-2 list-disc list-inside text-xs text-slate-700 space-y-1">
                  <li>Handled customer inquiries and assisted with services.</li>
                  <li>Generated leads and followed up with potential customers to achieve sales targets.</li>
                  <li>Maintained positive customer relationships and provided timely support.</li>
                </ul>
              </div>

              {/* Big C Mobiles */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-slate-900">
                  <span className="text-sm">Sales Executive &mdash; Big C Mobiles</span>
                  <span className="text-slate-500 font-medium">Nizamabad, Telangana</span>
                </div>
                <ul className="mt-2 list-disc list-inside text-xs text-slate-700 space-y-1">
                  <li>Assisted customers in selecting mobile phones and accessories based on budget and needs.</li>
                  <li>Explained product features, specifications, offers, and pricing.</li>
                  <li>Achieved daily and monthly sales targets through effective promotion and upselling.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Core Competencies & Skills */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              Key Competencies &amp; Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700">
              <div className="flex items-center gap-1.5">
                <span>&bull;</span> <span>Sales &amp; Lead Generation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>&bull;</span> <span>Achieving Sales Targets</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>&bull;</span> <span>Product Demonstration</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>&bull;</span> <span>Upselling &amp; Cross-Selling</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>&bull;</span> <span>Customer Service &amp; Support</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>&bull;</span> <span>Billing &amp; Documentation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>&bull;</span> <span>Customer Follow-ups</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>&bull;</span> <span>Relationship Building</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <strong>Board of Intermediate Education</strong> &mdash; Telangana
                </div>
                <span className="text-slate-500">Nizamabad</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <strong>Secondary School Certificate (SSC)</strong> &mdash; Telangana Board
                </div>
                <span className="text-slate-500">Nizamabad</span>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              Languages Known
            </h2>
            <p className="text-xs text-slate-700">
              <strong>Telugu</strong> (Native), <strong>Hindi</strong> (Fluent), <strong>English</strong> (Professional Working Proficiency)
            </p>
          </div>

          {/* Declaration */}
          <div className="border-t border-slate-200 pt-3 text-2xs text-slate-500 text-right">
            <span>Peddolla Karthik &bull; Amrad, Nizamabad</span>
          </div>

        </div>

      </div>
    </div>
  );
};
