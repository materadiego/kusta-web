import Button from "../Button";
import logo from "../../assets/Logo-K-dorado-png.png";
import LayoutContainer from "../LayoutContainer";
import { forwardRef } from "react";

const Hero = forwardRef((props, ref) => {
  return (
    <div className="Hero" ref={ref}>
      <LayoutContainer>
        <div className="hero-container">
          <img src={logo} alt="" />
          <h2>
            Es sinónimo de innovacion, diseño, profesionalismo, estilo y por
            sobre todo sinónimo de calidad.
          </h2>
          <Button text={"Conocé más"} color={"transparent"} margin={"0"} />
        </div>
      </LayoutContainer>
    </div>
  );
});

export default Hero;
