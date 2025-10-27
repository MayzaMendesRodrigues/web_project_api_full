import closed from "/images/plus.svg";

export default function Popup(props) {
  const { onClose, title, children } = props;
  return (
    <div className="popup">
      <div className="popup__content">
        <button
          aria-label="Fechar popup"
          onClick={onClose}
          className="popup__closed"
        >
          <img src={closed} alt="Fechar" />
        </button>

        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
