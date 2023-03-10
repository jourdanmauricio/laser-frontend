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
        El presente Política de Privacidad establece los términos en que Laura
        Rodriguez usa y protege la información que es proporcionada por sus
        usuarios al momento de utilizar su sitio web. Esta compañía está
        comprometida con la seguridad de los datos de sus usuarios. Cuando le
        pedimos llenar los campos de información personal con la cual usted
        pueda ser identificado, lo hacemos asegurando que sólo se empleará de
        acuerdo con los términos de este documento. Sin embargo esta Política de
        Privacidad puede cambiar con el tiempo o ser actualizada por lo que le
        recomendamos y enfatizamos revisar continuamente esta página para
        asegurarse que está de acuerdo con dichos cambios. Información que es
        recogida Nuestro sitio web podrá recoger información personal por
        ejemplo: Nombre, información de contacto como su dirección de correo
        electrónica e información demográfica. Así mismo cuando sea necesario
        podrá ser requerida información específica para procesar algún pedido o
        realizar una entrega o facturación. Uso de la información recogida
        Nuestro sitio web emplea la información con el fin de proporcionar el
        mejor servicio posible, particularmente para mantener un registro de
        usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y
        servicios. Es posible que sean enviados correos electrónicos
        periódicamente a través de nuestro sitio con ofertas especiales, nuevos
        productos y otra información publicitaria que consideremos relevante
        para usted o que pueda brindarle algún beneficio, estos correos
        electrónicos serán enviados a la dirección que usted proporcione y
        podrán ser cancelados en cualquier momento. Estamos altamente
        comprometido para cumplir con el compromiso de mantener su información
        segura. Usamos los sistemas más avanzados y los actualizamos
        constantemente para asegurarnos que no exista ningún acceso no
        autorizado. Enlaces a Terceros Este sitio web pudiera contener en laces
        a otros sitios que pudieran ser de su interés. Una vez que usted de clic
        en estos enlaces y abandone nuestra página, ya no tenemos control sobre
        al sitio al que es redirigido y por lo tanto no somos responsables de
        los términos o privacidad ni de la protección de sus datos en esos otros
        sitios terceros. Dichos sitios están sujetos a sus propias políticas de
        privacidad por lo cual es recomendable que los consulte para confirmar
        que usted está de acuerdo con estas. Control de su información personal
        En cualquier momento usted puede restringir la recopilación o el uso de
        la información personal que es proporcionada a nuestro sitio web. Cada
        vez que se le solicite rellenar un formulario, como el de alta de
        usuario, puede marcar o desmarcar la opción de recibir información por
        correo electrónico. En caso de que haya marcado la opción de recibir
        nuestro boletín o publicidad usted puede cancelarla en cualquier
        momento. Esta compañía no venderá, cederá ni distribuirá la información
        personal que es recopilada sin su consentimiento, salvo que sea
        requerido por un juez con un orden judicial. Blessa Se reserva el
        derecho de cambiar los términos de la presente Política de Privacidad en
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
