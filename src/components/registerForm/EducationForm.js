import React, { useState, useEffect } from "react";
// import Input from "@components/Input";
import DropBox from "@components/DropBox";
import styles from "@styles/components/registerForm/EducationForm.module.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { saveData } from "@src/utils/clientUtils";
import { Select, Form, Input, Button, InputNumber } from "antd";

import level from "@components/registerForm/DropBoxData/level.json";
import education from "@components/registerForm/DropBoxData/education.json";

export default function EducationForm({ data, setData, choose, prev, next }) {

  const { Option } = Select;

  const [form] = Form.useForm();

  // const handleChange = (e, type) => {
  //   setData({
  //     ...data,
  //     [type]: {
  //       ...data[type],
  //       [e.target.name]: e.target.value,
  //     },
  //   });
  // };

  // const handleSubmit = (e) => {
  //   next();
  //   e.preventDefault();
  //   saveData({
  //     ...data,
  //   });
  // };

  const onFinish = (values) => {
    console.log("Success:", values);
    saveData(values);
    next();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className={choose != 3 ? "hidden" : ""}>
        <Form
          form={form}
          name="info"
          // onSubmit={handleSubmit}
          className="space-y-8"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          validateTrigger="onBlur"
          initialValues={data}
        >
          <div className="flex justify-center mt-2">
            <h1 className="flex w-fit justify-center text-3xl font-bold text-white bg-[#9600FF] px-4 py-3 my-8 rounded-2xl">
              ประวัติการศึกษา
            </h1>
          </div>
          {/* <form onSubmit={handleSubmit}> */}
          <Form.Item
            label={<label className="text-white mb-2">{`ชื่อสถานศึกษา`}</label>}
            name={["education", "name"]}
            rules={[{ required: true, message: "กรุณากรอกชื่อโรงเรียน" }]}
          >
            <Input placeholder="โรงเรียน" />
          </Form.Item>
          {/* <label className="text-white mb-2">{`ชื่อสถานศึกษา`} * </label>
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={data && data.education ? data.education.name : ""}
              onChange={(e) => handleChange(e, "education")}
              required={true}
              className="w-full"
            />
          </div> */}
          <br />
          <div className="flex flex-wrap md:flex-nowrap flex-row justify-between gap-10">
            <div className="flex flex-col w-full">
              <Form.Item
                label={<label className="text-white mb-2">{`จังหวัด`}</label>}
                name={["education", "province"]}
                rules={[{ required: true, message: "กรุณากรอกจังหวัด" }]}
              >
                <Input placeholder="จังหวัดโรงเรียน" />
              </Form.Item>
              {/* <label className="text-white mb-2">{`จังหวัด`} * </label>
              <Input
                type="text"
                name="province"
                placeholder="Province"
                value={data && data.education ? data.education.province : ""}
                onChange={(e) => handleChange(e, "education")}
                required={true}
                className="w-full"
              /> */}
            </div>
            <div className="flex flex-col w-full">
            <Form.Item
                label={<label className="text-white mb-2">{`แผนการเรียน`}</label>}
                name={["education", "program"]}
                rules={[{ required: true, message: "กรุณาเลือกแผนการเรียน" }]}
              >
                <Select
                  placeholder="แผนการเรียน"
                  style={{ width: "7rem" }}
                  dropdownClassName="border-2 border-white bg-transparent text-gray-400 px-2 py-1 "
                >
                  {education.map((item) => (
                    <Option
                      key={item.value}
                      value={item.value}
                      className="text-black bg-transparent"
                    >
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              {/* <label className="text-white mb-2">{`แผนการเรียน`} * </label>
              <DropBox
                name="program"
                placeholder="Program"
                onChange={(e) => handleChange(e, "education")}
                required={true}
                option={education}
                value={data && data.education ? data.education.program : ""}
                className="w-full"
              /> */}
            </div>
            <div className="flex flex-col w-full">
            <Form.Item
                label={<label className="text-white mb-2">{`ระดับการศึกษา`}</label>}
                name={["education", "level"]}
                rules={[{ required: true, message: "กรุณาเลือกระดับการศึกษา" }]}
              >
                <Select
                  placeholder="ระดับการศึกษา"
                  style={{ width: "7rem" }}
                  dropdownClassName="border-2 border-white bg-transparent text-gray-400 px-2 py-1 "
                >
                  {level.map((item) => (
                    <Option
                      key={item.value}
                      value={item.value}
                      className="text-black bg-transparent"
                    >
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              {/* <label className="text-white mb-2">{`ระดับการศึกษา`} * </label>
              <DropBox
                placeholder="Level"
                name="level"
                onChange={(e) => handleChange(e, "education")}
                required={true}
                option={level}
                value={data && data.education ? data.education.level : ""}
                className="w-full"
              /> */}
            </div>
            <div className="flex flex-col w-full">
              <Form.Item
                label={
                  <label className="text-white mb-2">{`เกรดเฉลี่ย`}</label>
                }
                name={["education", "gpax"]}
                rules={[{ required: true,  message: "กรุณากรอกเกรดเฉลี่ย" }]}
              >
                <InputNumber
                  placeholder="เกรดเฉลี่ย"  
                  min="0"
                  max="4"
                  step="0.01"
                />
              </Form.Item>
              {/* <label className="text-white mb-2">{`เกรดเฉลี่ย`} * </label>
              <Input
                type="number"
                step="0.01"
                name="gpax"
                placeholder="GPAX"
                value={data && data.education ? data.education.gpax : ""}
                onChange={(e) => handleChange(e, "education")}
                required={true}
                className="w-full"
                min="1.00"
                max="4.00"
              /> */}
            </div>
          </div>
          <div className="flex justify-between my-5 z-20">
            <button type="button" onClick={prev}>
              <AiFillCaretLeft size="4.5rem" color="rgb(236,72,153)" />
            </button>

            <button type="submit">
              <AiFillCaretRight
                size="4.5rem"
                color={"rgb(236,72,153)"}
                style={{ display: [5].includes(choose) ? "none" : "block" }}
              />
            </button>
          </div>
          {/* </form> */}
        </Form>
      </div>
    </>
  );
}
