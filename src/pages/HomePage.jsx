import { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import Academia from "../components/Academia";
import Beneficios from "../components/Beneficios";
import Hero from "../components/Hero";
import Nosotros from "../components/Nosotros";
import Servicios from "../components/Servicios";
import Sucursales from "../components/Sucursales";
import Prensa from "../components/Prensa";
import Franquicias from "../components/Franquicias";
import Modal from "../components/Modal";
import Footer from "../components/Footer";

const HomePage = () => {
  const heroRef = useRef(null);
  const nosotrosRef = useRef(null);
  const serviciosRef = useRef(null);
  const academiaRef = useRef(null);
  const beneficiosRef = useRef(null);
  const sucursalesRef = useRef(null);
  const franquiciasRef = useRef(null);
  const prensaRef = useRef(null);

  const [activeSection, setActiveSection] = useState("hero");
  const [openModal, setOpenModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const openModalInfo = (type, info) => {
    setOpenModal(true);
    setModalInfo({ type: type, info: info });
  };

  const sectionRefs = {
    hero: heroRef,
    nosotros: nosotrosRef,
    servicios: serviciosRef,
    academia: academiaRef,
    beneficios: beneficiosRef,
    sucursales: sucursalesRef,
    franquicias: franquiciasRef,
    prensa: prensaRef,
  };
  useEffect(() => {
    const handleScroll = () => {
      const sectionKeys = Object.keys(sectionRefs);
      for (let i = 0; i < sectionKeys.length; i++) {
        const key = sectionKeys[i];
        const ref = sectionRefs[key];
        if (!ref.current) continue;

        const { top, bottom } = ref.current.getBoundingClientRect();
        if (top <= window.innerHeight / 2 && bottom > window.innerHeight / 2) {
          setActiveSection(key);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs]);

  return (
    <div className="HomePage">
      <Navbar
        scrollToSection={scrollToSection}
        sections={sectionRefs}
        activeSection={activeSection}
        heroRef={heroRef}
      />
      <section ref={heroRef} style={{ height: "100vh", background: "#282c34" }}>
        <Hero scrollToSection={scrollToSection} sections={sectionRefs} />
      </section>
      <section ref={nosotrosRef} style={{ background: "#f4f4f4" }}>
        <Nosotros />
      </section>
      <section ref={serviciosRef}>
        <Servicios />
      </section>
      <section ref={academiaRef}>
        <Academia />
      </section>
      <section ref={beneficiosRef}>
        <Beneficios />
      </section>
      <section ref={sucursalesRef}>
        <Sucursales openLocation={openModalInfo} />
      </section>
      <section ref={franquiciasRef}>
        <Franquicias />
      </section>
      <section ref={prensaRef}>
        <Prensa openImage={openModalInfo} />
      </section>
      <Footer />
      {openModal && <Modal modalInfo={modalInfo} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default HomePage;
