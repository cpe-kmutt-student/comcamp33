import Image from "next/image";

export const Phone_Timeline = ({ current }) => {
  return (
    <div
      data-aos="fade-up"
      className="relative h-[100%] w-[40vh] sm:w-[50%] md:w-[50%] block md:hidden lg:hidden ml-[-3vh] mt-[2vh]"
    >
      {current === 1 ? (
        <Image
          src="/assets/timeline/timeline_phone1.svg"
          layout="fill"
          alt="timeline"
          quality={100}
        ></Image>
      ) : current === 2 ? (
        <Image
          src="/assets/timeline/timeline_phone2.svg"
          layout="fill"
          alt="timeline"
          quality={100}
        ></Image>
      ) : current === 3 ? (
        <Image
          src="/assets/timeline/timeline_phone3.svg"
          layout="fill"
          alt="timeline"
          quality={100}
        ></Image>
      ) : current === 4 ? (
        <Image
          src="/assets/timeline/timeline_phone4.svg"
          layout="fill"
          alt="timeline"
          quality={100}
        ></Image>
      ) : (
        <Image
          src="/assets/timeline/timeline_phone5.svg"
          layout="fill"
          alt="timeline"
          quality={100}
        ></Image>
      )}
    </div>
  );
};
