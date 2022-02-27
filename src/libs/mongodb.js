import { MongoClient } from 'mongodb';

const {
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DB,
  MONGO_USER,
  MONGO_PASS,
} = process.env;

if (!MONGO_HOST || !MONGO_PORT || !MONGO_DB || !MONGO_USER || !MONGO_PASS) {
  throw new Error('Please define MongoDB config in .env.local, you can see example in .env.local.example');
}

const URI = `mongodb://${MONGO_USER}:${encodeURIComponent(MONGO_PASS)}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

console.log(URI);

let client, mongoClientPromise;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(URI);
    global._mongoClientPromise = client.connect();
    console.log('Connection to MongoDB established!');
  }

  mongoClientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(URI);
  mongoClientPromise = client.connect();
  console.log('Connection to MongoDB established!');
}

export default mongoClientPromise;
