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
    return state.dishes; 
  });

  useEffect(() => {
  
    dispatch(getAllData());
  }, []); 

  
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
