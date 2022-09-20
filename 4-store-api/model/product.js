const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'product name must be required']
    },
    price: {
        type: Number,
        require: [true, "product name must be required"]
    },
    feature: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{values} is not supported'
        }
        // enum:['ikea','liddy','caressa','marcos'],
    }



})


module.exports = mongoose.model("Products", productSchema);