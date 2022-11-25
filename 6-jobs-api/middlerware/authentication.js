const { UnauthenticatedError } = require("../errors")
const User = require("../models/User")
const jwt = require("jsonwebtoken");
const { Model } = require("mongoose");


const auth = async (req, res, next) => {

    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearar ")) {

        throw new UnauthenticatedError("Auth Invalid ")
    }

    const token = authHeader.split(" ")[1]


    try {
        const payload = jwt.verify(token, process.env.JWT_SECRETS)


        req.user = { userId: payload.userId, name: payload.name }

        next()
    } catch (error) {

        throw new UnauthenticatedError("Authentication invalid")

    }

}


module.exports = auth