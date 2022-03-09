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
    <div className="flex flex-col justify-start pt-[8vh] items-center relative w-full h-full text-center md:px-10 lg:px-10 sm:space-y-10 lg:space-y-5 md:space-y-5 lg:pt-[-3vh]">
      <h1 data-aos="fade-right" className="text-white font-pixel text-3xl sm:text-4xl md:text-6xl lg:text-6xl relative ">Learning</h1>
      <div data-aos="fade-up" className="h-[60%] w-full relative hidden lg:block  animate-float">
        <Image src="/assets/learning/pc_learning.svg"
          layout="fill"
          objectFit="contain"
          alt="learning topics"
          quality={100}
        />
      </div>
      <div className="h-[30%] animate-float w-full relative lg:hidden block">
        <Image src="/assets/learning/learning.svg"
          layout="fill"
          objectFit="contain"
          alt="learning topics"
          quality={100}
        />
      </div>
      <div className="flex sm:flex-row flex-col lg:hidden w-screen sm:px-8 sm:space-x-5 items-center px-8 mt-[5vw] lg:space-y-3">
        <div data-aos="fade-right" className="sm:w-[50%] sm:space-y-8 space-y-3">
          <SubjectDetail name="Pre-Programming" highlight="จะเริ่มต้นเขียนโปรแกรมทั้งทีเราต้องรู้อะไรบ้าง?" detail="มาทำความรู้จักกับ Flow Chart เพื่อการออกแบบการลำดับการทำงานของ
โปรแกรมอย่างมีประสิทธิภาพ" />
          <SubjectDetail name="C-Programming" highlight="เริ่มเขียนโปรแกรมกันเลยดีกว่า!" detail="เรียนภาษาซีตั้งแต่พื้นฐานไปจนเข้าใจการตั้งชื่อเงื่อนไขและการวนซ้ำ" />
        </div>
        <div data-aos="fade-left" className="sm:w-[50%] sm:space-y-8 space-y-3">
          <SubjectDetail name="Website" highlight="เว็บไซต์สวยๆสร้างกันอย่างไร?" detail={`มาเรียนรู้ภาษาในการเขียนเว็บไซต์พื้นฐานอย่าง HTML และการตกแต่งเว็บไซต์ด้วย CSS & Javascript`} />
          <SubjectDetail name="Python" highlight="ภาษายอดฮิตที่ทุกคนต้องได้ลอง!" detail="สนุกกับการเขียนภาษา Python ซึ่งสามารถนำไปประยุกต์ใช้ได้หลากหลาย" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-[100%] overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-[clac(170%+1.3px)] h-[169px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" fill="#380644"></path>
        </svg>
      </div>
    </div>
  );
};

export default Learning;