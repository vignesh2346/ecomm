import "../InputForm.styles.scss";

const InputForm = (props) => {
  const { name, value, onChange, type, label } = props;
  return (
    <div className="group" key={name}>
      <input
        className="form-input"
        required
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      ></input>
      <label className={`${value ? "shrink" : null} form-input-label`}>
        {label}
      </label>
    </div>
  );
};

export default InputForm;
