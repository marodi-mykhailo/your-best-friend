const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const petController = require('../controllers/petController')
const validations =require('../validation/user.validation')

////////////// AUTH ROUTES /////////////////////////

router.get('/me', userController.allowIfLoggedIn, userController.getMe);

router.get('/user/:userId', userController.allowIfLoggedIn, userController.getUser);

router.get('/users', userController.allowIfLoggedIn, userController.getUsers);

router.post('/signup', validations.signInValidation, userController.signup);

router.post('/login', validations.logInValidation, userController.login);

router.put('/user/:userId', userController.allowIfLoggedIn, userController.updateUser);

router.delete('/user/:userId', userController.allowIfLoggedIn, userController.deleteUser);

////////////// PET ROTES ///////////////////////////

router.get('/pets', userController.allowIfLoggedIn, petController.getAllPets);

router.get('/pet/:petId', userController.allowIfLoggedIn, petController.getPet);

router.post('/pet', userController.allowIfLoggedIn, petController.createPet)

router.put('/pet/:petId', userController.allowIfLoggedIn, petController.updatePet);

router.delete('/pet/:petId', userController.allowIfLoggedIn, petController.deletePet);



module.exports = router;
