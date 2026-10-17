import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code, 
  Server, 
  Database, 
  Wrench, 
  BookOpen, 
  Sparkles,
  Award,
  Calendar
} from 'lucide-react';

export default function AboutSection() {
  const skillCategories = [
    {
      title: 'Frontend Engineering',
      icon: Code,
      skills: ['React 19', 'JavaScript (ES6+)', 'Tailwind CSS v3', 'Framer Motion', 'React Router 7', 'Responsive UI/UX'],
    },
    {
      title: 'Backend & APIs',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'RESTful API Design', 'Middleware Architecture', 'CORS & Security', 'Error Handlers'],
    },
    {
      title: 'Data & Persistence',
      icon: Database,
      skills: ['MongoDB', 'Mongoose ODM', 'Schema Validation', 'Data Aggregations', 'Index Optimization', 'ACID Principles'],
    },
    {
      title: 'Tooling & DevOps',
      icon: Wrench,
      skills: ['Vite 8', 'Git / GitHub', 'npm Workspaces', 'Postman / REST Clients', 'ESLint / Oxlint', 'Linux & PowerShell'],
    },
  ];

  return (
    <section 
      id="about"
      className="relative py-28 px-6 sm:px-8 border-t border-[#252522]/10 bg-[#F5F0E7] bg-editorial-grain overflow-hidden"
    >
      {/* Editorial Decorative Ambient Backdrop */}
      <div className="pointer-events-none absolute top-10 right-10 w-[500px] h-[500px] bg-[#C7A052]/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#D9CBB7]/30 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C7A052]/40 bg-[#FAF7F2] text-xs font-mono text-[#252522] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C7A052]" />
            <span>Phase 03 &bull; Profile & Academic Foundation</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#252522] tracking-tight">
            About <span className="italic font-normal text-[#C7A052]">Madhav Garg</span>
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#252522]/80 mt-4 leading-relaxed">
            A developer combining rigorous software craftsmanship with cinematic front-end aesthetics. Currently building full-stack web applications with the MERN stack.
          </p>
        </div>

        {/* Editorial Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Biography & Philosophy (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#FAF7F2] border border-[#252522]/10 shadow-editorial">
              <h3 className="text-2xl font-serif font-bold text-[#252522] mb-4">
                Philosophy: Engineering Meets Artistry
              </h3>
              <p className="text-sm sm:text-base font-sans text-[#252522]/80 leading-relaxed mb-4">
                I believe modern digital products must satisfy both sides of the screen: bulletproof scalability and resilient API contracts on the server, paired with fluid, responsive editorial typography and tactile animations on the frontend.
              </p>
              <p className="text-xs sm:text-sm font-sans text-[#252522]/70 leading-relaxed">
                Rather than relying on generic templates, this portfolio demonstrates architectural discipline—clean separation between Express backend services and a React 19 client, governed by a warm ivory and champagne gold visual identity.
              </p>

              {/* Status Pill */}
              <div className="mt-6 pt-6 border-t border-[#252522]/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#252522]/70">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  Currently: Computer Science Undergraduate (Semester 5)
                </span>
                <span className="text-[#C7A052]">Open to Internships & Roles</span>
              </div>
            </div>

            {/* Academic Education Card */}
            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#252522]/10 shadow-editorial">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-[#F5F0E7] border border-[#252522]/10 text-[#C7A052]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-[#252522]">
                    JK Lakshmipat University (JKLU)
                  </h4>
                  <span className="text-xs font-mono text-[#252522]/60">
                    B.Tech in Computer Science &bull; 2023 &ndash; Present (Semester 5)
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-sans text-[#252522]/75 leading-relaxed mb-4">
                Deepening core computer science concepts alongside practical full-stack web engineering. Focus areas include distributed software architectures, data structures, and database systems.
              </p>

              <div className="p-3 rounded-lg bg-[#F5F0E7] border border-[#252522]/10 text-xs font-mono text-[#252522]/70">
                <span className="font-semibold text-[#252522]">Relevant Coursework:</span> Full Stack Web Development, Database Management Systems, Data Structures & Algorithms, Operating Systems, Computer Networks.
              </div>
            </div>
          </div>

          {/* Quick Metrics / Milestone Summary (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Academic & Project Highlights */}
            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#252522]/10 shadow-editorial">
              <h4 className="text-lg font-serif font-bold text-[#252522] mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#C7A052]" />
                <span>Academic Profile</span>
              </h4>

              <div className="space-y-4 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-[#F5F0E7] border border-[#252522]/10">
                  <span className="text-[#252522]/60 block mb-1">PROGRAM</span>
                  <span className="font-bold text-[#252522] text-sm">Bachelor of Technology (CSE)</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F5F0E7] border border-[#252522]/10">
                  <span className="text-[#252522]/60 block mb-1">INSTITUTION</span>
                  <span className="font-bold text-[#252522] text-sm">JK Lakshmipat University, Jaipur</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F5F0E7] border border-[#252522]/10">
                  <span className="text-[#252522]/60 block mb-1">LOCATION & TIMELINE</span>
                  <span className="font-bold text-[#252522] text-sm">Jaipur, India &bull; 2023 &ndash; Present</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#252522]/10 text-[11px] font-mono text-[#252522]/50 italic">
                [Content Placeholder: Additional personal certifications, achievements, and awards will be linked in Step 2]
              </div>
            </div>

            {/* Upcoming Roadmap Notice */}
            <div className="p-6 rounded-2xl border border-[#C7A052]/30 bg-[#FAF7F2]/60">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#C7A052] mb-2">
                <Award className="w-4 h-4" />
                <span>Assignment Readiness Roadmap</span>
              </div>
              <p className="text-xs font-sans text-[#252522]/70 leading-relaxed">
                Experience Timeline, Certifications Showcase, and the MongoDB Mongoose Contact Form will be activated cleanly in the next submission step.
              </p>
            </div>

          </div>

        </div>

        {/* Categorized Skills Grid */}
        <div className="mt-8">
          <div className="mb-6">
            <h3 className="text-2xl font-serif font-bold text-[#252522]">
              Categorized Technical Proficiencies
            </h3>
            <p className="text-xs font-mono text-[#252522]/60 mt-1">
              Core technologies deployed across modern MERN full-stack architectures
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div 
                  key={cat.title}
                  className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#252522]/10 shadow-paper hover:border-[#C7A052] transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="p-2 rounded-lg bg-[#F5F0E7] text-[#C7A052] border border-[#252522]/5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-[#252522]">
                      {cat.title}
                    </h4>
                  </div>

                  <ul className="space-y-2">
                    {cat.skills.map((skill) => (
                      <li 
                        key={skill}
                        className="text-xs font-mono text-[#252522]/80 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C7A052]" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
