import Header from "@components/Header";
import { About, Condition, Contact, Faqs, First, Learning, Navigation, Timeline } from "@components/homepage";
import { StarParticle } from "@components/homepage/StarParticle";

const Home = () => {
  return (
    <div className="bg-bg-primary">
      <Header />
      <Navigation />
      <StarParticle />
      <section className="lg:px-24 h-[92vh] bg-gradient-to-t from-[#E5155E] to-[#11033E] top-0 pt-5" id="home" >
        <First />
      </section>
      <section className="bg-[#11033E] h-[93vh]" id="about">
        <About />
      </section>
      <section className="bg-[#200440] h-[93vh]" id="learning">
        <Learning />
      </section>
      <section className="bg-[#380644] lg:h-[93vh]" id="condition">
        <Condition />
      </section>
      <section className="bg-[#590949] h-[93vh]" id="schedule">
        <Timeline />
      </section>
      <section className="bg-[#840D4F] md:h-[93vh]" id="faq">
        <Faqs />
      </section>
      <section className="bg-[#B61157] flex justify-center lg:h-[93vh]" id="contact">
      
        <Contact />
      </section>
      <section className="bg-[] h-[93vh]" id="registration">

      </section>
    </div >
  );
};

export default Home;
