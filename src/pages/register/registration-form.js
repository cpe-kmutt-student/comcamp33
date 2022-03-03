import React, { useState } from "react";
import Input from "../../components/Input";
import DropBox from "../../components/DropBox";
import styles from "../../styles/register/registration-form.module.css";

export default function Form() {
  return <>{Form1()}</>;
}

export function Form1() {
  const prefix_en = [
    {
      name: "Prefix",
      placeholder: "Prefix",
      value: null,
    },
    {
      name: "Mr.",
      placeholder: "Mr.",
      value: "Mr.",
    },
    {
      name: "Ms.",
      placeholder: "Ms.",
      value: "Ms.",
    },
    {
      name: "Mrs.",
      placeholder: "Mrs.",
      value: "Mrs.",
    },
  ];
  const prefix_th = [
    {
      name: null,
      placeholder: "คำนำหน้า",
      value: null,
    },
    {
      name: "นาย",
      placeholder: "นาย",
      value: "นาย",
    },
    {
      name: "นาง",
      placeholder: "นาง",
      value: "นาง",
    },
    {
      name: "นางสาว",
      placeholder: "นางสาว",
      value: "นางสาว",
    },
  ];

  const shirt_size = [
    {
      name: "Shirt Size",
      placeholder: "Shirt Size",
      value: null
    },
    {
      name: "S",
      placeholder: "S",
      value: "S"
    },
    {
      name: "M",
      placeholder: "M",
      value: "M"
    },
    {
      name: "L",
      placeholder: "L",
      value:"L"
    },
    {
      name: "XL",
      placeholder: "XL",
      value:"XL"
    },
    {
      name: "XXL",
      placeholder: "XXL",
      value:"XXL"
    },
  ];

  const [data, setData] = useState({
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
    <div>
      <form onSubmit={handleSubmit}>
        <lable className={styles.lable}>
          {`ชื่อ (ภาษาไทย)`}
          <div>
            <DropBox
              placeholder="Prefix"
              name="prefix_th"
              onChange={handleChange}
              required={true}
              option={prefix_th}
            />
            <Input
              type="text"
              name="name_th"
              placeholder="First Name"
              value={data.name_th}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              required={true}
              option={prefix_en}
            />
            <Input
              type="text"
              name="name_en"
              placeholder="First Name"
              value={data.name_en}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              required={true}
              pattern="\d{4}-\d{2}-\d{2}"
            />
          </div>
        </label>
        <lable className={styles.lable}>
          {`ศาสนา`}
          <div>
            <Input
              type="text"
              name="religion"
              placeholder="Religion"
              value={data.religion}
              onChange={handleChange}
              required={true}
            />
          </div>
        </lable>
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              required={true}
            />
          </div>
        </lable>
        <Input type="submit" value="Submit" />
      </form>
    </div>
  );
}
