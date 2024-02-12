import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ItemType {
  id: number;
  name: string;
  checked: boolean;
}

const initialState: ItemType[] = [];

const todoSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ItemType>) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    changeTodo: (state, action: PayloadAction<ItemType>) => {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, checked: action.payload.checked, id: Date.now() }
          : todo,
      );
    },
  },
});

export const { addTodo, deleteTodo, changeTodo } = todoSlice.actions;
export default todoSlice.reducer;
