import { useContext, useState } from "react";
import logo from "/images/logo.svg";
import menu from "/images/menu.svg";
import close from "/images/close.svg";

import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Header({ userData, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn } = useContext(CurrentUserContext);

  const home = location.pathname === "/";

  let title = "";
  if (location.pathname === "/login") {
    title = "Faça o seu login";
  } else if (location.pathname === "/register") {
    title = "Faça o seu registro";
  } else {
    title = isLoggedIn ? userData : " ";
  }

  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="Around the USA" className="header__logo" />
        <div className="header__mobile">
          {home && (
            <img
              src={menuOpen ? close : menu}
              alt="menu"
              className="header__menu"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          )}
          <div className="header__login">
            <p>{title}</p>
            {isLoggedIn && home && (
              <button className="header__logout" onClick={onLogout}>
                Sair
              </button>
            )}
          </div>
        </div>
      </div>

      {home && (
        <header className={`header__mobile_open ${menuOpen ? "active" : ""}`}>
          <p>{title}</p>
          {isLoggedIn && home && (
            <button className="header__logout" onClick={onLogout}>
              Sair
            </button>
          )}
        </header>
      )}

      <hr className="header__line" />
    </header>
  );
}
