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

  // Connect to the database before query
  const database = await mongoClientPromise;

  if (req.method === 'GET') return loadData(req, res);
  if (req.method === 'POST') return saveData(req, res);

  return res.status(405).json({
    success: false,
    message: `${req.method} method not allowed`,
    timestamp: new Date(),
  });
};

const loadData = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'load data',
    timestamp: new Date(),
  });
};

const saveData = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'save data',
    timestamp: new Date(),
  });
};
