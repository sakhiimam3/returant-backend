import mongoose from "mongoose";

const headerSectionOneSchema = mongoose.Schema({
    title:{ type: String, required: true },
    subtitle:{ type: String, required: true },
    text:{ type: String, required: true }
})

const headerSectionOne = mongoose.model('header-section-one',headerSectionOneSchema)
export default headerSectionOne;