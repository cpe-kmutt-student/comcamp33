import Image from "next/image";
import { AiFillPhone } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
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
          <div className="relative flex flex-col items-center h-full lg:w-[45%] w-[90%] justify-evenly lg:pl-8">
            <div className="border-white/80 border-1 p-3 bg-[rgb(45,24,62)] text-pink-200 tracking-wide flex justify-center lg:h-fit w-[100%] relative flex-col lg:text-white">
              <div className="w-fit h-fit border-[3px] border-[#B351E9] p-1">
                <div className="flex flex-row justify-start m-2">
                  <div className="tracking-wider text-center font-pixel lg:text-2xl md:text-2xl sm:text-lg text:md">
                    address
                  </div>
                  <div className="tracking-wider text-center lg:text-2xl md:text-2xl sm:text-lg text:md">
                    <IoLocationSharp className="w-full h-full ml-1"></IoLocationSharp>
                  </div>
                </div>
                <p className="lg:text-lg  sm:text-md text-sm m-2">
                  &ensp;ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์
                  มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ชั้น 10 อาคารวิศววัฒนะ
                  เลขที่ 126 ถ.ประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140
                </p>
              </div>
            </div>
            <div className="flex justify-center h-fit w-[100%] relative flex-col p-3 bg-[#702869] text-pink-200 lg:text-white  mt-[5%] ">
              <div className="w-[100%] h-fit p-1 border-[3px] border-[#F659DB]">
                <div className="flex flex-row justify-start m-2">
                  <div className="tracking-wider text-center font-pixel lg:text-2xl md:text-2xl sm:text-lg text:md">
                    contact
                  </div>
                  <div className="tracking-wider text-center lg:text-2xl md:text-2xl sm:text-lg text:md">
                    <AiFillPhone className="w-full h-full"></AiFillPhone>
                  </div>
                </div>

                <div className="flex space-x-5 m-2">
                  <div>
                    <p className="lg:text-lg md:text-lg sm:text-md text-sm">
                      พี่วิน{" "}
                      <a href="tel:098-064-4919" className="underline">
                        098-064-4919
                      </a>
                    </p>
                    <p className="lg:text-lg md:text-lg sm:text-md text-sm">
                      พี่เฟียร์{" "}
                      <a href="tel:094-345-4863" className="underline">
                        094-345-4863
                      </a>
                    </p>
                    <p className="lg:text-lg md:text-lg sm:text-md text-sm">
                      พี่พัตเตอร์{" "}
                      <a href="tel:098-799-3905" className="underline">
                        098-799-3905
                      </a>
                    </p>
                    <p className="lg:text-lg md:text-lg sm:text-md text-sm">
                      พี่ฆี{" "}
                      <a href="tel:084-642-6322" className="underline">
                        084-642-6322
                      </a>
                    </p>
                    <p className="lg:text-lg md:text-lg sm:text-md text-sm">
                      พี่ปิ่น{" "}
                      <a href="tel:095-154-3610" className="underline">
                        095-154-3610
                      </a>
                    </p>
                    <p className="lg:text-lg md:text-lg sm:text-md text-sm">
                      พี่ณัฐ{" "}
                      <a href="tel:092-595-4992" className="underline">
                        092-595-4992
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center  scale-[0.6] sm:scale-[0.8] md:scale-[0.8] lg:scale-[0.75] lg:w-[30%] ml-4 h-fit">
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
          <div className="flex justify-center scale-[0.6] sm:scale-[0.8] md:scale-[0.8] lg:scale-[0.85] lg:w-[30%]">
            <iframe
              width={320}
              height={440}
              src="https://www.instagram.com/p/CbFO-FYLTvl/embed"
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
