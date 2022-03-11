import Header from "@components/Header";
import { About, Condition, Contact, Faqs, First, Footer, Learning, Navigation, Timeline } from "@components/homepage";
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
    <div className="bg-bg-primary max-w-full overflow-x-hidden overflow-visible">
      <Header />
      <Navigation />

      <StarParticle />

      <section className="lg:px-24 h-[94vh] bg-gradient-to-t from-[#E5155E] to-[#11033E] top-0" id="home" >
        <First />
      </section>

      <section className="bg-[#11033E] h-[94vh]" id="about">
        <About />
      </section>

      <section className="bg-[#200440] h-[120vh]" id="learning">
        <Learning />
      </section>
      <div className="absolute  w-[100%] overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" fill="#200440"></path>
        </svg>
      </div>
      <section className="bg-[#380644] py-12 lg:h-[92vh]" id="condition">
        <Condition />
      </section>
      <div className="absolute  w-[100%] overflow-hidden leading-[0] ">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" fill="#380644"></path>
        </svg>
      </div>

      <section className="bg-[#590949] h-[92vh]" id="schedule">
        <Timeline />
      </section>
      <section className="bg-[#840D4F] h-[93vh]" id="faq">
        <Faqs />
      </section>
      <section className="bg-[#B61157] lg:h-[113vh] relative pb-8 lg:pb-0" id="contact">
        <Contact />
      </section>
      <Footer />
    </div >
  );
};

export default Home;
