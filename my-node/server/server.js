//const express = require("express")  
import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js"

import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
const app = express()
connectDB();

app.use(cors());

app.use("/uploads", express.static("uploads"));
app.use(express.json());  //aa mare fronted thi data ave che tene read karva mate json ma req.body parses JSON data

//app.use(express.urlencoded({ extended: true })); //firstName=John&lastName=Doe&email=john%40example.com  maro data form submit pasi encoded ma ave che parses data from HTML form submissions

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
