const {
  insertClass,
  getallClasses,
  getClassById,
  deleteClassById,
} = require("./class.module");

const saveClass = async (req, res, next) => {
  try {
    const data = req.body;
    await insertClass(data);
    return res.status(200).json({
      status: true,
      message: "saved Class",
    });
  } catch (error) {
    next(error);
  }
};

const getClasses = async (req, res, next) => {
  try {
    const allclasses = await getallClasses();
    return res.status(200).json({
      status: true,
      allclasses,
    });
  } catch (error) {
    next(error);
  }
};

const getClass = async (req, res, next) => {
  const { id } = req.params;
  try {
    const classData = await getClassById(id);
    return res.status(200).json({
      status: true,
      classData,
    });
  } catch (error) {
    next(error);
  }
};

const deleteClass = async (req, res, next) => {
  const { id } = req.params;
  try {
    await deleteClassById(id);
    return res.status(200).json({
      status: true,
      message: `${id} class deleted`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  saveClass,
  getClasses,
  getClass,
  deleteClass,
};
