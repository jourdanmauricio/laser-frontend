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
        // MENU
        navBgColor: 'var(--navBgColor)',
        navTextColor: 'var(--navTextColor)',
        navHoverColor: 'var(--navHoverColor)',
        navCurrentPageColor: 'var(--navCurrentPageColor)',
        // BODY
        bodyBgColor: 'var(--bodyBgColor)',
        // ABOUT SECTION
        aboutBgColor: 'var(--aboutBgColor)',
        // SERVICE SECTION
        servicesBgColor: 'var(--servicesBgColor)',
        servicesTextColor: 'var(--servicesTextColor)',
        // BLOG SECTION
        blogBgColor: 'var(--blogBgColor)',
        blogTextColor: 'var(--blogTextColor)',
        // CLINIC SECTION
        clinicBgColor: 'var(--clinicBgColor)',
        clinicTextColor: 'var(--clinicTextColor)',
        // TESTIMONIALS SECTION
        testimonialsBgColor: 'var(--testimonialsBgColor)',
        testimonialsTextColor: 'var(--testimonialsTextColor)',
        // CONTACT
        heroBgColor: 'var(--heroBgColor)',
        bgColor: 'var(--bgColor)',
        decorationColor: 'var(--decorationColor)',
        // AUTHOR
        authorTextColor: 'var(--authorTextColor)',
        // FOOTER
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
