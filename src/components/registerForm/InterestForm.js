import React, { useState, useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import Input from "@components/Input";
import DropBox from "@components/DropBox";
import TextArea from "@components/TextArea";
import CheckBox from "@components/CheckBox";
import styles from "@styles/components/registerForm/InterestForm.module.css";

import trueAndFalse from "@components/registerForm/DropBoxData/trueAndFalse.json";

export default function InterestForm({ data, setData, choose }) {
  // const [data, setData] = useState({
  //   admission: [
  //     {
  //       faculty: "",
  //       department: "",
  //       university: "",
  //     },
  //     {
  //       faculty: "",
  //       department: "",
  //       university: "",
  //     },
  //     {
  //       faculty: "",
  //       department: "",
  //       university: "",
  //     },
  //   ],
  //   plan: [false, false, false, false],
  //   camp: "",
  // });


  const handleChangeAdmission = (e) => {
    let name = e.target.name;
    let keyChange = e.target.getAttribute("number");
    const newAdmissions = (data.interest && data.interest.admission) ? data.interest.admission : [] ;
    newAdmissions[keyChange] = (data.interest && data.interest.admission) ? {
      ...data.interest.admission[keyChange],
      [name]: e.target.value,
    } : { [name]: e.target.value}  ;

    setData({
      ...data,
      "interest" : {
        ...data.interest,
        admission: newAdmissions,
      },
    });
    //console.log(data);
  };

  const handleChangePlan = (e) => {
    let keyChange = e.target.getAttribute("number");
    const newPlans = (data.interest && data.interest.plan) ? data.interest.plan : [];
    newPlans[keyChange] = e.target.checked;
    console.log(newPlans)
    setData({
      ...data,
      interest: {
        ...data.interest,
        plan: newPlans,
      },
    });
    console.log(data)
  };

  const handleChangeCourse = (e) => {
    setData({
      ...data,
      interest: {
        ...data.interest,
        camp: e.target.value,
      },
    });
    console.log(data)
  }

  return (
    <>
      <div className={choose != 4 ? "hidden" : ""}>
        <form>
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
                name="university"
                placeholder="university"
                onChange={(e) => {
                  handleChangeAdmission(e);
                }}
                required={true}
                number="0"
                className="w-full"
                value={
                  (data.interest &&
                    data.interest.admission &&
                    data.interest.admission[0] &&
                    data.interest.admission[0].university) ||
                  ""
                }
              />
            </div>
            <div className="flex flex-col mb-2 w-full">
              <label className="text-white mb-2">คณะลำดับที่หนึ่ง</label>
              <Input
                type="text"
                name="department"
                placeholder="department"
                onChange={(e) => {
                  handleChangeAdmission(e);
                }}
                required={true}
                number="0"
                className="w-full"
                value={
                  (data.interest &&
                    data.interest.admission &&
                    data.interest.admission[0] &&
                    data.interest.admission[0].department) ||
                  ""
                }
              />
            </div>
            <div className="flex flex-col mb-2 w-full">
              <label className="text-white mb-2">ภาควิชาลำดับที่หนึ่ง</label>
              <Input
                type="text"
                name="faculty"
                placeholder="faculty"
                onChange={(e) => {
                  handleChangeAdmission(e);
                }}
                required={true}
                number="0"
                className="w-full"
                value={
                  (data.interest &&
                    data.interest.admission &&
                    data.interest.admission[0] &&
                    data.interest.admission[0].faculty) ||
                  ""
                }
              />
            </div>
          </div>
          <br />
          <div className="flex flex-row justify-between gap-5">
            <div className="flex flex-col mb-2 w-full">
              <label className="text-white mb-2">มหาวิทยาลัยลำดับที่สอง</label>
              <Input
                type="text"
                name="unsiversity"
                placeholder="unsiversity"
                onChange={(e) => {
                  handleChangeAdmission(e);
                }}
                required={true}
                number="1"
                value={
                  (data.interest &&
                    data.interest.admission &&
                    data.interest.admission[1] &&
                    data.interest.admission[1].unsiversity) ||
                  ""
                }
              />
            </div>
            <div className="flex flex-col mb-2 w-full">
              <label className="text-white mb-2">คณะลำดับที่สอง</label>
              <Input
                type="text"
                name="department"
                placeholder="department"
                onChange={(e) => {
                  handleChangeAdmission(e);
                }}
                required={true}
                number="1"
                value={
                  (data.interest &&
                    data.interest.admission &&
                    data.interest.admission[1] &&
                    data.interest.admission[1].department) ||
                  ""
                }
              />
            </div>
            <div className="flex flex-col mb-2 w-full">
              <label className="text-white mb-2">ภาควิชาลำดับที่สอง</label>
              <Input
                type="text"
                name="faculty"
                placeholder="faculty"
                onChange={(e) => {
                  handleChangeAdmission(e);
                }}
                required={true}
                number="1"
                value={
                  (data.interest &&
                    data.interest.admission &&
                    data.interest.admission[1] &&
                    data.interest.admission[1].faculty) ||
                  ""
                }
              />
            </div>
          </div>
          <br />
          <div className="flex flex-row justify-between gap-5">
            <div className="flex flex-col mb-2 w-full">
              <label className="text-white mb-2">มหาวิทยาลัยลำดับที่สาม</label>
              <Input
                type="text"
                name="university"
                placeholder="university"
                onChange={(e) => {
                  handleChangeAdmission(e);
                }}
                required={true}
                number="2"
                className="w-full"
                value={
                  (data.interest &&
                    data.interest.admission &&
                    data.interest.admission[2] &&
                    data.interest.admission[2].university) ||
                  ""
                }
              />
            </div>
            <div className="flex flex-col mb-2 w-full">
              <label className="text-white mb-2">คณะลำดับที่สาม</label>
              <Input
                type="text"
                name="department"
                placeholder="department"
                onChange={(e) => {
                  handleChangeAdmission(e);
                }}
                required={true}
                number="2"
                value={
                  (data.interest &&
                    data.interest.admission &&
                    data.interest.admission[2] &&
                    data.interest.admission[2].department) ||
                  ""
                }
              />
            </div>
            <div className="flex flex-col mb-2 w-full">
              <label className="text-white mb-2">ภาควิชาลำดับที่สาม</label>
              <Input
                type="text"
                name="faculty"
                placeholder="faculty"
                onChange={(e) => {
                  handleChangeAdmission(e);
                }}
                required={true}
                number="2"
                value={
                  (data.interest &&
                    data.interest.admission &&
                    data.interest.admission[2] &&
                    data.interest.admission[2].faculty) ||
                  ""
                }
              />
            </div>
          </div>
          <br />
          <h2 className="text-white bg-[#DD517E] rounded-full justify-center w-fit p-2 pl-4 pr-4 text-lg">
            หลักสูตรที่สนใจ
          </h2>
          <div className="mt-2">
            <label className="flex items-center ml-5 text-white mb-2 w-fit">
              <input
                type="checkbox"
                onChange={(e) => handleChangePlan(e)}
                number="0"
                name="plan"
                checked={
                  (data.interest &&
                    data.interest.plan &&
                    data.interest.plan[0]) ||
                  false
                }
                className="appearance-none border-2 h-4 aspect-square relative mr-2 checked:bg-[rgb(0,0,0)] unchecked:bg-transparent"
              />
              {data.interest &&
              data.interest.plan &&
              data.interest.plan[0] == true ? (
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
            <label className="flex items-center ml-5 text-white mb-2 w-fit">
              <input
                type="checkbox"
                onChange={(e) => handleChangePlan(e)}
                number="1"
                checked={
                  (data.interest &&
                    data.interest.plan &&
                    data.interest.plan[1]) ||
                  false
                }
                className="appearance-none border-2 h-4 aspect-square relative mr-2 checked:bg-[rgb(0,0,0)] unchecked:bg-transparent"
              />
              {data.interest &&
              data.interest.plan &&
              data.interest.plan[1] == true ? (
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
            <label className="flex items-center ml-5 text-white mb-2 w-fit">
              <input
                type="checkbox"
                onChange={(e) => handleChangePlan(e)}
                number="2"
                checked={
                  (data.interest &&
                    data.interest.plan &&
                    data.interest.plan[2]) ||
                  false
                }
                className="appearance-none border-2 h-4 aspect-square relative mr-2 checked:bg-[rgb(0,0,0)] unchecked:bg-transparent"
              />
              {data.interest &&
              data.interest.plan &&
              data.interest.plan[2] == true ? (
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
            <label className="flex items-center ml-5 text-white mb-2 w-fit">
              <input
                type="checkbox"
                onChange={(e) => handleChangePlan(e)}
                number="3"
                checked={
                  (data.interest &&
                    data.interest.plan &&
                    data.interest.plan[3]) ||
                  false
                }
                className="appearance-none border-2 h-4 aspect-square relative mr-2 checked:bg-[rgb(0,0,0)] unchecked:bg-transparent"
              />
              {data.interest &&
              data.interest.plan &&
              data.interest.plan[3] == true ? (
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
              value={(data.interest &&
                data.interest.camp) ||
              ""}
              onChange={(e) => handleChangeCourse(e)}
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