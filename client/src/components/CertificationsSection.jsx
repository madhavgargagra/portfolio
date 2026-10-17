import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  CheckCircle2,
  ExternalLink,
  Calendar,
  Sparkles,
  ShieldCheck,
  Code,
  Cloud,
  Binary,
  Database,
  Trophy,
  Medal,
  FileCheck,
  FileText,
  Copy,
  Check,
  Image as ImageIcon,
  Eye,
  X,
  Scroll
} from 'lucide-react';
import { certificationsData, achievementsData } from '../data/credentialsData.js';

// Icon resolver for certification categories
const renderCertIcon = (iconType, className) => {
  switch (iconType) {
    case 'Code': return <Code className={className} />;
    case 'Cloud': return <Cloud className={className} />;
    case 'Binary': return <Binary className={className} />;
    case 'Database': return <Database className={className} />;
    default: return <FileCheck className={className} />;
  }
};

// Icon resolver for achievement categories
const renderAchIcon = (iconType, className) => {
  switch (iconType) {
    case 'Trophy': return <Trophy className={className} />;
    case 'Award': return <Award className={className} />;
    case 'Medal': return <Medal className={className} />;
    default: return <Sparkles className={className} />;
  }
};

export default function CertificationsSection() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'certifications' | 'achievements'
  const [copiedId, setCopiedId] = useState(null);
  const [previewCert, setPreviewCert] = useState(null);

  const handleCopyId = (id) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(id);
    }
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      id="credentials"
      className="relative py-20 sm:py-28 px-4 sm:px-8 border-t border-[#252522]/10 dark:border-white/10 bg-[#F5F0E7] dark:bg-[#111317] bg-editorial-grain transition-colors duration-500 overflow-hidden"
    >
      {/* Decorative Ambient Background Atmosphere */}
      <div className="pointer-events-none absolute top-1/4 right-10 w-[300px] sm:w-[550px] h-[300px] sm:h-[450px] bg-[#C7A052]/10 dark:bg-[#C7A052]/5 blur-[100px] sm:blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute bottom-1/4 left-10 w-[280px] sm:w-[500px] h-[280px] sm:h-[400px] bg-[#D9CBB7]/25 dark:bg-slate-800/10 blur-[90px] sm:blur-[130px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-[#C7A052]/40 bg-[#FAF7F2] dark:bg-[#191C22] text-xs font-mono text-[#252522] dark:text-[#E6E4DE] mb-3 sm:mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C7A052] shrink-0" />
              <span className="font-semibold uppercase tracking-wider">Verified Qualifications</span>
              <span className="text-[#252522]/30 dark:text-white/30">&bull;</span>
              <span>Credentials</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] tracking-tight">
              Certifications &amp; <span className="italic font-normal text-[#C7A052]">Achievements</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg font-sans text-[#252522]/75 dark:text-[#E6E4DE]/75 mt-2.5 sm:mt-3 leading-relaxed">
              Academic licensures, accredited course evaluations, hackathon honors, and technical leadership milestones.
            </p>
          </div>

          {/* Filter Tabs with min-44px touch targets */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-[#FAF7F2] dark:bg-[#191C22] p-1.5 rounded-full border border-[#252522]/15 dark:border-white/10 shadow-xs self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('all')}
              className={`min-h-[44px] px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono transition-all flex items-center justify-center shrink-0 ${
                activeTab === 'all'
                  ? 'bg-[#252522] dark:bg-white text-[#F5F0E7] dark:text-[#111317] font-semibold shadow-xs'
                  : 'text-[#252522]/70 dark:text-[#E6E4DE]/70 hover:text-[#C7A052]'
              }`}
            >
              All Credentials
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`min-h-[44px] px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono transition-all flex items-center justify-center gap-1.5 shrink-0 ${
                activeTab === 'certifications'
                  ? 'bg-[#252522] dark:bg-white text-[#F5F0E7] dark:text-[#111317] font-semibold shadow-xs'
                  : 'text-[#252522]/70 dark:text-[#E6E4DE]/70 hover:text-[#C7A052]'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-[#C7A052]" />
              <span>Certifications</span>
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`min-h-[44px] px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono transition-all flex items-center justify-center gap-1.5 shrink-0 ${
                activeTab === 'achievements'
                  ? 'bg-[#252522] dark:bg-white text-[#F5F0E7] dark:text-[#111317] font-semibold shadow-xs'
                  : 'text-[#252522]/70 dark:text-[#E6E4DE]/70 hover:text-[#C7A052]'
              }`}
            >
              <Trophy className="w-3.5 h-3.5 text-[#C7A052]" />
              <span>Achievements</span>
            </button>
          </div>
        </div>

        {/* 1. CERTIFICATIONS SUBSECTION */}
        {(activeTab === 'all' || activeTab === 'certifications') && (
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-3 border-b border-[#252522]/10 dark:border-white/10">
              <div className="p-2 sm:p-2.5 rounded-2xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 text-[#C7A052] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2]">
                  Professional Certifications &amp; Coursework
                </h3>
                <span className="text-xs font-mono text-[#252522]/60 dark:text-[#E6E4DE]/60">
                  Accredited technical credentials, specializations, and verified skill evaluations
                </span>
              </div>
            </div>

            {/* Certifications Content */}
            {certificationsData.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {certificationsData.map((cert, idx) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="group relative p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/12 dark:border-white/10 shadow-editorial hover:border-[#C7A052] transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Header: Icon, Category Badge & Issuer */}
                      <div className="flex items-start justify-between gap-3 mb-4 sm:mb-5">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <div className="p-2 sm:p-2.5 rounded-2xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10 text-[#C7A052] shrink-0">
                            {renderCertIcon(cert.iconType, 'w-4 h-4 sm:w-5 sm:h-5')}
                          </div>
                          <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono bg-[#C7A052]/10 text-[#C7A052] border border-[#C7A052]/20 font-medium">
                            {cert.typeBadge}
                          </span>
                        </div>

                        <span className="text-xs font-mono text-[#252522]/65 dark:text-[#E6E4DE]/65 max-w-[50%] text-right truncate" title={cert.issuer}>
                          {cert.issuer}
                        </span>
                      </div>

                      {/* Certification Name */}
                      <h4 className="text-lg sm:text-2xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] group-hover:text-[#C7A052] transition-colors leading-snug mb-2 sm:mb-3">
                        {cert.title}
                      </h4>

                      {/* Credential ID Strip with Copy Feature */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-[#F5F0E7]/80 dark:bg-[#121316]/80 border border-[#252522]/8 dark:border-white/5 mb-4 text-xs font-mono">
                        <div className="truncate mr-2">
                          <span className="text-[#252522]/50 dark:text-white/40 block text-[10px] uppercase tracking-wider font-semibold">
                            CREDENTIAL STATUS
                          </span>
                          <span className="text-[#252522] dark:text-[#FAF7F2] font-semibold truncate block mt-0.5">
                            {cert.credentialId}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleCopyId(cert.credentialId)}
                          className="w-11 h-11 rounded-lg text-[#252522]/60 dark:text-white/60 hover:text-[#C7A052] hover:bg-[#FAF7F2] dark:hover:bg-[#191C22] transition-colors shrink-0 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#C7A052]"
                          title="Copy Credential Status"
                          aria-label="Copy Credential Status"
                        >
                          {copiedId === cert.credentialId ? (
                            <Check className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      {/* Issue Date & Validity */}
                      <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono text-[#252522]/65 dark:text-[#E6E4DE]/65 mb-4 sm:mb-5">
                        <div className="flex items-center gap-1.5 truncate">
                          <Calendar className="w-3.5 h-3.5 text-[#C7A052] shrink-0" />
                          <span>Issued: {cert.issueDate}</span>
                        </div>
                        <span>&bull;</span>
                        <span>{cert.expiryDate}</span>
                      </div>

                      {/* Certificate Artwork / PDF Slot */}
                      <div className="mb-4 sm:mb-5 p-3 sm:p-3.5 rounded-2xl bg-[#F5F0E7]/60 dark:bg-[#121316]/60 border border-dashed border-[#C7A052]/35 dark:border-[#C7A052]/25">
                        {cert.certificateFile ? (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs font-mono text-[#252522] dark:text-[#FAF7F2]">
                              <FileText className="w-4 h-4 text-[#C7A052] shrink-0" />
                              <span className="font-medium">Certificate Document Attached</span>
                            </div>
                            <a
                              href={cert.certificateFile}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 min-h-[44px] text-xs font-mono text-[#C7A052] hover:underline"
                            >
                              <span>Open</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        ) : (
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="flex items-center gap-2.5">
                              <div className="p-2 rounded-xl bg-[#FAF7F2] dark:bg-[#191C22] text-[#C7A052] border border-[#252522]/10 dark:border-white/10 shrink-0">
                                <Scroll className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="block text-xs font-mono font-medium text-[#252522] dark:text-[#FAF7F2]">
                                  Certificate Document Slot
                                </span>
                                <span className="block text-[11px] font-sans text-[#252522]/60 dark:text-[#E6E4DE]/60">
                                  Document slot ready for certificate file
                                </span>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => setPreviewCert(cert)}
                              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 min-h-[44px] rounded-full text-xs font-mono bg-[#FAF7F2] dark:bg-[#191C22] border border-[#C7A052]/50 text-[#C7A052] hover:bg-[#C7A052] hover:text-white dark:hover:bg-[#C7A052] dark:hover:text-white transition-all shadow-2xs shrink-0"
                              title="Preview formatted certificate layout"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>Preview Frame</span>
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Evaluated Competencies */}
                      <div className="mb-5 sm:mb-6">
                        <span className="block text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#252522]/50 dark:text-white/40 mb-2 font-semibold">
                          Skills Evaluated
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10 text-[#252522] dark:text-[#E6E4DE]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Credential URL */}
                    <div className="pt-4 border-t border-[#252522]/10 dark:border-white/10 flex items-center justify-between gap-3 text-xs font-mono">
                      {cert.credentialUrl ? (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 min-h-[44px] text-[#C7A052] hover:text-[#252522] dark:hover:text-white font-semibold transition-colors"
                        >
                          <span>Verify Credential URL</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <div
                          className="inline-flex items-center gap-1.5 min-h-[44px] text-[#252522]/50 dark:text-white/40 cursor-not-allowed select-none"
                          title="Credential link: Archival verification link will be added upon certificate submission"
                        >
                          <span>Verification Slot [Ready]</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                        </div>
                      )}

                      <span className="text-[10px] sm:text-[11px] text-[#252522]/40 dark:text-white/40 hidden sm:inline">
                        Evaluated Coursework
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-dashed border-[#252522]/15 dark:border-white/10 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-[#C7A052]/10 border border-[#C7A052]/30 flex items-center justify-center text-[#C7A052]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] mb-2">
                  Certifications &amp; Licensures
                </h4>
                <p className="text-xs sm:text-sm font-sans text-[#252522]/70 dark:text-[#E6E4DE]/70 max-w-md mx-auto leading-relaxed">
                  Verified professional certifications, technical evaluations, and accredited licensure documents will be displayed here upon verification.
                </p>
                <span className="inline-block mt-4 text-[11px] font-mono text-[#C7A052] uppercase tracking-wider font-semibold">
                  [Pending Verification Details]
                </span>
              </div>
            )}
          </div>
        )}

        {/* 2. ACHIEVEMENTS & AWARDS SUBSECTION */}
        {(activeTab === 'all' || activeTab === 'achievements') && (
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-3 border-b border-[#252522]/10 dark:border-white/10">
              <div className="p-2 sm:p-2.5 rounded-2xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 text-[#C7A052] shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2]">
                  Honors, Awards &amp; Leadership Recognition
                </h3>
                <span className="text-xs font-mono text-[#252522]/60 dark:text-[#E6E4DE]/60">
                  Hackathon accolades, academic merit awards, and student community mentorship milestones
                </span>
              </div>
            </div>

            {/* Achievements Content */}
            {achievementsData.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {achievementsData.map((ach, idx) => (
                  <motion.div
                    key={ach.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group relative p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/12 dark:border-white/10 shadow-editorial hover:border-[#C7A052] transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Header: Icon & Category Badge */}
                      <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                        <div className="p-2 sm:p-2.5 rounded-2xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10 text-[#C7A052] shrink-0">
                          {renderAchIcon(ach.iconType, 'w-4 h-4 sm:w-5 sm:h-5')}
                        </div>

                        <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono bg-[#C7A052]/10 text-[#C7A052] border border-[#C7A052]/20 font-semibold truncate">
                          {ach.badgeText}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-lg sm:text-xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] group-hover:text-[#C7A052] transition-colors leading-snug mb-1.5 sm:mb-2">
                        {ach.title}
                      </h4>

                      {/* Organization & Date */}
                      <div className="text-xs font-mono text-[#C7A052] font-medium mb-1">
                        {ach.organization}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#252522]/60 dark:text-[#E6E4DE]/60 mb-3 sm:mb-4">
                        <Calendar className="w-3.5 h-3.5 text-[#C7A052] shrink-0" />
                        <span>{ach.date}</span>
                      </div>

                      {/* Image or Clean Visual Placeholder */}
                      <div className="mb-4 p-3 rounded-2xl bg-[#F5F0E7]/60 dark:bg-[#121316]/60 border border-dashed border-[#C7A052]/30 text-xs font-mono">
                        {ach.image ? (
                          <div className="overflow-hidden rounded-xl">
                            <img
                              src={ach.image}
                              alt={ach.title}
                              className="w-full h-32 object-cover"
                            />
                          </div>
                        ) : (
                          <div className="flex items-center gap-2.5 text-[#252522]/70 dark:text-[#E6E4DE]/70">
                            <ImageIcon className="w-4 h-4 text-[#C7A052] shrink-0" />
                            <div className="text-[11px] leading-tight">
                              <span className="font-semibold block text-[#252522] dark:text-[#FAF7F2]">
                                Event Photo Slot [Ready]
                              </span>
                              <span className="text-[#252522]/50 dark:text-white/40 block">
                                Reserved for ceremony photo or citation scan
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm font-sans text-[#252522]/80 dark:text-[#E6E4DE]/80 leading-relaxed mb-4 sm:mb-5">
                        {ach.description}
                      </p>

                      {/* Highlights Checklist */}
                      {ach.highlights && (
                        <div className="space-y-2 mb-5 sm:mb-6 pt-3 border-t border-[#252522]/8 dark:border-white/5">
                          {ach.highlights.map((highlight, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs font-sans text-[#252522]/75 dark:text-[#E6E4DE]/75">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A052] mt-0.5 shrink-0" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Verification Status */}
                    <div className="pt-4 border-t border-[#252522]/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                      {ach.verificationUrl ? (
                        <a
                          href={ach.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 min-h-[44px] text-[#C7A052] hover:text-[#252522] dark:hover:text-white font-semibold transition-colors"
                        >
                          <span>Verification Archive</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <div
                          className="inline-flex items-center gap-1.5 min-h-[44px] text-[#252522]/50 dark:text-white/40 cursor-not-allowed select-none"
                          title="Archival record link slot"
                        >
                          <span>Archive Slot [Ready]</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                        </div>
                      )}

                      <span className="text-[10px] uppercase text-[#252522]/40 dark:text-white/40 font-semibold truncate">
                        {ach.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-dashed border-[#252522]/15 dark:border-white/10 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-[#C7A052]/10 border border-[#C7A052]/30 flex items-center justify-center text-[#C7A052]">
                  <Trophy className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] mb-2">
                  Honors, Awards &amp; Recognitions
                </h4>
                <p className="text-xs sm:text-sm font-sans text-[#252522]/70 dark:text-[#E6E4DE]/70 max-w-md mx-auto leading-relaxed">
                  Verified competition honors, academic distinctions, and leadership accolades will be recorded upon submission of verified credentials.
                </p>
                <span className="inline-block mt-4 text-[11px] font-mono text-[#C7A052] uppercase tracking-wider font-semibold">
                  [Pending Verification Details]
                </span>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Interactive Certificate Preview Modal */}
      <AnimatePresence>
        {previewCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl bg-[#FAF7F2] dark:bg-[#191C22] p-5 sm:p-8 rounded-3xl border-2 border-[#C7A052] shadow-2xl text-center my-8"
            >
              {/* Close Button with min-44px target */}
              <button
                type="button"
                onClick={() => setPreviewCert(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-11 h-11 rounded-full text-[#252522]/60 dark:text-white/60 hover:text-[#252522] dark:hover:text-white hover:bg-[#F5F0E7] dark:hover:bg-[#121316] transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#C7A052]"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5 text-[#C7A052]" />
              </button>

              {/* Certificate Inner Frame */}
              <div className="p-4 sm:p-7 rounded-2xl border border-dashed border-[#C7A052]/50 bg-[#F5F0E7]/60 dark:bg-[#121316]/60">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-full bg-[#C7A052]/10 border border-[#C7A052]/40 flex items-center justify-center text-[#C7A052]">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#C7A052] mb-1 font-semibold">
                  Certificate of Achievement &amp; Specialization
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] mb-2 leading-tight">
                  {previewCert.title}
                </h3>

                <p className="text-xs font-sans text-[#252522]/70 dark:text-[#E6E4DE]/70 mb-4 sm:mb-5">
                  Conferred upon completion of verified coursework and practical laboratory evaluations
                </p>

                <div className="text-base sm:text-lg font-serif italic text-[#252522] dark:text-[#FAF7F2] mb-4">
                  Awarded to <span className="font-bold underline decoration-[#C7A052]">Madhav Garg</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-4 border-t border-[#252522]/10 dark:border-white/10 text-xs font-mono text-left">
                  <div>
                    <span className="block text-[9px] sm:text-[10px] uppercase text-[#252522]/50 dark:text-white/40">Issuing Body</span>
                    <span className="font-semibold text-[#252522] dark:text-[#FAF7F2] text-[11px] sm:text-xs truncate block">{previewCert.issuer}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] sm:text-[10px] uppercase text-[#252522]/50 dark:text-white/40">Evaluation</span>
                    <span className="font-semibold text-[#252522] dark:text-[#FAF7F2] text-[11px] sm:text-xs truncate block">{previewCert.issueDate}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-[9px] sm:text-[10px] uppercase text-[#252522]/50 dark:text-white/40">Status</span>
                    <span className="font-mono text-[#C7A052] font-semibold text-[11px] sm:text-xs">{previewCert.credentialId}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#252522]/10 dark:border-white/10 flex items-center justify-center gap-2 text-[11px] font-mono text-[#252522]/60 dark:text-white/50">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Interactive Frame Ready for Official PDF Upload</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
