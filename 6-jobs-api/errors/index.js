

const CustomAPIError = require("./custom-error")
const BadRequestError = require("./bad-request")
const UnauthenticatedError = require("./unauthenticated")
const notFound = require("./not-found")


module.exports = {
    BadRequestError,
    CustomAPIError,
    UnauthenticatedError,
    notFound

}