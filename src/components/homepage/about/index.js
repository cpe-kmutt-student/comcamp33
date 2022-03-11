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
      <div className="absolute top-[-17px] right-0 w-full h-[25vh] z-20" style={{ transform: `translateY(${offsetY * 0.1}px)` }}>
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
        <p data-aos="fade-right" className="mx-auto w-3/4 tracking-wide leading-snug text-white text-sm sm:text-lg md:text-xl lg:text-xl font-thai">
          {`น้อง ๆ ที่สงสัยว่าวิศวะคอมเรียนเกี่ยวกับอะไร ? วิศวะคอมจบไปแล้วทำอะไร ? อะไรคือสิ่งที่เป็นเสน่ห์ของวิศวะคอม ? วิศวะคอมเรียนสนุกไหม ? ยินดีต้อนรับเข้าสู่โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์เบื้องต้นครั้งที่ 33 หรือ ComCamp#33 ค่ายที่เปิดโอกาสให้น้อง ๆ เข้ามาสัมผัสประสบการณ์ในภาควิชาวิศวกรรมคอมพิวเตอร์ มจธ. สมัครกันเข้ามาได้เลย ! น้อง ๆ จะได้รับประสบการณ์สุดเอ็กซ์คลูซีฟจากพี่ ๆ ภาควิศวะคอมตัวจริง ! น้อง ๆ จะได้เข้ามาลองเรียน ลองทำ และลองสัมผัสประสบการณ์ชีวิตนักศึกษาภาควิศวะคอมกับเพื่อน ๆ กว่าอีก 100 คน !! และที่สำคัญคือค่ายนี้ ฟรีทั้งค่าย !! พี่ ๆ กำลังรอน้อง ๆ มาเป็นส่วนหนึ่งของค่ายอยู่ เพราะงั้นรีบสมัครกันเข้ามาเยอะ ๆ น้าาาาา <3`}
        </p>
      </div>
    </div>
  );
};

export default About;
