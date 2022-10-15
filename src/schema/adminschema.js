const mongoose = require("mongoose")
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const adminschema = new mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        dateofbirth: String,
        email: { type: String, unique: true },
        password: String,
        cpassword: String,
        tokens:[{
            token:{}
        }]
    }
)

adminschema.pre("save", async function (next) {
    if (this.isModified("password")) {
        console.log(this.password)
        try {
            const hashpassword = await bcrypt.hash(this.password, 10)
            this.password = hashpassword
        } catch (error) {
            console.log(`pre middleware error${error}`)
        }
    }
    next()
})


adminschema.methods.generatetoken = function(req,res,next){
    
}
const adminmodel = mongoose.model("admin-info", adminschema)
adminschema.plugin(uniqueValidator)
module.exports = adminmodel