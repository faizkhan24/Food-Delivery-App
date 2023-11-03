import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../components/ContactPage.css";
import "../screens/CartPage.css";

import {
  clearItem,
  decreaseQuantity,
  deductItemPrice,
  increaseQuantity,
  removeItem,
  sumItemPrice,
} from "../store/CartSlice";
import Checkout from "../components/Checkout";

const CartPage = (cartItems, cartItemsName) => {
  const [cart, setCart] = useState(false);
  const [totalCartQuantity, setTotalCartQuantity] = useState(0);

  const dispatch = useDispatch();
  const CartItems = useSelector((store) => store.cart.items);

  const handleDltItem = (name, price) => {
    dispatch(removeItem(name));
    dispatch(deductItemPrice(price));
  };

  const increaseCount = (name, price) => {
    dispatch(increaseQuantity(name));
    dispatch(sumItemPrice(price));
  };

  const decreaseCount = (name, price) => {
    const item = CartItems.find((item) => item[0].name === name);
    if (item && item[0].quantity > 1) {
      dispatch(decreaseQuantity(name));
      dispatch(deductItemPrice(price));
    }
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    CartItems.forEach((item) => {
      const item2 = item[0];
      const prices = item2.prices[0].small;
      subtotal += prices * item2.quantity;
    });
    return subtotal;
  };

  return (
    <>
      {/* Using Contact Us page Css  */}
      <div className="contactUs-wrapper">
        <div className="contactUs-container">
          <h1 className="contact-heading">Cart</h1>
          <p className="contact-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="navto-home-contact">
            <span>Home</span>
            <span>/</span>
            <span>Cart</span>
          </div>
          <img
            className="olive-img"
            src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/black-jamun.png"
          ></img>
          <img
            className="onion-img"
            src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/onion.png"
          ></img>
          <img
            className="tamato-img"
            src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/tamato.png"
          ></img>
          <img
            className="leaf-img"
            src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/banner-leaf.png"
            style={{ position: "absolute" }}
          ></img>
        </div>
        
        <div className="cart-section">
          <div className="products-image-names">
            <p>Products</p>
          </div>
          <div>
            <p>Price</p>
          </div>
          <div>
            <p>Quantity</p>
          </div>
          <div>
            <p>Remove</p>
          </div>
          
          <div className="cart-wrapper">
            {CartItems &&
              CartItems.map((item) => {
                console.log("item", item);
                const item2 = item[0];
                console.log("item2", item2);
                const { id, name, category, image, description, quantity } =
                  item2;

                const prices = item2.prices[0].small;

                return (
                  <div className="cart-container-item" key={id}>
                    <div className="cart-items-desc">
                    
                      <div className="">
                        <img src={image} alt="food" className="items-image" />
                      </div>
                      <div className="cart-items">
                        <div className="items-name">{name}</div>
                        <div className="items-price">₹ {prices}</div>
                        <div className="quantity-btn">
                          <span
                          className="decreament-btn"
                            onClick={() => {
                              decreaseCount(name, prices);
                            }}
                          >
                            -
                          </span>
                          <div className="quantity">{quantity}</div>
                          <span
                            className="increament-btn"
                            onClick={() => {
                              increaseCount(name, prices);
                            }}
                          >
                            +
                          </span>
                        </div>
                        <div
                          onClick={() => handleDltItem(name, prices * quantity)}
                          className="remove-btn"
                        >
                          <img className="remove-btn-img" src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/delete.png"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
           </div>
          <div className="checkout-container">
            <h2 className="cart-total-heading">Cart Total</h2>
            <div className="subtotal-container">
              <p className="items-subtotal-para">Items(s) Subtotal</p>
              <p> ₹{calculateSubtotal()}</p>
            </div>
            <div className="shipping-container">
              <p>Shipping Cost</p>
              <p>₹100</p>
            </div>
            <div className="order-container">
              <p>Order Total</p>
              <p>₹100</p>
            </div>
            {/* <div className="checkout-btn-container" >
              <button className="checkout-btn">PROCEED TO CHECKOUT</button>
            </div> */}
            <Checkout  calculateSubtotal={calculateSubtotal}></Checkout>
          </div>
       
      </div>
    </>
  );
};

export default CartPage;
