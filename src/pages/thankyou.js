import ThankYou_BG from "@public/formBg/ThankYou_BG.png";
import Link from "next/link";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
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
        <div className="flex p-5 top-0 font-pixel justify-center items-center w-screen text-center  md:text-[4rem] text-white z-10">
          <h className="text-center">
            Thank you <br /> for registration <br /> <div className="font-sans py-4  md:text-2xl">อย่าลืมส่งใบขออนุญาตผู้ปกครองและเอกสารสำคัญมาที่มหาวิทยาลัยนะครับ <br /><div className="flex justify-center">ดาวน์โหลดเอกสารได้ที่ปุ่มนี้เลย&nbsp;<a className="cursor-pointer"><FaDownload /></a></div></div>
          </h>
        </div>
        <Link href="/home" passHref>
          <a className="flex font-pixel p-5 w-fit rounded-md bg-[#842988] text-lg hover:bg-[#9600ff] text-white ease-in-out duration-[400ms] hover:-translate-y-2 hover:scale-[1.1] z-10">
            Back to home
          </a>
        </Link>
      </div>
    </>
  );
}
