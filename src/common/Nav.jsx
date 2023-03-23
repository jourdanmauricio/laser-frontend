import Image from 'next/image';
import Link from 'next/link';
import {
  FaBars,
  FaFacebook,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaEnvelope,
} from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const Nav = ({ settings }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const btnMenuRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const closeMenu = (e) => {
      if (!btnMenuRef.current?.contains(e.target)) setIsOpenMenu(false);
    };

    document.body.addEventListener('click', closeMenu);

    return () => document.body.removeEventListener('click', closeMenu);
  }, []);

  // MENU
  const navMenu = settings.filter((setting) => setting.type === 'menu');
  const menu = navMenu.reduce(
    (obj, cur) => ({ ...obj, [cur.feature]: cur }),
    {}
  );
  // LOGO
  const navLogo = settings.filter((setting) => setting.type === 'logo');
  const logo = navLogo.reduce(
    (obj, cur) => ({ ...obj, [cur.feature]: cur }),
    {}
  );

  // CONTACT
  const contactData = settings.filter(
    (setting) => setting.type === 'contactData'
  );
  const contact = contactData.reduce(
    (obj, cur) => ({ ...obj, [cur.feature]: cur }),
    {}
  );

  return (
    <>
      <style jsx global>{`
        :root {
          // Menu
          --navBgColor: ${menu.bgColor.value};
          --navTextColor: ${menu.textColor.value};
          --navHoverColor: ${menu.hoverColor.value};
          --navCurrentPageColor: ${menu.currentPageColor.value};
        }
      `}</style>

      <div
        id="inicio"
        className="h-10 bg-navBgColor text-sm text-navTextColor flex items-center justify-end gap-4 pr-4"
      >
        {contact.phone.value.length > 0 && (
          <span className="text-sm hidden sm:block">{contact.phone.value}</span>
        )}
        {contact.email.value.length > 0 && (
          <span className="text-sm hidden sm:block mr-4">
            {contact.email.value}
          </span>
        )}
        {contact.facebook.value.length > 0 && (
          <Link
            href={contact.facebook.value}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Seguime en Facebook"
          >
            <FaFacebook className="text-gray-600 text-xl" />
          </Link>
        )}
        {contact.instagram.value.length > 0 && (
          <Link
            href={contact.instagram.value}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Seguime en Intagram"
          >
            <FaInstagramSquare className="text-gray-600 text-xl" />
          </Link>
        )}
        {contact.twitter.value.length > 0 && (
          <Link
            href={contact.twitter.value}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Seguime en Twitter"
          >
            <FaTwitterSquare className="text-gray-600 text-xl" />
          </Link>
        )}
        <div className="flex ml-8 gap-4">
          {contact.email.value.length > 0 && (
            <Link
              href={`mailto:${contact.email.value}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviame un email"
            >
              <FaEnvelope className="text-gray-600 text-xl" />
            </Link>
          )}
          {contact.whatsapp.value.length > 0 && (
            <Link
              href={contact.whatsapp.value}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Envíame un Whatsapp"
            >
              <FaWhatsappSquare className="text-gray-600 text-xl" />
            </Link>
          )}
        </div>
      </div>
      <nav className="menu">
        <div className="lg:hidden" ref={btnMenuRef}>
          <FaBars
            onClick={() => setIsOpenMenu((prev) => !prev)}
            className="text-navTextColor text-2xl menu__icon"
          />
        </div>
        <Image
          className="hidden sm:block"
          width={300}
          height={40}
          src={logo.logoImage.value}
          alt="logo"
        />
        <div className="menu__desktop">
          <ul className="menu__ul">
            <li
              className={`menu__link ${
                router.asPath === '/' || router.asPath === '/#inicio'
                  ? 'border-b border-solid border-navCurrentPageColor'
                  : 'border-none'
              }`}
            >
              <Link className="menu__item" href="/#inicio" scroll={false}>
                Inicio
              </Link>
            </li>
            <li
              className={`menu__link ${
                router.asPath === '/#nosotros'
                  ? 'border-b border-solid border-navCurrentPageColor'
                  : 'border-none'
              }`}
            >
              <Link className="menu__item" href="/#nosotros" scroll={false}>
                Sobre mi
              </Link>
            </li>

            <li
              className={`menu__link ${
                router.asPath == '/#servicios'
                  ? 'border-b border-solid border-navCurrentPageColor'
                  : ''
              }`}
            >
              <Link className="menu__item" href="/#servicios" scroll={false}>
                Servicios
              </Link>
            </li>
            <li
              className={`menu__link ${
                router.asPath === '/blog'
                  ? 'border-b border-solid border-navCurrentPageColor'
                  : ''
              }`}
            >
              <Link className="menu__item" href="/blog" scroll={false}>
                Blog
              </Link>
            </li>
            <li
              className={`menu__link ${
                router.asPath == '/contact'
                  ? 'border-b border-solid border-navCurrentPageColor'
                  : ''
              }`}
            >
              <Link className="menu__item" href="/contact" scroll={false}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <button className="text-navTextColor p-2 hover:text-navHoverColor">
          <p>Solicitar</p>
          <p>consulta</p>
        </button>

        <div className={`menu__mobile ${isOpenMenu ? 'block' : 'hidden'}`}>
          <ul className="menu__ul-mobile">
            <li className="menu__link-mobile">
              <Link
                className="menu__mobile-item"
                href="/#inicio"
                scroll={false}
                data-scroll-spy
              >
                Inicio
              </Link>
            </li>
            <li className="menu__link-mobile">
              <Link
                className="menu__mobile-item"
                href="/#servicios"
                scroll={false}
                data-scroll-spy
              >
                Servicios
              </Link>
            </li>
            <li className="menu__link-mobile">
              <Link
                className="menu__mobile-item"
                href="/#lessons"
                scroll={false}
                data-scroll-spy
              >
                Horarios
              </Link>
            </li>
            <li className="menu__link-mobile">
              <Link
                className="menu__mobile-item"
                href="/#contact"
                scroll={false}
                data-scroll-spy
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
