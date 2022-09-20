const Product = require("../model/product")

const getAllProductsStatic = async (req, res) => {
    const product = await Product.find({ "feature": false, })
    await res.status(200).json({ product, nbHits: product.length });
}



const getAllProducts = async (req, res) => {

    const product = await Product.find(req.query);
    console.log(req.query)
    await res.status(200).json({ product, nbHits: product.length })
}


module.exports = {
    getAllProductsStatic,
    getAllProducts
};