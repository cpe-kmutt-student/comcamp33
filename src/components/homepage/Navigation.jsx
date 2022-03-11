import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Link as Smooth } from "react-scroll/modules";
import { useSpring, animated, config } from "react-spring";
import { signIn, signOut, useSession } from 'next-auth/react';
import { lazy } from "react/cjs/react.production.min";

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
        <nav className="sticky h-[6vh] min-h-[50px] top-0 z-[100]">

            {/* mobile screen */}
            <div className="relative w-full bg-bg-primary h-full lg:hidden flex lfex-row justify-between">
                <div className="lg:hidden text-white">
                    logo big
                </div>
                <button
                    data-collapse-toggle="mobile-menu"
                    type="button"
                    className="items-center px-4 ml-3 text-sm text-white rounded-lg lg:hidden"
                    aria-controls="mobile-menu-2"
                    aria-expanded="false"
                    onClick={(e) => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <span className="sr-only">Open main menu</span>
                    <HamburgerIcon state={isOpen} />
                </button>

                <div className={`lg:hidden block absolute w-full h-full top-[6vh] ${isOpen ? "" : "hidden"
                    }`}>
                    {links.map((link, index) => (
                        <div key={link}>
                            <Smooth
                                to={`${link}`}
                                href={`#${link}`}
                                smooth={true}
                                duration={1500}
                                className="flex justify-center relative text-lg cursor-pointer py-3 text-center w-[100%] bg-bg-primary text-white font-pixel  text-shadow  hover:bg-[#11033E] tracking-wider hover:text-xl transition-all duration-200 ease-linear"
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
                        </div>
                    ))}

                    <div className="w-full flex flex-col bg-white lg:hidden" >

                        <button className="py-3 text-center w-[100%] bg-gradient-to-b from-[#F054F3] to-[#9600FF] hover:bg-gradient-to-t text-white font-pixel text-lg hover:text-xl cursor-pointer text-shadow transition-all duration-200 ease-linear">
                            <button
                                type="button"
                                onClick={() => {
                                    if (session) {
                                        router.push('/registration')
                                    } else {
                                        signIn('facebook');
                                    }
                                }}
                            >
                                {!session && (<p >Login with facebook</p>)}
                                {session && (<p className="tracking-wider">Registration</p>)}

                            </button>
                        </button>

                        {/* sign out button */}
                        {session && (
                            <button
                                className="py-3 text-center w-[100%] bg-gradient-to-b from-[#dd517e] to-[#E5155E] hover:bg-gradient-to-t hover:text-xl 2xl:hidden text-white font-pixel text-lg cursor-pointer text-shadow transition-all duration-200 ease-linear  tracking-wider "
                                onClick={async () => {
                                    await signOut({ redirect: false });
                                    router.push('/home');
                                }}
                            >
                                Sign out
                            </button>
                        )}

                    </div>
                </div>








            </div>


            {/* wide screen */}
            <div className="hidden lg:flex w-full bg-bg-primary h-full flex-row justify-between">

                {/* logo */}
                <div className="h-[6vh] relative min-w-[20px] mr-[3%]  w-[20%] min-h-[50px] cursor-pointer ">
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
                

                {/* menus */}
                <div className="text-white">

                    <div className="w-[80%] flex flex-row h-full items-center ">
                        {links.map((link, index) => (
                            <div key={link}>
                                <Smooth
                                    to={`${link}`}
                                    href={`#${link}`}
                                    smooth={true}
                                    duration={1500}
                                    className="font-pixel px-4 hover:text-[#E5155E] text-lg cursor-pointer transition-all ease-linear duration-200"
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                    }}
                                >
                                    {link}
                                </Smooth>
                            </div>
                        ))}
                    </div>
                </div>
                <div className=" h-full my-auto  flex flex-row justify-end items-center w-[20%] min-w-fit " >


                    {/* regis and signout button for window */}

                    <button className="right-2 font-pixel relative text-white top-0 text-center  bg-gradient-to-b from-[#F054F3] to-[#9600FF] mx-2 px-3 py-1 mx-2 border-2 text-xl border-2 border-[#B3E7F8] hover:shadow-[0_0px_15px_-2px_rgba(150,0,255,1)] hover:shadow-[#9600FF] transition-all duration-100 ease-linear rounded-lg hover:px-5 hover:mx-0">
                        <button
                            type="button"
                            onClick={() => {
                                if (session) {
                                    router.push('/registration')
                                } else {
                                    signIn('facebook');
                                }
                            }}
                        >
                            {!session && (<p>Login with facebook</p>)}
                            {session && (<p>Registration</p>)}

                        </button>
                    </button>

                    {/* sign out button */}
                    {session && (
                        <button
                            className="font-pixel relative text-white top-0 text-center  bg-gradient-to-b from-[#dd517e]/90 to-[#E5155E]/90  px-4 py-1 border-2 rounded-lg border-2 text-xl mr-2 border-[#B3E7F8] hover:from-[#dd517e]/100 hover:to-[#E5155E]/100 hover:shadow-[0_0px_15px_-2px_rgba(255,38,114,1)] hover:shadow-[#ff2672] transition-all duration-100 ease-linear whitespace-nowrap"
                            onClick={async () => {
                                await signOut({ redirect: false });
                                router.push('/home');
                            }}
                        >
                            Sign out
                        </button>
                    )}

                </div>
            </div>

        </nav>
    )
};
