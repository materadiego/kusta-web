import LayoutContainer from "../LayoutContainer";
import ParallaxImage from "../ParallaxImage";
import image from "../../assets/services4.JPG";
const Academia = () => {
  return (
    <div className="Academia">
      <div className="academia-overlay"></div>

      <ParallaxImage
        image={image}
        alt={"A beautiful random image"}
        height={"100vh"}
      >
        <LayoutContainer>
          <h3>Küsta Academy</h3>
          <p className="academia-subtitle">
            Nuestra trayectoria nos avala hace más de treinta años, con tres
            generaciones de profesionales en el rubro de la peluquería y
            mediante la creación de la exitosa cadena de peluquerías Paulino
            Acosta.
          </p>
          <div className="box-container">
            <div className="academia-box">
              <p className="academia-box-title">Academy</p>
              <p className="academia-box-text"></p>
            </div>
            <div className="academia-box">
              <p className="academia-box-title">Misión</p>
              <p className="academia-box-text">
                Somos sinónimo de innovación, diseño, profesionalismo, estilo y,
                por sobre todo, de calidad. Ofrecemos el mejor servicio sin que
                nuestros clientes sacrifiquen tiempo ni dinero, otorgándoles la
                mayor satisfacción.
              </p>
            </div>
            <div className="academia-box">
              <p className="academia-box-title">Visión</p>
              <p className="academia-box-text">
                Convertirnos en la más reconocida cadena de peluquerías de todo
                el continente, abriendo constantemente nuevos puntos en diversos
                países.
              </p>
            </div>
          </div>
        </LayoutContainer>
      </ParallaxImage>
    </div>
  );
};

export default Academia;
