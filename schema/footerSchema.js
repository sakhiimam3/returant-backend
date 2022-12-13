import mongoose from "mongoose";

const footerSchema = mongoose.Schema({
    email:{ type: String, required: true },
    phone:{ type: String, required: true },
    linkedInUrl:{ type: String, required: true },
    instaUrl:{ type: String, required: true },
    facebookUrl:{ type: String, required: true }
})

const Footer = mongoose.model('footer',footerSchema)
export default Footer;