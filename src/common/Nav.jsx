import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const Nav = ({ logoImage }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const btnMenuRef = useRef();
  const router = useRouter();

  console.log('router.asPath', router.asPath);

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
        className="h-10 bg-navBgColor text-navTextColor flex items-center justify-end gap-4"
      >
        <span className="text-sm">02262-45-4545</span>
        <span className="text-sm mr-4">laura@gmail.com</span>
      </div>
      <nav className="menu">
        <div ref={btnMenuRef}>
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
