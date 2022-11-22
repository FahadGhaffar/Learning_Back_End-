require("dotenv").config();
const { default: mongoose } = require("mongoose")
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

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
        minlength: 6


    }

})

UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next()

})

UserSchema.methods.CreateJWT = function () {
    return jwt.sign({ userId: this._id, name: this.name }, process.env.JWT_SECRETS, { expiresIn: process.env.JWT_LIFETIME, })

}
UserSchema.methods.getName = function () {
    return this.name
}

module.exports = mongoose.model("User", UserSchema);