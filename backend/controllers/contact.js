const contact = require("../models/contact");

const submitQuestion = async (req,res) => {
    try{
        const {fullName,emailAddress,phone,subject,message} = req.body;
        const contactDetails = contact({
            fullName,
            emailAddress,
            phone,
            subject,
            message
        });
        await contactDetails.save();
        return res.status(200).send("message sent successfully !!");
    }catch(err){
        return res.status(400).send("error : "+err);
    }
} 

module.exports = {
    submitQuestion
}