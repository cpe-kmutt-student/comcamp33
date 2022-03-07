import Image from "next/image";
import Contact from "../../components/contact";
import { ParallaxBanner } from "react-scroll-parallax";
import About from "../../components/about";
import Condition from "../../components/condition";
import { Navigation } from "../../components/Navigation";
import Learning from "../../components/learning";
import Timeline from "../../components/Timeline";
const Home = () => {
  return (
    <div className="bg-bg-primary">
      <Navigation />
      <section className="lg:px-24 h-[90vh] bg-gradient-to-t from-[#E5155E] to-[#11033E]" id="home" >
        <div className="absolute h-full w-screen top-0 right-0">
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
      <section className="bg-[#11033E] h-[100vh]" id="about">
        <About />
      </section>
      <section className="bg-[#200440] h-[100vh]" id="learning">
        <Learning />
      </section>
      <section className="bg-[#380644] h-[100vh]" id="condition">

      </section>
      <section className="bg-[#590949] h-[93vh]" id="schedule">
        <Timeline />
      </section>
      <section className="bg-[#840D4F] h-[100vh]" id="faq"></section>
      <section className="bg-[#B61157] h-[100vh]" id="contact"><Contact /></section>
      <section className="bg-[] h-[100vh]" id="registration"></section>
    </div >
  );
};

export default Home;
