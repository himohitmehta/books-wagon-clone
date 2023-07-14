import { createSlice } from "@reduxjs/toolkit";
import {
  handleAddToCart,
  handleReduceCartItem,
  handleRemoveCartItem,
} from "./cart.utils";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cartItems = handleAddToCart({
        prevCartItems: state.cartItems,
        nextCartItem: action.payload,
      });
    },
    reduceCartItem: (state, action) => {
      state.cartItems = handleReduceCartItem({
        prevCartItems: state.cartItems,
        cartItemToReduce: action.payload,
      });
    },

    removeCartItem: (state, action) => {
      state.cartItems = handleRemoveCartItem({
        prevCartItems: state.cartItems,
        cartItemToRemove: action.payload,
      });
    },
    clearCart: (state, action) => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, clearCart, reduceCartItem, removeCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
