const express = require("express");
const router = express.Router();

const { generateTimeTable } = require("../generateTimetable");

router.get("/", generateTimeTable);

module.exports = router;
