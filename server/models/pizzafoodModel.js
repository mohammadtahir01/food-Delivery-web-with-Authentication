const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
    name:String,
    restaurants:String,
    image:String,
});

const pizzaFood = mongoose.model("pizzaFood", PizzaSchema);
module.exports = pizzaFood;