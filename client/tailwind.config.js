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
        canvas: {
          DEFAULT: '#060913',
          subtle: '#0c1222',
          surface: '#111827',
          card: 'rgba(15, 23, 42, 0.7)',
        },
        accent: {
          blue: {
            DEFAULT: '#38bdf8',
            hover: '#0ea5e9',
            muted: 'rgba(56, 189, 248, 0.15)',
          },
          violet: {
            DEFAULT: '#a855f7',
            hover: '#9333ea',
            muted: 'rgba(168, 85, 247, 0.15)',
          },
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(56, 189, 248, 0.3)',
        },
      },
      boxShadow: {
        'glow-blue': '0 0 30px -5px rgba(56, 189, 248, 0.25)',
        'glow-violet': '0 0 30px -5px rgba(168, 85, 247, 0.25)',
        'glow-combo': '0 0 40px -10px rgba(56, 189, 248, 0.2), 0 0 40px -10px rgba(168, 85, 247, 0.2)',
        'card-inner': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        'radial-gradient-glow': 'radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.15), transparent 50%)',
      },
    },
  },
  plugins: [],
};
