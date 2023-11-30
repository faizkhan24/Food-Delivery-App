import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Items from "./Items";
import ToggleComponent from "./ToggleComponent";
import { getAllData, filterDishes } from "../store/DishesSlice";
import "../components/search.css";

const Module = ({ setTotalCartQuantity }) => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");

  const datas = useSelector((state) => {
    console.log(state.dishes);
    return state.dishes; // Access the dishes slice
  });

  useEffect(() => {
    // Dispatch the action to get all data when the component mounts
    dispatch(getAllData());
  }, []); // Empty dependency array ensures this runs only once

  const handleSearch = () => {
    // Dispatch the action to filter data based on searchKey
    dispatch(filterDishes(searchKey));
  };

  const getFilteredDishes = () => {
    if (datas && datas.dishes) {
      return datas.dishes.filter((dish) =>
        dish.name.toLowerCase().includes(searchKey.toLowerCase())
      );
    }
    return [];
  };

  // Make sure datas is defined before mapping over it
  if (datas) {
    const filteredDishes = getFilteredDishes();

    return (
      <div>
        <div>
        <input
        value={searchKey}
        onChange={(e) => {
          setSearchKey(e.target.value);
        }}
        id="search-box"
        type="text"
        className="search-box"
        name="search"
        placeholder="What are you looking for?"
      />
      <label htmlFor="search-box">
        <img
          className="search-icon"
          src="./images/search-icon.png"
          alt="Search"
          onClick={() => dispatch(filterDishes(searchKey))}
        />
      </label>
      <input type="submit" id="search-submit" />
        </div>
        <div className="card-section">
          {filteredDishes.length > 0 ? (
            filteredDishes.map((dish) => (
              <div className="custom-column" key={dish.id}>
                <div className="items-container">
                  <Items
                    pizza={dish}
                    setTotalCartQuantity={setTotalCartQuantity}
                  />
                </div>
              </div>
            ))
          ) : (
            <p>No dishes found matching the search criteria.</p>
          )}
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
