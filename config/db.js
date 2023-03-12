const mongoose = require("mongoose");
const GbLink =
  "mongodb+srv://sakhidad:masjid1234@cluster0.x0sowvf.mongodb.net/?retryWrites=true&w=majority";
const Connection = async () => {
  try {
    await mongoose.connect(GbLink, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected Succesfully`);
  } catch (error) {
    console.log("Error while connecting database", error);
  }
};

module.exports = Connection;
