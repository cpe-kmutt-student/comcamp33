import Image from "next/image";
import { useEffect, useState } from "react";

const SubjectDetail = ({ name, highlight, detail }) => (
  <div className="sm:space-y-4 space-y-0 py-3">
    <h1 className="text-white font-pixel tracking-widest md:text-3xl sm:text-[1.5rem]  text-lg">
      {name}
    </h1>
    <div  >
      <p className="text-[#FFD467] sm:text-lg lg:text-xl  text-[0.8rem] ">{highlight}</p>
      <p className="text-white sm:text-lg lg:text-xl text-[0.8rem]">{detail}</p>
    </div>
  </div>
)

const Learning = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])
  return (

    <div className="flex flex-col justify-start pt-[5vh] sm:py-[5vh] md:py-[5vh] lg:py-[7vh] items-center relative w-full h-full text-center md:px-10 lg:px-10 sm:space-y-10 lg:space-y-5 md:space-y-5 ">
      <div data-aos="fade-up" className="absolute top-[-20px] left-0 hidden lg:block" style={{ transform: `translate(-${(offsetY - 910) * 0.1}px, ${(offsetY - 1500) * 0.2}px)`, }}>
        <div className="relative w-[30vh] h-[15vh] lg:w-[40vh] lg:h-[20vh] lg:ml-[8vh] lg:mt-[4vh]">
          <Image className="animate-float" src="/assets/cassette.png" layout="fill" alt="cassette" loading="lazy" objectFit="contain" />
        </div>
      </div>
      <h1 data-aos="fade-right" className="text-white font-pixel text-3xl sm:text-4xl md:text-6xl lg:text-6xl relative ">Learning</h1>
      <div data-aos="fade-up" className="h-[70vh] w-full relative hidden lg:block  animate-float ">
        <Image src="/assets/learning/pc_learning.svg"
          layout="fill"
          objectFit="contain"
          alt="learning topics"
          quality={100}
        />
      </div>
      <div className="h-[25vh] animate-float w-full relative lg:hidden block ">
        <Image src="/assets/learning/learning.svg"
          layout="fill"
          objectFit="contain"
          alt="learning topics"
          quality={100}
        />
      </div>
      <div className="flex md:flex-row sm:flex-row  flex-col lg:hidden w-screen sm:px-8 sm:space-x-5 items-center px-8 my-[5vw] lg:space-y-3">
        <div data-aos="fade-right" className="sm:w-[50%]">
          <SubjectDetail name="Pre-Programming" highlight="จะเริ่มต้นเขียนโปรแกรมทั้งที เราต้องรู้อะไรบ้าง ?" detail="มาทำความรู้จักกับ Flowchart เครื่องมือช่วยออกแบบลำดับการทำงานของ โปรแกรมให้ง่ายยิ่งขึ้น" />
          <SubjectDetail name="C-Programming" highlight="เริ่มเขียนโปรแกรมกันเลยดีกว่า!" detail="เรียนภาษาซีตั้งแต่พื้นฐาน
ไปจนถึงการใช้งานจริง" />
        </div>
        <div data-aos="fade-left" className="sm:w-[50%] pb-5 md:pb-0">
          <SubjectDetail name="Website" highlight="เว็บไซต์สวยๆสร้างกันอย่างไร?" detail={`มาเรียนรู้ภาษาในการเขียนเว็บไซต์พื้นฐานอย่าง HTML และการตกแต่งเว็บไซต์ด้วย CSS & Javascript`} />
          <SubjectDetail name="Python" highlight="นำเสนอข้อมูลอย่างไรให้น่าดึงดูด ?" detail="เรียนรู้เทคนิคการนำเสนอข้อมูลมหาศาล ให้เข้าใจง่ายด้วยภาษา Python" />

        </div>
      </div>

    </div>
  );
};

export default Learning;
