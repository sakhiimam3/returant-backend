import mongoose from "mongoose";

const contactInfoSchema = mongoose.Schema({
    title:{ type: String, required: true },
    text:{ type: String, required: true },
    location:{ type: String, required: true },
    phone:{ type: String, required: true },
    email:{ type: String, required: true }
})

const ContactInfo = mongoose.model('contact-information',contactInfoSchema)
export default ContactInfo;