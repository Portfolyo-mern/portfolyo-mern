const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://portfolio:${process.env.databasePassword}@cluster0.ulyp8.mongodb.net/Portfolyo`,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected");
}).catch(response=>{
    console.log("error");
    console.log(response);
});



