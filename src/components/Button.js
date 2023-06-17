function Button({ children, classStyle, onClick }) {
  return (
    <button onClick={onClick} className={`button ${classStyle}`}>
      {children}
    </button>
  );
}

export default Button;
