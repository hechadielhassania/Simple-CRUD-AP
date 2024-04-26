require("dotenv").config()
// --------------> allows the {.env} file

const express = require("express");
const PORT = process.env.PORT || 3000
const connectToDb = require("./config/connectdb")
const Product = require('./models/product.model')
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route')

const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute)
app.get('/', (req, res) => {
    res.send("<h1>Hello from Node API Server</h1>");
});

//connect my database
connectToDb().then( () => {
    console.log('Connected to DB');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch( () => {
    console.log('Connection failed')
})