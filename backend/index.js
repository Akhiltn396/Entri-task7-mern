const express = require("express");
// const bodyParser = require("body-parser")
const cors = require("cors");
var path = require("path");
const bcrypt = require("bcryptjs")
const mongoose = require("mongoose");
const dBconnect = require("./config/dbConfig");

const User = require("./models/User");

dBconnect.Dbconnect();

const app = express();

app.use(express.json());

app.use(cors());

app.post("/api/users/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {

    const hash = await bcrypt.hash(password,5);

    const user = await User.create({
      username,
      email,
      password : hash,
    });

    res.status(200).send("User has been created succcesfully");
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/users/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(500).json("User not found");
    }
    const passwordCheck = await bcrypt.compare(password,user.password)

    console.log(typeof(password));
    console.log(typeof(user.password));

    if(!passwordCheck){
        res.status(500).send("Password is invalid")
    }else{
    res.status(200).json(user)
    }
} catch (error) {
    console.log(error);
  }
});
app.listen(3010, () => {
  console.log("Server ready at port 3010");
});
