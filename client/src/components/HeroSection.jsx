import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileDown, Sparkles, Compass, GraduationCap, Award, MapPin } from 'lucide-react';
import { API_ENDPOINTS } from '../config/api.js';
import { personalData } from '../data/personalData.js';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16 flex flex-col justify-between overflow-hidden bg-[#F5F0E7] dark:bg-[#111317] bg-editorial-grain transition-colors duration-500"
    >
      {/* Editorial Decorative Background Elements */}
      <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] lg:w-[800px] h-[300px] sm:h-[400px] bg-[#C7A052]/10 dark:bg-[#C7A052]/5 blur-[100px] sm:blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[260px] sm:w-[450px] lg:w-[500px] h-[260px] sm:h-[350px] bg-[#D9CBB7]/40 dark:bg-slate-800/10 blur-[90px] sm:blur-[100px] rounded-full" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full my-auto z-10 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Text & Editorial Introduction (Span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Editorial Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-[#C7A052]/40 bg-[#FAF7F2] dark:bg-[#191C22] text-[11px] sm:text-xs font-mono text-[#252522] dark:text-[#E6E4DE] mb-5 sm:mb-6 shadow-xs max-w-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C7A052] shrink-0" />
              <span className="tracking-wide truncate">
                {personalData.headline}
              </span>
            </motion.div>

            {/* Prominent Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] tracking-tight leading-[1.08] mb-5 sm:mb-6"
            >
              Madhav <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#C7A052]">Garg</span>.
            </motion.h1>

            {/* Subheading / Developer Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl font-sans text-[#252522]/80 dark:text-[#E6E4DE]/80 max-w-xl leading-relaxed mb-6 sm:mb-8"
            >
              {personalData.introCopy}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 min-h-[44px] rounded-full bg-[#252522] dark:bg-white text-[#F5F0E7] dark:text-[#111317] text-sm font-sans font-medium hover:bg-[#C7A052] dark:hover:bg-[#C7A052] dark:hover:text-white transition-colors shadow-sm w-full sm:w-auto"
              >
                <span>Explore Projects</span>
                <Compass className="w-4 h-4 text-[#C7A052] group-hover:text-white" />
              </Link>

              {/* Dual CV Download CTAs (PDF & DOCX, both min-44px touch targets) */}
              <div className="inline-flex items-center justify-center rounded-full border border-[#252522]/20 dark:border-white/20 bg-[#FAF7F2] dark:bg-[#191C22] p-1 shadow-xs w-full sm:w-auto">
                <a
                  href={API_ENDPOINTS.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full text-xs font-mono font-medium text-[#252522] dark:text-[#E6E4DE] hover:text-[#C7A052] hover:bg-white dark:hover:bg-[#121316] transition-all flex-1 sm:flex-initial cursor-pointer"
                  title="Download Resume in PDF format"
                  aria-label="Download Resume in PDF format"
                >
                  <FileDown className="w-3.5 h-3.5 text-[#C7A052] shrink-0" />
                  <span>Resume (PDF)</span>
                </a>
                <span className="text-[#252522]/25 dark:text-white/20 select-none px-1">|</span>
                <a
                  href={API_ENDPOINTS.resumeDocx}
                  download="Madhav-Garg-Resume.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-full text-xs font-mono text-[#252522]/75 dark:text-[#E6E4DE]/75 hover:text-[#C7A052] hover:bg-white dark:hover:bg-[#121316] transition-all cursor-pointer"
                  title="Download Resume in Word DOCX format"
                  aria-label="Download Resume in Word DOCX format"
                >
                  <span>DOCX</span>
                </a>
              </div>
            </motion.div>

            {/* Verified Academic & Location Details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-[#252522]/10 dark:border-white/10 flex flex-wrap gap-4 sm:gap-6 text-xs font-mono text-[#252522]/70 dark:text-[#E6E4DE]/70 w-full"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C7A052]" />
                {personalData.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#C7A052]" />
                B.Tech CSE &bull; Class of {personalData.expectedGraduation}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#C7A052]" />
                CGPA: {personalData.cgpa} / 10.0
              </span>
            </motion.div>
          </div>

          {/* Right Column: Editorial Typographic & Geometric Artpiece (Span 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative w-full max-w-sm sm:max-w-[400px] aspect-[4/5] rounded-3xl p-6 sm:p-8 border border-[#252522]/15 dark:border-white/10 bg-[#FAF7F2]/90 dark:bg-[#191C22]/90 backdrop-blur-sm shadow-editorial flex flex-col justify-between">

              {/* Monogram & Coordinates */}
              <div className="flex items-center justify-between text-xs font-mono text-[#252522]/60 dark:text-white/40">
                <span className="tracking-widest uppercase">Folio 2026 &bull; Vol. I</span>
                <span>26.9124&deg; N, 75.7873&deg; E</span>
              </div>

              {/* Center Typographic Motif */}
              <div className="my-auto py-6 text-center flex flex-col items-center">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-5 flex items-center justify-center p-2 rounded-2xl bg-[#15171C] border border-[#C7A052]/30 shadow-editorial">
                  <div className="absolute -inset-2 rounded-3xl border border-[#C7A052]/40 animate-[spin_20s_linear_infinite]" />
                  <img
                    src="/logo.png"
                    alt="Madhav Garg Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#252522] dark:text-[#FAF7F2] tracking-tight">
                  Software &amp; Systems Engineering
                </h3>
                <p className="font-sans text-xs text-[#252522]/70 dark:text-[#E6E4DE]/60 max-w-xs mt-2 leading-relaxed">
                  Grounded in computational rigour, verified REST and ML pipelines, and responsive client architectures.
                </p>
              </div>

              {/* Quick Tech Badges */}
              <div className="pt-4 border-t border-[#252522]/10 dark:border-white/10 grid grid-cols-3 gap-2 text-center text-[10px] sm:text-[11px] font-mono text-[#252522]/80 dark:text-[#E6E4DE]/80">
                <span className="p-2 rounded-xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/5 truncate">React &bull; MERN</span>
                <span className="p-2 rounded-xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/5 truncate">FastAPI &bull; Python</span>
                <span className="p-2 rounded-xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/5 truncate">ML &bull; GIS Tools</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
