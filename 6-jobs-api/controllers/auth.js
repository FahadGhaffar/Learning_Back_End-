const User = require("../models/User")
const { StatusCodes } = require("http-status-codes")


const bcrypt = require('bcryptjs')

const { BadRequestError, UnauthenticatedError } = require("../errors")

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


const login = async (req, res) => {
    const { email, password } = req.body


    if (!email || !password) {
        console.log((password));
        throw new BadRequestError("Please provde login and password")

    }

    const user = await User.findOne({ email })


    // compare password

    if (!user) {
        throw new UnauthenticatedError("Invalid Credentials")
    }
    const isPasswordCorrect = await user.comparePassword(password)


    if (!isPasswordCorrect) {
        throw new UnauthenticatedError("Invalid Credentials")
    }
    const token = user.CreateJWT();


    res.status(StatusCodes.OK).json({ User: { name: user.name }, token });
}

module.exports = {
    login,
    register
}