import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if(!existingItem) {
                state.items.push(action.payload);
            } else {
                existingItem.quantity += 1;
            }
        },
        incrementQuantity:  (state, action) =>  {
            const item = state.items.find((item) => item.id === action.payload.id);
            item.quantity += 1;
        },
        decrementQuantity:  (state, action) =>  {
            const item = state.items.find((item) => item.id === action.payload.id);

            if(item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.items = state.items.filter((item) => item.id !== action.payload.id);
            }         
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;