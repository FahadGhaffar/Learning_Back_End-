const Product = require("../model/product")

const getAllProductsStatic = async (req, res) => {
    const product = await Product.find({ "feature": false, })
    await res.status(200).json({ product, nbHits: product.length });
}
// Just for commit
// Second commit


const getAllProducts = async (req, res) => {
    const { feature, company, name } = req.query
    const queryObject = {}
    console.log(feature);
    if (feature) {
        queryObject.feature = feature === 'true' ? true : false;
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = { $regex: name, $option: 'i' }
    }
    console.log(queryObject)
    const product = await Product.find(queryObject);
    console.log(req.query)
    await res.status(200).json({ product, nbHits: product.length })
}


module.exports = {
    getAllProductsStatic,
    getAllProducts
};