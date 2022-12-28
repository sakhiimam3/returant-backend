import { Schema, model } from "mongoose";

const ProjectSubCategorySchema = new Schema({
  category_id: { type: String, required: true },
  // category_id: { type: String, required: true },
  title: { type: String, required: true },
  descrition: { type: String, required: true },
  project_image: { type: String, required: true },
  client: { type: String, required: true },
  project_type_detail: { type: String, required: true },
  detail_img_one: { type: String, required: true },
  detail_img_two: { type: String, required: true },
});

const ProjectSubCategory = model(
  "project-sub-category",
  ProjectSubCategorySchema
);
export default ProjectSubCategory;
