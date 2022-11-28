require("dotenv").config();


const connectDb = require("./db/connect");
const Prodcut = require("./model/product")

const jsonProducts = require("./products.json");

const created = async () => {
    try {
        await Prodcut.create(jsonProducts);
        console.log("created")
    } catch (error) {
        console.log(error);
    }

}


const start = async () => {

    try {
        await connectDb(process.env.MONGO_URI);
        await created();
        // await Prodcut.deleteMany()
        console.log("ok");
    } catch (error) {
        console.log(error);
    }
}


start();
