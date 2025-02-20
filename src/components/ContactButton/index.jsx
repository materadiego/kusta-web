import wspLogo from "../../assets/redes-wsp.svg";
const ContactButton = () => {
  return (
    <a
      href="https://wa.me/5491136961903"
      rel="noreferrer"
      target="_blank"
      className="ContactButton"
    >
      <img src={wspLogo} alt="Contact" />
    </a>
  );
};

export default ContactButton;
