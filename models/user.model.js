const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "User Name is required"]
        },
        role: {
            type: String,
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

const User = mongoose.model("User", UserSchema);

module.exports = User;