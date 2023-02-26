/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['var(--raleway-font)', ...fontFamily.sans],
        quicksand: ['var(--quicksand-font)', ...fontFamily.sans],
      },
      colors: {
        posHero: 'var(--pos-hero)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
