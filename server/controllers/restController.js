const data = require("../data");
const Restaurant = require("../models/restModel");
const Burger = require("../models/burModel");
const BrandName = require("../models/brandModel");
const pizzaFood = require("../models/pizzafoodModel");
const Menu = require("../models/menuModel");

const restData = async (req, res) => {
  try {
    const newRest = await Restaurant.find();
    // console.log(newRest)
    res.status(201).json({ message: "Restaurant saved!", data: newRest });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

async function senddata(req, res) {
  try {
    // console.log(req.body)
    console.log(data.resturant);
    let all = await Restaurant.insertMany(data.resturant);
    // console.log(all)
    res.send("ok");
  } catch (err) {
    console.log("send daata err", err);
    res.status(500).json({ err: err.message });
  }
}

const burgerData = async (req, res) => {
  try {
    const newRest = await Burger.find();
    // console.log(newRest)
    res.status(201).json({ message: "BurgerData saved!", data: newRest });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const burgerSave = async (req, res) => {
  console.log(data.burger);
  let all = await Burger.insertMany(data.burger);
  // console.log(all)
  res.send("Restaurant data saved successfully!");
};

const branData = async (req, res) => {
  try {
    let braName = await BrandName.find();
    console.log(braName);
    res.status(201).json({ msg: "BrandData Saved!", data: braName });
  } catch (err) {
    res.status(500).json({ error: err.msg });
  }
};

const brandDatasave =async(req,res)=>{
  try{
    let brandData1 = await BrandName.insertMany(data.Brand);
    console.log(brandData1);
    res.send("send data");
  }catch(err){
    console.log("send Data Error", err);
    res.status(500).json({err:err.message});
  }
}

const pizzaData=async(req,res)=>{
 try{
  let pizzadata = await pizzaFood.find();
  res.status(201).json({msg:"PizzaData Saved!", data: pizzadata});
 }catch(err){
  res.status(500).json({error : err.msg});
 }
}

const pizzaSave=async(req,res)=>{
 try{
   let pizzadataSave = await pizzaFood.insertMany(data.PizzaFood);
  // console.log(pizzadataSave);
  res.send("Restaurant data saved successfully!")
 }catch(err){
   console.log("send daata err", err);
   res.status(500).json({ err: err.message });
 }
}

const menuData=async(req,res)=>{
  try{
    let menudata = await Menu.find();
    res.status(201).json({msg:"MenuData saved!", data:menudata});
  }catch(err){
    res.status(500).json({error:err.msg});
  }
}

const menuSave=async(req,res)=>{
  try{
    let menudata2 = await Menu.insertMany(data.MENU);
    console.log(menudata2);
    res.send("send");
  }catch(err){
    console.log("send data error", err);
    res.status(500).json({err: err.message});
  }
}

module.exports = {
  restData,
  senddata,
  burgerData,
  burgerSave,
  branData,
  brandDatasave,
  pizzaData,
  pizzaSave,
  menuData,
  menuSave,
};
