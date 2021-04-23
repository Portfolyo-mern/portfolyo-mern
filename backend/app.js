require('dotenv').config();

const express = require("express");

require("./database/connect");

const mongoose = require('mongoose');

const app = express();

const router = require("./router.js");

const cors = require("cors");

app.use(cors());

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.use(router);

const port = process.env.port || 8000;

/* app.listen(PORT,(error) => {
    (error)?console.log("error"):console.log("listening");
}); */

mongoose
  .connect(
    `mongodb+srv://portfolio:${process.env.databasePassword}@cluster0.ulyp8.mongodb.net/Portfolyo`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }
  )
  .then((result) => {
    console.log("CONNECTED TO MONGODB")
    app.listen(port, (e) => {
      if (e) {
        console.log(e);
      } else {
        console.log("CONNECTION TO EXPRESS ESTABLISHED");
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });