import Image from "next/image";

const Contact = () => {
  return (
    <>

      <div className="absolute h-[93vh] w-screen right-0 bottom-0 z-1">
        <Image
          src="/assets/contact/contactbg.png"
          quality={100}
          layout="fill"
          objectFit="cover"
          alt="light"
          loading="lazy"
        />
      </div>
      <div className="md:px-10 space-y-4 flex items-center justify-center w-full h-full flex-col ">
        <section data-aos="fade-up" className="text-white pt-4 sm:pt-10 md:pt-10 lg:pt-10 flex justify-center text-center font-pixel text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
          Contact
        </section>

        <div className="flex justify-center flex-col items-center lg:flex-row bg-white/60 w-[80%] z-10 rounded-3xl relative lg:space-x-5 px-5 lg:pt-5 pt-8 pb-8">
          <div data-aos="fade-up" className="relative flex flex-col items-center lg:w-[35%] w-[90%] space-y-5 lg:space-y-0">
            <div className="flex justify-center h-[25vh] w-[100%] relative">
              <Image
                src="/assets/contact/Address.png"
                objectFit="contain"
                layout="fill"
                alt="ticket contact"
                loading="lazy"
              />
            </div>
            <div className="flex justify-center h-[25vh] w-[100%] relative">
              <Image
                src="/assets/contact/Telephone.png"
                objectFit="contain"
                layout="fill"
                alt="ticket contact"
                loading="lazy"
              />
            </div>
          </div>
          <div data-aos="fade-up" className="flex justify-center scale-[0.7] lg:scale-[0.8] lg:w-[30%] ml-4">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FKMUTTcomcamp&tabs=timeline&width=320&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=323404429809727"
              width={340}
              height={500}
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              loading="lazy"
              frameBorder={0}
              title="ComCamp - Facebook Fanpage"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
          <div data-aos="fade-up" className="flex justify-center scale-[0.7] lg:scale-[0.8] lg:w-[35%]">
            <iframe
              width={320}
              height={440}
              src="https://www.instagram.com/p/CaRvnhkhs2v/embed"
              frameBorder={0}
              title="ComCamp - Instagram Post"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
