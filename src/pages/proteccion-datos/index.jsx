import axios from 'axios';
import Nav from '../../common/Nav';
import Footer from '../../common/Footer/Footer';

const politicaDatos = ({ settings }) => {
  const navBgColor = settings.find(
    (setting) => setting.feature === 'navBgColor'
  );
  const navTextColor = settings.find(
    (setting) => setting.feature === 'navTextColor'
  );
  const navHoverColor = settings.find(
    (setting) => setting.feature === 'navHoverColor'
  );
  const navCurrentPageColor = settings.find(
    (setting) => setting.feature === 'navCurrentPageColor'
  );
  // FOOTER
  const footerBgColor = settings.find(
    (setting) => setting.feature === 'footerBgColor'
  );
  const footerTextColor = settings.find(
    (setting) => setting.feature === 'footerTextColor'
  );
  const footerButtonsColor = settings.find(
    (setting) => setting.feature === 'footerButtonsColor'
  );
  const footerButtonsHoverColor = settings.find(
    (setting) => setting.feature === 'footerButtonsHoverColor'
  );
  const footerLinksColor = settings.find(
    (setting) => setting.feature === 'footerLinksColor'
  );
  const footerLinksHoverColor = settings.find(
    (setting) => setting.feature === 'footerLinksHoverColor'
  );
  const footer2BgColor = settings.find(
    (setting) => setting.feature === 'footer2BgColor'
  );
  const footer2TextColor = settings.find(
    (setting) => setting.feature === 'footer2TextColor'
  );

  return (
    <>
      <style jsx global>{`
        :root {
          --navBgColor: ${navBgColor.value};
          --navTextColor: ${navTextColor.value};
          --navHoverColor: ${navHoverColor.value};
          --navCurrentPageColor: ${navCurrentPageColor.value};
          // Footer
          --footerBgColor: ${footerBgColor.value};
          --footerTextColor: ${footerTextColor.value};
          --footerButtonsColor: ${footerButtonsColor.value};
          --footerButtonsHoverColor: ${footerButtonsHoverColor.value};
          --footerLinksColor: ${footerLinksColor.value};
          --footerLinksHoverColor: ${footerLinksHoverColor.value};
          --footer2BgColor: ${footer2BgColor.value};
          --footer2TextColor: ${footer2TextColor.value};
        }
      `}</style>
      <Nav settings={settings} />
      <h2>POLITICA DE PROTECCION DE DATOS</h2>
      <p>
        La protección de tus datos personales es muy importante para nosotros.
        Nos comprometemos a cumplir con todas las leyes y regulaciones de
        protección de datos aplicables y a tratar tus datos personales con
        cuidado y confidencialidad. Al proporcionarnos tus datos personales,
        aceptas que los usemos para los fines específicos para los que los hemos
        recopilado, como procesar tus pedidos, enviarte información relevante
        sobre nuestros productos y servicios, o responder a tus consultas. No
        compartiremos tus datos personales con terceros sin tu consentimiento
        explícito, a menos que sea necesario para cumplir con las leyes
        aplicables, proteger nuestros derechos legales, o para llevar a cabo
        actividades comerciales esenciales, como el procesamiento de pagos o el
        envío de productos. Además, implementamos medidas de seguridad adecuadas
        para proteger tus datos personales contra el acceso no autorizado, la
        alteración, la divulgación o la destrucción. Si tienes alguna pregunta
        sobre nuestra política de protección de datos, no dudes en contactarnos.
        Estaremos encantados de ayudarte y brindarte toda la información que
        necesites.
      </p>
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
