import React, { useState } from "react";
import Input from "@components/Input";
import DropBox from "@components/DropBox";
import styles from "@styles/components/registerForm/EducationForm.module.css";

import level from "@components/registerForm/DropBoxData/level.json";

export default function EducationForm() {
  const [data, setData] = useState({
    name: "",
    province: "",
    program: "",
    level: "",
    gpax: "",
  });

  const handleChange = (e) => {
    let valueChange = e.target.value;
    let nameChange = e.target.name;
    setData({
      ...data,
      [nameChange]: valueChange,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <lable>
          {`ชื่อสถาบัน`}
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={data.name}
              onChange={handleChange}
              required={true}
            />
          </div>
        </lable>
        <br />
        <lable>
          {`จังหวัด`}
          <div>
            <Input
              type="text"
              name="province"
              placeholder="Province"
              value={data.province}
              onChange={handleChange}
              required={true}
            />
          </div>
        </lable>
        <br />
        <lable>
          {`สาขาวิชา`}
          <div>
            <Input
              type="text"
              name="program"
              placeholder="Program"
              value={data.program}
              onChange={handleChange}
              required={true}
            />
          </div>
        </lable>
        <br />
        <lable>
          {`ระดับการศึกษา`}
          <div>
            <DropBox
              placeholder="Level"
              name="level"
              onChange={handleChange}
              required={true}
              option={level}
            />
          </div>
        </lable>
        <br />
        <lable>
          {`เกรดเฉลี่ย`}
          <div>
            <Input
              type="number"
              name="gpax"
              placeholder="GPAX"
              value={data.gpax}
              onChange={handleChange}
              required={true}
            />
          </div>
        </lable>
        <br />
        <Input type="submit">Submit</Input>
      </form>
    </>
  );
}
