require("dotenv").config();

const express =require("express");
const mongoose=require("mongoose");

const PORT=process.env.PORT||3002;
const url=process.env.MONGO_URL;
// console.log(url);


const app=express();

app.listen(PORT,()=>{
    console.log("app started");
    mongoose.connect(url);
    console.log("DB Connected!");

})