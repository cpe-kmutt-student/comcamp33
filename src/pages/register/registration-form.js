import React, { useState } from "react";
import InfoForm from "@components/registerForm/InfoForm";
import EducationForm from "@components/registerForm/EducationForm";
import InterestForm from "@components/registerForm/InterestForm";
import QuestionsForm from "@components/registerForm/QuestionsForm";
import ProgressBar from "@components/registerForm/ProgressBar";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

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
    <div className="flex flex-col w-full bg-indigo-900">
      <h1 className="font-bold text-2xl mx-auto">REGISTRATION</h1>
      
      <ProgressBar />

      <div className="p-[20%] pt-0 pb-0">
        <InfoForm choose={chooseForm} />
        <EducationForm choose={chooseForm} />
        <InterestForm choose={chooseForm} />
        <QuestionsForm choose={chooseForm} />
      </div>

      <div className="flex justify-around my-5">
        <button onClick={prevForm}>
          <div className="text-5xl text-pink-500"><AiFillCaretLeft /></div>
        </button>
        <button onClick={nextForm}>
        <div className="text-5xl text-pink-500"><AiFillCaretRight /></div>
        </button>
      </div>
    </div>
  );
}
