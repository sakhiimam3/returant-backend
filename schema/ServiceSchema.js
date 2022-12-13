import mongoose from "mongoose";

const ServiceSchema = mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  imgUrl:{ type: String, required: true }
});

const Service = mongoose.model("service", ServiceSchema);
export default Service;
