import Image from "next/image";
import { useEffect, useState } from "react";

import { BiCalendar, BiLocationPlus } from "react-icons/bi";

const About = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center relative w-full h-full text-center px-6 md:px-[10vw] pt-[20vh] md:pt-[20vh] pb-[5vh] md:pb-[8vh] lg:pt-[25vh]">
      <div className="absolute top-[-17px] right-0 w-full h-[25vh] z-20">
        <Image
          src="/assets/about/about_bg.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="background town"
        />
      </div>
      <div className="space-y-2 md:space-y-8">
        <div className="md:space-y-2">
          <h1
            data-aos="fade-down"
            className="text-white font-pixel text-2xl sm:text-4xl md:text-4xl lg:text-5xl mb-4"
          >
            What Is Comcamp ?
          </h1>
          <h1
            data-aos="fade-down"
            className="text-white text-lg sm:text-lg md:text-3xl lg:text-3xl italic hidden sm:block md:block lg:block"
          >
            ค่ายคอมแคมป์คือค่ายอะไร ?
          </h1>
        </div>
        <p
          data-aos="fade-right"
          className="mx-auto w-3/4 text-white text-center tracking-wide leading-snug lg:text-center text-sm sm:text-lg md:text-xl lg:text-2xl font-thai"
        >
          วิศวะคอมบางมดเรียนเกี่ยวกับอะไร ? วิศวะคอมบางมดจบไปแล้วทำอะไร ?
          วิศวะคอมบางมดเรียนสนุกไหม ? ยินดีต้อนรับน้อง ๆ
          เข้าสู่โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์ ครั้งที่ 33 หรือ
          Comcamp 33 ค่ายออนไลน์ที่เปิดโอกาสให้น้อง ๆ
          เข้ามาสัมผัสประสบการณ์ภายในภาควิชาวิศวกรรมคอมพิวเตอร์
          มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ผ่านการเรียนเนื้อหาจริง
          ทำผลงานจริง และประสบการณ์จริงสุดเอ็กซ์คลูซีฟจากพี่ ๆ วิศวะคอม
          ไปพร้อมกับเพื่อน ๆ ทั้ง 100 คน !! และที่สำคัญ ค่ายนี้ ฟรีตลอดค่าย !!
          รีบสมัครเข้ามาเป็นส่วนหนึ่งของค่ายกันเยอะ ๆ น้าาาาา 💖
        </p>
        <div
          data-aos="fade-right"
          className="z-10 text-sm sm:text-lg md:text-xl lg:text-2xl mx-auto w-scree text-white flex flex-col lg:flex-row  items-center justify-center relative mt-4"
        >
          <div className="flex flex-row items-center pb-3 lg:pb-0">
            <div className="pr-2 text-sm sm:text-lg md:text-3xl leading-10">
              <BiCalendar name="calendar"></BiCalendar>
            </div>
            <div className=" px-2 py-auto font-thai whitespace-nowrap">
              วันค่าย 10 - 16 เมษายน 2565
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="pr-2 lg:px-2 lg:ml-10 text-sm sm:text-lg md:text-3xl leading-10">
              <BiLocationPlus type="solid"></BiLocationPlus>
            </div>
            <div className=" px-2 py-auto font-Thai whitespace-nowrap">
              ผ่าน &ensp;ZOOM / Discord
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
