const express = require('express');
const router1 = express.Router();
const loginController = require('../controller/user.control');

// User Registration
router1.post('/', loginController.store);

// User Login
router1.post('/login', loginController.login);

// Get all users
router1.get('/', loginController.index);

module.exports = router1;
