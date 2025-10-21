const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    name:String,
    location:String,
    date:String,
    rating:Number,
    review:String,
    profileImage:String,
});

const Reviews = mongoose.model("Reviews", reviewSchema);
module.exports = Reviews;