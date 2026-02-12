import Product from "../models/product.js"

export const createProduct = async (req, res) => {
  try {
    const { name, description, category, price, offerPrice } = req.body;
    const image = req.file ? req.file.filename : null; // filename stored by multer

    //name — req.body.name category — req.body.category price — req.body.price offerPrice — req.body.offerPrice // description — req.body.description
    //req.file — multer automatically attach કરે છે upload થયેલી file ને
    //filename — filename "filename:" function માં define કર્યું હતું (જેમ Date.now()+originalname)

    const newProduct = new Product({
      name,
      description,
      category,
      price,
      offerPrice,
      image, // store image filename or later URL
    });

    await newProduct.save(); // mongodb ma save kare

    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ message: "uploaded field" });
  }
};
