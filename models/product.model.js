const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product Name is required"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timeStamp: true
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;