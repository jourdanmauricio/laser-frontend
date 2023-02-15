import Image from 'next/image';
import Spinner from '../Spinner';
import useFooter from './useFooter';

const Footer = ({ contact, socialMedia }) => {
  const { action, error, formMsg, handleChange, handleSubmit } = useFooter();

  return (
    <footer className="py-10 px-5 lg:px-20 bg-backgroundFooterColor">
      <section className="w-full flex flex-col p-10 sm:flex-row sm:justify-evenly sm:gap-0 sm:h-[400px]">
        <div className="w-full flex justify-center items-center text-center sm:w-1/2">
          {action === 'form' && (
            <form
              id="form-subscribe"
              className="w-full h-full mx-auto flex flex-col items-center justify-center"
              noValidate
              onSubmit={handleSubmit}
            >
              <p className="paragraph text-gray-800">
                Suscribite al newsletter y recibe nuestras novedades
              </p>

              <div className="form__group w-full">
                <span className="form__icon">*</span>
                <input
                  type="text"
                  className="form__input"
                  name="name"
                  id="name"
                  title="Ingresa solo letras"
                  autoComplete="off"
                  placeholder="Ingresa tu nombre"
                  pattern="^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$"
                  required
                  onChange={handleChange}
                />
                <span
                  className={`form__error ${
                    error.name ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {error.name}
                </span>
              </div>

              <div className="form__group w-full">
                <span className="form__icon">*</span>
                <input
                  type="email"
                  className="form__input"
                  id="email"
                  name="email"
                  title="Ingresa un email válido"
                  autoComplete="off"
                  placeholder="Escribe tu email"
                  pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
                  required
                  onChange={handleChange}
                />
                <span
                  className={`form__error ${
                    error.email ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {error.email}
                </span>
              </div>

              <input
                className="button__cta w-[250px] mt-8"
                value="Suscribete"
                type="submit"
              />
            </form>
          )}

          {action === 'loading' && <Spinner />}
          {action === 'msg' && (
            <h3
              id="form-rta"
              className="text-pink-500 text-2xl w-5/6 h-4/6 mx-auto text-center"
            >
              {formMsg}
            </h3>
          )}
        </div>

        <div className="flex flex-col justify-evenly items-center list-none h-[350px] sm:w-1/2">
          <figure className="h-[45px]">
            <Image
              width={180}
              height={45}
              id="footer-logo"
              src="/images/logo2.svg"
              alt="Logo"
              className="w-[200px]"
            />
          </figure>
          <div className="flex justify-center gap-12">
            <a
              id="footer-facebook"
              href={socialMedia.facebook}
              target="_blank"
              rel="nofollow noreferrer"
              className="no-underline"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                className="footer__icon"
                width={24}
                height={24}
              />
            </a>
            <a
              id="footer-twitter"
              href={socialMedia.twitter}
              target="_blank"
              rel="nofollow noreferrer"
              className="no-underline"
            >
              <Image
                src="/icons/twitter.svg"
                alt="twitter"
                className="footer__icon"
                width={24}
                height={24}
              />
            </a>
            <a
              id="footer-instagram"
              href={socialMedia.instagram}
              target="_blank"
              rel="nofollow noreferrer"
              className="no-underline"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                className="footer__icon"
                width={24}
                height={24}
              />
            </a>
          </div>
          <div className="flex flex-col justify-evenly">
            <span id="address">{contact.address}</span>
            <span id="phone">{contact.phone}</span>
          </div>
          <div className="flex justify-center gap-12">
            <a
              id="footer-email"
              href={`mailto: ${contact.email}`}
              className="footer__media"
            >
              <Image
                src="/icons/email.svg"
                alt="Email"
                className="footer__icon"
                rel="nofollow"
                width={24}
                height={24}
              />
            </a>
            <a
              id="footer-whatsapp"
              href={contact.whatsapp}
              className="footer__media"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <Image
                src="/icons/whatsapp.svg"
                alt="Perfil de Whatsapp"
                className="footer__icon"
                rel="nofollow"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
