import React, { useEffect, useState } from "react";
import InfoForm from "@components/registerForm/InfoForm";
import EducationForm from "@components/registerForm/EducationForm";
import InterestForm from "@components/registerForm/InterestForm";
import QuestionsForm from "@components/registerForm/QuestionsForm";
import PolicyForm from "@components/registerForm/PolicyForm";
import ProgressBar from "@components/registerForm/ProgressBar";
import { loadData } from "@src/utils/clientUtils";
import AutoSave from "@components/AutoSave";
import Image from "next/image";
import BgStar from "@public/formBg/unknown.png";
import Bg1 from "@public/formBg/fadetown.png";
import bgForm2 from "@public/formBg/bgForm2.png";
import Header from "@components/Header";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import moment from "moment";
import "antd/dist/antd.css";
import Spinner from '@components/Spinner';

export default function RegistrationPage() {
  const [chooseForm, setChooseForm] = useState(1); // 1
  const [data, setData] = useState("");
  const [error, setError] = useState(false);

  const [isNext, setIsNext] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  // Easter Egg
  useEffect(() => {
    console.log('%c ⚠️ การเข้าถึงระบบคอมพิวเตอร์โดยมิชอบ มีโทษทางกฎหมายตาม พ.ร.บ. คอมพิวเตอร์ ', 'text-align: center; color: white; font-size: 1.5rem; background-color: red; border-radius: 0.5rem; padding: 0.25rem;');
  }, []);

  const nextForm = () => {
    if (chooseForm >= 1 && chooseForm < 6) setChooseForm(chooseForm + 1);
    else setError(true);
  };

  const prevForm = () => {
    if (chooseForm > 1) {
      setChooseForm(chooseForm - 1);
    }
  };

  // useEffect(() => {
  //   const loadInitialData = async () => {
  //     const result = await loadData();
  //     if (result.message) {
  //       if (result.message.info?.birthdate) {
  //         result.message.info.birthdate = moment(
  //           result.message?.info?.birthdate
  //         );
  //       }
  //     }
  //     setData(result.message || { verify: false });
  //   };
  //   loadInitialData();
  // }, []);

  // {data && data.verify == true ? setChooseForm(2) : ""}
  // useEffect(() => {
  //   if (data && data.verify == true) {
  //     setChooseForm(2);
  //   }
  // }, [data.verify]);

  // useEffect(() => {
  //   if (!data) return;

  //   if (data.complete == true) {
  //     router.push("/thankyou");
  //   }

  //   if (data.verify && !isNext) {
  //     setChooseForm(2);
  //     setIsNext(true);
  //   } else if (!data.verify) {
  //     setChooseForm(1);
  //   }
  // }, [data]);

  return (
    <div className="relative flex flex-col bg-[#11033E] min-h-screen overflow-x-hidden">
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
        <div
          className={
            chooseForm === 2 || chooseForm === 4 ? "h-[60%]" : "h-[35%]"
          }
        />
        <div className="h-[40%]">
          <Image
            alt="Bg1"
            src={chooseForm === 2 || chooseForm === 4 ? Bg1 : bgForm2}
            layout="responsive"
            objectFit="contain"
            quality={100}
          />
        </div>
      </div>

      <h1 className="my-7 self-center m-2 text-white font-pixel text-4xl md:text-6xl">
        REGISTRATION
      </h1>

      <ProgressBar currentStep={chooseForm} />

      {chooseForm == 0 && (
        <div className="mt-24 mx-auto">
          <Spinner className="w-12 h-12 text-white" />
        </div>
      )}

      <div className="container mx-auto p-6 md:p-16 flex justify-center all pt-0 pb-0 z-10">
        {chooseForm == 1 && (
          <PolicyForm
            data={data}
            choose={chooseForm}
            error={error}
            setData={setData}
            next={nextForm}
          />
        )}

        {chooseForm == 2 && (
          <InfoForm
            data={data}
            setData={setData}
            choose={chooseForm}
            next={nextForm}
            prev={prevForm}
          />
        )}

        {chooseForm == 3 && (
          <EducationForm
            data={data}
            setData={setData}
            choose={chooseForm}
            prev={prevForm}
            next={nextForm}
          />
        )}

        {chooseForm == 4 && (
          <InterestForm
            data={data}
            setData={setData}
            choose={chooseForm}
            prev={prevForm}
            next={nextForm}
          />
        )}

        {chooseForm == 5 && (
          <QuestionsForm
            data={data}
            setData={setData}
            choose={chooseForm}
            prev={prevForm}
            open={open}
            setOpen={setOpen}
          />
        )}
      </div>

      {/* <AutoSave data={data} /> */}

      {/* <div className="flex justify-around my-5 z-20">
          <button onClick={prevForm}>
            <AiFillCaretLeft
              size="4.5rem"
              color="rgb(236,72,153)"
              style={{
                display: [1, 2].includes(chooseForm) ? "none" : "block",
              }}
            />
          </button>
          <button
            onClick={[5].includes(chooseForm) ? nextForm : nextForm}
            type="submit"
          >
            <AiFillCaretRight
              size="4.5rem"
              color={[5].includes(chooseForm) ? "#00FF00" : "rgb(236,72,153)"}
              style={{ display: [5].includes(chooseForm) ? "none" : "block" }}
            />
            <div
              className="z-40"
              style={{ display: [5].includes(chooseForm) ? "block" : "none" }}
            >
              <ModalAsk />
            </div>
          </button>
        </div> */}
    </div>
  );
}

// export const getServerSideProps = async (context) => {
//   const session = await getSession(context);

//   if (session) return { props: {} };

//   return {
//     redirect: {
//       permanent: false,
//       destination: "/home",
//     },
//     props: {},
//   };
// };
