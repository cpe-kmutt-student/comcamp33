import React, { useState, useEffect } from "react";
import Input from "@components/Input";
import DropBox from "@components/DropBox";
import styles from "@styles/components/registerForm/EducationForm.module.css";

import level from "@components/registerForm/DropBoxData/level.json";

export default function EducationForm({ choose }) {
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
      <div className={choose != 2 ? "hidden" : ""}>
        <div className="flex justify-center">
          <h1 className="flex w-fit justify-center text-3xl font-bold text-white bg-[#9600FF] px-4 py-3 rounded-2xl">
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
              value={data.name}
              onChange={handleChange}
              required={true}
              className="w-full"
            />
          </div>
          <br />
          <div className="flex flex-row items-end justify-between gap-10">
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">{`จังหวัด`}</label>
              <Input
                type="text"
                name="province"
                placeholder="Province"
                value={data.province}
                onChange={handleChange}
                required={true}
                className="w-full"
              />
            </div>
            <br />
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">{`สาขาวิชา`}</label>
              <DropBox
                name="program"
                placeholder="Program"
                onChange={handleChange}
                required={true}
                option={level}
                className="w-full"
              />
            </div>
            <br />
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">{`ระดับการศึกษา`}</label>
              <DropBox
                placeholder="Level"
                name="level"
                onChange={handleChange}
                required={true}
                option={level}
                className="w-full"
              />
            </div>
            <br />
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">{`เกรดเฉลี่ย`}</label>
              <Input
                type="number"
                name="gpax"
                placeholder="GPAX"
                value={data.gpax}
                onChange={handleChange}
                required={true}
                className="w-full"
              />
            </div>
          </div>

          <br />
          <Input type="submit">Submit</Input>
        </form>
      </div>
    </>
  );
}
