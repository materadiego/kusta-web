import React, { useEffect, useRef, useState } from "react";
import "./ParallaxImage.scss";

const ParallaxImage = ({ image, alt, height, position, children }) => {
  const parallaxRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Se considera móvil si el ancho es <= 768px
    };

    checkScreenSize(); // Ejecutar la verificación al montar el componente
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        const scrollPosition =
          window.scrollY || document.documentElement.scrollTop;
        const sectionTop = rect.top + scrollPosition; // Posición inicial de la sección
        const viewportHeight = window.innerHeight;
        const speed = 0.3; // Ajusta este valor para controlar la intensidad

        // Cálculo del desplazamiento dinámico (misma dirección del scroll)
        const translateY =
          (scrollPosition - sectionTop + viewportHeight) * -speed;

        parallaxRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const imageUrl = () => {
    return isMobile ? `url(${image})` : "none";
  };
  const imagePosition = () => {
    if (alt === "academia") return "50% 0%";
    if (alt === "franquicias") return "40% 41%";
    return;
  };
  return (
    <div
      className={`parallax-container ${
        isMobile && "parallax-container__mobile"
      }`}
      style={{
        height: height,
        backgroundImage: imageUrl(),
        backgroundPosition: imagePosition(),
      }}
    >
      {!isMobile && (
        <div
          ref={parallaxRef}
          className="parallax-image parallax-image__animated"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: `${position}`,
          }}
          role="img"
          aria-label={alt}
        ></div>
      )}
      {children}
    </div>
  );
};

export default ParallaxImage;
