const mongoose = require("mongoose");


const burSchema = new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    image:String,
    category:String,

});
const Burger = mongoose.model("Burger", burSchema);
module.exports = Burger;