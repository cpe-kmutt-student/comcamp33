import Image from "next/image";

const Contact = () => {
  return (
    <div className="container mx-auto md:px-10">
       <section className="text-white py-4 sm:pt-24 md:pt-36 lg:py-10 flex justify-center text-center font-pixel text-2xl sm:text-3xl md:text-6xl lg:text-8xl">
            Contact
            
        </section>
      <div className="flex justify-center gap-2 flex-col lg:flex-row place-items-center ">
        <div className="md:shrink-0 md:w-96 ">
        <div className="flex flex-col ">
          <div className="flex justify-center ">
              <Image src="/assets/Ticket_Address.png"
              width={1432}
              height={820}
              
              
              />
          </div>
          <div className="flex justify-center">
          <Image src="/assets/Ticket_Tel.png"
              width={1432}
              height={820}
              />
          </div>
          </div>
        </div>
        <div className="flex justify-center hidden se:block">
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FKMUTTcomcamp&tabs=timeline&width=320&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=323404429809727" width={340} height={500} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
        </div>
        <div className="flex justify-center "> 
          <iframe width={320} height={440} src="https://www.instagram.com/p/CaRvnhkhs2v/embed" frameBorder={0} /></div>
      </div>
    </div>
  );
};

export default Contact;
