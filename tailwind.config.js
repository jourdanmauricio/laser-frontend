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
        navBgColor: 'var(--navBgColor)',
        navTextColor: 'var(--navTextColor)',
        navHoverColor: 'var(--navHoverColor)',
        navCurrentPageColor: 'var(--navCurrentPageColor)',
        h1Color: 'var(--h1Color)',
        // bodyBgColor: 'var(--bodyBgColor)',
        //h2Pos: 'var(--h2Pos)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
