import Image from "next/image";

export const PC_Timeline = ({ current }) => {
  return (
    <div
      data-aos="fade-up"
      className="relative w-[80%] h-[100%] hidden md:block lg:block"
    >
      {current === 1 ? (
        <Image
          src="/assets/timeline/timeline1.svg"
          layout="fill"
          alt="timeline"
          quality={100}
        ></Image>
      ) : current === 2 ? (
        <Image
          src="/assets/timeline/timeline2.svg"
          layout="fill"
          alt="timeline"
          quality={100}
        ></Image>
      ) : current === 3 ? (
        <Image
          src="/assets/timeline/timeline3.svg"
          layout="fill"
          alt="timeline"
          quality={100}
        ></Image>
      ) : current === 4 ? (
        <Image
          src="/assets/timeline/timeline4.svg"
          layout="fill"
          alt="timeline"
          quality={100}
        ></Image>
      ) : (
        <Image
          src="/assets/timeline/timeline5.svg"
          layout="fill"
          alt="timeline"
          quality={100}
        ></Image>
      )}
    </div>
  );
};
