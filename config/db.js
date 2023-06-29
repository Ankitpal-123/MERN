import mongoose from "mongoose";

// cconnect to the database
const connectionDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to the database ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error to connect the database ${error}`);
  }
};

export default connectionDB;
