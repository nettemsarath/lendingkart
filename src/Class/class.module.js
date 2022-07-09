const mongoose = require("mongoose");

const Classes = require("./class.model");

const insertClass = async (data) => {
  try {
    const newClass = new Classes(data);
    await newClass.save();
    return;
  } catch (error) {
    throw error;
  }
};

const getallClasses = async () => {
  try {
    const query = {
      isdeleted: false,
    };
    const allClasses = await Classes.find(query);
    return allClasses;
  } catch (error) {
    throw error;
  }
};

const getClassById = async (ID) => {
  try {
    const query = {
      _id: mongoose.Types.ObjectId(ID),
      isdeleted: false,
    };
    const classData = await Classes.findOne(query);
    return classData;
  } catch (error) {
    throw error;
  }
};

const deleteClassById = async (ID) => {
  try {
    const query = {
      _id: mongoose.Types.ObjectId(ID),
    };
    const updateFields = {
      isdeleted: true,
    };
    const options = { new: true };
    await Classes.findOneAndUpdate(query, updateFields, options);
    return 1;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  insertClass,
  getallClasses,
  getClassById,
  deleteClassById,
};
