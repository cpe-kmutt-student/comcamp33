import React, { useState, useEffect } from "react";
import styles from "@styles/components/registerForm/EducationForm.module.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { saveData } from "@src/utils/clientUtils";
import { Select, Form, Input, InputNumber, AutoComplete } from "antd";

import level from "@components/registerForm/DropBoxData/level.json";
import education from "@components/registerForm/DropBoxData/education.json";

const provices = [
  { value: "กรุงเทพฯ" },
  { value: "กระบี่" },
  { value: "กาญจนบุรี" },
  { value: "กาฬสินธุ์" },
  { value: "กำแพงเพชร" },
  { value: "ขอนแก่น" },
  { value: "จันทบุรี" },
  { value: "ฉะเชิงเทรา" },
  { value: "ชลบุรี" },
  { value: "ชัยนาท" },
  { value: "ชัยภูมิ" },
  { value: "ชุมพร" },
  { value: "เชียงใหม่" },
  { value: "เชียงราย" },
  { value: "ตรัง" },
  { value: "ตราด" },
  { value: "ตาก" },
  { value: "นครนายก" },
  { value: "นครปฐม" },
  { value: "นครพนม" },
  { value: "นครราชสีมา" },
  { value: "นครศรีธรรมราช" },
  { value: "นครสวรรค์" },
  { value: "นนทบุรี" },
  { value: "นราธิวาส" },
  { value: "น่าน" },
  { value: "บึงกาฬ" },
  { value: "บุรีรัมย์" },
  { value: "ปทุมธานี" },
  { value: "ประจวบคีรีขันธ์" },
  { value: "ปราจีนบุรี" },
  { value: "ปัตตานี" },
  { value: "พระนครศรีอยุธยา" },
  { value: "พะเยา" },
  { value: "พังงา" },
  { value: "พัทลุง" },
  { value: "พิจิตร" },
  { value: "พิษณุโลก" },
  { value: "เพชรบุรี" },
  { value: "เพชรบูรณ์" },
  { value: "แพร่" },
  { value: "ภูเก็ต" },
  { value: "มหาสารคาม" },
  { value: "มุกดาหาร" },
  { value: "แม่ฮ่องสอน" },
  { value: "ยโสธร" },
  { value: "ยะลา" },
  { value: "ร้อยเอ็ด" },
  { value: "ระนอง" },
  { value: "ระยอง" },
  { value: "ราชบุรี" },
  { value: "ลพบุรี" },
  { value: "ลำปาง" },
  { value: "ลำพูน" },
  { value: "เลย" },
  { value: "ศรีสะเกษ" },
  { value: "สกลนคร" },
  { value: "สงขลา" },
  { value: "สตูล" },
  { value: "สมุทรปราการ" },
  { value: "สมุทรสงคราม" },
  { value: "สมุทรสาคร" },
  { value: "สระแก้ว" },
  { value: "สระบุรี" },
  { value: "สิงห์บุรี" },
  { value: "สุโขทัย" },
  { value: "สุพรรณบุรี" },
  { value: "สุราษฎร์ธานี" },
  { value: "สุรินทร์" },
  { value: "หนองคาย" },
  { value: "หนองบัวลำภู" },
  { value: "อ่างทอง" },
  { value: "อำนาจเจริญ" },
  { value: "อุดรธานี" },
  { value: "อุตรดิตถ์" },
  { value: "อุทัยธานี" },
  { value: "อุบลราชธานี" },
];

export default function EducationForm({ data, setData, choose, prev, next }) {
  const [options, setOptions] = useState({ ...provices });

  const { Option } = Select;

  const [form] = Form.useForm();

  const onSearch = (searchText) => {
    setOptions(!searchText ? [] : provices);
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
    <div className={choose != 3 ? "hidden" : "w-full"}>
      <Form
        form={form}
        name="education"
        // onSubmit={handleSubmit}
        className="space-y-8 "
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        validateTrigger="onBlur"
        initialValues={data}
      >
        <div className="flex justify-center mt-2">
          <h1 className="flex w-fit justify-center font-sans text-xl md:text-3xl text-white bg-[#9600FF] px-4 py-3 my-8 ">
            ประวัติการศึกษา
          </h1>
        </div>
        <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-between gap-10">
          <div className="w-full">
            <Form.Item
              label={
                <label className="text-white font-sans md:text-lg mb-2">{`ชื่อสถานศึกษา`}</label>
              }
              name={["education", "name"]}
              rules={[{ required: true, message: "กรุณากรอกชื่อโรงเรียน" }]}
            >
              <Input placeholder="โรงเรียน" className="font-sans md:text-lg" />
            </Form.Item>
          </div>
          <div className="w-full lg:w-[40%]">
            <Form.Item
              label={
                <label className="text-white font-sans md:text-lg mb-2">{`จังหวัด`}</label>
              }
              name={["education", "province"]}
              rules={[{ required: true, message: "กรุณากรอกจังหวัด" }]}
            >
              <AutoComplete
                options={provices}
                className="font-sans md:text-lg"
                placeholder="จังหวัด"
                filterOption={(inputValue, option) =>
                  option.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
              />
            </Form.Item>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-between gap-10 w-full">
          <div className="w-full ">
            <Form.Item
              label={
                <label className="text-white font-sans md:text-lg mb-2">{`แผนการเรียน`}</label>
              }
              name={["education", "program"]}
              rules={[{ required: true, message: "กรุณาเลือกแผนการเรียน" }]}
            >
              <Select
                placeholder="แผนการเรียน"
                className="font-sans md:text-lg"
                dropdownClassName="border-2 border-white font-sans  text-gray-400 px-2 py-1 "
              >
                {education.map((item) => (
                  <Option
                    key={item.value}
                    value={item.value}
                    className="text-black "
                  >
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <div className="flex flex-row gap-10 lg:w-[50%] w-[100%]">
            <div className="flex flex-col w-full">
              <Form.Item
                label={
                  <label className="text-white font-sans md:text-lg mb-2">{`ระดับการศึกษา`}</label>
                }
                name={["education", "level"]}
                rules={[{ required: true, message: "กรุณาเลือกระดับการศึกษา" }]}
              >
                <Select
                  placeholder="ระดับการศึกษา"
                  className="font-sans md:text-lg"
                  dropdownClassName="border-2 border-white font-sans  text-gray-400 px-2 py-1 "
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
            </div>
            <div>
              <Form.Item
                label={
                  <label className="text-white font-sans md:text-lg mb-2">{`เกรดเฉลี่ย`}</label>
                }
                name={["education", "gpax"]}
                rules={[{ required: true, message: "กรุณากรอกเกรดเฉลี่ย" }]}
              >
                <InputNumber
                  className="font-sans md:text-lg"
                  placeholder="เกรดเฉลี่ย"
                  min="0"
                  max="4"
                  step="0.01"
                />
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="flex justify-between my-5 z-20">
          <button type="button" onClick={prev}>
            <AiFillCaretLeft
              size="4.5rem"
              className="text-[#ec4899] opacity-60 translation-all ase-linear duration-200 hover:opacity-100"
            />
          </button>

          <button type="submit">
            <AiFillCaretRight
              size="4.5rem"
              className="text-[#ec4899] opacity-60 translation-all ase-linear duration-200 hover:opacity-100"
              style={{ display: [5].includes(choose) ? "none" : "block" }}
            />
          </button>
        </div>
        {/* </form> */}
      </Form>
    </div>
  );
}
