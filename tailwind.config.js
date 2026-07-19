/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        surface: '#111318',
        'surface-2': '#161b22',
        border: '#30363d',
        'text-primary': '#e6edf3',
        'text-muted': '#8b949e',
        green: '#22c55e',
        cyan: '#06b6d4',
        amber: '#f59e0b',
        red: '#ef4444',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'SF Mono', 'Menlo', 'monospace'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(8px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
