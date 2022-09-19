

const getAllProductsStatic = async (req, res) => {
    // throw new Error("testing async errors")
    await res.status(200).json({ msg: "product testing route" });
}



const getAllProducts = async (req, res) => {

    await res.status(200).json({ msg: 'product route' })
}


module.exports = {
    getAllProductsStatic,
    getAllProducts
};