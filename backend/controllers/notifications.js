const nodemailer = require("nodemailer");

const sendcontactnotification = async (req,res) => {
    try{
        let {name,subject,gmail,message,sendergmail} = req.body;
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.user,
                pass: process.env.pass
            },
        });
        await transporter.sendMail({
            from: 'portfolyobuilder@gmail.com',
            to: sendergmail,
            subject: `From PortfolyoBuilder ✔ ${subject}`,
            text: `Name:${name}`,
            html: `<br/> Gmail : <strong>${gmail}</strong> <br/> <p>Message : ${message}</p> `,
        });
        res.status(200).send("message sent successfully...");
    }catch(error){
        console.log(error);
        res.status(400).send("cannot send try again ...");
    }
}

module.exports={
    sendcontactnotification
}