import mongoClientPromise from "../../libs/mongodb";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({
      success: false,
      message: "please login first",
      timestamp: new Date(),
    });
  }

  if (req.method === "GET") return loadData(req, res, session);
  if (req.method === "POST") return saveData(req, res, session);

  return res.status(405).json({
    success: false,
    message: `${req.method} method not allowed`,
    timestamp: new Date(),
  });
};

const loadData = async (req, res, session) => {
  const database = await mongoClientPromise;

  const dataList = await database
    .db("comcamp33")
    .collection("data")
    .findOne(
      { 'facebook.id': session.token.sub },
      { projection: { _id: false } }
    );

  if (dataList) {
    delete dataList.facebook;
    delete dataList.update_timestamp;
  }

  return res.status(200).json({
    success: true,
    message: dataList,
    timestamp: new Date(),
  });
};

const DATABASE_STRUCTURE = {
  info: {
    prefix_en: "",
    name_en: "",
    surname_en: "",
    prefix_th: "",
    name_th: "",
    surname_th: "",
    nickname_th: "",
    birthdate: "",
    religion: "",
    tel: "",
    email: "",
    shirt: "",
    image: "",
  },
  education: {
    name: "",
    province: "",
    program: "",
    level: "",
    gpax: "",
  },
  address: {
    no: "",
    moo: "",
    soi: "",
    road: "",
    tambol: "",
    amphoe: "",
    province: "",
    postcode: "",
  },
  parent: {
    prefix_th: "",
    name: "",
    surname: "",
    relation: "",
    tel: "",
    // email: "",
  },
  interest: {
    admission: [],
    plan: ["", "", "", "", ""],
    camp: "",
  },
  answers: {
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
  },
  verify: "",
  complete: "",
  update_timestamp: "",
};


