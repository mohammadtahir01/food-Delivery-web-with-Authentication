const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
    name:String,
    image:String,
});

const BrandName = mongoose.model("BrandName",brandSchema);
module.exports = BrandName;