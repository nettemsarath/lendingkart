const express = require("express");
const router = express.Router();
const classRoute = require("./class");
const teacherRoute = require("./teacher");
const generateRoute = require("./generate");

router.use("/class", classRoute);
router.use("/teacher", teacherRoute);
router.use("/generate", generateRoute);

module.exports = router;
