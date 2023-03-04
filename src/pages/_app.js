import MainLayout from '@/layout/MainLayout';
import '@/styles/globals.css';
import '@/styles/quill.snow.css';

import SEO from '../../next-seo.config';
import { DefaultSeo } from 'next-seo';

import { Raleway, Quicksand } from '@next/font/google';

const raleway = Raleway({ subsets: ['latin'] });
const quicksand = Quicksand({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --quicksand-font: ${quicksand.style.fontFamily};
          --raleway-font: ${raleway.style.fontFamily};
        }
      `}</style>

      <MainLayout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
