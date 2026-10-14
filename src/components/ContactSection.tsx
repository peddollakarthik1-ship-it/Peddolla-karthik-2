import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Check, Copy, Sparkles, Building, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [inquiryType, setInquiryType] = useState('Full-Time Position');
  const [recruiterName, setRecruiterName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [customNotes, setCustomNotes] = useState('');
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [copiedContact, setCopiedContact] = useState<string | null>(null);

  const handleCopyContact = (value: string, key: string) => {
    navigator.clipboard.writeText(value);
    setCopiedContact(key);
    setTimeout(() => setCopiedContact(null), 2500);
  };

  const getEmailSubject = () => {
    return encodeURIComponent(`Job Opportunity: ${inquiryType} for Peddolla Karthik`);
  };

  const getEmailBody = () => {
    const text = `Hi Karthik,\n\nI reviewed your sales portfolio. We would like to connect regarding an opportunity at ${companyName || '[Company Name]'}.\n\nInquiry Type: ${inquiryType}\nContact Person: ${recruiterName || '[Recruiter Name]'}\nNotes: ${customNotes || 'Please let us know your availability for a brief discussion.'}\n\nBest regards,\n${recruiterName || 'Hiring Team'}`;
    return encodeURIComponent(text);
  };

  const getDraftPlainText = () => {
    return `Hi Karthik,\n\nI reviewed your sales portfolio. We would like to connect regarding an opportunity at ${companyName || '[Company Name]'}.\n\nInquiry Type: ${inquiryType}\nContact Person: ${recruiterName || '[Recruiter Name]'}\nNotes: ${customNotes || 'Please let us know your availability for a brief discussion.'}\n\nBest regards,\n${recruiterName || 'Hiring Team'}`;
  };

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(getDraftPlainText());
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 text-balance">
            Let&apos;s Discuss Sales &amp; Growth Opportunities
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Available immediately for full-time sales executive, representative, and customer support positions across Nizamabad and surrounding regions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-2xs hover:border-blue-300 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Call</h3>
                    <a
                      href={`tel:${portfolioData.phone}`}
                      className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      {portfolioData.formattedPhone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopyContact(portfolioData.phone, 'phone')}
                  className="px-2.5 py-1 text-xs font-semibold text-slate-600 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors inline-flex items-center gap-1"
                >
                  {copiedContact === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="text-slate-500">Available: Mon &ndash; Sat (9 AM &ndash; 7 PM)</span>
                <a
                  href={`tel:${portfolioData.phone}`}
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Call Now &rarr;
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-2xs hover:border-blue-300 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate max-w-[210px] sm:max-w-none">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</h3>
                    <a
                      href={`mailto:${portfolioData.email}`}
                      className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors truncate block"
                    >
                      {portfolioData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopyContact(portfolioData.email, 'email')}
                  className="px-2.5 py-1 text-xs font-semibold text-slate-600 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors inline-flex items-center gap-1 shrink-0 ml-2"
                >
                  {copiedContact === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="text-slate-500">Direct response within 24 hours</span>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Compose Email &rarr;
                </a>
              </div>
            </div>

            {/* Location & WhatsApp Card */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Base Location</h3>
                  <p className="text-sm font-bold text-slate-900">
                    {portfolioData.location}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 pt-1">
                Open to roles based in Nizamabad city, Hyderabad, or surrounding districts with field travel and retail showroom shifts.
              </p>

              <div className="pt-2">
                <a
                  href={portfolioData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-xs inline-flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Recruiter Message Composer */}
          <div className="lg:col-span-7 bg-slate-50/60 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <h3 className="text-base font-bold text-slate-900">
                  Quick Interview or Inquiry Generator
                </h3>
              </div>
              <span className="text-2xs text-slate-500 font-medium">Pre-fill &amp; Send</span>
            </div>

            <p className="text-xs text-slate-600 mb-5">
              Select your purpose to quickly prepare a personalized email or copy a message for Karthik:
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:${portfolioData.email}?subject=${getEmailSubject()}&body=${getEmailBody()}`;
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Opportunity Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {['Full-Time Position', 'Interview Invitation', 'General Inquiry'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setInquiryType(type)}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg border text-left transition-all ${
                        inquiryType === type
                          ? 'border-blue-600 bg-blue-50/80 text-blue-800'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name / Contact Person
                  </label>
                  <input
                    type="text"
                    value={recruiterName}
                    onChange={(e) => setRecruiterName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Apex Retail Services"
                    className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message / Role Requirements
                </label>
                <textarea
                  rows={3}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="e.g. We have an opening for a Sales Representative in Nizamabad. Let us know when you can come in for a brief interview."
                  className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs inline-flex items-center gap-2 shadow-xs transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via Email Client</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-semibold rounded-xl text-xs inline-flex items-center gap-1.5 transition-colors"
                >
                  {copiedDraft ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Draft Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Draft Text</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
