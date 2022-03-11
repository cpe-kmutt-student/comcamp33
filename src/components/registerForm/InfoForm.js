import React, { useEffect } from "react";
import DropBox from "@components/DropBox";
import { saveData } from "@src/utils/clientUtils";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import prefix_en from "@components/registerForm/DropBoxData/prefix_en.json";
import prefix_th from "@components/registerForm/DropBoxData/prefix_th.json";
import shirt_size from "@components/registerForm/DropBoxData/shirt_size.json";
import { Select, Form, Input, DatePicker, Button } from "antd";
import MaskedInput from "antd-mask-input";

const { Option } = Select;
const dateFormat = "YYYY-MM-DD";

export default function InfoForm({ data, setData, choose, next, prev }) {
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

  useEffect(() => {
    console.log("incoming ", data);
    form.resetFields();
  }, [data]);

  return (
    <>
      <div className={choose != 2 ? "hidden" : ""}>
        <div className="flex justify-center">
          <h1 className="flex w-fit justify-center text-3xl font-bold text-white bg-[#9600FF] px-4 py-3 my-8 rounded-2xl">
            ข้อมูลส่วนตัว
          </h1>
        </div>
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
          <div className="flex flex-wrap md:flex-nowrap flex-row items-end justify-between gap-10">
            <div className="flex flex-col">
              <Form.Item
                label={<label className="text-white mb-2">คำนำหน้า</label>}
                name={["info", "prefix_th"]}
                rules={[{ required: true, message: "กรุณาเลือก!" }]}
              >
                <Select
                  placeholder="คำนำหน้า"
                  style={{ width: "7rem" }}
                  dropdownClassName="border-2 border-white bg-transparent text-gray-400 px-2 py-1 "
                  defaultValue={data?.info ? data.info.prefix_th : null}
                >
                  {prefix_th.map((item) => (
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
              {/* <label className="text-white mb-2">*</label>
              <DropBox
                placeholder="Prefix"
                name="prefix_th"
                onChange={(e) => handleChange(e, "info")}
                required={true}
                option={prefix_th}
                value={data && data.info ? data.info.prefix_th : ""}
              /> */}
            </div>
            <div className="flex flex-col w-full">
              <Form.Item
                label={
                  <label className="text-white mb-2">ชื่อ (ภาษาไทย)</label>
                }
                name={["info", "name_th"]}
                rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
              >
                <Input placeholder="ชื่อ (ภาษาไทย)" />
              </Form.Item>
              {/* <label className="text-white mb-2">ชื่อ (ภาษาไทย) * </label>
              <Input
                type="text"
                name="name_th"
                placeholder="First Name"
                value={data && data.info ? data.info.name_th : ""}
                onChange={(e) => handleChange(e, "info")}
                required={true}
              /> */}
            </div>
            <div className="flex flex-col w-full">
              <Form.Item
                label={
                  <label className="text-white mb-2">นามสกุล (ภาษาไทย)</label>
                }
                name={["info", "surname_th"]}
                rules={[{ required: true, message: "กรุณากรอกนามสกุล" }]}
              >
                <Input placeholder="นามสกุล (ภาษาไทย)" />
              </Form.Item>
              {/* <label className="text-white mb-2">นามสกุล (ภาษาไทย) * </label>
              <Input
                type="text"
                name="surname_th"
                placeholder="Last Name"
                value={data && data.info ? data.info.surname_th : ""}
                onChange={(e) => handleChange(e, "info")}
                required={true}
                // className="w-full"
              /> */}
            </div>
            <div className="flex flex-col w-full">
              <Form.Item
                label={
                  <label className="text-white mb-2">ชื่อเล่น (ภาษาไทย)</label>
                }
                name={["info", "nickname_th"]}
                rules={[{ required: true, message: "กรุณากรอกชื่อเล่น" }]}
              >
                <Input placeholder="ชื่อเล่น (ภาษาไทย)" />
              </Form.Item>
              {/* <label className="text-white mb-2">ชื่อเล่น (ภาษาไทย) * </label>
              <Input
                type="text"
                name="nickname_th"
                placeholder="Nickname"
                value={data && data.info ? data.info.nickname_th : ""}
                onChange={(e) => handleChange(e, "info")}
                required={true}
                // className="w-full"
              /> */}
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap flex-row items-end justify-between gap-10">
            <div className="flex flex-col">
              <Form.Item
                label={<label className="text-white mb-2">Name prefix</label>}
                name={["info", "prefix_en"]}
                rules={[{ required: true, message: "กรุณาเลือก" }]}
              >
                <Select
                  placeholder="Name prefix"
                  style={{ width: "7rem" }}
                  dropdownClassName="border-2 border-white bg-transparent text-gray-400 px-2 py-1 "
                >
                  {prefix_en.map((item) => (
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
              {/* <label className="text-white mb-2">*</label>
              <DropBox
                placeholder="Name prefix"
                name="prefix_en"
                onChange={(e) => handleChange(e, "info")}
                required={true}
                option={prefix_en}
                value={data && data.info ? data.info.prefix_en : ""}
              /> */}
            </div>
            <div className="flex flex-col w-full">
              <Form.Item
                label={
                  <label className="text-white mb-2">ชื่อ (ภาษาอังกฤษ)</label>
                }
                name={["info","name_en"]}
                rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
              >
                <Input placeholder="ชื่อ (ภาษาอังกฤษ)" />
              </Form.Item>
              {/* <label className="text-white mb-2">First name * </label>
              <Input
                type="text"
                name="name_en"
                placeholder="First Name"
                value={data && data.info ? data.info.name_en : ""}
                onChange={(e) => handleChange(e, "info")}
                required={true}
                className="w-full"
              /> */}
            </div>
            <div className="flex flex-col w-full">
              <Form.Item
                label={
                  <label className="text-white mb-2">
                    นามสกุล (ภาษาอังกฤษ)
                  </label>
                }
                name={["info", "surname_en"]}
                rules={[{ required: true, message: "กรุณากรอกนามสกุล" }]}
              >
                <Input placeholder="นามสกุล (ภาษาอังกฤษ)" />
              </Form.Item>
              {/* <label className="text-white mb-2">Last name * </label>
              <Input
                type="text"
                name="surname_en"
                placeholder="Last Name"
                value={data && data.info ? data.info.surname_en : ""}
                onChange={(e) => handleChange(e, "info")}
                required={true}
                className="w-full"
              /> */}
            </div>
            <div className="flex flex-col w-full">
              <Form.Item
                label={<label className="text-white mb-2">วันเกิด</label>}
                name={["info", "birthdate"]}
                rules={[{ required: true, message: "กรุณากรอกวันเกิด" }]}
              >
                {/* <DatePicker format={"YYYY-MM-DD"} /> */}
              </Form.Item>
              {/* <label className="text-white mb-2">
                เดือน / วัน / ปี (ค.ศ.) เกิด *
              </label>
              <Input
                type="date"
                name="birthdate"
                placeholder="Birthday"
                onChange={(e) => handleChange(e, "info")}
                required={true}
                pattern="\d{4}-\d{2}-\d{2}"
                className="w-full"
                value={data && data.info ? data.info.birthdate : ""}
              /> */}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap md:flex-nowrap flex-row gap-10">
              <div className="flex flex-col">
                <Form.Item
                  label={
                    <label className="text-white mb-2">
                      เบอร์โทรศัพท์ส่วนตัว
                    </label>
                  }
                  name={["info","tel"]}
                  rules={[
                    { required: true, message: "กรุณากรอกเบอร์โทรศัพท์" },
                  ]}
                >
                  <MaskedInput mask="111-111-1111" />
                </Form.Item>
                {/* <label className="text-white mb-2">
                  เบอร์โทรศัพท์ส่วนตัว *{" "}
                </label>
                <Input
                  type="tel"
                  name="tel"
                  placeholder="091XXXXXXX"
                  pattern="[0-9]{10}"
                  value={data && data.info ? data.info.tel : ""}
                  size="10"
                  onChange={(e) => handleChange(e, "info")}
                  required={true}
                  className="w-full block"
                /> */}
              </div>
              <div className="flex flex-col">
                <Form.Item
                  label={
                    <label className="text-white mb-2">ระบุขนาดเสื้อ</label>
                  }
                  name={["info","shirt"]}
                  rules={[{ required: true, message: "กรุณาเลือกขนาดเสื้อ" }]}
                >
                  <Select
                    placeholder="ระบุขนาดเสื้อ"
                    style={{ width: "7rem" }}
                    dropdownClassName="border-2 border-white bg-transparent text-gray-400 px-2 py-1 "
                  >
                    {shirt_size.map((item) => (
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
                {/* <label className="text-white mb-2">ขนาดเสื้อ * </label>
                <DropBox
                  placeholder="ระบุขนาดเสื้อ"
                  name="shirt"
                  onChange={(e) => handleChange(e, "info")}
                  required={true}
                  option={shirt_size}
                  value={data && data.info ? data.info.shirt : ""}
                  className="w-full block"
                /> */}
              </div>
            </div>
          </div>

          <h2 className="text-white bg-[#DD517E] rounded-full justify-center w-fit p-2 pl-4 pr-4 text-lg">
            ที่อยู่ปัจจุบัน
          </h2>

          <div className="flex flex-wrap md:flex-nowrap flex-row justify-between gap-10">
            <div className="flex flex-col w-full">
              <Form.Item
                label={
                  <label className="text-white mb-2">{`เลขที่บ้าน`}</label>
                }
                name={["address", "no"]}
                rules={[{ required: true, message: "กรุณากรอกบ้านเลขที่" }]}
              >
                <Input placeholder="บ้านเลขที่"/>
              </Form.Item>
              {/* <label className="text-white mb-2">{`เลขที่บ้าน`} * </label>
              <div>
                <Input
                  type="text"
                  name="no"
                  placeholder="เลขที่บ้าน"
                  value={data && data.address ? data.address.no : ""}
                  onChange={(e) => handleChange(e, "address")}
                  required={true}
                  className="w-full"
                />
              </div> */}
            </div>
            <div className="flex flex-col w-full">
              <Form.Item
                label={
                  <label className="text-white mb-2">{`หมู่`} (optional)</label>
                }
                name={["address", "moo"]}
              >
                <Input placeholder="หมู่" />
              </Form.Item>
              {/* <label className="text-white mb-2">{`หมู่`} * </label>
              <div>
                <Input
                  type="text"
                  name="moo"
                  placeholder="หมู่"
                  value={data && data.address ? data.address.moo : ""}
                  onChange={(e) => handleChange(e, "address")}
                  required={true}
                  className="w-full"
                />
              </div> */}
            </div>
            <div className="flex flex-col w-full">
              <Form.Item
                label={
                  <label className="text-white mb-2">{`ซอย`} (optional)</label>
                }
                name={["address", "soi"]}
              >
                <Input placeholder="ซอย" />
              </Form.Item>
              {/* <label className="text-white mb-2">{`ซอย`} * </label>
              <div>
                <Input
                  type="text"
                  name="soi"
                  placeholder="ซอย"
                  value={data && data.address ? data.address.soi : ""}
                  onChange={(e) => handleChange(e, "address")}
                  required={true}
                  className="w-full"
                />
              </div> */}
            </div>
            <div className="flex flex-col w-full">
              <Form.Item
                label={<label className="text-white mb-2">{`ถนน`} (optional)</label>}
                name={["address","road"]}
              >
                <Input placeholder="ถนน" />
              </Form.Item>
              {/* <label className="text-white mb-2">{`ถนน`} * </label>
              <div>
                <Input
                  type="text"
                  name="road"
                  placeholder="ถนน"
                  value={data && data.address ? data.address.road : ""}
                  onChange={(e) => handleChange(e, "address")}
                  required={true}
                  className="w-full"
                />
              </div> */}
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap flex-row justify-between gap-10">
            <div className="flex flex-col w-full">
              <Form.Item
                label={<label className="text-white mb-2">{`ตำบล/แขวง`}</label>}
                name={["address", "tambol"]}
                rules={[{ required: true, message: "กรุณากรอกตำบล/แขวง" }]}
              >
                <Input placeholder="ตำบล/แขวง" />
              </Form.Item>
              {/* <label className="text-white mb-2">{`ตำบล/แขวง`}</label>

              <div>
                <Input
                  type="text"
                  name="tambol"
                  placeholder="ตำบล/แขวง"
                  value={data && data.address ? data.address.tambol : ""}
                  onChange={(e) => handleChange(e, "address")}
                  required={true}
                  className="w-full"
                />
              </div> */}
            </div>
            <div className="flex flex-col w-full">
              <Form.Item
                label={<label className="text-white mb-2">{`อำเภอ/เขต`}</label>}
                name={["address","amphoe"]}
                rules={[{ required: true, message: "กรุณากรอกอำเภอ/เขต" }]}
              >
                <Input placeholder="อำเภอ/เขต" />
              </Form.Item>
              {/* <label className="text-white mb-2">{`อำเภอ/เขต`}</label>

              <div>
                <Input
                  type="text"
                  name="amphoe"
                  placeholder="อำเภอ/เขต"
                  value={data && data.address ? data.address.amphoe : ""}
                  onChange={(e) => handleChange(e, "address")}
                  required={true}
                  className="w-full"
                />
              </div> */}
            </div>
            <div className="flex flex-col w-full">
              <Form.Item
                label={<label className="text-white mb-2">{`จังหวัด`}</label>}
                name={["address", "province"]}
                rules={[{ required: true, message: "กรุณากรอกจังหวัด" }]}
              >
                <Input placeholder="จังหวัด" />
              </Form.Item>
              {/* <label className="text-white mb-2">{`จังหวัด`} * </label>
              <div>
                <Input
                  type="text"
                  name="province"
                  placeholder="จังหวัด"
                  value={data && data.address ? data.address.province : ""}
                  onChange={(e) => handleChange(e, "address")}
                  required={true}
                  className="w-full"
                />
              </div> */}
            </div>
            <div className="flex flex-col w-full">
              <Form.Item
                label={
                  <label className="text-white mb-2">{`รหัสไปรษณีย์`}</label>
                }
                name={["address","postcode"]}
                rules={[{ required: true, message: "กรุณากรอกรหัสไปรษณีย์" }]}
              >
                <Input placeholder="00000"/>
              </Form.Item>
              {/* <label className="text-white mb-2">{`ไปรษณีย์`} * </label>
              <div>
                <Input
                  type="text"
                  name="postcode"
                  placeholder="รหัสไปรษณีย์"
                  value={data && data.address ? data.address.postcode : ""}
                  onChange={(e) => handleChange(e, "address")}
                  required={true}
                  className="w-full"
                />
              </div> */}
            </div>
          </div>

          <h2 className="text-white bg-[#DD517E] rounded-full justify-center w-fit p-2 pl-4 pr-4 text-lg">
            ข้อมูลผู้ปกครอง
          </h2>

          <div className="flex flex-wrap md:flex-nowrap flex-row items-end justify-between gap-10">
            <div className="flex">
              <Form.Item
                label={<label className="text-white mb-2">Name prefix</label>}
                // name="parent.prefix_th"
                name={["parent", "prefix_th"]}
                rules={[{ required: true, message: "กรุณาเลือก!" }]}
              >
                <Select
                  placeholder="Name prefix"
                  style={{ width: "7rem" }}
                  dropdownClassName="border-2 border-white bg-transparent text-gray-400 px-2 py-1 "
                >
                  {prefix_th.map((item) => (
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
              {/* <DropBox
                placeholder="Prefix"
                name="prefix_th"
                onChange={(e) => handleChange(e, "parent")}
                required={true}
                option={prefix_th}
                value={data && data.parent ? data.parent.prefix_th : ""}
              /> */}
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col">
                {/* <label className="text-white mb-2">
                  {`ชื่อจริงผู้ปกครอง`} *{" "}
                </label>
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="ชื่อผู้ปกครอง"
                    value={data && data.parent ? data.parent.name : ""}
                    onChange={(e) => handleChange(e, "parent")}
                    required={true}
                    className="w-full"
                  />
                </div> */}
                <Form.Item
                  label={
                    <label className="text-white mb-2">ชื่อผู้ปกครอง</label>
                  }
                  name={["parent", "name"]}
                  rules={[
                    { required: true, message: "กรุณากรอกชื่อผู้ปกครอง!" },
                  ]}
                >
                  <Input placeholder="ชื่อผู้ปกครอง" />
                </Form.Item>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div>
                <Form.Item
                  label={
                    <label className="text-white mb-2">นามสกุลผู้ปกครอง</label>
                  }
                  name={["parent", "surname"]}
                  rules={[{ required: true, message: "กรุณากรอกนามสกุล!" }]}
                >
                  <Input placeholder="นามสกุลผู้ปกครอง" />
                </Form.Item>
                {/* <label className="text-white mb-2">{`นามสกุลผู้ปกครอง`} * </label>
              <div>
                <Input
                  type="text"
                  name="surname"
                  placeholder="นามสกุลผู้ปกครอง"
                  value={data && data.parent ? data.parent.surname : ""}
                  onChange={(e) => handleChange(e, "parent")}
                  required={true}
                  className="w-full"
                /> */}
              </div>
            </div>
            <div className="flex flex-col w-full">
              {/* <label className="text-white mb-2">{`ความสัมพันธ์`} * </label>
              <div>
                <Input
                  type="text"
                  name="relation"
                  placeholder="ความสัมพันธ์"
                  value={data && data.parent ? data.parent.relation : ""}
                  onChange={(e) => handleChange(e, "parent")}
                  required={true}
                  className="w-full"
                />
              </div> */}
              <Form.Item
                label={<label className="text-white mb-2">ความสัมพันธ์</label>}
                name={["parent", "relation"]}
                rules={[{ required: true, message: "กรุณากรอกความสัมพันธ์!" }]}
              >
                <Input placeholder="ความสัมพันธ์" />
              </Form.Item>
            </div>
          </div>

          <div className="flex justify-between my-5 z-20">
            <button
              type="button"
              onClick={(e) => {
                prev();
                e.preventDefault();
                saveData({
                  ...data,
                });
              }}
            >
              <AiFillCaretLeft size="4.5rem" color="rgb(236,72,153)" />
            </button>
            <button type="submit">
              <AiFillCaretRight
                size="4.5rem"
                color={[5].includes(choose) ? "#00FF00" : "rgb(236,72,153)"}
                style={{ display: [5].includes(choose) ? "none" : "block" }}
              />
              <div
                className="z-40"
                style={{ display: [5].includes(choose) ? "block" : "none" }}
              ></div>
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}
