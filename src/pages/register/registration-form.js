import React, { useEffect, useState } from "react";
import InfoForm from "@components/registerForm/InfoForm";
import EducationForm from "@components/registerForm/EducationForm";
import InterestForm from "@components/registerForm/InterestForm";
import QuestionsForm from "@components/registerForm/QuestionsForm";
import PolicyForm from "@components/registerForm/PolicyForm";
import ProgressBar from "@components/registerForm/ProgressBar";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { loadData } from "@src/utils/clientUtils";
import AutoSave from "@components/AutoSave";

export default function Form() {
  const [chooseForm, setChooseForm] = useState(1);
  const [data, setData] = useState({});

  const nextForm = () => {
    if ((chooseForm === 1 && checked) || (chooseForm > 1 && chooseForm < 6))
      setChooseForm(chooseForm + 1);
    else setError(true);
  };

  const prevForm = () => {
    if (chooseForm > 1) {
      setChooseForm(chooseForm - 1);
    }
  };

  useEffect(() => {
    const loadInitialData = async () => {
      const result = await loadData();

      if (result.message) {
        setData(result.message.data);
      }
    };
    loadInitialData();
  }, []);

  return (
    <div className="flex flex-col w-full bg-indigo-900">
      <h1 className="font-bold text-2xl mx-auto">REGISTRATION</h1>

      <ProgressBar />

      <div className="p-[20%] pt-0 pb-0">
        <InfoForm data={data} setData={setData} choose={chooseForm} />
        <EducationForm choose={chooseForm} />
        <InterestForm choose={chooseForm} />
        <QuestionsForm choose={chooseForm} />
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

        <AutoSave data={data} />

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
