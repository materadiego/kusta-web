import LayoutContainer from "../LayoutContainer";
import locationIcon from "../../assets/location-icon.svg";

const Sucursales = ({ openLocation }) => {
  const locations = [
    {
      title: "Paseo Pilar, Del Viso",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.6142941815133!2d-58.80688310000001!3d-34.4365512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9fd4a6a341a5%3A0x25e2501728f471a8!2sPaseo%20Pilar!5e0!3m2!1ses!2sar!4v1737378128330!5m2!1ses!2sar",
    },
    {
      title: "Tortugas Open Mall, Tortuguitas",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.982360631092!2d-58.72956082448408!3d-34.45259564953255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca20c117bf0e3%3A0xcd856576ed4b2105!2sTortugas%20Open%20Mall!5e0!3m2!1ses!2sar!4v1737379427811!5m2!1ses!2sar",
    },
    {
      title: "Abasto Shopping, CABA",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.011300354572!2d-58.4135646244763!3d-34.60387575750625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8c854bd13f%3A0xfc0cf5c054da4aa1!2sAbasto%20Shopping!5e0!3m2!1ses!2sar!4v1737379457162!5m2!1ses!2sar",
    },
    {
      title: "Alto Avellaneda Shopping, Avellaneda",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.1773226035866!2d-58.370031924472606!3d-34.675473861290904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33334248ec25d%3A0x438c219aee66c1bb!2sAlto%20Avellaneda%20Shopping!5e0!3m2!1ses!2sar!4v1737379481872!5m2!1ses!2sar",
    },
    {
      title: "Nine Shopping, Moreno",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.779386374649!2d-58.7950977244746!3d-34.63501495915144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc943827bbee43%3A0xc90a792c5740a307!2sNine%20Shopping!5e0!3m2!1ses!2sar!4v1737379514777!5m2!1ses!2sar",
    },
    {
      title: "Alto Rosario Shopping, Rosario",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.8916321423076!2d-60.6715766245605!3d-32.92746127091936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b654abc3ab1d5f%3A0x2f90ce97db2c5a6!2sAlto%20Rosario%20Shopping.!5e0!3m2!1ses!2sar!4v1737379550313!5m2!1ses!2sar",
    },
    {
      title: "Paseo Libertad, Rosario",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.844004149173!2d-60.66901472455651!3d-33.007887974984016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7abfcf51fbd01%3A0xb13295499b55fc9!2sPaseo%20LIBERTAD%20%E2%80%93%20Rosario!5e0!3m2!1ses!2sar!4v1737379591976!5m2!1ses!2sar",
    },
  ];
  return (
    <div className="Sucursales Section">
      <div className="Overlay Overlay__black"></div>
      <LayoutContainer>
        <h3>Sucursales</h3>
        <div className="sucursales-container SectionContainer">
          <div className="sucursales-subcontainer">
            {locations.map((location) => (
              <div
                key={location.title}
                className="sucursales-button-container"
                onClick={() => openLocation("map", location)}
              >
                <img src={locationIcon} alt="location" />
                <p className="sucursales-button">{location.title}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
};

export default Sucursales;
