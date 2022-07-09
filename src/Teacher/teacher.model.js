const mongoose = require("mongoose");

const TeachersSchema = new mongoose.Schema(
  {
    name: { type: String, default: null },
    subject: String,
    class: Number,
  },
  {
    timestamps: true,
  }
);

const Teachers = mongoose.model("teachers", TeachersSchema);
module.exports = Teachers;
