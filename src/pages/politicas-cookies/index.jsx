import axios from 'axios';
import Nav from '@/common/Nav';
import Footer from '@/common/Footer/Footer';

const politicasCookies = ({ settings }) => {
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
      <h2>POLITICA DE COOKIES</h2>
      <p>
        Cookies Una cookie se refiere a un fichero que es enviado con la
        finalidad de solicitar permiso para almacenarse en su ordenador, al
        aceptar dicho fichero se crea y la cookie sirve entonces para tener
        informaci??n respecto al tr??fico web, y tambi??n facilita las futuras
        visitas a una web recurrente. Otra funci??n que tienen las cookies es que
        con ellas las web pueden reconocerte individualmente y por tanto
        brindarte el mejor servicio personalizado de su web. Nuestro sitio web
        emplea las cookies para poder identificar las p??ginas que son visitadas
        y su frecuencia. Esta informaci??n es empleada ??nicamente para an??lisis
        estad??stico y despu??s la informaci??n se elimina de forma permanente.
        Usted puede eliminar las cookies en cualquier momento desde su
        ordenador. Sin embargo las cookies ayudan a proporcionar un mejor
        servicio de los sitios web, est??s no dan acceso a informaci??n de su
        ordenador ni de usted, a menos de que usted as?? lo quiera y la
        proporcione directamente . Usted puede aceptar o negar el uso de
        cookies, sin embargo la mayor??a de navegadores aceptan cookies
        autom??ticamente pues sirve para tener un mejor servicio web. Tambi??n
        usted puede cambiar la configuraci??n de su ordenador para declinar las
        cookies. Si se declinan es posible que no pueda utilizar algunos de
        nuestros servicios.
      </p>
      <Footer settings={settings} />
    </>
  );
};

export default politicasCookies;

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
