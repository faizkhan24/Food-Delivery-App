import React, { useState, useRef, useEffect } from "react";
import "../components/style.css";
import "../App.css";
import "../components/Cart.css";
import { Link, NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";
import CartPage from "../screens/CartPage";
import Loading from "../screens/Loading";
import { burger } from "../itemsData";
import DropdownMenu from "./DropdownMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  clearItem,
  decreaseQuantity,
  deductItemPrice,
  increaseQuantity,
  removeItem,
  sumItemPrice,
} from "../store/CartSlice";
import RegisterScreen from "../screens/RegisterScreen";
import LoginModal from "../screens/LoginModal";
import LogoutToggle from "./LogoutToggle";

export default function Navbar({ cartItems, cartItemsName }) {
  const [color, setColor] = useState(false);
  const [cart, setCart] = useState(false);
  const [opendropDown, setDropDown] = useState(false);
  const [totalCartQuantity, setTotalCartQuantity] = useState(0);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  const handleRegistrationClick = () => {
    setShowRegistrationModal(!showRegistrationModal);
    document.body.style.overflow = showRegistrationModal ? "auto" : "hidden";
  };

  const handleLoginButtonClick = () => {
    setShowRegistrationModal(true);
    document.body.style.overflow = "hidden";
  };
  const dispatch = useDispatch();
  const CartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearItem());
  };

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

  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setDropDown(true);
  };

  const handleMouseLeave = () => {
    setDropDown(false);
  };

  const handleLoginClick = () => {
    setShowRegistrationModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCartClick = () => {
    setCart(true);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    if (CartItems) {
      const newTotalCartQuantity = CartItems.reduce(
        (total, item) => total + item[0].quantity,
        0
      );
      setTotalCartQuantity(newTotalCartQuantity);
    }
  }, [CartItems]);

  return (
    <>
      {/* for Login button  */}
      {/* <div className={`Modal ${color ? "showModal" : "hideModal"}`}>
        <div className="login-box">
          <button
            className="back-btn"
            onClick={() => {
              setColor(false);
              document.body.style.overflow = "auto";
            }}
          >
            <img src="https://www.burgerking.in/static/media/left-arrow.e2f47880.svg"></img>
          </button>

          <img className="login-logo" src="./images/logo03.png" alt="Logo" />

          <div className="login-heading">
            <p><span>
            </span></p>
          </div>
          <div className="number-input">
            <input type="email"
              className="input-number-field"
              placeholder="Enter Emal Address"
              required
            ></input>
          </div>
          <div className="number-input email-field">
            <input type="password"
              className="input-number-field email"
              placeholder="Enter Password"
              required
            ></input>
          </div>
          <button className="login-btn login">LOGIN</button>
          <p className="or-text">OR</p>
          <div className="login-google-facebook">
            <div className="google-btn-container">
              <img
                className="google-img"
                src="data:image/png;base64,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"
              ></img>
              <button className="google-btn">Google</button>
            </div>
            <div className="github-btn-container">
            
              <img
                className="github-img"
               
                src="../images/Github.png"
              ></img>
              <button className="github-btn">Github</button>
            </div>
          </div>
          <div className="registration-field">
             <p onClick={() => setShowRegistrationModal(true)}>Click Here To Register</p>
           
          </div>
          
          <footer className="login-footer">
            <div className="footer-container">
              <p className="footer-para">
                By continuing, you agree for our Terms & Conditions, Privacy
                Policy, and Promotional T&C
              </p>
            </div>
          </footer>
        </div>
      </div> */}

      {/* for cart button  */}
      <div className={`Modal ${cart ? "showModal" : "hideModal"}`}>
        <div className="cart-box">
          <div className="cart-head">
            <h2 className="cart-heading">SHOPPING CART</h2>
            <button
              className="cart-exit-btn"
              onClick={() => {
                setCart(false);
                document.body.style.overflow = "auto";
              }}
            >
              X
            </button>
          </div>
          <div className="cart-item-wrapper">
            {CartItems &&
              CartItems.map((item) => {
                console.log("item", item);
                const item2 = item[0];
                console.log("item2", item2);
                const { id, name, category, image, description, quantity } =
                  item2;

                const prices = item2.prices[0].small;

                return (
                  <div className="cart-item-container" key={id}>
                    <div className="cart-item-desc">
                      <div className="cart-item-desc-img">
                        <img src={image} alt="food" className="cart-item-img" />
                      </div>
                      <div className="cart-item-desc">
                        <div className="cart-item-name">{name}</div>
                        <div className="item-price">₹ {prices}</div>
                        <div className="cart-item-btn">
                          <span
                            className="quantity-decrease-btn"
                            onClick={() => {
                              decreaseCount(name, prices);
                            }}
                          >
                            -
                          </span>
                          <div className="quantity-no">{quantity}</div>
                          <span
                            className="quantity-increase-btn"
                            onClick={() => {
                              increaseCount(name, prices);
                            }}
                          >
                            +
                          </span>
                        </div>
                        <div
                          onClick={() => handleDltItem(name, prices * quantity)}
                          className="item-delete-btn"
                        >
                          <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/delete.png"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <footer className="cart-footer">
            <div className="price-container">
              <p>Subtotal:</p>
              <p> ₹{calculateSubtotal()}</p>
            </div>
            <p className="tax-para">
              Taxes and shipping calculated at checkout
            </p>
            <div className="cart-footer-btn">
              <button className="viewCart-btn">VIEW CART</button>
              <button className="checkout-btn">CHECKOUT</button>
            </div>
          </footer>
        </div>
      </div>

      <div className="Navbar-comp">
        <div className="nav-container">
          <nav className="nav-bar">
            <div className="logo-container">
              <img className="logo" src="./images/logo02.png" alt="Logo" />
            </div>
            <div className="nav-items-container">
              <Searchbar />
              <ul className="nav-items">
                <NavLink
                  style={{ textDecoration: "none" }}
                  to="/"
                  exact
                  activeClassName="active-link"
                >
                  <li className="item-with-div">
                    HOME<div className="div-style"></div>
                  </li>
                </NavLink>

                <li className="item-with-div">
                  SHOP<div className="div-style"></div>
                </li>
                <li
                  className="item-with-div"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  MORE<div className="div-style"></div>
                </li>
                {opendropDown && <DropdownMenu ref={dropdownRef} />}

                <NavLink style={{ textDecoration: "none" }} to={"/Contact Us"}>
                  <li className="item-with-div">
                    CONTACT<div className="div-style"></div>
                  </li>
                </NavLink>

                {currentUser ? (
                 <LogoutToggle></LogoutToggle>
                ) : (
                  <li className="item-with-div">
                    <button onClick={handleLoginClick} className="login-btn">
                      LOGIN
                    </button>
                  </li>
                )}
              </ul>

              {/* Login Modal */}
              {/* <LoginModal
                showLoginModal={showLoginModal}
                closeLoginModal={() => setShowLoginModal(false)}
              /> */}

              <div className="cart-container">
                <div className="cart-count">{totalCartQuantity}</div>

                <img
                  onClick={handleCartClick}
                  className="cart"
                  src="./images/cart-icon-2.png"
                  alt="Cart"
                />
              </div>

              <img
                className="favourite"
                src="./images/Heart.png"
                alt="Favorite"
              />
            </div>
            {/* Registration Modal */}
         
          </nav>
        </div>
      </div>
    </>
  );
}
