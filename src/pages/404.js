import Link from 'next/link';
import Image from 'next/image';
const Notfound = () => {
  return (
    <div className="relative flex flex-col justify-center items-center bg-[#11033E] h-screen overflow-hidden">
    <div className="w-screen h-screen top-0 z-0 fixed">
      <Image
        alt="ThankYou_BG"
        src="/assets/notfound.png"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <div className="flex flex-col leading-none p-5 top-0 font-pixel justify-center items-center w-screen text-centerleading-none text-white z-10">
      <span className="text-[3rem]">404</span>
      <span className="text-[1.75rem]">NOT FOUND</span>
    </div>
   
  </div>
  );
}

export default Notfound;
