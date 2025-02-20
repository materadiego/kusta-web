import Button from "../Button";
import LayoutContainer from "../LayoutContainer";
import ParallaxImage from "../ParallaxImage";
import image from "../../assets/franquicias-bg3.jpg";
import { useEffect, useState } from "react";
const Franquicias = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Se considera móvil si el ancho es <= 768px
    };

    checkScreenSize(); // Ejecutar la verificación al montar el componente
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getHeight = () => {
    return isMobile ? "40vh" : "25vw";
  };
  return (
    <div className="Franquicias Section">
      <ParallaxImage
        image={image}
        alt={"franquicias"}
        height={getHeight()}
        position={"center 40%"}
      >
        <div className="Overlay Overlay__black"></div>
        <LayoutContainer>
          <h3>Franquicias</h3>
          <p className="franquicias-subtitle Subtitle Subtitle__white">
            Barbería sobre ruedas, franquicias únicas para socios con visión.
          </p>
          <a
            href="https://wa.me/5491136961903"
            rel="noreferrer"
            target="_blank"
          >
            <Button
              text={"contactanos"}
              color={"transparent"}
              margin={"2vw 0 0"}
            />
          </a>
        </LayoutContainer>
      </ParallaxImage>
    </div>
  );
};

export default Franquicias;
