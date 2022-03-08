import React, { useState, useEffect } from "react";
import Input from "@components/Input";
import DropBox from "@components/DropBox";
import styles from "@styles/components/registerForm/EducationForm.module.css";

import level from "@components/registerForm/DropBoxData/level.json";
import education from "@components/registerForm/DropBoxData/education.json";

export default function EducationForm({ data, setData, choose }) {
  const handleChange = (e, type) => {
    setData({
      ...data,
      [type]: {
        ...data[type],
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <div className={choose != 3 ? "hidden" : ""}>
        <div className="flex justify-center mt-2">
          <h1 className="flex w-fit justify-center text-3xl font-bold text-white bg-[#9600FF] px-4 py-3 my-8 rounded-2xl">
            ประวัติการศึกษา
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="text-white mb-2">{`ชื่อสถานศึกษา`}</label>
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={(data && data.education) ? data.education.name : ""}
              onChange={(e) => handleChange(e, "education")}
              required={true}
              className="w-full"
            />
          </div>
          <br />
          <div className="flex flex-wrap md:flex-nowrap flex-row justify-between gap-10">
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">{`จังหวัด`}</label>
              <Input
                type="text"
                name="province"
                placeholder="Province"
                value={(data && data.education) ? data.education.province : ""}
                onChange={(e) => handleChange(e, "education")}
                required={true}
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">{`สาขาวิชา`}</label>
              <DropBox
                name="program"
                placeholder="Program"
                onChange={(e) => handleChange(e, "education")}
                required={true}
                option={education}
                value={(data && data.education) ? data.education.program : ""}
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">{`ระดับการศึกษา`}</label>
              <DropBox
                placeholder="Level"
                name="level"
                onChange={(e) => handleChange(e, "education")}
                required={true}
                option={level}
                value={(data && data.education) ? data.education.level : ""}
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">{`เกรดเฉลี่ย`}</label>
              <Input
                type="number"
                name="gpax"
                placeholder="GPAX"
                value={(data && data.education) ? data.education.gpax : ""}
                onChange={(e) => handleChange(e, "education")}
                required={true}
                className="w-full"
                min="1"
                max="4"
              />
            </div>
          </div>
          <Input type="submit">Submit</Input>
        </form>
      </div>
    </>
  );
}
