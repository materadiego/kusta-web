import Button from "../Button";
import LayoutContainer from "../LayoutContainer";

const Franquicias = () => {
  return (
    <div className="Franquicias">
      <div className="franquicias-overlay"></div>
      <LayoutContainer>
        <h3>Franquicias</h3>
        <p>Barbería sobre ruedas: Franquicias únicas para socios con visión.</p>
        <Button text={"contactanos"} color={"transparent"} margin={"2vw 0 0"} />
      </LayoutContainer>
    </div>
  );
};

export default Franquicias;
