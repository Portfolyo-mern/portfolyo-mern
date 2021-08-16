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
        console.log(verify);
        if (verify) {
            try {
                let result = await user.findOne({
                    username,
                    email
                });
                if(result){
                    let tokens = result.tokens;
                    console.log(result);
                    if(tokens.includes(req.body.token)){
                        let result = await bcrypt.compare(password,result.password);
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
    }catch{
        res.status(400).send("invalid token");
    }
}
