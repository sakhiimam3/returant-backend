import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log(`MongoDB Connected Succesfully`);
  } catch (error) {
    console.log("Error while connecting database", error);
  }
};

export default Connection;
