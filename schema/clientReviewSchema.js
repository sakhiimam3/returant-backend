import { Schema, model } from "mongoose";

const clientReviewSchema = new Schema({
  client_id: { type: String, required: true },
  profile_img: { type: String, required: true },
  name: { type: String, required: true },
  position: { type: String, required: true },
  review: { type: String, required: true },
});

const ClientReview = model("clients-review", clientReviewSchema);

export default ClientReview;
