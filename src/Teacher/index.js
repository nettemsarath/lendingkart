const {
  insertTeacher,
  getAllTeachers,
  getTeacherById,
  deleteTeacherByID,
} = require("./teacher.module");

const saveTeacher = async (req, res, next) => {
  const teacherData = req.body;
  try {
    await insertTeacher(teacherData);
    return res.status(200).json({
      status: true,
      message: "Teacher Saved",
    });
  } catch (error) {
    next(error);
  }
};

const getTeachers = async (req, res, next) => {
  try {
    const allTeachers = await getAllTeachers();
    return res.status(200).json({
      status: true,
      allTeachers,
    });
  } catch (error) {
    next(error);
  }
};

const getTeacher = async (req, res, next) => {
  try {
    const { id } = req.params;
    const teacher = await getTeacherById(id);
    return res.status(200).json({
      status: true,
      teacher,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTeacher = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteTeacherByID(id);
    return res.status(200).json({
      status: true,
      message: `${id} Teacher deleted`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  saveTeacher,
  getTeachers,
  getTeacher,
  deleteTeacher,
};
