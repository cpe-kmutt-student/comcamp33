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

const saveData = async (req, res, session) => {
  const database = await mongoClientPromise;
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