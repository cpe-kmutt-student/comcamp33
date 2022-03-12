import { useState } from "react";
import { saveData } from "@src/utils/clientUtils";
import { useRouter } from 'next/router';

export default function ModalAsk({ data, open, setOpen, submitBtn }) {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  return (
    <>
      <button
        className="flex bg-gradient-to-b from-[#F054F3]/90 to-[#9600FF]/90 right-3 font-pixel text-md text-white px-3 py-2 rounded border-2 border-[#B3E7F8] hover:shadow-lg opacity-100 lg:opacity-80 tracking-widest hover:bg-gradient-to-t hover:opacity-100 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(open)}
      >
        Submit Form
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-10 max-w-3xl">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" cursor-default flex items-start justify-between p-5">
                  <h3 center={true} className="text-3xl text-[center] font-pixel">
                    Confirmation
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 font-pixel float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      setShowModal(false)
                    }}
                  >
                    X
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto  cursor-default">
                  <p className="text-center text-blueGray-500 text-lg leading-relaxed cursor-default font-sans">
                    ยืนยันการสมัครใช่หรือไม่?
                    <br /><span className="text-red-500">คำเตือน</span> ไม่สามารถแก้ไขข้อมูลได้ภายหลังยืนยันข้อมูล
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 cursor-default">
                  <button
                    className="text-red-500 font-pixel background-transparent font-bold uppercase px-6 py-2 text-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    Close
                  </button>
                  <button
                    className="bg-gradient-to-b from-[#F054F3]/90 to-[#9600FF]/90 text-white font-bold uppercase text-lg px-6 py-2 shadow hover:shadow-lg hover:rounded-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded border-2 border-[#B3E7F8] opacity-100 lg:opacity-80 tracking-widest hover:bg-gradient-to-t hover:opacity-100 font-pixel"
                    type="submit"
                    onClick={(e) => {
                      submitBtn.current.click()
                      e.preventDefault();
                      setShowModal(false);
                      saveData({
                        ...data,
                        complete: true
                      });
                      // console.log(data);
                      router.push('/thankyou');
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
