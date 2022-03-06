import Image from "next/image";
import Contact from "../../components/contact";
import { ParallaxBanner } from "react-scroll-parallax";
import About from "../../components/about";
const Home = () => {
  return (
    <div>
      
        
        <div className="mx-4 lg:mx-36">
       <Image src="/assets/logo.png" quality={100}  width={2679} height={1933}/>
       </div>
       <div className="bg-no-repeat bg-center">
       
       
       <div className=" hidden lg:block">
        <Image src="/assets/first/FIRST_WEB/2.png"
              width={8027}
              height={2037}
                quality={100}
              />
        </div>
        <div className=" hidden sm:block lg:hidden">
        <Image src="/assets/first/FIRST_WEB_IPAD/2.png"
              width={3216}
              height={2036}
                quality={100}
              />
        </div>
        <div className="block sm:hidden">
        <Image src="/assets/first/FIRST_WEB_IPHONE/2.png"
              width={1566}
              height={1592}
                quality={100}
              />
        </div>
       
       
       </div>
       <About/>
       
       
      </div>
  );
};

export default Home;
