import { configureStore } from "@reduxjs/toolkit";
// SLICES
import categorySlice from "./categorySlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import favoriteSlice from "./favoriteSlice";

const store = configureStore({
    reducer: {
        categoryStore: categorySlice,
        productStore: productSlice,
        cartStore: cartSlice,
        favoriteStore: favoriteSlice
    }
})

export default store;