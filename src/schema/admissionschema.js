const mongoose = require("mongoose")
const uniqueValidator = require('mongoose-unique-validator');

const addmissionschema = new mongoose.Schema(
    {
        firstname: String,
        lastname:String,
        fathername:String,
        mothername:String,
        dateofbirth:String,
        birthplace:String,
        school:String,
        classname:String,
        tc:String,
        place:String,
        contactno:Number,
        alternatno:Number,
        email:{type:String, unique:true},
        district:String,
        address:String
    }
)
addmissionschema.plugin(uniqueValidator)

const addmissionformmodel = mongoose.model("addmissionform",addmissionschema)



module.exports = addmissionformmodel
