const express = require("express");
const route = express.Router();
const controllers = require("../controllers/restController");

route.get("/resturant", controllers.restData);
route.post('/senddata',controllers.senddata);
route.get("/burger", controllers.burgerData);
route.post("/sendburger", controllers.burgerSave);
route.get("/Brand", controllers.branData);
route.post("/brandSave",controllers.brandDatasave);
route.get("/Pizza&Food",controllers.pizzaData);
route.post("/pizzaData",controllers.pizzaSave);
route.get("/MENU", controllers.menuData);
route.post("/sendMenu", controllers.menuSave);


module.exports = route;


