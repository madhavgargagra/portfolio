import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Layers, 
  Sparkles,
  ArrowRight,
  MousePointerClick
} from 'lucide-react';
import { projectsData } from '../data/projectsData.js';
import CharacterVisual from './CharacterVisual.jsx';

const GithubIcon = ({ className = 'w-3.5 h-3.5' }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function ProjectShowcase() {
  const containerRef = useRef(null);

  // States driven primarily by scroll
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeFrameIndex, setActiveFrameIndex] = useState(0); // 0: Left, 1: Front, 2: Right
  const [scrollPercent, setScrollPercent] = useState(0);

  // Framer Motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Calculate active character and perspective continuously from scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      // Clamp between 0 and 0.9999
      const progress = Math.min(0.9999, Math.max(0, latest));
      setScrollPercent(Math.round(progress * 100));

      // 4 projects across the scroll span
      const totalProjects = projectsData.length;
      const rawProjectIndex = progress * totalProjects;
      const projIdx = Math.min(totalProjects - 1, Math.floor(rawProjectIndex));

      // Within each project, 3 perspective stages:
      // 0.0 - 0.33 -> Left Profile
      // 0.33 - 0.66 -> Front-Facing
      // 0.66 - 1.00 -> Right Profile
      const subProgress = rawProjectIndex - projIdx;
      let frameIdx = 0;
      if (subProgress < 0.33) {
        frameIdx = 0; // Left
      } else if (subProgress < 0.66) {
        frameIdx = 1; // Front
      } else {
        frameIdx = 2; // Right
      }

      setActiveProjectIndex(projIdx);
      setActiveFrameIndex(frameIdx);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const currentProject = projectsData[activeProjectIndex];
  const currentFrame = currentProject.frames[activeFrameIndex];

  // Optional manual jump for accessibility
  const jumpToProject = (projIdx, frameIdx = 0) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const totalHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetProgress = (projIdx + frameIdx / 3) / projectsData.length;
    window.scrollTo({
      top: containerTop + targetProgress * totalHeight + 10,
      behavior: 'smooth',
    });
  };

  return (
    <section 
      id="showcase" 
      ref={containerRef}
      // Generous scroll track height giving ample room for 4 characters × 3 views
      className="relative h-[480vh] w-full"
    >
      {/* Pinned Sticky Viewport: Remains locked to the screen while scrolling */}
      <div 
        className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden transition-colors duration-700 bg-editorial-grain py-16 px-6 sm:px-8"
        style={{
          backgroundColor: currentProject.colorPalette.bgWash,
        }}
      >
        {/* Full-Page Character Atmospheric Glow */}
        <div 
          className="pointer-events-none absolute inset-0 transition-colors duration-700 opacity-40 blur-[140px]"
          style={{
            background: `radial-gradient(circle at 30% 50%, ${currentProject.colorPalette.primaryLight} 0%, transparent 65%)`
          }}
        />

        {/* Top Floating Showcase Bar */}
        <div className="max-w-7xl mx-auto w-full z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#252522]/15 bg-[#FAF7F2]/90 text-xs font-mono text-[#252522]">
              <Sparkles className="w-3.5 h-3.5" style={{ color: currentProject.colorPalette.accent }} />
              <span>Scroll-Driven Cinematic Showcase</span>
              <span className="text-[#252522]/40">&bull;</span>
              <span className="text-[11px] font-bold" style={{ color: currentProject.colorPalette.primary }}>
                SCROLL TO ROTATE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#252522] mt-1 tracking-tight">
              0{activeProjectIndex + 1} &bull; {currentProject.characterName} <span className="italic font-normal text-[#C7A052]">Theme</span>
            </h2>
          </div>

          {/* Character Quick Jump Navigation (Accessibility Enhancement) */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1">
            {projectsData.map((p, idx) => {
              const isActive = idx === activeProjectIndex;
              return (
                <button
                  key={p.id}
                  onClick={() => jumpToProject(idx, 0)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 border ${
                    isActive 
                      ? 'border-[#252522] bg-[#252522] text-[#F5F0E7] shadow-sm'
                      : 'border-[#252522]/15 bg-[#FAF7F2]/80 text-[#252522]/70 hover:border-[#C7A052]'
                  }`}
                  title={`Jump to ${p.characterName}`}
                >
                  <span 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: p.colorPalette.primary }}
                  />
                  <span>0{idx + 1} {p.characterName.toUpperCase()}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Pinned Split-Screen: LEFT Character, RIGHT Project Content */}
        <div className="max-w-7xl mx-auto w-full z-20 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Substantial Waist-Up Character Presence (Span 5 on Desktop) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <CharacterVisual 
              project={currentProject} 
              activeFrameIndex={activeFrameIndex}
              className="w-full"
            />
          </div>

          {/* RIGHT: Synchronized Project Details (Span 7 on Desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentProject.id}-${activeFrameIndex}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-10 rounded-3xl border shadow-editorial flex flex-col gap-5 backdrop-blur-sm transition-colors duration-500"
                style={{
                  backgroundColor: currentProject.colorPalette.surface,
                  borderColor: currentProject.colorPalette.border,
                }}
              >
                {/* Theme & Perspective Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium border"
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

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#252522] tracking-tight leading-tight">
                    {currentProject.title}
                  </h3>
                  <p className="text-sm font-sans font-medium text-[#C7A052] mt-1">
                    {currentProject.subtitle}
                  </p>
                </div>

                {/* Synchronized Perspective Frame Banner */}
                <div 
                  className="p-4 sm:p-5 rounded-2xl border transition-all"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    borderColor: currentProject.colorPalette.border,
                  }}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="font-bold text-[#252522] uppercase tracking-wider">
                      {currentFrame.perspectiveTitle}
                    </span>
                    <span 
                      className="px-2.5 py-0.5 rounded text-[11px] font-semibold"
                      style={{
                        backgroundColor: currentProject.colorPalette.badgeBg,
                        color: currentProject.colorPalette.primary,
                      }}
                    >
                      {currentFrame.metric}
                    </span>
                  </div>
                  <p className="text-xs font-sans text-[#252522]/80 leading-relaxed">
                    {currentFrame.details}
                  </p>
                </div>

                {/* Summary & Narrative */}
                <div className="text-xs sm:text-sm font-sans text-[#252522]/80 leading-relaxed space-y-2 border-t border-[#252522]/10 pt-4">
                  <p className="font-medium text-[#252522]">
                    {currentProject.summary}
                  </p>
                  <p className="text-xs text-[#252522]/70 leading-relaxed hidden sm:block">
                    {currentProject.longDescription}
                  </p>
                </div>

                {/* Technology Badges */}
                <div className="border-t border-[#252522]/10 pt-4">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-[#252522]/60 mb-2">
                    Architectural Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#FAF7F2] border border-[#252522]/10 text-[#252522]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links (Clearly Marked Placeholder / Staging status) */}
                <div className="border-t border-[#252522]/10 pt-4 flex flex-wrap items-center gap-3">
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
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#FAF7F2] border border-[#252522]/15 text-xs font-mono text-[#252522]/60 cursor-not-allowed select-none"
                      title="Placeholder link: Real GitHub repository will be configured for final submission"
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
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#FAF7F2] border border-[#252522]/15 text-xs font-mono text-[#252522]/60 cursor-not-allowed select-none"
                      title="Placeholder link: Live deployment URL configured in subsequent step"
                    >
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                      <span>{currentProject.links.liveDemo.label}</span>
                    </div>
                  )}

                  {/* Scroll Progression Indicator */}
                  <div className="ml-auto text-xs font-mono text-[#252522]/50 flex items-center gap-1.5">
                    <span>Scroll to advance</span>
                    <span className="font-bold text-[#252522]">{scrollPercent}%</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Scroll Progress Rail */}
        <div className="max-w-7xl mx-auto w-full z-20 pt-2 flex items-center justify-between text-xs font-mono text-[#252522]/60">
          <div className="flex items-center gap-2">
            <span className="animate-pulse">&bull;</span>
            <span>Scrolling controls rotation: Left &rarr; Front &rarr; Right &rarr; Next Character</span>
          </div>

          <div className="w-48 sm:w-64 h-1.5 bg-[#252522]/10 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-150"
              style={{
                width: `${scrollPercent}%`,
                backgroundColor: currentProject.colorPalette.primary,
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
