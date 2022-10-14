const addmissionformmodel = require('../src/schema/admissionschema')


const login = (req,res)=>{
    res.render("login")
}

const addmissionform = async(req,res)=>{
    const {firstname, lastname, fathername, mothername,dateofbirth,birthplace,school,classname, tc,place,contactno,alternatno,email,district,address} = req.body 
    try {
        const data = new addmissionformmodel({firstname, lastname, fathername, mothername,dateofbirth,birthplace,school,classname, tc,place,contactno,alternatno,email,district,address})
        const application = await data.save()
        res.status(201)
        res.send(application)
    } catch (error) {
        console.log(error)
        res.send(error.properties)
    }

}


const contact = (req,res)=>{
    console.log("working")
}



module.exports = {login, addmissionform, contact}