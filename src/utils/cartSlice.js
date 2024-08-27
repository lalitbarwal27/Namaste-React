import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addCartData: (state, action) => {
      console.log(action, "this is action");
      state.item.push(action.payload);
    },
    removerData: (state) => {
      state.item.pop();
    },
    clearCart: (state) => {
      state.item = [];
    },
  },
});

export const { addCartData, removerData, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
