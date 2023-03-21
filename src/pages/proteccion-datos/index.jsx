import axios from 'axios';
import Nav from '../../common/Nav';
import Footer from '../../common/Footer/Footer';

const politicaDatos = ({ settings }) => {
  const data = settings.filter((setting) => setting.type === 'pageDataProtect');
  const pageDataProtect = data.reduce(
    (obj, cur) => ({ ...obj, [cur.feature]: cur }),
    {}
  );
  return (
    <>
      <style jsx global>{`
        :root {
          --heroBgColor: ${pageDataProtect.heroBgColor.value};
          --bgColor: ${pageDataProtect.bgColor.value};
          --decorationColor: ${pageDataProtect.decorationColor.value};
        }
      `}</style>
      <Nav settings={settings} />
      <div className="relative bg-heroBgColor flex flex-col justify-center items-center">
        <div
          className="relative ql-editor"
          dangerouslySetInnerHTML={{
            __html: pageDataProtect.h1.value,
          }}
        />
      </div>
      <section className="relative overflow-hidden bg-bgColor px-4 pb-10 sm:px-10 text-center text-lg font-medium tracking-wide">
        <div
          className="relative ql-editor"
          dangerouslySetInnerHTML={{
            __html: pageDataProtect.text.value,
          }}
        />
      </section>

      <Footer settings={settings} />
    </>
  );
};

export default politicaDatos;

export async function getStaticProps() {
  try {
    const API_SETTINGS = `${process.env.NEXT_PUBLIC_API_BACKEND}/settings`;
    const responseSettings = await axios(API_SETTINGS);

    return {
      props: {
        settings: responseSettings.data,
      },
    };
  } catch (error) {
    console.log('ERROR', error);
  }
}
