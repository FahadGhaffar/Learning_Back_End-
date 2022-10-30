// const Product = require("../model/product")

// const getAllProductsStatic = async (req, res) => {
//     const product = await Product.find({ price: { $gt: 30 } }).sort('price')
//     await res.status(200).json({ product, nbHits: product.length });
// }
// // Just for commit
// // Second commit
// // Second commit2


// const getAllProducts = async (req, res) => {
//     const { feature, company, name, sort, field, numericFilters } = req.query
//     const queryObject = {}
//     // console.log(feature);
//     if (feature) {
//         queryObject.feature = feature === 'true' ? true : false;
//     }
//     if (company) {
//         queryObject.company = company
//     }
//     if (name) {
//         queryObject.name = { $regex: name, $option: 'i' }
//     }
//     // console.log(queryObject)
//     // const product = await Product.find(queryObject);
//     // console.log(req.query)
//     let result = Product.find(queryObject);
//     if (sort) {
//         const sortList = sort.split(",").join(' ')
//         result = result.sort(sortList);

//     }
//     else {
//         result = result.sort("createdAt");
//     }
//     if (field) {
//         const fieldList = field.split(",").join(' ')
//         result = result.select(fieldList);

//     }
//     if (numericFilters) {
//         const operatorMap = {
//             '>': '$gt',
//             '>=': '$gte',
//             '=': '$eq',
//             '<': '$lt',
//             '<=': '$lte',
//         }
//         const regEx = /\b(<|>|>=|=|<|<=)\b/g

//         let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`)

//         const options = ['price', 'rating']
//         filters = filters.split(',').forEach((item) => {
//             const [field, opertor, value] = item.split('-')
//             if (options.includes(field)) {

//                 queryObject[field] = { [opertor]: Number(value) }
//             }
//         });

//         console.log(queryObject);
//     }
//     const page = Number(req.query.page) || 1
//     const limit = Number(req.query.limit) || 10
//     const skip = (page - 1) * limit;

//     result = result.skip(skip).limit(limit)

//     const product = await result
//     await res.status(200).json({ product, nbHits: product.length })
// }


// module.exports = {
//     getAllProductsStatic,
//     getAllProducts
// };