const mongoose = require("mongoose");


const resturantMenu = new mongoose.Schema({
  itemId: Number,
  itemName: String,
  price: Number,
  veg: Boolean,
});

const restaurants = new mongoose.Schema({
 
  name: { type: String, required: true },
  image: String,
  discount: String,
  cuisine: [String], // array of strings
  location: String,
  rating: Number,
  deliveryTime: String,
  priceRange: String,
  menu: [resturantMenu],
});

const Restaurant = mongoose.model("Restaurant", restaurants);
module.exports = Restaurant;