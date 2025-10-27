import Popup from "../Main/Popup";

export default function InfoTooltip({ onClose, image, text }) {
  return (
    <Popup onClose={onClose}>
      <form className="popup__form" name="card-form" noValidate>
        <div className="popup__info">
          <img src={image} alt="" className="popup__info-img" />
          <h3 className="popup__title">{text}</h3>
        </div>
      </form>
    </Popup>
  );
}
