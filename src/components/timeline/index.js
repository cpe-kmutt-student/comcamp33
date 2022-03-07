import { PC_Timeline } from "./PC_Timeline";

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
    <div className="flex flex-col justify-center items-center relative w-full h-full text-center space-y-12">
      <h1 className="text-white font-pixel text-2xl sm:text-2xl md:text-6xl lg:text-6xl">Timeline</h1>
      <div className="w-[80%]">
        <PC_Timeline current={period} />
      </div>
    </div>
  );
};

export default Timeline;
