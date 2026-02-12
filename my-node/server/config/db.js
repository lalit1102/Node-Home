//const mongoose = require("mongoose")

import mongoose from "mongoose";  // aa esm es6 ma use thay che?

export const connectDB = async ()=>{

  try{
    await mongoose.connect("mongodb://localhost:27017/auth")
    console.log("monogodb connect sucessfully....");
    
  } catch (error){
    console.error("database connection error",error)
  }
  

}