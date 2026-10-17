import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Code,
  Server,
  Wrench,
  Sparkles,
  MapPin,
  Award,
  Globe,
  ArrowRight
} from 'lucide-react';
import { personalData } from '../data/personalData.js';

export default function AboutSection() {
  const skillGroups = [
    {
      groupTitle: 'Frontend & Web Engineering',
      icon: Code,
      accentColor: '#C7A052',
      skills: [
        { name: 'React 19 & React Router', level: 92, focus: 'Component architecture, hooks, multi-page client routing' },
        { name: 'JavaScript (ES6+)', level: 90, focus: 'Async/await, closures, prototypes, event loop' },
        { name: 'Tailwind CSS v3', level: 95, focus: 'Responsive layouts, design systems, dark mode' },
        { name: 'Framer Motion', level: 86, focus: 'Motion transitions, layout animations, spring physics' },
        { name: 'HTML5 Semantic & A11y', level: 92, focus: 'ARIA compliance, SEO hierarchy, keyboard navigation' },
      ],
    },
    {
      groupTitle: 'Backend, APIs & Databases',
      icon: Server,
      accentColor: '#3B82F6',
      skills: [
        { name: 'Node.js Runtime & Express', level: 90, focus: 'Modular REST routing, CORS policies, error handlers' },
        { name: 'FastAPI & Python', level: 86, focus: 'Stateless endpoints, Pydantic schemas, JWT authentication' },
        { name: 'MongoDB & Mongoose ODM', level: 88, focus: 'Schema validation, indexing, aggregation pipelines' },
        { name: 'MySQL & Sequelize ORM', level: 84, focus: 'Relational schemas, foreign keys, ACID compliance' },
        { name: 'SQLite & Query Engineering', level: 85, focus: 'Embedded storage, indexing, test environments' },
      ],
    },
    {
      groupTitle: 'Applied AI, ML & Geospatial',
      icon: Globe,
      accentColor: '#8B5CF6',
      skills: [
        { name: 'Scikit-learn & ML Models', level: 85, focus: 'Isolation Forest, SVM, KNN, XGBoost, Logistic Regression' },
        { name: 'TensorFlow.js & MobileNet', level: 84, focus: 'In-browser computer vision, client-side model inference' },
        { name: 'Python Data Science Stack', level: 88, focus: 'Pandas, NumPy, Matplotlib, feature preprocessing' },
        { name: 'Google Earth Engine & QGIS', level: 82, focus: 'Geospatial analytics, thermal band processing, satellite imagery' },
        { name: 'Satellite Data Analysis', level: 84, focus: 'Sentinel-5P, MODIS, Landsat-8 remote sensing workflows' },
      ],
    },
    {
      groupTitle: 'Developer Tools & Workflows',
      icon: Wrench,
      accentColor: '#10B981',
      skills: [
        { name: 'Vite & Bundlers', level: 88, focus: 'HMR, production tree-shaking, Rollup build optimization' },
        { name: 'Git & Version Control', level: 90, focus: 'Branch hygiene, semantic commits, GitHub CI workflows' },
        { name: 'Docker & Containerization', level: 82, focus: 'Dockerfile specifications, containerized environments' },
        { name: 'Postman & Pytest', level: 86, focus: 'API regression test suites, automated unit tests' },
        { name: 'Linux / Red Hat RH124', level: 85, focus: 'CLI automation, permissions, storage, process management' },
      ],
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 px-4 sm:px-8 border-t border-[#252522]/10 dark:border-white/10 bg-[#F5F0E7] dark:bg-[#111317] bg-editorial-grain transition-colors duration-500 overflow-hidden"
    >
      {/* Decorative Ambient Atmosphere */}
      <div className="pointer-events-none absolute top-10 right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#C7A052]/10 dark:bg-[#C7A052]/5 blur-[100px] sm:blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-[#D9CBB7]/30 dark:bg-slate-800/10 blur-[90px] sm:blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-[#C7A052]/40 bg-[#FAF7F2] dark:bg-[#191C22] text-xs font-mono text-[#252522] dark:text-[#E6E4DE] mb-3 sm:mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C7A052] shrink-0" />
            <span className="font-semibold uppercase tracking-wider">Candidate Profile</span>
            <span className="text-[#252522]/30 dark:text-white/30">&bull;</span>
            <span>Education &amp; Competencies</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] tracking-tight">
            Academic &amp; <span className="italic font-normal text-[#C7A052]">Technical Foundation</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg font-sans text-[#252522]/80 dark:text-[#E6E4DE]/80 mt-3 sm:mt-4 leading-relaxed">
            {personalData.introCopy}
          </p>
        </div>

        {/* Profile Card & Academic Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-16 sm:mb-20">

          {/* Left Column: Bio & Verified Context (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 shadow-editorial">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] mb-3 sm:mb-4">
                Disciplined Architecture &amp; Practical Problem Solving
              </h3>

              <p className="text-xs sm:text-sm lg:text-base font-sans text-[#252522]/80 dark:text-[#E6E4DE]/80 leading-relaxed mb-3 sm:mb-4">
                My work spans full-stack software development, machine learning exploration, and geospatial remote sensing. I prioritize modular code architecture, strict data validation, predictable application state, and accessible, responsive user interfaces across mobile and desktop.
              </p>

              <p className="text-xs sm:text-sm font-sans text-[#252522]/70 dark:text-[#E6E4DE]/70 leading-relaxed">
                Beyond individual engineering coursework, I have developed collaboration and coordination experience through university software projects, summer internship programs at Infosys Springboard and India Space Academy, and campus society leadership.
              </p>

              {/* Status & Location Meta */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#252522]/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs font-mono text-[#252522]/70 dark:text-[#E6E4DE]/70">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="font-semibold text-[#252522] dark:text-[#FAF7F2]">
                    B.Tech CSE &bull; Class of {personalData.expectedGraduation} (CGPA: {personalData.cgpa})
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[#C7A052]">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{personalData.location}</span>
                </div>
              </div>
            </div>

            {/* University & Degree Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 shadow-editorial">
              <div className="flex items-start gap-3.5 sm:gap-4 mb-4">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10 text-[#C7A052] shrink-0">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2]">
                    {personalData.university}
                  </h4>
                  <span className="text-xs font-mono text-[#252522]/60 dark:text-[#E6E4DE]/60">
                    {personalData.degree} &bull; Expected Graduation: {personalData.expectedGraduation}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-sans text-[#252522]/75 dark:text-[#E6E4DE]/75 leading-relaxed mb-4">
                Comprehensive computing curriculum combining theoretical foundations with hands-on systems architecture, relational databases, and machine learning implementations.
              </p>

              <div className="p-3 sm:p-3.5 rounded-xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10 text-xs font-mono text-[#252522]/75 dark:text-[#E6E4DE]/75 leading-relaxed">
                <span className="font-semibold text-[#252522] dark:text-[#FAF7F2]">Key Coursework:</span> Full Stack Web Development, Database Management Systems (DBMS), Data Structures &amp; Algorithms, Operating Systems, Computer Networks.
              </div>
            </div>
          </div>

          {/* Right Column: Profile Summary & Academic Attributes (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Quick Profile Overview */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 shadow-editorial">
              <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#15171C] border border-[#C7A052]/30 p-2 flex items-center justify-center shadow-xs shrink-0">
                  <img src="/logo.png" alt="Madhav Garg Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#252522] dark:text-[#FAF7F2]">
                    {personalData.name}
                  </h4>
                  <span className="text-xs font-mono text-[#C7A052]">
                    {personalData.currentYear}
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10">
                  <span className="text-[#252522]/50 dark:text-white/40 block mb-0.5 uppercase tracking-wider text-[10px]">PROGRAM</span>
                  <span className="font-bold text-[#252522] dark:text-[#FAF7F2] text-xs sm:text-sm">{personalData.degree}</span>
                </div>

                <div className="p-3 rounded-xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10">
                  <span className="text-[#252522]/50 dark:text-white/40 block mb-0.5 uppercase tracking-wider text-[10px]">INSTITUTION</span>
                  <span className="font-bold text-[#252522] dark:text-[#FAF7F2] text-xs sm:text-sm">JK Lakshmipat University, Jaipur</span>
                </div>

                <div className="p-3 rounded-xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10">
                  <span className="text-[#252522]/50 dark:text-white/40 block mb-0.5 uppercase tracking-wider text-[10px]">ACADEMIC CGPA</span>
                  <span className="font-bold text-[#252522] dark:text-[#FAF7F2] text-xs sm:text-sm">{personalData.cgpa} / 10.0</span>
                </div>

                <div className="p-3 rounded-xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10">
                  <span className="text-[#252522]/50 dark:text-white/40 block mb-0.5 uppercase tracking-wider text-[10px]">CONTACT EMAIL</span>
                  <a href={`mailto:${personalData.email}`} className="font-bold text-[#C7A052] hover:underline text-xs sm:text-sm block truncate">
                    {personalData.email}
                  </a>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#252522]/10 dark:border-white/10">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 w-full min-h-[44px] py-2.5 rounded-xl bg-[#252522] dark:bg-white text-[#F5F0E7] dark:text-[#111317] text-xs font-mono font-medium hover:bg-[#C7A052] dark:hover:bg-[#C7A052] dark:hover:text-white transition-colors"
                >
                  <span>Explore Full Profile &amp; Leadership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div>
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="p-2 sm:p-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 text-[#C7A052]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-3xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2]">
                Core Competencies &amp; Technologies
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#252522]/60 dark:text-[#E6E4DE]/60 mt-0.5">
                Technical competencies verified through academic laboratory assessments, coursework, and internship project delivery.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {skillGroups.map((group) => {
              const IconComponent = group.icon;
              return (
                <div
                  key={group.groupTitle}
                  className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 shadow-editorial"
                >
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#252522]/10 dark:border-white/10">
                    <div className="p-2 rounded-xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10 text-[#C7A052]">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h4 className="font-serif font-bold text-lg sm:text-xl text-[#252522] dark:text-[#FAF7F2]">
                      {group.groupTitle}
                    </h4>
                  </div>

                  <div className="space-y-4">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="font-bold text-[#252522] dark:text-[#FAF7F2]">
                            {skill.name}
                          </span>
                          <span className="text-[11px] text-[#C7A052]">
                            Verified
                          </span>
                        </div>
                        <p className="text-[11px] font-sans text-[#252522]/70 dark:text-[#E6E4DE]/70 leading-tight">
                          {skill.focus}
                        </p>
                      </div>
                    ))}
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
