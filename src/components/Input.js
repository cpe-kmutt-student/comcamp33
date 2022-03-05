import styles from "../styles/components/Input.module.css";

export default function Input(props) {
  const type = props.type;
  if (type === "submit") {
    return (
      <input
        type="submit"
        value={props.value}
        className={props.className + " " + styles.submit}
        onClick={props.onClick}
      />
    );
  }
  return (
    <>
      <input
        name={props.name}
        ref={props.ref}
        placeholder={props.placeholder}
        type={props.type}
        maxLength={props.maxLength}
        pattern={props.pattern}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        className={props.className + " " + styles.Input}
        defaultValue={props.defaultValue}
        key={props.key}
        number={props.number}
      />
    </>
  );
}


