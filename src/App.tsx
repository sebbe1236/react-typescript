import "./sass/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import NavBar from "./components/layout/NavBar";
import ContactForm from "./pages/Contact/ContactForm";
import Cart from "./pages/Cart/Cart";
import SingleJacket from "./pages/Singleproduct/SingleJacket";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/jacket/:id" element={<SingleJacket />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
