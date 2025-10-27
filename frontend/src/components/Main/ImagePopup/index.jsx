
export default function ImagePopup({ card }) {
  return (
    <div className="popup__images">
      <img className="popup__images-img" src={card.link} alt={card.name} />
      <p className="popup__images-title">{card.name}</p>
    </div>
  );
}
