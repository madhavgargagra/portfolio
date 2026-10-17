import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Compass, Sun, Moon } from 'lucide-react';
import Logo from './Logo.jsx';
import { useTheme } from '../hooks/useTheme.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F0E7]/92 dark:bg-[#111317]/92 backdrop-blur-md border-b border-[#252522]/10 dark:border-white/10 shadow-xs py-2 sm:py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Top-Left Logo with Accessible Target */}
        <Link
          to="/"
          aria-label="Madhav Garg Portfolio Homepage"
          className="outline-none focus:ring-2 focus:ring-[#C7A052] rounded-xl shrink-0"
        >
          <Logo />
        </Link>

        {/* Desktop Nav Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-sans font-medium text-[#252522]/80 dark:text-[#E6E4DE]/80"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative py-2 transition-colors focus:outline-none focus:text-[#C7A052] ${
                  isActive
                    ? 'text-[#C7A052] font-semibold'
                    : 'text-[#252522]/80 dark:text-[#E6E4DE]/80 hover:text-[#C7A052] dark:hover:text-[#C7A052]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C7A052] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Right Actions: Theme Toggle & Explore Projects CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Dark / Light Mode Toggle Button (Accessible min 44x44px target) */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to Ivory Light Mode' : 'Switch to Dark Mode'}
            className="w-11 h-11 rounded-full border border-[#252522]/15 dark:border-white/15 bg-[#FAF7F2] dark:bg-[#191C22] text-[#252522] dark:text-[#E6E4DE] hover:border-[#C7A052] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C7A052] flex items-center justify-center shrink-0 cursor-pointer"
            title={isDark ? 'Activate Ivory Light Mode' : 'Activate Dark Mode'}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-[#C7A052]" />
            ) : (
              <Moon className="w-4 h-4 text-[#252522]" />
            )}
          </button>

          {/* Explore Projects CTA */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full border border-[#C7A052] bg-[#FAF7F2] dark:bg-[#191C22] text-xs font-mono font-medium text-[#252522] dark:text-[#E6E4DE] hover:bg-[#C7A052] hover:text-white dark:hover:bg-[#C7A052] dark:hover:text-white transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#C7A052]"
          >
            <Compass className="w-3.5 h-3.5 text-[#C7A052] group-hover:text-white" />
            <span>Explore Projects</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Controls (Theme Toggle + Menu Toggle, both >= 44x44px) */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to Ivory Light Mode' : 'Switch to Dark Mode'}
            className="w-11 h-11 rounded-xl border border-[#252522]/15 dark:border-white/15 bg-[#FAF7F2] dark:bg-[#191C22] text-[#252522] dark:text-[#E6E4DE] flex items-center justify-center shrink-0 focus:outline-none focus:ring-2 focus:ring-[#C7A052] cursor-pointer"
            title={isDark ? 'Activate Ivory Light Mode' : 'Activate Dark Mode'}
          >
            {isDark ? <Sun className="w-4 h-4 text-[#C7A052]" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="w-11 h-11 rounded-xl text-[#252522] dark:text-[#E6E4DE] bg-[#FAF7F2] dark:bg-[#191C22] border border-[#252522]/15 dark:border-white/15 flex items-center justify-center shrink-0 focus:outline-none focus:ring-2 focus:ring-[#C7A052] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#C7A052]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#FAF7F2] dark:bg-[#191C22] border-b border-[#252522]/10 dark:border-white/10 px-4 sm:px-6 py-4 overflow-hidden shadow-lg"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-1 font-sans text-sm">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `min-h-[44px] flex items-center px-3 py-2 rounded-lg transition-colors border-b border-[#252522]/5 dark:border-white/5 ${
                      isActive
                        ? 'text-[#C7A052] font-semibold bg-[#C7A052]/10'
                        : 'text-[#252522] dark:text-[#E6E4DE] hover:text-[#C7A052] dark:hover:text-[#C7A052]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-2">
                <Link
                  to="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 w-full min-h-[44px] py-2.5 rounded-full border border-[#C7A052] bg-[#F5F0E7] dark:bg-[#121316] text-xs font-mono text-[#252522] dark:text-[#E6E4DE] hover:bg-[#C7A052] hover:text-white dark:hover:bg-[#C7A052] dark:hover:text-white transition-all shadow-xs"
                >
                  <Compass className="w-3.5 h-3.5 text-[#C7A052]" />
                  <span>Explore Projects</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
