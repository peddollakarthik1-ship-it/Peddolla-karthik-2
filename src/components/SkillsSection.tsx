import React, { useState } from 'react';
import { CheckCircle2, TrendingUp, Users, Smartphone, FileSpreadsheet, Sparkles, Filter } from 'lucide-react';
import { portfolioData, SkillCategory } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...portfolioData.skillCategories.map((c) => c.title)];

  const filteredCategories =
    selectedCategory === 'All'
      ? portfolioData.skillCategories
      : portfolioData.skillCategories.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Professional Skills
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 text-balance">
              Core Sales &amp; Customer Support Competencies
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Battle-tested skills across lead prospecting, consultative sales, upselling, technical demonstration, and retail operations.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {cat === 'All' ? 'All Skills' : cat.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Highlight Quick Badges Grid */}
        <div className="mb-12 p-6 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-slate-50 rounded-2xl border border-blue-100/80">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            Quick Competencies Snapshot
          </div>
          <div className="flex flex-wrap gap-2.5">
            {[
              'Sales & Lead Generation',
              'Achieving Sales Targets',
              'Product Demonstration',
              'Upselling & Cross-Selling',
              'Customer Service & Care',
              'Billing & Documentation',
              'Client Follow-ups & Pipeline',
              'Price Negotiation',
              'Active Listening',
              'Smartphone Tech Specs'
            ].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 text-xs font-semibold text-slate-800 bg-white rounded-lg border border-slate-200/80 shadow-2xs flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{badge}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Skills by Category */}
        <div className="space-y-10">
          {filteredCategories.map((category: SkillCategory, idx) => (
            <div key={category.title} className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600 font-bold text-sm">0{idx + 1}.</span>
                  <span>{category.title}</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-2xl">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="text-sm font-bold text-slate-900">{skill.name}</h4>
                        <span className="text-2xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 whitespace-nowrap">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center text-2xs text-slate-500 gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>Verified in real sales roles</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
