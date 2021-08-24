const jwt = require("jsonwebtoken");

const user = require("../models/user");

const verifyuser = async (token) => {
    try{
        const verify = jwt.verify(token, process.env.secret_key);
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
                    if(correctToken){
                        return true;
                    }else{
                        return false;
                    }
                }
                else{
                    return false;
                }
            }
            catch{
                return false;
            }
        }
    }catch(error){
        console.log(error)
        return false;
    }
}


module.exports = {
    verifyuser
}