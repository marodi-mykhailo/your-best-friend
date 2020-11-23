const Pet = require('../models/petModel')
const responseBody = require('../helper/response')

exports.createPet = async (req, res, next) => {
    try {
        const newPet = new Pet({...req.body})
        await newPet.save();
        res.status(200).json(responseBody(0, newPet, 'Pet has been created'))
    } catch (error) {
        next(error)
    }
}

exports.updatePet = async (req, res, next) => {
    try {
        const update = req.body
        const petId = req.params.petId;
        await Pet.findByIdAndUpdate(petId, update);
        const updatedPet = await Pet.findById(petId)
        res.status(200).json(
            responseBody(0, updatedPet, 'Pet has been updated'));
    } catch (error) {
        debugger
        next(error)
    }
}

exports.getAllPets = async (req, res, next) => {
    try {
        const pets = await Pet.find({})
        res.status(200).json(responseBody(0, pets, "Success"))
    } catch (error) {
        next(error)
    }
}

exports.getPet = async (req, res, next) => {
    try {
        const petId = req.params.petId
        const pet = await Pet.findById(petId)
        res.status(200).json(responseBody(0, pet, "Success"))
    } catch (error) {
        next(error)
    }
}

exports.deletePet = async (req, res, next) => {
    try {
        const petId = req.params.petId
        await Pet.findByIdAndDelete(petId);
        res.status(200).json(responseBody(0, {}, "Pet has been delete"))
    } catch (error) {
        next(error)
    }
}

