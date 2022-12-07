import mongoose from "mongoose";

const headerSecTwoSchema = mongoose.Schema({
  title: String,
  text: String,
});

const headerSecTwo = mongoose.model("header-section-two", headerSecTwoSchema);
export default headerSecTwo;
