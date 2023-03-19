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
        roboto: ['var(--roboto-font)', ...fontFamily.sans],
        montserrat: ['var(--montserrat-font)', ...fontFamily.sans],
      },
      colors: {
        navBgColor: 'var(--navBgColor)',
        navTextColor: 'var(--navTextColor)',
        navHoverColor: 'var(--navHoverColor)',
        navCurrentPageColor: 'var(--navCurrentPageColor)',
        bodyBgColor: 'var(--bodyBgColor)',
        aboutBgColor: 'var(--aboutBgColor)',
        servicesBgColor: 'var(--servicesBgColor)',
        servicesTextColor: 'var(--servicesTextColor)',
        blogBgColor: 'var(--blogBgColor)',
        blogTextColor: 'var(--blogTextColor)',
        clinicBgColor: 'var(--clinicBgColor)',
        clinicTextColor: 'var(--clinicTextColor)',
        testimonialsBgColor: 'var(--testimonialsBgColor)',
        testimonialsTextColor: 'var(--testimonialsTextColor)',
        footerBgColor: 'var(--footerBgColor)',
        footerTextColor: 'var(--footerTextColor)',
        footerButtonsColor: 'var(--footerButtonsColor)',
        footerButtonsHoverColor: 'var(--footerButtonsHoverColor)',
        footerLinksColor: 'var(--footerLinksColor)',
        footerLinksHoverColor: 'var(--footerLinksHoverColor)',
        footer2BgColor: 'var(--footer2BgColor)',
        footer2TextColor: 'var(--footer2TextColor)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
