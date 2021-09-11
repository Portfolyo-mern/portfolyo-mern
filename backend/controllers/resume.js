const resume = require('../models/resume');

const uploadResume = async (req, res) => {
    try{
        const user = await require("../auth/verifyandget").verifyandget(req,res);
        if(user){
            if(req.files.file.mimetype!=="application/pdf"){
                return res.status(200).send("cannot upload file only pdfs are allowed !");
            }else{
                req.files.file.mv(`${__dirname}/resume/${user.username}.pdf`,async function(err){
                    if(err){
                        return res.status(400).send("cannot upload your resume !!");
                    }else{
                        try{
                            if(await resume.exists({username: user.username})){
                                return res.status(200).send("updated successfully !!");
                            }else{
                                const result = resume({
                                    username:user.username
                                });
                                await result.save();
                                return res.status(200).send("uploaded successfully !!");
                            }
                        }catch{err}{
                            return res.status(400).send("cannot upload your resume !!");
                        }
                    }
                })
            }
        }else{
            return res.status(200).send("username not authenticated !!");
        }
    }catch(err){
        return res.status(400).send("cannot upload your resume !!");
    }
}

const getMyResumeStatus = async (req, res) => {
    const username = req.params.username;
    try{
        const status = await resume.exists({
            username
        });
        if(status){
            return res.status(200).send("resume as already been uploaded trying to update it ??");
        }else{
            return res.status(200).send("no resume as been uploaded");
        }
    }catch(error){
        return res.status(400).send("cannot get status of resume");
    }
}

const downloadResume = async (req,res) => {
    try{
        const username = req.params.username;
        const file = `${__dirname}/resume/${username}.pdf`
        res.download(file);
    }catch(error){
        res.status(400).send("error occured while dowloading file !!");
    }
}

module.exports = {
    uploadResume,
    getMyResumeStatus,
    downloadResume
}