import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, ArrowRight, Award } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import CertificationsSection from '../components/CertificationsSection.jsx';

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E7] dark:bg-[#111317] text-[#252522] dark:text-[#E6E4DE] selection:bg-[#C7A052]/20 selection:text-[#252522] dark:selection:text-white transition-colors duration-500 overflow-x-hidden">
      <Navbar />

      <main className="pt-28 sm:pt-36">
        {/* Editorial Page Header */}
        <section className="relative px-4 sm:px-8 pb-8 max-w-7xl mx-auto">
          {/* Ambient Lighting */}
          <div className="pointer-events-none absolute top-0 right-1/4 w-[350px] sm:w-[500px] h-[280px] bg-[#C7A052]/10 dark:bg-[#C7A052]/5 blur-[120px] rounded-full" />

          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#252522]/60 dark:text-[#E6E4DE]/60 mb-6">
            <Link to="/" className="hover:text-[#C7A052] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#C7A052] font-semibold">Certifications</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A052]/40 bg-[#FAF7F2] dark:bg-[#191C22] text-xs font-mono text-[#252522] dark:text-[#E6E4DE] mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C7A052] shrink-0" />
              <span className="font-semibold uppercase tracking-wider">Verified Credentials</span>
              <span className="text-[#252522]/30 dark:text-white/30">&bull;</span>
              <span>Academics &amp; Licensures</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] tracking-tight leading-[1.15]">
              Certificates &amp; <span className="italic font-normal text-[#C7A052]">Achievements</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg font-sans text-[#252522]/80 dark:text-[#E6E4DE]/80 mt-3 sm:mt-4 leading-relaxed">
              Curated course certifications in Artificial Intelligence, Deep Learning, and Database Management, alongside verified Red Hat Academy attendance and collegiate honors.
            </p>
          </div>
        </section>

        {/* Interactive Certifications & Honors Section */}
        <CertificationsSection />

        {/* Bottom CTA */}
        <section className="py-16 sm:py-20 px-4 sm:px-8 border-t border-[#252522]/10 dark:border-white/10 bg-[#FAF7F2] dark:bg-[#191C22] text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] mb-3">
              Explore Project Implementations
            </h2>
            <p className="text-xs sm:text-sm font-sans text-[#252522]/70 dark:text-[#E6E4DE]/70 mb-6 leading-relaxed">
              View how these machine learning and systems engineering principles translate into practical software applications.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-full bg-[#252522] dark:bg-white text-[#F5F0E7] dark:text-[#111317] text-xs font-mono font-medium hover:bg-[#C7A052] dark:hover:bg-[#C7A052] dark:hover:text-white transition-colors shadow-xs"
              >
                <span>Browse Project Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-full border border-[#252522]/20 dark:border-white/20 text-[#252522] dark:text-[#E6E4DE] text-xs font-mono font-medium hover:border-[#C7A052] hover:text-[#C7A052] transition-colors"
              >
                <span>Read Candidate Bio</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
