import Image from "next/image";
import imageQ1 from "@public/formBg/question1.png";
import imageQ2 from "@public/formBg/question2.png";
import { AiFillCaretLeft } from "react-icons/ai";
import { saveData } from "@src/utils/clientUtils";
import { Form, Input, Modal, Button, Alert } from "antd";
import { useEffect, useState } from "react";

const questions = [
  "ถ้าวันหนึ่งน้องต้องย้อนกลับไปในยุค 80 - 90s ที่เป็นจุดเริ่มต้นของเทคโนโลยีได้ 1 วัน โดยสามารถเลือกอุปกรณ์หรือเทคโนโลยีในยุคปัจจุบันติดตัวไปได้ 1 ชิ้น น้องจะทำอะไรให้เกิดประโยชน์ที่สุด แล้วทำไมถึงเลือกอุปกรณ์ชิ้นนั้นไปด้วย และเมื่อกลับมายุคปัจจุบัน น้องสามารถนำอุปกรณ์ในช่วงยุค 80 - 90s กลับมาได้ 1 ชิ้น น้องจะนำอะไรกลับมาและเพราะเหตุใดน้องจึงเลือกอุปกรณ์ชิ้นนี้",

  "ถ้าวันหนึ่งน้องได้รับเลือกเป็นผู้กล้าต้องย้อนไปในปี 1980 เพื่อแก้ปัญหาวิกฤตการณ์ขาดแคลนอาหารซึ่งมีสาเหตุมาจากโรคระบาดที่ชื่อว่า “BEEtree35” ซึ่งเป็นโรคระบาดที่ติดต่อกันในฝูงผึ้ง ทำให้ผึ้งไม่สามารถผสมเกสรได้ ส่งผลให้เกิดภาวะขาดแคลนอาหาร น้องจะประยุกต์เทคโนโลยีที่มีในสมัยนั้น มาใช้แก้ปัญหาโรคระบาดนี้อย่างไร",

  `น้องวางแผนไว้ว่าจะนั่งรถไฟออกเดินทางไปเที่ยวพักผ่อน หลังจากที่ตั้งใจอ่านหนังสือและสอบปลายภาคมาอย่างยาวนาน เมื่อถึงวันเดินทาง น้องก็ได้เข้าไปอยู่ในห้องโดยสารส่วนตัวที่จองไว้ ซึ่งเป็นห้องโดยสารว่าง ๆ ไม่มีสิ่งอำนวยความสะดวกใด ๆ ทั้งสิ้น มีเพียงหน้าต่างขนาดใหญ่ที่เอาไว้มองดูทิวทัศน์ระหว่างทางเพื่อแก้เบื่อเท่านั้น ในขณะที่เดินทาง ปรากฏว่ารถไฟขบวนที่น้องนั่งอยู่ถูกปล้น ผู้โดยสารทุกคนรวมถึงน้องถูกมัดปิดตาและขังปิดตายอยู่ในห้องโดยสารของตนเอง ทำให้รถไฟทั้งขบวนเต็มไปด้วยความเงียบ มีเพียงเสียงล้อที่เคลื่อนที่กระแทกกับรางรถไฟเป็นจังหวะ ในห้องของน้องมีเพียงกระเป๋าเดินทางใบเล็ก ร่ม ขวดน้ำเจาะรู ถุงเท้า และเครื่องคิดเลขรุ่นเก่าที่ไม่มีฟังก์ชันอะไรเลย หากน้องมีเวลาเพียง 10 นาทีก่อนที่คนร้ายจะเข้ามาในห้องโดยสาร\n\t1. น้องจะเอาตัวรอดจากรถไฟขบวนนี้อย่างปลอดภัยอย่างไร\n\t2. น้องจะเลือกช่วยผู้โดยสารคนอื่น ๆ หรือไม่ หากช่วยน้องจะมีวิธีการช่วยอย่างไร และเพราะเหตุใดถึงใช้วิธีนั้น ๆ`,

  <>
    ขณะนี้น้องยืนอยู่ในห้องแห่งความลับ
    ในห้องนั้นเต็มไปด้วยของเก่ามากมายแต่สิ่งที่ดึงดูดใจน้อง ๆ คือ
    หีบสมบัติขนาดใหญ่ 2 กล่อง ตรงกลางห้อง ประกอบไปด้วยหีบ 1 และ หีบ 2 
    และมีข้อความดังรูป
    <div className="flex md:flex-row flex-col gap-2 transform scale-100 lg:scale-90 my-2">
      <Image src={imageQ1} alt="first chest" />
      <Image src={imageQ2} alt="second chest" />
    </div>
    ถ้าน้องรู้ว่าข้อความหน้ากล่องมีข้อความที่เป็นจริงเพียงแค่ข้อความเดียวเท่านั้น
    น้องจะเลือกเปิดหีบไหน เพราะอะไร อธิบายเหตุผลมาพอสังเขป
  </>,

  "ร้านไอติมแห่งหนึ่ง ขายไอติมราคาแท่งละ 15 บาท แต่ถ้าซื้อมากกว่า 15 แท่ง ร้านจะขายไอติมให้ในราคาแท่งละ 10 บาท น้องและเพื่อน ๆ ชอบกินไอติมมาก น้องจึงซื้อไอติมรสวนิลาไปแจกเพื่อน ๆ ทั้งหมด 30 แท่ง จงเขียน Pseudo code อธิบายวิธีการคำนวณราคาไอติม โดยให้มีการใช้  If - else statement",

  "น้องเป็นผู้ผ่านการคัดเลือกให้เข้าค่าย Comcamp 33  ภายในค่ายน้องต้องทำกิจกรรมร่วมกับเพื่อนในกลุ่มและกิจกรรมนั้นจำเป็นต้องเปิดกล้องทุกคน แต่สมาชิกในกลุ่มน้องไม่มีใครเปิดกล้องเลย น้องจะทำอย่างไรกับสถานการณ์นี้",

  "ถ้าน้องกำลังเล่นเกมทายภาพ โดยจะต้องเป็นคนบอกขั้นตอนการวาดรูปให้เพื่อนเป็นผู้วาดแล้วทายรูปจากภาพที่ได้ให้ถูกต้อง โดยมีเวลาเพียง 90 วินาที น้องจะอธิบายการวาดรูป “ ผีเสื้อ ” ให้เพื่อนฟังได้อย่างไร โดยห้ามบอกลักษณะ หรือบอกว่ามันคือผีเสื้อ ให้อธิบายเพื่อการวาดภาพเท่านั้น จงอธิบายขั้นตอนที่น้องจะใบ้เพื่อนที่กำลังวาดรูป",

  "หากน้องได้มีโอกาสเข้ามาเป็นนักศึกษาคณะวิศวกรรมศาสตร์ ภาควิชาวิศวกรรมคอมพิวเตอร์ ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี และน้องได้ร่วมกิจกรรมการจัดค่าย Comcamp 33 โดยน้องนั้นรับหน้าที่เป็น Admin page Facebook ของทางค่าย Comcamp 33 น้องจะมีวิธีการใช้คำพูดอย่างไร เพื่อให้น้องรุ่นต่อ ๆ ไปมีความชื่นชอบสนใจและอยากมาค่าย Comcamp 33 นี้",
];

