import styles from "../styles/components/Input.module.css";

export function Input(props) {
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
      />
    </>
  );
}

export function DropBox(props) {
  let optionsList = [];

  for (let i = 0; i < props.option.length; i++) {
    optionsList.push({
      name: props.option[i].name,
      value: props.option[i].placeholder,
    });
  }

  const createOptions = () => {
    let options = [];
    options.push(
      <option name={optionsList[0].name} hidden value={null} defaultValue={null} key="0">
        {optionsList[0].value}
      </option>
    );
    for (let i = 1; i < optionsList.length; i++) {
      options.push(
        <option name={optionsList[i].name} key={i}>
          {optionsList[i].value}
        </option>
      );
    }
    return options;
  };

  return (
    <>
      <select
        name={props.name}
        onChange={props.onChange}
        required={props.required}
        children={createOptions()}
        className={props.className + " " + styles.DropBox}
      />
    </>
  );
}
