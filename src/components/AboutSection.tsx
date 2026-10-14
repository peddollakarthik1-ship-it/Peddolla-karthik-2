import React from 'react';
import { Target, Languages, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
            About &amp; Career Objective
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 text-balance">
            Target-Driven Sales Representative Focused on Value &amp; Trust
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            With hands-on experience in high-volume retail electronics at Big C Mobiles and customer logistics at Go Express, I specialize in understanding consumer needs and delivering reliable, goal-driven results.
          </p>
        </div>

        {/* Career Objective Callout */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Official Career Objective
              </span>
              <blockquote className="text-lg sm:text-xl font-semibold text-slate-900 leading-relaxed">
                &ldquo;{portfolioData.careerObjective}&rdquo;
              </blockquote>
              <p className="text-sm text-slate-600 pt-1">
                Committed to bringing energy, strong customer rapport, and a disciplined daily work ethic to any dynamic sales or customer operations team.
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column Details: Personal Attributes & Spoken Languages */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Professional Strengths */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-900">Core Professional Strengths</h3>
            </div>
            <p className="text-sm text-slate-600">
              Key competencies that distinguish my day-to-day sales and client engagement performance:
            </p>

            <div className="space-y-3 pt-2">
              {portfolioData.personalStrengths.map((strength, index) => (
                <div
                  key={strength}
                  className="p-3.5 bg-slate-50/70 rounded-xl border border-slate-200/80 flex items-center gap-3"
                >
                  <span className="w-6 h-6 rounded-md bg-white text-blue-600 font-bold text-xs flex items-center justify-center border border-slate-200 shadow-2xs">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-semibold text-slate-800">{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Languages Breakdown */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <Languages className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-900">Languages Known</h3>
            </div>
            <p className="text-sm text-slate-600">
              Multilingual fluency enabling seamless connection with local and pan-regional customers:
            </p>

            <div className="space-y-3.5 pt-2">
              {portfolioData.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="p-4 bg-slate-50/70 rounded-xl border border-slate-200/80 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-slate-900">{lang.name}</span>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                      {lang.fluency}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-normal">
                    {lang.usage}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
