import Image from "next/image";
import { PC_Timeline } from "./PC_Timeline";
import { Phone_Timeline } from "./Phone_Timeline";

const Timeline = () => {
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
    <div className="flex flex-col justify-center items-center relative w-full h-full text-center md:space-y-20 lg:space-y-20  sm:pt-20 md:mt-0 lg:pt-0 pt-10">
      <h1 className="text-white font-pixel text-4xl sm:text-5xl md:text-5xl lg:text-6xl">Timeline</h1>
      <PC_Timeline current={period} />
      <Phone_Timeline />
    </div>
  );
};

export default Timeline;