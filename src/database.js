const mongoose = require("mongoose")
const db = process.env.DB
mongoose.connect(db).then(()=>{console.log("connected")}).catch((errorr)=>{console.log(errorr)})