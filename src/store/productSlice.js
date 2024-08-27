import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProduct: [],
        productLoader: false,
        selectCategory: '',
        searchProduct: ''
    },
    reducers:{
        saveAllProductAction: (state, action) => {
            state.allProduct = action.payload;
            state.productLoader = true;
        },
        saveSelectCategoryAction: (state, action) => {
            state.selectCategory = action.payload;
        },
        saveSearchProductAction: (state, action) => {
            state.searchProduct = action.payload;
        }
    }
})

export const {saveAllProductAction, productLoader, saveSelectCategoryAction, saveSearchProductAction} = productSlice.actions;
export default productSlice.reducer;