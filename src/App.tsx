import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { StandaloneHtmlModal } from './components/StandaloneHtmlModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isHtmlModalOpen, setIsHtmlModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenHtmlModal={() => setIsHtmlModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About & Career Objective */}
        <AboutSection />

        {/* Work Experience Timeline */}
        <ExperienceSection />

        {/* Core Sales Skills */}
        <SkillsSection />

        {/* Education & Qualifications */}
        <EducationSection />

        {/* Contact & Recruiter Outreach */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenHtmlModal={() => setIsHtmlModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <StandaloneHtmlModal
        isOpen={isHtmlModalOpen}
        onClose={() => setIsHtmlModalOpen(false)}
      />
    </div>
  );
}
