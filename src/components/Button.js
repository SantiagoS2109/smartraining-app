function Button({ children, classStyle, onClick, btnDisabled }) {
  const disabled = btnDisabled;

  return (
    <button
      onClick={onClick}
      className={`button ${classStyle}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
