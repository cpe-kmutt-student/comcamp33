import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Link as Smooth } from "react-scroll/modules";
import { useSpring, animated, config } from "react-spring";

const HamburgerIcon = ({ state }) => {
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? -5 : 0,
    config: { duration: 500 },
  });

  return (
    <svg
      width="30"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1.5" x2="20" y2="1.5" stroke="white" strokeWidth="3" />
      <animated.line
        y1="7.5"
        x2="20"
        y2="7.5"
        stroke="white"
        strokeWidth="3"
        style={{
          translateX: x,
        }}
      />
      <line y1="13.5" x2="20" y2="13.5" stroke="white" strokeWidth="3" />
    </svg>
  );
};

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
        className={`lg:bg-transparent h-full items-center flex flex-wrap lg:justify-center mx-auto relative lg:space-x-5 justify-between  ${
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
          <HamburgerIcon state={isOpen} />
        </button>
        <div
          className={`w-full lg:block lg:w-auto mt-[-1.5vh] ${
            isOpen ? "" : "hidden"
          }`}
          id="mobile-menu"
        >
          <ul className="flex flex-col w-full h-10 lg:flex-row lg:space-x-6 lg:text-xl lg:font-medium lg:mt-[-1.5vh] ">
            {links.map((link, index) => (
              <li key={link}>
                <Smooth
                  to={`${link}`}
                  smooth={true}
                  duration={1500}
                  className="flex justify-center relative text-lg cursor-pointer lg:mt-3 py-3 text-center w-[100%] bg-bg-primary/80 lg:bg-transparent lg:p-0 text-white font-pixel lg:hover:text-text-highlight text-shadow hover:bg-[#11033E]/60 transition-all duration-200 ease-linear"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  {index != 5 && (
                    <div className="w-[90%] h-full position absolute bottom-0 mb-[-2.5vh] lg:hidden ">
                      <Image
                        src="/assets/separator.svg"
                        layout="fill"
                        alt="separator"
                        objectFit="contain"
                      />
                    </div>
                  )}
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
              <li className="block lg:mt-3 py-3 text-center w-[100%] bg-[#B61157] hover:bg-[#ff2480] lg:hidden text-white font-pixel lg:hover:text-text-highlight text-lg cursor-pointer text-shadow transition-all duration-200 ease-linear">
                Registration
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <button className="absolute top-0 bg-gradient-to-b from-[#F054F3]/90 to-[#9600FF]/90 right-3 font-pixel text-xl text-white px-3 py-1 rounded mt-[2vh] hidden lg:block border-2 border-[#B3E7F8] hover:shadow-[0_0px_15px_-2px_rgba(150,0,255,1)] hover:shadow-[#9600FF] transition-all duration-100 ease-linear">
        <Link href="/registration" passHref>
          Registration
        </Link>
      </button>
    </nav>
  );
};
