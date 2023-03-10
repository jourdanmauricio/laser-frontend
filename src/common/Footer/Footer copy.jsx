import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = ({ settings }) => {
  const facebook = settings.find((setting) => setting.feature === 'facebook');
  const instagram = settings.find((setting) => setting.feature === 'instagram');
  const twitter = settings.find((setting) => setting.feature === 'twitter');
  const whatsapp = settings.find((setting) => setting.feature === 'whatsapp');
  const email = settings.find((setting) => setting.feature === 'email');
  const phone = settings.find((setting) => setting.feature === 'phone');

  return (
    <footer className="bg-neutral-700 text-center text-white">
      <div className="container px-6 pt-6">
        <div className="mb-6 flex justify-center">
          {facebook.value.length > 0 && (
            <Link
              className="m-2 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-50 focus:outline-none focus:ring-0 flex justify-center items-center"
              href={facebook.value}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="mx-auto text-white text-lg" />
            </Link>
          )}
          {instagram.value.length > 0 && (
            <Link
              className="m-2 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-50 focus:outline-none focus:ring-0 flex justify-center items-center"
              href={instagram.value}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="mx-auto text-white text-lg" />
            </Link>
          )}
          {twitter.value.length > 0 && (
            <Link
              className="m-2 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-50 focus:outline-none focus:ring-0 flex justify-center items-center"
              href={twitter.value}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="mx-auto text-white text-lg" />
            </Link>
          )}

          {whatsapp.value.length > 0 && (
            <Link
              className="m-2 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-50 focus:outline-none focus:ring-0 flex justify-center items-center"
              href={whatsapp.value}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="mx-auto text-white text-lg" />
            </Link>
          )}
        </div>

        <div className="mb-6">
          <p>
            ¡Suscríbete a nuestro boletín informativo y mantente actualizado con
            las últimas noticias, promociones y eventos! Recibirás contenido
            exclusivo directamente en tu bandeja de entrada, incluyendo
            artículos interesantes, consejos y ofertas especiales.{' '}
          </p>
          <p>
            Para suscribirte, simplemente ingresa tu dirección de correo
            electrónico en el campo provisto y haz clic en el botón Suscribir.
            No te pierdas la oportunidad de ser parte de nuestra comunidad y
            obtener acceso a contenido exclusivo. ¡Suscríbete hoy mismo!
          </p>
        </div>

        <div>
          <form action="">
            <div className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
              <div className="md:ml-auto md:mb-6">
                <p className="">
                  <strong>Suscríbite a nuestro newsletter</strong>
                </p>
              </div>

              <div className="relative md:mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] text-neutral-200 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="email"
                  placeholder="Email address"
                />
                <label
                  htmlFor="email"
                  className="pointer-events-none bg-neutral-700 absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate mt-[0.37rem] px-1 leading-[1.6] text-neutral-200 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-neutral-200 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                >
                  Email address
                </label>
              </div>

              <div className="mb-6 md:mr-auto">
                <button
                  type="submit"
                  className="inline-block rounded border-2 border-neutral-50 px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 
                  bg-neutral-800 hover:bg-neutral-800/10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                  // dark:hover:bg-neutral-100 dark:hover:bg-opacity-10
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Suscribir
                </button>
              </div>
            </div>
          </form>
        </div>

        <h5 className="mb-2.5 font-bold uppercase">Links</h5>
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <div className="mb-6">
            <ul className="mb-0 list-none">
              <li>
                <Link href="/#inicio" className="text-white" scroll={false}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#nosotros" className="text-white" scroll={false}>
                  Sobre mi
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="text-white" scroll={false}>
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <ul className="mb-0 list-none">
              <li>
                <Link href="/proteccion-datos" className="text-white">
                  Protección de datos
                </Link>
              </li>
              <li>
                <Link href="/politicas-privacidad" className="text-white">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/politicas-cookies" className="text-white">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="p-4 text-center"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2023 Copyright: Derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
