const express = require("express");

const router = new express.Router();

const user = require("./models/user");

router.post("/register",(req,res)=>{
    require("./controllers/RegisterAndLogin").register(req,res);
});

router.post("/login",(req,res)=>{
    require("./controllers/RegisterAndLogin").login(req,res);
})

router.get("/verify/:token", async (req,res) => {
    require("./controllers/RegisterAndLogin").verify(req,res);
});

router.post("/verifytoken", async (req,res) => {
    require("./auth/verifytoken").verifytoken(req,res);
})

router.post("/googlelogin", async (req,res)=>{
    require("./controllers/RegisterAndLogin").googlelogin(req,res);
});


module.exports = router;