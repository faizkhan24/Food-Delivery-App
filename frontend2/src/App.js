import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./screens/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RollsPage from "./screens/RollsPage";
import GoToTop from "./screens/GoToTop";
import Footer from "./components/Footer";
import BurgerPage from "./screens/BurgerPage";
import ContactPage from "./components/ContactPage";
import { Provider } from "react-redux";
import store from "./store/store";
import Module from "./components/Module";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  const [cart, setCart] = useState([]);
  
  // Function to update the cart state
  const updateCart = (newCart) => {
    setCart(newCart);
  };
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar
            cartItems={cart}
          />
          <Routes>
            <Route
              path="/"
              element={<Homepage  setTotalCartQuantity={updateCart}/>}
            />
            <Route path="/Rolls" element={<RollsPage />} />
            <Route path="/Contact Us" element={<ContactPage />} />
            <Route path="/Register" element={<RegisterScreen />} />

          </Routes>
          <Footer />
          <GoToTop />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
