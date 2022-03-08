import React from "react";
import {AiOutlineCheck} from "react-icons/ai";

export default function CheckBox(props) {
  return (
    <>
      <input
        name={props.name}
        ref={props.ref}
        placeholder={props.placeholder}
        type="checkbox"
        maxLength={props.maxLength}
        pattern={props.pattern}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        className={
          "appearance-none border-2 h-4 aspect-square relative mr-2" +
          " " +
          props.className
        }
        defaultValue={props.defaultValue}
        key={props.key}
        number={props.number}
      />
      {props.checked == true ? (
        <AiOutlineCheck size={14} className="aspect-square absolute translate-x-[0.09rem] -translate-y-[1.5rem]" />
      ) : (
        ""
      )}
    </>
  );
}
