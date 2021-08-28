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

const getportfolyo = async (req,res) => {
    try{
        const username = req.params["username"];
        const _id = req.params["_id"];
        const user = await users.findOne({
            username,
        })
        if(user){
            for(var i=0;i<user.portfolyo.length;i++){
                if(user.portfolyo[i]._id==_id){
                    return res.status(200).send(user.portfolyo[i]);
                }
            }
        }else{
            return res.status(400).send("username not found");
        }
    }catch(err){
        console.log(err);
        return res.status(400).send("cannot get invalid delails provided");
    }
}

module.exports = {
    addportfolyo,
    getportfolyo
}