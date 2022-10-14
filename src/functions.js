const addmissionformmodel = require('../src/schema/admissionschema')
const adminmodel = require("./schema/adminschema")

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

const admin = (req, res) => {
    console.log(req.body.adminid)
}
const createadmin = async (req, res) => {
    const { firstname, lastname, dateofbirth, usermail, password, cpassword, securecode } = req.body
    if (securecode == process.env.ADMINSECRATE) {
        try {
            const admindata = new adminmodel({ firstname, lastname, dateofbirth, usermail, password, cpassword })
            const admin = await admindata.save()
            res.send(admin)
        } catch (error) {
            console.log(error)
        }
    }else{
        res.send("you are not Authorised Person")
    }

}


module.exports = { login, addmissionform, contact, admin, createadmin }