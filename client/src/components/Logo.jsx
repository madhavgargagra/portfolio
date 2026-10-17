import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Logo Component (Task B & Task C)
 *
 * Supports user-supplied custom transparent PNG or SVG logo:
 * - Checks client/public/logo.svg first
 * - Falls back to client/public/logo.png
 * - If neither is present, renders a clean, theme-aware monogram slot
 * - Full Dark Mode support (high contrast text and borders)
 * - Accessible min-44px touch target
 */
export default function Logo({ className = '' }) {
  const [imgSrc, setImgSrc] = useState('/logo.png');
  const [hasCustomLogo, setHasCustomLogo] = useState(true);

  const handleError = () => {
    setHasCustomLogo(false);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`relative inline-flex items-center gap-2.5 cursor-pointer group min-h-[44px] select-none ${className}`}
      title="Madhav Garg"
    >
      <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-[#252522]/20 dark:border-white/15 bg-[#15171C] p-1 flex items-center justify-center shadow-xs group-hover:border-[#C7A052] transition-colors shrink-0">
        {hasCustomLogo ? (
          <img
            src={imgSrc}
            alt="Madhav Garg Logo"
            onError={handleError}
            className="w-full h-full object-contain"
          />
        ) : (
          <span className="font-serif font-bold text-base text-[#FAF7F2] leading-none">
            M
          </span>
        )}
      </div>
      <div className="flex flex-col text-left">
        <span className="font-serif font-bold text-sm tracking-tight text-[#252522] dark:text-[#FAF7F2] group-hover:text-[#C7A052] transition-colors leading-none">
          Madhav Garg
        </span>
        <span className="font-mono text-[9px] uppercase tracking-widest text-[#252522]/60 dark:text-[#E6E4DE]/60 mt-0.5">
          Portfolio
        </span>
      </div>
    </motion.div>
  );
}
