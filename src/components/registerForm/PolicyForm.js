import React, { useState } from "react";
import Input from "@components/Input";

export default function PolicyForm({ choose, setState, error }) {
  const [data, setData] = useState({
    box1: false,
    box2: false,
  });

  const handleChange = (e) => {
    let checkValue = e.target.checked
    let nameChange = e.target.name;
    let currentStatus = {
      ...data,
      [nameChange]: checkValue
    }
    setData(currentStatus)
    setState(currentStatus.box1 && currentStatus.box2)
  };

  return (
    <div
      className={
        choose != 1 && data.box1 == true && data.box2 == true ? "hidden" : ""
      }
    >
      <form>
        <div className="flex flex-col bg-[#9600FF] text-white rounded-xl mt-6 pl-[10%] pr-[10%]">
          <div className="flex justify-center content-center">
            <h1 className="text-3xl">เอกสารประกอบการสมัคร</h1>
          </div>
          <div>
            <ul className="list-disc">
              <li>สำเนาบัตรประจำตัวประชาชน หรือ สำเนาบัตรนักเรียน</li>
              <li>
                เอกสารรับรองการเป็นนักเรียนของสถานศึกษา หรือ
                เอกสารรับรองผลการศึกษา ( ปพ. 7 ) อย่างใดอย่างหนึ่ง
              </li>
              <li>
                ระเบียนแสดงผลการศึกษาของระดับมัธยมศึกษาตอนปลาย ( ปพ. 1 ) หรือ
                แบบรายงานประจำตัวนักเรียนภาคเรียนล่าสุด อย่างใดอย่างหนึ่ง (
                อนุญาตให้ใช้สำเนาได้ )
              </li>
              <li>เอกสารขออนุญาตผู้ปกครอง</li>
              <li>
                สำเนาบัตรประจำตัวประชาชนของผู้ปกครองที่ให้การรับรองในเอกสารขออนุญาตผู้ปกครอง
              </li>
              <li>
                ภาพถ่ายอิสระของผู้สมัครที่เห็นใบหน้าชัดเจน และมีขนาดไม่ต่ำกว่า 4
                x 6 นิ้ว พร้อมเขียนระบุชื่อจริง นามสกุลของผู้สมัคร
              </li>
            </ul>
            <label className="text-xl">
              <input
                type="checkbox"
                required={true}
                onChange={handleChange}
                name="box1"
              />
              ข้าพเจ้าได้อ่านข้อมูลการสมัครทั้งหมดแล้ว
            </label>
          </div>
        </div>

        <div className="flex flex-col bg-[#9600FF] text-white rounded-xl mt-6 pl-[10%] pr-[10%]">
          <div className="flex justify-center content-center">
            <h1 className="text-3xl">นโยบายข้อมูลส่วนบุคคล</h1>
          </div>
          <div>
            <ol className="list-decimal">
              <li>
                ข้อมูลสำคัญเกี่ยวกับโครงการ
                <ol className="list-decimal">
                  <li>
                    โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์ ครั้งที่ 33 หรือ
                    Comcamp#33 ( ซึ่งต่อไปนี้จะเรียกว่า “ โครงการ ” )
                    เป็นผู้จัดการดำเนินการเว็บไซต์ camp.io
                    และเว็บไซต์อื่นที่เกี่ยวข้อง ( ซึ่งต่อไปนี้จะเรียกว่า “
                    เว็บไซต์ ” ) นโยบายความเป็นส่วนตัวนี้
                    เพื่อกำหนดความมุ่งมั่นของโครงการต่อความเป็นส่วนตัวของผู้ใช้ของท่าน
                    ( ซึ่งต่อไปนี้จะเรียกว่า “ ผู้ใช้ ” หรือ “ ท่าน ” )
                    และวิธีที่โครงการเก็บและใช้ข้อมูลส่วนตัวของท่าน
                    กรุณาอ่านนโยบายความเป็นส่วนตัวนี้โดยละเอียด
                    การเข้าใช้งานเว็บไซต์ของโครงการโดยใช้บริการของโครงการ
                    และยอมรับนโยบายที่เกี่ยวข้องนี้อย่างชัดเจน ท่านรับทราบว่า
                    ท่านได้อ่านและยอมรับข้อกำหนดนโยบายข้อมูลส่วนบุคคลนี้แล้ว
                    หากผู้ใช้ไม่ยอมรับนโยบายข้อมูลส่วนบุคคล
                    ผู้ใช้ยังสามารถทำการสมัครผ่านเว็บไซต์ของโครงการได้
                  </li>
                </ol>
              </li>
            </ol>
            <label className="text-xl">
              <input
                type="checkbox"
                required={true}
                onChange={handleChange}
                name="box2"
              />
              ข้าพเจ้าได้อ่านข้อมูลการสมัครทั้งหมดแล้ว
            </label>
            <p className={`text-[#FEFE2D] ${error && (!data.box1 || !data.box2) ? '' : 'hidden'}`}>กรุณาอ่านข้อมูลการสมัครให้ครบถ้วน</p>
          </div>
        </div>
      </form>
    </div>
  );
}
