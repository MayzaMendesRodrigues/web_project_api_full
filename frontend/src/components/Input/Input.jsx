export default function Input({
  variant,
  name,
  placeholder,
  type,
  value,
  onChange,
}) {
  return (
    <>
      <input
        className={`popup__input ${
          variant == "primary"
            ? "popup__input_variant_primary"
            : "popup__input_variant_secondary"
        }`}
        name={name}
        placeholder={placeholder}
        required
        type={type}
        value={value}
        onChange={onChange}
      />
      <span className="popup__error" id="card-link-error"></span>
    </>
  );
}
