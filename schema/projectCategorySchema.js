import { Schema, model } from "mongoose";

const ProjectCategorySchema = new Schema({
  title: { type: String, required: true },
});

const ProjectCategory = model("project-category", ProjectCategorySchema);
export default ProjectCategory;
