
export default function Card({ card, handleOpenPopup, isLiked, onCardLike, onCardDelete }) {
  const { name, link } = card;

  const cardLikeButtonClassName = `cards__like ${isLiked ? "active" : null}`

  function handleLikeCard() {
  onCardLike(card)
  }

  function handleDeleteCard(){
    onCardDelete(card)
  }
  return (
    <li className="card">
      <button aria-label="Excluir post" className="cards__trash" onClick={handleDeleteCard}></button>
      <img
        src={link}
        alt={name}
        className="cards__img"
        onClick={() => handleOpenPopup(card)}
      />
      <div className="cards__content">
        <h2 className="cards__title">{name}</h2>
        <button
          className={cardLikeButtonClassName}
          aria-label="Curtir post"
          onClick={handleLikeCard}
        ></button>
      </div>
    </li>
  );
}
