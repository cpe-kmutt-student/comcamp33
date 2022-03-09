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
    .findOne({ "facebook.email": session.user.email }, { projection: { _id: false}})
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
    postal: "",
  },
  parent: {
    name: "",
    surname: "",
    relation: "",
    tel: "",
    email: "",
  },
  interest: {
    admission: [
      {
        faculty: "",
        department: "",
        university: "",
      },
      {
        faculty: "",
        department: "",
        university: "",
      },
      {
        faculty: "",
        department: "",
        university: "",
      },
    ],
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
  const { body } = req;

  const isSubset = (superSet, subset) => {
    return Object.keys(subset).every((element) => {
      if (element === 'admission' && subset[element].length > superSet[element].length) {
        return false;
      }
      if (typeof subset[element] === 'object') {
        return isSubset(superSet[element], subset[element]);
      }

      subset[element] = '';
      return superSet[element] === subset[element];
    });
  };
  const dateLate = new Date('3/29/2022 23:59:59').getTime();
  const dateNow = new Date().getTime();

  if (dateNow > dateLate || !isSubset(DATABASE_STRUCTURE, body)) {
    return res.status(400).json({
      success: false,
      message: "Bad request",
      timestamp: new Date(),
    });
  }

  let data = req.body;
  data.facebook = {
    name: session.user.name,
    email: session.user.email,
    image: session.user.image,
  };
  data.update_timestamp = new Date();

  const findUser = await database
    .db("comcamp33")
    .collection("data")
    .findOne({ "facebook.email": session.user.email });
  if (!findUser) {
    const save = await database
      .db("comcamp33")
      .collection("data")
      .insertOne(data);
    return res.status(201).json({
      success: true,
      message: save,
      timestamp: new Date(),
    });
  } else {
    const update = await database
      .db("comcamp33")
      .collection("data")
      .updateOne({ "facebook.email": session.user.email }, { $set: data });
    return res.status(200).json({
      success: true,
      message: update,
      timestamp: new Date(),
    });
  }
};

export default handler;
