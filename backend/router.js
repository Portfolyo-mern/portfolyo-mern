const express = require("express");

const router = new express.Router();

const user = require("./models/user");

router.post("/register",(req,res)=>{
    require("./controllers/RegisterAndLogin").register(req,res);
});

router.post("/login",(req,res)=>{
    require("./controllers/RegisterAndLogin").login(req,res);
});

router.get("/logout/:token",(req,res)=>{
    require("./controllers/RegisterAndLogin").logout(req,res);
});

router.get("/verify/:token", async (req,res) => {
    require("./controllers/RegisterAndLogin").verify(req,res);
});

router.post("/verifytoken", async (req,res) => {
    require("./auth/verifytoken").verifytoken(req,res);
})

router.post("/googlelogin", async (req,res)=>{
    require("./controllers/RegisterAndLogin").googlelogin(req,res);
});

router.post("/sendcontactnotification", async (req,res)=>{
    require("./controllers/notifications").sendcontactnotification(req,res);
});

router.post("/uploadbase64image", async (req,res)=>{
    require("./controllers/ImagesUpload").uploadBase64Image(req,res);
})

router.post("/deletepublicid",async (req,res)=>{
    require("./controllers/ImagesUpload").deletePublicId(req,res);
});

router.post("/addportfolyo",async (req,res)=>{
    require("./controllers/porfolyo").addportfolyo(req,res);
});

router.get("/getportfolyo/:username/:_id",async (req,res)=>{
    require("./controllers/porfolyo").getportfolyo(req,res);
});

router.get("/getmyportfolyos/:username",async (req,res)=>{
    require("./controllers/porfolyo").getmyportfolyos(req,res);
});

router.post("/deletewebsite",async (req,res)=>{
    require("./controllers/porfolyo").deleteportfolyo(req,res);
});

module.exports = router;