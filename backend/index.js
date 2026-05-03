import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import connectDB from "./lib/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 3001;

connectDB();

app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
