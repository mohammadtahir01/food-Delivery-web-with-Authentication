const express = require("express");
const app = express();
const cors = require("cors");
const restRoute = require("./routes/restRoute");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/moinuddin").then(()=>{
    console.log("mongoose connected !");
}).catch((err)=>{
     console.log("MongoDB is not connect!",err)
})    

app.use(cors());
app.use(express.json());

app.use("/", restRoute);

app.listen(3000, ()=>{
    console.log("server is running on 3000 !")
})