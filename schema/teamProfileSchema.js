import mongoose from "mongoose";

const TeamProfileSchema = mongoose.Schema({
  title: String,
  text: String,
  imgUrl:String,
  profileLink:String
});

const TeamProfile = mongoose.model("team-profile", TeamProfileSchema);
export default TeamProfile;
