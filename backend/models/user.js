const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
});


userSchema.methods.generateAuthToken = async function() {
    try{
        if(this.email){
            const token = await jwt.sign({_id:this._id,password:this.password,username:this.username,email:this.email},process.env.secret_key);
            this.tokens = this.tokens.concat({token});
            await this.save();
            return token;
        }
        else{
            const token = await jwt.sign({_id:this._id,password:this.password,username:this.username},process.env.secret_key);
            this.password = await bcrypt.hash(this.password,10);
            this.tokens = this.tokens.concat({token});
            await this.save();
            return token;
        }
    }
    catch(error){
        console.log(error);
    }
}

const user = mongoose.model("user", userSchema);


module.exports = user;