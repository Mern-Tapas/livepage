const addmissionformmodel = require('../src/schema/admissionschema')
const adminmodel = require("./schema/adminschema")
const bcrypt = require("bcryptjs")

const login = (req, res) => {
    res.render("login")

}

const addmissionform = async (req, res) => {
    const { firstname, lastname, fathername, mothername, dateofbirth, birthplace, aadhaar, school, classname, tc, place, contactno, alternatno, email, district, address } = req.body
    try {
        const data = new addmissionformmodel({ firstname, lastname, fathername, mothername, dateofbirth, birthplace, aadhaar, school, classname, tc, place, contactno, alternatno, email, district, address })
        const application = await data.save()
        res.status(201)
        res.send(application)
    } catch (error) {
        console.log(error)
        res.send(error.properties)
    }

}


const contact = (req, res) => {
    console.log("working")
}

const admin = async (req, res) => {
    const { email, password } = req.body
    try {
        const admindata = await adminmodel.findOne({ email })
        const verify = await bcrypt.compare(password, admindata.password)
        if (verify) {
            const token = await admindata.generatetoken()
            res.cookie("jwt", token, { maxAge: 200000 })
            res.redirect("/dashboard")

        } else {
            res.render("admin", { massage: "invalid deatails" })
        }

    } catch (error) {
        console.log(error)
    }

}
const createadmin = async (req, res) => {
    const { firstname, lastname, dateofbirth, email, password, cpassword, securecode } = req.body
    if (password == cpassword) {

        if (securecode == process.env.ADMINSECRATE) {
            try {
                const admindata = new adminmodel({ firstname, lastname, dateofbirth, email, password, cpassword })
                const admin = await admindata.save()
                const token = await admindata.generatetoken()
                res.cookie("jwt",token)
                res.send("dashboard")
            } catch (error) {
                console.log(`error is ${error}`)
            }
        } else {
            res.render("createadmin",{error:"you are not authorised person"})
        }
    }else{
        res.render("createadmin",{error:"Please enter both password same"})
    }
}


module.exports = { login, addmissionform, contact, admin, createadmin }