const mongoose = require("mongoose");


const resumeSchema = new mongoose.Schema({
   username:{
       type:String,
       required:true
   },
});


const resume = mongoose.model("resume", resumeSchema);

module.exports = resume;