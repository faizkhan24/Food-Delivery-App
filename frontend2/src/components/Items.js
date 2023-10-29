import React, { useState, useEffect, useRef } from "react";
import HeartAnimation from "../screens/HeartAnimation";
import { useDispatch } from "react-redux";
import { addItem, sumItemPrice } from "../store/CartSlice";

export default function Items({ pizza, setTotalCartQuantity }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [showQuantityControls, setShowQuantityControls] = useState(false);

  const quantityControlsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        quantityControlsRef.current &&
        !quantityControlsRef.current.contains(event.target)
      ) {
        // Click occurred outside the quantity controls
        setShowQuantityControls(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const addToCart = () => {
    // Implement the logic to add the selected quantity and variant to the cart here
    // For now, let's just display the selected values in the console

    setTotalCartQuantity((prev) => prev + 1);

    // console.log("Added to cart:", quantity, varient);
    setShowQuantityControls(true); // Show quantity controls after adding to cart
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    if (!showQuantityControls) {
      setShowQuantityControls(true);
    }
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    dispatch(sumItemPrice(item.price));
    // console.log("handleitme", item);
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      // If quantity is 1, hide the quantity controls
      setShowQuantityControls(false);
    }
  };

  return (
    <div className="pizza-container">
      <span>
        {" "}
        <HeartAnimation />{" "}
      </span>
      <img src={pizza.image} className="img-fluid" alt={pizza.name} />

      <div className="head-container">
        <p className="item-heading">{pizza.name}</p>
      </div>

      <p className="item-desc">{pizza.description}</p>

      <div className="flex-container2">
        <div className="price">
          <p>₹{pizza.prices[0][varient] * quantity}/-</p>
        </div>
        <div className="add-to-cart">
          {showQuantityControls ? (
            <div ref={quantityControlsRef} className="quantity-controls">
              {/* <button className="decrement" onClick={decrementQuantity}>
                -
              </button> */}
              {/* <span className="quantity">{quantity}</span> */}
              <button
                className="increment"
                onClick={() => handleAddItem(pizza)}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="btn"
              onClick={() => handleAddItem(pizza)}
            >
              ADD +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
