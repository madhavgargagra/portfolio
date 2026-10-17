/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Visual Identity (Artistic Editorial)
        ivory: {
          DEFAULT: '#F5F0E7',
          light: '#FAF7F2',
          dark: '#EAE2D5',
        },
        champagne: {
          DEFAULT: '#C7A052',
          light: '#E2BF7D',
          dark: '#A68239',
          muted: 'rgba(199, 160, 82, 0.18)',
        },
        charcoal: {
          DEFAULT: '#252522',
          muted: '#5A5A54',
          subtle: '#8C8C84',
          faint: '#C2C2BA',
        },
        sand: {
          DEFAULT: '#D9CBB7',
          light: '#E6DCCD',
          dark: '#C5B49D',
          surface: 'rgba(217, 203, 183, 0.45)',
        },
        // Character Theme Accents (Harmonized with ivory & champagne)
        theme: {
          iron: {
            primary: '#8B1E24',
            light: '#A62B32',
            dark: '#601217',
            gold: '#C7A052',
            bg: '#F3ECE4',
            surface: 'rgba(139, 30, 36, 0.06)',
            border: 'rgba(139, 30, 36, 0.2)',
          },
          batman: {
            primary: '#2B2D33',
            light: '#3E414A',
            dark: '#1B1C20',
            silver: '#9CA3AF',
            bg: '#ECE9E2',
            surface: 'rgba(43, 45, 51, 0.06)',
            border: 'rgba(43, 45, 51, 0.2)',
          },
          hulk: {
            primary: '#264E36',
            light: '#35694A',
            dark: '#173322',
            sage: '#8F9F88',
            bg: '#ECF0EA',
            surface: 'rgba(38, 78, 54, 0.06)',
            border: 'rgba(38, 78, 54, 0.2)',
          },
          superman: {
            primary: '#1D4570',
            light: '#285C94',
            dark: '#122D4B',
            crimson: '#A62626',
            coolwhite: '#F0F4F8',
            bg: '#EAF0F6',
            surface: 'rgba(29, 69, 112, 0.06)',
            border: 'rgba(29, 69, 112, 0.2)',
          },
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'editorial': '0 20px 40px -15px rgba(37, 37, 34, 0.07)',
        'editorial-hover': '0 30px 60px -20px rgba(37, 37, 34, 0.12)',
        'paper': '0 1px 3px rgba(37, 37, 34, 0.05), 0 10px 25px -5px rgba(37, 37, 34, 0.04)',
        'character': '0 25px 50px -12px rgba(37, 37, 34, 0.15)',
      },
      letterSpacing: {
        'cinematic': '0.2em',
        'editorial': '0.08em',
      },
    },
  },
  plugins: [],
};
