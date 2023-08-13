import classes from "../../Login/Login.module.css"


const InputForm = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.State.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.data}</label>
      <input
        type={props.id}
        id={props.id}
        value={props.State.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default InputForm;

