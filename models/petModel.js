const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        min: [10, "Too few words"],
        max: 500
    },
    sex: {
        type: String,
        enum: ["male", "female"],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["dogs", "cats", "other"],
        default: "other",
    },
    image: {
        type: String,
    },
    sterilization: {
        type: String,
        default: "unknown",
        enum: ["yes", "no", "unknown"]
    },
    isToiledTrained: {
        type: String,
        default: "unknown",
        enum: ["yes", "no", "unknown"]
    },
    vaccinations: {
        type: String,
        default: "unknown",
        enum: ["yes", "no", "unknown"]
    },
    age: {
        type: String,
        default: "unknown",
        enum: ["lessThenMonth", "year", "moreThenYear", "unknown"]
    },
    isDisease: {
        type: String,
        default: "notSick",
        enum: ["sick", "notSick", "invalid"]
    }
})

const Pet = mongoose.model('pet', PetSchema);

module.exports = Pet;
