import mongoose from "mongoose";

const optionsSchema = new mongoose.Schema({
  option_id: String,
  option_name: String,
});

const Mainschema = new mongoose.Schema({
  name: String,
  description: String,
  options: [optionsSchema],
});

const Model = mongoose.model("Options", Mainschema);
export default Model;
