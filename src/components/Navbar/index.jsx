import { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import logo from "../../assets/Logo-KBT-blanco-png.png";
import igLogo from "../../assets/media-ig.svg";
import inLogo from "../../assets/media-in.svg";
import fbLogo from "../../assets/media-fb.svg";

const Navbar = ({ heroRef }) => {
  const [navbarHeight, setNavbarHeight] = useState("5vw");
  const [logoWidth, setLogoWidth] = useState("100%");

  useEffect(() => {
    const handleScroll = () => {
      // Validar si heroRef está inicializado
      if (!heroRef?.current) return;

      const heroBottom =
        heroRef.current.offsetTop + heroRef.current.offsetHeight;
      const scrollPosition = window.scrollY;

      // Cambiar la altura del Navbar según la posición
      if (scrollPosition < heroBottom) {
        setNavbarHeight("5vw");
        setLogoWidth("100%");
      } else {
        setNavbarHeight("3vw");
        setLogoWidth("50%");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroRef]);

  return (
    <div
      className="Navbar"
      style={{
        height: navbarHeight,
        transition: "height 0.3s ease",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Bars3Icon className="navbar-menu-icon" />
      <figure className="navbar-logo-container">
        <img
          src={logo}
          alt="logo"
          style={{
            width: logoWidth,
            transition: "width 0.3s ease",
          }}
        />
      </figure>
      <nav className="navbar-menu-container">
        <ul className="navbar-menu-list">
          <li className="navbar-menu-links">Nosotros</li>
          <li className="navbar-menu-links">Servicios</li>
          <li className="navbar-menu-links">Academia</li>
          <li className="navbar-menu-links">Beneficios</li>
          <li className="navbar-menu-links">Sucursales</li>
          <li className="navbar-menu-links">Franquicias</li>
          <li className="navbar-menu-links">Prensa</li>
        </ul>
      </nav>

      <div className="navbar-media-container">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/kustabarbertruck/?hl=es"
          className="navbar-media-links"
        >
          <img src={igLogo} alt="" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/company/k%C3%BCsta-barber-truck/?originalSubdomain=ar"
          className="navbar-media-links"
        >
          <img src={inLogo} alt="" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/KustaBarberTruck?locale=pa_IN"
          className="navbar-media-links"
        >
          <img src={fbLogo} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
