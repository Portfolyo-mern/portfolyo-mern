const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const user = require("../models/user");

const verifyandget = async (req,res) => {
    // console.log("hello");
    try{
        const verify = jwt.verify(req.body["token"], process.env.secret_key);
        const {
            password,
            username,
            email
        } = verify;
        // console.log(verify);
        if (verify) {
            try {
                var result = await user.findOne({
                    username,
                    email
                });
                // console.log(result);
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
                        return verify;
                    }else{
                        return null;
                    }
                }
                else{
                    return null;
                }
            }
            catch{
                return null;
            }
        }
    }catch(error){
        // console.log(error)
        return null;
    }
}


module.exports = {
    verifyandget
}