import LayoutContainer from "../LayoutContainer";
import Button from "../Button";
import scissorsIcon from "../../assets/icon-kusta.png";
import wonomaLogo from "../../assets/logo-wonoma.png";
const Servicios = () => {
  return (
    <div className="Servicios ">
      <div className="Section Servicios__Services">
        <LayoutContainer>
          <h3>Servicios</h3>
          <div className="services-container SectionContainer">
            <div className="services-subcontainer">
              <a
                href="https://wa.me/5491136961903"
                rel="noreferrer"
                target="_blank"
                className="services-box services-box__1"
              >
                <div className="Overlay Overlay__light-black"></div>
                <div className="services-box-content  BoxTitle">CORTE</div>
              </a>
              <a
                href="https://wa.me/5491136961903"
                rel="noreferrer"
                target="_blank"
                className="services-box services-box__2"
              >
                <div className="Overlay Overlay__light-black"></div>
                <div className="services-box-content BoxTitle">AFEITADO</div>
              </a>
              <a
                href="https://wa.me/5491136961903"
                rel="noreferrer"
                target="_blank"
                className="services-box services-box__3"
              >
                <div className="Overlay Overlay__light-black"></div>
                <div className="services-box-content BoxTitle">
                  CORTE Y BARBA
                </div>
              </a>
            </div>
          </div>
        </LayoutContainer>
      </div>
      <div className="Section Servicios__Wonoma">
        <div className="wonoma-container">
          <div className="wonoma-image-container">
            <div className="wonoma-image-subcontainer wonoma-image-subcontainer"></div>
          </div>
          <div className="wonoma-content-container">
            <div className="Overlay Overlay__yellow"></div>

            <div className="wonoma-content">
              <figure className="wonoma-logo-container">
                <img src={wonomaLogo} alt="wonoma-logo" />
              </figure>
              <p className="wonoma-title">
                Reservá tu turno con Wonoma, fácil y rápido en nuestra sucursal
                de Tortugas Open Mall (entrada Sodimac)
              </p>
              <div className="wonoma-box-container">
                <div className="wonoma-box">
                  <div className="icon-container icon-container__1"></div>
                  <p className="wonoma-box-title">Disponibilidad 24/7</p>
                  <p className="wonoma-box-text">
                    Elegí tu turno en cualquier momento, sin depender del
                    horario del salón.
                  </p>
                </div>
                <div className="wonoma-box">
                  <div className="icon-container icon-container__2"></div>

                  <p className="wonoma-box-title">Confirmaciones automáticas</p>
                  <p className="wonoma-box-text">
                    Recibí recordatorios y evitá olvidos.
                  </p>
                </div>
                <div className="wonoma-box">
                  <div className="icon-container icon-container__3"></div>

                  <p className="wonoma-box-title">Acceso a promociones</p>
                  <p className="wonoma-box-text">
                    Aprovechá descuentos exclusivos al reservar online.
                  </p>
                </div>
              </div>

              <a
                href="https://www.wonoma.com/es-AR/salon/kusta-barber-tom"
                target="_blank"
                rel="noreferrer"
              >
                RESERVAR TURNO
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
