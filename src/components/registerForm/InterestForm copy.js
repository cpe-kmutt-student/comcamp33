import React, { useState, useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";
// import Input from "@components/Input";
import DropBox from "@components/DropBox";
import TextArea from "@components/TextArea";
import CheckBox from "@components/CheckBox";
import styles from "@styles/components/registerForm/InterestForm.module.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { saveData } from "@src/utils/clientUtils";
import { Form, Input, Button } from "antd";

import trueAndFalse from "@components/registerForm/DropBoxData/trueAndFalse.json";

export default function InterestForm({ data, setData, choose, prev, next }) {
  const [form] = Form.useForm();
  const handleChangeAdmission = (e) => {
    let name = e.target.name;
    let keyChange = e.target.getAttribute("number");
    const newAdmissions =
      data.interest && data.interest.admission ? data.interest.admission : [];
    newAdmissions[keyChange] =
      data.interest && data.interest.admission
        ? {
            ...data.interest.admission[keyChange],
            [name]: e.target.value,
          }
        : { [name]: e.target.value };

    setData({
      ...data,
      interest: {
        ...data.interest,
        admission: newAdmissions,
      },
    });
    //console.log(data);
  };

  const handleChangePlan = (e) => {
    let keyChange = e.target.getAttribute("number");
    const newPlans =
      data.interest && data.interest.plan ? data.interest.plan : [];
    newPlans[keyChange] = e.target.checked;

    setData({
      ...data,
      interest: {
        ...data.interest,
        plan: newPlans,
      },
    });
    // console.log(data)
  };

  const handleChangeCourse = (e) => {
    setData({
      ...data,
      interest: {
        ...data.interest,
        camp: e.target.value,
      },
    });
    // console.log(data)
  };

  const handleSubmit = (e) => {
    next();
    e.preventDefault();
    saveData({
      ...data,
    });
    // console.log(data);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    saveData(values);
    next();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    console.log("incoming ", data);
    form.resetFields();
  }, [data]);

  return (
    <>
      <div className={choose != 4 ? "hidden" : ""}>
        <Form
          form={form}
          name="interest"
          // onSubmit={handleSubmit}
          className="space-y-8"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          validateTrigger="onBlur"
          initialValues={data}
        >
          {/* <form onSubmit={handleSubmit}> */}
          <div className="flex justify-center">
            <h1 className="flex w-fit justify-center text-3xl font-bold text-white bg-[#9600FF] px-4 py-3 my-8 rounded-2xl">
              ความสนใจ
            </h1>
          </div>
          <div className="flex flex-wrap md:flex-nowrap flex-row justify-between gap-5">
            <div className="flex flex-col mb-2 w-full">
              <Form.Item
                label={
                  <label className="text-white mb-2">
                    มหาวิทยาลัยลำดับที่หนึ่ง
                  </label>
                }
                name={["interest", `admission`, 0, "university"]}
                rules={[{ required: true, message: "กรุณากรอกชื่อมหาวิทยาลัย" }]}
              >
                <Input placeholder="มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี" />
              </Form.Item>
              {/* <label className="text-white mb-2">
                มหาวิทยาลัยลำดับที่หนึ่ง *{" "}
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
                  (data &&
                    data.interest &&
                    data.interest.admission &&
                    data.interest.admission[0] &&
                    data.interest.admission[0].university) ||
                  ""
                }
              /> */}
            </div>
            <div className="flex flex-col mb-2 w-full">
              <Form.Item
                label={
                  <label className="text-white mb-2">คณะลำดับที่หนึ่ง</label>
                }
                name={["interest", "admission", (0), "department"]}
                rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
              >
                <Input placeholder="วิศวกรรมศาสตร์" />
              </Form.Item>
              {/* <label className="text-white mb-2">คณะลำดับที่หนึ่ง * </label>
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
                  (data &&
                    data.interest &&
                    data.interest.admission &&
                    data.interest.admission[0] &&
                    data.interest.admission[0].department) ||
                  ""
                }
              /> */}
            </div>
            <div className="flex flex-col mb-2 w-full">
              <Form.Item
                label={
                  <label className="text-white mb-2">
                    ภาควิชาลำดับที่หนึ่ง
                  </label>
                }
                name={["interest", "admission", (0), "faculty"]}
                rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
              >
                <Input placeholder="ชื่อ (ภาษาไทย)" />
              </Form.Item>
              {/* <label className="text-white mb-2">ภาควิชาลำดับที่หนึ่ง * </label>
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
                  (data &&
                    data.interest &&
                    data.interest.admission &&
                    data.interest.admission[0] &&
                    data.interest.admission[0].faculty) ||
                  ""
                }
              /> */}
            </div>
          </div>
          <br />
          <div className="flex flex-wrap md:flex-nowrap flex-row justify-between gap-5">
            <div className="flex flex-col mb-2 w-full">
              <Form.Item
                label={
                  <label className="text-white mb-2">
                    มหาวิทยาลัยลำดับที่สอง
                  </label>
                }
                name={["interest", "admission", [1], "university"]}
                rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
              >
                <Input placeholder="ชื่อ (ภาษาไทย)" />
              </Form.Item>
              {/* <label className="text-white mb-2">มหาวิทยาลัยลำดับที่สอง </label>
              <Input
                type="text"
                name="university"
                placeholder="university"
                onChange={(e) => {
                  handleChangeAdmission(e);
                }}
                number="1"
                value={
                  (data &&
                    data.interest &&
                    data.interest.admission &&
                    data.interest.admission[1] &&
                    data.interest.admission[1].university) ||
                  ""
                }
              /> */}
            </div>
            <div className="flex flex-col mb-2 w-full">
              <Form.Item
                label={
                  <label className="text-white mb-2">คณะลำดับที่สอง</label>
                }
                name={["interest", "admission", [1], "department"]}
                rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
              >
                <Input placeholder="ชื่อ (ภาษาไทย)" />
              </Form.Item>
              {/* <label className="text-white mb-2">คณะลำดับที่สอง </label>
              <Input
                type="text"
                name="department"
                placeholder="department"
                onChange={(e) => {
                  handleChangeAdmission(e);
                }}
                number="1"
                value={
                  (data &&
                    data.interest &&
                    data.interest.admission &&
                    data.interest.admission[1] &&
                    data.interest.admission[1].department) ||
                  ""
                }
              /> */}
            </div>
            <div className="flex flex-col mb-2 w-full">
              <Form.Item
                label={
                  <label className="text-white mb-2">ภาควิชาลำดับที่สอง</label>
                }
                name={["interest", "admission", [1], "faculty"]}
              >
                <Input placeholder="ชื่อ (ภาษาไทย)" />
              </Form.Item>
              {/* <label className="text-white mb-2">ภาควิชาลำดับที่สอง </label>
              <Input
                type="text"
                name="faculty"
                placeholder="faculty"
                onChange={(e) => {
                  handleChangeAdmission(e);
                }}
                number="1"
                value={
                  (data &&
                    data.interest &&
                    data.interest.admission &&
                    data.interest.admission[1] &&
                    data.interest.admission[1].faculty) ||
                  ""
                }
              /> */}
            </div>
          </div>
          <br />
          <div className="flex flex-wrap md:flex-nowrap flex-row justify-between gap-5">
            <div className="flex flex-col mb-2 w-full">
              <Form.Item
                label={
                  <label className="text-white mb-2">
                    มหาวิทยาลัยลำดับที่สาม
                  </label>
                }
                name={["interest", "admission", [2], "university"]}
              >
                <Input placeholder="มหาวิทยาลัยลำดับที่สาม" />
              </Form.Item>
              {/* <label className="text-white mb-2">มหาวิทยาลัยลำดับที่สาม </label>
              <Input
                type="text"
                name="university"
                placeholder="university"
                onChange={(e) => {
                  handleChangeAdmission(e);
                }}
                number="2"
                className="w-full"
                value={
                  (data &&
                    data.interest &&
                    data.interest.admission &&
                    data.interest.admission[2] &&
                    data.interest.admission[2].university) ||
                  ""
                }
              /> */}
            </div>
            <div className="flex flex-col mb-2 w-full">
              <Form.Item
                label={
                  <label className="text-white mb-2">คณะลำดับที่สาม</label>
                }
                name={["interest", "admission", [2], "department"]}
              >
                <Input placeholder="มหาวิทยาลัยลำดับที่สาม" />
              </Form.Item>
              {/* <label className="text-white mb-2">คณะลำดับที่สาม </label>
              <Input
                type="text"
                name="department"
                placeholder="department"
                onChange={(e) => {
                  handleChangeAdmission(e);
                }}
                number="2"
                value={
                  (data &&
                    data.interest &&
                    data.interest.admission &&
                    data.interest.admission[2] &&
                    data.interest.admission[2].department) ||
                  ""
                }
              /> */}
            </div>
            <div className="flex flex-col mb-2 w-full">
            <Form.Item
                label={
                  <label className="text-white mb-2">ภาควิชาลำดับที่สาม</label>
                }
                name={["interest","admission", [2] ,"university"]}
              >
                <Input placeholder="มหาวิทยาลัยลำดับที่สาม" />
              </Form.Item>
              {/* <label className="text-white mb-2">ภาควิชาลำดับที่สาม </label>
              <Input
                type="text"
                name="faculty"
                placeholder="faculty"
                onChange={(e) => {
                  handleChangeAdmission(e);
                }}
                number="2"
                value={
                  (data &&
                    data.interest &&
                    data.interest.admission &&
                    data.interest.admission[2] &&
                    data.interest.admission[2].faculty) ||
                  ""
                }
              /> */}
            </div>
          </div>
          <br />
          <h2 className="text-white bg-[#DD517E] rounded-full justify-center w-fit p-2 pl-4 pr-4 text-lg">
            หลักสูตรที่สนใจ (คณะวิศวกรรมศาสตร์ ภาควิชาวิศวกรรมคอมพิวเตอร์
            มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี)
          </h2>
          <div className="mt-2">
            <label className="flex items-center ml-5 text-white mb-2 w-fit">
              <input
                type="checkbox"
                onChange={(e) => handleChangePlan(e)}
                number="0"
                name="plan"
                checked={
                  (data &&
                    data.interest &&
                    data.interest.plan &&
                    data.interest.plan[0]) ||
                  false
                }
                className="appearance-none border-2 h-4 aspect-square relative mr-2 checked:bg-[rgb(0,0,0)] unchecked:bg-transparent"
              />
              {data &&
              data.interest &&
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
                  (data &&
                    data.interest &&
                    data.interest.plan &&
                    data.interest.plan[1]) ||
                  false
                }
                className="appearance-none border-2 h-4 aspect-square relative mr-2 checked:bg-[rgb(0,0,0)] unchecked:bg-transparent"
              />
              {data &&
              data.interest &&
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
                  (data &&
                    data.interest &&
                    data.interest.plan &&
                    data.interest.plan[2]) ||
                  false
                }
                className="appearance-none border-2 h-4 aspect-square relative mr-2 checked:bg-[rgb(0,0,0)] unchecked:bg-transparent"
              />
              {data &&
              data.interest &&
              data.interest.plan &&
              data.interest.plan[2] == true ? (
                <AiOutlineCheck
                  size={14}
                  className="aspect-square absolute translate-x-[0.1rem]"
                />
              ) : (
                ""
              )}
              หลักสูตรวิทยาศาสตร์ข้อมูลสุขภาพ
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
                  (data &&
                    data.interest &&
                    data.interest.plan &&
                    data.interest.plan[3]) ||
                  false
                }
                className="appearance-none border-2 h-4 aspect-square relative mr-2 checked:bg-[rgb(0,0,0)] unchecked:bg-transparent"
              />
              {data &&
              data.interest &&
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
            ค่ายที่เคยเข้าร่วม * (หาไม่เคยเข้าค่ายโปรดระบุ &quot;-&quot; )
          </h2>
          <div className="mt-2">
            <TextArea
              type="text"
              name="camp"
              placeholder="camp"
              value={(data && data.interest && data.interest.camp) || ""}
              onChange={(e) => handleChangeCourse(e)}
              required={true}
              className="h-36 w-full rounded-xl"
            />
          </div>
          <div className="flex justify-between my-5 z-20">
            <button
              type="button"
              onClick={() => {
                saveData({
                  ...data,
                });
                prev();
              }}
            >
              <AiFillCaretLeft
                size="4.5rem"
                color="rgb(236,72,153)"
                style={{
                  display: [1, 2].includes(choose) ? "none" : "block",
                }}
              />
            </button>
            <button type="submit">
              <AiFillCaretRight
                size="4.5rem"
                color={"rgb(236,72,153)"}
                style={{ display: [5].includes(choose) ? "none" : "block" }}
              />
              <div
                className="z-40"
                style={{ display: [5].includes(choose) ? "block" : "none" }}
              ></div>
            </button>
          </div>
          {/* </form> */}
        </Form>
      </div>
    </>
  );
}
