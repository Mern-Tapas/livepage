require("dotenv").config()
const { urlencoded } = require("body-parser")
const express = require("express")
require("./database")
const hbs = require("hbs")
const path = require("path")
const app = express()
const cookieParser = require("cookie-parser")

const { login , addmissionform , contact ,admin , createadmin} = require("../src/functions")
const { adminauth, logincheque } = require("./auth/auth")
const addmissionformmodel = require("./schema/admissionschema")

const template = path.join(__dirname,"../template/view")
const partials = path.join(__dirname,"../template/partials")


app.set("view engine","hbs")
app.set("views",template)
hbs.registerPartials(partials)

app.use(express.static("public"))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cookieParser())




app.get("/",(req,res)=>{res.render("home")})
app.get("/about",(req,res)=>{res.render("about",{})})
app.get("/contact",(req,res)=>{res.render("contact")})
app.get("/application",(req,res)=>{res.render("application")})
app.get("/faculty",(req,res)=>{res.render("facultyregistration")})
app.get("/login", login)
app.get("/dashboard",adminauth, async (req,res)=>{
    const user = req.userData
    try {
        const admissionform = await addmissionformmodel.find()
        res.render("dashboard",{data:user,formarray:admissionform})
    } catch (error) {
        
    }

})
app.get("/studentspage",(req,res)=>{res.render("studentspage")})
app.get("/admin",logincheque,(req,res)=>{res.render("admin")})
app.get("/createadmin",(req,res)=>{res.render("createadmin")})
app.get("/dashboard/:id",(req,res)=>{
    res.send("hellow")
})


app.post("/application",addmissionform)
app.post("/contact",contact)
app.post("/admin",admin)
app.post("/createadmin",createadmin)

app.listen(process.env.PORT||4000,()=>{console.log("listening port 4000")})