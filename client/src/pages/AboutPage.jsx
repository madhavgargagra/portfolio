import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Sparkles,
  MapPin,
  ArrowRight,
  BookOpen,
  Award,
  Calendar,
  Briefcase
} from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import AboutSection from '../components/AboutSection.jsx';
import TimelineSection from '../components/TimelineSection.jsx';
import { personalData } from '../data/personalData.js';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E7] dark:bg-[#111317] text-[#252522] dark:text-[#E6E4DE] selection:bg-[#C7A052]/20 selection:text-[#252522] dark:selection:text-white transition-colors duration-500 overflow-x-hidden">
      <Navbar />

      <main className="pt-28 sm:pt-36">
        {/* Editorial Page Header */}
        <section className="relative px-4 sm:px-8 pb-12 sm:pb-16 max-w-7xl mx-auto">
          {/* Subtle Ambient Atmosphere */}
          <div className="pointer-events-none absolute top-0 right-1/4 w-[320px] sm:w-[500px] h-[300px] bg-[#C7A052]/10 dark:bg-[#C7A052]/5 blur-[100px] rounded-full" />

          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#252522]/60 dark:text-[#E6E4DE]/60 mb-6">
            <Link to="/" className="hover:text-[#C7A052] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#C7A052] font-semibold">About</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A052]/40 bg-[#FAF7F2] dark:bg-[#191C22] text-xs font-mono text-[#252522] dark:text-[#E6E4DE] mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C7A052] shrink-0" />
              <span className="font-semibold uppercase tracking-wider">Candidate Profile</span>
              <span className="text-[#252522]/30 dark:text-white/30">&bull;</span>
              <span>About Madhav Garg</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] tracking-tight leading-[1.15]">
              Education, Experience &amp; <span className="italic font-normal text-[#C7A052]">Leadership</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl font-sans text-[#252522]/80 dark:text-[#E6E4DE]/80 mt-4 sm:mt-5 leading-relaxed">
              {personalData.introCopy}
            </p>
          </div>

          {/* Key Facts Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">
            <div className="p-5 rounded-2xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 shadow-editorial">
              <div className="w-9 h-9 rounded-xl bg-[#C7A052]/10 border border-[#C7A052]/30 flex items-center justify-center text-[#C7A052] mb-3">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#252522]/50 dark:text-white/40 block mb-1">
                Institution &amp; Degree
              </span>
              <h3 className="text-sm font-serif font-bold text-[#252522] dark:text-[#FAF7F2] leading-snug">
                B.Tech in CSE
              </h3>
              <p className="text-xs font-sans text-[#252522]/70 dark:text-[#E6E4DE]/70 mt-1">
                {personalData.university}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 shadow-editorial">
              <div className="w-9 h-9 rounded-xl bg-[#C7A052]/10 border border-[#C7A052]/30 flex items-center justify-center text-[#C7A052] mb-3">
                <Calendar className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#252522]/50 dark:text-white/40 block mb-1">
                Graduation Timeline
              </span>
              <h3 className="text-sm font-serif font-bold text-[#252522] dark:text-[#FAF7F2] leading-snug">
                Class of 2028
              </h3>
              <p className="text-xs font-sans text-[#252522]/70 dark:text-[#E6E4DE]/70 mt-1">
                Currently 3rd Year (Semester 5)
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 shadow-editorial">
              <div className="w-9 h-9 rounded-xl bg-[#C7A052]/10 border border-[#C7A052]/30 flex items-center justify-center text-[#C7A052] mb-3">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#252522]/50 dark:text-white/40 block mb-1">
                Academic Merit
              </span>
              <h3 className="text-sm font-serif font-bold text-[#252522] dark:text-[#FAF7F2] leading-snug">
                CGPA: {personalData.cgpa} / 10.0
              </h3>
              <p className="text-xs font-sans text-[#252522]/70 dark:text-[#E6E4DE]/70 mt-1">
                Consistent academic performance
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 shadow-editorial">
              <div className="w-9 h-9 rounded-xl bg-[#C7A052]/10 border border-[#C7A052]/30 flex items-center justify-center text-[#C7A052] mb-3">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#252522]/50 dark:text-white/40 block mb-1">
                Location &amp; Base
              </span>
              <h3 className="text-sm font-serif font-bold text-[#252522] dark:text-[#FAF7F2] leading-snug">
                {personalData.location}
              </h3>
              <p className="text-xs font-sans text-[#252522]/70 dark:text-[#E6E4DE]/70 mt-1">
                Rajasthan, India
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Competencies & Skills */}
        <AboutSection />

        {/* Chronological Timeline: Education, Internships & Leadership */}
        <TimelineSection />

        {/* Action Prompt */}
        <section className="py-16 sm:py-20 px-4 sm:px-8 border-t border-[#252522]/10 dark:border-white/10 bg-[#FAF7F2] dark:bg-[#191C22] text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] mb-3">
              Explore Verified Projects &amp; Credentials
            </h2>
            <p className="text-xs sm:text-sm font-sans text-[#252522]/70 dark:text-[#E6E4DE]/70 mb-6 leading-relaxed">
              Examine live case studies including EcoSort, ML cancer prediction models, and enterprise security analytics.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-full bg-[#252522] dark:bg-white text-[#F5F0E7] dark:text-[#111317] text-xs font-mono font-medium hover:bg-[#C7A052] dark:hover:bg-[#C7A052] dark:hover:text-white transition-colors shadow-xs"
              >
                <span>View Project Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/certifications"
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-full border border-[#252522]/20 dark:border-white/20 text-[#252522] dark:text-[#E6E4DE] text-xs font-mono font-medium hover:border-[#C7A052] hover:text-[#C7A052] transition-colors"
              >
                <span>View Certifications</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
