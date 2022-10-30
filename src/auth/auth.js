const jwt = require("jsonwebtoken")
const adminmodel = require("../schema/adminschema")

const adminauth = async function (req, res, next) {
    try {



        const getUserId = jwt.verify(req.cookies.jwt, "starlandacadamyadmiindoremadhyapradeshindia")
        const getUser = await adminmodel.findById({ _id: getUserId._id })

        const getusertoken = getUser.tokens.filter((element) => {
            if (element.token == req.cookies.jwt) {
                return element.token
            }
        })
        if (getusertoken[0].token == req.cookies.jwt) {
            req.userData = getUser
            next()

        } else {
            console.log("error")
        }
    } catch (error) {
        console.log(`this error is${error}`)
        res.redirect('/admin')
    }
}


const logincheque = async function(req,res,next){
    if(req.cookies.jwt == undefined){
        next()
    }else{
        try {



            const getUserId = jwt.verify(req.cookies.jwt, "starlandacadamyadmiindoremadhyapradeshindia")
            const getUser = await adminmodel.findById({ _id: getUserId._id })
    
            const getusertoken = getUser.tokens.filter((element) => {
                if (element.token == req.cookies.jwt) {
                    return element.token
                }
            })
            if (getusertoken[0].token == req.cookies.jwt) {
                    res.redirect("/dashboard")
            } else {
                console.log("error")
            }
        } catch (error) {
            console.log(`this error is${error}`)
            res.redirect('/admin')
        }
    
    }
       
}



module.exports = { adminauth, logincheque }