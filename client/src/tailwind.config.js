// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html', // Include HTML if used in public folder
  ],
  darkMode: 'class', // Enable dark mode with the class strategy
  theme: {
    extend: {
      colors: {
        text: '#01070e',
        background: '#ffffff',
        primary: '#127ef3',
        secondary: '#f7926e',
        accent: '#d4f551',
        darkBackground: '#0d1117', // Optional color for dark mode backgrounds
      },
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: ['Fira Code', ...fontFamily.mono],
        body: ['Fira Sans', ...fontFamily.sans],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Adds form styling utilities
    require('@tailwindcss/typography'), // Rich typography styles
  ],
};
