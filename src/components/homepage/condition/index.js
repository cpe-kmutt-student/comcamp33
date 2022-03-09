import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";

const Condition = () => {
  return (

    <div className="container mx-auto ">

      <section data-aos="fade-down" className="text-white py-4 sm:pt-10 md:pt-12 lg:py-10 flex justify-center text-center font-pixel text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
        Condition

      </section>
      <div className=" grid  gridrows-3 lg:grid-cols-3 gap-6">
        <div className="flex flex-col px-10 md:px-0 justify-center md:justify-start">
          <div data-aos="flip-right" className="relative mx-auto w-56 h-80 md:w-[18rem] md:h-96">
            <Image src="/assets/condition/study.png"
              layout="fill"
              quality={100}

            />
          </div>
          <div data-aos="fade-up" className="flex justify-center text-sm md:text-xl">
            <p className="text-white py-6  text-center">
              กำลังศึกษาอยู่ในระดับชั้นมัธยมศึกษาตอนปลายปีที่ 4 และ 5
              <div className="text-[#C54776]"> สายวิทย์-คณิต วิทย์-คอม , ปวช.</div>
              <div className="flex justify-center">
                น้องๆ TCAS 65 ที่ได้ทำการ<p className="text-[#C54776]">ยืนยันสิทธิ์</p>
              </div>กับทาง CPE KMUTT เป็นที่เรียบร้อย
            </p>
          </div>

        </div>
        <div className="flex px-10 md:px-0 flex-col justify-center md:justify-start">
          <div data-aos="flip-left" className="relative mx-auto w-56 h-80 md:w-[18rem] md:h-96">
            <Image src="/assets/condition/com.png"
              layout="fill"
              quality={100}

            />

          </div>
          <div data-aos="fade-up"className="flex justify-center text-center text-sm md:text-xl">
            <p className="text-white py-6">
              มีความสนใจในด้านคอมพิวเตอร์
              <div className="flex">
                <p>โดยไม่</p>
                <div className="text-[#C54776]">จำเป็น</div>
                <p>ต้องมีพื้นฐานมาก่อน</p>
              </div>
            </p>
          </div>
        </div>
        <div className="flex flex-col px-10 md:px-0 text-white justify-center md:justify-start">
          <div data-aos="flip-right" className="relative mx-auto w-56 h-80 md:w-[18rem] md:h-96">
            <Image src="/assets/condition/parent.png"
              layout="fill"
              quality={100}


            />
          </div>
          <div data-aos="fade-up"className="flex justify-center text-center text-sm md:text-xl">
            <p className="text-white py-6">
              <div className="flex">
                ผู้ปกครอง

                <p className="text-[#C54776]">
                  อนุญาต
                </p>
                ให้นักเรียนคนดังกล่าว
              </div>
              <p>เข้าร่วมกิจกรรม ตามระยะเวลาที่กำหนด</p>
            </p>

          </div>
         
        </div>

      </div>
    </div>
  );
};

export default Condition;
