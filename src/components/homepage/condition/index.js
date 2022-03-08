import Image from "next/image";

const Condition = () => {
  return (
    <div className="container mx-auto ">
      <section className="text-white py-4 sm:pt-24 md:pt-36 lg:py-10 flex justify-center text-center font-pixel text-2xl sm:text-3xl md:text-6xl lg:text-8xl">
        Condition

      </section>
      <div className="grid gridrows-3 lg:grid-cols-3 gap-6">
        <div className="flex flex-col px-10 md:px-0 justify-center">
          <Image src="/assets/condition/Studying.svg"
            width={460}
            height={540}
            quality={100}

          />

        </div>
        <div className="flex px-10 md:px-0 flex-col justify-center">
          <Image src="/assets/condition/Parent.svg"
            width={460}
            height={540}
            quality={100}

          />

        </div>
        <div className="flex flex-col px-10 md:px-0 text-white justify-center"><Image src="/assets/condition/piccom.svg"
          width={460}
          height={540}
          quality={100}

        />

        </div>
      </div>
    </div>
  );
};

export default Condition;
