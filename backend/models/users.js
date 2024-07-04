const mongoose = require("mongoose")
//user schema
const userSchema = new mongoose.Schema({
    name : {type : String, require : true},
    email : {type : String, require : true},
    password : {type : String, require : true}
}, {timestamps : true}
)

//user model
const User = mongoose.model("User", userSchema)

module.exports = User