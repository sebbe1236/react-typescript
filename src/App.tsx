import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import ContactForm from "./pages/Contact/ContactForm";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
