import mongoose from "mongoose";

const ServiceSchema = mongoose.Schema({
  title: String,
  text: String,
  imgUrl:String
});

const Service = mongoose.model("service", ServiceSchema);
export default Service;
