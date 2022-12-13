import mongoose from "mongoose";

const TeamProfileSchema = mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  imgUrl:{ type: String, required: true },
  profileLink:{ type: String, required: true }
});

const TeamProfile = mongoose.model("team-profile", TeamProfileSchema);
export default TeamProfile;
