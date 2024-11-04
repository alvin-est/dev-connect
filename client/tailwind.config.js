// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // This includes all files in the `src` directory with specified extensions
    './src/app.css', // Including your specific CSS file if needed
    './src/index.css', // Including your specific CSS file if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // Adds Tailwind's form styling plugin
  ],
};

