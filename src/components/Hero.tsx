import React, { useState } from 'react';
import { Phone, Mail, MapPin, Copy, Check, MessageSquare, Download, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="home" className="py-12 md:py-20 bg-gradient-to-b from-white via-slate-50/50 to-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 2-Column Desktop Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean unboxed metadata separator (Zero-Pill discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <span className="text-blue-600">Sales Executive</span>
              <span aria-hidden="true">·</span>
              <span>Nizamabad, Telangana</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-600 flex items-center gap-1 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                Actively Seeking Opportunities
              </span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] text-balance">
                Peddolla Karthik
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-bold text-slate-700 tracking-tight">
                Sales Executive &amp; Sales Representative
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Results-oriented sales professional with proven experience at <strong className="text-slate-800 font-semibold">Big C Mobiles</strong> and <strong className="text-slate-800 font-semibold">Go Express</strong>. Adept at customer inquiry resolution, persuasive mobile demonstrations, upselling accessories, and maintaining structured follow-ups to consistently achieve target revenue quotas.
            </p>

            {/* Direct Contact Bar with 1-click Copy */}
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <a href={`tel:${portfolioData.phone}`} className="font-semibold hover:text-blue-600 transition-colors">
                    {portfolioData.formattedPhone}
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard(portfolioData.phone, 'phone')}
                  className="px-2.5 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded transition-colors inline-flex items-center gap-1"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="border-t border-slate-100 pt-2 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-700 truncate max-w-[260px] sm:max-w-none">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <a href={`mailto:${portfolioData.email}`} className="font-semibold hover:text-blue-600 transition-colors truncate">
                    {portfolioData.email}
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard(portfolioData.email, 'email')}
                  className="px-2.5 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded transition-colors inline-flex items-center gap-1"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="border-t border-slate-100 pt-2 flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{portfolioData.location}</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500">PIN: {portfolioData.pinCode}</span>
              </div>
            </div>

            {/* High-Intent CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${portfolioData.phone}`}
                className="px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs hover:shadow transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call 7673930347</span>
              </a>

              <a
                href={`mailto:${portfolioData.email}`}
                className="px-5 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors inline-flex items-center gap-2 shadow-2xs"
              >
                <Mail className="w-4 h-4 text-slate-600" />
                <span>Email Me</span>
              </a>

              <a
                href={portfolioData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors inline-flex items-center gap-2"
                title="Send a WhatsApp message directly"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              <button
                onClick={onOpenResume}
                className="px-4 py-3 text-sm font-semibold text-slate-600 hover:text-slate-900 bg-transparent hover:bg-slate-100 rounded-xl transition-colors inline-flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>View CV</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-Fidelity Professional Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <img
                  src="/src/assets/images/karthik_avatar_1791905920828.jpg"
                  alt="Peddolla Karthik - Sales Executive"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Fallback container if local asset failed
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-blue-900', 'text-white');
                      target.parentElement.innerHTML = `
                        <div class="text-center p-6">
                          <div class="w-20 h-20 mx-auto rounded-full bg-blue-700 flex items-center justify-center font-bold text-3xl mb-3">PK</div>
                          <div class="font-bold text-xl">Peddolla Karthik</div>
                          <div class="text-blue-200 text-sm mt-1">Sales Executive</div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Quick Profile Summary Box */}
              <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Domain Experience</span>
                  <span className="font-semibold text-slate-900">Electronics Retail &amp; Logistics</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Languages</span>
                  <span className="font-semibold text-slate-900">Telugu, Hindi, English</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Location</span>
                  <span className="font-semibold text-slate-900">Amrad, Nizamabad</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-50">
                  <span className="text-slate-500 font-medium">Notice Period</span>
                  <span className="font-semibold text-emerald-700 inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Available Immediately
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-Width Quantitative KPI Strip Below Split */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.stats.map((stat) => (
            <div key={stat.label} className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
