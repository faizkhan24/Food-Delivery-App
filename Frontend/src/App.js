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
import LogoutPage from "./components/LogoutPage";
import CartPage from "./components/CartPage";
import Filter from "./components/Filter";
import filterData from "./FilterData";
import PizzaPage from "./screens/PizzaPage";
import { SouthInd } from "./itemsData";
import SandwichPage from "./screens/SandwichPage";
import PastaPage from "./screens/PastaPage";
import ChinesePage from './screens/ChinesePage'
import IceCreamPage from './screens/IceCreamPage'
import CakesPage from './screens/CakesPage'
function App() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState(filterData[0].title);

  // Function to update the cart state
  const updateCart = (newCart) => {
    setCart(newCart);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogoutPage />} />
        </Routes>
      </BrowserRouter>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar cartItems={cart} />
          <Routes>
            <Route
              path="/Homepage"
              element={<Homepage setTotalCartQuantity={updateCart} />}
            />
            <Route path="/Rolls" element={<RollsPage />} />
            <Route path="/Contact Us" element={<ContactPage />} />
            <Route path="/Cartpage" element={<CartPage/>} />
            <Route path="/BurgerPage" element={<BurgerPage/>} />
            <Route path="/PizzaPage" element={<PizzaPage/>} />
            <Route path="/southInd" element={<SouthInd/>} />
            <Route path="/sandwich" element={<SandwichPage/>} />
            <Route path="/pasta" element={<PastaPage/>} />
            <Route path="/chinese" element={<ChinesePage/>} />
            <Route path="/icecream" element={<IceCreamPage/>} />
            <Route path="/cake" element={<CakesPage/>} />
            
            
          
      
          </Routes>
          
      
          <Footer />
          <GoToTop />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
