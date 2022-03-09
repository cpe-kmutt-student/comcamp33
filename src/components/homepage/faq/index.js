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
      <div className="h-full flex flex-row">
        <div className="hidden h-full sm:flex flex-row w-[70px] justify-center lg:w-[120px]">
          <div className="hidden sm:block w-[20px] bg-[#FF00C0] shadow-lg shadow-[#FF00C0]"> </div>
          <div className="hidden lg:block w-[20px] bg-[#9600FF] shadow-lg shadow-[#9600FF] ml-[20px]"> </div>
        </div>
        <div className="bg-white-700 w-full h-full flex flex-col justify-center">
          <div className="font-pixel text-white text-center text-4xl sm:text-5xl md:text-5xl lg:text-6xl py-4 sm:py-4 ">FAQ</div>
          <div className="w-full px-4 mx-auto lg:container">
            {Data.map((item, index) => {
            return (
              <Fragment key={index} className="z-10">
                <div className=" flex flex-row justify-between text-sm sm:text-xl lg:text-2xl xl:text-4xl  cursor-pointer bg-transparent hover:bg-pink-600/50 text-white transition-all duration-300 ease-linear border-white/50 border-b-2" onClick={() => toggle(index)} key={index}>
                  <div className=" py-3 px-2 sm:p-5 lg:p-6" >{item.question}</div>
                  <span className="flex items-center px-3 sm:p-5 lg:p-6">{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                {clicked === index ? (
                  
                    <div className="px-2 py-3 text-sm sm:text-xl sm:px-5 sm:py-4 lg:p-6 lg:text-2xl xl:text-4xl  text-[#840D4F] bg-white/90 hover:bg-white transition-all duration-300 ease-linear cursor-default">{item.answer}</div>
                ) : null}
              </Fragment>
            )
          })}
          </div>
        </div>
        <div className="hidden h-full sm:flex flex-row w-[70px] justify-center lg:w-[120px]">
          <div className="hidden sm:block w-[20px] bg-[#9600FF] shadow-lg shadow-[#9600FF]"> </div>
          <div className="hidden lg:block w-[20px] bg-[#FF00C0] shadow-lg shadow-[#FF00C0] ml-[20px]"> </div>
        </div>
      </div>
    );
  };
  
  export default Faqs;