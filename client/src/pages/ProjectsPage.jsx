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
  Activity,
  CheckCircle2,
  AlertCircle,
  Clock,
  Compass
} from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { projectsData } from '../data/projectsData.js';

// Accessible GitHub SVG Icon
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

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Applied AI & Web',
    'Machine Learning',
    'Cybersecurity & Enterprise',
    'Full-Stack Systems',
  ];

  const completedProjects = projectsData.filter((p) => p.isCompleted !== false);
  const plannedProjects = projectsData.filter((p) => p.isCompleted === false);

  const filteredCompleted = activeCategory === 'All'
    ? completedProjects
    : completedProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F5F0E7] dark:bg-[#111317] text-[#252522] dark:text-[#E6E4DE] selection:bg-[#C7A052]/20 selection:text-[#252522] dark:selection:text-white transition-colors duration-500 overflow-x-hidden">
      <Navbar />

      <main className="pt-28 sm:pt-36">
        {/* Header Section */}
        <section className="relative px-4 sm:px-8 pb-12 sm:pb-16 max-w-7xl mx-auto">
          {/* Subtle Ambient Atmosphere */}
          <div className="pointer-events-none absolute top-0 right-1/4 w-[350px] sm:w-[550px] h-[300px] bg-[#C7A052]/10 dark:bg-[#C7A052]/5 blur-[120px] rounded-full" />

          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#252522]/60 dark:text-[#E6E4DE]/60 mb-6">
            <Link to="/" className="hover:text-[#C7A052] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#C7A052] font-semibold">Projects</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A052]/40 bg-[#FAF7F2] dark:bg-[#191C22] text-xs font-mono text-[#252522] dark:text-[#E6E4DE] mb-4 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C7A052] shrink-0" />
                <span className="font-semibold uppercase tracking-wider">Engineering Portfolio</span>
                <span className="text-[#252522]/30 dark:text-white/30">&bull;</span>
                <span>Verified Codebases</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] tracking-tight leading-[1.15]">
                Project <span className="italic font-normal text-[#C7A052]">Portfolio</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg font-sans text-[#252522]/80 dark:text-[#E6E4DE]/80 mt-3 sm:mt-4 leading-relaxed">
                Applied machine learning systems, client-side neural network classifiers, enterprise security analytics, and relational database platforms.
              </p>
            </div>

            {/* Category Filter Pills (Min 44px Touch Targets) */}
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

          {/* Completed Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredCompleted.map((project, idx) => (
                <motion.article
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative flex flex-col justify-between p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/12 dark:border-white/10 shadow-editorial hover:border-[#C7A052] transition-all"
                >
                  <div>
                    {/* Top Row: Category Icon & Badges */}
                    <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 sm:p-2.5 rounded-2xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10 shrink-0">
                          {getProjectIcon(project.category)}
                        </div>
                        <span className="text-xs font-mono font-medium text-[#C7A052] tracking-wide">
                          {project.category}
                        </span>
                      </div>

                      <span className={`px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold border ${
                        project.badge === 'Open Source'
                          ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20'
                          : project.badge === 'Private Internship Project'
                          ? 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20'
                          : 'bg-[#C7A052]/10 text-[#C7A052] border-[#C7A052]/20'
                      }`}>
                        {project.badge}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] group-hover:text-[#C7A052] transition-colors leading-snug mb-2 sm:mb-3">
                      <Link to={`/projects/${project.slug}`} className="hover:underline focus:outline-none">
                        {project.title}
                      </Link>
                    </h2>

                    {/* Subtitle / Focus */}
                    <p className="text-xs sm:text-sm font-mono text-[#252522]/60 dark:text-[#E6E4DE]/60 mb-4 sm:mb-5">
                      {project.subtitle}
                    </p>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm font-sans text-[#252522]/80 dark:text-[#E6E4DE]/80 leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Disclaimer banner if present */}
                    {project.disclaimer && (
                      <div className="mb-6 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-sans text-amber-900 dark:text-amber-200 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                        <span>{project.disclaimer}</span>
                      </div>
                    )}

                    {/* Metrics Row */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 rounded-2xl bg-[#F5F0E7]/70 dark:bg-[#121316]/70 border border-[#252522]/8 dark:border-white/5 mb-6">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="text-center">
                            <span className="block text-[10px] font-mono text-[#252522]/50 dark:text-white/40 uppercase tracking-wider mb-0.5">
                              {m.label}
                            </span>
                            <span className="block text-xs sm:text-sm font-mono font-bold text-[#252522] dark:text-[#FAF7F2] truncate">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technology Stack Tags */}
                    <div className="mb-6">
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-[#252522]/50 dark:text-white/40 mb-2 font-semibold">
                        Core Technologies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10 text-[#252522] dark:text-[#E6E4DE]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="px-2 py-1 text-[11px] font-mono text-[#252522]/50 dark:text-white/40">
                            +{project.technologies.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Actions: View Case Study, GitHub & Live Demo Links */}
                  <div className="pt-5 sm:pt-6 border-t border-[#252522]/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                      {/* View Case Study Button */}
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

                      {/* Live Demo Link (Featured for EcoSort, or explicit status label) */}
                      {project.links.liveDemo.isAvailable ? (
                        <a
                          href={project.links.liveDemo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-xl border border-[#C7A052] bg-[#C7A052]/10 hover:bg-[#C7A052] hover:text-white text-xs font-mono font-medium text-[#C7A052] transition-colors shadow-xs"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-2 text-[11px] font-mono text-[#252522]/50 dark:text-[#E6E4DE]/50 select-none">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                          <span>No public live demo</span>
                        </span>
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
        </section>

        {/* PLANNED & IN-PROGRESS WORK SECTION (Clearly separated from completed projects) */}
        {plannedProjects.length > 0 && (
          <section className="py-16 sm:py-20 px-4 sm:px-8 border-t border-[#252522]/10 dark:border-white/10 bg-[#FAF7F2] dark:bg-[#191C22]">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-[#C7A052]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#C7A052] font-semibold">
                  Future Research &amp; Roadmap
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] mb-3">
                Planned &amp; In-Progress Systems
              </h2>

              <p className="text-xs sm:text-sm font-sans text-[#252522]/70 dark:text-[#E6E4DE]/70 max-w-2xl mb-8 leading-relaxed">
                Ongoing research initiatives and architectural designs scheduled for development. Not listed as completed implementations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {plannedProjects.map((p) => (
                  <div
                    key={p.slug}
                    className="p-6 sm:p-8 rounded-3xl bg-[#F5F0E7] dark:bg-[#111317] border border-dashed border-[#252522]/20 dark:border-white/15 relative"
                  >
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                        {p.badge}
                      </span>
                      <span className="text-xs font-mono text-[#252522]/50 dark:text-white/40">
                        {p.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] mb-2">
                      {p.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-sans text-[#252522]/80 dark:text-[#E6E4DE]/80 leading-relaxed mb-5">
                      {p.description}
                    </p>

                    {p.disclaimer && (
                      <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-sans text-amber-900 dark:text-amber-200 mb-5 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                        <span>{p.disclaimer}</span>
                      </div>
                    )}

                    <div>
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-[#252522]/50 dark:text-white/40 mb-2 font-semibold">
                        Planned Technology Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {p.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 text-[#252522]/80 dark:text-[#E6E4DE]/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
