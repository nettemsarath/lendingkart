const mongoose = require("mongoose");

const Teachers = require("./teacher.model");

const insertTeacher = async (data) => {
  try {
    const newTeacher = new Teachers(data);
    await newTeacher.save();
    return;
  } catch (error) {
    throw error;
  }
};

const getAllTeachers = async (ID) => {
  try {
    const query = {};
    const allTeachers = await Teachers.find(query);
    return allTeachers;
  } catch (error) {
    throw error;
  }
};

const getTeacherById = async (ID) => {
  try {
    const query = {
      _id: mongoose.Types.ObjectId(ID),
    };
    const teacher = await Teachers.findOne(query);
    return teacher;
  } catch (error) {
    throw error;
  }
};

const deleteTeacherByID = async (ID) => {
  try {
    const query = {
      _id: mongoose.Types.ObjectId(ID),
    };
    const updateFields = {
      isdeleted: true,
    };
    const options = { new: true };
    await Teachers.findOneAndUpdate(query, updateFields, options);
    return 1;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  insertTeacher,
  getAllTeachers,
  getTeacherById,
  deleteTeacherByID,
};
