import React, { useEffect, useState } from "react";
// import DropBox from "@components/DropBox";
import { saveData } from "@src/utils/clientUtils";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import prefix_en from "@components/registerForm/DropBoxData/prefix_en.json";
import prefix_th from "@components/registerForm/DropBoxData/prefix_th.json";
import shirt_size from "@components/registerForm/DropBoxData/shirt_size.json";
import {
  Select,
  Form,
  Input,
  DatePicker,
  Button,
  notification,
  AutoComplete,
  InputNumber,
} from "antd";
import MaskedInput from "antd-mask-input";
import TestInput from "@components/Input";
import { location } from "@components/registerForm/DropBoxData/location";
// import * as dayjs from "dayjs";
import moment from "moment";

const { Option } = Select;
const { Option: OptionAuto } = AutoComplete;
const dateFormat = "YYYY-MM-DD";

export default function InfoForm({ data, setData, choose, next, prev }) {
  const [locationForm, setLocationForm] = useState();

  const [filterData, setFilterData] = useState({});

  const onSearch = (type, value) => {
    if (data?.tambol && data?.amphoe && data?.province && data?.postcode) {
      setLocationForm(
        locationForm?.filter((loc) =>
          loc[type].toString().startsWith(value.toString())
        )
      );
    } else {
      setLocationForm(
        location.filter((loc) =>
          loc[type].toString().startsWith(value.toString())
        )
      );
    }
  };
  const onSelect = (value, option, type) => {
    console.log(value, option, type);
    if (option.children.length == 8) {
      setFilterData({
        ...data.address,
        tambol: option.children[0],
        amphoe: option.children[2],
        province: option.children[5],
        postcode: option.children[7],
      });
    } else if (option.children.length == 5) {
      setFilterData({
        ...data.address,
        amphoe: option.children[0],
        province: option.children[2],
        postcode: option.children[4],
      });
    } else if (option.children.length == 3) {
      setFilterData({
        ...data.address,
        province: option.children[0],
        postcode: option.children[2],
      });
    } else if (option.children.length == 1) {
      setFilterData({ ...data.address, postcode: option.children[0] });
    }
  };

  useEffect(() => {
    setData({
      ...data,
      address: filterData,
    });
  }, [filterData]);

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

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const newValue = {
        ...values,
        info: {
          ...values.info,
          birthdate: moment(values?.info?.birthdate),
          tel: values?.info?.tel.replaceAll("-", ""),
        },
      };
      console.log("SuccessNew:", newValue);
      await saveData(newValue);
      next();
    } catch {
      notification.error({
        message: "System Alert",
        description: "บันทึกข้อมูลผิดพลาด",
        placement: "bottomRight",
      });
    }
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
      <div className={choose != 2 ? "hidden" : "w-full"}>
        <div className="flex justify-center">
          <h1 className="font-sans text-xl md:text-3xl font-bold text-white bg-[#9600FF] px-4 py-3 my-8">
            ข้อมูลทั่วไป
          </h1>
        </div>
        <h2 className="text-white font-sans bg-[#DD517E] justify-center w-fit p-2 pl-4 pr-4 text-lg mb-2">
          ข้อมูลส่วนตัว
        </h2>
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
          <div className="flex font-sans flex-wrap md:flex-nowrap flex-row items-end justify-between gap-10">
            <div className="w-full">
              <Form.Item
                label={
                  <label className="text-white md:text-lg mb-2">คำนำหน้า</label>
                }
                name={["info", "prefix_th"]}
                rules={[{ required: true, message: "กรุณาเลือก!" }]}
              >
                <Select
                  placeholder="คำนำหน้า"
                  className="md:text-lg"
                  dropdownClassName="border-2  font-sans border-white text-gray-400 px-2 py-1 "
                  defaultValue={data?.info ? data.info.prefix_th : null}
                >
                  {prefix_th.map((item) => (
                    <Option key={item.value} value={item.value}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
            <div className="w-full">
              <Form.Item
                label={
                  <label className="text-white md:text-lg mb-2">
                    ชื่อ (ภาษาไทย)
                  </label>
                }
                name={["info", "name_th"]}
                rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
              >
                <Input placeholder="ชื่อ (ภาษาไทย)" className="md:text-lg" />
              </Form.Item>
            </div>
            <div className="w-full">
              <Form.Item
                label={
                  <label className="text-white md:text-lg mb-2">
                    นามสกุล (ภาษาไทย)
                  </label>
                }
                name={["info", "surname_th"]}
                rules={[{ required: true, message: "กรุณากรอกนามสกุล" }]}
              >
                <Input placeholder="นามสกุล (ภาษาไทย)" className="md:text-lg" />
              </Form.Item>
            </div>
            <div className="w-full">
              <Form.Item
                label={
                  <label className="text-white md:text-lg mb-2">
                    ชื่อเล่น (ภาษาไทย)
                  </label>
                }
                name={["info", "nickname_th"]}
                rules={[{ required: true, message: "กรุณากรอกชื่อเล่น" }]}
              >
                <Input
                  placeholder="ชื่อเล่น (ภาษาไทย)"
                  className="md:text-lg"
                />
              </Form.Item>
            </div>
          </div>

          <div className="flex font-sans  flex-wrap md:flex-nowrap flex-row items-end justify-between gap-10">
            <div className="w-full">
              <Form.Item
                label={
                  <label className="text-white md:text-lg mb-2 whitespace-nowrap">
                    คำนำหน้า (ภาษาอังกฤษ)
                  </label>
                }
                name={["info", "prefix_en"]}
                rules={[{ required: true, message: "กรุณาเลือก" }]}
              >
                <Select
                  placeholder="Name prefix"
                  className="md:text-lg"
                  dropdownClassName="border-2 border-white font-sans text-gray-400 px-2 py-1 "
                >
                  {prefix_en.map((item) => (
                    <Option key={item.value} value={item.value}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
            <div className="w-full">
              <Form.Item
                label={
                  <label className="text-white md:text-lg mb-2">
                    ชื่อ (ภาษาอังกฤษ)
                  </label>
                }
                name={["info", "name_en"]}
                rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
              >
                <Input placeholder="ชื่อ (ภาษาอังกฤษ)" className="md:text-lg" />
              </Form.Item>
            </div>
            <div className="w-full">
              <Form.Item
                label={
                  <label className="text-white md:text-lg mb-2">
                    นามสกุล (ภาษาอังกฤษ)
                  </label>
                }
                name={["info", "surname_en"]}
                rules={[{ required: true, message: "กรุณากรอกนามสกุล" }]}
              >
                <Input
                  placeholder="นามสกุล (ภาษาอังกฤษ)"
                  className="md:text-lg"
                />
              </Form.Item>
            </div>
            <div className="w-full ">
              <Form.Item
                label={
                  <label className="text-white md:text-lg mb-2">วันเกิด</label>
                }
                name={["info", "birthdate"]}
                rules={[{ required: true, message: "กรุณากรอกวันเกิด" }]}
              >
                <DatePicker className="w-full " />
              </Form.Item>
            </div>
          </div>

          <div className="flex font-sans flex-wrap md:flex-nowrap flex-col md:flex-row gap-10">
            <div className="w-full">
              <Form.Item
                label={
                  <label className="text-white md:text-lg mb-2">
                    เบอร์โทรศัพท์ส่วนตัว
                  </label>
                }
                name={["info", "tel"]}
                rules={[{ required: true, message: "กรุณากรอกเบอร์โทรศัพท์" }]}
              >
                <MaskedInput
                  className="md:text-lg"
                  mask="111-111-1111"
                  name="tel"
                />
              </Form.Item>
            </div>
            <div className="w-full">
              <Form.Item
                label={
                  <label className="text-white md:text-lg mb-2">อีเมล</label>
                }
                name={["info", "email"]}
                rules={[
                  { required: true, message: "กรุณากรอกอีเมล", type: "email" },
                ]}
              >
                <Input placeholder="อีเมล" />
              </Form.Item>
            </div>
            <div className="w-full">
              <Form.Item
                label={
                  <label className="text-white md:text-lg mb-2">
                    ระบุขนาดเสื้อ
                  </label>
                }
                name={["info", "shirt"]}
                rules={[{ required: true, message: "กรุณาเลือกขนาดเสื้อ" }]}
              >
                <Select
                  placeholder="ระบุขนาดเสื้อ"
                  className="md:text-lg"
                  dropdownClassName="border-2  font-sans border-white text-gray-400 px-2 py-1 "
                >
                  {shirt_size.map((item) => (
                    <Option key={item.value} value={item.value}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>

            <div className="w-full"></div>
          </div>

          <h2 className="text-white font-sans bg-[#DD517E] justify-center w-fit p-2 pl-4 pr-4 text-lg">
            ที่อยู่ปัจจุบัน
          </h2>

          <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-between gap-10">
            <div className="w-full">
              <Form.Item
                label={
                  <label className="text-white font-sans md:text-lg mb-2">{`เลขที่บ้าน`}</label>
                }
                name={["address", "no"]}
                rules={[{ required: true, message: "กรุณากรอกบ้านเลขที่" }]}
              >
                <Input
                  placeholder="บ้านเลขที่"
                  className="font-sans md:text-lg"
                />
              </Form.Item>
            </div>
            <div className="font-sans w-full">
              <Form.Item
                label={
                  <label className="text-white font md:text-lg mb-2">
                    {`หมู่`} (optional)
                  </label>
                }
                name={["address", "moo"]}
              >
                <Input placeholder="หมู่" className="md:text-lg" />
              </Form.Item>
            </div>
            <div className="font-sans w-full">
              <Form.Item
                label={
                  <label className="text-white md:text-lg mb-2">
                    {`ซอย`} (optional)
                  </label>
                }
                name={["address", "soi"]}
              >
                <Input placeholder="ซอย" className="md:text-lg" />
              </Form.Item>
            </div>
            <div className="font-sans w-full">
              <Form.Item
                label={
                  <label className="text-white md:text-lg mb-2">
                    {`ถนน`} (optional)
                  </label>
                }
                name={["address", "road"]}
              >
                <Input placeholder="ถนน" className="md:text-lg" />
              </Form.Item>
            </div>
          </div>

          <div className="flex font-sans flex-wrap md:flex-nowrap flex-row justify-between gap-10">
            <div className="w-full">
              <Form.Item
                label={
                  <label className="text-white md:text-lg mb-2">{`ตำบล/แขวง`}</label>
                }
                name={["address", "tambol"]}
                rules={[{ required: true, message: "ระบุตำบล" }]}
              >
                <AutoComplete
                  onSearch={(txt) => onSearch("district", txt)}
                  onSelect={(e, option) => onSelect(e, option, "district")}
                  placeholder="แขวง / ตำบล"
                  className="md:text-lg"
                >
                  {locationForm?.map((loc, index) => (
                    <OptionAuto
                      key={loc.district + index.toString()}
                      value={loc.district}
                    >
                      {loc.district} &gt;&gt; {loc.amphoe} &gt;&gt;{" "}
                      {loc.province} &gt;&gt;
                      {loc.zipcode}
                    </OptionAuto>
                  ))}
                </AutoComplete>
              </Form.Item>
            </div>
            <div className="w-full">
              <Form.Item
                label={
                  <label className="text-white md:text-lg mb-2">{`อำเภอ/เขต`}</label>
                }
                name={["address", "amphoe"]}
                rules={[{ required: true, message: "ระบุอำเภอ" }]}
              >
                <AutoComplete
                  className="md:text-lg"
                  onSearch={(txt) => onSearch("amphoe", txt)}
                  onSelect={(e, option) => onSelect(e, option, "amphoe")}
                  placeholder="อำเภอ / เขต"
                  filterOption={(inputValue, option) =>
                    option.value
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  }
                >
                  {locationForm?.map((loc, index) => (
                    <OptionAuto
                      key={loc.amphoe + index.toString()}
                      value={loc.amphoe}
                    >
                      {loc.amphoe} &gt;&gt; {loc.province} &gt;&gt;
                      {loc.zipcode}
                    </OptionAuto>
                  ))}
                </AutoComplete>
              </Form.Item>
            </div>
            <div className="w-full">
              <Form.Item
                label={
                  <label className="text-white md:text-lg mb-2">{`จังหวัด`}</label>
                }
                name={["address", "province"]}
                rules={[{ required: true, message: "ระบุจังหวัด" }]}
              >
                <AutoComplete
                  className="md:text-lg"
                  onSelect={(e, option) => onSelect(e, option, "province")}
                  onSearch={(txt) => onSearch("province", txt)}
                  placeholder="จังหวัด"
                  value={data?.province}
                  filterOption={(inputValue, option) =>
                    option.value
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  }
                >
                  {locationForm?.map((loc, index) => (
                    <OptionAuto
                      key={loc.province + index.toString()}
                      value={loc.province}
                    >
                      {loc.province} &gt;&gt;
                      {loc.zipcode}
                    </OptionAuto>
                  ))}
                </AutoComplete>
              </Form.Item>
            </div>
            <div className="w-full">
              <Form.Item
                label={
                  <label className="text-white md:text-lg mb-2">{`ไปรษณีย์`}</label>
                }
                name={["address", "postcode"]}
                rules={[
                  { len: 5, message: "รหัสไปรษณีย์ต้องมี 5 อักษร" },
                  { required: true, message: "กรุณาระบุรหัสไปรษณีย์" },
                ]}
              >
                <AutoComplete
                  className="md:text-lg"
                  onSelect={(e, option) => onSelect(e, option, "zipcode")}
                  onSearch={(txt) => onSearch("zipcode", txt)}
                  placeholder="รหัสไปรษณีย์"
                >
                  {locationForm?.map((loc, index) => (
                    <OptionAuto
                      key={loc.zipcode + index}
                      value={loc.zipcode.toString()}
                    >
                      {loc.zipcode}
                    </OptionAuto>
                  ))}
                </AutoComplete>
              </Form.Item>
            </div>
          </div>

          <h2 className="text-white bg-[#DD517E] font-sans justify-center w-fit p-2 pl-4 pr-4 text-lg">
            ข้อมูลผู้ปกครอง
          </h2>

          <div className="flex flex-wrap font-sans md:flex-nowrap flex-row items-end justify-between gap-10">
            <div className="md:flex-row">
              <Form.Item
                label={
                  <label className="text-white md:text-lg mb-2">คำนำหน้า</label>
                }
                // name="parent.prefix_th"
                name={["parent", "prefix_th"]}
                rules={[{ required: true, message: "กรุณาเลือก!" }]}
              >
                <Select
                  placeholder="คำนำหน้า"
                  className="md:text-lg"
                  style={{ width: "7rem" }}
                  dropdownClassName="border-2 border-white text-gray-400 px-2 py-1 "
                >
                  {prefix_th.map((item) => (
                    <Option key={item.value} value={item.value}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
            <div className="flex flex-col w-full">
              <Form.Item
                label={
                  <label className="text-white md:text-lg mb-2">
                    ชื่อผู้ปกครอง
                  </label>
                }
                name={["parent", "name"]}
                rules={[{ required: true, message: "กรุณากรอกชื่อผู้ปกครอง!" }]}
              >
                <Input placeholder="ชื่อผู้ปกครอง" className="md:text-lg" />
              </Form.Item>
            </div>
            <div className="w-full">
              <div>
                <Form.Item
                  label={
                    <label className="text-white md:text-lg mb-2">
                      นามสกุลผู้ปกครอง
                    </label>
                  }
                  name={["parent", "surname"]}
                  rules={[{ required: true, message: "กรุณากรอกนามสกุล!" }]}
                >
                  <Input
                    placeholder="นามสกุลผู้ปกครอง"
                    className="md:text-lg"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="w-full">
              <Form.Item
                label={
                  <label className="text-white md:text-lg mb-2">
                    ความสัมพันธ์
                  </label>
                }
                name={["parent", "relation"]}
                rules={[{ required: true, message: "กรุณากรอกความสัมพันธ์!" }]}
              >
                <Input placeholder="ความสัมพันธ์" className="md:text-lg" />
              </Form.Item>
            </div>
          </div>

          <div className="flex justify-between my-5 mb-6">
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
              <AiFillCaretLeft
                size="4.5rem"
                className="text-[#ec4899] opacity-60 translation-all ase-linear duration-200 hover:opacity-100"
              />
            </button>
            <button type="submit">
              <AiFillCaretRight
                size="4.5rem"
                className="text-[#ec4899] opacity-60 translation-all ase-linear duration-200 hover:opacity-100 "
                style={{ display: [5].includes(choose) ? "none" : "block" }}
              />
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}
