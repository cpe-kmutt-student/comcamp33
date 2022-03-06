import React, { useState, useEffect } from "react";
import Input from "@components/Input";
import DropBox from "@components/DropBox";
import styles from "@styles/components/registerForm/InfoForm.module.css";

import prefix_en from "@components/registerForm/DropBoxData/prefix_en.json";
import prefix_th from "@components/registerForm/DropBoxData/prefix_th.json";
import shirt_size from "@components/registerForm/DropBoxData/shirt_size.json";

export default function InfoForm({ choose }) {
  const [data, setData] = useState({
    info: {
      prefix_th: "",
      name_th: "",
      surname_th: "",
      prefix_en: "",
      name_en: "",
      surname_en: "",
      nickname_th: "",
      birthday: "",
      religion: "",
      tel: "",
      email: "",
      shirt: "",
      image: "",
    },
    address: {
      no: "",
      moo: "",
      soi: "",
      road: "",
      tambol: "",
      amphoe: "",
      province: "",
      postal: 11111,
    },
    parent: {
      name: "",
      surname: "",
      relation: "",
      tel: "",
      email: "",
    },
  });

  const handleChangeInfo = (e) => {
    let valueChange = e.target.value;
    let nameChange = e.target.name;
    setData({
      ...data,
      info: {
        ...data.info,
        [nameChange]: valueChange,
      },
    });
  };

  const handleChangeAddress = (e) => {
    let valueChange = e.target.value;
    let nameChange = e.target.name;
    setData({
      ...data,
      address: {
        ...data.address,
        [nameChange]: valueChange,
      },
    });
  };

  const handleChangeParent = (e) => {
    let valueChange = e.target.value;
    let nameChange = e.target.name;
    setData({
      ...data,
      parent: {
        ...data.parent,
        [nameChange]: valueChange,
      },
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
          <h1 className="flex w-fit justify-center text-3xl font-bold text-white bg-[#9600FF] px-4 py-3 my-8 rounded-2xl">
            ข้อมูลส่วนตัว
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-row items-end justify-between gap-10">
            <div className="flex w-full">
              <DropBox
                placeholder="Prefix"
                name="prefix_th"
                onChange={handleChangeInfo}
                required={true}
                option={prefix_th}
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col">
                <label className="text-white mb-2">ชื่อ (ภาษาไทย)</label>
                <Input
                  type="text"
                  name="name_th"
                  placeholder="First Name"
                  value={data.name_th}
                  onChange={handleChangeInfo}
                  required={true}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">นามสกุล (ภาษาไทย)</label>
              <Input
                type="text"
                name="surname_th"
                placeholder="Last Name"
                value={data.surname_th}
                onChange={handleChangeInfo}
                required={true}
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">ชื่อเล่น (ภาษาไทย)</label>
              <div>
                <Input
                  type="text"
                  name="nickname_th"
                  placeholder="Nickname"
                  value={data.nickname}
                  onChange={handleChangeInfo}
                  required={true}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row items-end justify-between gap-10">
            <div className="flex w-full">
              <DropBox
                placeholder="Name prefix"
                name="prefix_en"
                onChange={handleChangeInfo}
                required={true}
                option={prefix_en}
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">Firstname</label>
              <Input
                type="text"
                name="name_en"
                placeholder="First Name"
                value={data.name_en}
                onChange={handleChangeInfo}
                required={true}
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">Lastname</label>
              <Input
                type="text"
                name="surname_en"
                placeholder="Last Name"
                value={data.surname_en}
                onChange={handleChangeInfo}
                required={true}
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">
                วัน - เดือด - ปีศักราชที่เกิด
              </label>
              <Input
                type="date"
                name="birthday"
                placeholder="Birthday"
                onChange={handleChangeInfo}
                required={true}
                pattern="\d{4}-\d{2}-\d{2}"
                className="w-full"
              />
            </div>
          </div>

          <div>
            <div className="flex flex-row justify-between gap-10">
              <div className="flex flex-col flex-1 gap-10">
                <div className="flex flex-col">
                  <label className="text-white mb-2">
                    เบอร์โทรศัพท์ส่วนตัว
                  </label>
                  <Input
                    type="tel"
                    name="tel"
                    placeholder="Tel"
                    pattern="[0-9]{10}"
                    value={data.tel}
                    size="10"
                    onChange={handleChangeInfo}
                    required={true}
                    className="w-full block"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white mb-2">ขนาดเสื้อ</label>
                  <DropBox
                    placeholder="ระบุขนาดเสื้อ"
                    name="shirt"
                    onChange={handleChangeInfo}
                    required={true}
                    option={shirt_size}
                    className="w-full block"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-white mb-2">ภาพถ่ายอิสระ</label>
                <div className="w-[300px] aspect-square bg-black"></div>
              </div>
              <div className="flex flex-col flex-1">
                <div>
                  <label className="text-white mb-2 block">{`ภาพถ่ายอิสระ`}</label>
                  <label className="text-gray-400 border-2 border-white px-2 py-1 rounded-0 outline-none bg-transparent focus:bg-white block w-full">
                    อัพโหลดภาพ
                    <Input
                      type="file"
                      name="image"
                      placeholder="Image"
                      value={data.image}
                      onChange={handleChangeInfo}
                      required={true}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-white bg-[#DD517E] rounded-full justify-center w-fit p-2 pl-4 pr-4 text-lg">
            ที่อยู่ปัจจุบัน
          </h2>

          <div className="flex flex-row justify-between gap-10">
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">{`เลขที่บ้าน`}</label>
              <div>
                <Input
                  type="text"
                  name="no"
                  placeholder="เลขที่บ้าน"
                  value={data.no}
                  onChange={handleChangeAddress}
                  required={true}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">{`หมู่`}</label>
              <div>
                <Input
                  type="text"
                  name="moo"
                  placeholder="หมู่"
                  value={data.moo}
                  onChange={handleChangeAddress}
                  required={true}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">{`ซอย`}</label>
              <div>
                <Input
                  type="text"
                  name="soi"
                  placeholder="ซอย"
                  value={data.soi}
                  onChange={handleChangeAddress}
                  required={true}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">{`ถนน`}</label>
              <div>
                <Input
                  type="text"
                  name="road"
                  placeholder="ถนน"
                  value={data.road}
                  onChange={handleChangeAddress}
                  required={true}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between gap-10">
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">{`ตำบล`}</label>
              <div>
                <Input
                  type="text"
                  name="amphoe"
                  placeholder="ตำบล"
                  value={data.subdistrict}
                  onChange={handleChangeAddress}
                  required={true}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">{`อำเภอ`}</label>
              <div>
                <Input
                  type="text"
                  name="district"
                  placeholder="อำเภอ"
                  value={data.district}
                  onChange={handleChangeAddress}
                  required={true}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">{`จังหวัด`}</label>
              <div>
                <Input
                  type="text"
                  name="province"
                  placeholder="จังหวัด"
                  value={data.province}
                  onChange={handleChangeAddress}
                  required={true}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">{`ไปรษณีย์`}</label>
              <div>
                <Input
                  type="text"
                  name="postcode"
                  placeholder="รหัสไปรษณีย์"
                  value={data.postcode}
                  onChange={handleChangeAddress}
                  required={true}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <h2 className="text-white bg-[#DD517E] rounded-full justify-center w-fit p-2 pl-4 pr-4 text-lg">
            ข้อมูลผู้ปกครอง
          </h2>

          <div className="flex flex-row items-end justify-between gap-10">
            <div className="flex">
              <DropBox
                placeholder="Prefix"
                name="prefix_th"
                onChange={handleChangeInfo}
                required={true}
                option={prefix_th}
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col">
                <label className="text-white mb-2">{`ชื่อจริงผู้ปกครอง`}</label>
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="ชื่อผู้ปกครอง"
                    value={data.name}
                    onChange={handleChangeParent}
                    required={true}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">{`นามสกุลผู้ปกครอง`}</label>
              <div>
                <Input
                  type="text"
                  name="surname"
                  placeholder="นามสกุลผู้ปกครอง"
                  value={data.lastname}
                  onChange={handleChangeParent}
                  required={true}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">{`ความสัมพันธ์`}</label>
              <div>
                <Input
                  type="text"
                  name="relation"
                  placeholder="ความสัมพันธ์"
                  value={data.relation}
                  onChange={handleChangeParent}
                  required={true}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row items-end justify-between gap-20">
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">{`เบอร์โทรศัพท์ผู้ปกครอง`}</label>
              <div>
                <Input
                  type="tel"
                  name="tel"
                  placeholder="เบอร์โทรศัพท์ผู้ปกครอง"
                  value={data.tel}
                  onChange={handleChangeParent}
                  required={true}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white mb-2">{`อีเมลผู้ปกครอง`}</label>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="อีเมลผู้ปกครอง"
                  value={data.email}
                  onChange={handleChangeParent}
                  required={true}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <Input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
