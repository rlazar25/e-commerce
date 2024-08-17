import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        cartLoader: false,
        totalProduct: 0 
    },
    reducers:{
        addToCart: (state, action) => {
            // console.log(action.payload);
            let copyCart = [...state.cart];
            let findIndex = null;            

            copyCart.find((item, index) =>{
                if(item.id === action.payload.id){
                    findIndex = index
                    return;
                }
            })

            if(findIndex === null){
                copyCart.push({...action.payload, count: 1, totalPrice: action.payload.price})
                state.totalProduct++
            } else{
                copyCart[findIndex].count++
            }
            

            state.cart = copyCart
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;