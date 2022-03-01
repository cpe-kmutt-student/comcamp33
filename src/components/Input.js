import styles from "../styles/components/Input.module.css";

export default function InputBox(props) {
  const type = props.type;
  if (type === "submit") {
    return (
      <input
        type="submit"
        value={props.value}
        className={styles.submit}
        onClick={props.onClick}
      />
    );
  } else if (type === "button") {
    return (
      <button className={styles.button} onClick={props.onClick}>
        {props.value}
      </button>
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
        className={props.type + " " + styles.Input}
      />
    </>
  );
}
