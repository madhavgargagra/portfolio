import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import Logo from './Logo.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Project Showcase', href: '#showcase' },
    { label: 'About & Philosophy', href: '#about' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#F5F0E7]/90 backdrop-blur-md border-b border-[#252522]/10 shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Top-Left Logo */}
        <a href="#hero" className="outline-none focus:ring-2 focus:ring-[#C7A052] rounded-lg">
          <Logo />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-sans font-medium text-[#252522]/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 transition-colors hover:text-[#C7A052] focus:outline-none focus:text-[#C7A052]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#showcase"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C7A052] bg-[#FAF7F2] text-xs font-mono font-medium text-[#252522] hover:bg-[#C7A052] hover:text-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C7A052]"
          >
            <Compass className="w-3.5 h-3.5 text-[#C7A052] group-hover:text-white" />
            <span>Explore Showcase</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-lg text-[#252522] hover:bg-[#FAF7F2] border border-[#252522]/10 focus:outline-none focus:ring-2 focus:ring-[#C7A052]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF7F2] border-b border-[#252522]/10 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4 font-sans text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-[#252522] hover:text-[#C7A052] border-b border-[#252522]/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#showcase"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-[#C7A052] bg-[#F5F0E7] text-xs font-mono text-[#252522] mt-2"
              >
                <span>Explore Showcase</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
