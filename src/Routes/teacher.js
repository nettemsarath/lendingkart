const express = require("express");
const router = express.Router();

const {
  saveTeacher,
  getTeachers,
  getTeacher,
  deleteTeacher,
} = require("../Teacher");

router.get("/", getTeachers);
router.get("/:id", getTeacher);
router.post("/", saveTeacher);

module.exports = router;
