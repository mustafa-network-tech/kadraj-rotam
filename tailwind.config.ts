import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kr-bg': '#F8F9FA',
        'kr-charcoal': '#111827',
        'kr-slate': '#334155',
        'kr-muted': '#64748B',
        'kr-blue': '#1A5276',
        'kr-amber': '#C89B3C',
        'kr-border': '#E5E7EB',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      aspectRatio: {
        '3/2': '3 / 2',
        '4/3': '4 / 3',
        '16/9': '16 / 9',
        '21/9': '21 / 9',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#334155',
            h1: { color: '#111827' },
            h2: { color: '#111827' },
            h3: { color: '#111827' },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
