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
    <>
      <div className="mim-w-full  pb-10 ralative">
        <section className="text-white py-4 lg:py-10 flex justify-center text-center font-pixel text-2xl sm:text-3xl md:text-6xl lg:text-8xl cursor-default">
          FAQ
        </section>
        <div className="container mx-auto ">
          {Data.map((item, index) => {
            return (
              <Fragment key={index}>
                <div className="text-white flex flex-row justify-between items-center cursor-pointer hover:bg-pink-600/50 transition-all duration-300 ease-linear border-white/50 border-b-2 text-xl" onClick={() => toggle(index)} key={index}>
                  <div className="pl-6 pr-4" >{item.question}</div>
                  <span className=" py-5 px-4 cursor-pointer">{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>

                {clicked === index ? (
                  <div className="">
                    <div className="text-white p-4 pl-6 bg-rose-600/40 text-xl ">{item.answer}</div>
                  </div>
                ) : null}
              </Fragment>
            )
          })}
        </div>

      </div>
    </>
  );
};

export default Faqs;
