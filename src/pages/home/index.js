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
      <section className="mx-auto lg:px-24 h-[90vh] bg-gradient-to-t from-[#E5155E] to-[#11033E]" id="home" >
        <div className="absolute h-full w-full top-0 right-0">
          <Image src="/assets/first/radiant.svg" quality={100} layout="fill" objectFit="contain" alt="light" />
        </div>
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
      <section className="h-[100vh] w-[100vw]" id="about">
        <About />
      </section>
      <section className="h-[100vh]" id="learning"></section>
      <section className="h-[100vh]" id="condition">
        <Condition />
      </section>
      <section className="h-[100vh]" id="schedule"></section>
      <section className="h-[100vh]" id="faq"></section>
      <section className="h-[100vh]" id="contact"><Contact /></section>
      <section className="h-[100vh]" id="registration"></section>
    </div >
  );
};

export default Home;
