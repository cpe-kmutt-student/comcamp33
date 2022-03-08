import ThankYou_BG from "@public/formBg/ThankYou_BG.png";
import Image from "next/image";
// import Header from "@components/Header";


export default function thankyou() {
  return (
  <>
    <div className="relative flex flex-col bg-[#11033E] h-screen overflow-hidden">
      <div className=" overflow-auto w-screen h-screen top-0 z-0 bg-[#19993E]">
        <Image
          alt="ThankYou_BG"
          src={ThankYou_BG}
          objectFit={"fill"}
          quality={100}
          height={"100vh"}
        />
      </div>
        {/* <div className="flex text-[4rem] text-white">Thank you for registration</div>
        <button
          className="flex p-3 rounded-md bg-[#842988] text-lg hover:bg-[#9600ff] text-white ease-in-out duration-[400ms] hover:-translate-y-2 hover:scale-[1.1]"
          href="/home"
        >
          Back to home
        </button> */}
      </div>
    </>
  );
}
