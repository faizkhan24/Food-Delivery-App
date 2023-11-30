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
        setShowQuantityControls(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const addToCart = () => {
    setTotalCartQuantity((prev) => prev + 1);
    setShowQuantityControls(true);
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
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setShowQuantityControls(false);
    }
  };

  if (!pizza || !pizza.image) {
    return null; 
  }

  return (
    <div className="pizza-container">
      <span>
        <HeartAnimation />
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
              <button
                className="increment"
                onClick={() => handleAddItem(pizza)}
              >
                +
              </button>
            </div>
          ) : (
            <button className="btn" onClick={() => handleAddItem(pizza)}>
              ADD +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
