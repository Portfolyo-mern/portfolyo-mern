const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const user = require("../models/user");

const nodemailer = require("nodemailer");

const {
    OAuth2Client
} = require('google-auth-library');

const client = new OAuth2Client();

const register =  async (req, res) => {
    console.log(req.body);
    let token;
    let {
        conformpass,
        password,
        email,
        username
    } = req.body;
    username=username.toLowerCase();
    email=email.toLowerCase();
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
                            from: 'portfolyobuilder@gmail.com',
                            to: email,
                            subject: "PortfolyoBuilder ✔",
                            text: "dont share this link to anyone?",
                            html: `click on this link to create an account <a href=${process.env.client}/verify/${token}>${process.env.client}/verify/${token}</a>`,
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

}


const login = async (req, res) => {
    console.log(req.body);
    const {
        conformpass,
        password
    } = req.body;
    // if (conformpass !== password) {
    //     return res.status(400).send("pass and conform pass not matching");
    // }
    try {
        const result = await user.findOne({
	    $or:[{
		username: req.body.username.toLowerCase()
		},
		{
		email: req.body.username.toLowerCase()
		}
		]
        });
        const data1 = await bcrypt.compare(req.body.password, result.password);
        if (data1) {
            let token = await jwt.sign({
                password,
                email:result.email,
                username:result.username
            }, process.env.secret_key);
            result.tokens = result.tokens.concat({token});
            await result.save();
            return res.status(200).send(
                token
            );
        } else {
            return res.status(400).send("invalid details");
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send("invalid details");
    }
}

const verify = async (req, res) => {
    console.log(req.params["token"]);
    try{
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
                    email,
                    tokens:[{
                        token:req.params["token"]
                    }]
                });
                await result.save();
                return res.status(200).send({status:true,message:"verified successfully"});
            } catch (error) {
                return res.status(200).send({status:false,message:"user already exists try again"});
            }
        } else {
            return res.status(200).send({status:false,message:"invalid token authentication failed"});
        }
    }catch{
        return res.status(200).send({status:false,message:"invalid token authentication failed"});
    }
}

const googlelogin = async (req, res) => {
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
        console.log("response is")
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

}

const logout = async (req,res) => {
    const token = req.params["token"];
    const verify = jwt.verify(token, process.env.secret_key);
    const {
        username,
        email
    } = verify;
    if (verify) {
        try {
            var result = await user.findOne({
                username,
                email
            });
            if(result){
                let tokens = result.tokens;
                result.tokens = tokens.filter((ele)=>{
                    if(ele.token!=token){
                        return ele;
                    }
                });
                await result.save();
                return res.status(200).send("token removed");
            }
        }
        catch(err){
            return res.status(200).send("token does not exist");
        } 
    }
}

module.exports ={
    register,
    login,
    verify,
    googlelogin,
    logout
}
