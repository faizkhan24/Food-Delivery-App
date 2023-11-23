import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Action
export const getAllData = createAsyncThunk("dishes", async () => {

    const response = await fetch("https://food-delivery-app-lyart.vercel.app/api/dishes/getalldishes");
    const result = await response.json();
    console.log(result)
    return result;
});
export const filterDishes = createAsyncThunk("dishes/filter", async (searchKey) => {
    try {
      const response = await fetch("https://food-delivery-app-lyart.vercel.app/api/dishes/getalldishes");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log(filterDishes)
      const dishes = await response.json();
  
      // Ensure that 'dishes' is an array before filtering
      if (Array.isArray(dishes)) {
        const filteredDishes = dishes.filter((dish) =>
          dish.name.toLowerCase().includes(searchKey.toLowerCase())
        );
      
        return filteredDishes;
      } else {
        throw new Error("Data is not in the expected format");
      }
    } catch (error) {
      // Handle errors appropriately
      throw error;
    }
  });
  

export const dishes = createSlice({
    name: 'dishes',
    initialState: {
        dishes: [],
        loading: false,
        error: null,
    },

    extraReducers: {
        [getAllData.pending]: (state) => {
            state.loading = true;
        },
        [getAllData.fulfilled]: (state, action) => {
            state.loading = false;
            state.dishes = action.payload;
        },
        [getAllData.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export default dishes.reducer;