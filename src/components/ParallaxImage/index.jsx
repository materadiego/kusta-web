import React, { useEffect, useRef } from "react";
import "./ParallaxImage.scss";

const ParallaxImage = ({ image, alt, height, children }) => {
  const parallaxRef = useRef(null);

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

  return (
    <div className="parallax-container" style={{ height: height }}>
      <div
        ref={parallaxRef}
        className="parallax-image"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={alt}
      ></div>
      {children}
    </div>
  );
};

export default ParallaxImage;
