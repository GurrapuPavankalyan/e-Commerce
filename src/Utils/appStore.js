import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import cartReducer from './cartSlice';
import ProductsReducer from "./productSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        products: ProductsReducer,
    },
});

export default appStore;