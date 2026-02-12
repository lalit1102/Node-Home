import express from "express";
import upload from "../middleware/upload.js";      // add this
import Product from "../models/product.js";        // your Product model

const router = express.Router();

// GET /api/products — get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/products — create new product with image upload
router.post("/", upload.single("image"), async (req, res) => {

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
  try {
    const { name, description, category, price, offerPrice } = req.body;
    const image = req.file ? req.file.filename : null;

    const newProduct = new Product({
      name,
      description,
      category,
      price,
      offerPrice,
      image,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error saving product" });
  }
});

export default router;
