import Image from "next/image";

const About = () => {
  return (
    <div>
        <div >
        <div className="absolute hidden lg:block">
        <Image src="/assets/about/ABOUT/1.png"
              width={8033}
              height={1518}
                quality={100}
              />
        </div>
        <div className="absolute hidden sm:block lg:hidden">
        <Image src="/assets/about/ABOUT_IPAD/1.png"
              width={3197}
              height={1488}
                quality={100}
              />
        </div>
        <div className="absolute block sm:hidden">
        <Image src="/assets/about/ABOUT_IPHONE/1.png"
              width={1568}
              height={677}
                quality={100}
              />
        </div>

        <div className=" hidden lg:block">
        <Image src="/assets/about/ABOUT/2.png"
              width={8045}
              height={1372}
              quality={100}
              />
              </div>
              <div className=" hidden sm:block lg:hidden">
        <Image src="/assets/about/ABOUT_IPAD/2.png"
              width={3216}
              height={1084}
                quality={100}
              />
        </div>
        <div className=" block sm:hidden">
        <Image src="/assets/about/ABOUT_IPHONE/2.png"
              width={1568}
              height={492}
                quality={100}
              />
        </div>
        <section className="text-white py-4 sm:pt-24 md:pt-36 lg:py-10 flex justify-center text-center font-pixel text-2xl sm:text-3xl md:text-6xl lg:text-8xl">
            What Is Comcamp ?
            
        </section>
        <div className="container mx-auto px-8 lg:px-16">
        <div className="text-white flex justify-center font-thai text-base md:text-xl lg:text-2xl">
       {`น้อง ๆ ที่สงสัยว่าวิศวะ ฯ คอมเรียนเกี่ยวกับอะไร ? วิศวะ ฯ คอมจบไปแล้วทำอะไร ? อะไรคือสิ่งที่เป็นเสนห์ ของวิศวะ ฯ คอม ? วิศวะ ฯ คอม เรียนสนุกไหม ? ยินดีต้อนรับเข้าสู่โครงการฝึกอบรมเชิงปฏิบัติการ คอมพิวเตอร์เบื้องต้น ครั้งที่ 33 หรือ ComCamp#33 ค่ายที่เปิดโอกาสให้น้อง ๆ เข้ามาสัมผัสประสบการณ์ใน ภาควิชาวิศวกรรมคอมพิวเตอร์ สมัครกันเข้ามาได้เลย ! น้อง ๆ จะได้รับประสบการณ์สุดเอ็กซ์คลูซีฟจากพี่ ๆ ภาควิศวะ ฯ คอมตัวจริง ! น้อง ๆ จะได้เข้ามาลองเรียน ลองทำ และลองสัมผัสประสบการณ์ชีวิตนักศึกษา ภาควิศวะคอม กับเพื่อน ๆ กว่าอีก 100 คน !! และที่สำคัญคือค่ายนี้ ฟรีทั้งค่าย !! พี่ ๆ กำลังรอน้อง ๆ มาเป็นส่วนหนึ่งของค่ายอยู่ เพราะงั้น รีบสมัครกันเข้ามา เยอะ ๆ น้าาาาา <3`} 
            </div>
            </div>
        </div>
    </div>
  );
};

export default About;
