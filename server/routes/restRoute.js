// const express = require("express");
// const route = express.Router();
// const controllers = require("../controllers/restController");

// route.get("/resturant", controllers.restData);


// module.exports = route;


// restRoute.js
const express = require("express");
const route = express.Router();
const controllers = require("../controllers/restController");
const Restaurant = require("../models/restModel");

// ✅ Save data (POST)
route.post("/resturant", controllers.restData);

// ✅ Get all restaurant data (GET)
route.get("/resturant", async (req, res) => {
  try {
    const allRest = await Restaurant.find();
    res.json(allRest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = route;
