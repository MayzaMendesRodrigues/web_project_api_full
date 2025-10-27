import "../index.css";
import AuthForm from "../components/AuthForm/AuthForm.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Login({ handleLogin, errorMessage }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <AuthForm
        title="Entrar"
        buttonTitle="Entrar"
        data={data}
        setData={setData}
        handleSubmitAction={handleLogin}
        errorMessage={errorMessage}
      />
      <p>Ainda não é membro?</p>
      <Link to="/register"> Inscreva-se aqui </Link>
    </>
  );
}
