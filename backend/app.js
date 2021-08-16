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

const port =  8001;

app.listen(port, (e) => {
  if (e) {
    console.log(e);
  } else {
    console.log("CONNECTION TO EXPRESS ESTABLISHED");
  }
});