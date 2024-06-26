require("dotenv").config()
// --------------> allows the {.env} file

const express = require("express");
const PORT = process.env.PORT || 3000
const connectToDb = require("./config/connectdb")
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route');
const categorieRoute = require('./routes/categorie.route');
const userRoute = require('./routes/user.route');

const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute);
app.use('/api/categories', categorieRoute);
app.use('/api/users', userRoute);

app.get('/', (req, res) => {
    res.send("<h1>Hello from Node API Server</h1>");
});

//connect my database
connectToDb().then( () => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch( () => {
    console.log('Connection failed')
})