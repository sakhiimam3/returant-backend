import mongoose from "mongoose";

const CaseStudySchema = mongoose.Schema({
  title: String,
  text: String,
  imgUrl:String
});

const CaseStudy = mongoose.model("case-studie", CaseStudySchema);
export default CaseStudy;
