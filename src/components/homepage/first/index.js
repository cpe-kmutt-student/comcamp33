import {useState, useEffect} from 'react';
const { default: Image } = require("next/image");

const First = () => { 
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    useEffect(() => {
     window.addEventListener("scroll", handleScroll);
    
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
    }, [])

    return(
    <>
        <div className="absolute h-screen w-screen top-5 right-0">
            {/* <Image src="/assets/first/radiant.svg" quality={100} layout="fill" objectFit="cover" alt="light" /> */}
            <svg viewBox="0 0 1855 1080"  xmlns="http://www.w3.org/2000/svg" objectFit="cover" layout="fill">
                <path className='animate-expand5' opacity="0.1" d="M927.41 1471C1439.6 1471 1854.82 1053.95 1854.82 539.5C1854.82 25.0468 1439.6 -392 927.41 -392C415.216 -392 0 25.0468 0 539.5C0 1053.95 415.216 1471 927.41 1471Z" fill="#DD517E"/>
                <path className='animate-expand4' opacity="0.1" d="M907.61 1150C1272.99 1150 1569.19 852.493 1569.19 485.5C1569.19 118.507 1272.99 -179 907.61 -179C542.23 -179 246.03 118.507 246.03 485.5C246.03 852.493 542.23 1150 907.61 1150Z" fill="#DD517E"/>
                <path className='animate-expand3' opacity="0.1" d="M894.71 927.39C1154.07 927.39 1364.32 716.207 1364.32 455.7C1364.32 195.193 1154.07 -15.99 894.71 -15.99C635.352 -15.99 425.1 195.193 425.1 455.7C425.1 716.207 635.352 927.39 894.71 927.39Z" fill="#DD517E"/>
                <path className='animate-expand2' opacity="0.1" d="M903.81 744.57C1073.54 744.57 1211.14 606.365 1211.14 435.88C1211.14 265.395 1073.54 127.19 903.81 127.19C734.076 127.19 596.48 265.395 596.48 435.88C596.48 606.365 734.076 744.57 903.81 744.57Z" fill="#DD517E"/>
                <path className='animate-expand1' opacity="0.1" d="M918.65 659.11C1050.19 659.11 1156.82 552.76 1156.82 421.57C1156.82 290.38 1050.19 184.03 918.65 184.03C787.112 184.03 680.48 290.38 680.48 421.57C680.48 552.76 787.112 659.11 918.65 659.11Z" fill="#DD517E"/>
            </svg>
        </div>
        <div className="h-[60vh] relative mx-5">
            <Image src="/assets/sun.svg" quality={100} layout="fill" objectFit='contain' alt="sun"/>
            <Image className='animate-wiggle' src="/assets/comcamp.png" quality={100} layout="fill" objectFit='contain' alt="comcamp logo"/>
            {/* <Image src="/assets/logo.png" quality={100} layout="fill" objectFit="contain" alt="com camp logo" /> */}
        </div>
        <div className="absolute bottom-0 right-0 w-[100%] md:h-[35vh] h-[40vh]" style={{transform: `translateY(${offsetY*0.1}px)`}}>
            <Image src="/assets/first/town.png"
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="background town"
            />
        </div>
    </>
    );
};

export default First