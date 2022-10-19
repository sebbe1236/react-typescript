import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import ContactForm from "./pages/Contact/ContactForm";
import SingleProduct from "./pages/Singleproduct/SingleProduct";
import SingleShoe from "./pages/Singleproduct/SingleShoe";
import SingleShirt from "./pages/Singleproduct/SingleShirt";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/shoes/:id" element={<SingleShoe />} />
        <Route path="/shirts/:id" element={<SingleShirt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
