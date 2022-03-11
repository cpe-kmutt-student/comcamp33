import ThankYou_BG from "@public/formBg/ThankYou_BG.png";
import Link from "next/link";
import Image from "next/image";
// import Header from "@components/Header";

export default function thankyou() {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center bg-[#11033E] h-screen overflow-hidden">
        <div className="w-screen h-screen top-0 z-0 fixed">
          <Image
            alt="ThankYou_BG"
            src={ThankYou_BG}
            layout="fill"
            objectFit="cover"
            quality={100}
            loading="lazy"
          />
        </div>
        <div className="flex p-5 top-0 font-pixel justify-center items-center w-screen text-center text-[4rem] text-white z-10">
          <h className="text-center">
            Thank you <br /> for registration
          </h>
        </div>
        <Link href="/home" passHref>
          <button className="flex font-pixel p-5 w-fit rounded-md bg-[#842988] text-lg hover:bg-[#9600ff] text-white ease-in-out duration-[400ms] hover:-translate-y-2 hover:scale-[1.1] z-10">
            Back to home
          </button>
        </Link>
      </div>
    </>
  );
}
