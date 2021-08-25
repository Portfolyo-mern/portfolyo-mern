var cloudinary = require('cloudinary').v2;

const uploadBase64Image = async (req,res) => {
    try{
        // console.log(req.body.image);
        const {image} = req.body
        if(await require("../auth/verifyuser").verifyuser(req.body.token)){
            cloudinary.uploader.upload(image, function(error, result) { 
                if(error){
                    // console.log(error,result);
                    return res.status(400).send("cannot upload image try again");
                }
                console.log(result);
                return res.status(200).send(result.secure_url);
            });
        }else{
            return res.status(400).send("invalid user please authenticate");
        }
    }catch(error){
        return res.status(400).send("internal error try again");
    }
}

const deletePublicId = async (req,res) => {
    try{
        // console.log(req.body.image);
        const {image} = req.body
        if(await require("../auth/verifyuser").verifyuser(req.body.token)){
            const publicId = req.body.image.split("/").reverse()[0].split(".")[0];
            console.log(publicId);
            cloudinary.uploader.destroy(publicId, function(error, result) { 
                if(error){
                    return res.status(400).send("cannot delete image");
                }
                console.log(result);
                return res.status(200).send("deleted succefully");
            });
        }else{
            return res.status(400).send("invalid user please authenticate");
        }
    }catch(error){
        return res.status(400).send("cannot delete invalid public id");
    }
} 


module.exports = {
    uploadBase64Image,
    deletePublicId
}