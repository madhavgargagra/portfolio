import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MapPin, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ContactSection from '../components/ContactSection.jsx';
import { personalData } from '../data/personalData.js';

const GithubIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function ContactPage() {
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
            <span className="text-[#C7A052] font-semibold">Contact</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A052]/40 bg-[#FAF7F2] dark:bg-[#191C22] text-xs font-mono text-[#252522] dark:text-[#E6E4DE] mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C7A052] shrink-0" />
              <span className="font-semibold uppercase tracking-wider">Communication Channel</span>
              <span className="text-[#252522]/30 dark:text-white/30">&bull;</span>
              <span>Direct Inquiries</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] tracking-tight leading-[1.15]">
              Get in <span className="italic font-normal text-[#C7A052]">Touch</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg font-sans text-[#252522]/80 dark:text-[#E6E4DE]/80 mt-3 sm:mt-4 leading-relaxed">
              Have an engineering opportunity, technical inquiry, or collaboration in mind? Reach out directly via the message portal or verified professional channels.
            </p>
          </div>

          {/* Verified Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">
            {/* Email Card */}
            <a
              href={`mailto:${personalData.email}`}
              className="p-5 rounded-2xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 hover:border-[#C7A052] transition-all shadow-editorial group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#C7A052]/10 border border-[#C7A052]/30 flex items-center justify-center text-[#C7A052] mb-3 group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#252522]/50 dark:text-white/40 block mb-1">
                Direct Email
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-[#252522] dark:text-[#FAF7F2] break-all group-hover:text-[#C7A052] transition-colors">
                {personalData.email}
              </span>
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 shadow-editorial">
              <div className="w-9 h-9 rounded-xl bg-[#C7A052]/10 border border-[#C7A052]/30 flex items-center justify-center text-[#C7A052] mb-3">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#252522]/50 dark:text-white/40 block mb-1">
                Geographic Base
              </span>
              <span className="text-xs sm:text-sm font-serif font-bold text-[#252522] dark:text-[#FAF7F2] block">
                {personalData.location}
              </span>
              <span className="text-[11px] font-sans text-[#252522]/60 dark:text-[#E6E4DE]/60">
                Rajasthan, India
              </span>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 hover:border-[#C7A052] transition-all shadow-editorial group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#C7A052]/10 border border-[#C7A052]/30 flex items-center justify-center text-[#C7A052] mb-3 group-hover:scale-105 transition-transform">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#252522]/50 dark:text-white/40 block mb-1">
                Professional Profile
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-[#252522] dark:text-[#FAF7F2] block group-hover:text-[#C7A052] transition-colors">
                LinkedIn
              </span>
              <span className="text-[11px] font-sans text-[#252522]/60 dark:text-[#E6E4DE]/60">
                in/madhav-garg-agra
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={personalData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 hover:border-[#C7A052] transition-all shadow-editorial group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#C7A052]/10 border border-[#C7A052]/30 flex items-center justify-center text-[#C7A052] mb-3 group-hover:scale-105 transition-transform">
                <GithubIcon className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#252522]/50 dark:text-white/40 block mb-1">
                Public Repositories
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-[#252522] dark:text-[#FAF7F2] block group-hover:text-[#C7A052] transition-colors">
                GitHub
              </span>
              <span className="text-[11px] font-sans text-[#252522]/60 dark:text-[#E6E4DE]/60">
                github.com/madhavgargagra
              </span>
            </a>

          </div>
        </section>

        {/* Contact Form & Real-time Validation Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
