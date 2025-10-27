import check from "/images/check.svg";
import unchecked from "/images/unchecked.svg";
import { useState } from "react";
import "../index.css";
import AuthForm from "../components/AuthForm/AuthForm.jsx";
import { Link } from "react-router-dom";
import InfoTooltip from "../components/InfoTooltip/InfoTooltip.jsx";

export default function Register({ handleRegister }) {
  const [isSucess, setIsSucess] = useState(null);
  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (data) => {
    setTooltipOpen(true);
    handleRegister(data, setIsSucess);
  };

  const handleClosedTooltip = () => {
    setTooltipOpen(false);
  };

  return (
    <>
      <AuthForm
        title="Inscrever-se"
        buttonTitle="Inscrever-se"
        data={data}
        setData={setData}
        handleSubmitAction={handleSubmit}
      />
      <p>Ainda não é membro?</p>
      <Link to="/login"> Inscreva-se aqui </Link>

      {isTooltipOpen && isSucess !== null && (
        <InfoTooltip
          onClose={handleClosedTooltip}
          image={isSucess ? check : unchecked}
          text={
            isSucess
              ? "Sucesso! Seu registro foi concluído."
              : "Ops, algo deu errado! Por favor, tente novamente."
          }
        />
      )}
    </>
  );
}
