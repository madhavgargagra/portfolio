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
      className="relative py-28 px-6 sm:px-8 border-t border-[#252522]/10 dark:border-white/10 bg-[#F5F0E7] dark:bg-[#111317] bg-editorial-grain transition-colors duration-500 overflow-hidden"
    >
      {/* Decorative Ambient Background Atmosphere */}
      <div className="pointer-events-none absolute top-1/4 right-10 w-[550px] h-[450px] bg-[#C7A052]/10 dark:bg-[#C7A052]/5 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute bottom-1/4 left-10 w-[500px] h-[400px] bg-[#D9CBB7]/25 dark:bg-slate-800/10 blur-[130px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A052]/40 bg-[#FAF7F2] dark:bg-[#191C22] text-xs font-mono text-[#252522] dark:text-[#E6E4DE] mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C7A052]" />
              <span className="font-semibold uppercase tracking-wider">Verified Qualifications</span>
              <span className="text-[#252522]/30 dark:text-white/30">&bull;</span>
              <span>Requirement 07</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] tracking-tight">
              Certifications &amp; <span className="italic font-normal text-[#C7A052]">Achievements</span>
            </h2>

            <p className="text-base sm:text-lg font-sans text-[#252522]/75 dark:text-[#E6E4DE]/75 mt-3 leading-relaxed">
              Professional licensures, accredited course credentials, hackathon honors, and academic awards. Configured with editable placeholders ready for verified details.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-[#FAF7F2] dark:bg-[#191C22] p-1.5 rounded-full border border-[#252522]/15 dark:border-white/10 shadow-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeTab === 'all'
                  ? 'bg-[#252522] dark:bg-white text-[#F5F0E7] dark:text-[#111317] font-semibold shadow-xs'
                  : 'text-[#252522]/70 dark:text-[#E6E4DE]/70 hover:text-[#C7A052]'
              }`}
            >
              All Credentials
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
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
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
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
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-[#252522]/10 dark:border-white/10">
              <div className="p-2.5 rounded-2xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 text-[#C7A052]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2]">
                  Professional Certifications &amp; Licensures
                </h3>
                <span className="text-xs font-mono text-[#252522]/60 dark:text-[#E6E4DE]/60">
                  Accredited technical credentials, specializations, and verified skill evaluations
                </span>
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certificationsData.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative p-7 sm:p-8 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/12 dark:border-white/10 shadow-editorial hover:border-[#C7A052] transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon, Category Badge & Issuer */}
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-2xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10 text-[#C7A052]">
                          {renderCertIcon(cert.iconType, 'w-5 h-5')}
                        </div>
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#C7A052]/10 text-[#C7A052] border border-[#C7A052]/20 font-medium">
                          {cert.typeBadge}
                        </span>
                      </div>

                      <span className="text-xs font-mono text-[#252522]/65 dark:text-[#E6E4DE]/65 max-w-[50%] text-right truncate" title={cert.issuer}>
                        {cert.issuer}
                      </span>
                    </div>

                    {/* Certification Name */}
                    <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] group-hover:text-[#C7A052] transition-colors leading-snug mb-3">
                      {cert.title}
                    </h4>

                    {/* Credential ID Strip with Copy Feature */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#F5F0E7]/80 dark:bg-[#121316]/80 border border-[#252522]/8 dark:border-white/5 mb-4 text-xs font-mono">
                      <div className="truncate mr-2">
                        <span className="text-[#252522]/50 dark:text-white/40 block text-[10px] uppercase tracking-wider font-semibold">
                          CREDENTIAL ID
                        </span>
                        <span className="text-[#252522] dark:text-[#FAF7F2] font-semibold truncate block mt-0.5">
                          {cert.credentialId}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopyId(cert.credentialId)}
                        className="p-1.5 rounded-lg text-[#252522]/60 dark:text-white/60 hover:text-[#C7A052] hover:bg-[#FAF7F2] dark:hover:bg-[#191C22] transition-colors shrink-0"
                        title="Copy Credential ID"
                        aria-label="Copy Credential ID"
                      >
                        {copiedId === cert.credentialId ? (
                          <Check className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* Issue Date & Validity */}
                    <div className="flex items-center gap-3 text-xs font-mono text-[#252522]/65 dark:text-[#E6E4DE]/65 mb-5">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#C7A052]" />
                        <span>Issued: {cert.issueDate}</span>
                      </div>
                      <span>&bull;</span>
                      <span>{cert.expiryDate}</span>
                    </div>

                    {/* Certificate Artwork / PDF Slot with Clean Visual Placeholder */}
                    <div className="mb-5 p-3.5 rounded-2xl bg-[#F5F0E7]/60 dark:bg-[#121316]/60 border border-dashed border-[#C7A052]/35 dark:border-[#C7A052]/25">
                      {cert.certificateFile ? (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs font-mono text-[#252522] dark:text-[#FAF7F2]">
                            <FileText className="w-4 h-4 text-[#C7A052]" />
                            <span className="font-medium">Certificate Document Attached</span>
                          </div>
                          <a
                            href={cert.certificateFile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono text-[#C7A052] hover:underline"
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
                                Certificate Artwork / PDF [Upload Slot Pending]
                              </span>
                              <span className="block text-[11px] font-sans text-[#252522]/60 dark:text-[#E6E4DE]/60">
                                Official document slot ready for student verification file
                              </span>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => setPreviewCert(cert)}
                            className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-[#FAF7F2] dark:bg-[#191C22] border border-[#C7A052]/50 text-[#C7A052] hover:bg-[#C7A052] hover:text-white dark:hover:bg-[#C7A052] dark:hover:text-white transition-all shadow-2xs shrink-0"
                            title="Preview formatted certificate layout"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Preview Frame</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Evaluated Competencies */}
                    <div className="mb-6">
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-[#252522]/50 dark:text-white/40 mb-2 font-semibold">
                        Skills Evaluated
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10 text-[#252522] dark:text-[#E6E4DE]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Credential URL / Verification Link */}
                  <div className="pt-4 border-t border-[#252522]/10 dark:border-white/10 flex items-center justify-between gap-3 text-xs font-mono">
                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#C7A052] hover:text-[#252522] dark:hover:text-white font-semibold transition-colors"
                      >
                        <span>Verify Credential URL</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <div 
                        className="inline-flex items-center gap-1.5 text-[#252522]/50 dark:text-white/40 cursor-not-allowed select-none"
                        title="Credential URL placeholder: Real online verification link will be added upon final submission"
                      >
                        <span>Credential URL: [Pending Verification Link]</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                      </div>
                    )}

                    <span className="text-[11px] text-[#252522]/40 dark:text-white/40 hidden sm:inline">
                      Accredited Coursework
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 2. ACHIEVEMENTS & AWARDS SUBSECTION */}
        {(activeTab === 'all' || activeTab === 'achievements') && (
          <div>
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-[#252522]/10 dark:border-white/10">
              <div className="p-2.5 rounded-2xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10 text-[#C7A052]">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2]">
                  Honors, Awards &amp; Leadership Recognition
                </h3>
                <span className="text-xs font-mono text-[#252522]/60 dark:text-[#E6E4DE]/60">
                  Hackathon accolades, academic merit awards, and student community mentorship milestones
                </span>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievementsData.map((ach, idx) => (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative p-7 sm:p-8 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/12 dark:border-white/10 shadow-editorial hover:border-[#C7A052] transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon & Category Badge */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="p-2.5 rounded-2xl bg-[#F5F0E7] dark:bg-[#121316] border border-[#252522]/10 dark:border-white/10 text-[#C7A052]">
                        {renderAchIcon(ach.iconType, 'w-5 h-5')}
                      </div>

                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#C7A052]/10 text-[#C7A052] border border-[#C7A052]/20 font-semibold">
                        {ach.badgeText}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] group-hover:text-[#C7A052] transition-colors leading-snug mb-2">
                      {ach.title}
                    </h4>

                    {/* Organization & Date */}
                    <div className="text-xs font-mono text-[#C7A052] font-medium mb-1">
                      {ach.organization}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#252522]/60 dark:text-[#E6E4DE]/60 mb-4">
                      <Calendar className="w-3.5 h-3.5 text-[#C7A052]" />
                      <span>{ach.date}</span>
                    </div>

                    {/* Optional Image or Clean Visual Placeholder */}
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
                              Event Photo / Plaque [Placeholder Slot]
                            </span>
                            <span className="text-[#252522]/50 dark:text-white/40 block">
                              Ready for ceremony photo or citation scan
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm font-sans text-[#252522]/80 dark:text-[#E6E4DE]/80 leading-relaxed mb-5">
                      {ach.description}
                    </p>

                    {/* Highlights Checklist */}
                    {ach.highlights && (
                      <div className="space-y-2 mb-6 pt-3 border-t border-[#252522]/8 dark:border-white/5">
                        {ach.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs font-sans text-[#252522]/75 dark:text-[#E6E4DE]/75">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A052] mt-0.5 shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Verification Status & Category Tag */}
                  <div className="pt-4 border-t border-[#252522]/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                    {ach.verificationUrl ? (
                      <a
                        href={ach.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#C7A052] hover:text-[#252522] dark:hover:text-white font-semibold transition-colors"
                      >
                        <span>Verification Archive</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <div 
                        className="inline-flex items-center gap-1.5 text-[#252522]/50 dark:text-white/40 cursor-not-allowed select-none"
                        title="Placeholder verification: Archival record link will be added upon final verification"
                      >
                        <span>Verification: [Pending Link]</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                      </div>
                    )}

                    <span className="text-[10px] uppercase text-[#252522]/40 dark:text-white/40 font-semibold">
                      {ach.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#FAF7F2] dark:bg-[#191C22] p-8 sm:p-10 rounded-3xl border-2 border-[#C7A052] shadow-2xl text-center"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setPreviewCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-[#252522]/60 dark:text-white/60 hover:text-[#252522] dark:hover:text-white hover:bg-[#F5F0E7] dark:hover:bg-[#121316] transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Certificate Inner Frame */}
              <div className="p-6 sm:p-8 rounded-2xl border border-dashed border-[#C7A052]/50 bg-[#F5F0E7]/60 dark:bg-[#121316]/60">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#C7A052]/10 border border-[#C7A052]/40 flex items-center justify-center text-[#C7A052]">
                  <Award className="w-7 h-7" />
                </div>

                <div className="text-[11px] font-mono uppercase tracking-widest text-[#C7A052] mb-1 font-semibold">
                  Certificate of Achievement &amp; Specialization
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] mb-2">
                  {previewCert.title}
                </h3>

                <p className="text-xs font-sans text-[#252522]/70 dark:text-[#E6E4DE]/70 mb-5">
                  Conferred upon completion of rigorous academic curriculum and project evaluations
                </p>

                <div className="text-base sm:text-lg font-serif italic text-[#252522] dark:text-[#FAF7F2] mb-4">
                  Awarded to <span className="font-bold underline decoration-[#C7A052]">Madhav Garg</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#252522]/10 dark:border-white/10 text-xs font-mono text-left">
                  <div>
                    <span className="block text-[10px] uppercase text-[#252522]/50 dark:text-white/40">Issuing Body</span>
                    <span className="font-semibold text-[#252522] dark:text-[#FAF7F2]">{previewCert.issuer}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-[#252522]/50 dark:text-white/40">Issue Date</span>
                    <span className="font-semibold text-[#252522] dark:text-[#FAF7F2]">{previewCert.issueDate}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-[10px] uppercase text-[#252522]/50 dark:text-white/40">Credential ID</span>
                    <span className="font-mono text-[#C7A052] font-semibold">{previewCert.credentialId}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#252522]/10 dark:border-white/10 flex items-center justify-center gap-2 text-xs font-mono text-[#252522]/60 dark:text-white/50">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Interactive Visualizer: Ready to bind to your official PDF or image asset</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
