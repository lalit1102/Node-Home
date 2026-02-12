import React, { useState } from "react";

const ProductStore = () => {
  const [productImage, setProductImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [offerPrice, setOfferPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productImage) return alert("Please select a product image");

    const formData = new FormData();
    formData.append("image", productImage);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("offerPrice", offerPrice);

    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      alert("Product added successfully!");
    } catch (err) {
      alert("Failed to upload product");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Image
            </label>
            {productImage ? (
              <img
                src={URL.createObjectURL(productImage)}
                alt="Preview"
                className="w-full h-48 object-cover rounded-lg mt-2"
              />
            ) : (
              <div className="mt-2 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-lg cursor-pointer hover:border-indigo-500">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setProductImage(e.target.files[0])}
                  className="absolute opacity-0 w-full h-full cursor-pointer"
                />
                <span className="text-gray-400">
                  Click to upload or drag and drop
                </span>
              </div>
            )}
          </div>

          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter product name"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              rows="4"
              placeholder="Product description"
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Select category</option>
              <option value="Electronics">Fruits</option>
              <option value="Clothing">Vegetables</option>
              <option value="Accessories">Grains</option>
              <option value="Accessories">Milk</option>
            </select>
          </div>

          {/* Price Fields */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="0"
                required
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Offer Price
              </label>
              <input
                type="number"
                value={offerPrice}
                onChange={(e) => setOfferPrice(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="0"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            ADD PRODUCT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductStore;
