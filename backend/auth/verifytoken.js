const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const user = require("../models/user");

const verifytoken = async (req,res) => {
    try{
        const verify = jwt.verify(req.body["token"], process.env.secret_key);
        const {
            password,
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
                    let correctToken = false;
                    for(let i=0;i<tokens.length;i++){
                        if(tokens[i].token === req.body.token){
                            correctToken=true;
                            break;
                        }
                    }
                    if(correctToken){
                        return res.status(200).send({username});
                    }else{
                        return res.status(400).send("invalid token");
                    }
                }
                else{
                    return res.status(400).send("invalid token");
                }
            }
            catch{
                return res.status(400).send("invalid token");
            }
        }
    }catch(error){
        console.log(error)
        return res.status(400).send("invalid token");
    }
}


module.exports = {
    verifytoken
}