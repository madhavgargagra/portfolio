import React from 'react';
import Navbar from '../components/Navbar.jsx';
import HeroSection from '../components/HeroSection.jsx';
import ProjectShowcase from '../components/ProjectShowcase.jsx';
import AboutSection from '../components/AboutSection.jsx';
import Footer from '../components/Footer.jsx';

/**
 * HomePage
 * 
 * Artistic, cinematic developer portfolio for Madhav Garg.
 * Flow:
 * Phase 1: Landing Page (Hero)
 * Phase 2: Scroll-Driven Project Showcase (4 Character Themes, 3 Perspectives)
 * Phase 3: Editorial About Section (Profile, Background, Skills)
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F0E7] text-[#252522] selection:bg-[#C7A052]/20 selection:text-[#252522]">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectShowcase />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
