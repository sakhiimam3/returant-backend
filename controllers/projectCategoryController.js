import ProjectCategory from "../schema/projectCategorySchema.js";

export const addProjectCategory = async (request, response) => {
  const data = request.body;
  const newData = new ProjectCategory(data);
  try {
    await newData.save();
    response.status(201).json(newData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const getProjectCategories = async (request, response) => {
  try {
    const data = await ProjectCategory.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
export const updateProjectCategory = async (request, response) => {
  let data = request.body;
  const editData = new ProjectCategory(data);
  try {
    await ProjectCategory.updateOne({ _id: data._id }, editData);
    response.status(201).json(editData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const deleteProjectCategory = async (request, response) => {
  let data = request.body;
  try {
    await ProjectCategory.deleteOne({ _id: data._id });
    response.status(201).json("Project Category Deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
