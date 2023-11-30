import { configureStore } from "@reduxjs/toolkit";
import dishes from "./DishesSlice";
import cartReducer from "./CartSlice";
import { registerUserReducer } from "../reducers/UserReducer";
import { loginUserReducer } from "../reducers/UserReducer";
import { placeOrderReducer } from "../reducers/orderReducer";

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : { items: [], sum: 0 };
};

const initialState = {
  loginUserReducer: {
    currentUser: currentUser,
  },
  cart: getCartFromLocalStorage(), // Initialize cart from local storage
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    dishes: dishes,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
  },
  preloadedState: initialState,
});


store.subscribe(() => {
  const cartState = store.getState().cart;
  localStorage.setItem('cart', JSON.stringify(cartState));
});

export default store;
