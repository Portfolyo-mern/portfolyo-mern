const mongoose = require("mongoose");

const portfolyoSchema = new mongoose.Schema({
    userUsername:{
        type:String,
        required:true
    },
    data:{
        type:String,
        required:true
    }
});

portfolyoSchema.virtual("users",{
    ref: 'user', 
    localField: 'userUsername',
    foreignField: 'username',
    justOne: false
});

const portfolyo = mongoose.model("portfolyo", portfolyoSchema);

module.exports = portfolyo;