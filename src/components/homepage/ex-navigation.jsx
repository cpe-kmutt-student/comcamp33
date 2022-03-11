import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Link as Smooth } from "react-scroll/modules";
import { useSpring, animated, config } from "react-spring";
import { signIn, signOut, useSession } from "next-auth/react";

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
  const { data: session } = useSession();
  const router = useRouter();

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
        className={`2xl:bg-transparent h-full items-center flex flex-wrap 2xl:justify-center mx-auto relative 2xl:space-x-5 justify-between  ${
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
              loading="lazy"
            />
          </Link>
        </div>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center px-4 ml-3 text-sm text-white rounded-lg 2xl:hidden mt-[-1.5vh]"
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
          className={`w-full 2xl:block 2xl:w-auto mt-[-1.5vh] ${
            isOpen ? "" : "hidden"
          }`}
          id="mobile-menu"
        >
          <ul className="flex flex-col w-full h-10 2xl:flex-row 2xl:space-x-6 2xl:text-xl 2xl:font-medium 2xl:mt-[-1.5vh] ">
            {links.map((link, index) => (
              <li key={link}>
                <Smooth
                  to={`${link}`}
                  href={`#${link}`}
                  smooth={true}
                  duration={1500}
                  className="flex justify-center relative text-lg cursor-pointer 2xl:mt-3 py-3 text-center w-[100%] bg-bg-primary/90 2xl:bg-transparent 2xl:p-0 text-white font-pixel 2xl:hover:text-text-highlight text-shadow hover:bg-[#11033E] transition-all duration-200 ease-linear"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  {index != 5 && (
                    <div className="w-[90%] h-full position absolute bottom-0 mb-[-2.5vh] 2xl:hidden ">
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
              {/* login / regis button in hamburgur */}
              <li className="block 2xl:mt-3 py-3 text-center w-[100%] bg-gradient-to-b from-[#F054F3] to-[#9600FF] hover:bg-gradient-to-t 2xl:hidden text-white font-pixel 2xl:hover:text-text-highlight text-lg hover:text-xl cursor-pointer text-shadow transition-all duration-200 ease-linear">
                <button
                  type="button"
                  onClick={() => {
                    if (session) {
                      router.push("/registration");
                    } else {
                      signIn("facebook"); 
                    }
                  }}
                >
                  {!session && (<p >Login with Facebook</p>)}
                  {session && ( <p>Registration</p> )}
                </button>
              </li>
            </Link>
            {/* hover:bg-[#ff2480]  */}
            {session && (
              <li className="block 2xl:mt-3 py-3 text-center w-[100%] bg-gradient-to-b from-[#dd517e] to-[#E5155E] hover:bg-gradient-to-t hover:text-xl 2xl:hidden text-white font-pixel 2xl:hover:text-text-highlight text-lg cursor-pointer text-shadow transition-all duration-200 ease-linear">
                <button
                  type="button"
                  onClick={async () => {
                    await signOut({ redirect: false });
                    router.push("/home");
                  }}
                >
                  Sign out
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>

{/* wide screen button */}
      <div className="flex flex-row absolute top-0 right-0 space-x-4">
        <button
          className="relative top-0 bg-gradient-to-b from-[#F054F3]/90 to-[#9600FF]/90 right-3 font-pixel text-xl text-white hover:animate-pulse px-3 py-1 rounded-lg mt-[2vh] hidden 2xl:block border-2 border-[#B3E7F8] hover:shadow-[0_0px_15px_-2px_rgba(150,0,255,1)] hover:shadow-[#9600FF] transition-all duration-100 ease-linear"
          onClick={() => {
            if (session) {
              router.push("/registration");
            } else {
              signIn("facebook");
            }
          }}
        >
          {!session && (<p >Login with Facebook</p>)}
          {session && ( <p>Registration</p> )}
        </button>

        {session && (
          <button
            className="relative top-0 bg-gradient-to-b from-[#dd517e]/90 to-[#E5155E]/90 right-3 font-pixel text-xl text-white px-3 py-1 hover:animate-pulse rounded-lg mt-[2vh] hidden 2xl:block border-2 border-[#B3E7F8] hover:shadow-[0_0px_15px_-2px_rgba(150,0,255,1)] hover:shadow-[#7a374e] transition-all duration-100 ease-linear"
            onClick={async () => {
              await signOut({ redirect: false });
              router.push("/home");
            }}
          >
            Sign out
          </button>
        )}
      </div>
    </nav>
  );
};
