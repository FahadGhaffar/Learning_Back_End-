const { model } = require("mongoose")

const jwt = require('jsonwebtoken')

const CustomAPIError = require('../errors/custom-error');

const login = async (req, res) => {


    const { username, password } = await req.body


    if (!username || !password) {
        throw new CustomAPIError("please provide email and password", 400)
    }

    const id = new Date().getDate()


    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })
    console.log(username, password);
    console.log(token)
    res.status(200).send({ msg: "your token is ", token })

}


const dashboard = (req, res) => {

    const authHeader = req.headers.authorization;
    // console.log(authHeader);

    if (!authHeader || !authHeader.startsWith('Bearer ')) {

        throw new CustomAPIError("NO Token provided ", 400)

    }

    const token = authHeader.split(" ")[1]
    // console.log(token);

    try {
        const decoder = jwt.verify(token, process.env.JWT_SECRET)
        const luckyNumber = Math.floor(Math.random() * 100)

        res.status(200).json({ msg: `Hello, ${decoder.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}` })

    } catch (error) {
        console.log(error);
        throw new CustomAPIError("Token is not correct ", 400)

    }





}

module.exports = {

    login, dashboard

}