const saveData = async (req, res, session) => {
  const database = await mongoClientPromise;

  const data = req.body;
  const copiedData = JSON.parse(JSON.stringify(data));

  const dateLate = new Date('3/29/2022 23:59:59').getTime();
  const dateNow = new Date().getTime();

  const isComplete = await database
    .db("comcamp33")
    .collection("data")
    .findOne({ "facebook.id": session.token.sub }, { projection: { complete: 1, _id: 0 } });

  if (dateNow > dateLate || !isSubset(DATABASE_STRUCTURE, copiedData) || (isComplete && !!isComplete.complete)) {
    return res.status(400).json({
      success: false,
      message: "payload doesn't match our requirement",
      timestamp: new Date(),
    });
  }

  if (data.interest && Array.isArray(data.interest.admission)) {
    if (data.interest.admission.length > 3) {
      return res.status(400).json({
        message: `admission doesn't match our requirement`
      });
    }

    const requiredStructure = {
      faculty: '',
      department: '',
      university: '',
    };

    const isNotPass = data.interest.admission
      .map((object) => {
        if (object) return isSubset(requiredStructure, JSON.parse(JSON.stringify(object)));
        return true;
      })
      .some((object) => object == false);

    if (isNotPass) {
      return res.status(400).json({
        message: `admission doesn't match our requirement`
      });
    }
  }

  if (data.info) {
    if (data.info.prefix_en && !['Mr.', 'Ms.', 'Mrs.'].includes(data.info.prefix_en)) {
      return res.status(400).json({
        message: `prefix_en doesn't match our requirement`
      });
    }

    if (data.info.prefix_th && !['นาย', 'นาง', 'นางสาว'].includes(data.info.prefix_th)) {
      return res.status(400).json({
        message: `prefix_th doesn't match our requirement`
      });
    }

    if (data.info.birthdate && (isNaN(Date.parse(data.info.birthdate)))) {
      return res.status(400).json({
        message: `date doesn't match our requirement`
      });
    }

    if (data.info.tel && ((data.info.tel.length != 10) || !Number.isInteger(Number(data.info.tel)))) {
      return res.status(400).json({
        message: `tel doesn't match our requirement`
      });
    }

    if (data.info.email
      && !data.info.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      return res.status(400).json({
        message: `email doesn't match our requirement`
      });
    }

    if (data.info.shirt && !['S', 'M', 'L', 'XL', 'XXL'].includes(data.info.shirt)) {
      return res.status(400).json({
        message: `shirt doesn't match our requirement`
      });
    }
  }

  if (data.education) {
    if (data.education.program && !['วิทย์-คอม', 'วิทย์-คณิต', 'คณิต-คอม', 'ปวช. เตรียมวิศวะ', 'อื่นๆ'].includes(data.education.program)) {
      return res.status(400).json({
        message: `program doesn't match our requirement`
      });
    }

    const gpax = Number.parseFloat(data.education.gpax);
    if (data.education.gpax && (isNaN(gpax) || gpax < 0 || gpax > 4)) {
      return res.status(400).json({
        message: `gpax doesn't match our requirement`
      });
    }

    if (data.education.level && !['ม.4 ขึ้น ม.5 หรือเทียบเท่า', 'ม.5 ขึ้น ม.6 หรือเทียบเท่า', 'จบ ม.6 หรือเทียบเท่า'].includes(data.education.level))
      return res.status(400).json({
        message: `level doesn't match our requirement`
      });
  }

  if (data.address) {
    if (data.address.postcode && ((data.address.postcode.length != 5) || !Number.isInteger(Number(data.address.postcode))))
      return res.status(400).json({
        message: `postcode doesn't match our requirement`
      });
  }

  if (data.parent) {
    if (data.parent.tel && ((data.parent.tel.length != 10) || !Number.isInteger(Number(data.parent.tel)))) {
      return res.status(400).json({
        message: `parant tel doesn't match our requirement`
      });
    }

    if (data.parent.email
      && !data.parent.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      return res.status(400).json({
        message: `parent email doesn't match our requirement`
      });
    }
  }

  if (data.interest) {
    if (data.interest.plan) {

      const planIsNotPass = data.interest.plan
        .map((plan) => {
          return ['หลักสูตรปกติ', 'หลักสูตรนานาชาติ', 'หลักสูตรวิทยาศาสตร์ข้อมูลสุขภาพ', 'หลักสูตร Residential College'].includes(plan);
        })
        .some((plan) => plan == false);

      if (!Array.isArray(data.interest.plan)
        || (data.interest.plan.length > 4)
        || planIsNotPass
      ) {
        return res.status(400).json({
          message: `interest plan doesn't match our requirement`
        });
      }
    }
  }

  data.facebook = {
    name: session.session.user.name,
    id: session.token.sub,
    image: session.session.user.image,
  };
  data.update_timestamp = new Date();

  const user = await database
    .db("comcamp33")
    .collection("data")
    .findOne({ "facebook.id": session.token.sub });

  if (!user) {
    const save = await database
      .db("comcamp33")
      .collection("data")
      .insertOne(data);

    console.log(`[${getTimeStamp()} ${session.session.user.name} save initial data`);

    return res.status(201).json({
      success: true,
      message: save,
      timestamp: new Date(),
    });
  } else {
    const update = await database
      .db("comcamp33")
      .collection("data")
      .updateOne({ "facebook.id": session.token.sub }, { $set: data });

    console.log(`[${getTimeStamp()}] ${session.session.user.name} save data`);

    return res.status(200).json({
      success: true,
      message: update,
      timestamp: new Date(),
    });
  }
};

const getTimeStamp = () => {
  return new Date().toLocaleString('th-TH').replace(/(\d{2})-(\d{2})-(\d{4})/, '$2/$1/$3');
};

const isSubset = (superSet, subset) => {
  return Object.keys(subset).every((element) => {
    if (element === 'admission') return true;

    if (typeof subset[element] === 'object') {
      return isSubset(superSet[element], subset[element]);
    }

    subset[element] = '';
    return superSet[element] === subset[element];
  });
};

export default handler;
