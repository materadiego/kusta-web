import LayoutContainer from "../LayoutContainer";
import services5 from "../../assets/services5.JPG";
import services1 from "../../assets/services1.jpg";
import services3 from "../../assets/services3.JPG";
import services4 from "../../assets/services4.JPG";
import scissorsIcon from "../../assets/icon-kusta.png";
const Servicios = () => {
  return (
    <div className="Servicios">
      <div className="services-overlay"></div>
      <LayoutContainer>
        <h3>Servicios</h3>
        <div className="services-container">
          <div className="services-subcontainer">
            <p className="services-description">
              Nuestros servicios se caracterizan por llevar a la práctica
              propuestas tradicionales para satisfacer a nuestros clientes más
              exigentes y propuestas que mantienen la misma calidad pero se
              adaptan a los mas cambiantes.
            </p>
            <ul className="services-list">
              <li className="services-item">
                <img src={scissorsIcon} alt="" />
                CORTE DE CABELLO
              </li>
              <li className="services-item">
                <img src={scissorsIcon} alt="" />
                CORTE DE NIÑO
              </li>
              <li className="services-item">
                <img src={scissorsIcon} alt="" />
                AFEITADO TRADICIONAL
              </li>
              <li className="services-item">
                <img src={scissorsIcon} alt="" />
                AFEITADO MODERNO
              </li>
              <li className="services-item">
                <img src={scissorsIcon} alt="" />
                RECORTE DE BARBA
              </li>
              <li className="services-item">
                <img src={scissorsIcon} alt="" />
                DISEÑO SIMPLE
              </li>
              <li className="services-item">
                <img src={scissorsIcon} alt="" />
                FULL DISEÑO
              </li>
              <li className="services-item">
                <img src={scissorsIcon} alt="" />
                HAIR TATTOO
              </li>
              <li className="services-item">
                <img src={scissorsIcon} alt="" />
                BLACK MASK
              </li>
              <li className="services-item">
                <img src={scissorsIcon} alt="" />
                CORTE + BARBA
              </li>
              <li className="services-item">
                <img src={scissorsIcon} alt="" />
                CORTE + HAIR TATTOO
              </li>
            </ul>
          </div>
          <div className="services-subcontainer">
            <div className="services-image-container">
              {/* <img src={services4} alt="" className="services-image" /> */}
              <img src={services3} alt="" className="services-image" />
              {/* <img src={services1} alt="" className="services-image" /> */}
              {/* <img src={services5} alt="" className="services-image" /> */}
            </div>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
};

export default Servicios;
