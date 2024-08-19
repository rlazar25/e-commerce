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
                copyCart.push({...action.payload, quantity: 1, totalProductPrice: action.payload.price})
                state.totalProduct++
            } else{
                if(copyCart[findIndex].quantity < copyCart[findIndex].stock){
                    copyCart[findIndex].quantity++
                }
            }
            

            state.cart = copyCart
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;