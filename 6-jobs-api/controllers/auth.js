const User = require("../models/User")
const { StatusCodes } = require("http-status-codes")

const bcrypt = require('bcryptjs')

const { BadRequestError } = require("../errors")

const register = async (req, res) => {
    // const { name, email, password } = req.body

    // if (!name || !email || !password) {
    //     throw new BadRequestError("PLease provide name,email and password")
    // }

    // const salt = await bcrypt.genSalt(10)
    // const hashedPassword = await bcrypt.hash(password, salt)

    // const tempUser = { name, email, password: hashedPassword }

    // const user = await User.create({ ...tempUser })
    // console.log(StatusCode.CREATED)
    const user = await User.create({ ...req.body })
    const token = user.CreateJWT()

    res.status(StatusCodes.CREATED).json({ name: { name: user.name }, token })
}


const login = (req, res) => {

    res.send("login")
}

module.exports = {
    login,
    register
}