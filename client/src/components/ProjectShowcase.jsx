import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Layers, 
  ChevronRight, 
  ChevronLeft, 
  ShieldAlert, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { projectsData } from '../data/projectsData.js';
import CharacterVisual from './CharacterVisual.jsx';

const GithubIcon = ({ className = 'w-3.5 h-3.5' }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function ProjectShowcase() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeFrameIndex, setActiveFrameIndex] = useState(0); // 0: Left, 1: Front, 2: Right
  const currentProject = projectsData[activeProjectIndex];
  const containerRef = useRef(null);

  // Switch to next/previous frame
  const handleNextFrame = () => {
    if (activeFrameIndex < 2) {
      setActiveFrameIndex((prev) => prev + 1);
    } else if (activeProjectIndex < projectsData.length - 1) {
      // Transition directly to next project's left profile (frame 0), avoiding back view
      setActiveProjectIndex((prev) => prev + 1);
      setActiveFrameIndex(0);
    } else {
      // Loop to beginning
      setActiveProjectIndex(0);
      setActiveFrameIndex(0);
    }
  };

  const handlePrevFrame = () => {
    if (activeFrameIndex > 0) {
      setActiveFrameIndex((prev) => prev - 1);
    } else if (activeProjectIndex > 0) {
      setActiveProjectIndex((prev) => prev - 1);
      setActiveFrameIndex(2);
    }
  };

  // Keyboard navigation support for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only when container is in viewport
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (e.key === 'ArrowRight') {
          handleNextFrame();
        } else if (e.key === 'ArrowLeft') {
          handlePrevFrame();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProjectIndex, activeFrameIndex]);

  return (
    <section 
      id="showcase" 
      ref={containerRef}
      className="relative py-24 px-6 sm:px-8 border-t border-[#252522]/10 transition-colors duration-700 bg-editorial-grain"
      style={{
        backgroundColor: currentProject.colorPalette.surface,
      }}
    >
      {/* Subtle background ambient glow linked to character palette */}
      <div 
        className="pointer-events-none absolute top-1/4 left-1/4 w-[600px] h-[600px] blur-[150px] rounded-full transition-colors duration-700 opacity-20"
        style={{ backgroundColor: currentProject.colorPalette.primary }}
      />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#252522]/15 bg-[#FAF7F2] text-xs font-mono text-[#252522] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C7A052]" />
              <span>Phase 02 &bull; Cinematic Project Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#252522]">
              Superhelden &bull; <span className="italic font-normal text-[#C7A052]">The Archetypes</span>
            </h2>
            <p className="text-sm font-sans text-[#252522]/70 max-w-lg mt-2">
              Four conceptual systems framed within bespoke character color palettes, moving through left-profile, front, and right-profile architectural stages.
            </p>
          </div>

          {/* Project Theme Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {projectsData.map((p, idx) => {
              const isActive = idx === activeProjectIndex;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setActiveProjectIndex(idx);
                    setActiveFrameIndex(0); // Always start on Left view of new character
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-2 border ${
                    isActive 
                      ? 'border-[#252522] bg-[#252522] text-[#F5F0E7] shadow-sm'
                      : 'border-[#252522]/15 bg-[#FAF7F2] text-[#252522]/70 hover:border-[#C7A052]'
                  }`}
                >
                  <span 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: p.colorPalette.primary }}
                  />
                  <span>0{idx + 1} {p.themeKey.toUpperCase()}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Split-Screen & Mobile Stack Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Persistent Character Visual (Span 5 on Desktop, Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 z-20 flex flex-col items-center">
            <CharacterVisual 
              project={currentProject} 
              activeFrameIndex={activeFrameIndex}
              className="w-full"
            />

            {/* Frame Transition Controls */}
            <div className="w-full max-w-[380px] mt-4 flex items-center justify-between p-2 rounded-xl bg-[#FAF7F2] border border-[#252522]/10 shadow-sm">
              <button
                onClick={handlePrevFrame}
                disabled={activeProjectIndex === 0 && activeFrameIndex === 0}
                aria-label="Previous Perspective View"
                className="p-2 rounded-lg text-[#252522] hover:bg-[#F5F0E7] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* 3 Perspective Selector Buttons */}
              <div className="flex items-center gap-1.5 text-xs font-mono">
                {currentProject.frames.map((frame, fIdx) => (
                  <button
                    key={frame.perspective}
                    onClick={() => setActiveFrameIndex(fIdx)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all ${
                      activeFrameIndex === fIdx 
                        ? 'bg-[#252522] text-[#F5F0E7] font-semibold' 
                        : 'text-[#252522]/60 hover:text-[#252522] hover:bg-[#F5F0E7]'
                    }`}
                  >
                    {frame.perspective.toUpperCase()}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNextFrame}
                aria-label="Next Perspective View"
                className="p-2 rounded-lg text-[#252522] hover:bg-[#F5F0E7] transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[11px] font-mono text-[#252522]/50 mt-2 text-center">
              Use arrows or click perspective pills to cycle views
            </p>
          </div>

          {/* RIGHT: Synchronized Project Information (Span 7 on Desktop) */}
          <div className="lg:col-span-7 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentProject.id}-${activeFrameIndex}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-10 rounded-2xl bg-[#FAF7F2] border border-[#252522]/12 shadow-editorial flex flex-col gap-6"
              >
                {/* Project Header Info */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span 
                      className="px-2.5 py-1 rounded text-xs font-mono font-medium border"
                      style={{
                        borderColor: currentProject.colorPalette.border,
                        color: currentProject.colorPalette.primary,
                        backgroundColor: currentProject.colorPalette.badgeBg,
                      }}
                    >
                      {currentProject.inspiration}
                    </span>
                    <span className="text-xs font-mono text-[#252522]/60">
                      Project 0{activeProjectIndex + 1} of 04
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#252522] tracking-tight leading-tight">
                    {currentProject.title}
                  </h3>
                  <p className="text-sm font-sans font-medium text-[#C7A052] mt-1">
                    {currentProject.tagline}
                  </p>
                </div>

                {/* Perspective Frame Banner */}
                <div 
                  className="p-5 rounded-xl border transition-all"
                  style={{
                    backgroundColor: currentProject.colorPalette.surface,
                    borderColor: currentProject.colorPalette.border,
                  }}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="font-bold text-[#252522] uppercase tracking-wider">
                      {currentProject.frames[activeFrameIndex].perspectiveTitle}
                    </span>
                    <span 
                      className="px-2 py-0.5 rounded text-[11px] font-semibold"
                      style={{
                        backgroundColor: currentProject.colorPalette.badgeBg,
                        color: currentProject.colorPalette.primary,
                      }}
                    >
                      {currentProject.frames[activeFrameIndex].metric}
                    </span>
                  </div>
                  <p className="text-xs font-sans text-[#252522]/80 leading-relaxed">
                    {currentProject.frames[activeFrameIndex].details}
                  </p>
                </div>

                {/* Summary & Narrative */}
                <div className="space-y-3 text-sm font-sans text-[#252522]/80 leading-relaxed border-t border-[#252522]/10 pt-5">
                  <p className="font-medium text-[#252522]">
                    {currentProject.summary}
                  </p>
                  <p className="text-xs sm:text-sm text-[#252522]/70 leading-relaxed">
                    {currentProject.longDescription}
                  </p>
                </div>

                {/* Technology Badges */}
                <div className="border-t border-[#252522]/10 pt-5">
                  <span className="block text-xs font-mono uppercase tracking-wider text-[#252522]/60 mb-2.5">
                    Architectural Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md text-xs font-mono bg-[#F5F0E7] border border-[#252522]/10 text-[#252522] hover:border-[#C7A052] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links (Explicitly Marked Uninvented / Staging placeholders) */}
                <div className="border-t border-[#252522]/10 pt-5 flex flex-wrap items-center gap-3">
                  {/* GitHub Link */}
                  {currentProject.links.github.isAvailable ? (
                    <a
                      href={currentProject.links.github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#252522] text-[#F5F0E7] text-xs font-mono font-medium hover:bg-[#C7A052] transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>{currentProject.links.github.label}</span>
                    </a>
                  ) : (
                    <div 
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#F5F0E7] border border-[#252522]/15 text-xs font-mono text-[#252522]/60 cursor-not-allowed select-none"
                      title="Placeholder link: Real GitHub repository will be linked in submission"
                    >
                      <GithubIcon className="w-3.5 h-3.5 opacity-60" />
                      <span>{currentProject.links.github.label}</span>
                    </div>
                  )}

                  {/* Live Demo Link */}
                  {currentProject.links.liveDemo.isAvailable ? (
                    <a
                      href={currentProject.links.liveDemo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#C7A052] bg-white text-[#252522] text-xs font-mono font-medium hover:bg-[#C7A052] hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{currentProject.links.liveDemo.label}</span>
                    </a>
                  ) : (
                    <div 
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#F5F0E7] border border-[#252522]/15 text-xs font-mono text-[#252522]/60 cursor-not-allowed select-none"
                      title="Placeholder link: Live deployment URL will be configured upon hosting"
                    >
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                      <span>{currentProject.links.liveDemo.label}</span>
                    </div>
                  )}

                  {/* Quick Advance Button */}
                  <button
                    onClick={handleNextFrame}
                    className="ml-auto inline-flex items-center gap-1.5 text-xs font-mono text-[#C7A052] hover:text-[#252522] transition-colors"
                  >
                    <span>Next View</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
