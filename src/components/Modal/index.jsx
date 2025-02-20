import locationIcon from "../../assets/location-icon.svg";
import closeIcon from "../../assets/close-icon.svg";
const Modal = ({ modalInfo, setOpenModal }) => {
  console.log(modalInfo);
  const renderView = () => {
    if (modalInfo.type === "map") {
      return (
        <>
          <p className="modal-title">
            {" "}
            <img src={locationIcon} alt="icon" />
            {modalInfo.info.title}
          </p>
          <iframe
            title="paseo-pilar"
            src={modalInfo.info.link}
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </>
      );
    } else if (modalInfo.type === "image") {
      return (
        <figure className="modal-image-container">
          <img src={modalInfo.info} alt={modalInfo.info} />
        </figure>
      );
    }
  };

  return (
    <div className="Modal">
      <div
        className={`modal-container ${
          modalInfo.type === "image"
            ? "modal-container__large"
            : "modal-container__small"
        }`}
      >
        <div className="close-icon" onClick={() => setOpenModal(false)}>
          <img src={closeIcon} alt="close" />
        </div>
        <div className="view-container">{renderView()}</div>
      </div>
    </div>
  );
};

export default Modal;
