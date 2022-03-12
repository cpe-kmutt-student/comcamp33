import React, { useState, useEffect, useRef } from "react";
import styles from "@styles/register/PolicyForm.module.css";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";
import { Checkbox, Form } from "antd";

export default function PolicyForm({
  data,
  setData,
  setState,
  choose,
  error,
  next,
}) {
  const nextBtn = useRef(null);

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  // useEffect(() => {
  //   const isVerify = value.box1 === true && value.box2 === true;
  //   setData({ ...data, verify: isVerify });
  // }, [value]);

  const handleChange = (e) => {
    let checkValue = e.target.checked;
    let nameChange = e.target.name;
    let currentStatus = {
      ...value,
      [nameChange]: checkValue,
    };
    setValue(currentStatus);
    setState(currentStatus.box1 && currentStatus.box2);
  };

  const validation = (rule, value, callback) => {
    if (checked) {
      return callback();
    }
    return callback("Please accept the terms and conditions");
  };

  const onCheckboxChange = async (e) => {
    await setChecked(e.target.checked);
  };

  useEffect(() => {
    if (check1 && check2) {
      nextBtn.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [check1, check2]);

  return (
    <div className={choose != 1 && data?.verify == true ? "hidden" : "w-full"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          next();
          const isVerify = check1 === true && check2 === true;
          setData({ ...data, verify: data?.verify || isVerify });
        }}
      >
        <div className="bg-[#9600FF] text-white  p-8 px-10 md:px-28 mb-8">
          <div className="flex justify-center py-4">
            <h1 className="text-xl md:text-3xl font-sans mb-2 text-white">
              เอกสารประกอบการสมัคร
            </h1>
          </div>
          <div className="text-sm md:text-lg">
            <ul className="list-disc font-sans leading-relaxed">
              <li>
                สำเนาบัตรประจำตัวประชาชน ( เฉพาะด้านหน้า ) หรือ
                สำเนาบัตรนักเรียน
              </li>
              <li>
                เอกสารรับรองการเป็นนักเรียนของสถานศึกษา หรือ
                เอกสารรับรองผลการศึกษา ( ปพ. 7 ) อย่างใดอย่างหนึ่ง
              </li>
              <li>
                ระเบียนแสดงผลการศึกษาของระดับมัธยมศึกษาตอนปลาย ( ปพ. 1 ) หรือ
                แบบรายงานประจำตัวนักเรียนภาคเรียนล่าสุด ( ปพ. 6 )
                อย่างใดอย่างหนึ่ง ( อนุญาตให้ใช้สำเนาได้ )
              </li>
              <li>เอกสารขออนุญาตผู้ปกครอง</li>
              <li>
                สำเนาบัตรประจำตัวประชาชนของผู้ปกครองที่ให้การรับรองในเอกสารขออนุญาตผู้ปกครอง
              </li>
            </ul>
          </div>
          <div className="">
            <label className="md:text-lg">
              <Checkbox
                onChange={(e) => setCheck1(e.target.checked)}
                checked={check1}
                className="text-white md:text-lg font-sans"
              >
                ข้าพเจ้าได้อ่านข้อมูลการสมัครทั้งหมดแล้ว
              </Checkbox>
            </label>
          </div>
        </div>

        <div className="flex flex-col bg-[#DD517E] text-white p-8 px-10 md:px-28">
          <div className="flex justify-center font-sans content-center">
            <h1 className="text-xl md:text-3xl mb-2 leading-relaxed text-white">
              นโยบายข้อมูลส่วนบุคคล
            </h1>
          </div>
          <div className="overflow-auto max-h-64 font-sans bg-white text-black pt-4 px-4 md:text-lg">
            <ol className={styles.orderList}>
              <li className={styles.listItem}>
                ข้อมูลสำคัญเกี่ยวกับโครงการ
                <ol className={styles.orderList}>
                  <li>
                    โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์ ครั้งที่ 33 หรือ
                    Comcamp 33 ( ซึ่งต่อไปนี้จะเรียกว่า “ โครงการ ” )
                    เป็นผู้ให้บริการเว็บไซต์ comcamp.io
                    และเว็บไซต์อื่นที่เกี่ยวข้อง ( ซึ่งต่อไปนี้จะเรียกว่า “
                    เว็บไซต์ ” )
                    ได้เห็นความสำคัญของการรักษาข้อมูลส่วนบุคคลของผู้ใช้
                    จึงได้กำหนดนโยบายความเป็นส่วนตัวนี้ขึ้น
                    เพื่อชี้แจงให้ทราบเกี่ยวกับการเก็บรวบรวม ใช้
                    และเปิดเผยข้อมูลส่วนบุคคลของท่าน
                  </li>
                  <br />
                  <li>
                    กรุณาอ่านนโยบายความเป็นส่วนตัวนี้โดยละเอียด
                    โดยเมื่อเข้าใช้งานเว็บไซต์ของโครงการ
                    และยอมรับนโยบายที่เกี่ยวข้องนี้อย่างชัดเจน
                    จะถือว่าท่านรับทราบ
                    และยอมรับข้อกำหนดนโยบายข้อมูลส่วนบุคคลนี้แล้ว
                    หากผู้ใช้ไม่ยอมรับนโยบายข้อมูลส่วนบุคคล
                    ผู้ใช้จะไม่สามารถทำการสมัครผ่านเว็บไซต์ของโครงการได้
                  </li>
                </ol>
              </li>
              <li className={styles.listItem}>
                ข้อมูลที่โครงการเก็บรวบรวมเกี่ยวกับผู้ใช้
                <li>
                  ข้อมูลส่วนบุคคล หรือ ข้อความส่วนบุคคล หมายถึง
                  ข้อมูลที่ทำให้สามารถระบุตัวตนของท่านได้ อาจทำการเก็บรวบรวม ใช้
                  และถ่ายโอนข้อมูลส่วนบุคคลประเภทต่าง ๆ
                  ที่เกี่ยวกับผู้ใช้ตามที่โครงการได้จัดกลุ่มไว้ด้วยกัน
                  ดังต่อไปนี้
                </li>
                <ol className={styles.orderList}>
                  <li className={styles.listItem}>
                    ข้อมูลส่วนตัว
                    <li>
                      ได้แก่ ชื่อ นามสกุล ชื่อเล่น วันเดือนปีเกิด
                      เบอร์โทรศัพท์ของท่าน อีเมลเพื่อใช้สำหรับการติดต่อ
                      และขนาดไซส์เสื้อ
                    </li>
                  </li>
                  <li className={styles.listItem}>
                    ข้อมูลการศึกษา
                    <li>
                      ได้แก่ ระดับการศึกษา หลักสูตร ชื่อสถานศึกษา จังหวัด
                      และเกรดเฉลี่ยสะสม
                    </li>
                  </li>
                  <li className={styles.listItem}>
                    ข้อมูลที่อยู่
                    <li>
                      ได้แก่ ที่อยู่ปัจจุบัน เพื่อจัดส่งของรางวัลจากทางค่าย
                    </li>
                  </li>
                  <li className={styles.listItem}>
                    ข้อมูลอื่น ๆ
                    <li>
                      ได้แก่ มหาวิทยาลัยที่สนใจ
                      หลักสูตรที่สนใจของทางภาควิชาวิศวกรรมคอมพิวเตอร์ และ
                      ค่ายที่เคยเข้าร่วม
                    </li>
                  </li>
                </ol>
              </li>
              <li className={styles.listItem}>
                การจัดเก็บข้อมูลส่วนบุคคลของผู้ใช้
                <li>
                  โครงการอาจรวบรวมข้อมูลเกี่ยวกับผู้ใช้ได้หลายวิธี ได้แก่
                  ปฏิสัมพันธ์โดยตรง กรอกแบบฟอร์มบนเว็บไซต์รับสมัครของโครงการ
                  เพื่อทำการสมัครเข้าร่วมโครงการ เป็นต้น
                </li>
                <br />
                <ol className={styles.orderList}>
                  <li className={styles.listItem}>
                    เทคโนโลยีอัตโนมัติหรือปฏิสัมพันธ์ <br />
                    ในขณะที่ท่านโต้ตอบกับเว็บไซต์ของโครงการ
                    ระบบเทคโนโลยีอัตโนมัติที่โครงการใช้งานบนเว็บไซต์อาจรวบรวมข้อมูลทางเทคนิค
                    เช่น ข้อมูลเกี่ยวกับเบราว์เซอร์ของท่านโดยอัตโนมัติ
                    ว่าท่านเข้าเยี่ยมชมพื้นที่ใดบนเว็บไซต์ของโครงการและลิงก์ที่ท่านคลิกดูเหตุการณ์
                    ช่วยให้โครงการสามารถให้ประสบการณ์ที่ดีแก่ท่านเมื่อท่านเข้าชมเว็บไซต์ของโครงการ
                    และยังช่วยให้โครงการสามารถปรับปรุงพัฒนาเว็บไซต์ให้ดีขึ้น
                  </li>
                  <br />
                  <li className={styles.listItem}>
                    บุคคลที่สาม หรือ แหล่งข้อมูลสาธารณะ <br />
                    โครงการจะเก็บข้อมูลของผู้ใช้ผ่านการเข้าสู่ระบบโดยใช้สื่อสังคม
                    ทำให้โครงการอาจเก็บรวบรวมข้อมูลการติดต่อ อัตลักษณ์
                    และข้อมูลทางเทคนิค รวมไปถึง ชื่อผู้ใช้งาน/ชื่อผู้ใช้
                    รูปประจำตัวผู้ใช้งาน ที่อยู่อีเมล และวันเดือนปีเกิดของท่าน
                    ข้อมูลเกี่ยวกับสื่อสังคมออนไลน์ที่ท่านยินยอมเปิดเผยกับโครงการจะไปรวมกับข้อมูลอื่น
                    ๆ ที่ผู้ใช้ให้กับโครงการไว้
                    หรือที่โครงการรวบรวมเกี่ยวกับท่าน
                  </li>
                </ol>
              </li>

              <li className={styles.listItem}>
                วัตถุประสงค์ของการใช้ข้อมูลส่วนบุคคล
                <ol className={styles.orderList}>
                  โครงการมีวัตถุประสงค์ในการใช้ข้อมูล ดังต่อไปนี้
                  <li className={styles.listItem}>
                    โครงการใช้ข้อมูลส่วนบุคคลเพื่อยืนยันคุณสมบัติและคัดเลือกผู้เข้าร่วมโครงการ
                  </li>
                  <li className={styles.listItem}>
                    โครงการใช้ข้อมูลส่วนบุคคลเพื่อจัดกลุ่มผู้เข้าร่วมโครงการ
                  </li>
                  <li className={styles.listItem}>
                    โครงการใช้ข้อมูลส่วนบุคคลเพื่อจัดกิจกรรมในโครงการ
                  </li>
                  <li className={styles.listItem}>
                    โครงการใช้ข้อมูลส่วนบุคคลเพื่อจัดส่งของรางวัลในโครงการ
                  </li>
                  <li className={styles.listItem}>
                    โครงการใช้ข้อมูลส่วนบุคคลเพื่อจัดส่งใบประกาศนียบัตรสำหรับผู้ที่เข้าร่วมโครงการ
                  </li>
                  <li className={styles.listItem}>
                    โครงการใช้ข้อมูลส่วนบุคคลเพื่อให้สามารถติดต่อผู้ปกครองได้ในกรณีฉุกเฉิน
                  </li>
                  <li className={styles.listItem}>
                    โครงการใช้ข้อมูลแบบไม่ระบุตัวตน
                    และข้อมูลเทคโนโลยีอัตโนมัติเพื่อใช้ในการวิเคราะห์ข้อมูลทางสถิติ
                  </li>
                </ol>
              </li>
              <li className={styles.listItem}>
                ระยะเวลาในการเก็บข้อมูลส่วนบุคคล
                <li>
                  โครงการจะเก็บข้อมูลส่วนบุคคลของท่านเท่าที่จำเป็นในการจัดโครงการครั้งปัจจุบัน
                  และสำหรับโครงการครั้งถัดไป โดยไม่เกิน 4 ปี
                </li>
              </li>
              <li className={styles.listItem}>
                สิทธิของท่านเกี่ยวกับข้อมูลส่วนบุคคล
                <li>
                  ท่านสามารถใช้สิทธิที่ท่านมีอยู่ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
                  รวมถึงการเข้าถึง การแก้ไข การลบระงับการประมวลผลข้อมูล
                  ในการขอให้โครงการส่งสำเนาข้อมูลส่วนบุคคลของท่าน
                  ขอให้องค์กรคัดค้านการประมวลผลข้อมูล หรือถอนความยินยอม
                  โครงการได้ทำการแต่งตั้งเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล
                  เพื่อกำกับดูแลคุ้มครองข้อมูลส่วนบุคคลของค่าย
                  และท่านสามารถติดต่อผู้ดูแลข้อมูลของโครงการ ได้ที่อีเมล
                  <Link
                    href="mailto:comcamp.kmutt@gmail.com"
                    className={styles.Link}
                  >
                    {` comcamp.kmutt@gmail.com`}
                  </Link>
                </li>
              </li>
            </ol>
          </div>
          <div className="mt-2 pt-[1rem] pb-[1rem]">
            <label className="md:text-[1.2rem]">
              <Checkbox
                onChange={(e) => setCheck2(e.target.checked)}
                checked={check2}
                className="text-white md:text-lg font-sans"
              >
                ข้าพเจ้ายอมรับนโยบายคุ้มครองข้อมูลส่วนบุคคล
              </Checkbox>
            </label>
            <p
              className={`text-[#FEFE2D] ${error && (!value.box1 || !value.box2) ? "" : "hidden"
                }`}
            >
              กรุณาอ่านข้อมูลการสมัครให้ครบถ้วน
            </p>
          </div>
        </div>
        <div className="flex justify-between my-5 z-20">
          <div />
          <button type="submit" ref={nextBtn}>
            <AiFillCaretRight
              size="4.5rem"
              className={`text-[#ec4899] opacity-60 translation-all ase-linear duration-200 hover:opacity-100 ${!check1 || !check2 ? "hidden" : ""
                }`}
            />
            <div
              className="z-40"
              style={{ display: [5].includes(choose) ? "block" : "none" }}
            ></div>
          </button>
        </div>
      </form>
    </div>
  );
}
