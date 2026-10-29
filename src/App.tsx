/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { MentorshipSection } from './components/MentorshipSection';
import { AlumniSection } from './components/AlumniSection';
import { HighlightsSection } from './components/HighlightsSection';
import { TimelineJourney } from './components/TimelineJourney';
import { RecognitionSection } from './components/RecognitionSection';
import { EventDetailsSection } from './components/EventDetailsSection';
import { RegistrationSection } from './components/RegistrationSection';
import { GallerySection } from './components/GallerySection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAlumni = () => {
    const el = document.getElementById('alumni');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#FAFAFA] flex flex-col font-sans selection:bg-[#C9A227]/30 selection:text-[#FFF7E6]">
      {/* Navigation */}
      <Navbar onRegisterClick={scrollToRegister} />

      {/* Main Experience Flow */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero onRegisterClick={scrollToRegister} onExploreAlumni={scrollToAlumni} />

        {/* 2. Our Story — Why Footprints? */}
        <StorySection />

        {/* 3. Mentorship — Three Pillars */}
        <MentorshipSection />

        {/* 4. Alumni Showcase — Filterable Profiles */}
        <AlumniSection />

        {/* 5. Event Highlights — Bento Grid */}
        <HighlightsSection />

        {/* 6. Event Journey / Timeline */}
        <TimelineJourney />

        {/* 7. Recognition & Prizes */}
        <RecognitionSection />

        {/* 8. Event Details, Schedule & Calendar */}
        <EventDetailsSection />

        {/* 9. Registration Section */}
        <RegistrationSection />

        {/* 10. Moments & Campus Gallery */}
        <GallerySection />

        {/* 11. Frequently Asked Questions */}
        <FAQSection />

        {/* 12. Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* 13. Footer */}
      <Footer onRegisterClick={scrollToRegister} />
    </div>
  );
}
