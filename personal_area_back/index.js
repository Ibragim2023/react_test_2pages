const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(require("./Routes/contacts.route"));
app.use(require("./Routes/users.route"))

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Ibragim:munaev230903ibra@cluster0.s3uug.mongodb.net/personal_area?retryWrites=true&w=majority"
    );
    console.log("Успешное соединение с MongoDB");

    app.listen(3005, () => {
      console.log("Сервер успешно запущен");
    });
  } catch (error) {
    console.log("шота пашло ни так");
  }
};
connect();
