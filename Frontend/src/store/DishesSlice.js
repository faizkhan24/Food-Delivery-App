import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Action
export const getAllData = createAsyncThunk("dishes", async () => {
    const response = await fetch("http://localhost:3000/api/dishes/getalldishes");
    const result = await response.json();
    return result;
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
