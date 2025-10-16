const mongoose = require("mongoose");

const sizeSchema = new mongoose.Schema({
  key:String,
  label:String,
  price:Number, 
});

const menuSchema = new mongoose.Schema({
  category:String,
  name:String,
  description:String,
  sizes: [sizeSchema], // nested array of sizes
  rating:Number,
  image:String,
});

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
