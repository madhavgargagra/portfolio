import React from 'react';
import Navbar from '../components/Navbar.jsx';
import HeroSection from '../components/HeroSection.jsx';
import ProjectShowcase from '../components/ProjectShowcase.jsx';
import AboutSection from '../components/AboutSection.jsx';
import TimelineSection from '../components/TimelineSection.jsx';
import CertificationsSection from '../components/CertificationsSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import Footer from '../components/Footer.jsx';

/**
 * HomePage
 * 
 * Complete, polished MERN developer portfolio for Madhav Garg.
 * Flow:
 * 1. Landing Page (Hero with animated intro & CV download)
 * 2. Professional Project Showcase (MERN & systems engineering grid)
 * 3. Profile & Skills (Categorized proficiencies with animated indicators)
 * 4. Education & Experience Timeline (Chronological academic & project milestones)
 * 5. Certifications & Achievements (Verified licensures & hackathon awards)
 * 6. Contact Form (Express REST API with Mongoose validation & persistence)
 * 7. Refined Footer with Express backend status
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F0E7] dark:bg-[#111317] text-[#252522] dark:text-[#E6E4DE] selection:bg-[#C7A052]/20 selection:text-[#252522] dark:selection:text-white transition-colors duration-500">
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
