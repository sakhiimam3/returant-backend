import ProjectSubCategory from "../schema/projectSubCategorySchema.js";
import ProjectCategory from "../schema/projectCategorySchema.js";

export const addProjectSubCategory = async (request, response) => {
  const data = request.body;
  const newData = new ProjectSubCategory(data);
  try {
    await newData.save();
    response.status(201).json(newData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const getProjectSubCategories = async (request, response) => {
  try {
    const data = await ProjectSubCategory.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
export const getProjectSubCategoriesWithName = async (request, response) => {
  try {
    const data = await ProjectSubCategory.find({});
    const data2 = await ProjectCategory.find({});
    const mergedData = data.map((item) => {
      const category = data2.find((v) => v._id == item.category_id);
      return { ...item, category: category.title };
    });
    const finalData = mergedData.map((v) => {
      const cat = { category: v.category };
      const result = [v._doc, cat];
      return result;
    });
    console.log(finalData);
    response.status(200).json(finalData);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
export const getProjectSubCategoryByParentId = async (request, response) => {
  const category = await request.body.category_id;
  try {
    const data = await ProjectSubCategory.find({
      $or: [{ category_id: { $regex: category } }],
    });
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
export const updateProjectSubCategory = async (request, response) => {
  let data = request.body;
  const editData = new ProjectSubCategory(data);
  try {
    await ProjectSubCategory.updateOne({ _id: data._id }, editData);
    response.status(201).json(editData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const deleteProjectSubCategory = async (request, response) => {
  let data = request.body;
  try {
    await ProjectSubCategory.deleteOne({ _id: data._id });
    response.status(201).json("Project Sub Category Deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
