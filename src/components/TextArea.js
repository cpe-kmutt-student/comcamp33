import React from 'react'

export default function TextArea(props) {
  return (
    <>
      <textarea
        name={props.name}
        ref={props.ref}
        placeholder={props.placeholder}
        type={props.type}
        maxLength={props.maxLength}
        pattern={props.pattern}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        className={'h-36 rounded-xl text-gray-400 border-2 border-white px-2 py-1 rounded-0 outline-none bg-transparent valid:bg-white valid:text-black focus:bg-white' + " " + props.className}
        defaultValue={props.defaultValue}
        key={props.key}
        number={props.number}
      />
    </>
  )
}
