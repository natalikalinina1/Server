const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const actionRouter = require("./routes/actions");
const loggerOne = require("./middlewares/loggerOne");

dotenv.config();

const {
  PORT = 3000,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/library",
} = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch((error) => console.error(error));

const welcomeToLibrary = (request, response) => {
  response.status(200);
  response.send("Welcome to library!");
};

const app = express();

app.get("/", welcomeToLibrary);
app.use(cors());
app.use(loggerOne);
app.use(bodyParser.json());
app.use(userRouter);
app.use(bookRouter);
app.use(actionRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});