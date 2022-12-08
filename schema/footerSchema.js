import mongoose from "mongoose";

const footerSchema = mongoose.Schema({
    email:String,
    phone:String,
    linkedInUrl:String,
    instaUrl:String,
    facebookUrl:String
})

const Footer = mongoose.model('footer',footerSchema)
export default Footer;