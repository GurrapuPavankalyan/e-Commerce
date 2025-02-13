import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        item: [],
        filteredProducts: [],
        showFilteredProducts: null,
    },
    reducers: {
        addProduct: (state, action) => {
            state.item.push(action.payload);
        },
        addFilteredProducts: (state, action) => {
            state.filteredProducts.push(action.payload);
        },
        status: (state, action) =>  {
            state.showFilteredProducts = action.payload;
        }
    },
});

export const { addProduct, addFilteredProducts, status } = productSlice.actions;

export default productSlice.reducer;