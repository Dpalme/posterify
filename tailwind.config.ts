/** @type {import('tailwindcss').Config} */
module.exports = {
  extract: {
    include: ['./index.html', './src/index.css', './src/**/*.{tsx,css}'],
    exclude: ['node_modules', '.git'],
  },
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        title: [
          'Geologica',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ],
        sans: [
          'Archivo',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ],
      },
      colors: {
        primary: {
          60: 'rgb(var(--primary-60) / <alpha-value>)',
          40: 'rgb(var(--primary-40) / <alpha-value>)',
        },
        error: {
          50: 'rgb(var(--error-50) / <alpha-value>)',
          60: 'rgb(var(--error-60) / <alpha-value>)',
        },
        surface: {
          1: 'rgb(var(--surface-1) / <alpha-value>)',
          2: 'rgb(var(--surface-2) / <alpha-value>)',
          3: 'rgb(var(--surface-3) / <alpha-value>)',
          4: 'rgb(var(--surface-4) / <alpha-value>)',
          5: 'rgb(var(--surface-5) / <alpha-value>)',
        },
        orange: 'rgb(var(--orange) / <alpha-value>)',
        blue: 'rgb(var(--blue) / <alpha-value>)',
        main: 'rgb(var(--main) / <alpha-value>)',
        back: 'rgb(var(--back) / <alpha-value>)',
      },
      backgroundImage: {
        sm: 'url(--smImg)',
        md: 'url(--mdImg)',
        xl: 'url(--xlImg)',
      },
      boxShadow: {
        sm: `-1px -1px 4px 1px var(--tw-shadow-color), 1px 1px 4px var(--tw-shadow-color)`,
        inset:
          'inset -1px -1px 4px 1px var(--tw-shadow-color), inset 1px 1px 4px var(--tw-shadow-color)',
        glow: '0px 0px 16px var(--tw-shadow-color), 0px 0px 4px var(--tw-shadow-color), 0px 0px 8px var(--tw-shadow-color)',
      },
      animation: {
        'slide-left': 'slide-left .2s cubic-bezier(0, 0, 0.2, 1)',
        squeeze: 'squeeze 1.5s ease-in-out infinite',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        squeeze: {
          '0%,100%': { transform: 'scaleX(100%)' },
          '50%': { transform: 'scaleX(20%)' },
        },
      },
      containers: {
        '2xs': '16rem',
      },
    },
  },
};
