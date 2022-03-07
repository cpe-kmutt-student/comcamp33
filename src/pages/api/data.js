import mongoClientPromise from '../../libs/mongodb';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({
      success: false,
      message: 'please login first',
      timestamp: new Date(),
    });
  }

  if (req.method === 'GET') return loadData(req, res, session);
  if (req.method === 'POST') return saveData(req, res, session);

  return res.status(405).json({
    success: false,
    message: `${req.method} method not allowed`,
    timestamp: new Date(),
  });
};
const loadData = async (req, res, session) => {
  //find return cursor object need Array to call it
  const database = await mongoClientPromise;
  const dataList = await database.db("comcamp33").collection("data").findOne({'facebook.email': session.user.email});
  return res.status(200).json({
    success: true,
    message: dataList,
    timestamp: new Date(),
  });
};

const isSameKey = (compareObject, basekey) => {

  const base = JSON.stringify(basekey.sort());
  const compare = JSON.stringify(Object.keys(compareObject).sort());

  return base === compare;
  }

const arrayIsSameKey = (compareArray, baseKey) => {
  const base = JSON.stringify(baseKey.sort());
  for(let i = 0; i < compareArray.length; i++) {
    let compare = JSON.stringify(Object.keys(compareArray[1]).sort());
    if (compare !== base) {
      return 0;
    }

  }

} 


const saveData = async (req, res, session) => {

  const database = await mongoClientPromise;

  const mainKeys = ['info', 'education', 'address', 'parent', 'interest', 'answers']
  const infoKeys = ['prefix_en', 'name_en', 'surname_en', 'prefix_th','name_th', 'surname_th', 'nickname_th', 'birthdate', 'religion', 'tel', 'email', 'shirt', 'image'];
  const edKeys = ['name', 'province', 'program', 'level', 'gpax'];
  const addressKeys = ['no', 'moo', 'soi', 'road', 'tambol', 'amphoe', 'province', 'postal'];
  const parentKeys = ['name', 'surname', 'relation', 'tel', 'email'];
  const interestKeys = ['admission', 'plan', 'camp'];
  const admissionKeys = ['faculty', 'department', 'university'];
  const answersKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'];
  const dateLate = new Date('3/29/2022 23:59:59').getTime();
  const dateNow = new Date().getTime();
  const someKeyNotSame = !isSameKey(req.body, mainKeys) || !isSameKey(req.body.info, infoKeys) || !isSameKey(req.body.education, edKeys) || !isSameKey(req.body.address, addressKeys) || !isSameKey(req.body.parent, parentKeys) || !isSameKey(req.body.interest, interestKeys) || arrayIsSameKey(req.body.interest.admission, admissionKeys) || !isSameKey(req.body.answers, answersKeys) || arrayIsSameKey(req.body.interest.admission, admissionKeys);
  if (dateNow > dateLate || someKeyNotSame) {
    return res.status(400).json({
      success: false,
      message: 'Bad request',
      timestamp: new Date(),
    });
  }

  let data = req.body;
  data.facebook = {
    "name": session.user.name,
    "email": session.user.email,
    "image": session.user.image
  }
  
  const findUser = await database.db("comcamp33").collection("data").findOne({"facebook.email": session.user.email}) ;
  if(!findUser){
    const save = await database.db("comcamp33").collection("data").insertOne(data)
    return res.status(201).json({
      success: true,
      message: save,
      timestamp: new Date(),
    });
  }
  else {
    const update = await database.db("comcamp33").collection("data").updateOne({ "facebook.email": session.user.email}, {$set: data})
    return res.status(200).json({
      success: true,
      message: update,
      timestamp: new Date(),
    });
  }
};

export default handler