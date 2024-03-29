import Image from "next/image";

const Condition = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto h-full py-8">
      <section
        data-aos="fade-down"
        className="text-white py-4 sm:pt-10 md:pt-12 lg:py-10 flex justify-center text-center font-pixel text-4xl sm:text-5xl md:text-5xl lg:text-6xl"
      >
        Condition
      </section>

      <div className="grid  gridrows-3 lg:grid-cols-3 gap-6">
        <div className="flex px-10 md:px-0 flex-col justify-center md:justify-start">
          <div
            data-aos="flip-left"
            className="relative mx-auto w-56 h-80 md:w-[18rem] md:h-96"
          >
            <Image
              src="/assets/condition/com.png"
              layout="fill"
              quality={100}
              alt="computer"
              loading="lazy"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex justify-center text-center text-sm md:text-xl"
          >
            <p className="text-white py-6">
              มีความสนใจในด้านคอมพิวเตอร์
              <div className="flex">
                <p>โดย</p>
                <div className="text-[#FFD467]">ไม่จำเป็น</div>
                <p>ต้องมีพื้นฐานมาก่อน</p>
              </div>
            </p>
          </div>
        </div>

        <div className="flex flex-col px-10 md:px-0 justify-center md:justify-start">
          <div
            data-aos="flip-right"
            className="relative z-0 mx-auto w-56 h-80 md:w-[18rem] md:h-96"
          >
            <Image
              src="/assets/condition/study.png"
              layout="fill"
              quality={100}
              alt="education"
              loading="lazy"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex z-10 justify-center text-sm md:text-xl"
          >
            <p className="text-white py-6  text-center">
              กำลังศึกษาอยู่ในระดับชั้นมัธยมศึกษาตอนปลายปีที่ 4 และ 5
              <span className="text-[#FFD467]">
                {" "}
                สายวิทย์-คณิต, วิทย์-คอม, ปวช.{" "}
              </span>
              หรือน้องๆ TCAS 65 ที่ได้ทำการ
              <span className="text-[#FFD467]">ยืนยันสิทธิ์</span>
              กับทาง CPE KMUTT เป็นที่เรียบร้อย
            </p>
          </div>
        </div>

        <div className="flex flex-col px-10 md:px-0 text-white justify-center md:justify-start">
          <div
            data-aos="flip-right"
            className="relative z-0 mx-auto w-56 h-80 md:w-[18rem] md:h-96"
          >
            <Image
              src="/assets/condition/parent.png"
              layout="fill"
              quality={100}
              alt="parent"
              loading="lazy"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex z-10 justify-center text-center text-sm md:text-xl"
          >
            <p className="text-white py-6">
              <p>
                ผู้ปกครอง
                <span className="text-[#FFD467]">อนุญาต</span>
                ให้นักเรียน
              </p>
              <p>เข้าร่วมกิจกรรม ตามระยะเวลาที่กำหนด</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Condition;
