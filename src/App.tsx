import "./sass/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import ContactForm from "./pages/Contact/ContactForm";
import Cart from "./pages/Cart/Cart";
import SingleJacket from "./pages/Singleproduct/SingleJacket";
import Signup from "./pages/Loginandsignup/Signup";
import Login from "./pages/Loginandsignup/Login";
import AuthProvider from "./components/context/Context";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/jacket/:id" element={<SingleJacket />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
