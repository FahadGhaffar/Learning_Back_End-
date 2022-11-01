const { model } = require("mongoose")

const CustomAPIError = require('../errors/custom-error');

const login = async (req, res) => {


    const { username, password } = await req.body


    if (!username || !password) {
        throw new CustomAPIError("please provide email and password", 400)
    }
    console.log(username, password);
    console.log(req.body)
    res.send('Fake Login/Register/Signup Route')

}


const dashboard = (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)

    res.status(200).json({ msg: `Hello, John Doe`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}` })


}

module.exports = {

    login, dashboard

}
