import React, { useState, useEffect } from 'react';
import { ArrowUp, Server, ShieldCheck } from 'lucide-react';
import Logo from './Logo.jsx';
import { API_ENDPOINTS } from '../config/api.js';

export default function Footer() {
  const [serverHealth, setServerHealth] = useState({ checked: false, online: false });

  useEffect(() => {
    const testHealth = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.health);
        if (res.ok) {
          setServerHealth({ checked: true, online: true });
        } else {
          setServerHealth({ checked: true, online: false });
        }
      } catch (e) {
        setServerHealth({ checked: true, online: false });
      }
    };
    testHealth();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#252522]/10 dark:border-white/10 bg-[#FAF7F2] dark:bg-[#111317] py-14 px-6 sm:px-8 text-xs font-mono text-[#252522]/70 dark:text-[#E6E4DE]/70 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* Left: Brand Identity */}
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="text-[11px] text-[#252522]/60 dark:text-[#E6E4DE]/50 max-w-sm mt-1">
            Full Stack Developer Portfolio for Madhav Garg. Built with React 19, Express REST, and Tailwind CSS.
          </p>
        </div>

        {/* Center: System & API Status */}
        <div className="flex flex-col gap-1.5 p-3.5 rounded-2xl bg-[#F5F0E7] dark:bg-[#191C22] border border-[#252522]/10 dark:border-white/10">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${serverHealth.online ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
            <span className="font-semibold text-[#252522] dark:text-[#FAF7F2]">
              Backend Engine: {serverHealth.online ? 'Express API Active (:5000)' : 'Express API Standby'}
            </span>
          </div>
          <span className="text-[10px] text-[#252522]/50 dark:text-[#E6E4DE]/40">
            Endpoint: GET /api/health &bull; Monorepo Architecture
          </span>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex flex-col md:items-end gap-3">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#C7A052] hover:text-[#252522] dark:hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
          <div className="text-[11px] text-[#252522]/60 dark:text-[#E6E4DE]/40">
            &copy; {new Date().getFullYear()} Madhav Garg &bull; Full Stack MERN Assignment
          </div>
        </div>

      </div>
    </footer>
  );
}
