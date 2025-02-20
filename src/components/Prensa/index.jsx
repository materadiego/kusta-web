import LayoutContainer from "../LayoutContainer";
import prensaBeauty from "../../assets/prensa-beautymarket.png";
import prensaMarcela from "../../assets/prensa-marcela.png";
import prensaInfobae from "../../assets/prensa-infobae.png";
import prensaPancho from "../../assets/prensa-pancho.png";
import prensaCapital from "../../assets/prensa-la-capital.png";
import prensaPuntobiz from "../../assets/prensa-puntobiz.png";
import prensaSinMordaza from "../../assets/prensa-sinmordaza.png";
import prensaImpulso from "../../assets/prensa-impulso.png";
import prensa1 from "../../assets/prensa1.jpeg";
import prensa2 from "../../assets/prensa2.jpeg";
import prensa3 from "../../assets/prensa3.jpeg";
import prensa4 from "../../assets/prensa4.jpeg";
import prensa5 from "../../assets/prensa5.jpeg";
import prensa6 from "../../assets/prensa6.jpeg";
import arrowIcon from "../../assets/arrow-icon.svg";
import { useEffect, useState } from "react";

const Prensa = ({ openImage }) => {
  const [classPage, setClassPage] = useState("page1");
  const [page, setPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Se considera móvil si el ancho es <= 768px
    };

    checkScreenSize(); // Ejecutar la verificación al montar el componente
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    console.log(page);
    setClassPage(`${"page"}${page}`);
  }, [page]);
  console.log(classPage);
  const notePagination = (direction) => {
    direction === "next" ? setPage(page + 1) : setPage(page - 1);
  };

  const images = [prensa1, prensa2, prensa3, prensa4, prensa5, prensa6];
  return (
    <div className="Prensa Section">
      <div className="Overlay Overlay__white"></div>
      <LayoutContainer>
        <h3>Prensa</h3>
        <p className="Subtitle Subtitle__black">
          Noticias que inspiran, Küsta en los medios.
        </p>
        <div className=" SectionContainer prensa-bg-container">
          <div className="  prensa-container ">
            <div
              onClick={() => notePagination("prev", page)}
              className={`arrow-icon-container arrow-icon-container__left ${
                classPage !== "page1"
                  ? "arrow-icon-container__active"
                  : "arrow-icon-container__inactive"
              }`}
            >
              <img src={arrowIcon} alt="previous" />
            </div>

            {isMobile ? (
              <div
                onClick={() => notePagination("next", page)}
                className={`arrow-icon-container arrow-icon-container__right ${
                  classPage !== "page14"
                    ? "arrow-icon-container__active"
                    : "arrow-icon-container__inactive"
                }`}
              >
                <img src={arrowIcon} alt="next" />
              </div>
            ) : (
              <div
                onClick={() => notePagination("next", page)}
                className={`arrow-icon-container arrow-icon-container__right desktop ${
                  classPage !== "page5"
                    ? "arrow-icon-container__active"
                    : "arrow-icon-container__inactive"
                }`}
              >
                <img src={arrowIcon} alt="next" />
              </div>
            )}

            <div className="prensa-subcontainer">
              <div
                className={`prensa-box-wrapper prensa-box-wrapper__${classPage} prensa-box-wrapper__notas`}
              >
                <a
                  href="https://www.beautymarketamerica.com/el-modelo-food-truck-americano-llega-a-la-barberia-17034.php"
                  target="_blank"
                  rel="noreferrer"
                  className="prensa-box-container prensa-box-container__nota"
                >
                  <div className="prensa-box">
                    <figure className="prensa-box-image-container">
                      <img src={prensaBeauty} alt="Beauty Market" />
                    </figure>
                    <p className="prensa-box-title">Beauty Market America</p>
                  </div>
                </a>
                <a
                  href="https://marcelafittipaldi.com.ar/2018/11/la-primera-y-unica-barberia-movil-del-pais-se-lanza-oficialmente-en-buenos-aires/"
                  target="_blank"
                  rel="noreferrer"
                  className="prensa-box-container prensa-box-container__nota"
                >
                  <div className="prensa-box">
                    <figure className="prensa-box-image-container">
                      <img src={prensaMarcela} alt="Marcela Fittipaldi" />
                    </figure>
                    <p className="prensa-box-title">
                      Marcela Fittipaldi Magazine
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.infobae.com/sociedad/2019/01/10/metrosexuales-a-la-playa-depilados-tatuados-y-con-la-barba-prolija-los-que-se-muestran-son-los-hombres/"
                  target="_blank"
                  rel="noreferrer"
                  className="prensa-box-container prensa-box-container__nota"
                >
                  <div className="prensa-box">
                    <figure className="prensa-box-image-container">
                      <img src={prensaInfobae} alt="Infobae" />
                    </figure>
                    <p className="prensa-box-title">Infobae</p>
                  </div>
                </a>
                <a
                  href="http://www.panchodicri.com/2018/12/kusta-barber-truck-la-primera-y-unica.html"
                  target="_blank"
                  rel="noreferrer"
                  className="prensa-box-container prensa-box-container__nota"
                >
                  <div className="prensa-box">
                    <figure className="prensa-box-image-container">
                      <img src={prensaPancho} alt="El Portal de Pancho" />
                    </figure>
                    <p className="prensa-box-title">El Portal de Pancho</p>
                  </div>
                </a>
                <a
                  href="https://www.lacapitalmdp.com/mas-de-170-motos-del-harley-club-ya-rugen-por-las-calles-de-la-ciudad/"
                  target="_blank"
                  rel="noreferrer"
                  className="prensa-box-container prensa-box-container__nota"
                >
                  <div className="prensa-box">
                    <figure className="prensa-box-image-container">
                      <img src={prensaCapital} alt="Diario La Capital" />
                    </figure>
                    <p className="prensa-box-title">Diario La Capital</p>
                  </div>
                </a>
                <a
                  href="https://puntobiz.com.ar/negocios/2019-2-13-5-2-0-el-primer-barber-truck-del-pais-estaciona-en-rosario"
                  target="_blank"
                  rel="noreferrer"
                  className="prensa-box-container prensa-box-container__nota"
                >
                  <div className="prensa-box">
                    <figure className="prensa-box-image-container">
                      <img src={prensaPuntobiz} alt="Puntobiz" />
                    </figure>
                    <p className="prensa-box-title">Puntobiz</p>
                  </div>
                </a>
                <a
                  href="https://sinmordaza.com/noticia/25059-un-barber-truck-desembarco-en-rosario.html"
                  target="_blank"
                  rel="noreferrer"
                  className="prensa-box-container prensa-box-container__nota"
                >
                  <div className="prensa-box">
                    <figure className="prensa-box-image-container">
                      <img src={prensaSinMordaza} alt="Sin Mordaza" />
                    </figure>
                    <p className="prensa-box-title">Sin Mordaza</p>
                  </div>
                </a>
                <a
                  href="https://www.impulsonegocios.com/un-barber-truck-desembarco-en-rosario/"
                  target="_blank"
                  rel="noreferrer"
                  className="prensa-box-container prensa-box-container__nota"
                >
                  <div className="prensa-box">
                    <figure className="prensa-box-image-container">
                      <img src={prensaImpulso} alt="Impulso" />
                    </figure>
                    <p className="prensa-box-title">Impulso</p>
                  </div>
                </a>
                {images.map((image) => (
                  <div
                    className="prensa-box-container prensa-box-container__imagen"
                    onClick={() => openImage("image", image)}
                  >
                    <div className="prensa-box">
                      <figure className="prensa-box-image-container">
                        <img src={image} alt="note-image" />
                      </figure>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
};

export default Prensa;
