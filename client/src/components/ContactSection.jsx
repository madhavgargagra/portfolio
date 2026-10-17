import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  User,
  Mail,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Loader2,
  Sparkles,
  MapPin,
  Clock,
  Copy,
  Check,
  ShieldCheck,
  Database,
  RefreshCw
} from 'lucide-react';
import { sendContactMessage } from '../services/contactService.js';
import { API_ENDPOINTS } from '../config/api.js';

// Standard RFC 5322-compliant email pattern for client validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'
  const [statusFeedback, setStatusFeedback] = useState({
    title: '',
    message: '',
    code: null,
    recordData: null,
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const [backendStatus, setBackendStatus] = useState({
    online: false,
    dbStatus: 'checking',
  });

  useEffect(() => {
    let isMounted = true;
    const checkStatus = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.health);
        if (res.ok) {
          const data = await res.json();
          if (isMounted) {
            setBackendStatus({
              online: true,
              dbStatus: data?.database?.status || 'disconnected',
            });
          }
        } else {
          if (isMounted) setBackendStatus({ online: false, dbStatus: 'disconnected' });
        }
      } catch {
        if (isMounted) setBackendStatus({ online: false, dbStatus: 'disconnected' });
      }
    };

    checkStatus();
    return () => { isMounted = false; };
  }, []);

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) {
        error = 'Full name is required.';
      } else if (value.trim().length < 2) {
        error = 'Name must be at least 2 characters.';
      } else if (value.trim().length > 100) {
        error = 'Name cannot exceed 100 characters.';
      }
    } else if (name === 'email') {
      if (!value.trim()) {
        error = 'Email address is required.';
      } else if (value.trim().length > 254) {
        error = 'Email cannot exceed 254 characters.';
      } else if (!EMAIL_REGEX.test(value.trim())) {
        error = 'Please enter a valid email address (e.g., name@domain.com).';
      }
    } else if (name === 'message') {
      if (!value.trim()) {
        error = 'Message is required.';
      } else if (value.trim().length < 10) {
        error = `Message is too brief (${value.trim().length}/10 chars minimum).`;
      } else if (value.trim().length > 3000) {
        error = 'Message cannot exceed 3000 characters.';
      }
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const err = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const validateAll = () => {
    const newErrors = {};
    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const msgErr = validateField('message', formData.message);

    if (nameErr) newErrors.name = nameErr;
    if (emailErr) newErrors.email = emailErr;
    if (msgErr) newErrors.message = msgErr;

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setSubmitStatus(null);

    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      });

      if (result.success) {
        setSubmitStatus('success');
        setStatusFeedback({
          title: 'Message Persisted Successfully',
          message: result.message || 'Thank you! Your inquiry was safely written to the MongoDB database.',
          recordData: result.data,
          code: 'PERSISTED',
        });

        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setTouched({});
      } else {
        setSubmitStatus('error');

        if (result.errors) {
          setErrors((prev) => ({ ...prev, ...result.errors }));
        }

        setStatusFeedback({
          title: result.code === 'DB_UNAVAILABLE'
            ? 'MongoDB Service Standby'
            : result.code === 'NETWORK_ERROR'
            ? 'Backend Connection Offline'
            : 'Submission Rejected by Server',
          message: result.message || 'The server could not process your message.',
          code: result.code,
        });
      }
    } catch {
      setSubmitStatus('error');
      setStatusFeedback({
        title: 'Network Communication Error',
        message: 'Could not connect to the API server. Please verify Express is running.',
        code: 'CLIENT_EXCEPTION',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    const emailToCopy = 'madhav.garg@jklu.edu.in';
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(emailToCopy);
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleResetForm = () => {
    setSubmitStatus(null);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setTouched({});
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 px-4 sm:px-8 border-t border-[#252522]/10 dark:border-white/10 bg-[#F5F0E7] dark:bg-[#111317] bg-editorial-grain transition-colors duration-500 overflow-hidden"
    >
      {/* Decorative Atmospheric Glows */}
      <div className="pointer-events-none absolute top-1/3 left-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[450px] bg-[#C7A052]/10 dark:bg-[#C7A052]/5 blur-[100px] sm:blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[300px] sm:w-[550px] h-[300px] sm:h-[400px] bg-[#D9CBB7]/30 dark:bg-slate-800/10 blur-[100px] sm:blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-[#C7A052]/40 bg-[#FAF7F2] dark:bg-[#191C22] text-xs font-mono text-[#252522] dark:text-[#E6E4DE] mb-3 sm:mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C7A052] shrink-0" />
            <span className="font-semibold uppercase tracking-wider">Inquiries &amp; Collaboration</span>
            <span className="text-[#252522]/30 dark:text-white/30">&bull;</span>
            <span>Requirement 08</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] tracking-tight">
            Initiate a <span className="italic font-normal text-[#C7A052]">Dialogue</span>.
          </h2>

          <p className="text-sm sm:text-base lg:text-lg font-sans text-[#252522]/75 dark:text-[#E6E4DE]/75 mt-2.5 sm:mt-3 leading-relaxed">
            Have an engineering opportunity, architectural question, or research collaboration in mind? Leave a message below — submissions are validated and persisted to MongoDB via Express REST.
          </p>
        </div>

        {/* Main Grid: Left Column Details & Right Column Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Left Column: Editorial Contact Details (Span 5) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Primary Details Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/12 dark:border-white/10 shadow-editorial">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C7A052] font-semibold block mb-3 sm:mb-4">
                Direct Contact Channel
              </span>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2] mb-2 sm:mb-3">
                Madhav Garg
              </h3>

              <p className="text-xs sm:text-sm font-sans text-[#252522]/70 dark:text-[#E6E4DE]/70 leading-relaxed mb-5 sm:mb-6">
                Computer Science &amp; Engineering undergraduate at JK Lakshmipat University. Actively building full-stack distributed systems and high-fidelity web experiences.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#252522]/10 dark:border-white/10 text-xs font-mono">
                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#F5F0E7] dark:bg-[#121316] text-[#C7A052] shrink-0 border border-[#252522]/10 dark:border-white/10">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#252522]/50 dark:text-white/40 block text-[10px] uppercase">Based in</span>
                    <span className="font-semibold text-[#252522] dark:text-[#FAF7F2]">Jaipur, Rajasthan, India</span>
                  </div>
                </div>

                {/* Email Placeholder with Copy (Min-44px touch target) */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-[#F5F0E7]/80 dark:bg-[#121316]/80 border border-[#252522]/8 dark:border-white/5">
                  <div className="flex items-center gap-3 truncate mr-2">
                    <div className="p-1.5 rounded-lg bg-[#FAF7F2] dark:bg-[#191C22] text-[#C7A052] shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div className="truncate">
                      <span className="text-[#252522]/50 dark:text-white/40 block text-[10px] uppercase font-semibold">Institutional Contact</span>
                      <span className="text-[#252522] dark:text-[#FAF7F2] font-semibold truncate block text-xs">
                        madhav.garg@jklu.edu.in
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-11 h-11 rounded-lg text-[#252522]/60 dark:text-white/60 hover:text-[#C7A052] hover:bg-[#FAF7F2] dark:hover:bg-[#191C22] transition-colors shrink-0 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#C7A052]"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Response SLA */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#F5F0E7] dark:bg-[#121316] text-[#C7A052] shrink-0 border border-[#252522]/10 dark:border-white/10">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#252522]/50 dark:text-white/40 block text-[10px] uppercase">Turnaround</span>
                    <span className="font-semibold text-[#252522] dark:text-[#FAF7F2]">Response within 24 Hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* System Engine Health Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#FAF7F2]/80 dark:bg-[#191C22]/80 border border-[#252522]/10 dark:border-white/10 text-xs font-mono">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-[#252522] dark:text-[#FAF7F2] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C7A052]" />
                  <span>Backend Engine Status</span>
                </span>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] ${
                  backendStatus.online
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                    : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${backendStatus.online ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                  {backendStatus.online ? 'Online' : 'Standby'}
                </span>
              </div>

              <div className="space-y-2 text-[11px] text-[#252522]/70 dark:text-[#E6E4DE]/70">
                <div className="flex items-center justify-between">
                  <span>Express API Router:</span>
                  <span className="font-semibold text-[#252522] dark:text-[#FAF7F2]">POST /api/contact</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>MongoDB Atlas:</span>
                  <span className={`font-semibold ${
                    backendStatus.dbStatus === 'connected'
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-amber-600 dark:text-amber-400'
                  }`}>
                    {backendStatus.dbStatus === 'connected' ? 'Connected & Ready' : 'Standby / Connecting'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Validation Engine:</span>
                  <span className="text-[#252522] dark:text-[#FAF7F2]">Server-Side + Mongoose</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (Span 7) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/12 dark:border-white/10 shadow-editorial">

              {/* Top Form Header */}
              <div className="mb-6 sm:mb-8 pb-4 sm:pb-5 border-b border-[#252522]/10 dark:border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#252522] dark:text-[#FAF7F2]">
                    Send a Direct Message
                  </h3>
                  <span className="text-xs font-mono text-[#252522]/60 dark:text-[#E6E4DE]/60">
                    Fields marked with an asterisk (<span className="text-[#C7A052]">*</span>) are mandatory
                  </span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-2xl bg-[#F5F0E7] dark:bg-[#121316] text-[#C7A052] border border-[#252522]/10 dark:border-white/10 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>

              {/* Feedback Alert Banners */}
              <AnimatePresence mode="wait">
                {submitStatus === 'success' && (
                  <motion.div
                    key="success-banner"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 sm:mb-8 p-4 sm:p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200"
                    role="alert"
                    aria-live="polite"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                      <div className="flex-1 text-xs font-mono">
                        <strong className="text-sm font-serif font-bold block mb-1 text-emerald-800 dark:text-emerald-300">
                          {statusFeedback.title}
                        </strong>
                        <p className="font-sans leading-relaxed text-emerald-800/90 dark:text-emerald-200/90">
                          {statusFeedback.message}
                        </p>
                        {statusFeedback.recordData && (
                          <div className="mt-3 pt-2.5 border-t border-emerald-500/20 text-[11px] space-y-1">
                            <div>Persisted ID: <span className="font-bold">{statusFeedback.recordData.id}</span></div>
                            <div>Recorded Timestamp: <span>{new Date(statusFeedback.recordData.createdAt).toLocaleString()}</span></div>
                          </div>
                        )}
                        <button
                          type="button"
                          onClick={handleResetForm}
                          className="mt-4 inline-flex items-center gap-1.5 min-h-[44px] text-xs font-mono text-emerald-700 dark:text-emerald-300 font-semibold underline hover:no-underline"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>Send another message</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    key="error-banner"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 sm:mb-8 p-4 sm:p-5 rounded-2xl bg-amber-500/10 dark:bg-amber-950/20 border border-amber-500/30 text-amber-950 dark:text-amber-200"
                    role="alert"
                    aria-live="polite"
                  >
                    <div className="flex items-start gap-3">
                      {statusFeedback.code === 'DB_UNAVAILABLE' ? (
                        <Database className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-rose-500 dark:text-rose-400 mt-0.5 shrink-0" />
                      )}
                      <div className="flex-1 text-xs font-mono">
                        <strong className="text-sm font-serif font-bold block mb-1 text-amber-900 dark:text-amber-300">
                          {statusFeedback.title}
                        </strong>
                        <p className="font-sans leading-relaxed text-amber-900/90 dark:text-amber-200/90">
                          {statusFeedback.message}
                        </p>
                        <div className="mt-3 pt-2 border-t border-amber-500/20 text-[11px] text-amber-800/80 dark:text-amber-300/80">
                          Note: Your message content has been retained in the form below so you do not lose any typed information.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Element */}
              <form onSubmit={handleSubmit} noValidate className="space-y-5 sm:space-y-6">

                {/* 1. Name Input */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-medium text-[#252522] dark:text-[#FAF7F2]"
                    >
                      Your Name <span className="text-[#C7A052]">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-[#252522]/50 dark:text-white/40">
                      {formData.name.length}/100
                    </span>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#252522]/40 dark:text-white/40">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      placeholder="e.g. Eleanor Vance"
                      aria-required="true"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className={`w-full min-h-[44px] pl-10 pr-4 py-3 rounded-2xl bg-[#F5F0E7]/80 dark:bg-[#121316]/80 border transition-all text-sm font-sans text-[#252522] dark:text-[#FAF7F2] placeholder-[#252522]/40 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#C7A052] disabled:opacity-60 disabled:cursor-not-allowed ${
                        errors.name
                          ? 'border-rose-500 dark:border-rose-400 focus:ring-rose-500'
                          : 'border-[#252522]/15 dark:border-white/10 hover:border-[#C7A052]'
                      }`}
                    />
                  </div>

                  {errors.name && (
                    <motion.div
                      id="contact-name-error"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1.5 mt-2 text-xs font-mono text-rose-600 dark:text-rose-400"
                      role="alert"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </motion.div>
                  )}
                </div>

                {/* 2. Email Input */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-medium text-[#252522] dark:text-[#FAF7F2]"
                    >
                      Email Address <span className="text-[#C7A052]">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-[#252522]/50 dark:text-white/40">
                      RFC 5322 Validated
                    </span>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#252522]/40 dark:text-white/40">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      placeholder="e.g. eleanor@example.com"
                      aria-required="true"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className={`w-full min-h-[44px] pl-10 pr-4 py-3 rounded-2xl bg-[#F5F0E7]/80 dark:bg-[#121316]/80 border transition-all text-sm font-sans text-[#252522] dark:text-[#FAF7F2] placeholder-[#252522]/40 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#C7A052] disabled:opacity-60 disabled:cursor-not-allowed ${
                        errors.email
                          ? 'border-rose-500 dark:border-rose-400 focus:ring-rose-500'
                          : 'border-[#252522]/15 dark:border-white/10 hover:border-[#C7A052]'
                      }`}
                    />
                  </div>

                  {errors.email && (
                    <motion.div
                      id="contact-email-error"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1.5 mt-2 text-xs font-mono text-rose-600 dark:text-rose-400"
                      role="alert"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </motion.div>
                  )}
                </div>

                {/* 3. Message Textarea */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono font-medium text-[#252522] dark:text-[#FAF7F2]"
                    >
                      Message Content <span className="text-[#C7A052]">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-[#252522]/50 dark:text-white/40">
                      {formData.message.length} / 3000 chars (min 10)
                    </span>
                  </div>

                  <div className="relative">
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      placeholder="Share project specifications, architectural inquiries, or collaboration proposals..."
                      aria-required="true"
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className={`w-full min-h-[120px] p-4 rounded-2xl bg-[#F5F0E7]/80 dark:bg-[#121316]/80 border transition-all text-sm font-sans text-[#252522] dark:text-[#FAF7F2] placeholder-[#252522]/40 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#C7A052] disabled:opacity-60 disabled:cursor-not-allowed resize-y ${
                        errors.message
                          ? 'border-rose-500 dark:border-rose-400 focus:ring-rose-500'
                          : 'border-[#252522]/15 dark:border-white/10 hover:border-[#C7A052]'
                      }`}
                    />
                  </div>

                  {errors.message && (
                    <motion.div
                      id="contact-message-error"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1.5 mt-2 text-xs font-mono text-rose-600 dark:text-rose-400"
                      role="alert"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </motion.div>
                  )}
                </div>

                {/* Submit Action Button (Min-48px touch target) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 min-h-[48px] rounded-full bg-[#252522] dark:bg-white text-[#F5F0E7] dark:text-[#111317] font-sans font-medium text-sm hover:bg-[#C7A052] dark:hover:bg-[#C7A052] dark:hover:text-white transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#C7A052] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#C7A052]" />
                        <span>Transmitting to Express REST API...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-4 h-4 text-[#C7A052] group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-[11px] font-mono text-[#252522]/50 dark:text-white/40 mt-3 px-1">
                    <span>Rate protected: Max 30 req/15min</span>
                    <span>Sanitized &amp; Persisted with Mongoose</span>
                  </div>
                </div>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
