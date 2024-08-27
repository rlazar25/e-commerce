import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProduct: [],
        productLoader: false,
        selectCategory: '',
    },
    reducers:{
        saveAllProductAction: (state, action) => {
            state.allProduct = action.payload;
            state.productLoader = true;
        },
        saveSelectCategoryAction: (state, action) => {
            state.selectCategory = action.payload;
        }
    }
})

export const {saveAllProductAction, productLoader, saveSelectCategoryAction} = productSlice.actions;
export default productSlice.reducer;