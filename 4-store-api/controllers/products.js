const Product = require("../model/product")

const getAllProductsStatic = async (req, res) => {
    const product = await Product.find({}).sort('-name -price')
    await res.status(200).json({ product, nbHits: product.length });
}
// Just for commit
// Second commit
// Second commit2


const getAllProducts = async (req, res) => {
    const { feature, company, name, sort, field } = req.query
    const queryObject = {}
    // console.log(feature);
    if (feature) {
        queryObject.feature = feature === 'true' ? true : false;
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = { $regex: name, $option: 'i' }
    }
    // console.log(queryObject)
    // const product = await Product.find(queryObject);
    // console.log(req.query)
    let result = Product.find(queryObject);
    if (sort) {
        const sortList = sort.split(",").join(' ')
        result = result.sort(sortList);

    }
    else {
        result = result.sort("createdAt");
    }
    if (field) {
        const fieldList = field.split(",").join(' ')
        result = result.select(fieldList);

    }
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit)

    const product = await result
    await res.status(200).json({ product, nbHits: product.length })
}


module.exports = {
    getAllProductsStatic,
    getAllProducts
};