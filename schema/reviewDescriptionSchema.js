import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
});

const Review = mongoose.model("review-description", ReviewSchema);
export default Review;
