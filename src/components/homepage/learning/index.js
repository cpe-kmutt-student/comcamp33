import Image from "next/image";

const SubjectDetail = ({ name, highlight, detail }) => (
  <div className="sm:space-y-4 space-y-0">
    <h1 className="text-white font-pixel md:text-xl sm:text-[1.7rem] lg:text-xl text-lg">
      {name}
    </h1>
    <div>
      <p className="text-text-highlight md:text-sm lg:text-sm sm:text-sm text-[0.7rem]">{highlight}</p>
      <p className="text-white md:text-sm lg:text-sm sm:text-sm text-[0.7rem]">{detail}</p>
    </div>
  </div>
)

const Learning = () => {
  return (
    <div className="flex flex-col lg:items-start justify-center items-center relative w-full h-full text-center md:px-10 lg:px-10 sm:space-y-10 lg:space-y-0 md:space-y-5">
      <h1 data-aos="fade-right" className="text-white font-pixel text-3xl sm:text-4xl md:text-6xl lg:text-6xl relative lg:ml-32 lg:mt-10">Learning</h1>
      <div data-aos="fade-up" className="h-[70%] w-full relative hidden lg:block md:block animate-float">
        <Image src="/assets/learning/pc_learning.svg"
          layout="fill"
          objectFit="contain"
          alt="learning topics"
          quality={100}
        />
      </div>
      <div className="h-[30%] w-full relative lg:hidden md:hidden">
        <Image src="/assets/learning/learning.svg"
          layout="fill"
          objectFit="contain"
          alt="learning topics"
          quality={100}
        />
      </div>
      <div className="flex sm:flex-row flex-col lg:hidden md:hidden w-screen sm:px-8 sm:space-x-5 items-center px-8 mt-[1vw] space-y-3">
        <div className="sm:w-[50%] sm:space-y-8 space-y-3">
          <SubjectDetail name="Pre-Programming" highlight="จะเริ่มต้นเขียนโปรแกรมทั้งทีเราต้องรู้อะไรบ้าง?" detail="มาทำความรู้จักกับ Flow Chart เพื่อการออกแบบการลำดับการทำงานของ
โปรแกรมอย่างมีประสิทธิภาพ" />
          <SubjectDetail name="C-Programming" highlight="เริ่มเขียนโปรแกรมกันเลยดีกว่า!" detail="เรียนภาษาซีตั้งแต่พื้นฐานไปจนเข้าใจการตั้งชื่อเงื่อนไขและการวนซ้ำ" />
        </div>
        <div className="sm:w-[50%] sm:space-y-8 space-y-3">
          <SubjectDetail name="Website" highlight="เว็บไซต์สวยๆสร้างกันอย่างไร?" detail={`มาเรียนรู้ภาษาในการเขียนเว็บไซต์พื้นฐานอย่าง HTML และการตกแต่งเว็บไซต์ด้วย CSS & Javascript`} />
          <SubjectDetail name="Python" highlight="ภาษายอดฮิตที่ทุกคนต้องได้ลอง!" detail="สนุกกับการเขียนภาษา Python ซึ่งสามารถนำไปประยุกต์ใช้ได้หลากหลาย" />
        </div>
      </div>
    </div>
  );
};

export default Learning;
