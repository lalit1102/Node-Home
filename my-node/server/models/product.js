// models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  price: { type: Number },
  offerPrice: { type: Number },
  image: { type: String }
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
