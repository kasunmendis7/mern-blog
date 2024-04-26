import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

mongoose
  .connect('mongodb+srv://kasun:kasun@mern-blog.ivr3glf.mongodb.net/mern-blog?retryWrites=true&w=majority&appName=mern-blog')
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
