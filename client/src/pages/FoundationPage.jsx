import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink, 
  Server, 
  CheckCircle2, 
  ArrowUpRight,
  Code2
} from 'lucide-react';

import { API_ENDPOINTS } from '../config/api.js';

export default function FoundationPage() {
  const [apiStatus, setApiStatus] = useState({ checking: true, live: false, data: null, error: null });

  useEffect(() => {
    // Quick test against server health endpoint
    const checkHealth = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.health, { method: 'GET' });
        if (response.ok) {
          const data = await response.json();
          setApiStatus({ checking: false, live: true, data, error: null });
        } else {
          setApiStatus({ checking: false, live: false, data: null, error: `HTTP ${response.status}` });
        }
      } catch (err) {
        setApiStatus({ checking: false, live: false, data: null, error: 'Server offline / not started' });
      }
    };

    checkHealth();
  }, []);

  return (
    <div className="relative min-h-screen bg-canvas text-slate-100 flex flex-col justify-between overflow-x-hidden">
      {/* Subtle background ambient glow gradients */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent-blue/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute top-1/2 -right-40 w-[500px] h-[400px] bg-accent-violet/10 blur-[140px] rounded-full" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-canvas/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-accent-blue to-accent-violet flex items-center justify-center text-canvas font-black font-mono shadow-glow-blue/50">
              M
            </div>
            <div>
              <span className="font-bold text-slate-100 text-sm tracking-tight block">madhav.dev</span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider block uppercase">Portfolio Foundation</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Step 1: Foundation Active
            </span>
          </div>
        </div>
      </header>

      {/* Main Content: Bento Grid Demonstration */}
      <main className="max-w-6xl mx-auto px-6 py-12 flex-1 w-full">
        {/* Intro Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
            <span>MERN Stack Architecture & Design System Setup</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            Madhav's <span className="bg-gradient-to-r from-accent-blue via-sky-300 to-accent-violet bg-clip-text text-transparent">Developer Portfolio</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Preview of the design system foundation: deep slate surfaces, restrained electric accents, accessible contrast, and an extensible bento-grid architecture ready for Step 2.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Identity & Core Role (Span 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 bento-card p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-medium text-accent-blue tracking-wide uppercase">Core Identity</span>
                <Code2 className="w-5 h-5 text-slate-500" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">
                Full-Stack Developer & MERN Architect
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Building scalable, responsive, and performance-driven web products. Designed with modern aesthetics, clean API boundaries, and strict type/schema discipline.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2 items-center text-xs text-slate-400 font-mono">
              <span className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/10">Location: Jaipur / India</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/10">Status: Available for Opportunities</span>
            </div>
          </motion.div>

          {/* Card 2: Backend Architecture & Health Status */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-1 lg:col-span-2 bento-card p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-medium text-accent-violet tracking-wide uppercase">API Health Endpoint</span>
                <Server className="w-5 h-5 text-slate-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                Express.js REST Engine
              </h3>
              <p className="text-slate-400 text-xs mb-3 font-mono">
                GET /api/health &bull; Port 5000
              </p>

              <div className="p-3 rounded-lg bg-black/40 border border-white/5 font-mono text-xs mb-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`h-2 w-2 rounded-full ${apiStatus.live ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                  <span className="text-slate-300 font-semibold">
                    {apiStatus.checking ? 'Connecting...' : apiStatus.live ? 'Live & Connected' : 'Server Offline / Standby'}
                  </span>
                </div>
                <p className="text-slate-500 text-[11px] truncate">
                  {apiStatus.data ? JSON.stringify(apiStatus.data) : (apiStatus.error || 'Start server with npm run dev')}
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-500 flex items-center justify-between">
              <span>Ready for MongoDB Mongoose integration</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400/80" />
            </div>
          </motion.div>

          {/* Card 3: Tech Stack Tokens */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 lg:col-span-2 bento-card p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-medium text-sky-400 tracking-wide uppercase">Stack Foundation</span>
                <Cpu className="w-5 h-5 text-slate-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Modern Web Tooling</h3>
              
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded bg-white/[0.02] border border-white/5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>React 19 + Vite</span>
                </div>
                <div className="p-2.5 rounded bg-white/[0.02] border border-white/5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-400" />
                  <span>Tailwind CSS</span>
                </div>
                <div className="p-2.5 rounded bg-white/[0.02] border border-white/5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  <span>Framer Motion</span>
                </div>
                <div className="p-2.5 rounded bg-white/[0.02] border border-white/5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Node + Express</span>
                </div>
                <div className="p-2.5 rounded bg-white/[0.02] border border-white/5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span>React Router 7</span>
                </div>
                <div className="p-2.5 rounded bg-white/[0.02] border border-white/5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>MongoDB Ready</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-500 font-mono">
              Pure JavaScript architecture &bull; Zero unnecessary bloat
            </div>
          </motion.div>

          {/* Card 4: Design System Palette Swatches */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="md:col-span-1 lg:col-span-2 bento-card p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-medium text-accent-blue tracking-wide uppercase">Design Direction</span>
                <Layers className="w-5 h-5 text-slate-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Aesthetic & Contrast Palette</h3>
              <p className="text-slate-400 text-xs mb-4">
                Tailored near-black canvas with restrained electric luminance and subtle border radii.
              </p>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded bg-canvas-subtle border border-white/5 text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded bg-[#060913] border border-white/20" />
                    <span className="font-mono text-slate-300">Canvas Surface</span>
                  </div>
                  <span className="text-slate-500 font-mono text-[11px]">#060913</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded bg-canvas-subtle border border-white/5 text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded bg-accent-blue shadow-glow-blue" />
                    <span className="font-mono text-slate-300">Electric Blue</span>
                  </div>
                  <span className="text-slate-500 font-mono text-[11px]">#38bdf8</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded bg-canvas-subtle border border-white/5 text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded bg-accent-violet shadow-glow-violet" />
                    <span className="font-mono text-slate-300">Electric Violet</span>
                  </div>
                  <span className="text-slate-500 font-mono text-[11px]">#a855f7</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>Dark Mode Default</span>
              <span>Class toggle ready</span>
            </div>
          </motion.div>

        </div>

        {/* Roadmap Banner for Next Steps */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 p-5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-white">Foundation Ready for Step 2 Implementation</h4>
              <p className="text-xs text-slate-400">
                Next phase will integrate the Hero Section, About Me, Categorized Skills, Project Showcase, Experience Timeline, and the Mongoose Contact API.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-slate-400 shrink-0">
            <Terminal className="w-4 h-4 text-accent-blue" />
            <span>Clean Architecture &bull; No Placeholder Bloat</span>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-6 px-6 text-center text-xs font-mono text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>&copy; {new Date().getFullYear()} Madhav Portfolio. MERN Stack Architecture.</span>
          <span className="text-slate-600">Client :5173 &bull; Server :5000</span>
        </div>
      </footer>
    </div>
  );
}
