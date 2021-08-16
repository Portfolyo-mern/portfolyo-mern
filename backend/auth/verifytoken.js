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
                    let correctToken = true;
                    for(let i=0;i<tokens.length;i++){
                        if(tokens[i].token === req.body.token){
                            correctToken=true;
                            break;
                        }
                    }
                    console.log(correctToken);
                    if(correctToken){
                        console.log(result);
                        result = await bcrypt.compare(password,result.password);
                        result=true
                        if(result){
                            res.status(200).send({username});
                        }else{
                            res.status(400).send("invalid password");
                        }
                    }else{
                        res.status(400).send("invalid token");
                    }
                }
                else{
                    res.status(400).send("invalid token");
                }
            }
            catch{
                res.status(400).send("invalid token");
            }
        }
    }catch(error){
        console.log(error)
        res.status(400).send("invalid token");
    }
}


module.exports = {
    verifytoken
}