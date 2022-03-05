import React, { useState } from "react";
import InfoForm from "@components/registerForm/InfoForm";
import EducationForm from "@components/registerForm/EducationForm";
import InterestForm from "@components/registerForm/InterestForm";
import QuestionsForm from "@components/registerForm/QuestionsForm";

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
    <>
      <h1>REGISTRATION</h1>
      <button onClick={prevForm}>Previous</button>
      <button onClick={nextForm}>Next</button>
      {console.log(chooseForm)}
      {chooseForm === 1 && <InfoForm />}
      {chooseForm === 2 && <EducationForm />}
      {chooseForm === 3 && <InterestForm />}
      {chooseForm === 4 && <QuestionsForm />}
    </>
  );
}
