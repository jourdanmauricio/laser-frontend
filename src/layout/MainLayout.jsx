import Nav from '@/common/Nav';
import Head from 'next/head';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="min-h-full">
        <Head>
          <title>Doctora Laura Rodriguez</title>
          {/* google */}
          <meta name="title" content="Hatha Yoga Lobería - Yoga y Shiatsu" />
          <meta
            name="description"
            content="Yoga en Lobería. Recuerda, el yoga es una luz, que una vez encendida, nunca se atenuará. Cuanto mejor es la práctica, más brillante es la llama"
          />
          {/* facebook */}
          <meta
            property="og:title"
            content="Hatha Yoga Lobería - Yoga y Shiatsu"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://hathayogaloberia.com.ar/" />
          <meta
            property="og:description"
            content="Yoga en Lobería. Recuerda, el yoga es una luz, que una vez encendida, nunca se atenuará. Cuanto mejor es la práctica, más brillante es la llama"
          />
          <meta
            property="og:image"
            content="https://hathayogaloberia.com.ar/images/galeria/galeria2.jpeg"
          />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="563" />
          <meta property="og:image:height" content="350" />
          <meta property="og:image:alt" content="Posturas de yoga" />

          {/* twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://hathayogaloberia.com.ar/"
          />
          <meta
            property="twitter:title"
            content="Hatha Yoga Lobería - Yoga y Shiatsu"
          />
          <meta
            property="twitter:description"
            content="Yoga en Lobería. Recuerda, el yoga es una luz, que una vez encendida, nunca se atenuará. Cuanto mejor es la práctica, más brillante es la llama"
          />
          <meta property="twitter:image" content=""></meta>

          <link rel="icon" type="image/png" href="/favicon.png"></link>
        </Head>
        {/* <Nav /> */}

        <main>{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
