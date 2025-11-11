import { useEffect, useState, useContext } from "react";
import { api } from "../utils/api";
import Main from "../components/Main/Main.jsx";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";

export default function Page() {
  const { userData, setUserData, cards, setCards } =
    useContext(CurrentUserContext);

  const [popup, setPopup] = useState(null);

  async function handleCardDelete(card) {
    try {
      await api.deleteCard(card._id);
      setCards((state) => state.filter((c) => c._id !== card._id));
    } catch (error) {
      console.error("Erro ao eliminar card", error);
    }
  }

  async function handleCardLike(card) {
    const isLiked = card.likes.some((userId) => userId === userData._id);
    try {
      const newCard = await api.changeLikeCardStatus(card._id, !isLiked);
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    } catch (error) {
      console.error(error);
    }
  }

  const handleOpenPopup = (popupName) => setPopup(popupName);
  const handleClosePopup = () => setPopup(null);

  // === useEffects ===
  useEffect(() => {
    async function loadCards() {
      try {
        const response = await api.getInicialCards();
        setCards(response);
      } catch (error) {
        console.error("Erro ao buscar cards", error);
      }
    }
    loadCards();
  }, [setCards]);

  useEffect(() => {
    async function loadUser() {
      try {
        const response = await api.getUserInfo();

        setUserData(response);
      } catch (error) {
        console.error("Usuário não encontrado", error);
      }
    }
    loadUser();
  }, [setUserData]);

  return (
    <Main
      userData={userData}
      onOpenPopup={handleOpenPopup}
      onClosePopup={handleClosePopup}
      popup={popup}
      cards={cards}
      onCardLike={handleCardLike}
      onCardDelete={handleCardDelete}
    />
  );
}
