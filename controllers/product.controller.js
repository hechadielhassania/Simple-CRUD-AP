const Product = require('../models/product.model')

//Get All Products
const getProducts = async (req, res) => {
    try {
        const products =  await Product.find({});
        res.status(200).json(products);
  
      } catch (error) {
          res.status(500).json({message: error.message});
      }
}
//Get a Specific Product
const getSpecificProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product =  await Product.findById(id);
        res.status(200).json(product);
      } catch (error) {
          res.status(500).json({message: error.message});
      }
}
//Add a Product
const addProduct = async (req, res) => {
    try {
        const product =  await Product.create(req.body);
        res.status(200).json(product);
  
      } catch (error) {
          res.status(500).json({message: error.message});
      }
}
//Update a Product
const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: 'Product not found'})
        }
        const updatedproduct = await Product.findById(id);
        res.status(200).json(updatedproduct);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
//Delete a Product
const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: 'Product not found'})
        }
        res.status(200).json('Product Deleted successfully');
   } catch (error) {
        res.status(500).json({message: error.message});
   }
}

module.exports = {
    getProducts,
    getSpecificProduct,
    updateProduct,
    addProduct,
    deleteProduct
}