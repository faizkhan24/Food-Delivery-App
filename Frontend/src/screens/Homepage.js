import React, { useState } from "react";
import {
  Home,
  burger,
  pizzas,
  rolls,
  SouthInd,
  sandwich,
  pasta,
  chinese,
  iceCream,
  cake,
} from "../itemsData";
import Module from "../components/Module";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";
import Filter from "../components/Filter";

export default function Homepage({ setTotalCartQuantity }) {
  const [data, setData] = useState(Home);
  const [loading, setLoading] = useState(false);
  const { cartState, dispatch } = useCart();

  const handleAddToCart = (item) => {
    // Dispatch an action to add the item to the cart
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const handleRemoveFromCart = (item) => {
    // Dispatch an action to remove the item from the cart
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const handleBurgerClick = () => {
    setLoading(true);
    setTimeout(() => {
      setData(burger);
      setLoading(false);
    }, 2000);
  };

  const handlePizzaClick = () => {
    setLoading(true);
    setTimeout(() => {
      setData(pizzas);
      setLoading(false);
    }, 2000);
  };

  const handleRollsClick = () => {
    setLoading(true);
    setTimeout(() => {
      setData(rolls);
      setLoading(false);
    }, 2000);
  };
  const handleSouthIndClick = () => {
    setLoading(true);
    setTimeout(() => {
      setData(SouthInd);
      setLoading(false);
    }, 2000);
  };
  const handleSandwichClick = () => {
    setLoading(true);
    setTimeout(() => {
      setData(sandwich);
      setLoading(false);
    }, 2000);
  };
  const handlePastaClick = () => {
    setLoading(true);
    setTimeout(() => {
      setData(pasta);
      setLoading(false);
    }, 2000);
  };
  const handleChineseClick = () => {
    setLoading(true);
    setTimeout(() => {
      setData(chinese);
      setLoading(false);
    }, 2000);
  };
  const handleIceCreamClick = () => {
    setLoading(true);
    setTimeout(() => {
      setData(iceCream);
      setLoading(false);
    }, 2000);
  };
  const handleCakeClick = () => {
    setLoading(true);
    setTimeout(() => {
      setData(cake);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="HomePage-section">
        <div className="slider">
          <figure>
            <img
              className="banners"
              src="./images/banner1.jpg"
              alt="Banner 2"
            />
            <Link to={"/Rolls"}>
              <img
                className="banners"
                src="./images/banner2.jpg"
                alt="Banner 2"
              />
            </Link>

            <img
              className="banners"
              src="./images/bannner3.jpg"
              alt="Banner 2"
            />


          </figure>
        </div>
        <div className="slider2">
        <figure>

        <img className="mobile-banner-img" src="./images/pizzaMobile.jpg"></img>

        </figure>

        </div>


    <Filter></Filter>
    
        {/* <img className="discount-banner" src="./images/bannner6.jpg"></img> */}
    
      </div>
    </>
  );
}
