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
import Image from "next/image";
import BgStar from "@public/formBg/unknown.png";
import Bg1 from "@public/formBg/unknown1.png";
import Header from "@components/Header";
import { getSession } from 'next-auth/react';

export default function RegistrationPage() {
  const [chooseForm, setChooseForm] = useState(1); // 1
  const [data, setData] = useState({});

  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);

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
        setData(result.message);
      }
    };
    loadInitialData();
  }, []);

  return (
    <div className="relative w-[100vw] flex flex-col bg-[#11033E] min-h-screen">
      <Header />

      <div className="fixed w-[100vw] h-[100vh] top-0 z-0">
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
      <h1 className="self-center m-2 text-white font-pixel text-2xl sm:text-2xl md:text-6xl lg:text-6xl">REGISTRATION</h1>

      <ProgressBar currentStep={chooseForm} />

      <div className="p-[20%] pt-0 pb-0 z-10">
        <PolicyForm
          data={data}
          choose={chooseForm}
          setState={setChecked}
          error={error}
          setData={setData}
        />

        {data && data.verify == true ? setChooseForm(2) : ""}
        <InfoForm data={data} setData={setData} choose={chooseForm} />
        <EducationForm data={data} setData={setData} choose={chooseForm} />
        <InterestForm data={data} setData={setData} choose={chooseForm} />
        <QuestionsForm data={data} setData={setData} choose={chooseForm} />
      </div>

      <AutoSave data={data} />

      <div className="flex justify-around my-5 z-30">
        <button onClick={prevForm}>
          <AiFillCaretLeft
            size="4.5rem"
            color="rgb(236,72,153)"
            style={{ display: chooseForm === 1 ? "none" : "block" }}
          />
        </button>
        <button onClick={nextForm}>
          <AiFillCaretRight size="4.5rem" color="rgb(236,72,153)" />
        </button>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) return { props: {} };

  return {
    redirect: {
      permanent: false,
      destination: '/auth',
    },
    props: {},
  };
};
