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

  const logoImage = settings.find((setting) => setting.feature === 'logoImage');
  const facebook = settings.find((setting) => setting.feature === 'facebook');
  const instagram = settings.find((setting) => setting.feature === 'instagram');
  const twitter = settings.find((setting) => setting.feature === 'twitter');
  const whatsapp = settings.find((setting) => setting.feature === 'whatsapp');
  const email = settings.find((setting) => setting.feature === 'email');
  const phone = settings.find((setting) => setting.feature === 'phone');

  useEffect(() => {
    const closeMenu = (e) => {
      if (!btnMenuRef.current?.contains(e.target)) setIsOpenMenu(false);
    };

    document.body.addEventListener('click', closeMenu);

    return () => document.body.removeEventListener('click', closeMenu);
  }, []);

  return (
    <>
      <div
        id="inicio"
        className="h-10 bg-navBgColor text-navTextColor flex items-center justify-end gap-4 pr-4"
      >
        {phone.value.length > 0 && (
          <span className="text-sm hidden sm:block">{phone.value}</span>
        )}
        {email.value.length > 0 && (
          <span className="text-sm hidden sm:block mr-4">{email.value}</span>
        )}
        {facebook.value.length > 0 && (
          <Link href={facebook.value} target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-gray-600 text-2xl" />
          </Link>
        )}
        {instagram.value.length > 0 && (
          <Link
            href={instagram.value}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="text-gray-600 text-2xl" />
          </Link>
        )}
        {twitter.value.length > 0 && (
          <Link href={twitter.value} target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare className="text-gray-600 text-2xl" />
          </Link>
        )}
        <div className="flex ml-8 gap-4">
          {email.value.length > 0 && (
            <Link
              href={`mailto:${email.value}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-gray-600 text-2xl" />
            </Link>
          )}
          {whatsapp.value.length > 0 && (
            <Link
              href={whatsapp.value}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare className="text-gray-600 text-2xl" />
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
          src={logoImage.value}
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
