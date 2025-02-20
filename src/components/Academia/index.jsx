import Button from "../Button";
import LayoutContainer from "../LayoutContainer";
import ParallaxImage from "../ParallaxImage";
import image from "../../assets/services4.JPG";
import mariano from "../../assets/mariano2.jpg";
import logoCmc from "../../assets/logo-cmc-blanco.png";
const Academia = () => {
  return (
    <div className="Academia Section">
      <div className="Overlay Overlay__black"></div>

      <ParallaxImage
        image={image}
        alt={"academia"}
        height={"auto"}
        position={"center 0%"}
      >
        <LayoutContainer>
          <h3>Küsta Academy</h3>
          <p className="Subtitle Subtitle__white">
            Nuestra trayectoria nos avala hace más de treinta años, con tres
            generaciones de profesionales en el rubro de la peluquería y
            mediante la creación de la exitosa cadena de peluquerías Paulino
            Acosta.
          </p>
          <div className="Box  SectionContainer academia-box-container">
            <div className=" academia-box">
              <p className="BoxTitle">Academy</p>
              <p className="BoxText">
                Küsta nace como respuesta a la necesidad creciente del cliente
                de cuidar su imagen y a la vez opti- mizar su tiempo. El
                servicio que brinda Küsta se ajusta a las necesidades del
                cliente moderno, sin descuidar todos los aspectos que conforman
                su respuesta única de servicio. Un diagnóstico profesional,
                tratamientos específicos para cada tipo de cabello.
              </p>
            </div>
            <div className="  academia-box">
              <p className="BoxTitle">Misión</p>
              <p className="BoxText">
                Somos sinónimo de innovación, diseño, profesionalismo, estilo y,
                por sobre todo, de calidad. Ofrecemos el mejor servicio sin que
                nuestros clientes sacrifiquen tiempo ni dinero, otorgándoles la
                mayor satisfacción.
              </p>
            </div>
            <div className="  academia-box">
              <p className="BoxTitle">Visión</p>
              <p className="BoxText">
                Convertirnos en la más reconocida cadena de peluquerías de todo
                el continente, abriendo constantemente nuevos puntos en diversos
                países.
              </p>
            </div>
          </div>
          <div className="logo-container">
            <img src={logoCmc} alt="CMC America" />
            <p className="Subtitle Subtitle__white cmc-text">
              Nuestro centro de formación está afiliado a la CMC AMÉRICA
              (Confederación Mundial de Couffure y Estética), la comunidad
              beauty más grande del mundo que une a los mejores profesionales de
              la industria.
            </p>
          </div>

          <div className="Box  mariano-box-container">
            <div className="academia-subcontainer">
              <figure>
                <img
                  className="mariano-image"
                  src={mariano}
                  alt="Mariano Acosta"
                />
              </figure>
              <p className="BoxText mariano-box">
                Mariano Acosta, presidente de la CMC AMÉRICA y fundador de Küsta
                Academy, lidera con determinación y visión estratégica el
                desarrollo empresarial, consolidando el éxito de nuestra
                academia.
              </p>
            </div>
          </div>
          <Button
            text={"consultanos por nuestros cursos "}
            color={"transparent"}
            className="academia-button"
            margin={"4vw auto 0"}
          />
        </LayoutContainer>
      </ParallaxImage>
    </div>
  );
};

export default Academia;
