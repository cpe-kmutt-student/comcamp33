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
              height={1372}
                quality={100}
              />
        </div>
        <div className="absolute block sm:hidden">
        <Image src="/assets/about/ABOUT_IPHONE/1.png"
              width={1568}
              height={932}
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
              height={1986}
                quality={100}
              />
        </div>
        <div className=" block sm:hidden">
        <Image src="/assets/about/ABOUT_IPHONE/2.png"
              width={1568}
              height={902}
                quality={100}
              />
        </div>
        
        </div>
    </div>
  );
};

export default About;
