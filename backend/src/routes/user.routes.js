const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');

// Route to create new 'User': POST http://localhot:3000/api/v1/register
router.post('/register', userController.registerNewUser);

router.post('/login', userController.loginUser);

router.get('/user-profile', userController.returnUserProfile);

module.exports = router;