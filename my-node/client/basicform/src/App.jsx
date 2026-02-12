import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductStore from "./pages/ProductStore";
import Login from "./components/Login";


const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add-product" element={<ProductStore/>} />
            <Route path="/login" element={<Login/>} />
           
            
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
