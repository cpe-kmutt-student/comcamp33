import mongoClientPromise from '../../libs/mongodb';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req });
  // Validate client authentication session before access to restricted endpoint and database connectionjs object of function to call
  if (!session) {
    return res.status(401).json({
      success: false,
      message: 'please login first',
      timestamp: new Date(),
    });
  }

  if (req.method === 'GET') return loadData(req, res);
  if (req.method === 'POST') return saveData(req, res);

  return res.status(405).json({
    success: false,
    message: `${req.method} method not allowed`,
    timestamp: new Date(),
  });
};

const loadData = async (req, res) => {
  const database = await mongoClientPromise;
  //find return cursor object need Array to call it
  const dataList = await database.db("comcamp33").collection("data").find().toArray();
  return res.status(200).json({
    success: true,
    message: dataList,
    timestamp: new Date(),
  });
};

const saveData = async (req, res) => {
  const database = await mongoClientPromise;
  const data = req.body;
  const faceEmail = data.facebook.email;
  const findUser = await database.db("comcamp33").collection("data").findOne({"facebook.email": faceEmail}) ;
  if(!findUser){
    const save = await database.db("comcamp33").collection("data").insertOne(data)
    return res.status(200).json({
      success: true,
      message: save,
      timestamp: new Date(),
    });
  }
  else {
    const update = await database.db("comcamp33").collection("testQuery").update({ "facebook.email": faceEmail}, {$set: data})
    return res.status(200).json({
      success: true,
      message: update,
      timestamp: new Date(),
    });
  }
};
