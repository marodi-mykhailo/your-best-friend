const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const validations =require('../validation/user.validation')

router.get('/me', userController.allowIfLoggedIn, userController.getMe);

router.get('/user/:userId', userController.allowIfLoggedIn, userController.getUser);

router.get('/users', userController.allowIfLoggedIn, userController.getUsers);

router.post('/signup', validations.signInValidation, userController.signup);

router.post('/login', validations.logInValidation, userController.login);

router.put('/user/:userId', userController.allowIfLoggedIn, userController.updateUser);

router.delete('/user/:userId', userController.allowIfLoggedIn, userController.deleteUser);


module.exports = router;
