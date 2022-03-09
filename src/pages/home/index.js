import Header from "@components/Header";
import { About, Condition, Contact, Faqs, First, Learning, Navigation, Timeline } from "@components/homepage";
import { StarParticle } from "@components/homepage/StarParticle";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg-bg-primary overflow-clip">
      <Header />
      <Navigation />

      <StarParticle />

      <section className="lg:px-24 h-[94vh] bg-gradient-to-t from-[#E5155E] to-[#11033E] top-0 pt-5" id="home" >
        <First />
      </section>

      <section className="bg-[#11033E] h-[100vh]" id="about">
        <About />
       
      </section>
    
      <section className="bg-[#200440] h-[93vh]" id="learning">
        <Learning />
      </section>
      <section className="bg-[#380644] " id="condition">
        <Condition />
      </section>
      
      <section className="bg-[#590949] h-[93vh]" id="schedule">
        <Timeline />
      </section>
      
      <section className="bg-[#840D4F] h-screen md:h-[93vh]" id="faq">
        <Faqs />
      </section>
      
      <section className="bg-[#B61157] lg:h-[93vh]" id="contact">
        <Contact />
      </section>

    </div >
  );
};

export default Home;
