import { forwardRef } from "react";
import LayoutContainer from "../LayoutContainer";

const Nosotros = forwardRef((props, ref) => {
  return (
    <div className="Nosotros" ref={ref}>
      <div className="nosotros-overlay"></div>
      <LayoutContainer>
        <h3>Nosotros</h3>
        <p className="nosotros-subtitle">
          Küsta Barber Truck es la primera barbería y peluquería móvil del país.
        </p>
        <div className="nosotros-box-container">
          <div className="nosotros-box">
            <p className="nosotros-box-title">INNOVACIÓN</p>
            <p className="nosotros-box-text">
              Se trata de un formato disruptivo, innovador y único en el mercado
              que nace como respuesta a la necesidad creciente de hombres de
              cuidar su imagen y a la vez, optimizar su tiempo.
            </p>
          </div>
          <div className="nosotros-box">
            <p className="nosotros-box-title">COMPROMISO</p>
            <p className="nosotros-box-text">
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
