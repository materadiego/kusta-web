import Button from "../Button";
import logo from "../../assets/Logo-K-dorado-png.png";
import LayoutContainer from "../LayoutContainer";
import { forwardRef } from "react";

const Hero = forwardRef(({ scrollToSection, sections, ...props }, ref) => {
  const handleScrollTo = (section) => {
    if (!sections || !sections[section]) {
      console.error(`Sección "${section}" no encontrada.`);
      return;
    }
    scrollToSection(sections[section]);
  };

  return (
    <div className="Hero Section" ref={ref}>
      <LayoutContainer>
        <div className="hero-container">
          <img src={logo} alt="" />
          <h2>
            Es sinónimo de innovación, diseño, profesionalismo, estilo y por
            sobre todo sinónimo de calidad.
          </h2>
          <Button
            text={"Conocé más"}
            color={"transparent"}
            margin={"0"}
            action={() => handleScrollTo("nosotros")}
          />
        </div>
      </LayoutContainer>
    </div>
  );
});

export default Hero;
