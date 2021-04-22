const express = require("express");

const jwt = require("jsonwebtoken");

const router = new express.Router();

const user = require("./models/user");

const bcrypt = require("bcrypt");

const {
    OAuth2Client
} = require('google-auth-library');

const nodemailer = require("nodemailer");

const auth = require("./Auth/auth");

const client = new OAuth2Client();

router.get("/verify/:token", async (req, res) => {
    console.log(req.params["token"]);
    const verify = jwt.verify(req.params["token"], process.env.secret_key);
    const {
        password,
        username,
        email
    } = verify;
    const hw_p = await bcrypt.hash(password, 10);
    console.log(verify);
    if (verify) {
        try {
            const result = user({
                password: hw_p,
                username,
                email
            });
            await result.save();
            return res.redirect(process.env.clienturl);
        } catch (error) {
            res.write("server problem try again");
            res.end();
        }
    } else {
        res.write("invalid token authentication failed");
        res.end();
    }
});

router.post("/register", async (req, res) => {
    console.log(req.body);
    let token;
    const {
        conformpass,
        password,
        email,
        username
    } = req.body;
    if (conformpass !== password) {
        return res.status(400).send("pass and conform pass not matching");
    } else {
        try {
            let result = await user.exists({
                username
            });
            if (result) {
                return res.status(400).send("username already exists");
            } else {
                let result = await user.exists({
                    email
                });
                if (result) {
                    return res.status(400).send("email already exists");
                } else {
                    token = await jwt.sign({
                        conformpass,
                        password,
                        email,
                        username
                    }, process.env.secret_key);
                    try {
                        let transporter = nodemailer.createTransport({
                            service: 'Gmail',
                            auth: {
                                user: process.env.user,
                                pass: process.env.pass
                            },
                        });
                        let info = await transporter.sendMail({
                            from: 'aksmur841@gmail.com',
                            to: email,
                            subject: "Portfolyo ✔",
                            text: "dont share this link to anyone?",
                            html: `<a href=${process.env.Baseurl}/verify/${token}>verify</a>`,
                        });
                    } catch (error) {
                        console.log(error)
                        return res.status(400).send("email verification failed");
                    }
                }
            }
            return res.status(200).send(token);
        } catch (error) {
            console.log(error)
            return res.status(400).send("invalid details");
        }
    }

});


router.post("/login", async (req, res) => {
    console.log(req.body);
    const {
        conformpass,
        password
    } = req.body;
    if (conformpass !== password) {
        res.status(400).send("pass and conform pass not matching");
    }
    try {
        const result = await user.findOne({
            username: req.body.username
        });
        const data1 = await bcrypt.compare(req.body.password, result.password);
        if (data1) {
            const token = await result.generateAuthToken();
            res.status(200).send(
                token
            );
        } else {
            res.status(400).send("invalid details");
        }
    } catch (error) {
        console.log(error);
        res.status(400).send("invalid details");
    }
})

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