const notFound = (req, res) => res.status(404).send("Route does Not exist ");

module.exports = notFound;