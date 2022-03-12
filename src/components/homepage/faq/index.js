import React, { useState } from "react";
import { Data } from "./faq-question";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Fragment } from "react";

const Faqs = () => {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <div className="h-full flex flex-row py-12">
      <div className="hidden min-h-full  sm:flex flex-row w-[70px] justify-center lg:w-[120px] ">
        <div className="hidden min-h-full sm:block w-[20px] bg-[#FF00C0] shadow-lg shadow-[#FF00C0]">
          {" "}
        </div>
        <div className="hidden lg:block w-[20px] bg-[#9600FF] shadow-lg shadow-[#9600FF] ml-[20px]">
          {" "}
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center  ">
        <div
          data-aos="fade-left"
          className="font-pixel text-white text-center text-4xl sm:text-5xl md:text-5xl lg:text-6xl py-4 sm:py-4"
        >
          Faq
        </div>
        <div className="w-full px-4 mx-auto lg:container py-5">
          {Data.map((item, index) => {
            return (
              <Fragment key={index}>
                <div
                  className="z-10 flex flex-row justify-between text-sm sm:text-xl cursor-pointer  text-white hover:bg-[#DD517E]/80 hover:rounded-t-md transition-all duration-300 ease-linear border-white/50 border-b-2"
                  onClick={() => toggle(index)}
                  key={index}
                >
                  {/* data-aos="fade-up" */}

                  {clicked === index ? (
                    <div className="rounded-tl-md py-3 px-2 sm:p-5 lg:p-6 w-full bg-[#f3487e] transition-all duration-300 ease-linear">
                      {item.question}
                    </div>
                  ) : (
                    <div className="py-3 px-2 sm:p-5 lg:p-6 w-full transition-all duration-300 ease-linear">
                      {item.question}
                    </div>
                  )}
                  {clicked === index ? (
                    <span className="flex items-center px-3 sm:p-6 lg:p-6 bg-[#f3487e] rounded-tr-md  transition-all duration-300 ease-linear">
                      {" "}
                      <FiMinus />
                    </span>
                  ) : (
                    <span className="flex items-center px-3 sm:p-6 lg:p-6 transition-all duration-300 ease-linear">
                      {" "}
                      <FiPlus />
                    </span>
                  )}
                </div>
                {clicked === index ? (
                  <div className="z-10 px-2 py-3 text-sm sm:text-xl sm:px-5 sm:py-4 lg:p-6  text-[#DD517E] bg-white rounded-b-md hover:bg-white transition-all duration-300 ease-linear cursor-default">
                    {item.answer}
                  </div>
                ) : null}
              </Fragment>
            );
          })}
        </div>
      </div>
      <div className="hidden sm:flex flex-row w-[70px] justify-center lg:w-[120px]">
        <div className="hidden sm:block w-[20px] bg-[#9600FF] shadow-lg shadow-[#9600FF]">
          {" "}
        </div>
        <div className="hidden lg:block w-[20px] bg-[#FF00C0] shadow-lg shadow-[#FF00C0] ml-[20px]">
          {" "}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
