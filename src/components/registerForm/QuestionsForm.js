import React, { useState } from "react";
import TextArea from "@components/TextArea";
import styles from "@styles/components/registerForm/QuestionsForm.module.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { saveData } from "@src/utils/clientUtils";
import ModalAsk from "@components/registerForm/ModalAsk";
import Image from "next/image";
import imageQ1 from "@public/formBg/question1.png";
import imageQ2 from "@public/formBg/question2.png";


export default function QuestionsForm({ data, setData, choose, prev, setOpen, open }) {

  const handleChange = (e, type) => {
    setData({
      ...data,
      [type]: {
        ...data[type],
        [e.target.name]: e.target.value,
      },
    });
    // console.log(data);
    setOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveData({
      ...data,
    });
    // console.log(data);
  };

  return (
    <>
      <div className={choose != 5 ? "hidden" : ""}>
        <form onSubmit={handleSubmit}>
          <label className="flex justify-center">
            <h2 className="flex w-fit justify-center text-3xl font-bold text-white bg-[#9600FF] px-4 py-3 my-8 rounded-2xl">{`คำถาม`}</h2>
          </label>
          <div className="flex flex-col gap-5 mb-5">
            <p className="flex w-fit justify-center text-base text-white bg-[#DD517E] px-5 py-3 mt-5 rounded-3xl">
              {`ถ้าวันหนึ่งน้องต้องย้อนไปในยุค 80 - 90s
            ที่เป็นจุดเริ่มต้นของเทคโนโลยี ได้ 1 วัน
            และสามารถเลือกอุปกรณ์หรือเทคโนโลยีในยุคปัจจุบันติดตัวไป1ชิ้น
            น้องจะทำอะไรให้เกิดประโยชน์ที่สุด
            แล้วทำไมถึงเลือกอุปกรณ์ชิ้นนั้นไปด้วย และเมื่อกลับมายุคปัจจุบัน
            น้องสามารถนำอุปกรณ์ในช่วงยุค 80 - 90s กลับมาได้ 1 ชิ้น
            น้องจะนำอะไรกลับมาและเพราะเหตุใดน้องจึงเลือกอุปกรณ์ชิ้นนี้`}
            </p>
            <TextArea
              type="text"
              name="q1"
              placeholder="คำถามข้อที่ 1 :"
              value={data && data.answers ? data.answers.q1 : ""}
              onChange={(e) => handleChange(e, "answers")}
              required={true}
            />
          </div>

          <label className={styles.label}>
            <h2>{``}</h2>
          </label>
          <div className="flex flex-col gap-5 mb-5">
            <p className="flex w-fit justify-center text-base text-white bg-[#DD517E] px-5 py-3 mt-5 rounded-3xl">
              {`ถ้าวันหนึ่งน้องได้รับเลือกเป็นผู้กล้าต้องย้อนไปในปี 1980
            เพื่อแก้ปัญหาวิกฤตการณ์ขาดแคลนอาหารซึ่งมีสาเหตุมาจากโรคระบาดที่ชื่อว่า
            “BEEtree35” ซึ่งเป็นโรคระบาดที่ติดต่อกันในฝูงผึ้ง
            ทำให้ผึ้งไม่สามารถผสมเกสรได้ ส่งผลให้เกิดภาวะการขาดแคลนอาหาร
            น้องจะประยุกต์เทคโนโลยีที่มีในสมัยนั้น
            มาใช้แก้ปัญหาโรคระบาดนี้อย่างไร`}
            </p>
            <TextArea
              type="text"
              name="q2"
              placeholder="คำถามข้อที่ 2 :"
              value={data && data.answers ? data.answers.q2 : ""}
              onChange={(e) => handleChange(e, "answers")}
              required={true}
            />
          </div>

          <label className={styles.label}>
            <h2>{``}</h2>
          </label>
          <div className="flex flex-col gap-5 mb-5">
            <p className=" w-fit  text-base  text-white bg-[#DD517E] px-5 py-3 mt-5 rounded-3xl">
              <div>{`น้องวางแผนไว้ว่าจะนั่งรถไฟออกเดินทางไปเที่ยวพักผ่อน
            หลังจากที่ตั้งใจอ่านหนังสือและสอบปลายภาคมาอย่างยาวนาน
            เมื่อถึงวันเดินทาง น้องก็ได้เข้าไปอยู่ในห้องโดยสารส่วนตัวที่จองไว้
            ซึ่งเป็นห้องโดยสารว่างๆ ไม่มีสิ่งอำนวยความสะดวกใดๆทั้งสิ้น
            มีเพียงหน้าต่างขนาดใหญ่ที่เอาไว้มองดูทิวทัศน์ระหว่างทางเพื่อแก้เบื่อเท่านั้น
            ในขณะที่เดินทาง ปรากฎว่ารถไฟขบวนที่น้องนั่งอยู่ถูกปล้น
            ผู้โดยสารทุกคนรวมถึงน้องถูกมัด
            ปิดตาและขังปิดตายอยู่ในห้องโดยสารของตนเอง
            ทำให้รถไฟทั้งขบวนเต็มไปด้วยความเงียบ
            มีเพียงเสียงล้อที่เคลื่อนที่กระแทกกับรางรถไฟเป็นจังหวะ
            ในห้องของน้องมีเพียงกระเป๋าเดินทางใบเล็ก ร่ม ขวดน้ำเจาะรู ถุงเท้า
            และเครื่องคิดเลขรุ่นเก่าที่ไม่มีฟังก์ชันอะไรเลย หากน้องมีเวลาเพียง
            10 นาทีก่อนที่คนร้ายจะเข้ามาในห้องโดยสาร`}</div>
              <div className="pt-2">
                {`1.น้องจะเอาตัวรอดจากรถไฟขบวนนี้อย่างปลอดภัยอย่างไร
            และเพราะเหตุใดถึงใช้วิธีนั้นๆ`}
                <br />
                {`2.น้องจะเลือกช่วยผู้โดยสารคนอื่นๆหรือไม่
            หากช่วยน้องจะมีวิธีการช่วยอย่างไร และเพราะเหตุใดถึงใช้วิธีนั้นๆ`}
              </div>
            </p>

            <TextArea
              type="text"
              name="q3"
              placeholder="คำถามข้อที่ 3 :"
              value={data && data.answers ? data.answers.q3 : ""}
              onChange={(e) => handleChange(e, "answers")}
              required={true}
            />
          </div>
          <label className={styles.label}>
            <h2>{``}</h2>
          </label>
          <div className="flex flex-col gap-5 mb-5">
            <p className=" w-fit  text-base  text-white bg-[#DD517E] px-5 py-3 mt-5 rounded-3xl">
              {`ขณะนี้น้องยืนอยู่ในห้องแห่งความลับ
            ในห้องนั้นเต็มไปด้วยของเก่ามากมายแต่สิ่งที่ดึงดูดใจน้อง ๆ คือ
            หีบสมบัติขนาดใหญ่ 2 กล่อง ตรงกลางห้อง ประกอบไปด้วยหีบ A และ หีบ B 
            และมีข้อความดังรูป`}
              <br />
              <div className="flex">
                <Image src={imageQ1} />
                <Image src={imageQ2} />
              </div>
              <br />
              {`ถ้าน้องรู้ว่าข้อความหน้ากล่องมีข้อความที่เป็นจริงเพียงแค่ข้อความเดียวเท่านั้น
            น้องจะเลือกเปิดหีบไหน เพราะอะไร อธิบายเหตุผลมาพอสังเขป`}
            </p>
            <TextArea
              type="text"
              name="q4"
              placeholder="คำถามข้อที่ 4 :"
              value={data && data.answers ? data.answers.q4 : ""}
              onChange={(e) => handleChange(e, "answers")}
              required={true}
            />
          </div>
          <label className={styles.label}>
            <h2></h2>
          </label>
          <div className="flex flex-col gap-5 mb-5">
            <p className=" w-fit  text-base  text-white bg-[#DD517E] px-5 py-3 mt-5 rounded-3xl">
              {`ร้านไอติมแห่งหนึ่ง ขายไอติมราคาแท่งละ 15 บาท แต่ถ้าซื้อมากกว่า 15
            แท่ง ร้านจะขายไอติมให้ในราคาแท่งละ 10 บาท น้องและเพื่อนๆ
            ชอบกินไอติมมาก น้องจึงซื้อไอติมรสวนิลาไปแจกเพื่อนๆ ทั้งหมด 30 แท่ง
            จงเขียน Pseudo Code อธิบายวิธีการคำนวณราคาไอติม และมีการใช้  If-else
            Statement`}
            </p>
            <TextArea
              type="text"
              name="q5"
              placeholder="คำถามข้อที่ 5 :"
              value={data && data.answers ? data.answers.q5 : ""}
              onChange={(e) => handleChange(e, "answers")}
              required={true}
            />
          </div>
          <label className={styles.label}>
            <h2></h2>
          </label>
          <div className="flex flex-col gap-5 mb-5">
            <p className=" w-fit  text-base  text-white bg-[#DD517E] px-5 py-3 mt-5 rounded-3xl">
              {`น้องเป็นผู้ผ่านการคัดเลือกให้เข้าค่าย Comcamp #33
            ภายในค่ายน้องต้องทำกิจกรรมร่วมกับเพื่อนในกลุ่มและกิจกรรมนั้นจำเป็นต้องเปิดกล้องทุกคน
            แต่สมาชิกในกลุ่มน้องไม่มีใครเปิดกล้องเลย
            น้องจะทำอย่างไรกับสถานการณ์นี้`}
            </p>
            <TextArea
              type="text"
              name="q6"
              placeholder="คำถามข้อที่ 6 :"
              value={data && data.answers ? data.answers.q6 : ""}
              onChange={(e) => handleChange(e, "answers")}
              required={true}
            />
          </div>
          <label className={styles.label}>
            <h2>{}</h2>
          </label>
          <div className="flex flex-col gap-5 mb-5">
            <p className=" w-fit  text-base  text-white bg-[#DD517E] px-5 py-3 mt-5 rounded-3xl">
              {`ถ้าน้องกำลังเล่นเกมทายภาพ
            โดยจะต้องเป็นคนบอกขั้นตอนการวาดรูปให้เพื่อนเป็นผู้วาดแล้วทายรูปจากภาพที่ได้ให้ถูกต้อง
            โดยมีเวลาเพียง 90 วินาที น้องจะอธิบายการวาดรูป “ ผีเสื้อ ”
            ให้เพื่อนฟังได้อย่างไร โดยห้ามบอกลักษณะ หรือบอกว่ามันคือผีเสื้อ
            ให้อธิบายเพื่อการวาดภาพเท่านั้น
            จงอธิบายขั้นตอนที่น้องจะใบ้เพื่อนที่กำลังวาดรูป`}
            </p>
            <TextArea
              type="text"
              name="q7"
              placeholder="คำถามข้อที่ 7 :"
              value={data && data.answers ? data.answers.q7 : ""}
              onChange={(e) => handleChange(e, "answers")}
              required={true}
            />
          </div>
          <label className={styles.label}>
            <h2>{``}</h2>
          </label>
          <div className="flex flex-col gap-5 mb-5">
            <p className=" w-fit  text-base  text-white bg-[#DD517E] px-5 py-3 mt-5 rounded-3xl">
              {`หากน้องได้มีโอกาสเข้ามาเป็นนักศึกษาคณะวิศวกรรมศาสตร์
            ภาควิชาวิศวกรรมคอมพิวเตอร์ ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
            และน้องได้ร่วมกิจกรรมการจัดค่าย Comcamp #33 โดยน้องนั้นรับหน้าที่เป็น
            Admin page Facebook ของทางค่าย Comcamp #33
            น้องจะมีวิธีการใช้คำพูดอย่างไร เพื่อให้น้องรุ่นต่อ ๆ
            ไปมีความชื่นชอบสนใจและอยากมาค่าย Comcamp #33 นี้`}
            </p>
            <TextArea
              type="text"
              name="q8"
              placeholder="คำถามข้อที่ 8 :"
              value={data && data.answers ? data.answers.q8 : ""}
              onChange={(e) => handleChange(e, "answers")}
              required={true}
              className="h-36 rounded-xl text-gray-400 border-2 border-white px-2 py-1 rounded-0 outline-none bg-transparent focus:bg-white"
            />
          </div>
          <div className="flex items-center justify-between my-5 z-20">
            <button type="button" onClick={prev}>
              <AiFillCaretLeft
                size="4.5rem"
                color="rgb(236,72,153)"
                style={{
                  display: [1, 2].includes(choose) ? "none" : "block",
                }}
              />
            </button>
            <button type="submit">
              <ModalAsk open={open} setOpen={setOpen} data={data} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
