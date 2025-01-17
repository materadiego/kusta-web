import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";

import Academia from "../components/Academia";
import Beneficios from "../components/Beneficios";
import Hero from "../components/Hero";
import Nosotros from "../components/Nosotros";
import Servicios from "../components/Servicios";
import Sucursales from "../components/Sucursales";
import Prensa from "../components/Prensa";
import Franquicias from "../components/Franquicias";

const HomePage = () => {
  const heroRef = useRef(null); // Referencia al componente "Hero"
  const nosotrosRef = useRef(null); // Referencia al componente "Nosotros"
  const lastScrollPosition = useRef(0); // Última posición del scroll
  const [isTransitioning, setIsTransitioning] = useState(false); // Control de transición

  useEffect(() => {
    const handleScroll = () => {
      if (isTransitioning) return; // Evitar scroll durante transición

      const currentScroll = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollDirection =
        currentScroll > lastScrollPosition.current ? "down" : "up";
      lastScrollPosition.current = currentScroll;

      // Detectar scroll hacia abajo (desde Hero a Nosotros)
      if (
        scrollDirection === "down" &&
        currentScroll > viewportHeight * 0.01 && // Umbral del 30% de la pantalla
        currentScroll < viewportHeight * 0.9
      ) {
        setIsTransitioning(true); // Iniciar transición
        window.scrollTo({
          top: nosotrosRef.current.offsetTop,
          behavior: "smooth",
        });

        setTimeout(() => {
          setIsTransitioning(false); // Fin de la transición
        }, 500); // Duración de la transición
      }

      // Detectar scroll hacia arriba (desde Nosotros a Hero)
      if (
        scrollDirection === "up" &&
        currentScroll < viewportHeight * 0.99 && // Umbral del 70% de la pantalla
        currentScroll > viewportHeight * 0.1
      ) {
        setIsTransitioning(true); // Iniciar transición
        window.scrollTo({
          top: heroRef.current.offsetTop,
          behavior: "smooth",
        });

        setTimeout(() => {
          setIsTransitioning(false); // Fin de la transición
        }, 500); // Duración de la transición
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTransitioning]);

  return (
    <div className="HomePage">
      <Navbar heroRef={heroRef} />
      <section ref={heroRef} style={{ height: "100vh", background: "#282c34" }}>
        <Hero />
      </section>
      <section
        ref={nosotrosRef}
        style={{ height: "100vh", background: "#f4f4f4" }}
      >
        <Nosotros />
      </section>
      <Servicios />
      <Academia />
      <Beneficios />
      <Sucursales />
      <Franquicias />
      <Prensa />
    </div>
  );
};

export default HomePage;
