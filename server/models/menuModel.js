const mongoose = require("mongoose");

const sizeSchema = new mongoose.Schema({
  key:String,
  label:String,
  price:String, // kept as string since you used "£21.90"
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
