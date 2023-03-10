import axios from 'axios';
import Nav from '@/common/Nav';
import Footer from '@/common/Footer/Footer';

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
      <h2>POLITICA DE PRIVACIDAD</h2>
      <p>
        El presente Pol??tica de Privacidad establece los t??rminos en que Laura
        Rodriguez usa y protege la informaci??n que es proporcionada por sus
        usuarios al momento de utilizar su sitio web. Esta compa????a est??
        comprometida con la seguridad de los datos de sus usuarios. Cuando le
        pedimos llenar los campos de informaci??n personal con la cual usted
        pueda ser identificado, lo hacemos asegurando que s??lo se emplear?? de
        acuerdo con los t??rminos de este documento. Sin embargo esta Pol??tica de
        Privacidad puede cambiar con el tiempo o ser actualizada por lo que le
        recomendamos y enfatizamos revisar continuamente esta p??gina para
        asegurarse que est?? de acuerdo con dichos cambios. Informaci??n que es
        recogida Nuestro sitio web podr?? recoger informaci??n personal por
        ejemplo: Nombre, informaci??n de contacto como su direcci??n de correo
        electr??nica e informaci??n demogr??fica. As?? mismo cuando sea necesario
        podr?? ser requerida informaci??n espec??fica para procesar alg??n pedido o
        realizar una entrega o facturaci??n. Uso de la informaci??n recogida
        Nuestro sitio web emplea la informaci??n con el fin de proporcionar el
        mejor servicio posible, particularmente para mantener un registro de
        usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y
        servicios. Es posible que sean enviados correos electr??nicos
        peri??dicamente a trav??s de nuestro sitio con ofertas especiales, nuevos
        productos y otra informaci??n publicitaria que consideremos relevante
        para usted o que pueda brindarle alg??n beneficio, estos correos
        electr??nicos ser??n enviados a la direcci??n que usted proporcione y
        podr??n ser cancelados en cualquier momento. Estamos altamente
        comprometido para cumplir con el compromiso de mantener su informaci??n
        segura. Usamos los sistemas m??s avanzados y los actualizamos
        constantemente para asegurarnos que no exista ning??n acceso no
        autorizado. Enlaces a Terceros Este sitio web pudiera contener en laces
        a otros sitios que pudieran ser de su inter??s. Una vez que usted de clic
        en estos enlaces y abandone nuestra p??gina, ya no tenemos control sobre
        al sitio al que es redirigido y por lo tanto no somos responsables de
        los t??rminos o privacidad ni de la protecci??n de sus datos en esos otros
        sitios terceros. Dichos sitios est??n sujetos a sus propias pol??ticas de
        privacidad por lo cual es recomendable que los consulte para confirmar
        que usted est?? de acuerdo con estas. Control de su informaci??n personal
        En cualquier momento usted puede restringir la recopilaci??n o el uso de
        la informaci??n personal que es proporcionada a nuestro sitio web. Cada
        vez que se le solicite rellenar un formulario, como el de alta de
        usuario, puede marcar o desmarcar la opci??n de recibir informaci??n por
        correo electr??nico. En caso de que haya marcado la opci??n de recibir
        nuestro bolet??n o publicidad usted puede cancelarla en cualquier
        momento. Esta compa????a no vender??, ceder?? ni distribuir?? la informaci??n
        personal que es recopilada sin su consentimiento, salvo que sea
        requerido por un juez con un orden judicial. Blessa Se reserva el
        derecho de cambiar los t??rminos de la presente Pol??tica de Privacidad en
        cualquier momento.
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
