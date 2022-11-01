
const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('../errors/custom-error')
const errorHandlerMiddleware = async (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        console.log(err);
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500).send('something went wrong try again later ')

};

module.exports = errorHandlerMiddleware