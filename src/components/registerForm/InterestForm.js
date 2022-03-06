import React, { useState, useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import Input from "@components/Input";
import DropBox from "@components/DropBox";
import TextArea from "@components/TextArea";
import CheckBox from "@components/CheckBox";
import styles from "@styles/components/registerForm/InterestForm.module.css";

import trueAndFalse from "@components/registerForm/DropBoxData/trueAndFalse.json";

export default function InterestForm({ choose }) {
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

  useEffect(() => {
    console.log(data.plan);
  }, [data]);

  const handleChangeAdmission = (e) => {
    let valueChange = e.target.value;
    let nameChange = e.target.name;
    let keyChange = e.target.getAttribute("number");

    const newAdmission = data.admission;
    newAdmission[keyChange] = {
      ...newAdmission[keyChange],
      [nameChange]: valueChange,
    };
    setData({
      ...data,
      admission: newAdmission,
    });
  };

  const handleChangePlan = (e) => {
    let nameChange = e.target.name;
    let keyChange = e.target.getAttribute("number");
    let checkValue = e.target.checked;

    const newPlan = data.plan;
    newPlan[keyChange] = checkValue;
    setData({
      ...data,
      plan: newPlan,
    });
  };

  const handleChangeCamp = (e) => {
    let valueChange = e.target.value;
    setData({
      ...data,
      camp: valueChange,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <div className={choose != 4 ? "hidden" : ""}>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <h1 className="flex w-fit justify-center text-3xl font-bold text-white bg-[#9600FF] px-4 py-3 rounded-3xl m-5">
              ความสนใจ
            </h1>
          </div>
          <div className="flex flex-row justify-between gap-5">
            <div className="flex flex-col mb-2 w-full">
              <label className="text-white mb-2">
                มหาวิทยาลัยลำดับที่หนึ่ง
              </label>
              <Input
                type="text"
                name="faculty"
                placeholder="faculty"
                onChange={handleChangeAdmission}
                required={true}
                number="0"
                className="w-full"
              />
            </div>
            <div className="flex flex-col mb-2 w-full">
              <label className="text-white mb-2">คณะลำดับที่หนึ่ง</label>
              <Input
                type="text"
                name="department"
                placeholder="department"
                onChange={handleChangeAdmission}
                required={true}
                number="0"
                className="w-full"
              />
            </div>
            <div className="flex flex-col mb-2 w-full">
              <label className="text-white mb-2">ภาควิชาลำดับที่หนึ่ง</label>
              <Input
                type="text"
                name="university"
                placeholder="university"
                onChange={handleChangeAdmission}
                required={true}
                number="0"
                className="w-full"
              />
            </div>
          </div>
          <br />
          <div className="flex flex-row justify-between gap-5">
            <div className="flex flex-col mb-2 w-full">
              <label className="text-white mb-2">มหาวิทยาลัยลำดับที่สอง</label>
              <Input
                type="text"
                name="faculty"
                placeholder="faculty"
                onChange={handleChangeAdmission}
                required={true}
                number="1"
              />
            </div>
            <div className="flex flex-col mb-2 w-full">
              <label className="text-white mb-2">คณะลำดับที่สอง</label>
              <Input
                type="text"
                name="department"
                placeholder="department"
                onChange={handleChangeAdmission}
                required={true}
                number="1"
              />
            </div>
            <div className="flex flex-col mb-2 w-full">
              <label className="text-white mb-2">ภาควิชาลำดับที่สอง</label>
              <Input
                type="text"
                name="university"
                placeholder="university"
                onChange={handleChangeAdmission}
                required={true}
                number="1"
              />
            </div>
          </div>
          <br />
          <div className="flex flex-row justify-between gap-5">
            <div className="flex flex-col mb-2 w-full">
              <label className="text-white mb-2">มหาวิทยาลัยลำดับที่สาม</label>
              <Input
                type="text"
                name="faculty"
                placeholder="faculty"
                onChange={handleChangeAdmission}
                required={true}
                number="2"
                className="w-full"
              />
            </div>
            <div className="flex flex-col mb-2 w-full">
              <label className="text-white mb-2">คณะลำดับที่สาม</label>
              <Input
                type="text"
                name="department"
                placeholder="department"
                onChange={handleChangeAdmission}
                required={true}
                number="2"
              />
            </div>
            <div className="flex flex-col mb-2 w-full">
              <label className="text-white mb-2">ภาควิชาลำดับที่สาม</label>
              <Input
                type="text"
                name="university"
                placeholder="university"
                onChange={handleChangeAdmission}
                required={true}
                number="2"
              />
            </div>
          </div>
          <br />
          <h2 className="text-white bg-[#DD517E] rounded-full justify-center w-fit p-2 pl-4 pr-4 text-lg">
            หลักสูตรที่สนใจ
          </h2>
          <div className="mt-2">
            {/* <DropBox
              placeholder="plan"
              name="plan"
              onChange={handleChangePlan}
              required={true}
              option={trueAndFalse}
              number="0"
            /> */}
            <label className="flex items-center ml-5 text-white mb-2 w-fit">
              <input
                type="checkbox"
                onChange={handleChangePlan}
                number="0"
                checked={data.plan[0]}
                className="appearance-none border-2 h-4 aspect-square relative mr-2 checked:bg-[rgb(0,0,0)] unchecked:bg-transparent"
              />
              {data.plan[0] == true ? (
                <AiOutlineCheck
                  size={14}
                  className="aspect-square absolute translate-x-[0.1rem]"
                />
              ) : (
                ""
              )}
              หลักสูตรปกติ
            </label>
          </div>
          <br />
          <div>
            {/* <DropBox
              placeholder="plan"
              name="plan"
              onChange={handleChangePlan}
              required={true}
              option={trueAndFalse}
              number="1"
            /> */}
            <label className="flex items-center ml-5 text-white mb-2 w-fit">
              <input
                type="checkbox"
                onChange={handleChangePlan}
                number="1"
                checked={data.plan[1]}
                className="appearance-none border-2 h-4 aspect-square relative mr-2 checked:bg-[rgb(0,0,0)] unchecked:bg-transparent"
              />
              {data.plan[1] == true ? (
                <AiOutlineCheck
                  size={14}
                  className="aspect-square absolute translate-x-[0.1rem]"
                />
              ) : (
                ""
              )}
              หลักสูตรนานาชาติ
            </label>
          </div>
          <br />
          <div>
            {/* <DropBox
              placeholder="plan"
              name="plan"
              onChange={handleChangePlan}
              required={true}
              option={trueAndFalse}
              number="2"
            /> */}
            <label className="flex items-center ml-5 text-white mb-2 w-fit">
              <input
                type="checkbox"
                onChange={handleChangePlan}
                number="2"
                checked={data.plan[2]}
                className="appearance-none border-2 h-4 aspect-square relative mr-2 checked:bg-[rgb(0,0,0)] unchecked:bg-transparent"
              />
              {data.plan[2] == true ? (
                <AiOutlineCheck
                  size={14}
                  className="aspect-square absolute translate-x-[0.1rem]"
                />
              ) : (
                ""
              )}
              หลักสูตรวิทยาศาสตร์สุขภาพ
            </label>
          </div>
          <br />
          <div>
            {/* <DropBox
              placeholder="plan"
              name="plan"
              onChange={handleChangePlan}
              required={true}
              option={trueAndFalse}
              number="3"
            /> */}
            <label className="flex items-center ml-5 text-white mb-2 w-fit">
              <input
                type="checkbox"
                onChange={handleChangePlan}
                number="3"
                checked={data.plan[3]}
                className="appearance-none border-2 h-4 aspect-square relative mr-2 checked:bg-[rgb(0,0,0)] unchecked:bg-transparent"
              />
              {data.plan[3] == true ? (
                <AiOutlineCheck
                  size={14}
                  className="aspect-square absolute translate-x-[0.1rem]"
                />
              ) : (
                ""
              )}
              หลักสูตร Residential College
            </label>
          </div>
          <br />
          <h2 className="text-white bg-[#DD517E] rounded-full justify-center w-fit p-2 pl-4 pr-4 text-lg">
            ค่ายที่เคยเข้าร่วม
          </h2>
          <div className="mt-2">
            <TextArea
              type="text"
              name="camp"
              placeholder="camp"
              value={data.camp}
              onChange={handleChangeCamp}
              required={true}
              className="h-36 w-full rounded-xl"
            />
          </div>
          <br />
          <Input type="submit">Submit</Input>
        </form>
      </div>
    </>
  );
}
