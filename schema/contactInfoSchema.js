import mongoose from "mongoose";

const contactInfoSchema = mongoose.Schema({
    title:String,
    text:String,
    location:String,
    phone:String,
    email:String
})

const ContactInfo = mongoose.model('contact-information',contactInfoSchema)
export default ContactInfo;