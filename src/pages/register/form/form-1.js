import React, { useState } from "react";
import Input from "../../../components/Input";

export default function Form() {
  const [data, setData] = useState({
    firstNane: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <lable>
          {`First Name: `}
          <Input
            type="email"
            name="firstNane"
            placeholder="First Name"
            value={data.firstNane}
            onChange={handleChange}
            required={true}
          />
        </lable>
        <br />
        <lable>
          {`Last Name:  `}
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={data.lastName}
            onChange={handleChange}
            required={false}
          />
        </lable>
        <br />
        <Input type="submit" value="Submit" />
        <Input type="button" value="Cancel" />
      </form>
    </div>
  );
}
