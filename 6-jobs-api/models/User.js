const { default: mongoose } = require("mongoose")
const mangoose = require("mongoose")


const UserSchema = new mangoose.Schema({

    name: {
        type: String,
        require: [true, "Please provide name"],
        minlength: 3,
        maxlenght: 30
    },
    email: {
        type: String,
        require: [true, "Please provide email"],
        minlength: 3,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            , "PLease provide proper email address"],
        unique: true

    },
    password: {
        type: String,
        require: [true, "Please provide password"],
        minlength: 6,
        maxlenght: 12,

    }



})


module.exports = mongoose.model("User", UserSchema);