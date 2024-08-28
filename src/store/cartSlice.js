import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    cartLoader: false,
    totalProduct: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      let copyCart = [...state.cart];
      let findIndex = null;

      copyCart.find((item, index) => {
        if (item.id === action.payload.id) {
          return (findIndex = index);
        }
      });

      if (findIndex === null) {
        copyCart.push({
          ...action.payload,
          quantity: 1,
          totalProductPrice: action.payload.price,
        });
        state.totalProduct++;
      } else {
        if (copyCart[findIndex].quantity < copyCart[findIndex].stock) {
          copyCart[findIndex].quantity++;
        }
      }

      state.cart = copyCart;
    },
    removeFromCart: (state, action) => {
      let copyCart = [...state.cart];
      let findIndex = null;

      copyCart.find((item, index) => {
        if (item.id === action.payload.id) {
          return (findIndex = index);
        }
      });

      copyCart.splice(findIndex, 1);
      state.totalProduct--;

      state.cart = copyCart;
    },
    decreaseQuantityProduct: (state, action) => {
      let copyCart = [...state.cart];
      let findIndex = null;

      copyCart.find((item, index) => {
        if (item.id === action.payload.id) {
          return (findIndex = index);
        }
      });

      if (findIndex !== null && copyCart[findIndex].quantity > 1) {
        copyCart[findIndex].quantity--;
      }

      state.cart = copyCart;
    },
    increaseQuantityProduct: (state, action) => {
      let copyCart = [...state.cart];
      let findIndex = null;

      copyCart.find((item, index) => {
        if (item.id === action.payload.id) {
          return (findIndex = index);
        }
      });

      if (copyCart[findIndex].quantity < copyCart[findIndex].stock) {
        copyCart[findIndex].quantity++;
      }

      state.cart = copyCart;
    },
    clearCartAction: (state, action) => {
      state.cart = [];
      state.totalProduct = 0;
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  decreaseQuantityProduct,
  increaseQuantityProduct,
  clearCartAction
} = cartSlice.actions;
export default cartSlice.reducer;
