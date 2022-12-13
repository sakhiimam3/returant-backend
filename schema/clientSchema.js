import { Schema, model } from "mongoose";

const clientSchema = new Schema({
  client_logo: { type: String, required: true },
});

const Client = model("review-client-company", clientSchema);
export default Client;
