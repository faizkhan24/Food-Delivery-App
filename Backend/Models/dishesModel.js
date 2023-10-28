const mongoose = require("mongoose");

const dishesSchema = mongoose.Schema({
    name: { type: String, required: true }, // Fixed 'require' to 'required'
    varients: [],
    prices: [],
    category: { type: String, required: true }, // Fixed 'require' to 'required'
    image: { type: String, required: true }, // Fixed 'require' to 'required'
    description: { type: String, required: true } // Fixed 'require' to 'required'
}, {
    timestamps: true,
});

const dishesModel = mongoose.model('dishes', dishesSchema);

module.exports = dishesModel;
