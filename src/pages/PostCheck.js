const PostCheck = () => {
  // Test Object
  const out = {
    info: {
      prefix_en: "Mr.", // *
      name_en: "Damn",
      prefix_th: "นาย", // *
      name_th: "ปุณณวัช",
      surname_th: "นามวงเวียนแฮ่ นามวงวาน แฮ่..",
      nickname_th: "UwUNiceName",
      birthdate: "2002-12-25", // *
      tel: "0875908288", // *
      shirt: "XXL",
      email: 'eiei@mail.com' // *
    },

    education: {
     name: "KMUTT",
      province: "กรุงเทพ",
      program: "วิทย์-คณิต", // *
      level: "ม.5 ขึ้น ม.6 หรือเทียบเท่า", // *
      gpax: '3.78', // *
    }, 
    address: {
      no: "298/1",
      moo: "-",
      soi: "เจริญกรุง 27",
      road: "ตรีมิตร",
      tambol: "ตลาดน้อย",
      amphoe: "สัมพันธวงศ์",
      province: "กรุงเทพฯ",
      postcode: "10100", // *
    },
    parent: {
      name: "ธีรวัจน์",
      surname: "โกปาราเมศไตรสิน",
      relation: "บิดา",
      tel: "0814422999", // *
      // email: "pp2p@hotmail.com", // *
    },
    interest: {
      admission: [
        { faculty: "", department: "", university: "" },
        { faculty: "", department: "", university: "" },
        { faculty: "", department: "", university: "" },
      ],
      plan: ['หลักสูตรปกติ','หลักสูตรนานาชาติ'], // *
      camp: "",
    },
    answers: {
      q1: "it should not be null if payload is success",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
      q6: "",
      q7: "",
      q8: "",
    },
  };

  const handleClick = async () => {
    const response = await fetch("api/data", {
      method: "POST",
      body: JSON.stringify(out),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div>
      <button onClick={handleClick}>Click please</button>
    </div>
  );
};

export default PostCheck;
