import Image from "next/image";

const Condition = () => {
  return (
    <div className="">
         <section className="text-white py-4 sm:pt-24 md:pt-36 lg:py-10 flex justify-center text-center font-pixel text-2xl sm:text-3xl md:text-6xl lg:text-8xl">
            Condition
            
        </section>
        <div className="flex justify-center flex-col md:flex-row">
            <div className="flex justify-center"><Image src="/assets/condition/Studying.svg"
              width={460}
              height={540}
              quality={100}
              
              />
              <div>


              </div>
              </div>
            <div className="flex justify-center">
            <Image src="/assets/condition/Parent.svg"
              width={460}
              height={540}
              quality={100}
              
              />
            </div>
            <div className="flex justify-center"><Image src="/assets/condition/piccom.svg"
              width={460}
              height={394}
              quality={100}
              
              /></div>
        </div>
    </div>
  );
};

export default Condition;
