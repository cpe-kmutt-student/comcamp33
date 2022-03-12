import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div className="absolute h-full w-screen right-0 bottom-0 z-1">
        <Image
          src="/assets/contact/contactbg.png"
          quality={100}
          layout="fill"
          objectFit="cover"
          alt="light"
          loading="lazy"
        />
      </div>
      <div className="md:px-10 flex items-center justify-center w-full h-full flex-col ">
        <section
          data-aos="fade-up"
          className="text-white pt-4 sm:pt-10 md:pt-10 lg:pt-10 flex justify-center text-center font-pixel text-4xl sm:text-5xl md:text-5xl lg:text-6xl mb-4"
        >
          Contact
        </section>

        <div className="flex justify-center flex-col items-center lg:flex-row bg-white/60 w-[80%] z-10 rounded-3xl relative lg:space-x-5 px-5 lg:pt-5 pt-8 pb-8 mb-10">
          <div
            data-aos="fade-up"
            className="relative flex flex-col items-center h-full lg:w-[35%] w-[90%] justify-evenly lg:pl-8"
          >
            <div className="border-white/80 border-1 p-3 rounded-xl bg-[#B642FF]/80 text-pink-200 tracking-wide flex justify-center lg:h-fit w-[100%] relative flex-col lg:text-white">
              <h1 className="tracking-wider text-center lg:text-xl md:text-xl sm:text-lg text-md">ที่อยู่</h1>
              <p className="lg:text-lg  sm:text-md text-sm">ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ชั้น 10 อาคารวิศววัฒนะ เลขที่ 126 ถ.ประชาอุทิศน์ แขวงบางมด เขตทุ่งครุ จังหวัดกทม. 10140</p>
            </div>
            <div className="flex justify-center h-fit w-[100%] relative flex-col rounded-xl p-3 bg-[#F658DA] text-pink-200 lg:text-white  mt-[5%]">
              <h1 className="tracking-wider text-center lg:text-xl md:text-xl sm:text-lg text:md">ติดต่อ</h1>
              <div className="flex space-x-5">
                <div>
                  <p className="lg:text-lg md:text-lg sm:text-md text-sm">พี่วิน     098-064-4919</p>
                  <p className="lg:text-lg md:text-lg sm:text-md text-sm">พี่เฟียร์   094-345-4863</p>
                  <p className="lg:text-lg md:text-lg sm:text-md text-sm">พี่พัตเตอร์ 098-799-3905</p>
                  <p className="lg:text-lg md:text-lg sm:text-md text-sm">พี่ฆี      084-642-6322</p>
                  <p className="lg:text-lg md:text-lg sm:text-md text-sm">พี่ปิ่น     095-154-3610</p>
                  <p className="lg:text-lg md:text-lg sm:text-md text-sm">พี่ณัฐ     092-595-4992</p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="flex justify-center  scale-[0.6] sm:scale-[0.8] md:scale-[0.8] lg:scale-[0.7] lg:w-[30%] ml-4 h-fit"
          >
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
          <div
            data-aos="fade-up"
            className="flex justify-center scale-[0.6] sm:scale-[0.8] md:scale-[0.8] lg:scale-[0.8] lg:w-[30%]"
          >
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
