// // CartContext.js
// import React, { createContext, useContext, useReducer } from "react";

// // Define the initial state of the cart
// const initialState = {
//   items: [],
//   totalQuantity: 0,
// };

// // Create a context for the cart
// const CartContext = createContext();

// // Define the cart reducer function
// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       // Handle adding items to the cart and updating totalQuantity
//       // Update the state accordingly
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//         totalQuantity: state.totalQuantity + 1,
//       };
//     case "REMOVE_FROM_CART":
//       // Handle removing items from the cart and updating totalQuantity
//       // Update the state accordingly
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload.id),
//         totalQuantity: state.totalQuantity - 1,
//       };
//     // Add more cases for other cart actions
//     default:
//       return state;
//   }
// };

// // Create a CartProvider component to wrap your app with the context
// export const CartProvider = ({ children }) => {
//   const [cartState, dispatch] = useReducer(cartReducer, initialState);

//   return (
//     <CartContext.Provider value={{ cartState, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Create a custom hook to access the cart context
// export const useCart = () => {
//   return useContext(CartContext);
// };
