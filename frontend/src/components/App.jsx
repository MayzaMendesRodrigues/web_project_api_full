import * as auth from "../utils/auth";

import "../index.css";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { setToken } from "../utils/token";
import { useContext, useEffect, useState } from "react";

import Login from "../screens/Login.jsx";
import Page from "../screens/Page.jsx";
import Register from "../screens/Register.jsx";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import { api } from "../utils/api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import ProtectedRouter from "./ProtectedRouter/ProtectedRouter.jsx";

export default function App() {
  const [userEmail, setUserEmail] = useState();
  const { isLoggedIn, setIsLoggedIn } = useContext(CurrentUserContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (
    { email, password, confirmPassword },
    setIsSucess
  ) => {
    if (password === confirmPassword) {
      auth
        .register(email, password)
        .then((data) => {
          if (data) {
            setToken(data);
            setIsSucess(true);
            setTimeout(() => {
              const redirectPath = location.state?.from?.pathname || "/login";
              navigate(redirectPath);
            }, 2000);
          }
        })
        .catch((error) => {
          setIsSucess(false);
          setTimeout(() => {
            const redirectPath = location.state?.from?.pathname || "/register";
            navigate(redirectPath);
          }, 2000);
          console.error("entrou no catch:", error);
        });
    }
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    auth
      .authorize(email, password)
      .then((data) => {
        setToken(data.token);
        setIsLoggedIn(true);
        navigate("/");
        setUserEmail(email);
        localStorage.setItem("email", email);
        api.updateAuthorization(data.token);
      })
      .catch((error) => alert("Email ou senha incorreta", error));
  };
  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     const jwt = getToken();
  //     if (!jwt) {
  //       return;
  //     }

  //     api
  //       .getUserInfo()
  //       .then((profile) => {
  //         console.log("Profile:", profile);
  //         setIsLoggedIn(true);
  //       })

  //       .catch((error) => {
  //         console.error(error);
  //         setIsLoggedIn(false);
  //       });
  //   }
  // }, []);

  useEffect(() => {
    if (!userEmail) {
      const res = localStorage.getItem("email");
      setUserEmail(res);
    }
  }, [userEmail]);

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="page">
      <Header userData={userEmail} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/register"
          element={<Register handleRegister={handleRegister} />}
        />

        <Route path="/login" element={<Login handleLogin={handleLogin} />} />

        <Route
          path="/"
          element={
            <ProtectedRouter>
              <Page />
            </ProtectedRouter>
          }
        />

        <Route
          path="*"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
