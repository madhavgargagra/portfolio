import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Layers, 
  Sparkles,
  Activity,
  ShieldCheck,
  Code2,
  ShoppingBag,
  FolderGit2,
  Terminal,
  Filter
} from 'lucide-react';
import { projectsData } from '../data/projectsData.js';

// Dedicated Accessible GitHub SVG Icon
const GithubIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

// Map visual icon types
const renderVisualIcon = (iconName, className) => {
  switch (iconName) {
    case 'Activity': return <Activity className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Code2': return <Code2 className={className} />;
    case 'ShoppingBag': return <ShoppingBag className={className} />;
    default: return <Terminal className={className} />;
  }
};

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Distributed Systems', 'Cybersecurity', 'Developer Tools', 'Full-Stack Web'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section 
      id="showcase" 
      className="relative py-28 px-6 sm:px-8 border-t border-[#252522]/10 dark:border-white/10 bg-[#F5F0E7] dark:bg-[#111317] bg-editorial-grain transition-colors duration-500"
    >
      {/* Subtle Ambient Atmosphere */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-[#C7A052]/10 dark:bg-[#C7A052]/5 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/4 w-[500px] h-[400px] bg-[#D9CBB7]/20 dark:bg-slate-800/10 blur-[130px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A052]/40 bg-[#FAF7F2] dark:bg-[#191C22] text-xs font-mono text-[#252522] dark:text-[#E6E4DE] mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C7A052]" />
              <span className="font-semibold uppercase tracking-wider">Engineering Portfolio</span>
              <span className="text-[#252522]/30 dark:text-white/30">&bull;</span>
              <span>Selected Works</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] tracking-tight">
              Featured <span className="italic font-normal text-[#C7A052]">Projects</span>
            </h2>
            
            <p className="text-base sm:text-lg font-sans text-[#252522]/75 dark:text-[#E6E4DE]/75 mt-3 leading-relaxed">
              Production-ready web applications, distributed event pipelines, and zero-trust security architectures built on the modern MERN stack.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap border ${
                  activeCategory === cat
                    ? 'border-[#252522] dark:border-white bg-[#252522] dark:bg-white text-[#F5F0E7] dark:text-[#111317] font-semibold shadow-sm'
                    : 'border-[#252522]/15 dark:border-white/10 bg-[#FAF7F2] dark:bg-[#191C22] text-[#252522]/70 dark:text-[#E6E4DE]/70 hover:border-[#C7A052]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl p-8 sm:p-10 border border-[#252522]/12 dark:border-white/10 bg-[#FAF7F2] dark:bg-[#191C22] shadow-editorial hover:shadow-editorial-hover transition-all duration-400 flex flex-col justify-between"
              >
                <div>
                  {/* Top Meta Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10 text-[#C7A052]">
                        {renderVisualIcon(project.visual.iconName, 'w-5 h-5')}
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${project.visual.badgeClass}`}>
                        {project.category}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-[#252522]/40 dark:text-white/40">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] group-hover:text-[#C7A052] transition-colors leading-tight mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm font-sans font-medium text-[#C7A052] mb-4">
                    {project.subtitle}
                  </p>

                  {/* Summary / Description */}
                  <p className="text-sm font-sans text-[#252522]/80 dark:text-[#E6E4DE]/80 leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Technical Key Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 p-3.5 rounded-2xl bg-[#F5F0E7]/80 dark:bg-[#121316]/80 border border-[#252522]/8 dark:border-white/5 mb-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <span className="block text-[10px] font-mono text-[#252522]/50 dark:text-white/40 uppercase tracking-wider mb-0.5">
                          {metric.label}
                        </span>
                        <span className="font-mono text-xs font-bold text-[#252522] dark:text-[#FAF7F2]">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="mb-8">
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-[#252522]/60 dark:text-white/40 mb-2">
                      Core Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10 text-[#252522] dark:text-[#E6E4DE]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions: GitHub & Live Demo Links */}
                <div className="pt-6 border-t border-[#252522]/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* GitHub Link */}
                    {project.links.github.isAvailable ? (
                      <a
                        href={project.links.github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#252522] dark:bg-white text-[#F5F0E7] dark:text-[#111317] text-xs font-mono font-medium hover:bg-[#C7A052] dark:hover:bg-[#C7A052] dark:hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Repository</span>
                      </a>
                    ) : (
                      <div 
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/15 dark:border-white/10 text-xs font-mono text-[#252522]/50 dark:text-white/40 cursor-not-allowed select-none"
                        title="Repository link: Real GitHub repository will be configured for final submission"
                      >
                        <GithubIcon className="w-3.5 h-3.5 opacity-60" />
                        <span>Source [Staging]</span>
                      </div>
                    )}

                    {/* Live Demo Link */}
                    {project.links.liveDemo.isAvailable ? (
                      <a
                        href={project.links.liveDemo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#C7A052] bg-white dark:bg-[#121316] text-[#252522] dark:text-white text-xs font-mono font-medium hover:bg-[#C7A052] hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <div 
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/15 dark:border-white/10 text-xs font-mono text-[#252522]/50 dark:text-white/40 cursor-not-allowed select-none"
                        title="Live Demo link: Live URL will be activated upon cloud deployment"
                      >
                        <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                        <span>Preview [Internal]</span>
                      </div>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-[#252522]/40 dark:text-white/40">
                    MERN Architecture
                  </span>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
