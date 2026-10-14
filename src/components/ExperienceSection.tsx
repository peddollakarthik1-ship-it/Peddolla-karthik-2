import React, { useState } from 'react';
import { Briefcase, Building2, MapPin, CheckCircle, TrendingUp, Sparkles, Layers } from 'lucide-react';
import { portfolioData, ExperienceItem } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>(portfolioData.experiences[0].id);

  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Work History
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 text-balance">
              Professional Work Experience
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Hands-on track record across consumer retail electronics and logistics customer management.
            </p>
          </div>

          {/* Interactive Filter / Tab Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-2xs self-start md:self-auto">
            {portfolioData.experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExpId(exp.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeExpId === exp.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Experience Cards */}
        <div className="space-y-8">
          {portfolioData.experiences.map((exp: ExperienceItem) => {
            const isSelected = activeExpId === exp.id;
            return (
              <div
                key={exp.id}
                id={`exp-${exp.id}`}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                  isSelected
                    ? 'border-blue-400 shadow-md ring-2 ring-blue-50'
                    : 'border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Left: Role Details & Contributions */}
                  <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
                    
                    {/* Header */}
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 mb-2">
                        <span className="font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="text-base font-semibold text-blue-600 mt-0.5 flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        {exp.tagline}
                      </p>
                    </div>

                    {/* Core Responsibilities */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        Key Responsibilities &amp; Operations
                      </h4>
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Highlights & Value Added */}
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                        Achievements &amp; Impact
                      </div>
                      <ul className="space-y-1.5">
                        {exp.keyHighlights.map((hl, i) => (
                          <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                            <span className="text-blue-600 font-bold">&bull;</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Competencies Applied */}
                    <div className="pt-2">
                      <span className="text-xs font-semibold text-slate-500 block mb-2">
                        Core Competencies Applied:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skillsUsed.map((sk) => (
                          <span
                            key={sk}
                            className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-md border border-slate-200/70"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right: Real-World Work Showcase Photo */}
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-slate-100 border-t lg:border-t-0 lg:border-l border-slate-200 overflow-hidden">
                    <img
                      src={exp.image}
                      alt={`${exp.company} work environment`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'p-8', 'bg-slate-800', 'text-white');
                          target.parentElement.innerHTML = `
                            <div class="text-center">
                              <div class="text-lg font-bold">${exp.company}</div>
                              <div class="text-xs text-slate-400 mt-1">${exp.role}</div>
                            </div>
                          `;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                      <div className="text-white">
                        <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                          {exp.company}
                        </div>
                        <div className="text-sm font-semibold">
                          {exp.role} · {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
