const { MongoClient } = require("mongodb");

const connectionString = process.env.MONGO_DB_URI;
const client = new MongoClient(connectionString);
let db = null;

const mongoConnect = async () => {
  try {
    const database = client.db("hnm-database");
    return database;
  } catch (err) {
    await client.close();
  }
};
const getDatabase = async () => {
  if (!db) {
    db = await mongoConnect();
    return db;
  } else {
    return db;
  }
};

const disconnectDb = async () => {
  await client.close();
};

module.exports = {
  mongoConnect,
  getDatabase,
  disconnectDb,
};
