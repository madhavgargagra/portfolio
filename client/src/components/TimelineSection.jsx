import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { educationTimeline, experienceTimeline } from '../data/timelineData.js';

export default function TimelineSection() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'education' | 'experience'

  return (
    <section
      id="timeline"
      className="relative py-20 sm:py-28 px-4 sm:px-8 border-t border-[#252522]/10 dark:border-white/10 bg-[#F5F0E7] dark:bg-[#111317] bg-editorial-grain transition-colors duration-500 overflow-hidden"
    >
      {/* Decorative Ambient Atmosphere */}
      <div className="pointer-events-none absolute top-1/4 left-10 w-[300px] sm:w-[550px] h-[300px] sm:h-[450px] bg-[#C7A052]/10 dark:bg-[#C7A052]/5 blur-[100px] sm:blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute bottom-1/4 right-10 w-[280px] sm:w-[500px] h-[280px] sm:h-[400px] bg-[#D9CBB7]/25 dark:bg-slate-800/10 blur-[90px] sm:blur-[130px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-[#C7A052]/40 bg-[#FAF7F2] dark:bg-[#191C22] text-xs font-mono text-[#252522] dark:text-[#E6E4DE] mb-3 sm:mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C7A052] shrink-0" />
              <span className="font-semibold uppercase tracking-wider">Milestone Chronicle</span>
              <span className="text-[#252522]/30 dark:text-white/30">&bull;</span>
              <span>Timeline</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] tracking-tight">
              Education &amp; <span className="italic font-normal text-[#C7A052]">Experience</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg font-sans text-[#252522]/75 dark:text-[#E6E4DE]/75 mt-2.5 sm:mt-3 leading-relaxed">
              A chronological overview of university computer science studies, practical software development projects, and leadership initiatives.
            </p>
          </div>

          {/* Filter Tabs with min-44px Touch Targets */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-[#FAF7F2] dark:bg-[#191C22] p-1.5 rounded-full border border-[#252522]/15 dark:border-white/10 shadow-xs self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('all')}
              className={`min-h-[44px] px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono transition-all flex items-center justify-center shrink-0 ${
                activeTab === 'all'
                  ? 'bg-[#252522] dark:bg-white text-[#F5F0E7] dark:text-[#111317] font-semibold shadow-xs'
                  : 'text-[#252522]/70 dark:text-[#E6E4DE]/70 hover:text-[#C7A052]'
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`min-h-[44px] px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono transition-all flex items-center justify-center gap-1.5 shrink-0 ${
                activeTab === 'education'
                  ? 'bg-[#252522] dark:bg-white text-[#F5F0E7] dark:text-[#111317] font-semibold shadow-xs'
                  : 'text-[#252522]/70 dark:text-[#E6E4DE]/70 hover:text-[#C7A052]'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#C7A052]" />
              <span>Education</span>
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`min-h-[44px] px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono transition-all flex items-center justify-center gap-1.5 shrink-0 ${
                activeTab === 'experience'
                  ? 'bg-[#252522] dark:bg-white text-[#F5F0E7] dark:text-[#111317] font-semibold shadow-xs'
                  : 'text-[#252522]/70 dark:text-[#E6E4DE]/70 hover:text-[#C7A052]'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-[#C7A052]" />
              <span>Experience</span>
            </button>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* COLUMN 1: Academic Education */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={activeTab === 'education' ? 'lg:col-span-2 max-w-4xl mx-auto w-full' : 'w-full'}
            >
              {/* Column Heading */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-3 border-b border-[#252522]/10 dark:border-white/10">
                <div className="p-2 sm:p-2.5 rounded-2xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 text-[#C7A052] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2]">
                    Academic Education
                  </h3>
                  <span className="text-xs font-mono text-[#252522]/60 dark:text-[#E6E4DE]/60">
                    Degrees, coursework, and university curriculum
                  </span>
                </div>
              </div>

              {/* Vertical Timeline Track */}
              <div className="relative pl-5 sm:pl-8 border-l-2 border-[#C7A052]/30 dark:border-[#C7A052]/20 space-y-8 sm:space-y-10">
                {educationTimeline.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Glowing Champagne Timeline Node */}
                    <div className="absolute -left-[27px] sm:-left-[39px] top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#FAF7F2] dark:bg-[#191C22] border-2 border-[#C7A052] flex items-center justify-center shadow-xs">
                      {item.isCurrent && (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C7A052] animate-pulse" />
                      )}
                    </div>

                    {/* Timeline Card */}
                    <div className="p-5 sm:p-8 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 shadow-editorial group-hover:border-[#C7A052] transition-all">

                      {/* Period & Badge Strip */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#C7A052]/10 text-[#C7A052] border border-[#C7A052]/20">
                            <Calendar className="w-3 h-3" />
                            <span>{item.period}</span>
                          </span>
                          {item.isCurrent && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                              Active
                            </span>
                          )}
                        </div>

                        <span className="text-xs font-mono text-[#252522]/50 dark:text-[#E6E4DE]/50">
                          {item.badge}
                        </span>
                      </div>

                      {/* Degree & Institution */}
                      <h4 className="text-lg sm:text-2xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] group-hover:text-[#C7A052] transition-colors leading-tight mb-1">
                        {item.degree}
                      </h4>

                      <div className="text-xs sm:text-sm font-sans font-medium text-[#C7A052] mb-1">
                        {item.institution}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#252522]/60 dark:text-[#E6E4DE]/60 mb-3 sm:mb-4">
                        <MapPin className="w-3.5 h-3.5 text-[#C7A052] shrink-0" />
                        <span>{item.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm font-sans text-[#252522]/80 dark:text-[#E6E4DE]/80 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="space-y-2 mb-4 sm:mb-5 pt-3 border-t border-[#252522]/8 dark:border-white/5">
                          {item.highlights.map((highlight, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs font-sans text-[#252522]/75 dark:text-[#E6E4DE]/75">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A052] mt-0.5 shrink-0" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Coursework Tags */}
                      {item.coursework && item.coursework.length > 0 && (
                        <div className="pt-3 sm:pt-4 border-t border-[#252522]/8 dark:border-white/5">
                          <span className="block text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#252522]/60 dark:text-white/40 mb-2">
                            Key Academic Coursework
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.coursework.map((course) => (
                              <span
                                key={course}
                                className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10 text-[#252522] dark:text-[#E6E4DE]"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* COLUMN 2: Experience & Leadership */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={activeTab === 'experience' ? 'lg:col-span-2 max-w-4xl mx-auto w-full' : 'w-full'}
            >
              {/* Column Heading */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-3 border-b border-[#252522]/10 dark:border-white/10">
                <div className="p-2 sm:p-2.5 rounded-2xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 text-[#C7A052] shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2]">
                    Experience &amp; Leadership
                  </h3>
                  <span className="text-xs font-mono text-[#252522]/60 dark:text-[#E6E4DE]/60">
                    Roles, project initiatives, and technical community work
                  </span>
                </div>
              </div>

              {/* Vertical Timeline Track */}
              <div className="relative pl-5 sm:pl-8 border-l-2 border-[#C7A052]/30 dark:border-[#C7A052]/20 space-y-8 sm:space-y-10">
                {experienceTimeline.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Glowing Champagne Timeline Node */}
                    <div className="absolute -left-[27px] sm:-left-[39px] top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#FAF7F2] dark:bg-[#191C22] border-2 border-[#C7A052] flex items-center justify-center shadow-xs">
                      {item.isCurrent && (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C7A052] animate-pulse" />
                      )}
                    </div>

                    {/* Timeline Card */}
                    <div className="p-5 sm:p-8 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 shadow-editorial group-hover:border-[#C7A052] transition-all">

                      {/* Period & Badge Strip */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#C7A052]/10 text-[#C7A052] border border-[#C7A052]/20">
                            <Calendar className="w-3 h-3" />
                            <span>{item.period}</span>
                          </span>
                          {item.isCurrent && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                              Active
                            </span>
                          )}
                        </div>

                        <span className="text-xs font-mono text-[#252522]/50 dark:text-[#E6E4DE]/50">
                          {item.badge}
                        </span>
                      </div>

                      {/* Role & Organization */}
                      <h4 className="text-lg sm:text-2xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] group-hover:text-[#C7A052] transition-colors leading-tight mb-1">
                        {item.role}
                      </h4>

                      <div className="text-xs sm:text-sm font-sans font-medium text-[#C7A052] mb-1">
                        {item.organization}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#252522]/60 dark:text-[#E6E4DE]/60 mb-3 sm:mb-4">
                        <MapPin className="w-3.5 h-3.5 text-[#C7A052] shrink-0" />
                        <span>{item.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm font-sans text-[#252522]/80 dark:text-[#E6E4DE]/80 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="space-y-2 mb-4 sm:mb-5 pt-3 border-t border-[#252522]/8 dark:border-white/5">
                          {item.highlights.map((highlight, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs font-sans text-[#252522]/75 dark:text-[#E6E4DE]/75">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A052] mt-0.5 shrink-0" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      {item.technologies && item.technologies.length > 0 && (
                        <div className="pt-3 sm:pt-4 border-t border-[#252522]/8 dark:border-white/5">
                          <span className="block text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#252522]/60 dark:text-white/40 mb-2">
                            Practiced Technologies
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10 text-[#252522] dark:text-[#E6E4DE]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
