import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

export const store = configureStore({
  reducer: { items: todoReducer },
});

export type RootState = ReturnType<typeof store.getState>;
