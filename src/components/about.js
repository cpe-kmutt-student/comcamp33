import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center relative w-[100vw] h-full text-center px-10 md:px-[10vw] pt-[8vh] md:pt-[5vh] ">
      <div className="absolute top-0 right-0 w-full h-[25vh] z-1">
        <Image src="/assets/about/about_bg.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="background town"
        />
      </div>
      <div className="space-y-2 md:space-y-8">
        <h1 className="text-white font-pixel text-2xl sm:text-2xl md:text-6xl lg:text-6xl">What Is Comcamp ?</h1>
        <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-thai">
          {`น้อง ๆ ที่สงสัยว่าวิศวะ ฯ คอมเรียนเกี่ยวกับอะไร ? วิศวะ ฯ คอมจบไปแล้วทำอะไร ? อะไรคือสิ่งที่เป็นเสนห์ ของวิศวะ ฯ คอม ? วิศวะ ฯ คอม เรียนสนุกไหม ? ยินดีต้อนรับเข้าสู่โครงการฝึกอบรมเชิงปฏิบัติการ คอมพิวเตอร์เบื้องต้น ครั้งที่ 33 หรือ ComCamp#33 ค่ายที่เปิดโอกาสให้น้อง ๆ เข้ามาสัมผัสประสบการณ์ใน ภาควิชาวิศวกรรมคอมพิวเตอร์ สมัครกันเข้ามาได้เลย ! น้อง ๆ จะได้รับประสบการณ์สุดเอ็กซ์คลูซีฟจากพี่ ๆ ภาควิศวะ ฯ คอมตัวจริง ! น้อง ๆ จะได้เข้ามาลองเรียน ลองทำ และลองสัมผัสประสบการณ์ชีวิตนักศึกษา ภาควิศวะคอม กับเพื่อน ๆ กว่าอีก 100 คน !! และที่สำคัญคือค่ายนี้ ฟรีทั้งค่าย !! พี่ ๆ กำลังรอน้อง ๆ มาเป็นส่วนหนึ่งของค่ายอยู่ เพราะงั้น รีบสมัครกันเข้ามา เยอะ ๆ น้าาาาา <3`}
        </p>
      </div>
    </div>
  );
};

export default About;
