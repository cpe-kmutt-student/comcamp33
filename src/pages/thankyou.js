import ThankYou_BG from "@public/formBg/ThankYou_BG.png";
import Link from "next/link";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import Header from "@components/Header";

export default function thankyou() {
  return (
    <>
      <Header />
      <div className="relative flex flex-col justify-center items-center bg-[#11033E] h-screen overflow-hidden">
        <div className="w-screen h-screen top-0 z-0 fixed">
          <Image
            alt="ThankYou_BG"
            src={ThankYou_BG}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="flex p-2 top-0 font-pixel justify-center items-center w-screen text-center sm:text-[8vw] text-[10vw] md:text-[4rem] text-white z-10">
          <h className="text-center leading-[7vh] lg:leading-[8vh] md:leading-[8vh] sm:leading-[8vh] px-2">
            Thank you <br /> for registration <br />{" "}
            <div className="font-sans py-4  md:text-2xl text-2xl">
              อย่าลืมส่งใบขออนุญาตผู้ปกครองและเอกสารสำคัญมาที่{" "}
              <a
                className="underline ease-linear duration-200 text-shadow hover:text-[#FFD467] "
                href="https://kmutt.me/document"
                target="_blank"
              >
                kmutt.me/document
              </a>
            </div>
          </h>
        </div>
        <div className="flex relative w-full py-2 justify-center items-center">
          <a
            href="https://drive.google.com/drive/folders/1nHHiXKvEprRPZPAn8WIp2dsQCBIlhrvW?usp=sharing"
            target="_blank"
            className="flex font-sans w-fit cursor-pointer transition-all rounded-md bg-[#9600FF] text-lg hover:m-0 md:text-2xl hover:bg-[#AC42F5] text-white p-3 md:p-5 hover:tracking-wider ease-linear duration-[200ms] z-10 hover:rounded-xl"
            rel="noreferrer"
          >
            ดาวน์โหลดเอกสาร &nbsp; <FaDownload />
          </a>
        </div>

        <div className="flex text-white mx-4 text-sm md:text-lg font-sans z-10 py-5 flex-col items-center justify-center">
          <p>ถ้าหากทำการดาวน์โหลดเสร็จสิ้นแล้ว</p>
          <p className="underline underline-offset-auto cursor-pointer hover:text-[#FFD467] transiton-all ease-linear duration-200 text-shadow">
            <Link href="/home" passHref>
              กลับสู่หน้าหลักเลย
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
