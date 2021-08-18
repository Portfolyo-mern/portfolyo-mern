require('dotenv').config();

const express = require("express");

require("./database/connect");

const mongoose = require('mongoose');

var morgan = require('morgan');

const app = express();

const cors = require("cors");

app.use(cors());

app.enable("trust proxy");

app.use(morgan('method :url :response-time ms'));

const router = require("./router.js");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.use(router);

const port =  process.env.PORT || 8001;

app.listen(port, (e) => {
  if (e) {
    console.log(e);
  } else {
    console.log("CONNECTION TO EXPRESS ESTABLISHED");
  }
});

app.post("/",(req,res)=>{
  res.send(`hello! ${port}`);
});

app.get("/",(req,res)=>{
  res.send(`hello! ${port}`);
});