import "./button.styles.scss";
const ButtonType = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = ({ buttontype, children, type, onClick, id }) => {
  return (
    <button
      className={` ${ButtonType[buttontype]} button-container`}
      type={type}
      onClick={onClick}
      id={id}
    >
      {children}
    </button>
  );
};

export default Button;
