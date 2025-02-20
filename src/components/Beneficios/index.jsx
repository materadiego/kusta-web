import LayoutContainer from "../LayoutContainer";
import logoOsde from "../../assets/logo-osde.webp";
import logoAse from "../../assets/logo-ase.png";
import logoSwiss from "../../assets/logo-swiss.png";
import logoMedife from "../../assets/logo-medife.png";
import logoSport from "../../assets/logo-sport.png";
import logoShell from "../../assets/logo-shell.png";
import logoNacion from "../../assets/logo-nacion.png";
import logoBrubank from "../../assets/logo-brubank.png";

const Beneficios = () => {
  return (
    <div className="Beneficios Section">
      {/* <div className="Overlay Overlay__white"></div> */}
      <LayoutContainer>
        <h3>Beneficios</h3>
        <p className="Subtitle Subtitle__black">
          Alianzas que suman, más beneficios para ti
        </p>
        <div className="brands-container SectionContainer Box">
          <div className="brands-wrapper">
            <figure className="brands-logo-container">
              <img
                src={logoOsde}
                className="brands-logo-image brands-logo-image__osde"
                alt="OSDE"
              />
            </figure>
            <figure className="brands-logo-container">
              <img
                src={logoAse}
                className="brands-logo-image brands-logo-image__ase"
                alt="Ase Nacional"
              />
            </figure>
            <figure className="brands-logo-container">
              <img
                src={logoSwiss}
                className="brands-logo-image brands-logo-image__swiss"
                alt="Swiss Medical"
              />
            </figure>
            <figure className="brands-logo-container">
              <img
                src={logoMedife}
                className="brands-logo-image brands-logo-image__medife"
                alt="Medifé"
              />
            </figure>
            <figure className="brands-logo-container">
              <img
                src={logoSport}
                className="brands-logo-image brands-logo-image__sport"
                alt="Sport Club"
              />
            </figure>
            <figure className="brands-logo-container">
              <img
                src={logoShell}
                className="brands-logo-image brands-logo-image__shell"
                alt="Shell Box"
              />
            </figure>
            <figure className="brands-logo-container">
              <img
                src={logoNacion}
                className="brands-logo-image brands-logo-image__nacion"
                alt="Club La Nación"
              />
            </figure>
            <figure className="brands-logo-container">
              <img
                src={logoBrubank}
                className="brands-logo-image brands-logo-image__brubank"
                alt="Brubank"
              />
            </figure>

            <figure className="brands-logo-container">
              <img
                src={logoOsde}
                className="brands-logo-image brands-logo-image__osde"
                alt="OSDE"
              />
            </figure>
            <figure className="brands-logo-container">
              <img
                src={logoAse}
                className="brands-logo-image brands-logo-image__ase"
                alt="Ase Nacional"
              />
            </figure>
            <figure className="brands-logo-container">
              <img
                src={logoSwiss}
                className="brands-logo-image brands-logo-image__swiss"
                alt="Swiss Medical"
              />
            </figure>
            <figure className="brands-logo-container">
              <img
                src={logoMedife}
                className="brands-logo-image brands-logo-image__medife"
                alt="Medifé"
              />
            </figure>
            <figure className="brands-logo-container">
              <img
                src={logoSport}
                className="brands-logo-image brands-logo-image__sport"
                alt="Sport Club"
              />
            </figure>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
};

export default Beneficios;
