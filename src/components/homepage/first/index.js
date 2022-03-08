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
            <Image src="/assets/first/radiant.svg" quality={100} layout="fill" objectFit="cover" alt="light" />
        </div>
        <div className="h-[60vh] relative mx-5 animate-wiggle">
            <Image src="/assets/logo.png" quality={100} layout="fill" objectFit="contain" alt="com camp logo" />
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