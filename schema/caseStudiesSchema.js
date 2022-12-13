import mongoose from "mongoose";

const CaseStudySchema = mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  imgUrl:{ type: String, required: true },
  link:{ type: String, required: true }
});

const CaseStudy = mongoose.model("case-studie", CaseStudySchema);
export default CaseStudy;
