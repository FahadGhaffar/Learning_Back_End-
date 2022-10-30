
const CustomAPIError = require('../errors/custom-error')
const errorHandlerMiddleware = async (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        console.log(err);
        return res.status(500).json({ msg: "Something went wrong, please try again " })
    }
    return res.status(500).send('something went wrong try again later ')

};

module.exports = errorHandlerMiddleware