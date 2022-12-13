import mongoose from "mongoose";

const headerSecTwoSchema = mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
});

const headerSecTwo = mongoose.model("header-section-two", headerSecTwoSchema);
export default headerSecTwo;
