import styles from "../styles/components/DropBox.module.css";

export default function DropBox(props) {
  let optionsList = [];

  for (let i = 0; i < props.option.length; i++) {
    optionsList.push({
      name: props.option[i].name,
      value: props.option[i].value,
    });
  }

  const createOptions = () => {
    let options = [];
    options.push(
      <option name={null} hidden value="" key="0">{optionsList[0].value}</option>
    );
    for (let i = 1; i < optionsList.length; i++) {
      options.push(
        <option name={optionsList[i].name} key={i+1}>
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
        className={props.className + " " + styles.DropBox}
      >
        {createOptions()}
        </select>
    </>
  );
}