const express = require("express");

const jwt = require("jsonwebtoken");

const router = new express.Router();

const user = require("./models/user");

const bcrypt = require("bcrypt");

const {
    OAuth2Client
} = require('google-auth-library');

const nodemailer = require("nodemailer");

const client = new OAuth2Client();


router.post("/register",(req,res)=>{
    require("./controllers/RegisterAndLogin").register(req,res);
});

router.post("/login",(req,res)=>{
    require("./controllers/RegisterAndLogin").login(req,res);
})

router.get("/verify/:token", async (req,res) => {
    require("./controllers/RegisterAndLogin").verify(req,res);
});

router.post("/googlelogin", async (req, res) => {
    console.log(req.body);
    const {
        email,
        tokenId
    } = req.body;
    try {
        const response = await client.verifyIdToken({
            idToken:tokenId,
            audience: process.env.clientId
        });
        console.log(response.payload);
        const result = await user.exists({
            email: response.payload.email
        });
        console.log(result);
        if (result) {
            try {
                const result1 = await user.findOne({
                    email: response.payload.email
                });
                console.log(result1);
                const token = await result1.generateAuthToken();
                return res.status(200).send(
                    token
                );
            } catch {
                return res.status(400).send("login failed username does not exists");
            }
        } else {
            console.log("error");
            res.status(400).send("invalid details");
        }
    } catch (error) {
        console.log(error);
        res.status(400).send("invalid details");
    }

});


module.exports = router;