import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        allCategory: []
    },
    reducers: {
        saveAllCategoryAction: (state, action) => {
            console.log(action.payload);
            state.allCategory = action.payload;
        }
    }

});

export const {saveAllCategoryAction} = categorySlice.actions;
export default categorySlice.reducer;