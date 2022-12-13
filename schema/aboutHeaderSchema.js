import mongoose from "mongoose";

const aboutHeaderSchema = mongoose.Schema({
    title:{ type: String, required: true },
    text:{ type: String, required: true },
    subtitle:{ type: String, required: true },
    subText:{ type: String, required: true },
    subText2:{ type: String, required: true }
})

const aboutHeader = mongoose.model('about-header',aboutHeaderSchema)
export default aboutHeader;