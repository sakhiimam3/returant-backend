import mongoose from "mongoose";

const headerSectionOneSchema = mongoose.Schema({
    title:String,
    subtitle:String,
    text:String
})

const headerSectionOne = mongoose.model('header-section-one',headerSectionOneSchema)
export default headerSectionOne;