import { configureStore } from "@reduxjs/toolkit";
import productSlise from "../features/productSlise";

export const store = configureStore({
  reducer: {
    productsTodo: productSlise,
  },
});
