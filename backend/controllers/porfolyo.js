const portfolyo = require('../models/portfolyo');
const users = require("../models/user");

const addportfolyo = async (req,res) => {
    try{
        const user = await require("../auth/verifyandget").verifyandget(req,res);
        if(user){
            const data = req.body.data;
            // console.log(user);
            // console.log(user.username);
            let result =  await users.findOne({
                username:user.username
            });
            // console.log(result);
            result.portfolyo = result.portfolyo.concat({data});
            await result.save();
            return res.status(200).send("inserted successfully");
        }else{
            // console.log(user)
            return res.status(400).send("invalid user");
        }
    }catch(err){
        // console.log(err);
        return res.status(400).send("cannot add try again");
    }
}

module.exports = {
    addportfolyo
}