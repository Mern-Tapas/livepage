const mongoose = require("mongoose")

mongoose.connect(process.env.DB).then(()=>{console.log("connected")}).catch((errorr)=>{console.log(errorr)})