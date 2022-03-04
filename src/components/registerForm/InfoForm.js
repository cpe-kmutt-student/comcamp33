import React, { useState } from "react";
import Input from "@components/Input";
import DropBox from "@components/DropBox";
import styles from "@styles/components/registerForm/InfoForm.module.css";

import prefix_en from "@components/registerForm/DropBoxData/prefix_en.json";
import prefix_th from "@components/registerForm/DropBoxData/prefix_th.json";
import shirt_size from "@components/registerForm/DropBoxData/shirt_size.json";

export default function InfoForm() {
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
      <div>
        <form onSubmit={handleSubmit}>
          <lable className={styles.lable}>
            {`ชื่อ (ภาษาไทย)`}
            <div>
              <DropBox
                placeholder="Prefix"
                name="prefix_th"
                onChange={handleChangeInfo}
                required={true}
                option={prefix_th}
              />
              <Input
                type="text"
                name="name_th"
                placeholder="First Name"
                value={data.name_th}
                onChange={handleChangeInfo}
                required={true}
              />
            </div>
          </lable>
          <label className={styles.lable}>
            {`นามสกุล (ภาษาไทย)`}
            <div>
              <Input
                type="text"
                name="surname_th"
                placeholder="Last Name"
                value={data.surname_th}
                onChange={handleChangeInfo}
                required={true}
              />
            </div>
          </label>
          <label className={styles.lable}>
            {`ชื่อเล่น`}
            <div>
              <Input
                type="text"
                name="nickname_th"
                placeholder="Nickname"
                value={data.nickname}
                onChange={handleChangeInfo}
                required={true}
              />
            </div>
          </label>
          <lable className={styles.lable}>
            {`Firstname`}
            <div>
              <DropBox
                placeholder="Prefix"
                name="prefix_en"
                onChange={handleChangeInfo}
                required={true}
                option={prefix_en}
              />
              <Input
                type="text"
                name="name_en"
                placeholder="First Name"
                value={data.name_en}
                onChange={handleChangeInfo}
                required={true}
              />
            </div>
          </lable>
          <label className={styles.lable}>
            {`Surname`}
            <div>
              <Input
                type="text"
                name="surname_en"
                placeholder="Last Name"
                value={data.surname_en}
                onChange={handleChangeInfo}
                required={true}
              />
            </div>
          </label>
          <label className={styles.lable}>
            {`วันคล้ายวันเกิด`}
            <div>
              <Input
                type="date"
                name="birthday"
                placeholder="Birthday"
                onChange={handleChangeInfo}
                required={true}
                pattern="\d{4}-\d{2}-\d{2}"
              />
            </div>
          </label>
          <lable className={styles.lable}>
            {`เบอร์โทรศัพท์`}
            <div>
              <Input
                type="tel"
                name="tel"
                placeholder="Tel"
                pattern="[0-9]{10}"
                value={data.tel}
                size="10"
                onChange={handleChangeInfo}
                required={true}
              />
            </div>
          </lable>
          <lable>
            {`อีเมล`}
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={handleChangeInfo}
                required={true}
              />
            </div>
          </lable>
          <lable>
            {`เสื้อ`}
            <div>
              <DropBox
                placeholder="Shirt"
                name="shirt"
                onChange={handleChangeInfo}
                required={true}
                option={shirt_size}
              />
            </div>
          </lable>
          <lable>
            {`รูปภาพ`}
            <div>
              <Input
                type="file"
                name="image"
                placeholder="Image"
                value={data.image}
                onChange={handleChangeInfo}
                required={true}
              />
            </div>
          </lable>
          <br />
          <lable>
            {`เลขที่บ้าน`}
            <div>
              <Input
                type="text"
                name="no"
                placeholder="เลขที่บ้าน"
                value={data.no}
                onChange={handleChangeAddress}
                required={true}
              />
            </div>
          </lable>
          <br />
          <lable>
            {`หมู่`}
            <div>
              <Input
                type="text"
                name="moo"
                placeholder="หมู่"
                value={data.moo}
                onChange={handleChangeAddress}
                required={true}
              />
            </div>
          </lable>
          <br />
          <lable>
            {`ซอย`}
            <div>
              <Input
                type="text"
                name="soi"
                placeholder="ซอย"
                value={data.soi}
                onChange={handleChangeAddress}
                required={true}
              />
            </div>
          </lable>
          <br />
          <lable>
            {`ถนน`}
            <div>
              <Input
                type="text"
                name="road"
                placeholder="ถนน"
                value={data.road}
                onChange={handleChangeAddress}
                required={true}
              />
            </div>
          </lable>
          <br />
          <lable>
            {`ตำบล`}
            <div>
              <Input
                type="text"
                name="amphoe"
                placeholder="ตำบล"
                value={data.subdistrict}
                onChange={handleChangeAddress}
                required={true}
              />
            </div>
          </lable>
          <br />
          <lable>
            {`อำเภอ`}
            <div>
              <Input
                type="text"
                name="district"
                placeholder="อำเภอ"
                value={data.district}
                onChange={handleChangeAddress}
                required={true}
              />
            </div>
          </lable>
          <br />
          <lable>
            {`จังหวัด`}
            <div>
              <Input
                type="text"
                name="province"
                placeholder="จังหวัด"
                value={data.province}
                onChange={handleChangeAddress}
                required={true}
              />
            </div>
          </lable>
          <br />
          <lable>
            {`รหัสไปรษณีย์`}
            <div>
              <Input
                type="text"
                name="postcode"
                placeholder="รหัสไปรษณีย์"
                value={data.postcode}
                onChange={handleChangeAddress}
                required={true}
              />
            </div>
          </lable>
          <br />
          <lable>
            {`ชื่อจริงผู้ปรกครอง`}
            <div>
              <Input
                type="text"
                name="name"
                placeholder="ชื่อผู้ปรกครอง"
                value={data.name}
                onChange={handleChangeParent}
                required={true}
              />
            </div>
          </lable>
          <br />
          <lable>
            {`นามสกุลผู้ปรกครอง`}
            <div>
              <Input
                type="text"
                name="surname"
                placeholder="นามสกุลผู้ปรกครอง"
                value={data.lastname}
                onChange={handleChangeParent}
                required={true}
              />
            </div>
          </lable>
          <br />
          <lable>
            {`ความสัมพันธ์`}
            <div>
              <Input
                type="text"
                name="relation"
                placeholder="ความสัมพันธ์"
                value={data.relation}
                onChange={handleChangeParent}
                required={true}
              />
            </div>
          </lable>
          <br />
          <lable>
            {`เบอร์โทรศัพท์ผู้ปรกครอง`}
            <div>
              <Input
                type="tel"
                name="tel"
                placeholder="เบอร์โทรศัพท์ผู้ปรกครอง"
                value={data.tel}
                onChange={handleChangeParent}
                required={true}
              />
            </div>
          </lable>
          <br />
          <lable>
            {`อีเมลผู้ปรกครอง`}
            <div>
              <Input
                type="email"
                name="email"
                placeholder="อีเมลผู้ปรกครอง"
                value={data.email}
                onChange={handleChangeParent}
                required={true}
              />
            </div>
          </lable>
          <Input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
