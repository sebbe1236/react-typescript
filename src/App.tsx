import "./sass/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import RootLayout from "./components/layout/RootLayout";
import ContactForm from "./pages/Contact/ContactForm";
import Cart from "./pages/Cart/Cart";
import SingleJacket from "./pages/Singleproduct/SingleJacket";
import Signup from "./pages/Loginandsignup/Signup";
import Login from "./pages/Loginandsignup/Login";
import AuthProvider from "./components/context/Context";
import ErrorMessage from "./components/Errormessages/ErrorMessage";
import "./App.css";
import { CartProvider } from "react-use-cart";

import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorMessage />}>
      <Route index element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/jacket/:id" element={<SingleJacket />} />
    </Route>
  )
);

function App() {
  return (
    <CartProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </CartProvider>
  );
}

export default App;
