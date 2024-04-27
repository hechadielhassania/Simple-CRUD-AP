const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');

const CategorieSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Categorie Name is required"]
        },
        description: {
            type: String,
            required: false
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

const Categorie = mongoose.model("Categorie", CategorieSchema);

module.exports = Categorie;