import { useContext, useRef, useState } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
export default function NewCard({ onClose }) {
  const nameRef = useRef();
  const linkRef = useRef();

  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);
  const [error, setError] = useState({ name: "", link: "" });

  function handleSubmit(e) {
    e.preventDefault();

    const nameValue = nameRef.current.value;
    const linkValue = linkRef.current.value;

    let errors = { name: "", link: "" };
    if (!nameValue) {
      errors.name = "O título é obrigatório";
    } else if (nameValue.length < 2) {
      errors.name = "Mínimo 2 caracteres";
    }

    if (!linkValue) {
      errors.link = "O link é obrigatório";
    }
    try {
      new URL(linkValue);
    } catch {
      setError("Formato de URL inválido");
    }

    if (errors.name || errors.link) {
      return setError(errors);
    }

    handleAddPlaceSubmit({
      name: nameValue,
      link: linkValue,
    });

    nameRef.current.value = "";
    linkRef.current.value = "";
    setError({ name: "", link: "" });
    onClose();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
    >
      <h3 className="popup__title">Novo Pesonagem</h3>

      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder="Title"
          ref={nameRef}
          required
          type="text"
        />
        <span className="popup__error" id="card-name-error">
          {error.name}
        </span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="card-link"
          name="link"
          placeholder="Image link"
          required
          ref={linkRef}
          type="url"
        />
        <span className="popup__error" id="card-link-error">
          {error.link}
        </span>
      </label>

      <button className="button popup__button" type="submit">
        Criar
      </button>
    </form>
  );
}
