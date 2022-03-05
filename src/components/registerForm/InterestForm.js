import React, { useState, useEffect } from "react";
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

  useEffect(()=>{
    console.log(data);
  }, [data])

  const handleChangeAdmission = (e) => {
    let valueChange = e.target.value;
    let nameChange = e.target.name;
    let keyChange = e.target.getAttribute('number');

    const newAdmission = data.admission;
    newAdmission[keyChange] = {
      ...newAdmission[keyChange],
      [nameChange]: valueChange
    };
    setData({
      ...data,
      admission: newAdmission,
    })
    console.log(keyChange);
  }


  const handleChangePlan = (e) => {
    let valueChange = e.target.value;
    let nameChange = e.target.name;
    let keyChange = e.target.getAttribute('number');

    const newPlan = data.plan;
    newPlan[keyChange] = {
      ...newPlan[keyChange],
      valueChange
    };
    setData({
      ...data,
      plan: newPlan,
    })
    console.log(keyChange);
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
        <label>
          {`admission`}
        </label>
        <div>
          <Input
            type="text"
            name="faculty"
            placeholder="faculty"
            onChange={handleChangeAdmission}
            required={false}
            number="0"
          />
          <Input
            type="text"
            name="department"
            placeholder="department"
            onChange={handleChangeAdmission}
            required={false}
            number="0"
          />
          <Input
            type="text"
            name="university"
            placeholder="university"
            onChange={handleChangeAdmission}
            required={false}
            number="0"
          />
        </div>
        <br />
        <div>
          <Input
            type="text"
            name="faculty"
            placeholder="faculty"
            onChange={handleChangeAdmission}
            required={false}
            number="1"
          />
          <Input
            type="text"
            name="department"
            placeholder="department"
            onChange={handleChangeAdmission}
            required={false}
            number="1"
          />
          <Input
            type="text"
            name="university"
            placeholder="university"
            onChange={handleChangeAdmission}
            required={false}
            number="1"
          />
        </div>
        <br />
        <div>
          <Input
            type="text"
            name="faculty"
            placeholder="faculty"
            onChange={handleChangeAdmission}
            required={false}
            number="2"
          />
          <Input
            type="text"
            name="department"
            placeholder="department"
            onChange={handleChangeAdmission}
            required={false}
            number="2"
          />
          <Input
            type="text"
            name="university"
            placeholder="university"
            onChange={handleChangeAdmission}
            required={false}
            number="2"
          />
        </div>
        <br />
        <label>
          {`plan`}
        </label>
        <div>
          <DropBox
            placeholder="plan"
            name="plan"
            onChange={handleChangePlan}
            required={false}
            option={trueAndFalse}
            number="0"
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
            number="1"
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
            number="2"
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
            number="2"
          />
        </div>
        <br />
        <label>
          {`camp`}
        </label>
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
        <Input type="submit">Submit</Input>
      </form>
    </>
  );
}
