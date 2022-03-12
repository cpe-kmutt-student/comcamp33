import Header from "@components/Header";
import { About, Condition, Contact, Faqs, First, Footer, Learning, Navigation, Timeline, Wave } from "@components/homepage";
import dynamic from 'next/dynamic';
const StarParticle = dynamic(() => import('@components/homepage/StarParticle'));
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg-bg-primary max-w-full">
      <Header />
      {/* <Navigation /> */}

      <StarParticle />

      <div className=" overflow-x-hidden overflow-visible">
        <section className="lg:px-24 h-[95.5vh] bg-gradient-to-t from-[#E5155E] to-[#11033E] top-0" id="home" >
          <First />
        </section>


        <section className="bg-[#11033E] h-fit" id="about">
          <About />
        </section>


        <section className="bg-[#200440] h-fit" id="learning">
          <Learning />
        </section>
        <Wave fill="#200440" />
        <section className="bg-[#380644] py-12 lg:h-fit " id="condition">
          <Condition />
        </section>
        <Wave fill="#380644" />

        <section className="bg-[#590949] h-[92vh]" id="schedule">
          <Timeline />
        </section>
        <section className="bg-[#840D4F] h-fit" id="faq">
          <Faqs />
        </section>
        <section className="bg-[#B61157] h-fit relative pb-8 lg:pb-0" id="contact">
          <Contact />
        </section>

        <Footer />
      </div>
    </div >
  );
};

export default Home;
