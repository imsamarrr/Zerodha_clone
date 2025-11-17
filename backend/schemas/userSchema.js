const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        unique : true,
    }
});

userSchema.pre("save",async function(){
    this.password = await bcrypt.hash(this.password,12);
});

module.exports = mongoose.model("user",userSchema);
