const express = require("express");
const ctrl = require("../../controller/member/member_controller.js");

const router = express.Router();

router.get("/login", ctrl.login);
router.get("/list", ctrl.list);
router.get("/logincheck", ctrl.logincheck);
router.get("/info", ctrl.info);

module.exports = router;