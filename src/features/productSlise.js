import { createSlice } from "@reduxjs/toolkit";

export const createSliceReduser = createSlice({
  name: "productsTodo",
  initialState: {
    product: [],
  },
  reducers: {
    addManyTodo(state, action) {
      state.product = [...state.product, ...action.payload];
    },
    removeTodo(state) {
      state.product.pop();
    },
    addTodo(state, action) {
      state.product.push(action.payload);
    },
  },
});

export default createSliceReduser.reducer;

export const { addManyTodo, removeTodo, addTodo } = createSliceReduser.actions;
