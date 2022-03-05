// import styles from "../styles/components/Input.module.css";

export default function Input(props) {
  const type = props.type;
  if (type === "submit") {
    return (
      <input
        type="submit"
        value={props.value}
        className={props.className}
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
        className={'text-gray-400 border-2 border-white px-2 py-1 rounded-0 outline-none bg-transparent focus:bg-white' + " " + props.className}
        defaultValue={props.defaultValue}
        key={props.key}
        number={props.number}
      />
    </>
  );
}