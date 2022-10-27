import "./sass/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import ContactForm from "./pages/Contact/ContactForm";
import SingleShoe from "./pages/Singleproduct/SingleShoe";
import SingleShirt from "./pages/Singleproduct/SingleShirt";
import SingleJacket from "./pages/Singleproduct/SingleJacket";
import CartContext from "./components/context/CartContext";

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/shoe/:id" element={<SingleShoe />} />
          <Route path="/shirt/:id" element={<SingleShirt />} />
          <Route path="/jacket/:id" element={<SingleJacket />} />
        </Routes>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
