const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const userController = require('../controllers/user.controller')

router.get('/', userController.getUsers);
router.get('/:id', userController.getSpecificUser);
router.post('/', userController.addUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;