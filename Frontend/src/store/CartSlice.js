import { createSlice } from "@reduxjs/toolkit";

const getInitialStateFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : { items: [], sum: 0 };
};

const saveCartToLocalStorage = (cartState) => {
  localStorage.setItem("cart", JSON.stringify(cartState));
};

const CartSlice = createSlice({
  name: "cart",
  initialState: getInitialStateFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item[0].name === action.payload.name
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push([{ ...action.payload, quantity: 1 }]);
      }

      // After modifying the state, save it to local storage
      saveCartToLocalStorage(state);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item[0].name !== action.payload
      );

      // After modifying the state, save it to local storage
      saveCartToLocalStorage(state);
    },
    clearItem: (state) => {
      state.items.length = 0;
      state.sum = 0;

      // After modifying the state, save it to local storage
      saveCartToLocalStorage(state);
    },
    sumItemPrice: (state, action) => {
      state.sum += action.payload;

      // After modifying the state, save it to local storage
      saveCartToLocalStorage(state);
    },
    deductItemPrice: (state, action) => {
      state.sum -= action.payload;

      // After modifying the state, save it to local storage
      saveCartToLocalStorage(state);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item[0].name === action.payload);
      if (item) {
        item[0].quantity += 1;
      }

      // After modifying the state, save it to local storage
      saveCartToLocalStorage(state);
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item[0].name === action.payload);
      if (item && item[0].quantity > 1) {
        item[0].quantity -= 1;
      }

      // After modifying the state, save it to local storage
      saveCartToLocalStorage(state);
    },
  },
});

export const {
  addItem,
  removeItem,
  clearItem,
  sumItemPrice,
  deductItemPrice,
  increaseQuantity,
  decreaseQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;
