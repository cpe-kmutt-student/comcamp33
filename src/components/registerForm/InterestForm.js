import React, { useState } from "react";
import Input from "@components/Input";
import DropBox from "@components/DropBox";
import styles from "@styles/components/registerForm/InterestForm.module.css";

import trueAndFalse from "@components/registerForm/DropBoxData/trueAndFalse.json";

export default function InterestForm() {
  const [data, setData] = useState({
    admission: [
      {
        faculty: "",
        department: "",
        university: "",
      },
      {
        faculty: "",
        department: "",
        university: "",
      },
      {
        faculty: "",
        department: "",
        university: "",
      },
    ],
    plan: [false, false, false, false],
    camp: "",
  });

  const handleChangeAdmission = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  const handleChangePlan = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  const handleChangeCamp = (e) => {
    const { value } = e.target;
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <lable>
          {`admission`}
          <div>
            <Input
              type="text"
              name="faculty"
              placeholder="faculty"
              value={data.admission[0].faculty}
              onChange={handleChangeAdmission}
              required={false}
            />
            <Input
              type="text"
              name="department"
              placeholder="department"
              value={data.admission[0].department}
              onChange={handleChangeAdmission}
              required={false}
            />
            <Input
              type="text"
              name="university"
              placeholder="university"
              value={data.admission[0].university}
              onChange={handleChangeAdmission}
              required={false}
            />
          </div>
          <br />
          <div>
            <Input
              type="text"
              name="faculty"
              placeholder="faculty"
              value={data.admission[1].faculty}
              onChange={handleChangeAdmission}
              required={false}
            />
            <Input
              type="text"
              name="department"
              placeholder="department"
              value={data.admission[1].department}
              onChange={handleChangeAdmission}
              required={false}
            />
            <Input
              type="text"
              name="university"
              placeholder="university"
              value={data.admission[1].university}
              onChange={handleChangeAdmission}
              required={false}
            />
          </div>
          <br />
          <div>
            <Input
              type="text"
              name="faculty"
              placeholder="faculty"
              value={data.admission[2].faculty}
              onChange={handleChangeAdmission}
              required={false}
            />
            <Input
              type="text"
              name="department"
              placeholder="department"
              value={data.admission[2].department}
              onChange={handleChangeAdmission}
              required={false}
            />
            <Input
              type="text"
              name="university"
              placeholder="university"
              value={data.admission[2].university}
              onChange={handleChangeAdmission}
              required={false}
            />
          </div>
          <br />
        </lable>
        <lable>
          {`plan`}
          <div>
            <DropBox
              placeholder="plan"
              name="plan"
              onChange={handleChangePlan}
              required={false}
              option={trueAndFalse}
            />
          </div>
          <br />
          <div>
            <DropBox
              placeholder="plan"
              name="plan"
              onChange={handleChangePlan}
              required={false}
              option={trueAndFalse}
            />
          </div>
          <br />
          <div>
            <DropBox
              placeholder="plan"
              name="plan"
              onChange={handleChangePlan}
              required={false}
              option={trueAndFalse}
            />
          </div>
          <br />
          <div>
            <DropBox
              placeholder="plan"
              name="plan"
              onChange={handleChangePlan}
              required={false}
              option={trueAndFalse}
            />
          </div>
          <br />
        </lable>
        <lable>
          {`camp`}
          <div>
            <Input
              type="text"
              name="camp"
              placeholder="camp"
              value={data.camp}
              onChange={handleChangeCamp}
              required={false}
            />
          </div>
          <br />
        </lable>
        <Input type="submit">Submit</Input>
      </form>
    </>
  );
}
