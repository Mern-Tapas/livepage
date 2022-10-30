const mongoose = require("mongoose")
const db = "mongodb://tapas:tapas123@31.187.75.107:27017"
mongoose.connect(db).then(()=>{console.log("connected")}).catch((errorr)=>{console.log(errorr)})