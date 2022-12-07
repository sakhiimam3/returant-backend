import mongoose from "mongoose";

const aboutHeaderSchema = mongoose.Schema({
    title:String,
    text:String,
    subtitle:String,
    subText:String
})

const aboutHeader = mongoose.model('about-header',aboutHeaderSchema)
export default aboutHeader;