import Image from "next/image";
import { useEffect, useState } from "react";
import { BGAnimation } from "./BGAnimation";

const About = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <div className="flex flex-col justify-center items-center relative w-full h-full text-center px-10 md:px-[10vw] pt-[15vh] md:pt-[15vh] ">
      <BGAnimation />
      <div className="absolute top-[-17px] right-0 w-full h-[25vh] z-1" style={{ transform: `translateY(${offsetY * 0.1}px)` }}>
        <Image src="/assets/about/about_bg.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="background town"
        />
      </div>
      <div className="space-y-2 md:space-y-8">
        <div className="md:space-y-2">
          <h1 data-aos="fade-down" className="text-white font-pixel text-2xl sm:text-4xl md:text-5xl lg:text-5xl">What Is Comcamp ?</h1>
          <h1 data-aos="fade-down" className="text-white text-lg sm:text-lg md:text-3xl lg:text-3xl italic hidden sm:block md:block lg:block">ค่ายคอมแคมป์คือค่ายอะไร ?</h1>
        </div>
        <p data-aos="fade-right" className="text-white text-sm sm:text-lg md:text-xl lg:text-xl font-thai">
          {`น้อง ๆ ที่สงสัยว่าวิศวะ ฯ คอมเรียนเกี่ยวกับอะไร ? วิศวะ ฯ คอมจบไปแล้วทำอะไร ? อะไรคือสิ่งที่เป็นเสน่ห์ ของวิศวะ ฯ คอม ? วิศวะ ฯ คอม เรียนสนุกไหม ? ยินดีต้อนรับเข้าสู่โครงการฝึกอบรมเชิงปฏิบัติการ คอมพิวเตอร์เบื้องต้น ครั้งที่ 33 หรือ ComCamp#33 ค่ายที่เปิดโอกาสให้น้อง ๆ เข้ามาสัมผัสประสบการณ์ใน ภาควิชาวิศวกรรมคอมพิวเตอร์ สมัครกันเข้ามาได้เลย ! น้อง ๆ จะได้รับประสบการณ์สุดเอ็กซ์คลูซีฟจากพี่ ๆ ภาควิศวะ ฯ คอมตัวจริง ! น้อง ๆ จะได้เข้ามาลองเรียน ลองทำ และลองสัมผัสประสบการณ์ชีวิตนักศึกษา ภาควิศวะคอม กับเพื่อน ๆ กว่าอีก 100 คน !! และที่สำคัญคือค่ายนี้ ฟรีทั้งค่าย !! พี่ ๆ กำลังรอน้อง ๆ มาเป็นส่วนหนึ่งของค่ายอยู่ เพราะงั้น รีบสมัครกันเข้ามา เยอะ ๆ น้าาาาา <3`}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-[100%] overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-[clac(157%+1.3px)] h-[169px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" fill="#200440"></path>
        </svg>
    </div>
    </div>
  );
};

export default About;
