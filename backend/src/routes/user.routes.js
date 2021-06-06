const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');

// Route to create new 'User': POST http://localhot:8080/api/v1/register
router.post('/register', userController.registerNewUser);

// Route to login a 'User': POST http://localhot:8080/api/v1/login
router.post('/login', userController.loginUser);

// Route to get the profile of a 'User': GET http://localhot:8080/api/v1/user-profile
router.get('/user-profile', userController.returnUserProfile);

module.exports = router;