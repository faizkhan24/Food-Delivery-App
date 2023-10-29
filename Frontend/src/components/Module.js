import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Items from "./Items";
import ToggleComponent from "./ToggleComponent";
import { getAllDishes } from "../actions/dishesAction";
import { getAllData } from "../store/DishesSlice";

const Module = ({ data, setTotalCartQuantity }) => {
  const dispatch = useDispatch();

  const datas = useSelector((state) => {
    console.log(state.dishes);
    return state.dishes; // Access the dishes slice
  });

  useEffect(() => {
    // Dispatch the action when the component mounts
    dispatch(getAllData());
  }, []); // Empty dependency array ensures this runs only once

  // Make sure datas is defined and has a 'dishes' property before mapping over it
  if (datas && datas.dishes) {
    return (
      <div>
        <div className="card-section">
          {datas.dishes.map((item) => (
            <div className="custom-column" key={item.id}>
              <div className="items-container">
                <Items pizza={item} setTotalCartQuantity={setTotalCartQuantity} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
};

export default Module;
