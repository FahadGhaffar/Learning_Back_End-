
const jwt = require('jsonwebtoken')

const { UnauthenticatedError } = require('../errors');


const authenticationMiddleware = async (req, res, next) => {

    console.log(req.headers.authorization);
    const authHeader = req.headers.authorization;
    // console.log(authHeader);

    if (!authHeader || !authHeader.startsWith('Bearer ')) {

        throw new UnauthenticatedError("NO Token provided")

    }

    const token = authHeader.split(" ")[1]
    // console.log(token);

    try {
        const decoder = jwt.verify(token, process.env.JWT_SECRET)

        const { id, username } = decoder

        req.user = { id, username }


    } catch (error) {
        console.log(error);
        throw new UnauthenticatedError("Token is not correct ")

    }

    next()
}


module.exports = authenticationMiddleware; 