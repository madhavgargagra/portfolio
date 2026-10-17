import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileDown, Sparkles, Code2, Layers, Cpu, Compass } from 'lucide-react';

export default function HeroSection() {
  const handleCvDownload = () => {
    // Connects to Express resume download route served from server/public/resumes/
    window.open('http://localhost:5000/public/resumes/madhav-garg-resume.pdf', '_blank');
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-[#F5F0E7] dark:bg-[#111317] bg-editorial-grain transition-colors duration-500"
    >
      {/* Editorial Decorative Background Elements */}
      <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C7A052]/10 dark:bg-[#C7A052]/5 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[350px] bg-[#D9CBB7]/40 dark:bg-slate-800/10 blur-[100px] rounded-full" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full my-auto z-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Editorial Introduction (Span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Editorial Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A052]/40 bg-[#FAF7F2] dark:bg-[#191C22] text-xs font-mono text-[#252522] dark:text-[#E6E4DE] mb-6 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C7A052]" />
              <span className="tracking-wide">Creative Frontend Engineer &bull; Full-Stack MERN</span>
            </motion.div>

            {/* Prominent Name */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] tracking-tight leading-[1.05] mb-6"
            >
              Madhav <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#C7A052]">Garg</span>.
            </motion.h1>

            {/* Subheading / Developer Narrative */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl font-sans text-[#252522]/80 dark:text-[#E6E4DE]/80 max-w-xl leading-relaxed mb-8"
            >
              Building scalable full-stack web applications and high-performance interactive architectures. Grounded in computational rigour, clean API contracts, and polished editorial user experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <a 
                href="#showcase"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#252522] dark:bg-white text-[#F5F0E7] dark:text-[#111317] text-sm font-sans font-medium hover:bg-[#C7A052] dark:hover:bg-[#C7A052] dark:hover:text-white transition-colors shadow-md w-full sm:w-auto"
              >
                <span>Explore Projects</span>
                <Compass className="w-4 h-4 text-[#C7A052] group-hover:text-white" />
              </a>

              {/* Secondary CV Download CTA */}
              <button
                onClick={handleCvDownload}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#252522]/20 dark:border-white/20 bg-[#FAF7F2] dark:bg-[#191C22] text-sm font-sans font-medium text-[#252522] dark:text-[#E6E4DE] hover:border-[#C7A052] hover:bg-white dark:hover:bg-[#121316] transition-all w-full sm:w-auto"
                title="Served via Express backend routes: server/public/resumes/madhav-garg-resume.pdf"
              >
                <FileDown className="w-4 h-4 text-[#C7A052]" />
                <span>Download Resume (PDF)</span>
              </button>
            </motion.div>

            {/* Micro Details */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 pt-6 border-t border-[#252522]/10 dark:border-white/10 flex flex-wrap gap-6 text-xs font-mono text-[#252522]/60 dark:text-[#E6E4DE]/50"
            >
              <span>Origin: JKLU, Jaipur</span>
              <span>Degree: B.Tech CSE (Semester 5)</span>
              <span>Focus: Full-Stack MERN</span>
            </motion.div>
          </div>

          {/* Right Column: Editorial Typographic & Geometric Artpiece (Span 5) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl p-8 border border-[#252522]/15 dark:border-white/10 bg-[#FAF7F2]/90 dark:bg-[#191C22]/90 backdrop-blur-sm shadow-editorial flex flex-col justify-between">
              
              {/* Monogram & Coordinates */}
              <div className="flex items-center justify-between text-xs font-mono text-[#252522]/60 dark:text-white/40">
                <span className="tracking-widest uppercase">Folio 2026 &bull; Vol. I</span>
                <span>26.9124&deg; N, 75.7873&deg; E</span>
              </div>

              {/* Center Typographic Motif */}
              <div className="my-auto py-8 text-center flex flex-col items-center">
                <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-[#C7A052]/40 animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-2 rounded-full border border-dashed border-[#252522]/20 dark:border-white/20" />
                  <span className="font-serif text-5xl font-bold text-[#252522] dark:text-[#FAF7F2]">M</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#252522] dark:text-[#FAF7F2] tracking-tight">
                  Architectural Rigour
                </h3>
                <p className="font-sans text-xs text-[#252522]/70 dark:text-[#E6E4DE]/60 max-w-xs mt-2 leading-relaxed">
                  Clean separation of concerns: Express REST services, MongoDB persistence, and responsive React interfaces.
                </p>
              </div>

              {/* Quick Tech Badges */}
              <div className="pt-4 border-t border-[#252522]/10 dark:border-white/10 grid grid-cols-3 gap-2 text-center text-[11px] font-mono text-[#252522]/80 dark:text-[#E6E4DE]/80">
                <div className="p-2 rounded bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/5 dark:border-white/5">React 19</div>
                <div className="p-2 rounded bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/5 dark:border-white/5">Express REST</div>
                <div className="p-2 rounded bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/5 dark:border-white/5">MongoDB</div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Cue */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-7xl mx-auto px-6 sm:px-8 w-full z-10 text-center flex flex-col items-center gap-2 pt-4"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#252522]/60 dark:text-[#E6E4DE]/50">
          Scroll to Explore Project Showcase
        </span>
        <a 
          href="#showcase" 
          aria-label="Scroll to Projects"
          className="p-2 rounded-full text-[#C7A052] hover:bg-[#FAF7F2] dark:hover:bg-[#191C22] transition-colors animate-bounce"
        >
          <ArrowDown className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
