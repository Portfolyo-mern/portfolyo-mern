const portfolyo = require('../models/portfolyo');
const users = require("../models/user");
const mongoose = require('mongoose');

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
            const _id = mongoose.Types.ObjectId();
            result.portfolyo = result.portfolyo.concat({data,_id});
            await result.save();
            return res.status(200).send({_id,username:user.username});
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
            return res.status(400).send("token not found");
        }else{
            return res.status(400).send("username not found");
        }
    }catch(err){
        console.log(err);
        return res.status(400).send("cannot get invalid delails provided");
    }
}


const getmyportfolyos = async (req,res) => {
    try{
        const username = req.params["username"];
        const user = await users.findOne({
            username,
        })
        if(user){
            return res.status(200).send(user.portfolyo);
        }else{
            return res.status(400).send("username not found");
        }
    }catch(err){
        console.log(err);
        return res.status(400).send("cannot get invalid delails provided");
    }
}

const deleteportfolyo = async (req,res) => {
    try{
        const user = await require("../auth/verifyandget").verifyandget(req,res);
        if(user){
            const result = await users.findOne({
                username:user.username
            });
            result.portfolyo = result.portfolyo.filter((ele,index)=>{
                // console.log(ele._id,req.body._id);
                if(ele._id!=req.body._id){
                    return true;
                }
                return false;
            })
            const data = result.portfolyo;
            await result.save();
            return res.status(200).send(data);
        }else{
            console.log("wjsshs");
            return res.status(400).send("invalid user token incorrect");
        }
    }catch(error){
        console.log(error);
        return res.status(400).send("cannot delete website try again");
    }
}

module.exports = {
    addportfolyo,
    getportfolyo,
    getmyportfolyos,
    deleteportfolyo
}