
const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-codes');
const errorHandlerMiddleware = async (err, req, res, next) => {

    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "Something went wrong try again later"
    }


    // if (err instanceof CustomAPIError) {
    //     console.log(err);
    //     return res.status(err.statusCode).json({ msg: err.message })
    // }
    // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('something went wrong try again later ')

    if (err.code && err.code == 11000) {
        customError.msg = `Duplicate Value entered for ${Object.keys(err.keyValue)} field, please choose another one`
        customError.statusCode = StatusCodes.BAD_REQUEST;
    }
    return res.status(customError.statusCode).json({ msg: customError.msg })

};

module.exports = errorHandlerMiddleware