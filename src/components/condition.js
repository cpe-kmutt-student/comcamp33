import Image from "next/image";

const Condition = () => {
  return (
    <div className="container mx-auto">
         <section className="text-white py-4 sm:pt-24 md:pt-36 lg:py-10 flex justify-center text-center font-pixel text-2xl sm:text-3xl md:text-6xl lg:text-8xl">
            Condition
            
        </section>
        <div className="grid gridrows-3 lg:grid-cols-3 gap-6">
            <div className="flex flex-col justify-center"><Image src="/assets/condition/Studying.svg"
              width={460}
              height={540}
              quality={100}
              
              />
              <div className="md:text-2xl py-4  lg:py-0 my-6 px-10 bg-[#04B1AF]">
              นักเรียนมัธยมศึกษาปีที่ 4, 5 สายวิทย์
หรือคณิตคอม ปวช. และนักศึกษา รหัส 65
ผู้ที่ยืนยันสิทธ์กับทาง ภาควิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี

              </div>
              </div>
            <div className="flex flex-col justify-center">
            <Image src="/assets/condition/Parent.svg"
              width={460}
              height={540}
              quality={100}
              
              />
               <div className="md:text-2xl md:py-16 my-6 px-10 bg-[#556CC9]">
               มีความสนใจในด้านคอมพิวเตอร์
โดยไม่จำเป็นต้องมีพื้นฐานมาก่อน

              </div>
            </div>
            <div className="flex flex-col justify-center"><Image src="/assets/condition/piccom.svg"
              width={460}
              height={540}
              quality={100}
              
              />
              <div className="md:text-2xl md:py-16 my-6 px-10 bg-[#DD517E]">
              ผู้ปกครองอนุญาตให้นักเรียนคนดังกล่าวเข้าร่วมกิจกรรม ตามระยะเวลาที่กำหนด

              </div>
              </div>
        </div>
    </div>
  );
};

export default Condition;
