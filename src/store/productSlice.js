import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProduct: [],
        productLoader: false
    },
    reducers:{
        saveAllProductAction: (state, action) => {
            state.allProduct = action.payload;
            state.productLoader = true;
        }
    }
})

export const {saveAllProductAction, productLoader} = productSlice.actions;
export default productSlice.reducer;