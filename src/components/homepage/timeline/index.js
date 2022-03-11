import { PC_Timeline } from "./PC_Timeline";
import { Phone_Timeline } from "./Phone_Timeline";
import Image from "next/image";
import { useEffect, useState } from "react";
const Timeline = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])
  const currentDate = new Date()
  let period = 1

  const closeRegistrationDate = new Date(2022, 3, 2)
  const announcementDate = new Date(2022, 3, 6)
  const openCampDate = new Date(2022, 3, 10)
  const closeCampDate = new Date(2022, 3, 16)

  if (currentDate >= closeRegistrationDate && currentDate < announcementDate) period = 2
  else if (currentDate >= announcementDate && currentDate < openCampDate) period = 3
  else if (currentDate >= openCampDate && currentDate < closeCampDate) period = 4
  else if (currentDate >= closeCampDate) period = 5

  return (
    <div className="flex flex-col justify-center items-center relative w-full h-full text-center md:space-y-20 lg:space-y-20  sm:pt-20 md:mt-0 lg:pt-0 pt-5 md:pt-0">
      <div data-aos="fade-up" className=" absolute right-[0] top-[-10px] hidden lg:block" style={{ transform: `translate(${(offsetY - 5000) * 0.1}px, ${(offsetY - 4000) * 0.2}px)`, }} >
        <div className="relative w-[35vh] h-[25vh]">
          <Image className="animate-float" src="/assets/cd.png" layout="fill" alt="cd" loading="lazy" objectFit="contain" />
        </div>
      </div>
      <h1 data-aos="fade-left" className="text-white font-pixel text-4xl sm:text-5xl md:text-5xl lg:text-6xl">Timeline</h1>
      <PC_Timeline current={period} />
      <Phone_Timeline current={period} />
    </div>
  );
};

export default Timeline;
