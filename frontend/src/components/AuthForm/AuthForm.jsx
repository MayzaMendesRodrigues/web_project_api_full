import Input from "../Input/Input";

export default function AuthForm({
  title,
  buttonTitle,
  data,
  setData,
  handleSubmitAction,
  errorMessage,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitAction(data);
  };

  return (
    <>
      <form className="form__sign" onSubmit={handleSubmit}>
        <h3 className="form__title">{title}</h3>

        <label className="popup__field">
          <Input
            variant={"secondary"}
            name={"email"}
            placeholder={"E-mail"}
            type={"email"}
            value={data.email}
            onChange={handleChange}
          />
        </label>

        <label className="popup__field">
          <Input
            variant={"secondary"}
            name={"password"}
            placeholder={"Senha"}
            type={"password"}
            value={data.password}
            onChange={handleChange}
          />
          <span className="popup__error" id="card-link-error">
            {errorMessage}
          </span>
        </label>

        {title === "Inscrever-se" && (
          <label className="popup__field">
            <Input
              variant={"secondary"}
              name={"confirmPassword"}
              placeholder={"Confirmar senha"}
              type={"password"}
              value={data.confirmPassword}
              onChange={handleChange}
            />
          </label>
        )}

        <button className=" form__button" type="submit">
          {buttonTitle}
        </button>
      </form>
    </>
  );
}
