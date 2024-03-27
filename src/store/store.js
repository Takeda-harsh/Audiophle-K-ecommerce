import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/CartSlices.js";


const store = configureStore({
    reducer: {
        carts: cartReducer,
    }
});

export default store;
