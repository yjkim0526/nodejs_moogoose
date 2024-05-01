const express = require("express");
const app = express();
const port = 5000;

const DB_URI =
  "mongodb+srv://koiforever:uiop7890@clusteryoutoveclone.eti1fe2.mongodb.net/?retryWrites=true&w=majority&appName=ClusterYoutoveClone";
// mongoose
//   .connect(monogoUri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   })
//   .then(() => console.log("MongoDB Connected..."))
//   .catch((err) => console.log(err));

const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config();

try {
  mongoose.connect(
    "mongodb+srv://koiforever:uiop7890@clusteryoutoveclone.eti1fe2.mongodb.net/?retryWrites=true&w=majority&appName=ClusterYoutoveClone",
    { useNewUrlParser: true }
  );
  mongoose.connection.once("open", () => {
    console.log("MongoDB is Connected");
  });
} catch (error) {
  console.error("mongoDB error");
  console.log(error);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
