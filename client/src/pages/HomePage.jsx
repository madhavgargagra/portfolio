import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import HeroSection from '../components/HeroSection.jsx';
import ProjectShowcase from '../components/ProjectShowcase.jsx';
import AboutSection from '../components/AboutSection.jsx';
import TimelineSection from '../components/TimelineSection.jsx';
import CertificationsSection from '../components/CertificationsSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import Footer from '../components/Footer.jsx';
import IntroScreen from '../components/IntroScreen.jsx';

/**
 * HomePage
 *
 * Complete, polished MERN developer portfolio for Madhav Garg.
 * Flow:
 * 1. Intro Screen (Gentle logo entrance animation, runs once per session)
 * 2. Landing Page (Hero with editorial introduction & dual PDF/DOCX resume downloads)
 * 3. Professional Project Showcase (MERN & systems engineering grid)
 * 4. Profile & Skills (Categorized proficiencies with animated indicators)
 * 5. Education & Experience Timeline (Chronological academic & project milestones)
 * 6. Certifications & Achievements (Verified licensures & hackathon awards)
 * 7. Contact Form (Express REST API with Mongoose validation & persistence)
 * 8. Refined Footer with Express backend status
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F0E7] dark:bg-[#111317] text-[#252522] dark:text-[#E6E4DE] selection:bg-[#C7A052]/20 selection:text-[#252522] dark:selection:text-white transition-colors duration-500 overflow-x-hidden">
      <IntroScreen />
      <Navbar />
      <main>
        <HeroSection />
        <ProjectShowcase />
        <AboutSection />
        <TimelineSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
