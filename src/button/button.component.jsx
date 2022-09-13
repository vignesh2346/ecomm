import "./button.styles.scss";
const ButtonType = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = ({ buttontype, children, type, onClick }) => {
  return (
    <button
      className={` ${ButtonType[buttontype]} button-container`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
