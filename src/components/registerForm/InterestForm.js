import { useEffect } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { saveData } from "@src/utils/clientUtils";
import { Form, Input, Checkbox } from "antd";

export default function InterestForm({ data, setData, choose, prev, next }) {
  const [form] = Form.useForm();
  // const handleChangeAdmission = (e) => {
  //   let name = e.target.name;
  //   let keyChange = e.target.getAttribute("number");
  //   const newAdmissions =
  //     data.interest && data.interest.admission ? data.interest.admission : [];
  //   newAdmissions[keyChange] =
  //     data.interest && data.interest.admission
  //       ? {
  //           ...data.interest.admission[keyChange],
  //           [name]: e.target.value,
  //         }
  //       : { [name]: e.target.value };

  //   setData({
  //     ...data,
  //     interest: {
  //       ...data.interest,
  //       admission: newAdmissions,
  //     },
  //   });
  //console.log(data);
  // };

  const handleChangePlan = (e) => {
    let keyChange = e.target.getAttribute("number");
    const newPlans =
      data.interest && data.interest.plan ? data.interest.plan : [];
    newPlans[keyChange] = e.target.checked;

    setData({
      ...data,
      interest: {
        ...data.interest,
        plan: newPlans,
      },
    });
    // console.log(data)
  };

  const handleChangeCourse = (e) => {
    setData({
      ...data,
      interest: {
        ...data.interest,
        camp: e.target.value,
      },
    });
    // console.log(data)
  };

  // const handleSubmit = (e) => {
  //   next();
  //   e.preventDefault();
  //   saveData({
  //     ...data,
  //   });
  //   // console.log(data);
  // };

  const onFinish = (values) => {
    console.log("Success:", values);
    saveData(values);
    next();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    console.log("incoming ", data);
    form.resetFields();
  }, [data]);

  return (
    <>
      <div className={choose != 4 ? "hidden" : "w-full"}>
        <Form
          form={form}
          name="interest"
          // onSubmit={handleSubmit}
          className="space-y-8"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          validateTrigger="onBlur"
          initialValues={data}
        >
          {/* <form onSubmit={handleSubmit}> */}
          <div className="flex justify-center">
            <h1 className="flex w-fit justify-center font-sans text-xl md:text-3xl font-bold text-white bg-[#9600FF] px-4 py-3 my-8">
              ความสนใจ
            </h1>
          </div>
          <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-between gap-5">
            <div className="font-sans mb-2 w-full">
              <Form.Item
                label={
                  <label className="text-white font-sans md:text-lg mb-2">
                    มหาวิทยาลัยลำดับที่หนึ่ง
                  </label>
                }
                name={["interest", "admission", 0, "university"]}
                rules={[
                  { required: true, message: "กรุณากรอกชื่อมหาวิทยาลัย" },
                ]}
              >
                <Input placeholder="มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี" />
              </Form.Item>
            </div>
            <div className="font-sans md:text-lg mb-2 w-full">
              <Form.Item
                label={
                  <label className="text-white font-sans md:text-lg mb-2">
                    คณะลำดับที่หนึ่ง
                  </label>
                }
                name={["interest", "admission", 0, "department"]}
                rules={[{ required: true, message: "กรุณากรอกคณะ" }]}
              >
                <Input placeholder="วิศวกรรมศาสตร์" />
              </Form.Item>
            </div>
            <div className="font-sans mb-2 w-full">
              <Form.Item
                label={
                  <label className="text-white font-sans md:text-lg mb-2">
                    ภาควิชาลำดับที่หนึ่ง
                  </label>
                }
                name={["interest", "admission", 0, "faculty"]}
                rules={[{ required: true, message: "กรุณากรอกภาควิชา" }]}
              >
                <Input placeholder="วิศวกรรมคอมพิวเตอร์" />
              </Form.Item>
            </div>
          </div>
          <br />
          <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-between gap-5">
            <div className="font-sans   mb-2 w-full">
              <Form.Item
                label={
                  <label className="text-white font-sans md:text-lg mb-2">
                    มหาวิทยาลัยลำดับที่สอง
                  </label>
                }
                name={["interest", "admission", 1, "university"]}
              >
                <Input placeholder="มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี" />
              </Form.Item>
            </div>
            <div className="font-sans mb-2 w-full">
              <Form.Item
                label={
                  <label className="text-white font-sans md:text-lg mb-2">
                    คณะลำดับที่สอง
                  </label>
                }
                name={["interest", "admission", 1, "department"]}
              >
                <Input placeholder="วิศวกรรมศาสตร์" />
              </Form.Item>
            </div>
            <div className="font-sans mb-2 w-full">
              <Form.Item
                label={
                  <label className="text-white font-sans md:text-lg mb-2">
                    ภาควิชาลำดับที่สอง
                  </label>
                }
                name={["interest", "admission", 1, "faculty"]}
              >
                <Input placeholder="วิศวกรรมคอมพิวเตอร์" />
              </Form.Item>
            </div>
          </div>
          <br />
          <div className="flex font-sans flex-wrap md:flex-nowrap flex-col md:flex-row justify-between gap-5">
            <div className="mb-2 w-full">
              <Form.Item
                label={
                  <label className="text-white font-sans md:text-lg mb-2">
                    มหาวิทยาลัยลำดับที่สาม
                  </label>
                }
                name={["interest", "admission", 2, "university"]}
              >
                <Input placeholder="มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี" />
              </Form.Item>
            </div>
            <div className="font-sans mb-2 w-full">
              <Form.Item
                label={
                  <label className="text-white font-sans md:text-lg mb-2">
                    คณะลำดับที่สาม
                  </label>
                }
                name={["interest", "admission", 2, "department"]}
              >
                <Input placeholder="วิศวกรรมศาสตร์" />
              </Form.Item>
            </div>
            <div className="font-sans mb-2 w-full">
              <Form.Item
                label={
                  <label className="text-white font-sans md:text-lg mb-2">
                    ภาควิชาลำดับที่สาม
                  </label>
                }
                name={["interest", "admission", 2, "faculty"]}
              >
                <Input placeholder="วิศวกรรมคอมพิวเตอร์" />
              </Form.Item>
              {/* <label className="text-white mb-2">ภาควิชาลำดับที่สาม </label>
              <Input
                type="text"
                name="faculty"
                placeholder="faculty"
                onChange={(e) => {
                  handleChangeAdmission(e);
                }}
                number="2"
                value={
                  (data &&
                    data.interest &&
                    data.interest.admission &&
                    data.interest.admission[2] &&
                    data.interest.admission[2].faculty) ||
                  ""
                }
              /> */}
            </div>
          </div>
          <br />
          <h2 className="text-white font-sans md:text-lg bg-[#DD517E] justify-center w-fit p-2 pl-4 pr-4">
            หลักสูตรที่สนใจ (คณะวิศวกรรมศาสตร์ ภาควิชาวิศวกรรมคอมพิวเตอร์
            มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี)
          </h2>
          <div className="mt-2">
            <Form.Item name={["interest", "plan"]}>
              <Checkbox.Group>
                <label className="flex font-sans md:text-lg items-center ml-5 text-white mb-2 w-fit gap-4 cursor-pointer">
                  <Checkbox value="หลักสูตรปกติ" />
                  หลักสูตรปกติ
                </label>
                <br />
                <label className="flex font-sans md:text-lg items-center ml-5 text-white mb-2 w-fit gap-4 cursor-pointer">
                  <Checkbox value="หลักสูตรนานาชาติ" />
                  หลักสูตรนานาชาติ
                </label>
                <br />
                <label className="flex font-sans md:text-lg items-center ml-5 text-white mb-2 w-fit gap-4 cursor-pointer">
                  <Checkbox value="หลักสูตรวิทยาศาสตร์ข้อมูลสุขภาพ" />
                  หลักสูตรวิทยาศาสตร์ข้อมูลสุขภาพ
                </label>
                <br />
                <label className="flex font-sans md:text-lg items-center ml-5 text-white mb-2 w-fit gap-4 cursor-pointer">
                  <Checkbox value="หลักสูตร Residential College" />
                  หลักสูตร Residential College
                </label>
              </Checkbox.Group>
            </Form.Item>
            {/* <label className="flex items-center ml-5 text-white mb-2 w-fit">
              <input
                type="checkbox"
                onChange={(e) => handleChangePlan(e)}
                number="0"
                name="plan"
                checked={
                  (data &&
                    data.interest &&
                    data.interest.plan &&
                    data.interest.plan[0]) ||
                  false
                }
                className="appearance-none border-2 h-4 aspect-square relative mr-2 checked:bg-[rgb(0,0,0)] unchecked:bg-transparent"
              />
              {data &&
              data.interest &&
              data.interest.plan &&
              data.interest.plan[0] == true ? (
                <AiOutlineCheck
                  size={14}
                  className="aspect-square absolute translate-x-[0.1rem]"
                />
              ) : (
                ""
              )}
              หลักสูตรปกติ
            </label> */}
          </div>
          {/* <label className="flex items-center ml-5 text-white mb-2 w-fit">
              <input
                type="checkbox"
                onChange={(e) => handleChangePlan(e)}
                number="1"
                checked={
                  (data &&
                    data.interest &&
                    data.interest.plan &&
                    data.interest.plan[1]) ||
                  false
                }
                className="appearance-none border-2 h-4 aspect-square relative mr-2 checked:bg-[rgb(0,0,0)] unchecked:bg-transparent"
              />
              {data &&
              data.interest &&
              data.interest.plan &&
              data.interest.plan[1] == true ? (
                <AiOutlineCheck
                  size={14}
                  className="aspect-square absolute translate-x-[0.1rem]"
                />
              ) : (
                ""
              )}
              หลักสูตรนานาชาติ
            </label> */}

          {/* <label className="flex items-center ml-5 text-white mb-2 w-fit">
              <input
                type="checkbox"
                onChange={(e) => handleChangePlan(e)}
                number="2"
                checked={
                  (data &&
                    data.interest &&
                    data.interest.plan &&
                    data.interest.plan[2]) ||
                  false
                }
                className="appearance-none border-2 h-4 aspect-square relative mr-2 checked:bg-[rgb(0,0,0)] unchecked:bg-transparent"
              />
              {data &&
              data.interest &&
              data.interest.plan &&
              data.interest.plan[2] == true ? (
                <AiOutlineCheck
                  size={14}
                  className="aspect-square absolute translate-x-[0.1rem]"
                />
              ) : (
                ""
              )}
              หลักสูตรวิทยาศาสตร์ข้อมูลสุขภาพ
            </label> */}
          {/* <label className="flex items-center ml-5 text-white mb-2 w-fit">
              <input
                type="checkbox"
                onChange={(e) => handleChangePlan(e)}
                number="3"
                checked={
                  (data &&
                    data.interest &&
                    data.interest.plan &&
                    data.interest.plan[3]) ||
                  false
                }
                className="appearance-none border-2 h-4 aspect-square relative mr-2 checked:bg-[rgb(0,0,0)] unchecked:bg-transparent"
              />
              {data &&
              data.interest &&
              data.interest.plan &&
              data.interest.plan[3] == true ? (
                <AiOutlineCheck
                  size={14}
                  className="aspect-square absolute translate-x-[0.1rem]"
                />
              ) : (
                ""
              )}
              หลักสูตร Residential College
            </label> */}

          <br />
          <h2 className="text-white font-sans md:text-lg bg-[#DD517E] justify-center w-fit p-2 pl-4 pr-4 text-lg">
            ค่ายที่เคยเข้าร่วม (หาไม่เคยเข้าค่ายโปรดระบุ &quot;-&quot; )
          </h2>
          <div className="mt-2 font-sans">
            <Form.Item name={["interest", "camp"]}>
              <Input.TextArea className="resize-y" />
            </Form.Item>
          </div>
          <div className="flex justify-between my-5 z-20">
            <button
              type="button"
              onClick={() => {
                saveData({
                  ...data,
                });
                prev();
              }}
            >
              <AiFillCaretLeft
                size="4.5rem"
                className="text-[#ec4899] opacity-60 translation-all ase-linear duration-200 hover:opacity-100"
                style={{
                  display: [1, 2].includes(choose) ? "none" : "block",
                }}
              />
            </button>
            <button type="submit">
              <AiFillCaretRight
                size="4.5rem"
                className="text-[#ec4899] opacity-60 translation-all ase-linear duration-200 hover:opacity-100"
                style={{ display: [5].includes(choose) ? "none" : "block" }}
              />
              <div
                className="z-40 text-[#ec4899] hover:text-[#ff63b0]"
                style={{ display: [5].includes(choose) ? "block" : "none" }}
              ></div>
            </button>
          </div>
          {/* </form> */}
        </Form>
      </div>
    </>
  );
}
