const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');
const productController = require('../controllers/product.controller')

router.get('/', productController.getProducts);
router.get('/:id', productController.getSpecificProduct);
router.post('/', productController.addProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;