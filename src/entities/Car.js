import mongoose from "../database/index";

const CarSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    version: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    mileage: {
        type: Number, 
        required: true
    },

    type_of_exchange: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

}, {
    timestamps: true
});

const Car = mongoose.model('Car', CarSchema);

export default Car;