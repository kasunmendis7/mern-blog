import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const mongodbURI = process.env.MONGODB_URI; 

mongoose
  .connect(mongodbURI)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
