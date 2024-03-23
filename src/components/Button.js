function Button({ children, classStyle, onClick, btnDisabled }) {
  const disabled = btnDisabled;

  return (
    <button
      onClick={onClick}
      className={`button ${classStyle} bg-gray-200 hover:bg-gray-300`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
