import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Lock,
  Cpu,
  Layers,
  Activity,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Code2,
  UserCheck,
  FileText,
  Clock,
  Sparkles
} from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { projectsData, plannedProjectsData } from '../data/projectsData.js';

// Accessible GitHub SVG Icon
const GithubIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function ProjectDetailPage() {
  const { slug } = useParams();

  // Combine verified projects with planned projects for detail routing
  const allProjects = [
    ...projectsData,
    ...plannedProjectsData.map((p) => ({
      ...p,
      problemStatement: p.problemStatement || 'Early diagnostic platform for agricultural foliage pathologies and soil remediation guidance.',
      description: p.description || p.summary,
      technologies: p.plannedTechnologies || p.technologies || [],
      verifiedFeatures: p.plannedScope?.map((s) => ({ name: s, description: s, verification: 'Planned Architecture' })) || [],
      role: 'Project Architect (Planned Exploration)',
      disclaimer: p.note || 'This project is currently in the conceptual and architectural planning phase. It is not presented as a completed system.',
      badge: 'Planned Project',
      metrics: [
        { label: 'Domain', value: 'AgriTech Vision' },
        { label: 'Status', value: 'Architecture Phase' },
        { label: 'Target', value: 'Mobile / Offline' },
      ],
      links: {
        github: { url: null, isAvailable: false, label: 'Concept Phase (No Public Repo)' },
        liveDemo: { url: null, isAvailable: false, label: 'In Development' },
      },
    })),
  ];

  const project = allProjects.find(
    (p) => p.slug === slug || (slug === 'event-management-system' && p.slug === 'festival-event-management')
  );

  // If project not found, render a clean fallback with redirect option
  if (!project) {
    return (
      <div className="min-h-screen bg-[#F5F0E7] dark:bg-[#111317] text-[#252522] dark:text-[#E6E4DE] flex flex-col justify-between">
        <Navbar />
        <main className="max-w-2xl mx-auto px-4 py-36 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-serif font-bold mb-3">Project Record Not Found</h1>
          <p className="text-sm font-sans text-[#252522]/70 dark:text-[#E6E4DE]/70 mb-8 leading-relaxed">
            The requested project identifier does not correspond to an authenticated repository or validated engineering project in this portfolio.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-full bg-[#252522] dark:bg-white text-[#F5F0E7] dark:text-[#111317] text-xs font-mono font-medium hover:bg-[#C7A052] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Project Portfolio</span>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F0E7] dark:bg-[#111317] text-[#252522] dark:text-[#E6E4DE] selection:bg-[#C7A052]/20 selection:text-[#252522] dark:selection:text-white transition-colors duration-500 overflow-x-hidden">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">

          {/* Navigation & Breadcrumbs */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#252522]/70 dark:text-[#E6E4DE]/70 hover:text-[#C7A052] dark:hover:text-[#C7A052] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>

            <div className="flex items-center gap-2 text-xs font-mono text-[#252522]/50 dark:text-[#E6E4DE]/50 hidden sm:flex">
              <Link to="/" className="hover:text-[#C7A052]">Home</Link>
              <span>/</span>
              <Link to="/projects" className="hover:text-[#C7A052]">Projects</Link>
              <span>/</span>
              <span className="text-[#C7A052] font-semibold truncate max-w-[200px]">{project.title}</span>
            </div>
          </div>

          {/* Project Title Header */}
          <header className="mb-10 sm:mb-12">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#C7A052]/10 text-[#C7A052] border border-[#C7A052]/20">
                {project.category}
              </span>

              <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
                project.badge === 'Open Source'
                  ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20'
                  : project.badge === 'Private Internship Project'
                  ? 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20'
                  : 'bg-[#C7A052]/10 text-[#C7A052] border-[#C7A052]/20'
              }`}>
                {project.badge}
              </span>

              {project.isCompleted === false && (
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">
                  Planned / In Progress
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] tracking-tight leading-tight mb-3">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg font-mono text-[#252522]/70 dark:text-[#E6E4DE]/70 leading-relaxed">
              {project.subtitle}
            </p>
          </header>

          {/* Action Links & Repo Banner */}
          <div className="p-4 sm:p-6 rounded-2xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 shadow-editorial mb-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.links.github.isAvailable ? (
                <a
                  href={project.links.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-[#252522] dark:bg-white text-[#F5F0E7] dark:text-[#111317] text-xs font-mono font-medium hover:bg-[#C7A052] dark:hover:bg-[#C7A052] dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>{project.links.github.label}</span>
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-mono">
                  <Lock className="w-3.5 h-3.5" />
                  <span>{project.links.github.label || 'Private Repository (Access Restricted)'}</span>
                </div>
              )}

              {project.links.liveDemo.isAvailable ? (
                <a
                  href={project.links.liveDemo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl border border-[#C7A052] bg-[#C7A052]/10 hover:bg-[#C7A052] hover:text-white text-[#C7A052] text-xs font-mono font-medium transition-colors shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{project.links.liveDemo.label || 'Launch Live Demo'}</span>
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-[#252522]/5 dark:bg-white/5 border border-[#252522]/10 dark:border-white/10 text-xs font-mono text-[#252522]/60 dark:text-[#E6E4DE]/60 select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                  <span>{project.links.liveDemo.label || 'No Public Live Demo'}</span>
                </div>
              )}
            </div>

            {project.role && (
              <div className="flex items-center gap-2 text-xs font-mono text-[#252522]/70 dark:text-[#E6E4DE]/70">
                <UserCheck className="w-4 h-4 text-[#C7A052]" />
                <span><strong>Role:</strong> {project.role}</span>
              </div>
            )}
          </div>

          {/* Medical / Educational / Internship Disclaimers */}
          {project.disclaimer && (
            <div className="mb-10 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm font-sans text-amber-950 dark:text-amber-200 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
              <div>
                <span className="font-bold block font-mono uppercase tracking-wider mb-1">
                  Important Project Notice &amp; Scope
                </span>
                <p className="leading-relaxed">{project.disclaimer}</p>
              </div>
            </div>
          )}

          {/* Project Metrics Summary (if available) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 text-center shadow-editorial"
                >
                  <span className="block text-[11px] font-mono text-[#252522]/50 dark:text-white/40 uppercase tracking-wider mb-1">
                    {m.label}
                  </span>
                  <span className="block text-base sm:text-lg font-mono font-bold text-[#252522] dark:text-[#FAF7F2]">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Problem Statement Card */}
          <section className="mb-10 p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 shadow-editorial">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] mb-3 flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-[#C7A052]" />
              <span>Problem Statement &amp; Context</span>
            </h2>
            <p className="text-sm sm:text-base font-sans text-[#252522]/85 dark:text-[#E6E4DE]/85 leading-relaxed">
              {project.problemStatement}
            </p>
          </section>

          {/* Project Overview */}
          <section className="mb-10 p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 shadow-editorial">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] mb-3 flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-[#C7A052]" />
              <span>Technical Overview &amp; Architecture</span>
            </h2>
            <p className="text-sm sm:text-base font-sans text-[#252522]/85 dark:text-[#E6E4DE]/85 leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Verified Technologies */}
          <section className="mb-10 p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 shadow-editorial">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] mb-4 flex items-center gap-2.5">
              <Code2 className="w-5 h-5 text-[#C7A052]" />
              <span>Verified Technology Stack</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/12 dark:border-white/10 text-[#252522] dark:text-[#E6E4DE]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Features Supported by Available Evidence */}
          {project.verifiedFeatures && project.verifiedFeatures.length > 0 && (
            <section className="mb-10 p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 shadow-editorial">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#252522]/10 dark:border-white/10">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Verified Feature Breakdown</span>
                </h2>
                <span className="text-[11px] font-mono text-[#252522]/50 dark:text-white/40 uppercase tracking-wider">
                  Supported by Evidence
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.verifiedFeatures.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-4 rounded-2xl bg-[#F5F0E7]/60 dark:bg-[#121316]/60 border border-[#252522]/8 dark:border-white/5"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-sm font-mono font-bold text-[#252522] dark:text-[#FAF7F2]">
                        {feat.name}
                      </h3>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#C7A052]/10 text-[#C7A052] border border-[#C7A052]/20">
                        {feat.verification}
                      </span>
                    </div>
                    <p className="text-xs font-sans text-[#252522]/75 dark:text-[#E6E4DE]/75 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Bottom Navigation */}
          <div className="pt-8 border-t border-[#252522]/10 dark:border-white/10 flex items-center justify-between">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-full border border-[#252522]/20 dark:border-white/20 text-xs font-mono hover:border-[#C7A052] hover:text-[#C7A052] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Portfolio Grid</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-full bg-[#252522] dark:bg-white text-[#F5F0E7] dark:text-[#111317] text-xs font-mono font-medium hover:bg-[#C7A052] dark:hover:bg-[#C7A052] dark:hover:text-white transition-colors"
            >
              <span>Discuss Project</span>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
