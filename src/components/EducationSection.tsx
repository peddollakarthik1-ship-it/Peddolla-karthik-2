import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 text-balance">
            Education &amp; Qualifications
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Formal education credentials providing disciplined study habits, mathematical accuracy for billing, and strong communication skills.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.education.map((edu, index) => (
            <div
              key={edu.degree}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {index === 0 ? 'Higher Secondary' : 'Secondary Education'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {edu.degree}
                </h3>
                <div className="text-sm font-semibold text-blue-600 mt-0.5">
                  {edu.board}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {edu.location}
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {edu.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Verified Certificate</span>
              </div>
            </div>
          ))}
        </div>

        {/* Work Ethic & Continuous Learning Card */}
        <div className="mt-8 p-6 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Rapid Product Adaptation &amp; Continuous Learning</h4>
              <p className="text-xs text-slate-500">
                Committed to quick onboarding, learning product specs, and mastering company-specific POS software within days.
              </p>
            </div>
          </div>
          <a
            href="tel:7673930347"
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap self-stretch sm:self-auto text-center"
          >
            Discuss Opportunities
          </a>
        </div>

      </div>
    </section>
  );
};
