import mongoose from "mongoose";

const UserMessageSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true},
    phone: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);                                                                                                      

const UserMessage = mongoose.model("user-message", UserMessageSchema);
export default UserMessage;
