import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import logo from "../../assets/Logo-KBT-blanco-png.png";
import igLogo from "../../assets/media-ig.svg";
import inLogo from "../../assets/media-in.svg";
import fbLogo from "../../assets/media-fb.svg";

const Navbar = ({ heroRef, scrollToSection, sections, activeSection }) => {
  const [navbarHeight, setNavbarHeight] = useState("5vw");
  const [logoWidth, setLogoWidth] = useState("logoWidthBig");
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Validar si heroRef está inicializado
      if (!heroRef?.current) return;

      const heroBottom =
        heroRef.current.offsetTop + heroRef.current.offsetHeight;
      const scrollPosition = window.scrollY;

      // Cambiar la altura del Navbar según la posición
      if (scrollPosition < heroBottom) {
        setNavbarHeight("navbarBigHeight");
        setLogoWidth("logoWidthBig");
      } else {
        setNavbarHeight("navbarSmallHeight");
        setLogoWidth("logoWidthSmall");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroRef]);

  const handleScrollTo = (section) => {
    scrollToSection(sections[section]);
    setOpenMenu(false);
  };

  return (
    <div
      className={`${"Navbar"} ${navbarHeight} `}
      style={{
        transition: "height 0.3s ease",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      {openMenu ? (
        <XMarkIcon
          className="navbar-menu-icon"
          onClick={() => setOpenMenu(!openMenu)}
        />
      ) : (
        <Bars3Icon
          className="navbar-menu-icon"
          onClick={() => setOpenMenu(!openMenu)}
        />
      )}

      <figure
        className={`${"navbar-logo-container"} ${
          openMenu ? "logoWidthMenu" : logoWidth
        }`}
        style={{
          width: "",
        }}
        onClick={() => handleScrollTo("hero")}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            transition: "width 0.3s ease",
          }}
        />
      </figure>
      <nav
        className={`navbar-menu-container ${
          openMenu
            ? "navbar-menu-container__open"
            : "navbar-menu-container__close"
        }`}
      >
        <ul className="navbar-menu-list">
          <li
            onClick={() => handleScrollTo("nosotros")}
            className={`navbar-menu-links ${
              activeSection === "nosotros"
                ? "navbar-menu-links__active"
                : "navbar-menu-links__inactive"
            }`}
          >
            Nosotros
          </li>
          <li
            onClick={() => handleScrollTo("servicios")}
            className={`navbar-menu-links ${
              activeSection === "servicios"
                ? "navbar-menu-links__active"
                : "navbar-menu-links__inactive"
            }`}
          >
            Servicios
          </li>
          <li
            onClick={() => handleScrollTo("academia")}
            className={`navbar-menu-links ${
              activeSection === "academia"
                ? "navbar-menu-links__active"
                : "navbar-menu-links__inactive"
            }`}
          >
            Academia
          </li>
          <li
            onClick={() => handleScrollTo("beneficios")}
            className={`navbar-menu-links ${
              activeSection === "beneficios"
                ? "navbar-menu-links__active"
                : "navbar-menu-links__inactive"
            }`}
          >
            Beneficios
          </li>
          <li
            onClick={() => handleScrollTo("sucursales")}
            className={`navbar-menu-links ${
              activeSection === "sucursales"
                ? "navbar-menu-links__active"
                : "navbar-menu-links__inactive"
            }`}
          >
            Sucursales
          </li>
          <li
            onClick={() => handleScrollTo("franquicias")}
            className={`navbar-menu-links ${
              activeSection === "franquicias"
                ? "navbar-menu-links__active"
                : "navbar-menu-links__inactive"
            }`}
          >
            Franquicias
          </li>
          <li
            onClick={() => handleScrollTo("prensa")}
            className={`navbar-menu-links ${
              activeSection === "prensa"
                ? "navbar-menu-links__active"
                : "navbar-menu-links__inactive"
            }`}
          >
            Prensa
          </li>
        </ul>

        <div className="navbar-media-container">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/kustabarbertruck/?hl=es"
            className="navbar-media-links"
          >
            <img
              src={igLogo}
              className="media-ig media-image"
              alt="instagram"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/k%C3%BCsta-barber-truck/?originalSubdomain=ar"
            className="navbar-media-links"
          >
            <img src={inLogo} className="media-in media-image" alt="linkedin" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/KustaBarberTruck?locale=pa_IN"
            className="navbar-media-links"
          >
            <img src={fbLogo} className="media-fb media-image" alt="facebook" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
