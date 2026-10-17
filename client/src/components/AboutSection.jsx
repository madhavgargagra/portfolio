import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code, 
  Server, 
  Wrench, 
  BookOpen, 
  Sparkles,
  MapPin,
  Calendar,
  Layers,
  Award
} from 'lucide-react';

export default function AboutSection() {
  // Required Skill Groups: Frontend, Backend, Tools & Technologies
  const skillGroups = [
    {
      groupTitle: 'Frontend Engineering',
      icon: Code,
      accentColor: '#C7A052',
      skills: [
        { name: 'React 19 & React Router', level: 92, focus: 'Component trees, hooks, custom routers & state' },
        { name: 'JavaScript (ES6+)', level: 90, focus: 'Async/await, closures, prototypes, event loop' },
        { name: 'Tailwind CSS v3', level: 95, focus: 'Responsive layouts, design systems, dark mode' },
        { name: 'Framer Motion', level: 86, focus: 'Layout animations, exit transitions, spring physics' },
        { name: 'HTML5 Semantic & Accessibility', level: 92, focus: 'ARIA compliance, SEO hierarchy, keyboard navigation' },
      ],
    },
    {
      groupTitle: 'Backend & APIs',
      icon: Server,
      accentColor: '#3B82F6',
      skills: [
        { name: 'Node.js Runtime', level: 88, focus: 'Event-driven I/O, worker threads, stream pipelines' },
        { name: 'Express.js Framework', level: 90, focus: 'Modular REST routing, CORS policies, error handlers' },
        { name: 'MongoDB & Mongoose ODM', level: 85, focus: 'Schema validation, indexing, aggregation pipelines' },
        { name: 'RESTful API Architecture', level: 92, focus: 'Status codes, stateless sessions, payload sanitization' },
        { name: 'JWT & Authentication Logic', level: 84, focus: 'Token signing, verification middleware, RBAC' },
      ],
    },
    {
      groupTitle: 'Tools & Technologies',
      icon: Wrench,
      accentColor: '#10B981',
      skills: [
        { name: 'Vite 8 & Bundlers', level: 88, focus: 'Fast HMR, production tree-shaking, Rollup configs' },
        { name: 'Git & Version Control', level: 90, focus: 'Branching strategies, commit hygiene, GitHub workflows' },
        { name: 'npm & Monorepo Workspaces', level: 86, focus: 'Multi-package management, semantic scripts' },
        { name: 'Postman & API Testing', level: 88, focus: 'Endpoint regression suites, environment mocks' },
        { name: 'Linux / Bash & PowerShell', level: 82, focus: 'CLI automation, environment variables, permissions' },
      ],
    },
  ];

  return (
    <section 
      id="about"
      className="relative py-28 px-6 sm:px-8 border-t border-[#252522]/10 dark:border-white/10 bg-[#F5F0E7] dark:bg-[#111317] bg-editorial-grain transition-colors duration-500 overflow-hidden"
    >
      {/* Decorative Ambient Atmosphere */}
      <div className="pointer-events-none absolute top-10 right-10 w-[500px] h-[500px] bg-[#C7A052]/10 dark:bg-[#C7A052]/5 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#D9CBB7]/30 dark:bg-slate-800/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A052]/40 bg-[#FAF7F2] dark:bg-[#191C22] text-xs font-mono text-[#252522] dark:text-[#E6E4DE] mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C7A052]" />
            <span className="font-semibold uppercase tracking-wider">About & Technical Foundation</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] tracking-tight">
            Engineering <span className="italic font-normal text-[#C7A052]">Profile</span>
          </h2>

          <p className="text-base sm:text-lg font-sans text-[#252522]/80 dark:text-[#E6E4DE]/80 mt-4 leading-relaxed">
            Full-stack developer combining disciplined software architecture with an editorial design sensibility. Currently completing Computer Science coursework at JK Lakshmipat University.
          </p>
        </div>

        {/* Profile Card & Academic Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Left Column: Bio & Core Philosophy (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 shadow-editorial">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] mb-4">
                Disciplined Craft & Systems Thinking
              </h3>
              
              <p className="text-sm sm:text-base font-sans text-[#252522]/80 dark:text-[#E6E4DE]/80 leading-relaxed mb-4">
                My approach to software engineering centers on predictable state, clean API boundaries, and accessible user interfaces. I build web applications where the server architecture is resilient and maintainable, while the frontend interface feels intuitive, responsive, and visually harmonious.
              </p>
              
              <p className="text-xs sm:text-sm font-sans text-[#252522]/70 dark:text-[#E6E4DE]/70 leading-relaxed">
                As a developer working with the MERN stack (MongoDB, Express, React, Node.js), I prioritize modular folder structures, strict validation schemas, accessible markup, and responsive design systems that perform reliably across mobile, tablet, and desktop viewports.
              </p>

              {/* Status & Location Meta */}
              <div className="mt-8 pt-6 border-t border-[#252522]/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#252522]/70 dark:text-[#E6E4DE]/70">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-[#252522] dark:text-[#FAF7F2]">
                    Status: B.Tech CSE (Semester 5) &bull; Open for Roles
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[#C7A052]">
                  <MapPin className="w-4 h-4" />
                  <span>Jaipur, Rajasthan, India</span>
                </div>
              </div>
            </div>

            {/* University & Degree Box */}
            <div className="p-8 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 shadow-editorial">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10 text-[#C7A052]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2]">
                    JK Lakshmipat University (JKLU)
                  </h4>
                  <span className="text-xs font-mono text-[#252522]/60 dark:text-[#E6E4DE]/60">
                    B.Tech in Computer Science &amp; Engineering &bull; 2023 &ndash; Present
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-sans text-[#252522]/75 dark:text-[#E6E4DE]/75 leading-relaxed mb-4">
                Rigorous computer science curriculum combining theoretical algorithmic foundations with practical full-stack software development and database engineering.
              </p>

              <div className="p-3.5 rounded-xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10 text-xs font-mono text-[#252522]/75 dark:text-[#E6E4DE]/75">
                <span className="font-semibold text-[#252522] dark:text-[#FAF7F2]">Key Coursework:</span> Full Stack Web Development, Database Management Systems, Data Structures &amp; Algorithms, Operating Systems, Computer Networks.
              </div>
            </div>
          </div>

          {/* Right Column: Profile Summary & Academic Attributes (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Profile Overview */}
            <div className="p-8 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 shadow-editorial">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#C7A052] to-[#E2BF7D] flex items-center justify-center text-[#252522] font-serif text-2xl font-bold shadow-sm">
                  MG
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#252522] dark:text-[#FAF7F2]">
                    Madhav Garg
                  </h4>
                  <span className="text-xs font-mono text-[#C7A052]">
                    Full-Stack MERN Developer
                  </span>
                </div>
              </div>

              <div className="space-y-3.5 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10">
                  <span className="text-[#252522]/50 dark:text-white/40 block mb-0.5 uppercase tracking-wider text-[10px]">PROGRAM</span>
                  <span className="font-bold text-[#252522] dark:text-[#FAF7F2] text-sm">Bachelor of Technology (CSE)</span>
                </div>

                <div className="p-3 rounded-xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10">
                  <span className="text-[#252522]/50 dark:text-white/40 block mb-0.5 uppercase tracking-wider text-[10px]">INSTITUTION</span>
                  <span className="font-bold text-[#252522] dark:text-[#FAF7F2] text-sm">JK Lakshmipat University, Jaipur</span>
                </div>

                <div className="p-3 rounded-xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10">
                  <span className="text-[#252522]/50 dark:text-white/40 block mb-0.5 uppercase tracking-wider text-[10px]">ACTIVE SEMESTER</span>
                  <span className="font-bold text-[#252522] dark:text-[#FAF7F2] text-sm">Semester 5 (Full-Stack MERN Focus)</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#252522]/10 dark:border-white/10 text-[11px] font-mono text-[#252522]/50 dark:text-[#E6E4DE]/50 italic">
                [Academic Profile Note: Coursework, semester timeline, and project milestones are maintained here]
              </div>
            </div>

            {/* Assignment Roadmap Callout */}
            <div className="p-6 rounded-3xl border border-[#C7A052]/30 bg-[#FAF7F2]/60 dark:bg-[#191C22]/60">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#C7A052] mb-2">
                <Award className="w-4 h-4" />
                <span>Assignment Modules In Progress</span>
              </div>
              <p className="text-xs font-sans text-[#252522]/75 dark:text-[#E6E4DE]/75 leading-relaxed">
                Experience Timeline, Certifications Showcase, and the MongoDB Mongoose Contact Form will be connected in subsequent steps.
              </p>
            </div>

          </div>

        </div>

        {/* Categorized Technical Skills with Animated Indicators & Hover Details */}
        <div>
          <div className="mb-8">
            <h3 className="text-3xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2]">
              Categorized Technical Proficiencies
            </h3>
            <p className="text-xs font-mono text-[#252522]/60 dark:text-[#E6E4DE]/60 mt-1">
              Grouped into Frontend, Backend, and Tools &amp; Technologies with animated skill indicators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillGroups.map((group, gIdx) => {
              const Icon = group.icon;
              return (
                <div 
                  key={group.groupTitle}
                  className="p-8 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/12 dark:border-white/10 shadow-editorial hover:border-[#C7A052] transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Group Header */}
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#252522]/10 dark:border-white/10">
                      <div 
                        className="p-2.5 rounded-xl border"
                        style={{
                          backgroundColor: `${group.accentColor}15`,
                          borderColor: `${group.accentColor}30`,
                          color: group.accentColor,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif font-bold text-xl text-[#252522] dark:text-[#FAF7F2]">
                        {group.groupTitle}
                      </h4>
                    </div>

                    {/* Skill Bars with Hover Detail Tooltips */}
                    <div className="space-y-5">
                      {group.skills.map((skill) => (
                        <div key={skill.name} className="group/skill relative">
                          <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                            <span className="font-semibold text-[#252522] dark:text-[#FAF7F2] group-hover/skill:text-[#C7A052] transition-colors">
                              {skill.name}
                            </span>
                            <span className="text-[#252522]/50 dark:text-[#E6E4DE]/50">
                              {skill.level}%
                            </span>
                          </div>

                          {/* Animated Progress Indicator Bar */}
                          <div className="w-full h-2 rounded-full bg-[#F5F0E7] dark:bg-[#121316] overflow-hidden border border-[#252522]/5 dark:border-white/5">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                              className="h-full rounded-full"
                              style={{ backgroundColor: group.accentColor }}
                            />
                          </div>

                          {/* Hover Detail Context */}
                          <p className="text-[11px] font-sans text-[#252522]/60 dark:text-[#E6E4DE]/50 mt-1 opacity-80 group-hover/skill:opacity-100 transition-opacity">
                            {skill.focus}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#252522]/10 dark:border-white/10 text-[11px] font-mono text-[#252522]/40 dark:text-white/40 text-center">
                    Verified Competency &bull; MERN Architecture
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
