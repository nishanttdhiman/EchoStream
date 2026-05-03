import mongoose from "mongoose";
import dotenv from "dotenv";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to DB");
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
