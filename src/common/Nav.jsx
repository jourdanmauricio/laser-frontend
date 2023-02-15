import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const btnMenuRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const closeMenu = (e) => {
      if (!btnMenuRef.current.contains(e.target)) setIsOpenMenu(false);
    };

    document.body.addEventListener('click', closeMenu);

    return () => document.body.removeEventListener('click', closeMenu);
  }, []);

  return (
    <>
      <div className="h-10 bg-blue-50 flex items-center justify-end gap-4">
        <span className="text-sm">02262-45-4545</span>
        <span className="text-sm mr-4">laura@gmail.com</span>
      </div>
      <nav className="menu">
        <Image
          ref={btnMenuRef}
          onClick={() => setIsOpenMenu((prev) => !prev)}
          width={25}
          height={25}
          src="/icons/icon_menu.svg"
          alt="Menu Icon"
          className="menu__icon"
        />
        <div className="menu__desktop">
          <Image
            width={300}
            height={40}
            src="/images/logo_desktop.png"
            alt="logo"
          />
          <ul className="menu__ul">
            <li
              className={`menu__link ${
                router.asPath == '/#inicio'
                  ? 'border-buttonColor'
                  : 'border-slate-200'
              }`}
            >
              <Link className="menu__item" href="#inicio" scroll={false}>
                Inicio
              </Link>
            </li>
            <li
              className={`menu__link ${
                router.asPath == '/#servicios'
                  ? 'border-buttonColor'
                  : 'border-slate-200'
              }`}
            >
              <Link className="menu__item" href="#servicios" scroll={false}>
                Sobre mi
              </Link>
            </li>

            <li
              className={`menu__link ${
                router.asPath == '/#servicios'
                  ? 'border-buttonColor'
                  : 'border-slate-200'
              }`}
            >
              <Link className="menu__item" href="#servicios" scroll={false}>
                Servicios
              </Link>
            </li>
            <li
              className={`menu__link ${
                router.asPath == '/#lessons'
                  ? 'border-buttonColor'
                  : 'border-slate-200'
              }`}
            >
              <Link className="menu__item" href="#lessons" scroll={false}>
                Blog
              </Link>
            </li>
            <li
              className={`menu__link ${
                router.asPath == '/#contact'
                  ? 'border-buttonColor'
                  : 'border-slate-200'
              }`}
            >
              <Link className="menu__item" href="#contact" scroll={false}>
                Contacto
              </Link>
            </li>
          </ul>
          <button className="text-purple-500 rounded-md hover:text-purple-700 hover:bg-blue-100 p-2">
            Solicitar consulta
          </button>
        </div>

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
