import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Link as Smooth } from "react-scroll/modules";
const HamburgerIcon = () => (
  <>
    <svg
      className="w-[4vh] h-[4vh]"
      fill="white"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      ></path>
    </svg>
    <svg
      className="hidden w-6 h-6"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  </>
);

export const Navigation = () => {
  const links = [
    "about",
    "learning",
    "condition",
    "schedule",
    "faq",
    "contact",
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full sticky top-0 z-[100] bg-bg-primary h-[8vh] pt-1">
      <div
        className={`lg:bg-transparent items-center flex flex-wrap lg:justify-center mx-auto relative lg:space-x-5 justify-between ${
          isOpen ? "bg-bg-primary" : ""
        }`}
      >
        <div className="h-[10vh] relative w-[10vh] min-h-[50px] min-w-[20px] cursor-pointer mt-[-1.5vh]">
          <Link
            href="/home"
            passHref
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Image
              src="/assets/comcamp.png"
              alt="comcamp logo"
              layout="fill"
              objectFit="contain"
            />
          </Link>
        </div>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center px-4 ml-3 text-sm text-white rounded-lg lg:hidden mt-[-1.5vh]"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
          onClick={(e) => {
            setIsOpen(!isOpen);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <HamburgerIcon />
        </button>
        <div
          className={`w-full lg:block lg:w-auto ${isOpen ? "" : "hidden"}`}
          id="mobile-menu"
        >
          <ul className="flex flex-col w-full h-10 lg:flex-row lg:space-x-6 lg:text-xl lg:font-medium lg:mt-[-2.5vh] md:mt-[15vh]">
            {links.map((link) => (
              <li key={link}>
                <Smooth
                  to={`${link}`}
                  smooth={true}
                  duration={1500}
                  
                  className="block cursor-pointer lg:mt-3 py-3 text-center w-[100%] bg-bg-primary lg:bg-transparent lg:p-0 text-white font-pixel lg:hover:text-text-highlight border-b-text-highlight border-b-[1px] lg:border-b-0"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  {link}
                </Smooth>
              </li>
            ))}
            <Link
              href="/registration"
              passHref
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <li className="block lg:mt-3 py-3 text-center w-[100%] bg-[#FF00C6] lg:hidden text-white font-pixel lg:hover:text-text-highlight border-b-text-highlight border-b-[1px] cursor-pointer">
                Registration
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <button className="absolute top-0 bg-gradient-to-b from-[#F054F3]/95 to-[#9600FF]/95 right-3 font-pixel text-md text-white px-3 py-1 rounded mt-[2vh] hidden lg:block border-2 border-[#B3E7F8]">
        <Link href="/registration" passHref>
          Registration
        </Link>
      </button>
    </nav>
  );
};