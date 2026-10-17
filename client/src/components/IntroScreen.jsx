import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme.js';

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
 * Premium, logo-only loading intro experience:
 * - Shows ONLY the original logo (no text, labels, spinners, or progress bars)
 * - Substantially larger, responsive, centered horizontally and vertically
 * - Light theme: warm ivory background (#F5F0E7) with dark charcoal logo treatment
 * - Dark theme: dark background (#111317) with luminous light logo treatment
 * - Preserves client/public/logo.png byte-for-byte using CSS filters
 * - Organic expansion animation: gently expands three strokes outward then settles back
 * - Auto-dismisses after minimum display duration (1.5s), click/tap to skip
 * - Safe session storage, unmount cleanup, duplicate-dismissal protection, and reduced-motion support
 */
export default function IntroScreen({ onComplete }) {
  const { isDark: themeIsDark } = useTheme();
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark') || themeIsDark;
    }
    return themeIsDark;
  });

  const [visible, setVisible] = useState(true);
  const [logoAvailable, setLogoAvailable] = useState(false);
  const [logoSrc, setLogoSrc] = useState(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const dismissedRef = useRef(false);

  // Sync active theme state with DOM / useTheme hook
  useEffect(() => {
    if (typeof document !== 'undefined') {
      setIsDark(document.documentElement.classList.contains('dark') || themeIsDark);
    } else {
      setIsDark(themeIsDark);
    }
  }, [themeIsDark]);

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
    let testPng = null;

    // 3. Proactively verify whether client/public/logo.png exists and loads
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

    // 4. Minimum display duration timer: auto-dismisses after 1.5s
    const timer = setTimeout(() => {
      if (mounted) {
        dismissIntro();
      }
    }, 1500);

    return () => {
      mounted = false;
      clearTimeout(timer);
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
            transition: { duration: reducedMotion ? 0.1 : 0.45, ease: [0.16, 1, 0.3, 1] },
          }}
          onClick={dismissIntro}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#F5F0E7] dark:bg-[#111317] transition-colors duration-500 cursor-pointer select-none px-6"
          aria-label="Loading Intro (Click or tap to skip)"
          role="dialog"
          aria-modal="true"
        >
          {/* Subtle warm champagne radial aura */}
          <div className="pointer-events-none absolute w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full bg-[#C7A052]/10 dark:bg-[#C7A052]/5 blur-3xl" />

          {/* Centered, Substantially Larger Logo Container */}
          <motion.div
            initial={reducedMotion ? false : { scale: 0.92, opacity: 0 }}
            animate={
              reducedMotion
                ? { scale: 1, opacity: 1 }
                : {
                    scale: [0.92, 1.07, 1],
                    opacity: [0, 1, 1],
                  }
            }
            transition={
              reducedMotion
                ? { duration: 0 }
                : {
                    duration: 1.4,
                    times: [0, 0.6, 1],
                    ease: [0.16, 1, 0.3, 1],
                  }
            }
            className="relative flex items-center justify-center w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 max-w-[85vw] max-h-[50vh] aspect-square"
          >
            {logoAvailable && logoSrc ? (
              <motion.img
                src={logoSrc}
                alt="Madhav Garg Logo"
                animate={
                  reducedMotion
                    ? undefined
                    : {
                        filter: isDark
                          ? [
                              'brightness(0.9) drop-shadow(0 0 0px rgba(199,160,82,0))',
                              'brightness(1.2) drop-shadow(0 0 35px rgba(199,160,82,0.35))',
                              'brightness(1) drop-shadow(0 0 15px rgba(199,160,82,0.18))',
                            ]
                          : [
                              'brightness(0) opacity(0.7) drop-shadow(0 0 0px rgba(37,37,34,0))',
                              'brightness(0) opacity(0.96) drop-shadow(0 8px 24px rgba(37,37,34,0.18))',
                              'brightness(0) opacity(0.88) drop-shadow(0 4px 12px rgba(37,37,34,0.1))',
                            ],
                      }
                }
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : {
                        duration: 1.4,
                        times: [0, 0.6, 1],
                        ease: [0.16, 1, 0.3, 1],
                      }
                }
                className={`w-full h-full object-contain select-none pointer-events-none ${
                  isDark
                    ? 'drop-shadow-[0_0_20px_rgba(199,160,82,0.2)]'
                    : 'brightness-0 opacity-[0.88] drop-shadow-[0_4px_16px_rgba(37,37,34,0.12)]'
                }`}
              />
            ) : (
              /* Clean neutral fallback if logo asset fails to load */
              <div
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl border-2 border-dashed border-[#C7A052]/50 dark:border-[#C7A052]/35 flex items-center justify-center p-4"
                aria-hidden="true"
              >
                <div className="w-8 h-8 rounded-full border-2 border-dashed border-[#C7A052]/60 dark:border-[#C7A052]/40" />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
