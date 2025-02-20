import { forwardRef } from "react";
import LayoutContainer from "../LayoutContainer";

const Nosotros = forwardRef((props, ref) => {
  return (
    <div className="Section Nosotros " ref={ref}>
      <div className="Overlay Overlay__black"></div>
      <LayoutContainer>
        <h3>Nosotros</h3>
        <p className="Subtitle Subtitle__white">
          Küsta Barber Truck es la primera barbería y peluquería móvil del país.
        </p>
        <div className="BoxContainer SectionContainer">
          <div className="Box Box__border nosotros-box">
            <p className="BoxTitle ">INNOVACIÓN</p>
            <p className="BoxText">
              Se trata de un formato disruptivo, innovador y único en el mercado
              que nace como respuesta a la necesidad creciente de hombres de
              cuidar su imagen y a la vez, optimizar su tiempo.
            </p>
          </div>
          <div className="Box Box__border nosotros-box">
            <p className="BoxTitle">COMPROMISO</p>
            <p className="BoxText">
              En un ambiente cómodo, moderno, ameno y cálido, Küsta brinda un
              servicio ágil, de calidad y excelencia. Cuenta con un staff de
              profesionales altamente capacitados, que son formados de manera
              constante y sostenida por la marca para conocer y ofrecer siempre
              las últimas alternativas y tendencias del rubro.
            </p>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
});

export default Nosotros;
