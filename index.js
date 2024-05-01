const express = require("express");
const app = express();
const port = 5002;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { User } = require("./models/User");

const config = require("./config/key");

//aplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//aplication/json
app.use(bodyParser.json());

try {
  mongoose.connect(config.mogoURI);
  mongoose.connection.once("open", () => {
    console.log("MongoDB is Connected");
  });
} catch (error) {
  console.error("mongoDB error");
  console.log(error);
}

app.get("/", (req, res) => {
  res.send("Hello World! Boiler_plate Project 유진..");
});

// 회원가입 할때 필요한 정보들을 가져오면 DB에 저장
app.post("/register", async (req, res) => {
  //회원 가입할 때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다.
  const user = new User(req.body);
  console.log(req.body);
  await user
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.error(err);
      res.json({
        success: false,
        err: err,
      });
    });
});

app.get("/test", (req, res) => {
  res.send("Hello World! Boiler_plate Project 유진..");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
