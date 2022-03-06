import Image from "next/image";
import Contact from "../../components/contact";
import { ParallaxBanner } from "react-scroll-parallax";
import About from "../../components/about";
import Condition from "../../components/condition";
import { Navigation } from "../../components/Navigation";
const Home = () => {
  return (
    <div className="bg-bg-primary">
      <Navigation />
      <section className="container mx-auto lg:px-24 h-[90vh]" id="home" >
        <div className="h-[60vh] relative mt-3 mx-5">
          <Image src="/assets/logo.png" quality={100} layout="fill" objectFit="contain" alt="com camp logo" />
        </div>
        <div className="absolute bottom-0 right-0 w-[100%] md:h-[35vh] h-[40vh]">
          <Image src="/assets/first/FIRST_WEB/2.png"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="background town"
          />
        </div>
      </section>
      <section className="container h-[100vh]" id="about">
        <About />
      </section>



      <Condition />

    </div >
  );
};

export default Home;
