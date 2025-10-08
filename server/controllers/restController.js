const Restaurant = require("../models/restModel");

const restData=async(req,res)=>{
//    console.log(req.body);
//    res.send("ok");
   try {
    const newRest = await Restaurant.create(req.body);
    res.status(201).json({ message: "Restaurant saved!", data: newRest });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


module.exports = {
    restData,
}