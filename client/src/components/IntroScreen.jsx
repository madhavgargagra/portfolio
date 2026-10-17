import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Safe sessionStorage helpers for restricted browser environments
 * (e.g., incognito modes, sandboxed iframes, disabled third-party storage).
 */
const getSessionItem = (key) => {
  try {
    return typeof window !== 'undefined' && window.sessionStorage
      ? window.sessionStorage.getItem(key)
      : null;
  } catch {
    return null;
  }
};

const setSessionItem = (key, value) => {
  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      window.sessionStorage.setItem(key, value);
    }
  } catch {
    // Silently ignore storage errors in restricted contexts
  }
};

/**
 * IntroScreen Component
 *
 * Reliable logo-only intro experience:
 * - Warm ivory baseline (#F5F0E7 / dark mode #111317)
 * - Responsive centered logo slot
 * - Subtle entrance and exit animations powered by Framer Motion
 * - Respects 'prefers-reduced-motion' by minimizing animations rather than skipping
 * - Never gets stuck or blocks the UI if the logo asset is missing
 * - Runs once per browser session via safe sessionStorage helper
 * - Guaranteed single-execution dismissal and auto-dismiss cleanup
 *
 * ----------------------------------------------------------------------------------
 * LOGO ASSET INTEGRATION GUIDE:
 * To use your original logo, save your transparent SVG or PNG at:
 *   -> client/public/logo.svg  (Preferred vector format)
 *   -> client/public/logo.png  (High-resolution raster format)
 * The intro screen and navbar will automatically detect and render it.
 * If the file is not yet present, this component presents a clean neutral slot
 * without initials or invented branding.
 * ----------------------------------------------------------------------------------
 */
export default function IntroScreen({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [logoAvailable, setLogoAvailable] = useState(false);
  const [logoSrc, setLogoSrc] = useState(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const dismissedRef = useRef(false);

  const dismissIntro = useCallback(() => {
    if (dismissedRef.current) return;
    dismissedRef.current = true;
    setSessionItem('portfolio_intro_shown', 'true');
    setVisible(false);
    if (typeof onComplete === 'function') {
      onComplete();
    }
  }, [onComplete]);

  useEffect(() => {
    // 1. Check if user already saw intro in current session
    if (getSessionItem('portfolio_intro_shown')) {
      dismissIntro();
      return;
    }

    // 2. Check prefers-reduced-motion safely
    try {
      if (typeof window !== 'undefined' && window.matchMedia) {
        setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      }
    } catch {
      // Gracefully continue with default motion settings
    }

    let mounted = true;
    let testSvg = null;
    let testPng = null;

    // 3. Proactively test whether client/public/logo.svg or logo.png exists
    testSvg = new Image();
    testSvg.src = '/logo.svg';
    testSvg.onload = () => {
      if (!mounted) return;
      setLogoSrc('/logo.svg');
      setLogoAvailable(true);
    };
    testSvg.onerror = () => {
      if (!mounted) return;
      testPng = new Image();
      testPng.src = '/logo.png';
      testPng.onload = () => {
        if (!mounted) return;
        setLogoSrc('/logo.png');
        setLogoAvailable(true);
      };
      testPng.onerror = () => {
        if (!mounted) return;
        setLogoAvailable(false);
        setLogoSrc(null);
      };
    };

    // 4. Guaranteed 1.6-second auto-dismiss timer: never hangs the app
    const timer = setTimeout(() => {
      if (mounted) {
        dismissIntro();
      }
    }, 1600);

    return () => {
      mounted = false;
      clearTimeout(timer);
      if (testSvg) {
        testSvg.onload = null;
        testSvg.onerror = null;
      }
      if (testPng) {
        testPng.onload = null;
        testPng.onerror = null;
      }
    };
  }, [dismissIntro]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: reducedMotion ? 0.1 : 0.5, ease: [0.16, 1, 0.3, 1] },
          }}
          onClick={dismissIntro}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F5F0E7] dark:bg-[#111317] transition-colors duration-300 cursor-pointer select-none px-6"
          aria-label="Portfolio Loading Intro (Click or tap to skip)"
        >
          {/* Subtle warm champagne radial aura */}
          <div className="pointer-events-none absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#C7A052]/10 dark:bg-[#C7A052]/5 blur-3xl" />

          {/* Centered Logo Slot */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.92, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center"
          >
            {/* Logo Slot Frame with responsive dimensions */}
            <div
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border border-[#252522]/15 dark:border-white/15 bg-[#FAF7F2] dark:bg-[#191C22] shadow-editorial flex items-center justify-center p-3.5 transition-colors overflow-hidden"
              title={logoAvailable ? 'Madhav Garg Logo' : 'Logo Asset Slot: Expecting client/public/logo.svg or logo.png'}
            >
              {logoAvailable && logoSrc ? (
                <img
                  src={logoSrc}
                  alt="Madhav Garg Logo"
                  className="w-full h-full object-contain"
                />
              ) : (
                /* Clean neutral placeholder with no initials or invented branding */
                <div
                  className="w-full h-full rounded-xl border border-dashed border-[#C7A052]/50 dark:border-[#C7A052]/35 flex items-center justify-center p-2"
                  aria-hidden="true"
                >
                  <div className="w-4 h-4 rounded-full border-2 border-dashed border-[#C7A052]/60 dark:border-[#C7A052]/40" />
                </div>
              )}
            </div>

            {/* Subtle Editorial Label */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reducedMotion ? 0 : 0.6,
                delay: reducedMotion ? 0 : 0.2,
              }}
              className="mt-5 text-center"
            >
              <h1 className="font-serif font-bold text-lg sm:text-xl text-[#252522] dark:text-[#FAF7F2] tracking-tight">
                Madhav Garg
              </h1>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#C7A052] font-semibold mt-1 block">
                Portfolio &bull; 2026
              </span>
            </motion.div>

            {/* Subtle Progress Indicator Bar */}
            <div className="w-24 sm:w-32 h-0.5 bg-[#252522]/10 dark:bg-white/10 rounded-full mt-6 overflow-hidden">
              <motion.div
                initial={reducedMotion ? { width: '100%' } : { width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: reducedMotion ? 0 : 1.4, ease: 'easeInOut' }}
                className="h-full bg-[#C7A052]"
              />
            </div>
          </motion.div>

          {/* Accessible Skip Cue */}
          <span className="absolute bottom-6 font-mono text-[10px] text-[#252522]/40 dark:text-white/30 tracking-widest uppercase">
            Click to continue
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
