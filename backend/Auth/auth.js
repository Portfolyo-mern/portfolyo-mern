const jwt = require("jsonwebtoken");

const user = require("../models/user");

const bcrypt = require("bcrypt");

const auth = async (req,res) => {
    console.log(req.body);
    try{
        const result = await jwt.verify(req.body.token,process.env.secret_key);
        if(result.length==0){
            res.status(400).send("INVALID CREDENTIALS");
        }
        else{
            const data = await user.findOne({
                username: req.body.username
            });
            const verify = data.tokens.filter((ele)=>{
                ele.token!=req.body.token
            })
            // console.log(data);
            if(verify.length==0){
                res.status(400).send("INVALID TOKEN");
            }
        }
    }
    catch(error){
        console.log(error);
        res.status(400).send("INVALID CREDENTIALS");
    }
}

module.exports = auth;