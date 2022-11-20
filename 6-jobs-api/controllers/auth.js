const User = require("../models/User")
const { StatusCode } = require("http-status-codes")

const register = async (req, res) => {
    const user = await User.Create({ ...req.body })
    // console.log(StatusCode.Created)
    res.json({ user })
}


const login = (req, res) => {

    res.send("login")
}

module.exports = {
    login,
    register
}