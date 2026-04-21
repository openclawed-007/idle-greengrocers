/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5EFE3',
          50: '#FBF7EE',
          100: '#F8F2E6',
          200: '#F5EFE3',
          300: '#EDE3D0',
          400: '#F0E2CE', // "putty" — warm darker cream used on panels in the design
        },
        forest: {
          DEFAULT: '#253628',
          ink: '#0E2419',
          deep: '#17301F',
          mid: '#253628',
          soft: '#2B4A3B',
          line: '#3A5A4A',
        },
        terracotta: {
          DEFAULT: '#B4472C',
          soft: '#C96746',
        },
        ink: {
          DEFAULT: '#1C1A16',
          muted: '#6B6458',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      maxWidth: {
        prose2: '62ch',
      },
      boxShadow: {
        card: '0 1px 2px rgba(28,26,22,0.06), 0 8px 24px rgba(28,26,22,0.08)',
        polaroid: '0 2px 4px rgba(0,0,0,0.12), 0 16px 32px -12px rgba(0,0,0,0.25)',
      },
      backgroundImage: {
        'paper-grain':
          "radial-gradient(rgba(28,26,22,0.04) 1px, transparent 1px), radial-gradient(rgba(28,26,22,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        'paper-grain': '6px 6px, 11px 11px',
      },
    },
  },
  plugins: [],
};
