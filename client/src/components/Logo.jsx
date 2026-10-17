import React, { useState } from 'react';
import { motion } from 'framer-motion';
import placeholderLogo from '../assets/logo-placeholder.svg';

/**
 * Logo Component
 * 
 * Supports user-supplied custom transparent PNG or SVG logo.
 * Checks for '/logo.png' or '/logo.svg' in public/ or uses placeholderLogo.
 * Never throws an error or blocks page render.
 */
export default function Logo({ className = '' }) {
  const [imgSrc, setImgSrc] = useState('/logo.svg'); // Check public/logo.svg first
  const [triedPng, setTriedPng] = useState(false);
  const [usingPlaceholder, setUsingPlaceholder] = useState(false);

  const handleError = () => {
    if (!triedPng) {
      setTriedPng(true);
      setImgSrc('/logo.png'); // Try public/logo.png next
    } else {
      setUsingPlaceholder(true);
      setImgSrc(placeholderLogo); // Graceful fallback to verified placeholder
    }
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`relative inline-flex items-center gap-2 cursor-pointer group ${className}`}
      title={usingPlaceholder ? 'Placeholder Logo: Supply your real logo at client/public/logo.svg or logo.png' : 'Madhav Garg'}
    >
      <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-[#252522]/15 bg-[#FAF7F2] p-1 flex items-center justify-center shadow-sm group-hover:border-[#C7A052] transition-colors">
        <img 
          src={imgSrc} 
          alt="Madhav Garg Logo" 
          onError={handleError}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col text-left">
        <span className="font-serif font-bold text-sm tracking-tight text-[#252522] leading-none">
          Madhav Garg
        </span>
        <span className="font-mono text-[9px] uppercase tracking-widest text-[#252522]/60 mt-0.5">
          Portfolio
        </span>
      </div>
    </motion.div>
  );
}
