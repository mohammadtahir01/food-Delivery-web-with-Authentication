const mongoose = require("mongoose");


const CommntSchema = new mongoose.Schema({
    restId:String,
    comment:String,
    rating:{
        type:Number,
        min:1,
        max:5,
    },
    createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ComntSchema = mongoose.model("ConmtSchema", CommntSchema);
module.exports = ComntSchema;