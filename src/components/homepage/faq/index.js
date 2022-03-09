import Image from "next/image";
import React, { useState } from 'react';
import { Data } from './faq-question'
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Fragment } from "react";
const Faqs = () => {

  const [clicked, setClicked] = useState(false);
  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(index);
  };

  return (

    <div className="mim-w-full justify-center pb-6 relative h-[93vh]">
      <section data-aos="slide-right" className="text-white pt-16 lg:pt-14 flex justify-center text-center font-pixel text-4xl sm:text-5xl md:text-5xl lg:text-6xl cursor-default">
        FAQ
      </section>
      <div data-aos="fade-up" className="w-[70%] z-10 mx-auto">
        {Data.map((item, index) => {
          return (
            <Fragment key={index} className="z-10">
              <div className=" flex flex-row items-center cursor-pointer bg-transparent hover:bg-pink-600/50 text-white transition-all duration-300 ease-linear border-white/50 border-b-2 md:text-xl z-10" onClick={() => toggle(index)} key={index}>
                <div className="pl-6 pr-4 z-10 w-[90%]" >{item.question}</div>
                <span className=" py-5 px-4 z-10 cursor-pointer w-[10%]">{clicked === index ? <FiMinus /> : <FiPlus />}</span>
              </div>

              {clicked === index ? (
                <div className="z-10">
                  <div className="text-[#840D4F] p-4 pl-6 bg-white md:text-xl z-10">{item.answer}</div>
                </div>
              ) : null}
            </Fragment>
          )
        })}
      </div>
      <div className="absolute w-screen h-full top-0 flex justify-between z-0 md:px-[6vw] sm:px-[4vw] lg:px-[6vw] px-[3vw]">
        <div className="flex space-x-3">
          <div className="h-full w-3 bg-[#9600FF] hidden sm:block md:block lg:block" />
          <div className="h-full w-3 bg-[#FF00C0]" />
        </div>
        <div className="flex space-x-3">
          <div className="h-full w-3 bg-[#FF00C0] hidden sm:block md:block lg:block" />
          <div className="h-full w-3 bg-[#9600FF]" />
        </div>
      </div>
    </div>

  );
};

export default Faqs;
