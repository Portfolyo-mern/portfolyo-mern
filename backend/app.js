require("dotenv").config();

const express = require("express");

require("./database/connect");

const fileUpload = require("express-fileupload");

const mongoose = require("mongoose");

var morgan = require("morgan");

const app = express();

const cors = require("cors");

let allowhosts = ["https://portfolyo.studio"];

if(process.env.portfolyo==="production"){

}else{
    allowhosts = ["http://localhost:3000"];
}
var corsOptions = {
    origin: function (origin, callback) {
      if (allowhosts.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }

app.use(
    cors(corsOptions)
);

app.enable("trust proxy");

app.use(morgan("method :url :response-time ms"));

var cloudinary = require("cloudinary").v2;

cloudinary.config({
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
    cloud_name: process.env.cloud_name,
});

app.use(fileUpload({}));

const router = require("./router.js");

const bodyParser = require("body-parser");

app.use(bodyParser.json({ limit: "5mb" }));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.use(router);

const port = process.env.PORT || 8000;

app.listen(port, (e) => {
    if (e) {
        console.log(e);
    } else {
        console.log(`CONNECTION TO EXPRESS ESTABLISHED on PORT: ${port}`);
    }
});

app.post("/", (req, res) => {
    res.send(`hello! ${port}`);
});

app.get("/", (req, res) => {
    res.send(`hello! ${port}`);
});
