import Image from "next/image";

const Learning = () => {
  return (
    <div className="flex flex-col md:items-start lg:items-start justify-center items-center relative w-full h-full text-center px-10">
      <h1 className="text-white font-pixel text-4xl sm:text-2xl md:text-6xl lg:text-6xl relative md:ml-20 lg:ml-20">Learning</h1>
      <div className="h-[70%] w-full relative">
        <Image src="/assets/pc_learning.svg"
          layout="fill"
          objectFit="contain"
          alt="learning topics"
          quality={100}
        />
      </div>
    </div>
  );
};

export default Learning;
