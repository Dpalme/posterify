/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,jsx,tsx,ts}'],
  theme: {
    fontFamily: {
      DEFAULT: [
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
    extend: {
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