const QuestionsForm = ({ data, setData, choose, prev }) => {
  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = useState(false);

  const save = async (isConfirm) => {
    const formData = form.getFieldsValue();
    setData({
      ...data,
      ...formData,
      ...(isConfirm && { complete: true }),
    });
    await saveData({
      ...formData,
      ...(isConfirm && { complete: true }),
    });
  };

  const onClickPrevButton = async () => {
    await save(false);
    prev();
  };

  const onConfirm = async () => {
    await save(true);
  };

  const onFinishFailed = ({ values, errorFields, outOfDate }) => {
    Modal.error({
      title: "กรุณากรอกข้อมูลให้ครบถ้วน",
    });
  };

  return (
    <div className="flex flex-col justify-center font-sans">
      <Modal
        visible={isVisible}
        okText="Confirm"
        cancelText="Cancel"
        onOk={onConfirm}
        onCancel={() => {
          setIsVisible(false);
        }}
      >
        <div className="flex flex-col text-center font-sans p-6">
          <h1 className="font-semibold text-xl">ยืนยันการรับสมัครใช่หรือไม่</h1>
          <p className="text-lg mb-0">
            <span className="text-red-600">คำเตือน</span>{" "}
            ไม่สามารถแก้ไขข้อมูลได้หลังการยืนยันข้อมูล
          </p>
        </div>
      </Modal>

      <h1 className="flex w-fit mx-auto text-xl md:text-3xl font-bold text-white bg-[#9600FF] px-4 py-3 my-6">
        คำถาม
      </h1>

      <Form
        form={form}
        onFinish={() => {
          setIsVisible(true);
        }}
        onFinishFailed={onFinishFailed}
        name="answers"
        layout="vertical"
        validateTrigger="onBlur"
        initialValues={data}
      >
        {questions.map((question, index) => (
          <div key={index}>
            <div className="md:text-[1.2rem] text-white bg-[#cf406e] px-5 py-3 my-5 whitespace-pre-wrap">
              <span className="text-[#ff9394]">*</span> {index + 1}. {question}
            </div>

            <Form.Item
              name={["answers", "q" + (index + 1).toString()]}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "อย่าลืมตอบคำถาม",
                },
              ]}
            >
              <Input.TextArea
                placeholder={"คำตอบข้อที่ " + (index + 1)}
                className="h-36 md:text-lg text-gray-400 border-2 border-white px-2 py-1 outline-none bg-transparent focus:bg-white"
              />
            </Form.Item>
          </div>
        ))}

        <div className="flex font-pixel items-center justify-between my-5 z-20">
          <button type="button" onClick={onClickPrevButton}>
            <AiFillCaretLeft
              size="4.5rem"
              className="text-[#ec4899] opacity-60 translation-all duration-200 hover:opacity-100"
            />
          </button>
          <Button
            htmlType="submit"
            className="flex justify-center items-center bg-gradient-to-b from-[#F054F3]/90 to-[#9600FF]/90 right-3 font-pixel text-md text-white px-3 py-2 rounded border-2 border-[#B3E7F8] hover:shadow-lg opacity-100 lg:opacity-80 tracking-widest hover:bg-gradient-to-t hover:opacity-100 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default QuestionsForm;
