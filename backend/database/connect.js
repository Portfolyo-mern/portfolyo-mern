const mongoose = require("mongoose");

let connection=null;

const connectToMongoDb = () => {
    mongoose.connect(`mongodb+srv://portfolio:${process.env.databasePassword}@portfolyobuilder.ulyp8.mongodb.net/PortfolyoBuilder?retryWrites=true&w=majority`,{
        useCreateIndex:true,
        useNewUrlParser:true,
        useFindAndModify:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("CONNECTED TO MONGODB");
        clearTimeout(connection);
    }).catch(err=>{
        console.log(err);
        console.log("reconnecting mongodb ...");
        connection=setTimeout(connectToMongoDb,5000);
    });
}

connectToMongoDb();