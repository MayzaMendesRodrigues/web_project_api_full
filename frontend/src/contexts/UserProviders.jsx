import { api } from "../utils/api";
import { useState, useEffect } from "react";
import { getToken } from "../utils/token";
import CurrentUserContext from "./CurrentUserContext";

const UserProviders = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const jwt = getToken();
    if (jwt) {
      api.updateAuthorization(jwt);
      setIsLoggedIn(true);
    }
  }, []);

  const handleAddPlaceSubmit = async (data) => {
    try {
      const newCard = await api.addCard(data);
      setCards([newCard, ...cards]);
    } catch (error) {
      console.error("Erro ao adicionar cartão", error);
    }
  };

  const handleUpdateAvatar = async (data) => {
    try {
      const newPhoto = await api.setNewPhoto(data);
      setUserData(newPhoto);
    } catch (error) {
      console.error("Erro ao atualizar avatar", error);
    }
  };

  const handleUpdateUser = async (data) => {
    try {
      const newData = await api.setUserInfo(data);

      setUserData(newData);
    } catch (error) {
      console.error("Erro ao atualizar usuário", error);
    }
  };

  const context = {
    userData,
    setUserData,
    cards,
    setCards,
    handleAddPlaceSubmit,
    handleUpdateAvatar,
    handleUpdateUser,
    isLoggedIn,
    setIsLoggedIn,
  };
  return (
    <CurrentUserContext.Provider value={context}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default UserProviders;
