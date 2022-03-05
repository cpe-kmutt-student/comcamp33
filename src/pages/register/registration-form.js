import React, { useState } from "react";
import InfoForm from "@components/registerForm/InfoForm";
import EducationForm from "@components/registerForm/EducationForm";
import InterestForm from "@components/registerForm/InterestForm";
import QuestionsForm from "@components/registerForm/QuestionsForm";
import ProgressBar from "@components/registerForm/ProgressBar";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Image from "next/image";
import BgStar from "@public/formBg/unknown.png";
import Bg1 from "@public/formBg/unknown1.png";

export default function Form() {
  const [chooseForm, setChooseForm] = useState(1);

  const nextForm = () => {
    if (chooseForm < 4) {
      setChooseForm(chooseForm + 1);
    }
  };
  const prevForm = () => {
    if (chooseForm > 1) {
      setChooseForm(chooseForm - 1);
    }
  };
  return (
    <div className="relative flex flex-col w-[100vw] bg-[#11033E] min-h-screen">
      <div className="fixed w-[100vw] h-[100vh] top-0">
        <Image
          alt="BgStar"
          src={BgStar}
          layout="responsive"
          objectFit="contain"
          quality={100}
        />
      </div>
      <div className="fixed w-[100vw] h-[100vh] top-0">
        <div className="h-[60%]" />
        <div className="h-[40%]">
        <Image
          alt="Bg1"
          src={Bg1}
          layout="responsive"
          objectFit="contain"
          quality={100}
        />
        </div>
      </div>
      <div className="z-10 w-full">
      <h1 className="font-bold text-2xl mx-auto">REGISTRATION</h1>

      <ProgressBar currentStep={chooseForm}/>

      <div className="p-[20%] pt-0 pb-0">
        <InfoForm choose={chooseForm} />
        <EducationForm choose={chooseForm} />
        <InterestForm choose={chooseForm} />
        <QuestionsForm choose={chooseForm} />
      </div>

      <div className="flex justify-around my-5">
        <button onClick={prevForm}>
          <div className="text-5xl text-pink-500">
            <AiFillCaretLeft />
          </div>
        </button>
        <button onClick={nextForm}>
          <div className="text-5xl text-pink-500">
            <AiFillCaretRight />
          </div>
        </button>
      </div>
      </div>
    </div>
  );
}
