const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config();

const indexRoutes = require("./routes/index");

const app = express();

const port = process.env.PORT || 5000;

const initiateMongoServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to DB");
  } catch (err) {
    throw err;
  }
};

app.use(cors());
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "frontend/build")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.json({ msg: "Hello Hello!" });
});

app.use(indexRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({
    message: message,
    data: data,
  });
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
  initiateMongoServer();
});
