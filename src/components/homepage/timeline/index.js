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
    <div className="flex flex-col justify-center items-center relative w-full h-full text-center md:space-y-20 lg:space-y-20  sm:pt-20 md:mt-0 lg:pt-0 pt-5 md:pt-0">
     
      <h1 data-aos="slide-left" className="text-white font-pixel text-4xl sm:text-5xl md:text-5xl lg:text-6xl">Timeline</h1>
      <PC_Timeline current={period} />
      <Phone_Timeline current={period} />
      <div className="absolute bottom-0 left-0 w-[100%] overflow-hidden leading-[0] rotate-180">
          <svg className="relative block w-[calc(199% + 1.3px)] h-[173]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" fill="#840D4F"></path>
          </svg>
      </div>
    </div>
  );
};

export default Timeline;
