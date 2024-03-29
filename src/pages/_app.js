import MainLayout from '@/layout/MainLayout';
import '@/styles/globals.css';
import '@/styles/quill.snow.css';

import SEO from '../../next-seo.config';
import { DefaultSeo } from 'next-seo';

// import { Raleway, Quicksand } from '@next/font/google';
import { Roboto, Montserrat } from '@next/font/google';

// const raleway = Raleway({ subsets: ['latin'] });
// const quicksand = Quicksand({ subsets: ['latin'] });

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});
const montserrat = Montserrat({
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --roboto-font: ${roboto.style.fontFamily};
          --montserrat-font: ${montserrat.style.fontFamily};
        }
      `}</style>

      <MainLayout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
