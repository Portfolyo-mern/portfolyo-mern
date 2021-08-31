const users = require("../models/user");

const getcopyId = async (req,res) => {
    try{
        const data = req.params["WebsiteId"].split("@WebsiteId@");
        const username = data[0];
        const _id = data[1];
        const result = await users.findOne({
            username
        });
        let portfolyodata=null;
        for(let i=0;i<result.portfolyo.length;i++){
            if(result.portfolyo[i]._id==_id){
                portfolyodata=result.portfolyo[i].data;
            }
        }
        if(portfolyodata)
            return res.status(200).send({data:portfolyodata,status:true});
        else
            return res.status(200).send({msg:"invalid url username not found",status:true});
    } 
    catch{
        return res.status(400).send("username not found");
    }
} 

const editwebsiteId = async (req,res) => {
    try{
        const user = await require("../auth/verifyandget").verifyandget(req,res);
        if(user){
            const _id = req.body._id.split("@WebsiteId@")[1];
            const data = req.body.data;
            const result = await users.findOne({
                username:user.username
            });
            let findIndex=-1;
            result.portfolyo.forEach((ele,index)=>{
                if(ele._id==_id){
                    findIndex=index;
                }
            })
            if(findIndex==-1){
                return res.status(400).send("_id not found");
            }else{
                result.portfolyo[findIndex].data=data;
                result.portfolyo = [...result.portfolyo];
                await result.save();
                return res.status(200).send({_id,username:user.username});
            }
        }else{
            return res.status(400).send("invalid token user credentials not found");
        }
    }catch(err){
        console.log(err);
        return res.status(400).send("server problem please try again");
    }
}

module.exports = {
    getcopyId,
    editwebsiteId
}