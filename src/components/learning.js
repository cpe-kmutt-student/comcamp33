import Image from "next/image";

const Learning = () => {
  return (
    <div>
        <div className="absolute invisible md:visible">
        <Image src="/assets/learning.png"
              width={1920}
              height={1080}
                quality={100}
              />
        </div>
        <div className="visible md:invisible">
        <Image src="/assets/weblearning.png"
              width={1080}
              height={1920}
              quality={100}
              />
        </div>
    </div>
  );
};

export default Learning;
