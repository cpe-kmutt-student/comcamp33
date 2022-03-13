import mongoClientPromise from "../../libs/mongodb";

export default async function handler(req, res) {
  const database = await mongoClientPromise;

  let databaseStatus;
  try {
    await database.db().collection('test').findOne({}, { projection: { _id: false } });
    databaseStatus = true;
  } catch {
    databaseStatus = false;
  }

  res.status(200).json({
    message: 'Comcamp33 api, developed by CPE @ KMUTT',
    timestamp: new Date(),
    status: {
      database: databaseStatus
    }
  });
};
