import mongoClientPromise from "../../libs/mongodb";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  const session = await getSession({ req });
  const database = await mongoClientPromise;

  const permissionCheck = await database
    .db("comcamp33")
    .collection("admin")
    .findOne({ email: session.user.email });
  if (!session) {
    return res.status(401).json({
      success: false,
      message: "please login first",
      timestamp: new Date(),
    });
  }

  if (!permissionCheck) {
    return res.status(403).json({
      success: false,
      message: "can't access to this content",
      timestamp: new Date(),
    });
  }

  if (req.method === "GET") return loadData(req, res);

  return res.status(405).json({
    success: false,
    message: `${req.method} method not allowed`,
    timestamp: new Date(),
  });
};

const loadData = async (req, res) => {
  //find return cursor object need Array to call it
  const database = await mongoClientPromise;
  const dataList = await database
    .db("comcamp33")
    .collection("data")
    .find()
    .toArray();
  return res.status(200).json({
    success: true,
    message: dataList,
    timestamp: new Date(),
  });
};

export default handler;
