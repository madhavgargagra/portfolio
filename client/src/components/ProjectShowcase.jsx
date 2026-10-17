import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Sparkles,
  ArrowRight,
  Code2,
  Lock,
  Cpu,
  Layers,
  Activity
} from 'lucide-react';
import { projectsData } from '../data/projectsData.js';

// Dedicated Accessible GitHub SVG Icon
const GithubIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const getProjectIcon = (category) => {
  switch (category) {
    case 'Applied AI & Web':
      return <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-[#C7A052]" />;
    case 'Machine Learning':
      return <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-[#C7A052]" />;
    case 'Cybersecurity & Enterprise':
      return <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-[#C7A052]" />;
    default:
      return <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#C7A052]" />;
  }
};

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Applied AI & Web', 'Machine Learning', 'Cybersecurity & Enterprise', 'Full-Stack Systems'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section
      id="showcase"
      className="relative py-20 sm:py-28 px-4 sm:px-8 border-t border-[#252522]/10 dark:border-white/10 bg-[#F5F0E7] dark:bg-[#111317] bg-editorial-grain transition-colors duration-500 overflow-hidden"
    >
      {/* Subtle Ambient Atmosphere */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 w-[350px] sm:w-[600px] h-[300px] sm:h-[400px] bg-[#C7A052]/10 dark:bg-[#C7A052]/5 blur-[100px] sm:blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/4 w-[300px] sm:w-[500px] h-[250px] sm:h-[400px] bg-[#D9CBB7]/20 dark:bg-slate-800/10 blur-[90px] sm:blur-[130px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-[#C7A052]/40 bg-[#FAF7F2] dark:bg-[#191C22] text-xs font-mono text-[#252522] dark:text-[#E6E4DE] mb-3 sm:mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C7A052] shrink-0" />
              <span className="font-semibold uppercase tracking-wider">Project Portfolio</span>
              <span className="text-[#252522]/30 dark:text-white/30">&bull;</span>
              <span>Verified Engineering</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] tracking-tight">
              Featured <span className="italic font-normal text-[#C7A052]">Projects</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg font-sans text-[#252522]/75 dark:text-[#E6E4DE]/75 mt-2.5 sm:mt-3 leading-relaxed">
              Applied machine learning applications, browser-based AI classifiers, enterprise security analytics, and relational database systems.
            </p>
          </div>

          {/* Category Filter Pills (Min 44px touch targets) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`min-h-[44px] px-4 py-2 rounded-full text-xs font-mono transition-all whitespace-nowrap border flex items-center justify-center shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? 'border-[#252522] dark:border-white bg-[#252522] dark:bg-white text-[#F5F0E7] dark:text-[#111317] font-semibold shadow-xs'
                    : 'border-[#252522]/15 dark:border-white/10 bg-[#FAF7F2] dark:bg-[#191C22] text-[#252522]/70 dark:text-[#E6E4DE]/70 hover:border-[#C7A052]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#252522]/12 dark:border-white/10 bg-[#FAF7F2] dark:bg-[#191C22] shadow-editorial hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Meta Header */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10 text-[#C7A052]">
                        {getProjectIcon(project.category)}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-mono font-medium border border-[#C7A052]/30 bg-[#C7A052]/10 text-[#C7A052]">
                        {project.category}
                      </span>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#252522]/5 dark:bg-white/5 text-[#252522]/70 dark:text-[#E6E4DE]/70 border border-[#252522]/10 dark:border-white/10">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] group-hover:text-[#C7A052] transition-colors leading-tight mb-1.5 sm:mb-2">
                    <Link to={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm font-sans font-medium text-[#C7A052] mb-3 sm:mb-4">
                    {project.subtitle}
                  </p>

                  {/* Summary / Description */}
                  <p className="text-xs sm:text-sm font-sans text-[#252522]/80 dark:text-[#E6E4DE]/80 leading-relaxed mb-5 sm:mb-6">
                    {project.summary}
                  </p>

                  {/* Technical Key Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 p-3 sm:p-3.5 rounded-2xl bg-[#F5F0E7]/80 dark:bg-[#121316]/80 border border-[#252522]/8 dark:border-white/5 mb-5 sm:mb-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center overflow-hidden">
                        <span className="block text-[9px] sm:text-[10px] font-mono text-[#252522]/50 dark:text-white/40 uppercase tracking-wider mb-0.5 truncate">
                          {metric.label}
                        </span>
                        <span className="font-mono text-[11px] sm:text-xs font-bold text-[#252522] dark:text-[#FAF7F2] truncate block">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="mb-6 sm:mb-8">
                    <span className="block text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#252522]/60 dark:text-white/40 mb-2">
                      Core Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10 text-[#252522] dark:text-[#E6E4DE]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 rounded-md text-[10px] font-mono text-[#C7A052]">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions: View Details, GitHub & Live Demo Links */}
                <div className="pt-5 sm:pt-6 border-t border-[#252522]/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    {/* View Details Link */}
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-[#252522] dark:bg-white text-[#F5F0E7] dark:text-[#111317] text-xs font-mono font-medium hover:bg-[#C7A052] dark:hover:bg-[#C7A052] dark:hover:text-white transition-colors"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {/* GitHub Link (if public) */}
                    {project.links.github.isAvailable ? (
                      <a
                        href={project.links.github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] rounded-xl border border-[#252522]/20 dark:border-white/20 hover:border-[#C7A052] text-xs font-mono text-[#252522] dark:text-[#E6E4DE] transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-2 text-[11px] font-mono text-[#252522]/50 dark:text-white/40">
                        <Lock className="w-3 h-3 text-[#C7A052]" />
                        <span>{project.badge}</span>
                      </span>
                    )}

                    {/* Live Demo Link (if available) */}
                    {project.links.liveDemo.isAvailable && (
                      <a
                        href={project.links.liveDemo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] rounded-xl border border-[#C7A052]/60 hover:bg-[#C7A052] hover:text-white text-xs font-mono text-[#C7A052] transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-mono text-[#252522]/40 dark:text-white/40">
                    Verified
                  </span>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Explore All Projects Link Banner */}
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-full border border-[#C7A052] bg-[#FAF7F2] dark:bg-[#191C22] text-xs font-mono font-medium text-[#252522] dark:text-[#E6E4DE] hover:bg-[#C7A052] hover:text-white dark:hover:bg-[#C7A052] dark:hover:text-white transition-all shadow-xs"
          >
            <span>Explore Complete Projects Portfolio &amp; Future Work</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
