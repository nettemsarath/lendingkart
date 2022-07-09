const express = require("express");
const router = express.Router();

const { saveClass, getClasses, getClass, deleteClass } = require("../Class");

router.get("/", getClasses);
router.get("/:id", getClass);
router.post("/", saveClass);
router.delete("/", deleteClass);

module.exports = router;
