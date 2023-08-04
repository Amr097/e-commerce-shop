import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "cart", id: 1, description: "cloth" };
export const cartSlice = createSlice({
  name: "cart",
  initialState: "hello",
  reducers: {},
});

//export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
