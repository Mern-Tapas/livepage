const mongoose = require("mongoose")

const contactpageschema = new mongoose.Schema(
    {
        name:String,
        mobile:Number,
        email:String,
        massage:String
    }
)


const contactmodel = mongoose.model("enquiry",contactpageschema)

module.exports = contactmodel