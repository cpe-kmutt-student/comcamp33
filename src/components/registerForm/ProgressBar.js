const steps = [
  "เอกสาร",
  "ข้อมูลทั่วไป",
  "การศึกษา",
  "ความสนใจ",
  "คำถาม",
  "ยืนยันข้อมูล",
];
/* 
const ProgressBar = ({ currentStep }) => {
  return (
    <div className="flex flex-row items-center justify-between mx-auto w-4/5">
      {steps.map((step, index) => {
        return (
          <>
            <div className="flex flex-col" key={index}>
              <div className="space-y-2">
                <span className="text-white">{step}</span>
                <div className="w-10 h-10 border-[10px] border-white rounded-full mx-auto" />
              </div>
            </div>

            {(index != steps.length - 1) && (<div className="w-3 h-3 bg-white rounded-full translate-y-3/4" />)}
          </>
        );
      })}
      </div>
  );
};

export default ProgressBar;
 */
export default function ProgressBar({ currentStep }) {
  return (
    <>
      <div className="flex flex-row justify-between content-center mx-auto w-4/5">
        {steps.map((step, index) => {
          return (
            <>
              <div className="flex flex-col">
                <span className="text-white">{step}</span>
                <div className="flex flex-row justify-center gap-2" key={index}>
                  <div
                    className={
                      index >= currentStep
                        ? "w-10 h-10 border-[10px] border-white rounded-full mx-auto"
                        : "w-10 h-10 border-[10px] border-purple-500 rounded-full mx-auto"
                    }
                  />
                </div>
              </div>
              {index != steps.length - 1 && (
                <div className="flex justify-center self-center h-full relative top-[0.7rem]">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
}

/* export default function ProgressBar({ currentStep }) {
  return (
    <>
      <div className="flex flex-row justify-between content-center mx-auto w-4/5">
        <div className="grid grid-cols-11 grid-rows-2 w-full selection place-items-center text-white">
          <div>เอกสาร</div>
          <div />
          <div>ข้อมูลทั่วไป</div>
          <div />
          <div>การศึกษา</div>
          <div />
          <div>ความสนใจ</div>
          <div />
          <div>คำถาม</div>
          <div />
          <div>ยืนยันข้อมูล</div>
          <div
            className={
              (currentStep >= 1 ? "border-purple-600" : "") +
              " " +
              "w-10 h-10 border-[10px] border-white rounded-full mx-auto"
            }
          />
          <div className="w-3 h-3 bg-white rounded-full" />
          <div className="w-10 h-10 border-[10px] border-white rounded-full mx-auto" />
          <div className="w-3 h-3 bg-white rounded-full" />
          <div className="w-10 h-10 border-[10px] border-white rounded-full mx-auto" />
          <div className="w-3 h-3 bg-white rounded-full" />
          <div className="w-10 h-10 border-[10px] border-white rounded-full mx-auto" />
          <div className="w-3 h-3 bg-white rounded-full" />
          <div className="w-10 h-10 border-[10px] border-white rounded-full mx-auto" />
          <div className="w-3 h-3 bg-white rounded-full" />
          <div className="w-10 h-10 border-[10px] border-white rounded-full mx-auto" />
        </div>
      </div>
    </>
  );
} */
