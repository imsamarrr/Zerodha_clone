const User = require("../schemas/userSchema");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async(req,res)=>{
    const token = req.cookies.token;
    if(!token){
        return res.json({status : false});
    }
    jwt.verify(token,process.env.TOKEN_KEY,async(err,data)=>{
        if(err){
            return res.json({status : false});
        }else {
            let user = await User.findById(data.id); //here data is payload when we created id so data = { id : user._id}
            if(user){
                res.json({status : true,user : user.username});
            }else {
                return res.json({status : false});
            }
        }
    });
}