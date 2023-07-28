const express = require("express");
const ctrl = require("../controller/common_controller.js");

const router = express.Router();

router.get("/", ctrl.index);
//router.get("/", (req,res)=>{res.send("라우터연결");});


module.exports = router;