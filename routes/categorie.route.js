const express = require('express');
const router = express.Router();
const Categorie = require('../models/categorie.model');
const categorieController = require('../controllers/categorie.controller')

router.get('/', categorieController.getCategories);
router.get('/:id', categorieController.getSpecificCategorie);
router.post('/', categorieController.addCategorie);
router.put('/:id', categorieController.updateCategorie);
router.delete('/:id', categorieController.deleteCategorie);

module.exports = router;