require("dotenv").config()
const { urlencoded } = require("body-parser")
const express = require("express")
require("./database")
const hbs = require("hbs")
const path = require("path")
const app = express()

const { login , addmissionform , contact } = require("../src/functions")

const template = path.join(__dirname,"../template/view")
const partials = path.join(__dirname,"../template/partials")


app.set("view engine","hbs")
app.set("views",template)
hbs.registerPartials(partials)

app.use(express.static("public"))
app.use(express.urlencoded({extended:false}))
app.use(express.json())



app.get("/",(req,res)=>{res.render("home")})
app.get("/about",(req,res)=>{res.render("about",{})})
app.get("/contact",(req,res)=>{res.render("contact")})
app.get("/application",(req,res)=>{res.render("application")})
app.get("/faculty",(req,res)=>{res.render("facultyregistration")})
app.get("/login", login)
app.get("/dashboard",(req,res)=>{res.render("dashboard")})
app.get("/studentspage",(req,res)=>{res.render("studentspage")})


app.post("/application",addmissionform)
app.post("/contact",contact)

app.listen(process.env.PORT||4000,()=>{console.log("listening port 4000")})