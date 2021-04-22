require('dotenv').config();

const express = require("express");

require("./database/connect");

const app = express();

const router = require("./router.js");

const cors = require("cors");

app.use(cors());

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.use(router);

const PORT = process.env.PORT || 8000;

app.listen(PORT,(error) => {
    (error)?console.log("error"):console.log("listening");
});