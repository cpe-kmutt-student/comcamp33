const steps = [
  'เอกสาร',
  'ข้อมูลทั่วไป',
  'การศึกษา',
  'ความสนใจ',
  'คำถาม',
  'ยืนยันข้อมูล',
];

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="flex flex-row items-center justify-between mx-auto w-4/5">
      {steps.map((step, index) => {
        return (
          <>
            <div className="flex flex-col">
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
