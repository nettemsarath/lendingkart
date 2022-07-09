const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema(
  {
    class: Number,
    strength: Number,
    subjects: [{ subject: String }],
    isdeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Classes = mongoose.model("classes", ClassSchema);
module.exports = Classes;
